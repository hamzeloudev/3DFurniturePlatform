'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function ProductsPage() {
  const t = useTranslations('products');
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Demo products - replace with actual database query
  const products = [
    {
      id: '1',
      name: locale === 'en' ? 'Modern Sofa' : 'مبل مدرن',
      category: 'sofa',
      price: 1299,
      image: '🛋️',
    },
    {
      id: '2',
      name: locale === 'en' ? 'Classic Bed' : 'تخت کلاسیک',
      category: 'bed',
      price: 899,
      image: '🛏️',
    },
    {
      id: '3',
      name: locale === 'en' ? 'Elegant Dressing Table' : 'میز آرایش شیک',
      category: 'dressingTable',
      price: 599,
      image: '💄',
    },
    {
      id: '4',
      name: locale === 'en' ? 'Modern TV Table' : 'میز تلویزیون مدرن',
      category: 'tvTable',
      price: 499,
      image: '📺',
    },
  ];

  const categories = [
    { id: 'all', name: locale === 'en' ? 'All' : 'همه' },
    { id: 'sofa', name: locale === 'en' ? 'Sofas' : 'مبل‌ها' },
    { id: 'bed', name: locale === 'en' ? 'Beds' : 'تخت‌ها' },
    { id: 'dressingTable', name: locale === 'en' ? 'Dressing Tables' : 'میز آرایش' },
    { id: 'tvTable', name: locale === 'en' ? 'TV Tables' : 'میز تلویزیون' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">{t('title')}</h1>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-lg px-4 py-2 font-semibold transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl"
            >
              <div className="flex h-64 items-center justify-center bg-gray-100 text-8xl">
                {product.image}
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">{product.name}</h3>
                <p className="mb-4 text-2xl font-bold text-primary-600">
                  ${product.price.toLocaleString()}
                </p>

                <div className="space-y-2">
                  <Link
                    href={`/${locale}/configurator?product=${product.id}`}
                    className="block w-full rounded-lg bg-primary-600 px-4 py-2 text-center font-semibold text-white transition-all hover:bg-primary-500"
                  >
                    {t('customizeNow')}
                  </Link>

                  <button className="w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-2 font-semibold text-gray-900 transition-all hover:border-primary-600 hover:text-primary-600">
                    {t('viewInAR')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-gray-600">
              {locale === 'en' ? 'No products found in this category.' : 'محصولی در این دسته یافت نشد.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
