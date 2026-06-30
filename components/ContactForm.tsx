'use client';

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    try {
      const bookingPayload = {
        name: data.name,
        email: data.email,
        company: data.company,
        service: data.service,
        preferred_date: data.preferred_date || null,
        preferred_time: data.preferred_time || null,
        message: data.message,
        status: 'pending'
      };

      console.log('Submitting to Supabase Edge Function with data:', bookingPayload);
      
      // Call Supabase Edge Function directly (works on Cloudflare Pages)
      const supabaseUrl = 'https://ywlqqmcupsqrbcaecueu.supabase.co';
      const response = await fetch(`${supabaseUrl}/functions/v1/send-booking-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3bHFxbWN1cHNxcmJjYWVjdWV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI2NzcyNzcsImV4cCI6MjA5ODI1MzI3N30.62E7_j3Z1gnzveIAGugxC2QcbZVCoUntss9VMSiPlKc`,
        },
        body: JSON.stringify({
          record: bookingPayload
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Edge function error:', errorText);
        setStatus("error");
      } else {
        const result = await response.json();
        console.log('Edge function response:', result);
        setStatus("success");
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="card text-center py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-dusty-rose/20 text-dusty-rose mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <h3 className="text-h3 font-bold text-charcoal mb-4">Request Received</h3>
        <p className="text-body text-charcoal/70 max-w-md mx-auto">
          We've received your request. Expect a response within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-full overflow-hidden">
      <div>
        <label htmlFor="name" className="block text-caption text-charcoal/70 mb-2 uppercase font-bold">Full Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required 
          placeholder="Your full name"
          className="w-full bg-ivory border border-border-light rounded-button px-4 py-3 text-charcoal focus:outline-none focus:border-gold transition-colors placeholder:text-charcoal/40"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-caption text-charcoal/70 mb-2 uppercase font-bold">Email Address</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          placeholder="your@email.com"
          className="w-full bg-ivory border border-border-light rounded-button px-4 py-3 text-charcoal focus:outline-none focus:border-gold transition-colors placeholder:text-charcoal/40"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-caption text-charcoal/70 mb-2 uppercase font-bold">Company Name</label>
        <input 
          type="text" 
          id="company" 
          name="company" 
          required 
          placeholder="Your company name"
          className="w-full bg-ivory border border-border-light rounded-button px-4 py-3 text-charcoal focus:outline-none focus:border-gold transition-colors placeholder:text-charcoal/40"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-caption text-charcoal/70 mb-2 uppercase font-bold">What are you looking for?</label>
        <div className="relative">
          <select 
            id="service" 
            name="service" 
            required 
            defaultValue=""
            className="w-full bg-ivory border border-border-light rounded-button px-4 py-3 text-charcoal focus:outline-none focus:border-gold transition-colors appearance-none"
          >
            <option value="" disabled>Select a service</option>
            <option value="Security Audit">Security Audit</option>
            <option value="DevSecOps Pipeline Setup">DevSecOps Pipeline Setup</option>
            <option value="Cloud Infrastructure">Cloud Infrastructure</option>
            <option value="Compliance Consulting">Compliance Consulting</option>
            <option value="Monitoring & Incident Response">Monitoring & Incident Response</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-charcoal/70">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="preferred_date" className="block text-caption text-charcoal/70 mb-2 uppercase font-bold">Preferred Date</label>
        <input 
          type="date" 
          id="preferred_date" 
          name="preferred_date" 
          className="w-full max-w-full bg-ivory border border-border-light rounded-button px-3 py-3 text-charcoal focus:outline-none focus:border-gold transition-colors"
          style={{ fontSize: '16px', boxSizing: 'border-box' }}
        />
      </div>

      <div>
        <label htmlFor="preferred_time" className="block text-caption text-charcoal/70 mb-2 uppercase font-bold">Preferred Time</label>
        <input 
          type="time" 
          id="preferred_time" 
          name="preferred_time" 
          className="w-full max-w-full bg-ivory border border-border-light rounded-button px-3 py-3 text-charcoal focus:outline-none focus:border-gold transition-colors"
          style={{ fontSize: '16px', boxSizing: 'border-box' }}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-caption text-charcoal/70 mb-2 uppercase font-bold">Tell us about your current setup</label>
        <textarea 
          id="message" 
          name="message" 
          required 
          placeholder="What does your stack look like? What's keeping you up at night?"
          className="w-full bg-ivory border border-border-light rounded-button px-4 py-3 text-charcoal focus:outline-none focus:border-gold transition-colors placeholder:text-charcoal/40 min-h-[140px] resize-y"
        ></textarea>
      </div>

      {status === "error" && (
        <div className="p-4 bg-danger/10 border border-danger/20 rounded-button text-danger text-body">
          Something went wrong. Email us directly at <a href="mailto:info@cerenth.org" className="underline font-bold">info@cerenth.org</a>
        </div>
      )}

      <button 
        type="submit" 
        disabled={status === "loading"}
        className="w-full py-4 bg-dusty-rose text-charcoal font-bold rounded-button shadow-cta-glow transition-all hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
      >
        {status === "loading" ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-charcoal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </>
        ) : (
          "Book My Free Audit"
        )}
      </button>
    </form>
  );
}
