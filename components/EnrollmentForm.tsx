
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

  const inputClass = `w-full px-4 py-3.5 rounded-xl text-[#111111] placeholder:text-[#bbb] font-normal outline-none transition-all duration-200`;
  const inputStyle = {
    background: '#ffffff',
    border: '1px solid rgba(0,0,0,0.12)',
    fontSize: '15px',
  };
  const inputFocusStyle = `focus:ring-2 focus:ring-[#f472b6]/20 focus:border-[#f472b6]`;

  return (
    <FadeIn>
      <div className="bg-white rounded-2xl p-8 md:p-12" style={{ border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 4px 32px rgba(0,0,0,0.06)' }}>
        <div className="mb-10 text-center">
          <p className="jetbrains text-[11px] font-medium tracking-[0.1em] uppercase text-[#f472b6] mb-4">
            Reserve Your Seat
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-3" style={{ letterSpacing: '-0.02em' }}>
            Enroll in the Course
          </h2>
          <p className="text-[#777777] font-normal text-base">
            Madhav will reach out within 24 hours to schedule your discovery call.
          </p>
          <div className="h-px w-10 bg-[#f472b6] mx-auto mt-6" style={{ opacity: 0.5 }} />
        </div>

        {status === 'success' ? (
          <div className="text-center py-12">
            <div className="w-14 h-14 rounded-full bg-[#f472b6] flex items-center justify-center mx-auto mb-6">
              <span className="material-icons-outlined text-2xl text-white">check</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111111] mb-3">Request Received</h3>
            <p className="text-[#777777] font-normal mb-8 max-w-sm mx-auto leading-relaxed">
              Thank you for your interest. Madhav Agarwal will be in touch within 24 hours.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="text-[#f472b6] font-medium text-sm underline underline-offset-4 hover:text-[#ec4899] transition-colors"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block jetbrains text-[11px] font-medium text-[#999] uppercase tracking-[0.08em] mb-2">
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
                <label htmlFor="email" className="block jetbrains text-[11px] font-medium text-[#999] uppercase tracking-[0.08em] mb-2">
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
                <label htmlFor="phone" className="block jetbrains text-[11px] font-medium text-[#999] uppercase tracking-[0.08em] mb-2">
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
              <label htmlFor="message" className="block jetbrains text-[11px] font-medium text-[#999] uppercase tracking-[0.08em] mb-2">
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
              <div className="p-4 rounded-xl flex items-center space-x-3 text-sm text-red-700" style={{ background: '#fef2f2', border: '1px solid rgba(239,68,68,0.2)' }}>
                <span className="material-icons-outlined text-sm text-red-500">error_outline</span>
                <span className="font-normal">Something went wrong. Please try again or contact us directly.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-4 px-8 rounded-xl font-semibold text-base flex items-center justify-center space-x-2 mt-2 ${
                status === 'loading' ? 'opacity-50 cursor-not-allowed bg-[#f472b6] text-white' : 'btn-primary cursor-pointer'
              }`}
            >
              {status === 'loading' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="jetbrains text-sm tracking-wide">Processing...</span>
                </>
              ) : (
                <>
                  <span style={{ letterSpacing: '0.02em' }}>Submit Enrollment Request</span>
                  <span className="material-icons-outlined text-base">arrow_forward</span>
                </>
              )}
            </button>

            <p className="jetbrains text-[10px] text-center text-[#cccccc] uppercase tracking-[0.12em] pt-1">
              Your data is secured and used only for enrollment.
            </p>
          </form>
        )}
      </div>
    </FadeIn>
  );
};

export default EnrollmentForm;
