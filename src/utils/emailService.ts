import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export interface EmailSubscriber {
  email: string;
  source?: string;
  offer_claimed?: boolean;
  user_id?: string;
}

export const subscribeEmail = async (subscriberData: EmailSubscriber) => {
  try {
    const { data, error } = await supabase
      .from('email_subscribers')
      .insert([{
        email: subscriberData.email,
        source: subscriberData.source || 'offer_modal',
        offer_claimed: subscriberData.offer_claimed || false,
        user_id: subscriberData.user_id || null
      }])
      .select()
      .single();

    if (error) {
      // If it's a unique constraint error (email already exists), update instead
      if (error.code === '23505') {
        const { data: updateData, error: updateError } = await supabase
          .from('email_subscribers')
          .update({
            offer_claimed: subscriberData.offer_claimed || false,
            updated_at: new Date().toISOString()
          })
          .eq('email', subscriberData.email)
          .select()
          .single();

        if (updateError) {
          throw updateError;
        }
        return updateData;
      }
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error subscribing email:', error);
    throw error;
  }
};

export const checkEmailSubscription = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from('email_subscribers')
      .select('*')
      .eq('email', email)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 is "not found"
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error checking email subscription:', error);
    return null;
  }
};

export const getSubscriberStats = async () => {
  try {
    const { count, error } = await supabase
      .from('email_subscribers')
      .select('*', { count: 'exact', head: true });

    if (error) {
      throw error;
    }

    const { count: offerClaimedCount, error: offerError } = await supabase
      .from('email_subscribers')
      .select('*', { count: 'exact', head: true })
      .eq('offer_claimed', true);

    if (offerError) {
      throw offerError;
    }

    return {
      totalSubscribers: count || 0,
      offerClaimed: offerClaimedCount || 0
    };
  } catch (error) {
    console.error('Error getting subscriber stats:', error);
    return {
      totalSubscribers: 0,
      offerClaimed: 0
    };
  }
};