import React, { useState } from 'react';
import { COMPANY, IMAGES } from '@/lib/constants';
import { redirectToGmailCompose } from '@/lib/email';
import { toast } from '@/components/ui/use-toast';
import {
  Send,
  CheckCircle2,
  FileText,
  Phone,
  Clock,
  Shield,
} from 'lucide-react';

const serviceOptions = [
  {
    group: 'ICT Solutions',
    items: [
      'Structured Cabling',
      'Network Design & Implementation',
      'Server Installation',
      'CCTV & Security Systems',
      'Enterprise WiFi',
      'IT Support & Maintenance',
      'Access Control Systems',
      'Infrastructure Audit',
    ],
  },
  {
    group: 'Renewable Energy',
    items: [
      'Commercial Solar System',
      'Residential Solar System',
      'Battery Backup System',
      'Solar System Maintenance',
      'Energy Audit',
    ],
  },
];

const industryOptions = [
  { value: 'corporate', label: 'Corporate / Office' },
  { value: 'education', label: 'Education' },
  { value: 'government', label: 'Government' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'ngo', label: 'NGO / International Org' },
  { value: 'retail', label: 'Retail / Hospitality' },
  { value: 'residential', label: 'Residential' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'other', label: 'Other' },
];

const budgetOptions = [
  { value: 'under-10k', label: 'Under ZMW 10,000' },
  { value: '10k-50k', label: 'ZMW 10,000 - 50,000' },
  { value: '50k-100k', label: 'ZMW 50,000 - 100,000' },
  { value: '100k-500k', label: 'ZMW 100,000 - 500,000' },
  { value: '500k+', label: 'ZMW 500,000+' },
];

const timelineOptions = [
  { value: 'urgent', label: 'Urgent (within 1 week)' },
  { value: '1-month', label: 'Within 1 month' },
  { value: '1-3-months', label: '1 - 3 months' },
  { value: '3-6-months', label: '3 - 6 months' },
  { value: 'flexible', label: 'Flexible' },
];

const getOptionLabel = (
  options: Array<{ value: string; label: string }>,
  value: string,
  fallback = 'Not provided'
) => options.find((option) => option.value === value)?.label ?? fallback;

const QuotePage: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    services: [] as string[],
    budget: '',
    timeline: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || form.services.length === 0) {
      toast({
        title: 'Please fill in all required fields',
        description: 'Name, email, phone, and at least one service are required.',
        variant: 'destructive',
      });
      return;
    }

    const industryLabel = getOptionLabel(industryOptions, form.industry);
    const budgetLabel = getOptionLabel(budgetOptions, form.budget);
    const timelineLabel = getOptionLabel(timelineOptions, form.timeline);
    const selectedServices = form.services.map((service) => `- ${service}`).join('\n');
    const emailBody = [
      `Hello ${COMPANY.shortName} Team,`,
      '',
      'I would like to request a quote with the project details below.',
      '',
      `Full Name: ${form.name}`,
      `Email Address: ${form.email}`,
      `Phone Number: ${form.phone}`,
      `Company / Organization: ${form.company || 'Not provided'}`,
      `Industry: ${industryLabel}`,
      `Budget Range: ${budgetLabel}`,
      `Preferred Timeline: ${timelineLabel}`,
      '',
      'Services Required:',
      selectedServices,
      '',
      'Project Description:',
      form.description || 'Not provided',
      '',
      'Submitted from the website quote request form.',
    ].join('\n');

    redirectToGmailCompose({
      to: COMPANY.email,
      subject: `Quote Request - ${form.company || form.name}`,
      body: emailBody,
    });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#1a2332] py-16 lg:py-20">
        <div className="absolute inset-0">
          <img src={IMAGES.solarPanels} alt="Quote" className="h-full w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2332] to-[#1a2332]/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#F98513]">Free Quote</p>
          <h1 className="mb-5 text-4xl font-bold text-white sm:text-5xl">Request a Quote</h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
            Tell us about your project and we'll provide a detailed, no-obligation quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { icon: FileText, text: 'No-Obligation Quote' },
              { icon: Clock, text: 'Response Within 24hrs' },
              { icon: Phone, text: 'Free Consultation' },
              { icon: Shield, text: 'Professional Assessment' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-2 text-sm text-gray-600">
                  <Icon size={16} className="text-[#9BACD8]" />
                  {item.text}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1EC] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-8 shadow-lg lg:p-10">
            <h2 className="mb-2 text-2xl font-bold text-[#1a2332]">Project Details</h2>
            <p className="mb-8 text-sm text-gray-500">Fields marked with * are required.</p>

            <div className="mb-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#9BACD8]">Contact Information</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#1a2332]">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-[#F4F1EC] px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9BACD8]"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#1a2332]">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-[#F4F1EC] px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9BACD8]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#1a2332]">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 bg-[#F4F1EC] px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9BACD8]"
                    placeholder="+260..."
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#1a2332]">Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 bg-[#F4F1EC] px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9BACD8]"
                    placeholder="Company name"
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <label className="mb-1.5 block text-sm font-medium text-[#1a2332]">Industry</label>
              <select
                name="industry"
                value={form.industry}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 bg-[#F4F1EC] px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9BACD8]"
              >
                <option value="">Select your industry</option>
                {industryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#9BACD8]">
                Services Required * <span className="font-normal normal-case text-gray-400">(select all that apply)</span>
              </h3>
              {serviceOptions.map((group) => (
                <div key={group.group} className="mb-5">
                  <h4 className="mb-3 text-sm font-semibold text-[#1a2332]">{group.group}</h4>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <label
                        key={item}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-sm transition-all ${
                          form.services.includes(item)
                            ? 'border-2 border-[#9BACD8] bg-[#9BACD8]/10 font-medium text-[#1a2332]'
                            : 'border-2 border-transparent bg-[#F4F1EC] text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <div
                          className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-all ${
                            form.services.includes(item)
                              ? 'border-[#9BACD8] bg-[#9BACD8]'
                              : 'border-gray-300'
                          }`}
                        >
                          {form.services.includes(item) && (
                            <CheckCircle2 size={12} className="text-white" />
                          )}
                        </div>
                        <input
                          type="checkbox"
                          checked={form.services.includes(item)}
                          onChange={() => toggleService(item)}
                          className="sr-only"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#1a2332]">Budget Range</label>
                <select
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-[#F4F1EC] px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9BACD8]"
                >
                  <option value="">Select budget range</option>
                  {budgetOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#1a2332]">Preferred Timeline</label>
                <select
                  name="timeline"
                  value={form.timeline}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-200 bg-[#F4F1EC] px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9BACD8]"
                >
                  <option value="">Select timeline</option>
                  {timelineOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-8">
              <label className="mb-1.5 block text-sm font-medium text-[#1a2332]">Project Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                className="w-full resize-none rounded-lg border border-gray-200 bg-[#F4F1EC] px-4 py-3 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#9BACD8]"
                placeholder="Please describe your project requirements, current challenges, and any specific needs..."
              />
            </div>

            <div className="flex flex-col items-start gap-3">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#F98513] px-10 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#e0760f] sm:w-auto"
              >
                <Send size={16} />
                Send
              </button>
              {/*<p className="text-sm text-gray-500">
                Submitting opens a pre-filled Gmail draft addressed to{' '}
                <span className="font-medium text-[#1a2332]">{COMPANY.email}</span> so the
                user can review the quote request and send it directly from their Gmail account.
              </p>*/}
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default QuotePage;
