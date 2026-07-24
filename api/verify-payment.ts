import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

// This only confirms the payment signature so the browser can show an
// immediate success state. The Razorpay webhook (api/razorpay-webhook.ts,
// configured in the Razorpay Dashboard) is the authoritative record of a
// paid booking and the only place that notifies the booking webhook — it
// still fires even if the customer closes the tab right after paying,
// which this client-triggered call cannot guarantee.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) {
    res.status(500).json({ error: 'Razorpay is not configured' });
    return;
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body || {};

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    res.status(400).json({ error: 'Missing payment details' });
    return;
  }

  const expectedSignature = crypto
    .createHmac('sha256', keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');

  if (expectedSignature !== razorpay_signature) {
    res.status(400).json({ error: 'Payment verification failed' });
    return;
  }

  res.status(200).json({ verified: true });
}
