import type { VercelRequest, VercelResponse } from '@vercel/node';

// Server-side source of truth for pricing — never trust an amount sent by the client,
// otherwise a visitor could submit any amount they want.
const BASE_PRICE_INR = 499;
const RECORDING_ADDON_PRICE_INR = 399;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keyId || !keySecret) {
    res.status(500).json({ error: 'Razorpay is not configured' });
    return;
  }

  const wantsRecording = req.body?.wantsRecording === true;
  const { fullName, email, phone } = req.body || {};
  const amountInr = BASE_PRICE_INR + (wantsRecording ? RECORDING_ADDON_PRICE_INR : 0);

  try {
    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + Buffer.from(`${keyId}:${keySecret}`).toString('base64'),
      },
      body: JSON.stringify({
        amount: amountInr * 100, // Razorpay expects paise
        currency: 'INR',
        // Razorpay copies order notes onto the resulting payment entity, so the
        // webhook (the authoritative record) can read the customer's name back
        // out — the payment entity itself only carries email/contact, not name.
        notes: {
          wantsRecording: String(wantsRecording),
          fullName: fullName || '',
          email: email || '',
          phone: phone || '',
        },
      }),
    });

    const order = await response.json();
    if (!response.ok) {
      res.status(response.status).json({ error: order?.error?.description || 'Failed to create order' });
      return;
    }

    res.status(200).json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create order' });
  }
}
