/*
  # Email Subscribers Table

  1. New Tables
    - `email_subscribers`
      - `id` (bigint, primary key)
      - `email` (text, unique, not null)
      - `source` (text) - where the email was collected from
      - `subscribed_at` (timestamp)
      - `offer_claimed` (boolean) - if they claimed the 20% offer
      - `user_id` (uuid, nullable) - link to auth.users if they sign up later

  2. Security
    - Enable RLS on the table
    - Allow authenticated users to insert their own email
    - Allow public inserts for the offer modal (anonymous users)
*/

CREATE TABLE IF NOT EXISTS email_subscribers (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  email text UNIQUE NOT NULL,
  source text DEFAULT 'offer_modal',
  subscribed_at timestamp with time zone DEFAULT now(),
  offer_claimed boolean DEFAULT false,
  user_id uuid REFERENCES auth.users(id) DEFAULT NULL,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert emails (for the offer modal)
CREATE POLICY "Anyone can subscribe with email"
  ON email_subscribers
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users to view their own subscription
CREATE POLICY "Users can view their own subscription"
  ON email_subscribers
  FOR SELECT
  TO authenticated
  USING (user_id = auth.uid() OR email = (SELECT email FROM auth.users WHERE id = auth.uid()));

-- Allow authenticated users to update their own subscription
CREATE POLICY "Users can update their own subscription"
  ON email_subscribers
  FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid() OR email = (SELECT email FROM auth.users WHERE id = auth.uid()));