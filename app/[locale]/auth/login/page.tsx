'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/stores/useAuthStore';

export default function LoginPage() {
  const t = useTranslations('auth');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();
  const { setUser } = useAuthStore();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // TODO: Implement actual API call
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // Demo login
      setTimeout(() => {
        setUser({
          _id: '1',
          email: formData.email,
          name: 'Demo User',
          role: 'user',
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        router.push(`/${locale}`);
      }, 1000);
    } catch (err) {
      setError('Invalid email or password');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">{t('login')}</h1>
          <p className="mt-2 text-gray-600">
            {locale === 'en' ? 'Welcome back to OmniConfig 3D' : 'به اومنی کانفیگ سه بعدی خوش آمدید'}
          </p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
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
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">{error}</div>
            )}

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                href={`/${locale}/auth/forgot-password`}
                className="text-sm font-semibold text-primary-600 hover:text-primary-500"
              >
                {t('forgotPassword')}
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-500 disabled:opacity-50"
            >
              {isLoading ? tCommon('loading') : t('login')}
            </button>

            {/* Register Link */}
            <div className="text-center text-sm text-gray-600">
              {t('noAccount')}{' '}
              <Link
                href={`/${locale}/auth/register`}
                className="font-semibold text-primary-600 hover:text-primary-500"
              >
                {t('register')}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
