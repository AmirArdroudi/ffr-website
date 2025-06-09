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
The file is already mapped to your existing products
Set Environment Variables:

STRIPE_SECRET_KEY - Your Stripe secret key
STRIPE_WEBHOOK_SECRET - For webhook verification
VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY - Already configured
### 🛒 How It Works:
"Buy Now" buttons redirect to Stripe Checkout for individual products
Cart functionality still works for browsing, but checkout redirects to individual product purchases
User authentication is required for purchases
Order tracking is automatically saved to your database
Webhook handling updates order status and customer data
### 📝 To Add Your Products:
In Stripe Dashboard, create products with these names:

Luminous Glow Serum ($48)
Gentle Cleansing Foam ($32)
Renewing Night Cream ($56)
Radiance Face Mask ($38)
Daily Defense SPF 40 ($42)
Hydrating Essence Toner ($34)
Copy each Price ID and update the stripe-config.ts file
