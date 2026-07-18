#!/bin/bash
# ============================================================
# FUSEN 网站部署脚本
# 服务器: 阿里云轻量应用服务器 (47.82.208.12)
# 域名: fusenco.com
# ============================================================
set -e

echo "=========================================="
echo "  FUSEN 网站部署脚本"
echo "=========================================="

# --- 配置 ---
WEB_ROOT="/var/www/fusenco"
NGINX_CONF="/etc/nginx/conf.d/fusenco.conf"
BACKUP_DIR="/var/www/fusenco-backup-$(date +%Y%m%d_%H%M%S)"

# --- 检查 Nginx 是否安装 ---
if ! command -v nginx &> /dev/null; then
    echo "[1/6] 安装 Nginx..."
    apt-get update -qq && apt-get install -y -qq nginx
else
    echo "[1/6] Nginx 已安装，跳过"
fi

# --- 创建网站目录 ---
echo "[2/6] 创建网站目录..."
mkdir -p "${WEB_ROOT}"

# --- 备份旧文件（如果存在）---
if [ -d "${WEB_ROOT}" ] && [ "$(ls -A ${WEB_ROOT} 2>/dev/null)" ]; then
    echo "[3/6] 备份旧文件到 ${BACKUP_DIR}..."
    mkdir -p "${BACKUP_DIR}"
    cp -r "${WEB_ROOT}"/* "${BACKUP_DIR}/" 2>/dev/null || true
else
    echo "[3/6] 无旧文件需要备份"
fi

# --- 部署新文件 ---
echo "[4/6] 部署网站文件..."
# 清空旧文件
rm -rf "${WEB_ROOT}"/*
# 如果部署包在同目录下，解压；否则提示手动上传
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
if [ -f "${SCRIPT_DIR}/fusenco-deploy.tar.gz" ]; then
    tar xzf "${SCRIPT_DIR}/fusenco-deploy.tar.gz" -C "${WEB_ROOT}"
    echo "  -> 文件已从 fusenco-deploy.tar.gz 解压到 ${WEB_ROOT}"
else
    echo "  -> 未找到 fusenco-deploy.tar.gz"
    echo "  -> 请先上传部署包到服务器，再运行此脚本"
    exit 1
fi

# 设置权限
chown -R www-data:www-data "${WEB_ROOT}"
chmod -R 755 "${WEB_ROOT}"

# --- 配置 Nginx ---
echo "[5/6] 配置 Nginx..."
cat > "${NGINX_CONF}" << 'NGINXEOF'
server {
    listen 80;
    listen [::]:80;
    server_name fusenco.com www.fusenco.com;

    root /var/www/fusenco;
    index index.html;

    # gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;

    # 静态资源缓存
    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 图片缓存
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }

    # 主路由 - Next.js 静态导出
    location / {
        try_files $uri $uri/ $uri.html /index.html;
    }

    # robots.txt
    location = /robots.txt {
        try_files $uri =404;
    }

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
NGINXEOF

echo "  -> Nginx 配置已写入 ${NGINX_CONF}"

# 禁用默认站点（如果存在）
if [ -f /etc/nginx/sites-enabled/default ]; then
    rm -f /etc/nginx/sites-enabled/default
    echo "  -> 已禁用默认站点"
fi

# 测试 Nginx 配置
nginx -t
echo "  -> Nginx 配置测试通过"

# 重载 Nginx
systemctl reload nginx
echo "  -> Nginx 已重载"

# --- 完成 ---
echo "[6/6] 部署完成!"
echo ""
echo "=========================================="
echo "  部署摘要"
echo "=========================================="
echo "  网站目录: ${WEB_ROOT}"
echo "  Nginx 配置: ${NGINX_CONF}"
echo "  备份目录: ${BACKUP_DIR}"
echo ""
echo "  下一步:"
echo "  1. 在 Namecheap 配置 DNS A 记录:"
echo "     @  -> 47.82.208.12"
echo "     www -> 47.82.208.12"
echo "  2. 配置 SSL 证书 (运行 ./deploy-ssl.sh)"
echo "  3. 访问 http://fusenco.com 验证"
echo "=========================================="
