
import React, { useState } from 'react';
import FadeIn from './FadeIn';

const WEBHOOK_URL = 'https://n8n.srv816930.hstgr.cloud/webhook/enroll-course';

const EnrollmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          course: 'Automate with AI'
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Enrollment error:', error);
      setStatus('error');
    }
  };

  return (
    <FadeIn>
      <div className="bg-white border border-neutral-200 p-8 md:p-12 shadow-2xl relative rounded-sm">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl nohemi-extrabold mb-3 text-neutral-900">Enroll in Course</h2>
          <p className="text-neutral-600 nohemi-regular">Complete the form below to enroll in Automate with AI</p>
          <div className="h-1 w-16 bg-[#8B1538] mx-auto mt-6" />
        </div>

        {status === 'success' ? (
          <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
            <span className="material-icons-outlined text-6xl text-[#8B1538] mb-6">check_circle</span>
            <h3 className="text-2xl nohemi-bold mb-4 text-neutral-900">Request Received!</h3>
            <p className="text-neutral-600 nohemi-regular mb-8">
              Thank you for your interest. Madhav Agarwal will reach out to you within 24 hours to schedule your discovery call.
            </p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-[#8B1538] nohemi-bold border-b border-[#8B1538] hover:text-[#A0153E] transition-colors"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-xs nohemi-medium text-neutral-500 uppercase tracking-widest mb-2">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-neutral-50 border border-neutral-200 px-4 py-4 focus:border-[#8B1538] outline-none transition-colors nohemi-regular text-neutral-900 placeholder:text-neutral-400"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs nohemi-medium text-neutral-500 uppercase tracking-widest mb-2">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full bg-neutral-50 border border-neutral-200 px-4 py-4 focus:border-[#8B1538] outline-none transition-colors nohemi-regular text-neutral-900 placeholder:text-neutral-400"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs nohemi-medium text-neutral-500 uppercase tracking-widest mb-2">
                    Phone Number *
                  </label>
                  <input
                    required
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full bg-neutral-50 border border-neutral-200 px-4 py-4 focus:border-[#8B1538] outline-none transition-colors nohemi-regular text-neutral-900 placeholder:text-neutral-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs nohemi-medium text-neutral-500 uppercase tracking-widest mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your learning goals..."
                  className="w-full bg-neutral-50 border border-neutral-200 px-4 py-4 focus:border-[#8B1538] outline-none transition-colors nohemi-regular text-neutral-900 placeholder:text-neutral-400 resize-none"
                />
              </div>
            </div>

            {status === 'error' && (
              <div className="p-4 bg-red-500/5 border border-red-500/20 text-red-600 text-sm nohemi-medium flex items-center space-x-2">
                <span className="material-icons-outlined text-sm">error_outline</span>
                <span>Something went wrong. Please try again later or contact us directly.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full py-5 px-8 nohemi-extrabold text-lg transition-all transform flex items-center justify-center space-x-3
                ${status === 'loading' 
                  ? 'bg-neutral-200 cursor-not-allowed text-neutral-400' 
                  : 'bg-[#8B1538] hover:bg-[#A0153E] text-white hover:-translate-y-1 shadow-[0_10px_25px_rgba(139,21,56,0.3)]'
                }`}
            >
              {status === 'loading' ? (
                <>
                  <div className="w-5 h-5 border-2 border-neutral-300 border-t-[#8B1538] rounded-full animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Submit Enrollment Request</span>
                  <span className="material-icons-outlined text-sm">arrow_forward</span>
                </>
              )}
            </button>
            
            <p className="text-[10px] text-center text-neutral-400 nohemi-medium uppercase tracking-[0.2em] mt-4">
              Your data is secured & will only be used for course enrollment.
            </p>
          </form>
        )}
      </div>
    </FadeIn>
  );
};

export default EnrollmentForm;
