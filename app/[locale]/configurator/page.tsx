'use client';

import { useEffect, Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import ThreeViewer from '@/components/configurator/ThreeViewer';
import CustomizationPanel from '@/components/configurator/CustomizationPanel';
import { useConfiguratorStore } from '@/lib/stores/useConfiguratorStore';
import { useCartStore } from '@/lib/stores/useCartStore';
import { getProductById } from '@/lib/data/demoProducts';
import Link from 'next/link';

function ConfiguratorContent() {
  const t = useTranslations('configurator');
  const searchParams = useSearchParams();
  const productId = searchParams.get('product');

  const { selectedProduct, customization, arSession, setARSession, setSelectedProduct, setLoading, isLoading } =
    useConfiguratorStore();

  const { addItem } = useCartStore();

  useEffect(() => {
    if (productId) {
      setLoading(true);
      const product = getProductById(productId);
      if (product) {
        setSelectedProduct(product);
      }
      setLoading(false);
    }
  }, [productId, setSelectedProduct, setLoading]);

  const handleAddToCart = () => {
    if (selectedProduct && customization) {
      addItem({
        id: `${selectedProduct._id}-${Date.now()}`,
        product: selectedProduct,
        customization: customization,
        quantity: 1,
      });
      // Show success message (you can add a toast notification here)
      alert('Added to cart!');
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary-600 border-t-transparent mx-auto"></div>
          <p className="text-gray-600">Loading configurator...</p>
        </div>
      </div>
    );
  }

  if (!selectedProduct) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mb-4 text-6xl">🛋️</div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900">
            Select a Product to Customize
          </h2>
          <p className="mb-6 text-gray-600">Please choose a furniture item from our collection</p>
          <Link
            href="/en/products"
            className="inline-block rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-500"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">{selectedProduct.name}</h1>
          <p className="text-gray-600">{selectedProduct.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Sidebar - Customization Options */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <CustomizationPanel />

              {/* Price and Actions */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{t('price')}:</span>
                  <span className="text-2xl font-bold text-primary-600">
                    ${customization?.totalPrice.toLocaleString() || selectedProduct.basePrice.toLocaleString()}
                  </span>
                </div>

                {/* Price Breakdown */}
                <div className="mb-4 space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Base Price:</span>
                    <span>${selectedProduct.basePrice.toLocaleString()}</span>
                  </div>
                  {customization && customization.totalPrice > selectedProduct.basePrice && (
                    <div className="flex justify-between">
                      <span>Customizations:</span>
                      <span className="text-primary-600">
                        +${(customization.totalPrice - selectedProduct.basePrice).toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleAddToCart}
                    className="w-full rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-primary-500 hover:shadow-xl"
                  >
                    {t('addToCart')}
                  </button>

                  <button className="w-full rounded-lg border-2 border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition-all hover:border-primary-600 hover:text-primary-600">
                    {t('saveDesign')}
                  </button>

                  <button className="w-full rounded-lg border-2 border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition-all hover:border-primary-600 hover:text-primary-600">
                    {t('shareDesign')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Viewer */}
          <div className="lg:col-span-2">
            <div className="relative h-[600px] overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 shadow-lg">
              {/* AR Toggle */}
              <div className="absolute right-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-md">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm font-semibold text-gray-900">View in Your Home (AR)</span>
                <button
                  onClick={() => setARSession({ active: !arSession.active })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    arSession.active ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      arSession.active ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* 3D Viewer */}
              <ThreeViewer />
            </div>

            {/* Instructions */}
            <div className="mt-4 rounded-lg bg-white p-4 shadow">
              <p className="text-sm text-gray-600">
                💡 Use your mouse to rotate the view. Scroll to zoom in/out. {arSession.active && 'AR mode: Camera background enabled. '}
                Customize materials, legs, and artistic details from the panel on the left.
              </p>
            </div>

            {/* Product Info */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-white p-4 shadow">
                <h3 className="mb-2 font-semibold text-gray-900">Available Customizations</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>✓ {selectedProduct.availableParts.filter(p => p.type === 'leg').length} Leg Styles</li>
                  <li>✓ {selectedProduct.availableParts.filter(p => p.type === 'art').length} Artistic Details</li>
                  <li>✓ {selectedProduct.materials.length} Material Options</li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-4 shadow">
                <h3 className="mb-2 font-semibold text-gray-900">Product Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConfiguratorPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary-600 border-t-transparent mx-auto"></div>
          <p className="text-gray-600">Loading configurator...</p>
        </div>
      </div>
    }>
      <ConfiguratorContent />
    </Suspense>
  );
}
