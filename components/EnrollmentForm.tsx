
import React, { useState } from 'react';
import FadeIn from './FadeIn';

const WEBHOOK_URL = 'https://n8n.srv816930.hstgr.cloud/webhook/enroll-course';

const EnrollmentForm: React.FC = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, submittedAt: new Date().toISOString(), course: 'Automate with AI' }),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass = `w-full px-4 py-3.5 rounded-xl text-on-surface placeholder:text-outline/60 font-body outline-none transition-all duration-200`;
  const inputStyle = {
    background: '#ffffff',
    border: '1px solid rgba(11,28,48,0.12)',
    fontSize: '15px',
  };
  const inputFocusStyle = `focus:ring-2 focus:ring-primary/20 focus:border-primary`;

  return (
    <FadeIn>
      <div className="bg-white rounded-2xl p-8 md:p-12 border border-outline-variant shadow-2xl">
        <div className="mb-10 text-center">
          <p className="font-label text-label-md uppercase text-primary mb-4">
            Reserve Your Seat
          </p>
          <h2 className="font-display text-headline-lg mb-3">
            Enroll in the Course
          </h2>
          <p className="text-secondary font-body text-base">
            Madhav will reach out within 24 hours to schedule your discovery call.
          </p>
        </div>

        {status === 'success' ? (
          <div className="text-center py-12">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined text-2xl text-white">check</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-on-surface mb-3">Request Received</h3>
            <p className="text-secondary font-body mb-8 max-w-sm mx-auto leading-relaxed">
              Thank you for your interest. Madhav Agarwal will be in touch within 24 hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="text-primary font-medium text-sm underline underline-offset-4 hover:opacity-80 transition-colors"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block font-label text-label-md text-secondary uppercase mb-2">
                Full Name *
              </label>
              <input
                required type="text" id="fullName" name="fullName"
                value={formData.fullName} onChange={handleChange}
                placeholder="Enter your full name"
                className={`${inputClass} ${inputFocusStyle}`} style={inputStyle}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block font-label text-label-md text-secondary uppercase mb-2">
                  Email *
                </label>
                <input
                  required type="email" id="email" name="email"
                  value={formData.email} onChange={handleChange}
                  placeholder="your@email.com"
                  className={`${inputClass} ${inputFocusStyle}`} style={inputStyle}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block font-label text-label-md text-secondary uppercase mb-2">
                  Phone *
                </label>
                <input
                  required type="tel" id="phone" name="phone"
                  value={formData.phone} onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={`${inputClass} ${inputFocusStyle}`} style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-label text-label-md text-secondary uppercase mb-2">
                Message (Optional)
              </label>
              <textarea
                id="message" name="message" rows={4}
                value={formData.message} onChange={handleChange}
                placeholder="Tell us about your background and what you'd like to build..."
                className={`${inputClass} ${inputFocusStyle} resize-none`} style={inputStyle}
              />
            </div>

            {status === 'error' && (
              <div className="p-4 rounded-xl flex items-center space-x-3 text-sm text-error" style={{ background: '#fff2f1', border: '1px solid rgba(186,26,26,0.2)' }}>
                <span className="material-symbols-outlined text-sm">error_outline</span>
                <span className="font-normal">Something went wrong. Please try again or contact us directly.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-4 px-8 rounded-xl font-display font-bold text-base flex items-center justify-center space-x-2 mt-2 transition-all ${
                status === 'loading' ? 'opacity-50 cursor-not-allowed bg-primary text-white' : 'bg-primary text-white hover:scale-[1.02] hover:shadow-xl shadow-primary/20 cursor-pointer btn-shimmer'
              }`}
            >
              {status === 'loading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="font-label text-sm tracking-wide">Processing...</span>
                </>
              ) : (
                <>
                  <span style={{ letterSpacing: '0.02em' }}>Submit Enrollment Request</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </>
              )}
            </button>

            <p className="font-label text-[10px] text-center text-outline uppercase tracking-[0.12em] pt-1">
              Your data is secured and used only for enrollment.
            </p>
          </form>
        )}
      </div>
    </FadeIn>
  );
};

export default EnrollmentForm;
