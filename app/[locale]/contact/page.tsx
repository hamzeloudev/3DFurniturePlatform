'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';

export default function ContactPage() {
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual form submission to API
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            {locale === 'en' ? 'Contact Us' : 'تماس با ما'}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {locale === 'en'
              ? 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'
              : 'سؤال دارید؟ ما دوست داریم از شما بشنویم. پیامی برای ما ارسال کنید و ما در اسرع وقت پاسخ خواهیم داد.'}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 text-4xl">📧</div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {locale === 'en' ? 'Email' : 'ایمیل'}
              </h3>
              <p className="text-gray-600">support@omniconfig3d.com</p>
              <p className="text-sm text-gray-500">
                {locale === 'en' ? 'We\'ll respond within 24 hours' : 'ما ظرف 24 ساعت پاسخ خواهیم داد'}
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 text-4xl">📞</div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {locale === 'en' ? 'Phone' : 'تلفن'}
              </h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500">
                {locale === 'en' ? 'Mon-Fri from 9am to 6pm EST' : 'دوشنبه تا جمعه از 9 صبح تا 6 عصر'}
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 text-4xl">📍</div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {locale === 'en' ? 'Office' : 'دفتر'}
              </h3>
              <p className="text-gray-600">
                123 Design Street
                <br />
                San Francisco, CA 94102
                <br />
                United States
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 text-4xl">💬</div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {locale === 'en' ? 'Social Media' : 'شبکه‌های اجتماعی'}
              </h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-primary-600">Facebook</a>
                <a href="#" className="text-gray-600 hover:text-primary-600">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-primary-600">Instagram</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                {locale === 'en' ? 'Send us a message' : 'پیامی برای ما ارسال کنید'}
              </h2>

              {submitted && (
                <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-700">
                  {locale === 'en'
                    ? '✓ Message sent successfully! We\'ll get back to you soon.'
                    : '✓ پیام با موفقیت ارسال شد! ما به زودی به شما پاسخ خواهیم داد.'}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block font-semibold text-gray-900">
                    {locale === 'en' ? 'Your Name' : 'نام شما'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-semibold text-gray-900">
                    {locale === 'en' ? 'Email Address' : 'آدرس ایمیل'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block font-semibold text-gray-900">
                    {locale === 'en' ? 'Subject' : 'موضوع'}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
                    required
                  >
                    <option value="">
                      {locale === 'en' ? 'Select a subject' : 'یک موضوع انتخاب کنید'}
                    </option>
                    <option value="general">
                      {locale === 'en' ? 'General Inquiry' : 'سؤال عمومی'}
                    </option>
                    <option value="support">
                      {locale === 'en' ? 'Technical Support' : 'پشتیبانی فنی'}
                    </option>
                    <option value="order">
                      {locale === 'en' ? 'Order Issue' : 'مشکل سفارش'}
                    </option>
                    <option value="partnership">
                      {locale === 'en' ? 'Partnership' : 'همکاری'}
                    </option>
                    <option value="feedback">
                      {locale === 'en' ? 'Feedback' : 'بازخورد'}
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block font-semibold text-gray-900">
                    {locale === 'en' ? 'Message' : 'پیام'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-500"
                >
                  {locale === 'en' ? 'Send Message' : 'ارسال پیام'}
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 rounded-lg bg-white p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                {locale === 'en' ? 'Frequently Asked Questions' : 'سؤالات متداول'}
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    {locale === 'en'
                      ? 'How long does delivery take?'
                      : 'تحویل چقدر طول می‌کشد؟'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'en'
                      ? 'Standard delivery takes 4-6 weeks for custom furniture. Expedited options are available.'
                      : 'تحویل استاندارد برای مبلمان سفارشی 4-6 هفته طول می‌کشد. گزینه‌های سریع‌تر در دسترس است.'}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    {locale === 'en'
                      ? 'Can I modify my order after placing it?'
                      : 'آیا می‌توانم سفارش خود را بعد از ثبت تغییر دهم؟'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'en'
                      ? 'Yes, you can modify your order within 24 hours of placement. Contact our support team.'
                      : 'بله، می‌توانید سفارش خود را ظرف 24 ساعت پس از ثبت تغییر دهید. با تیم پشتیبانی ما تماس بگیرید.'}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    {locale === 'en'
                      ? 'Do you offer international shipping?'
                      : 'آیا ارسال بین‌المللی ارائه می‌دهید؟'}
                  </h3>
                  <p className="text-gray-600">
                    {locale === 'en'
                      ? 'Yes, we ship to most countries. Shipping costs and times vary by location.'
                      : 'بله، ما به بیشتر کشورها ارسال می‌کنیم. هزینه و زمان ارسال بسته به مکان متفاوت است.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
