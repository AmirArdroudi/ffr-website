# 🧪 Stripe Payment Testing Guide

## Step 1: Verify Your Test Environment

### Check Your Environment Variables
Make sure your `.env` file contains test keys (they should start with `sk_test_` and `whsec_test_`):

```env
STRIPE_SECRET_KEY=sk_test_...  # Your test secret key
STRIPE_WEBHOOK_SECRET=whsec_test_...  # Your test webhook secret
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Step 2: Test Card Numbers

### ✅ Successful Payment Cards
- **Visa**: `4242 4242 4242 4242`
- **Visa (debit)**: `4000 0566 5566 5556`
- **Mastercard**: `5555 5555 5555 4444`
- **American Express**: `3782 822463 10005`

### ❌ Declined Payment Cards (for testing failures)
- **Generic decline**: `4000 0000 0000 0002`
- **Insufficient funds**: `4000 0000 0000 9995`
- **Lost card**: `4000 0000 0000 9987`
- **Expired card**: `4000 0000 0000 0069`

### 📝 For All Test Cards
- **Expiry**: Any future date (e.g., `12/34`)
- **CVC**: Any 3-4 digits (e.g., `123`)
- **ZIP**: Any 5 digits (e.g., `12345`)

## Step 3: Testing Workflow

### 1. Start Your Development Server
```bash
npm run dev
```

### 2. Test User Authentication
1. Go to `/signup` and create a test account
2. Or go to `/login` and sign in with existing credentials

### 3. Test Product Purchase Flow
1. Navigate to `/shop`
2. Click "Buy Now" on any product (e.g., Astaxanthin Crystal Mask - C$35)
3. You should be redirected to Stripe Checkout
4. Use test card: `4242 4242 4242 4242`
5. Complete the checkout form
6. Verify redirect to success page

### 4. Test Different Scenarios

#### ✅ Successful Purchase Test
- Card: `4242 4242 4242 4242`
- Expected: Successful payment, redirect to `/checkout/success`

#### ❌ Declined Payment Test
- Card: `4000 0000 0000 0002`
- Expected: Payment declined, error message shown

#### 🔒 Unauthenticated User Test
- Log out and try to buy a product
- Expected: Redirect to `/login`

## Step 4: Verify Results

### In Stripe Dashboard
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/test/payments)
2. Ensure you're in **Test Mode** (toggle in top-left)
3. Check **Payments** section for test transactions
4. Verify webhook events in **Developers > Webhooks**

### In Your Database (Supabase)
1. Check `stripe_customers` table for new customer records
2. Check `stripe_orders` table for completed orders
3. Verify user authentication is working

### In Your Application
1. Success page loads correctly
2. User remains authenticated
3. No console errors during checkout

## Step 5: Common Issues & Solutions

### Issue: "Product not available for purchase"
**Solution**: Check that your product IDs match between `products.ts` and `stripe-config.ts`

### Issue: Webhook not receiving events
**Solution**: 
1. Check webhook URL in Stripe Dashboard
2. Verify `STRIPE_WEBHOOK_SECRET` is correct
3. Check Supabase function logs

### Issue: Authentication errors
**Solution**:
1. Verify Supabase connection
2. Check user session in browser dev tools
3. Ensure `.env` variables are loaded

### Issue: Checkout session creation fails
**Solution**:
1. Verify Stripe secret key is correct
2. Check network tab for API errors
3. Ensure price IDs exist in Stripe

## Step 6: Test Checklist

- [ ] User can sign up/login successfully
- [ ] "Buy Now" button redirects to Stripe Checkout
- [ ] Successful payment with `4242 4242 4242 4242`
- [ ] Declined payment with `4000 0000 0000 0002`
- [ ] Unauthenticated user redirected to login
- [ ] Success page displays after payment
- [ ] Order appears in Stripe Dashboard
- [ ] Webhook processes payment correctly
- [ ] Database records created properly

## Your Current Product Setup

Your products are configured with these Stripe Price IDs:
1. **Astaxanthin Crystal Mask**: `price_1RWNi9PRm6MXXi3NQhbOK8lB`
2. **24K Gold Crystal Mask**: `price_1RWNfTPRm6MXXi3Ni16KN0LO`
3. **Lavender Petals Mask**: `price_1RWNdGPRm6MXXi3N4y7IWW4a`
4. **Rose Petals Mask**: `price_1RWNa8PRm6MXXi3NdRQs1LWG`
5. **Chamomile Petals Mask**: `price_1RWN9sPRm6MXXi3NDrwaEB4p`
6. **Spirulina Mask**: `price_1RWN7vPRm6MXXi3NYtMTwxPU`

All products are priced at C$35.00 in payment mode.

## Need Help?

If you encounter any issues during testing, check:
1. Browser console for JavaScript errors
2. Network tab for failed API requests
3. Stripe Dashboard for payment status
4. Supabase logs for webhook processing

Remember: Test mode data is completely separate from live data and won't affect real customers or charges.