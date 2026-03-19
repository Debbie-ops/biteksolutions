import React, { useState } from 'react';
import { COMPANY, IMAGES } from '@/lib/constants';
import { openGmailCompose, redirectToSiteHome } from '@/lib/email';
import { toast } from '@/components/ui/use-toast';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
} from 'lucide-react';

const contactSubjectOptions = [
  { value: 'ict', label: 'ICT Infrastructure' },
  { value: 'solar', label: 'Solar / Renewable Energy' },
  { value: 'security', label: 'Security Systems' },
  { value: 'support', label: 'Technical Support' },
  { value: 'general', label: 'General Inquiry' },
];

const getOptionLabel = (
  options: Array<{ value: string; label: string }>,
  value: string,
  fallback = 'Not provided'
) => options.find((option) => option.value === value)?.label ?? fallback;

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast({ title: 'Please fill in all required fields', variant: 'destructive' });
      return;
    }

    const subjectLabel = getOptionLabel(contactSubjectOptions, form.subject, 'General Inquiry');
    const emailBody = [
      `Hello ${COMPANY.shortName} Team,`,
      '',
      'The following message was submitted through the contact form on your website with the following details:',
      '',
      `Full Name: ${form.name}`,
      `Email Address: ${form.email}`,
      `Phone Number: ${form.phone || 'Not provided'}`,
      `Company: ${form.company || 'Not provided'}`,
      `Subject: ${subjectLabel}`,
      '',
      'Message:',
      form.message,
      '',
      'Submitted from the website contact form.',
    ].join('\n');

    const openedInNewTab = openGmailCompose({
      to: COMPANY.email,
      subject: `Website Contact Form - ${subjectLabel} - ${form.name}`,
      body: emailBody,
    });

    if (!openedInNewTab) {
      toast({
        title: 'Could not open Gmail',
        description: 'Please allow pop-ups for this site and try again.',
        variant: 'destructive',
      });
      return;
    }
    redirectToSiteHome();
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#1a2332] py-20 lg:py-24">
        <div className="absolute inset-0">
          <img src={IMAGES.officeBuilding} alt="Contact" className="h-full w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] to-[#1a2332]/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#F98513]">Contact Us</p>
          <h1 className="mb-5 text-4xl font-bold text-white sm:text-5xl">Get In Touch</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
            Have a question or ready to start a project? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative z-10 -mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Phone, label: 'Phone', value: COMPANY.phone, href: `tel:${COMPANY.phone}` },
              { icon: Mail, label: 'Email', value: COMPANY.email, href: `mailto:${COMPANY.email}` },
              { icon: MapPin, label: 'Address', value: `${COMPANY.address}, ${COMPANY.location}`, href: '#' },
              { icon: Clock, label: 'Business Hours', value: `Mon - Fri: ${COMPANY.hours}`, href: '#' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="group rounded-xl border border-gray-100 bg-white p-6 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#9BACD8]/10 transition-colors group-hover:bg-[#9BACD8]/20">
                    <Icon size={22} className="text-[#9BACD8]" />
                  </div>
                  <h3 className="mb-1 text-sm font-semibold text-[#1a2332]">{item.label}</h3>
                  <p className="text-sm text-gray-600">{item.value}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center gap-3">
                <MessageSquare size={24} className="text-[#9BACD8]" />
                <h2 className="text-2xl font-bold text-[#1a2332]">Send Us a Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#1a2332]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-[#F4F1EC] px-4 py-3 text-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9BACD8]"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#1a2332]">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-[#F4F1EC] px-4 py-3 text-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9BACD8]"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#1a2332]">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-[#F4F1EC] px-4 py-3 text-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9BACD8]"
                      placeholder="+260..."
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-[#1a2332]">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-200 bg-[#F4F1EC] px-4 py-3 text-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9BACD8]"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#1a2332]">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-[#F4F1EC] px-4 py-3 text-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9BACD8]"
                  >
                    <option value="">Select a subject</option>
                    {contactSubjectOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#1a2332]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full resize-none rounded-lg border border-gray-200 bg-[#F4F1EC] px-4 py-3 text-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9BACD8]"
                    placeholder="Tell us about your project or inquiry..."
                    required
                  />
                </div>
                <div className="flex flex-col items-start gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#F98513] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#e0760f]"
                  >
                    <Send size={16} />
                    Send
                  </button>
                  {/*<p className="text-sm text-gray-500">
                    Submitting opens a pre-filled Gmail draft addressed to{' '}
                    <span className="font-medium text-[#1a2332]">{COMPANY.email}</span> so the
                    user can review and send it from their Gmail account.
                  </p>*/}
                </div>
              </form>
            </div>

            <div className="lg:col-span-2">
              <h3 className="mb-4 text-lg font-bold text-[#1a2332]">Our Location</h3>
              <div className="mb-6 h-[300px] overflow-hidden rounded-xl bg-[#F4F1EC] lg:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.2!2d28.31!3d-15.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIzJzI0LjAiUyAyOMKwMTgnMzYuMCJF!5e0!3m2!1sen!2szm!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bitek Solutions Location"
                />
              </div>

              <div className="rounded-xl bg-[#1a2332] p-6">
                <h4 className="mb-4 font-semibold text-white">Contact {COMPANY.contact}</h4>
                <div className="space-y-3">
                  <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white">
                    <Phone size={16} className="text-[#F98513]" />
                    {COMPANY.phone}
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-gray-300 transition-colors hover:text-white">
                    <Mail size={16} className="text-[#F98513]" />
                    {COMPANY.email}
                  </a>
                  <div className="flex items-start gap-3 text-sm text-gray-300">
                    <MapPin size={16} className="mt-0.5 text-[#F98513]" />
                    <span>
                      {COMPANY.address}
                      <br />
                      {COMPANY.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
