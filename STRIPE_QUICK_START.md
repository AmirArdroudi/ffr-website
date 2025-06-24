# 🚀 Stripe Quick Start Guide

## Your Integration is Already Built! 

Your Fresh Face Roya app has a complete Stripe integration. Here's how to activate it:

## 🔧 Setup (5 minutes)

### 1. Get Your Stripe Keys
1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Switch to **Test Mode** (toggle in top-left)
3. Go to **Developers > API Keys**
4. Copy your **Secret Key** (starts with `sk_test_`)

### 2. Configure Webhook
1. Go to **Developers > Webhooks**
2. Click **Add endpoint**
3. URL: `https://your-project.supabase.co/functions/v1/stripe-webhook`
4. Select events: `checkout.session.completed`, `payment_intent.succeeded`
5. Copy the **Webhook Secret** (starts with `whsec_test_`)

### 3. Update Environment Variables
Add to your `.env` file:
```env
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_test_your_webhook_secret_here
```

## 🧪 Test It Out

### Test Cards
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Expiry**: Any future date (e.g., `12/34`)
- **CVC**: Any 3 digits (e.g., `123`)

### Test Flow
1. Start your dev server: `npm run dev`
2. Go to `/shop`
3. Click **"Buy Now"** on any mask
4. Sign up/login when prompted
5. Use test card `4242 4242 4242 4242`
6. Complete checkout
7. See success page!

## 💰 Your Products (Already Configured)

All hydro jelly masks at **C$35.00** each:
- ✨ Astaxanthin Crystal Mask
- 🥇 24K Gold Crystal Mask  
- 💜 Lavender Petals Mask
- 🌹 Rose Petals Mask
- 🌼 Chamomile Petals Mask
- 🌿 Spirulina Mask

## 🔄 How It Works

1. **User clicks "Buy Now"** → Creates Stripe checkout session
2. **User pays on Stripe** → Secure payment processing
3. **Stripe sends webhook** → Updates your database
4. **User sees success page** → Order complete!

## 📊 What Gets Tracked

- **Customer records** in `stripe_customers` table
- **Order history** in `stripe_orders` table
- **Payment status** and amounts
- **User authentication** links

## 🎯 You're Ready!

Your integration is **production-ready**. Just:
1. Add your Stripe keys
2. Configure the webhook
3. Test with test cards
4. Go live with real keys!

**Everything else is already built!** 🎉