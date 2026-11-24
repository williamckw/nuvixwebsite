NUVIX STATIC WEBSITE - DEPLOYMENT

Upload only the contents of this folder to your website root, for example:
/www/wwwroot/nuvix.com.my/

Do not upload old static website/ copy-paste files, ZIP files, PSD/source files, backups, SQL files, or README files to the public web root.

Recommended public files:
- index.html and other .html pages
- assets/ folder
- favicon.svg, favicon.ico, favicon PNG files
- .htaccess if your hosting uses Apache/LiteSpeed

For aaPanel Nginx:
1. Upload files to /www/wwwroot/nuvix.com.my/
2. Open Website > nuvix.com.my > Config
3. Make sure autoindex is off
4. Add the rules from NGINX-CONFIG-SNIPPET.txt inside the server block if needed
5. Reload Nginx

Important:
Front-end HTML/CSS/JS/images are always visible to browsers. You cannot fully hide them on a static website. This package prevents folder listing and blocks private/source/archive files, but the rendered page source and public assets can still be viewed by visitors.


LOGO FILE
Place your real Nuvix logo at: assets/images/nuvix-logo.png
Use PNG transparent background if possible. Recommended size: 420px wide x 110px high or similar ratio. Replace the placeholder file using the exact same filename.

UPDATED FIXES
- Removed vertical Digital Solutions side text from homepage.
- Footer padding/margin fixed.
- Header/footer logo now uses assets/images/nuvix-logo.png instead of the old WordPress upload path.
- Contact buttons link to WhatsApp or email.
