'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/stores/useAuthStore';

export default function RegisterPage() {
  const t = useTranslations('auth');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();
  const { setUser } = useAuthStore();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError(locale === 'en' ? 'Passwords do not match' : 'رمزهای عبور مطابقت ندارند');
      setIsLoading(false);
      return;
    }

    try {
      // TODO: Implement actual API call
      // const response = await fetch('/api/auth/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // Demo registration
      setTimeout(() => {
        setUser({
          _id: '1',
          email: formData.email,
          name: formData.name,
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        router.push(`/${locale}`);
      }, 1000);
    } catch (err) {
      setError(locale === 'en' ? 'Registration failed. Please try again.' : 'ثبت نام ناموفق بود. دوباره تلاش کنید.');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">{t('register')}</h1>
          <p className="mt-2 text-gray-600">
            {locale === 'en' ? 'Create your OmniConfig 3D account' : 'حساب کاربری خود را ایجاد کنید'}
          </p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="mb-2 block font-semibold text-gray-900">
                {locale === 'en' ? 'Full Name' : 'نام کامل'}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-2 block font-semibold text-gray-900">
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="mb-2 block font-semibold text-gray-900">
                {t('password')}
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
                minLength={8}
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="mb-2 block font-semibold text-gray-900">
                {t('confirmPassword')}
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
                required
                minLength={8}
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">{error}</div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-500 disabled:opacity-50"
            >
              {isLoading ? tCommon('loading') : t('register')}
            </button>

            {/* Login Link */}
            <div className="text-center text-sm text-gray-600">
              {t('hasAccount')}{' '}
              <Link
                href={`/${locale}/auth/login`}
                className="font-semibold text-primary-600 hover:text-primary-500"
              >
                {t('login')}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
