'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary-600">OmniConfig 3D</h3>
            <p className="text-sm text-gray-600">
              {locale === 'en'
                ? 'Customize your dream furniture in 3D with augmented reality.'
                : 'مبلمان رویایی خود را به صورت سه بعدی با واقعیت افزوده سفارشی کنید.'}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              {locale === 'en' ? 'Quick Links' : 'لینک‌های سریع'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/products`}
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  {t('products')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/configurator`}
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  {t('configurator')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  {t('about')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              {locale === 'en' ? 'Support' : 'پشتیبانی'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  {t('contact')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/faq`}
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  {locale === 'en' ? 'FAQ' : 'سوالات متداول'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/shipping`}
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  {locale === 'en' ? 'Shipping' : 'حمل و نقل'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900">
              {locale === 'en' ? 'Legal' : 'قانونی'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={`/${locale}/privacy`}
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  {locale === 'en' ? 'Privacy Policy' : 'سیاست حفظ حریم خصوصی'}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms`}
                  className="text-sm text-gray-600 hover:text-primary-600"
                >
                  {locale === 'en' ? 'Terms of Service' : 'شرایط استفاده'}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} OmniConfig 3D. {locale === 'en' ? 'All rights reserved.' : 'تمامی حقوق محفوظ است.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
