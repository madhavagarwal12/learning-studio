
import React, { useEffect, useState } from 'react';
import { useCountdown } from './useCountdown';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const RAZORPAY_SCRIPT_SRC = 'https://checkout.razorpay.com/v1/checkout.js';
const ORIGINAL_PRICE = 999;
const BASE_PRICE = 499;
const RECORDING_ADDON_PRICE = 399;
const OFFER_CODE = 'uwpxkowyzpqx';

const loadRazorpayScript = () =>
  new Promise<boolean>(resolve => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }
    const script = document.createElement('script');
    script.src = RAZORPAY_SCRIPT_SRC;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '' });
  const [wantsRecording, setWantsRecording] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const offerTimer = useCountdown(10 * 60);

  useEffect(() => {
    if (isOpen) loadRazorpayScript();
  }, [isOpen]);

  if (!isOpen) return null;

  const total = BASE_PRICE + (wantsRecording ? RECORDING_ADDON_PRICE : 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const scriptReady = await loadRazorpayScript();
    if (!scriptReady) {
      setStatus('error');
      return;
    }

    try {
      const orderRes = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ wantsRecording, ...formData }),
      });
      const order = await orderRes.json();
      if (!orderRes.ok) {
        setStatus('error');
        return;
      }

      const razorpay = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.orderId,
        name: 'Learning Studio',
        description: 'Private Session Masterclass',
        prefill: {
          name: formData.fullName,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: '#C8FF32' },
        handler: async (paymentResponse: any) => {
          try {
            const verifyRes = await fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                ...paymentResponse,
                ...formData,
                wantsRecording,
              }),
            });
            setStatus(verifyRes.ok ? 'success' : 'error');
          } catch {
            setStatus('error');
          }
        },
        modal: {
          ondismiss: () => setStatus('idle'),
        },
      });

      razorpay.on('payment.failed', () => setStatus('error'));
      razorpay.open();
    } catch {
      setStatus('error');
    }
  };

  const handleClose = () => {
    onClose();
    setStatus('idle');
    setFormData({ fullName: '', email: '', phone: '' });
    setWantsRecording(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#08090C]/80 backdrop-blur-sm" onClick={handleClose} />

      <div className="relative z-10 w-full max-w-[560px] bg-[#13151D] border border-[#2A2D40] flex flex-col max-h-[90vh] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 md:px-8 py-6 border-b border-[#2A2D40] bg-[#13151D]/95 backdrop-blur-md z-10">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#C8FF32] uppercase">Book Your Seat</span>
            <h2 className="font-['Instrument_Serif'] italic text-3xl text-white">Build With Me</h2>
          </div>
          <button
            onClick={handleClose}
            aria-label="Close"
            className="w-10 h-10 flex items-center justify-center border border-[#2A2D40] text-white hover:bg-white/5 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {status === 'success' ? (
          <div className="p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-[#C8FF32] flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-2xl text-[#08090C]">check</span>
            </div>
            <h3 className="font-['Instrument_Serif'] italic text-2xl text-white mb-3">Payment Received — Seat Booked!</h3>
            <p className="text-[#A1A1A1] text-sm mb-8 max-w-sm mx-auto leading-relaxed">
              A confirmation with session details is on its way to <span className="text-white">{formData.email}</span>.
            </p>
            <button
              onClick={handleClose}
              className="text-[#C8FF32] font-bold text-sm underline underline-offset-4 hover:opacity-80 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6 space-y-8">
              <p className="text-[#A1A1A1] italic text-sm">2-Hour LIVE AI Website &amp; Dashboard Workshop. No upsells. No BS.</p>

              {/* Special offer banner */}
              <div className="bg-[#337418]/10 border border-[#C8FF32]/30 p-4 flex gap-4 items-start">
                <span className="material-symbols-outlined text-[#C8FF32]">celebration</span>
                <div className="space-y-1">
                  <p className="font-bold text-white text-sm">You just unlocked a special offer!</p>
                  <p className="text-xs text-[#A1A1A1]">Exclusive price applied just for you with code <span className="text-[#C8FF32] font-mono">{OFFER_CODE}</span></p>
                </div>
              </div>

              {/* Event details */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2A2D40] border border-[#2A2D40] overflow-hidden">
                <div className="bg-[#08090C] p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#C8FF32] text-sm">calendar_today</span>
                  <span className="text-xs font-bold text-white">Sunday, 26th July 2026</span>
                </div>
                <div className="bg-[#08090C] p-4 flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#C8FF32] text-sm">schedule</span>
                  <span className="text-xs font-bold text-white">11:00 AM – 2:00 PM IST</span>
                </div>
                <div className="bg-[#08090C] p-4 flex items-center gap-3 md:col-span-2">
                  <span className="material-symbols-outlined text-[#C8FF32] text-sm">videocam</span>
                  <span className="text-xs font-bold text-white uppercase tracking-widest">Google Meet</span>
                </div>
              </section>

              {/* Urgency timer */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#FF4545]/10 border border-[#FF4545]/20">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#FF4545] text-sm">hourglass_empty</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF4545]">Offer may end in:</span>
                </div>
                <span className="text-lg font-mono font-bold text-[#FF4545]">{offerTimer}</span>
              </div>

              {/* Price */}
              <section className="space-y-3">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#C8FF32] tracking-[0.2em] uppercase">Special Price Unlocked!</span>
                    <div className="flex items-center gap-3">
                      <span className="text-lg text-[#A1A1A1] line-through">₹{ORIGINAL_PRICE}</span>
                      <span className="bg-[#FF4545] text-white px-2 py-0.5 text-[10px] font-bold">50% OFF</span>
                    </div>
                  </div>
                  <span className="font-['Instrument_Serif'] italic text-5xl text-[#C8FF32]">₹{BASE_PRICE}</span>
                </div>
                {wantsRecording && (
                  <div className="flex justify-between items-center text-sm text-[#A1A1A1] pt-3 border-t border-[#2A2D40]">
                    <span>+ Session Recording add-on</span>
                    <span className="text-white font-bold">₹{RECORDING_ADDON_PRICE}</span>
                  </div>
                )}
                <div className="flex justify-between items-center pt-3 border-t border-[#2A2D40]">
                  <span className="text-sm font-bold uppercase tracking-widest text-white">Total</span>
                  <span className="text-2xl font-bold text-[#C8FF32]">₹{total}</span>
                </div>
                <div className="flex items-center justify-between text-xs py-3 border-y border-[#2A2D40]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#C8FF32] text-sm">sell</span>
                    <span className="text-[#A1A1A1]"><span className="text-[#C8FF32] font-mono">{OFFER_CODE}</span> applied — saving ₹{ORIGINAL_PRICE - BASE_PRICE}</span>
                  </div>
                </div>
              </section>

              {/* Inputs */}
              <section className="space-y-4">
                <input
                  required name="fullName" type="text" placeholder="Full Name"
                  value={formData.fullName} onChange={handleChange}
                  className="w-full bg-[#08090C] border border-[#2A2D40] p-4 text-white placeholder:text-[#A1A1A1]/50 focus:border-[#C8FF32] focus:ring-0 outline-none transition-colors"
                />
                <input
                  required name="email" type="email" placeholder="Email Address"
                  value={formData.email} onChange={handleChange}
                  className="w-full bg-[#08090C] border border-[#2A2D40] p-4 text-white placeholder:text-[#A1A1A1]/50 focus:border-[#C8FF32] focus:ring-0 outline-none transition-colors"
                />
                <input
                  required name="phone" type="tel" placeholder="Phone Number"
                  value={formData.phone} onChange={handleChange}
                  className="w-full bg-[#08090C] border border-[#2A2D40] p-4 text-white placeholder:text-[#A1A1A1]/50 focus:border-[#C8FF32] focus:ring-0 outline-none transition-colors"
                />
              </section>

              {/* Add-on */}
              <section className="space-y-4">
                <h3 className="text-[10px] font-bold text-[#A1A1A1] uppercase tracking-[0.2em]">Upgrade your session</h3>
                <label
                  className={`group relative flex items-start gap-4 p-5 bg-[#08090C] border cursor-pointer transition-all ${
                    wantsRecording ? 'border-[#C8FF32] bg-[#C8FF32]/5' : 'border-[#2A2D40] hover:border-[#C8FF32]/50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={wantsRecording}
                    onChange={e => setWantsRecording(e.target.checked)}
                    className="mt-1 rounded-none border-[#2A2D40] bg-transparent text-[#C8FF32] focus:ring-0 focus:ring-offset-0"
                  />
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-[#C8FF32] tracking-[0.2em] uppercase">Session Recording</span>
                    <p className="font-bold text-white text-sm">Lifetime Access to Your Session Recording</p>
                    <p className="text-xs text-[#A1A1A1]">
                      <span className="text-[#C8FF32] font-bold">+₹{RECORDING_ADDON_PRICE}</span> <span className="opacity-60">(optional add-on)</span>
                    </p>
                  </div>
                </label>
              </section>

              {/* Bonus */}
              <section className="bg-[#26293C]/50 border border-white/5 p-6 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎁</span>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white">Bonus</span>
                </div>
                <p className="text-sm font-bold text-white">Free Live Q&amp;A — 1 Week After</p>
                <p className="text-xs text-[#A1A1A1]">7 days to practice → collect real doubts → get them answered live. No extra charge.</p>
              </section>

              {status === 'error' && (
                <div className="p-4 flex items-center gap-3 text-sm text-[#FF4545] bg-[#FF4545]/10 border border-[#FF4545]/30">
                  <span className="material-symbols-outlined text-sm">error_outline</span>
                  <span>Something went wrong. Please try again or contact us directly.</span>
                </div>
              )}
            </div>

            {/* Sticky footer CTA */}
            <div className="px-6 md:px-8 py-6 border-t border-[#2A2D40] bg-[#13151D] space-y-3">
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full font-bold py-5 flex flex-col items-center justify-center transition-all ${
                  status === 'loading' ? 'opacity-60 cursor-not-allowed bg-[#C8FF32] text-[#08090C]' : 'bg-[#C8FF32] hover:bg-[#C8FF32]/90 text-[#08090C] active:scale-[0.98]'
                }`}
              >
                {status === 'loading' ? (
                  <span className="text-lg">Opening secure checkout…</span>
                ) : (
                  <>
                    <span className="text-lg">Pay ₹{total} and Book My Seat →</span>
                    <span className="text-[9px] uppercase tracking-widest opacity-70 mt-1 flex items-center gap-1">
                      <span className="material-symbols-outlined text-[10px]">verified_user</span> Secured by Razorpay
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
