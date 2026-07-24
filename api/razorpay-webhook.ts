import type { VercelRequest, VercelResponse } from '@vercel/node';
import crypto from 'crypto';

// Razorpay signs the raw request body, so automatic JSON body-parsing must be
// disabled here — verifying against a re-serialized/parsed body would produce
// a different signature and always fail.
export const config = {
  api: {
    bodyParser: false,
  },
};

const WEBHOOK_URL = 'https://n8n.srv816930.hstgr.cloud/webhook/enroll-course';

const readRawBody = (req: VercelRequest): Promise<string> =>
  new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; });
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!webhookSecret) {
    res.status(500).json({ error: 'Webhook secret not configured' });
    return;
  }

  const rawBody = await readRawBody(req);
  const signature = req.headers['x-razorpay-signature'];

  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(rawBody)
    .digest('hex');

  if (typeof signature !== 'string' || signature !== expectedSignature) {
    res.status(400).json({ error: 'Invalid signature' });
    return;
  }

  const event = JSON.parse(rawBody);

  // This webhook (configured in the Razorpay Dashboard, authoritative and
  // server-to-server) is the single source of truth for recording a paid
  // booking — unlike the client-triggered /api/verify-payment call, it still
  // fires even if the customer closes the tab right after paying.
  if (event.event === 'payment.captured') {
    const payment = event.payload?.payment?.entity;
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          submittedAt: new Date().toISOString(),
          course: 'Private Session Masterclass',
          email: payment?.email,
          phone: payment?.contact,
          totalAmount: payment?.amount ? payment.amount / 100 : undefined,
          razorpayOrderId: payment?.order_id,
          razorpayPaymentId: payment?.id,
          paymentStatus: 'captured',
          source: 'razorpay-webhook',
        }),
      });
    } catch (err) {
      console.error('Failed to forward captured payment to booking webhook', err);
    }
  }

  res.status(200).json({ received: true });
}
