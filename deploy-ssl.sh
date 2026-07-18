#!/bin/bash
# ============================================================
# FUSEN SSL 证书配置脚本 (Let's Encrypt 免费证书)
# ============================================================
set -e

echo "=========================================="
echo "  FUSEN SSL 证书配置"
echo "=========================================="

DOMAIN="fusenco.com"
NGINX_CONF="/etc/nginx/conf.d/fusenco.conf"

# --- 检查 Certbot ---
if ! command -v certbot &> /dev/null; then
    echo "[1/4] 安装 Certbot..."
    apt-get update -qq
    apt-get install -y -qq certbot python3-certbot-nginx
else
    echo "[1/4] Certbot 已安装"
fi

# --- 检查 DNS 是否已生效 ---
echo "[2/4] 检查 DNS 解析..."
SERVER_IP="47.82.208.12"
RESOLVED_IP=$(dig +short ${DOMAIN} 2>/dev/null || echo "")

if [ -z "${RESOLVED_IP}" ]; then
    echo "  ⚠ 无法解析 ${DOMAIN}"
    echo "  请先在 Namecheap 配置 DNS A 记录:"
    echo "    @  -> ${SERVER_IP}"
    echo "    www -> ${SERVER_IP}"
    echo "  DNS 生效后再运行此脚本"
    exit 1
fi

if [ "${RESOLVED_IP}" != "${SERVER_IP}" ]; then
    echo "  ⚠ DNS 解析到 ${RESOLVED_IP}，与服务器 IP ${SERVER_IP} 不一致"
    echo "  请检查 DNS 配置是否正确"
    exit 1
fi

echo "  -> DNS 解析正常: ${DOMAIN} -> ${RESOLVED_IP}"

# --- 申请 SSL 证书 ---
echo "[3/4] 申请 SSL 证书..."
certbot --nginx \
    -d ${DOMAIN} \
    -d www.${DOMAIN} \
    --non-interactive \
    --agree-tos \
    --register-unsafely-without-email \
    --redirect

echo "  -> SSL 证书已安装"

# --- 设置自动续期 ---
echo "[4/4] 配置自动续期..."
# Certbot 安装时已自动创建 systemd timer，确认即可
systemctl status certbot.timer 2>/dev/null || echo "  -> 自动续期已由 certbot timer 管理"

echo ""
echo "=========================================="
echo "  SSL 配置完成!"
echo "=========================================="
echo "  网站现在可以通过 HTTPS 访问:"
echo "  https://fusenco.com"
echo "=========================================="
