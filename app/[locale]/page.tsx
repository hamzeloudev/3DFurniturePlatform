import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'hero' });

  return {
    title: 'OmniConfig 3D - ' + t('title'),
    description: t('subtitle'),
  };
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
            {locale === 'en' ? (
              <>
                Start Designing Your
                <br />
                <span className="text-primary-600">Dream Home</span>
              </>
            ) : (
              <>
                شروع به طراحی
                <br />
                <span className="text-primary-600">خانه رویایی خود</span> کنید
              </>
            )}
          </h1>
          <p className="mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl">
            {locale === 'en'
              ? 'Customize your furniture in 3D with real-time visualization and augmented reality'
              : 'مبلمان خود را به صورت سه بعدی با نمایش لحظه‌ای و واقعیت افزوده سفارشی کنید'}
          </p>
          <Link
            href={`/${locale}/configurator`}
            className="rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-primary-500 hover:shadow-xl"
          >
            {locale === 'en' ? 'Start Designing Your Dream Home' : 'شروع طراحی خانه رویایی'}
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          {locale === 'en' ? 'Furniture Categories' : 'دسته‌بندی مبلمان'}
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Sofas */}
          <Link
            href={`/${locale}/products?category=sofa`}
            className="group relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-orange-100 to-orange-200 shadow-lg transition-all hover:shadow-2xl"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="mb-4 text-3xl font-bold text-gray-900">
                {locale === 'en' ? 'Sofas' : 'مبل‌ها'}
              </h3>
              <div className="mb-6 text-6xl">🛋️</div>
              <button className="rounded-full bg-white px-6 py-2 font-semibold text-gray-900 shadow-md transition-all group-hover:bg-gray-100">
                {locale === 'en' ? 'Explore' : 'کاوش'}
              </button>
            </div>
          </Link>

          {/* Bed Headboards */}
          <Link
            href={`/${locale}/products?category=bed`}
            className="group relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-teal-100 to-teal-200 shadow-lg transition-all hover:shadow-2xl"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="mb-4 text-3xl font-bold text-gray-900">
                {locale === 'en' ? 'Bed Headboards' : 'تخت خواب‌ها'}
              </h3>
              <div className="mb-6 text-6xl">🛏️</div>
              <button className="rounded-full bg-white px-6 py-2 font-semibold text-gray-900 shadow-md transition-all group-hover:bg-gray-100">
                {locale === 'en' ? 'Explore' : 'کاوش'}
              </button>
            </div>
          </Link>

          {/* Dressing Tables */}
          <Link
            href={`/${locale}/products?category=dressingTable`}
            className="group relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 shadow-lg transition-all hover:shadow-2xl"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="mb-4 text-3xl font-bold text-gray-900">
                {locale === 'en' ? 'Dressing Tables' : 'میز آرایش'}
              </h3>
              <div className="mb-6 text-6xl">💄</div>
              <button className="rounded-full bg-white px-6 py-2 font-semibold text-gray-900 shadow-md transition-all group-hover:bg-gray-100">
                {locale === 'en' ? 'Explore' : 'کاوش'}
              </button>
            </div>
          </Link>

          {/* TV Tables */}
          <Link
            href={`/${locale}/products?category=tvTable`}
            className="group relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-green-100 to-green-200 shadow-lg transition-all hover:shadow-2xl"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="mb-4 text-3xl font-bold text-gray-900">
                {locale === 'en' ? 'TV Tables' : 'میز تلویزیون'}
              </h3>
              <div className="mb-6 text-6xl">📺</div>
              <button className="rounded-full bg-white px-6 py-2 font-semibold text-gray-900 shadow-md transition-all group-hover:bg-gray-100">
                {locale === 'en' ? 'Explore' : 'کاوش'}
              </button>
            </div>
          </Link>

          {/* Chairs */}
          <Link
            href={`/${locale}/products?category=chair`}
            className="group relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 shadow-lg transition-all hover:shadow-2xl"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="mb-4 text-3xl font-bold text-gray-900">
                {locale === 'en' ? 'Chairs' : 'صندلی‌ها'}
              </h3>
              <div className="mb-6 text-6xl">🪑</div>
              <button className="rounded-full bg-white px-6 py-2 font-semibold text-gray-900 shadow-md transition-all group-hover:bg-gray-100">
                {locale === 'en' ? 'Explore' : 'کاوش'}
              </button>
            </div>
          </Link>

          {/* Tables */}
          <Link
            href={`/${locale}/products?category=table`}
            className="group relative h-80 overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-100 to-yellow-200 shadow-lg transition-all hover:shadow-2xl"
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <h3 className="mb-4 text-3xl font-bold text-gray-900">
                {locale === 'en' ? 'Tables' : 'میزها'}
              </h3>
              <div className="mb-6 text-6xl">🪑</div>
              <button className="rounded-full bg-white px-6 py-2 font-semibold text-gray-900 shadow-md transition-all group-hover:bg-gray-100">
                {locale === 'en' ? 'Explore' : 'کاوش'}
              </button>
            </div>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            {locale === 'en' ? 'Why Choose Us' : 'چرا ما را انتخاب کنید'}
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 text-center shadow-md">
              <div className="mb-4 text-5xl">🎨</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {locale === 'en' ? '3D Customization' : 'سفارشی‌سازی سه بعدی'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Customize every detail of your furniture in real-time 3D'
                  : 'هر جزئیات مبلمان خود را به صورت سه بعدی و لحظه‌ای سفارشی کنید'}
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-md">
              <div className="mb-4 text-5xl">📱</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {locale === 'en' ? 'AR Preview' : 'پیش‌نمایش واقعیت افزوده'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'See how furniture looks in your space using augmented reality'
                  : 'مبلمان را در فضای خود با واقعیت افزوده مشاهده کنید'}
              </p>
            </div>

            <div className="rounded-xl bg-white p-8 text-center shadow-md">
              <div className="mb-4 text-5xl">🌱</div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {locale === 'en' ? 'Eco-Friendly' : 'سازگار با محیط زیست'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Choose from sustainable materials and track carbon footprint'
                  : 'از مواد پایدار انتخاب کنید و ردپای کربن را دنبال کنید'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
