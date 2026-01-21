'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import ThreeViewer from '@/components/configurator/ThreeViewer';
import CustomizationPanel from '@/components/configurator/CustomizationPanel';
import { useConfiguratorStore } from '@/lib/stores/useConfiguratorStore';

export default function ConfiguratorPage() {
  const t = useTranslations('configurator');
  const [activeTab, setActiveTab] = useState<'model' | 'woodType' | 'legsAndArts'>('model');
  const { selectedProduct, customization, arSession, setARSession } = useConfiguratorStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">{t('title')}</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Sidebar - Customization Options */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              {/* Tabs */}
              <div className="mb-6 flex gap-2 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('model')}
                  className={`px-4 py-2 font-semibold transition-colors ${
                    activeTab === 'model'
                      ? 'border-b-2 border-primary-600 text-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t('tabs.model')}
                </button>
                <button
                  onClick={() => setActiveTab('woodType')}
                  className={`px-4 py-2 font-semibold transition-colors ${
                    activeTab === 'woodType'
                      ? 'border-b-2 border-primary-600 text-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t('tabs.woodType')}
                </button>
                <button
                  onClick={() => setActiveTab('legsAndArts')}
                  className={`px-4 py-2 font-semibold transition-colors ${
                    activeTab === 'legsAndArts'
                      ? 'border-b-2 border-primary-600 text-primary-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t('tabs.legsAndArts')}
                </button>
              </div>

              {/* Customization Panel */}
              <CustomizationPanel activeTab={activeTab} />

              {/* Price and Actions */}
              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{t('price')}:</span>
                  <span className="text-2xl font-bold text-primary-600">
                    ${customization?.totalPrice.toLocaleString() || '0'}
                  </span>
                </div>

                <div className="space-y-3">
                  <button className="w-full rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-primary-500 hover:shadow-xl">
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
                💡 Use your mouse to rotate the view. Scroll to zoom in/out. Click on parts to
                select and customize them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
