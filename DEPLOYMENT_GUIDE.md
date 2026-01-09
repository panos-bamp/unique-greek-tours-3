# Deployment Guide - Static Export

## For Your Own Server (Apache/Nginx/cPanel)

### Step 1: Build Static Files

```bash
cd c:\unique-greek-tours 2
npm run build
```

This creates an `out/` folder with all static HTML/CSS/JS files.

### Step 2: Upload Files

Upload the **entire contents** of the `out/` folder to your web server:

**Via FTP/SFTP:**
- Connect to your server
- Navigate to your public directory (e.g., `/public_html/` or `/var/www/html/`)
- Upload everything from the `out/` folder

**Via cPanel File Manager:**
1. Zip the `out/` folder on your computer
2. Upload the ZIP to cPanel
3. Extract it in your public directory

### Step 3: Done!

Your site is live at your domain: `https://yourdomain.com`

## File Structure After Build

```
out/
├── index.html                    (Homepage)
├── about/
│   └── index.html               (About page)
├── contact/
│   └── index.html               (Contact page)
├── tours/
│   └── index.html               (Tours page)
├── transfers/
│   └── index.html               (Transfers page)
├── terms/
│   └── index.html               (Terms page)
├── privacy/
│   └── index.html               (Privacy page)
├── _next/                        (CSS, JavaScript)
├── images/                       (All your images)
└── ...
```

## Requirements

✅ **Any web server** (Apache, Nginx, IIS, cPanel)
✅ **No Node.js required** on server
✅ **No special configuration** needed
✅ **Works like any HTML website**

## Server Configuration (Optional)

### Apache (.htaccess)

Create `.htaccess` in your public directory:

```apache
# Redirect to HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove .html extension
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^\.]+)$ $1.html [NC,L]
```

### Nginx

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/ =404;
    }
}
```

## Updating Your Site

When you make changes:

1. Edit files locally
2. Run `npm run build`
3. Upload new `out/` folder contents
4. Done!

## Troubleshooting

**Images not loading:**
- Make sure you uploaded the `images/` folder from `out/`

**404 errors:**
- Check that your server's document root points to the right directory
- Verify all files from `out/` were uploaded

**CSS not applied:**
- Upload the `_next/` folder from `out/`
- Clear browser cache

---

Your static website is now ready for any hosting provider! 🚀
