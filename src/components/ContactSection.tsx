import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  Github, 
  Linkedin, 
  Facebook, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending with real mailto option
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form after short delay
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/60 dark:bg-slate-900/30 border-t border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono font-semibold tracking-wider uppercase text-amber-600 dark:text-amber-400">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Contact &amp; Collaboration
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Interested in academic collaboration, robotics projects, undergraduate internships, or have a question? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-xs space-y-5">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                Contact Details
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email Item */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block font-bold">EMAIL ADDRESS</span>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="font-medium text-slate-900 dark:text-slate-200 hover:text-amber-600 dark:hover:text-amber-400 break-all"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    title="Copy Email"
                    className="p-1.5 text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors shrink-0"
                  >
                    {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-start justify-between gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 block font-bold">PHONE / WHATSAPP</span>
                      <span className="font-medium text-slate-900 dark:text-slate-200">
                        {personalInfo.phone}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    title="Copy Phone"
                    className="p-1.5 text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 rounded-md transition-colors shrink-0"
                  >
                    {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="p-2 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block font-bold">CURRENT CAMPUS &amp; HOME</span>
                    <span className="font-medium text-slate-900 dark:text-slate-200">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Media Link Grid */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mb-3">
                  Connect on Social Platforms:
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors hover:text-amber-600 dark:hover:text-amber-400"
                  >
                    <Github className="w-4 h-4 text-slate-800 dark:text-white" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors hover:text-amber-600 dark:hover:text-amber-400"
                  >
                    <Linkedin className="w-4 h-4 text-blue-600" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={personalInfo.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors hover:text-amber-600 dark:hover:text-amber-400"
                  >
                    <Facebook className="w-4 h-4 text-blue-500" />
                    <span>Facebook</span>
                  </a>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 transition-colors hover:text-amber-600 dark:hover:text-amber-400"
                  >
                    <Mail className="w-4 h-4 text-amber-500" />
                    <span>Direct Email</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill in the form below to initiate communication or discuss project ideas.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-500/40 text-amber-900 dark:text-amber-200 text-xs sm:text-sm flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold">Thank you for your message!</p>
                    <p className="text-xs text-amber-800 dark:text-amber-300">
                      Your note has been queued. You can also send directly via email at <span className="font-mono font-bold text-amber-600 dark:text-amber-400">{personalInfo.email}</span>.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Dr. Rahman / Student / Recruiter"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="name@organization.com"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Inquiry regarding Robotics / Circuit Project / Internship"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                  />
                </div>

                {/* Submit Button in Golden Amber */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-gradient-to-r dark:from-amber-500 dark:to-amber-600 dark:hover:from-amber-600 dark:hover:to-amber-700 dark:text-slate-950 text-white font-bold text-sm transition-all shadow-xs hover:shadow active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
