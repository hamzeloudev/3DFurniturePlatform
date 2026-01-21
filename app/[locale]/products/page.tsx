'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { demoProducts, getProductsByCategory } from '@/lib/data/demoProducts';

export default function ProductsPage() {
  const t = useTranslations('products');
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: locale === 'en' ? 'All' : 'همه' },
    { id: 'sofa', name: locale === 'en' ? 'Sofas' : 'مبل‌ها' },
    { id: 'bed', name: locale === 'en' ? 'Beds' : 'تخت‌ها' },
    { id: 'dressingTable', name: locale === 'en' ? 'Dressing Tables' : 'میز آرایش' },
    { id: 'tvTable', name: locale === 'en' ? 'TV Tables' : 'میز تلویزیون' },
    { id: 'chair', name: locale === 'en' ? 'Chairs' : 'صندلی‌ها' },
  ];

  const filteredProducts = getProductsByCategory(selectedCategory);

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
              key={product._id}
              className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl"
            >
              <div className="flex h-64 items-center justify-center bg-gray-100">
                <div className="text-center">
                  <div className="mb-2 text-8xl">
                    {product.category === 'sofa' && '🛋️'}
                    {product.category === 'bed' && '🛏️'}
                    {product.category === 'chair' && '🪑'}
                    {product.category === 'dressingTable' && '💄'}
                    {product.category === 'tvTable' && '📺'}
                    {product.category === 'table' && '🪑'}
                  </div>
                  {product.featured && (
                    <span className="inline-block rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white">
                      {locale === 'en' ? 'Featured' : 'ویژه'}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">{product.name}</h3>
                <p className="mb-3 line-clamp-2 text-sm text-gray-600">{product.description}</p>

                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-1">
                  {product.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mb-4 text-2xl font-bold text-primary-600">
                  ${product.basePrice.toLocaleString()}
                  <span className="text-sm font-normal text-gray-500"> {locale === 'en' ? 'base price' : 'قیمت پایه'}</span>
                </p>

                <div className="space-y-2">
                  <Link
                    href={`/${locale}/configurator?product=${product._id}`}
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
