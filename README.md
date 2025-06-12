## FreshFaceRoya Landing page

### ✅ What's Already Working:
1. Complete Stripe integration with checkout sessions and webhooks
2. Database schema for customers, subscriptions, and orders
3. Authentication flow that creates Stripe customers automatically
4. Buy Now buttons on product cards and detail pages
5. Checkout success page handling




### 🔧 What You Need to Configure:
1. Create Products in Stripe Dashboard:

- Go to your Stripe Dashboard → Products
- Create a product for each item in your catalog
- Copy the Price ID for each product
2. Update the stripe-config.ts file:

- Replace the placeholder price_1234567890 values with your actual Stripe Price IDs
- The file is already mapped to your existing products
3. Set Environment Variables:

- STRIPE_SECRET_KEY - Your Stripe secret key
- STRIPE_WEBHOOK_SECRET - For webhook verification
- VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY - Already configured
### 🛒 How It Works:
- **"Buy Now" buttons** redirect to Stripe Checkout for individual products
- **Cart functionality** still works for browsing, but checkout redirects to individual product purchases
- **User authentication** is required for purchases
- **Order tracking** is automatically saved to your database
- **Webhook handling** updates order status and customer data
### 📝 To Add Your Products:
1. In Stripe Dashboard, create products with these names:

- Luminous Glow Serum ($48)
- Gentle Cleansing Foam ($32)
- Renewing Night Cream ($56)
- Radiance Face Mask ($38)
- Daily Defense SPF 40 ($42)
- Hydrating Essence Toner ($34)
2. Copy each Price ID and update the stripe-config.ts file

## Deployment with Caddy

### 1. Install Caddy

You can install Caddy by following the official documentation for your operating system. Here are some common examples:

**Debian, Ubuntu, Raspbian:**

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

**Fedora, CentOS, RHEL:**

```bash
sudo dnf install 'dnf-command(copr)'
sudo dnf copr enable @caddy/caddy
sudo dnf install caddy
```

For other operating systems or more detailed instructions, please refer to the [official Caddy installation guide](https://caddyserver.com/docs/install).

### 2. Build Your React Application

Navigate to your project's root directory and run the build command:

```bash
npm run build
```

This command will compile your React application and create a `dist` folder in your project root. This folder contains the static assets that will be served by Caddy.

### 3. Configure Caddy

Caddy is configured using a file named `Caddyfile`. Create this file in `/etc/caddy/Caddyfile` or a location of your choice (if you are not running Caddy as a service).

Here's a basic Caddyfile configuration to serve your React app:

```
your-domain.com {
    # Set this path to your site's directory.
    root * /path/to/your/project/dist

    # Enable the static file server.
    file_server

    # Handle routing for single-page applications (SPAs)
    # This ensures that all routes are directed to index.html
    try_files {path} /index.html
}
```

**Explanation:**

*   `your-domain.com`: Replace this with your actual domain name. If you don't have a domain name yet, you can use `localhost` for local testing.
*   `root * /path/to/your/project/dist`: Replace `/path/to/your/project/dist` with the absolute path to the `dist` folder created in the previous step.
*   `file_server`: Enables Caddy's static file server.
*   `try_files {path} /index.html`: This directive is important for SPAs like React. It ensures that if a requested file is not found, Caddy serves `index.html` instead. This allows your React router to handle the different paths.

**Reload Caddy:**

After creating or modifying your Caddyfile, you need to reload Caddy for the changes to take effect.

If you installed Caddy as a service (common with package managers):

```bash
sudo systemctl reload caddy
```

If you are running Caddy directly from the command line, you can stop and restart it, or use the `caddy reload` command if you are managing it via its API.

### 4. Automatic HTTPS

Caddy automatically enables HTTPS for your site if it's publicly accessible and its DNS records (A/AAAA) point to the server Caddy is running on.

*   **Ensure your domain's DNS A and/or AAAA records are correctly pointing to your server's IP address.**
*   When Caddy starts or reloads with a valid domain name in the Caddyfile, it will automatically procure and renew SSL/TLS certificates from Let's Encrypt (or ZeroSSL).

If you are testing locally or on a server that is not yet publicly accessible with a proper domain, Caddy will use self-signed certificates, which might cause browser warnings. For production, always use a real domain name.

### 5. Verify Setup

After Caddy is running and configured:

1.  Open your web browser and navigate to `http://your-domain.com` (if testing locally without HTTPS or if Caddy hasn't yet obtained a certificate) or `https://your-domain.com` (if Caddy has enabled HTTPS).
2.  You should see your React application running.
3.  Check the browser's security indicators to ensure the HTTPS connection is secure (if applicable).

If you encounter issues, check the Caddy logs for errors. The location of the logs can vary depending on how you installed and run Caddy. If running as a service with `systemd`, you can usually view logs with:
`sudo journalctl -u caddy --no-pager | less +G`
