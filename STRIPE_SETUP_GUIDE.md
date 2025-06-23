# 🚀 Stripe Integration Setup Guide

Your Fresh Face Roya app already has a complete Stripe integration! Here's how to finish the setup:

## ✅ What's Already Implemented

### 1. Database Schema
- `stripe_customers` - Links Supabase users to Stripe customers
- `stripe_subscriptions` - Manages subscription data
- `stripe_orders` - Stores completed orders
- Custom views for secure user data access

### 2. Supabase Edge Functions
- **stripe-checkout** - Creates Stripe checkout sessions
- **stripe-webhook** - Processes Stripe webhook events

### 3. Frontend Components
- Buy Now buttons on all product pages
- Stripe checkout integration with `useStripeCheckout` hook
- Success page handling after payment
- User authentication required for purchases

### 4. Product Configuration
All 6 hydro jelly masks are configured with Stripe price IDs:
- Astaxanthin Crystal Mask - C$35.00
- 24K Gold Crystal Mask - C$35.00  
- Lavender Petals Mask - C$35.00
- Rose Petals Mask - C$35.00
- Chamomile Petals Mask - C$35.00
- Spirulina Mask - C$35.00

## 🔧 Setup Steps

### Step 1: Configure Environment Variables
Update your `.env` file with your actual Stripe keys:

```env
# Get these from your Stripe Dashboard
STRIPE_SECRET_KEY=sk_test_... # Your test secret key
STRIPE_WEBHOOK_SECRET=whsec_test_... # Your webhook secret
```

### Step 2: Configure Stripe Webhook
1. Go to [Stripe Dashboard > Webhooks](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Set URL to: `https://your-project.supabase.co/functions/v1/stripe-webhook`
4. Select these events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
5. Copy the webhook secret to your `.env` file

### Step 3: Verify Products in Stripe
Ensure these products exist in your Stripe Dashboard with the correct price IDs:
- `price_1RWNi9PRm6MXXi3NQhbOK8lB` - Astaxanthin Crystal Mask
- `price_1RWNfTPRm6MXXi3Ni16KN0LO` - 24K Gold Crystal Mask
- `price_1RWNdGPRm6MXXi3N4y7IWW4a` - Lavender Petals Mask
- `price_1RWNa8PRm6MXXi3NdRQs1LWG` - Rose Petals Mask
- `price_1RWN9sPRm6MXXi3NDrwaEB4p` - Chamomile Petals Mask
- `price_1RWN7vPRm6MXXi3NYtMTwxPU` - Spirulina Mask

## 🧪 Testing

### Test Cards (Stripe Test Mode)
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Expiry**: Any future date (e.g., `12/34`)
- **CVC**: Any 3 digits (e.g., `123`)

### Test Flow
1. Sign up/login to your app
2. Go to `/shop`
3. Click "Buy Now" on any product
4. Complete checkout with test card
5. Verify redirect to success page
6. Check Stripe Dashboard for payment
7. Check Supabase database for order record

## 🔄 How It Works

1. **User Authentication**: Required before purchase
2. **Stripe Customer Creation**: Automatic on first purchase
3. **Checkout Session**: Created via Edge Function
4. **Payment Processing**: Handled by Stripe
5. **Webhook Processing**: Updates database with order info
6. **Success Redirect**: User sees confirmation

## 📊 Database Tables

### stripe_customers
- Links Supabase users to Stripe customer IDs
- Created automatically on first purchase

### stripe_orders  
- Stores completed purchase information
- Populated by webhook after successful payment

### stripe_subscriptions
- Ready for future subscription products
- Currently used for customer management

## 🚨 Important Notes

- **Test Mode**: Use test keys for development
- **Live Mode**: Switch to live keys for production
- **Webhook Security**: Webhook secret validates requests
- **User Auth**: All purchases require authentication
- **Professional Size**: All masks are 680g professional size

## 🎯 Next Steps

1. Add your Stripe keys to `.env`
2. Configure webhook endpoint
3. Test with test cards
4. Deploy to production with live keys

Your Stripe integration is production-ready! 🎉