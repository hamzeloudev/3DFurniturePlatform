'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { useCartStore } from '@/lib/stores/useCartStore';

export default function CartPage() {
  const t = useTranslations('cart');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  const { items, total, removeItem, updateQuantity } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">{t('title')}</h1>

          <div className="rounded-xl bg-white p-12 text-center shadow-md">
            <div className="mb-4 text-6xl">🛒</div>
            <p className="mb-6 text-xl text-gray-600">{t('empty')}</p>
            <Link
              href={`/${locale}/products`}
              className="inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-500"
            >
              {t('continueShopping')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">{t('title')}</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-xl bg-white p-6 shadow-md"
                >
                  {/* Product Image */}
                  <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 text-4xl">
                    🛋️
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                      {item.product.name}
                    </h3>
                    <p className="mb-2 text-sm text-gray-600">
                      {locale === 'en' ? 'Customized Design' : 'طرح سفارشی'}
                    </p>
                    <p className="text-xl font-bold text-primary-600">
                      ${item.customization.totalPrice.toLocaleString()}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex flex-col items-center justify-between">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 font-bold hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 font-bold hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-xl bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-bold text-gray-900">
                {locale === 'en' ? 'Order Summary' : 'خلاصه سفارش'}
              </h2>

              <div className="mb-4 space-y-2 border-t border-gray-200 pt-4">
                <div className="flex justify-between text-gray-600">
                  <span>{locale === 'en' ? 'Subtotal' : 'جمع جزء'}:</span>
                  <span>${total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>{locale === 'en' ? 'Shipping' : 'حمل و نقل'}:</span>
                  <span>{locale === 'en' ? 'Calculated at checkout' : 'محاسبه در پرداخت'}</span>
                </div>
              </div>

              <div className="mb-6 flex justify-between border-t border-gray-200 pt-4 text-xl font-bold">
                <span>{t('total')}:</span>
                <span className="text-primary-600">${total.toLocaleString()}</span>
              </div>

              <Link
                href={`/${locale}/checkout`}
                className="block w-full rounded-lg bg-primary-600 px-6 py-3 text-center font-semibold text-white transition-all hover:bg-primary-500"
              >
                {t('checkout')}
              </Link>

              <Link
                href={`/${locale}/products`}
                className="mt-3 block w-full rounded-lg border-2 border-gray-300 px-6 py-3 text-center font-semibold text-gray-900 transition-all hover:border-primary-600 hover:text-primary-600"
              >
                {t('continueShopping')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
