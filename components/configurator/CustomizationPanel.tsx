'use client';

import { useTranslations } from 'next-intl';
import { useConfiguratorStore } from '@/lib/stores/useConfiguratorStore';
import Image from 'next/image';

interface CustomizationPanelProps {
  activeTab: 'model' | 'woodType' | 'legsAndArts';
}

export default function CustomizationPanel({ activeTab }: CustomizationPanelProps) {
  const t = useTranslations('configurator');
  const { selectedProduct, customization, updateCustomization } = useConfiguratorStore();

  // Demo data - replace with actual product data
  const sofaModels = [
    { id: '1', name: 'Modern Sofa', thumbnail: '🛋️' },
    { id: '2', name: 'Classic Sofa', thumbnail: '🛋️' },
    { id: '3', name: 'Contemporary Sofa', thumbnail: '🛋️' },
  ];

  const woodTypes = [
    { id: 'oak', name: 'Oak', color: '#DEB887' },
    { id: 'walnut', name: 'Walnut', color: '#8B4513' },
    { id: 'mahogany', name: 'Mahogany', color: '#C04000' },
    { id: 'cherry', name: 'Cherry', color: '#C71585' },
  ];

  const legs = [
    { id: 'modern-metal', name: t('legs.modernMetal'), thumbnail: '⚙️' },
    { id: 'carved-wooden', name: t('legs.carvedWooden'), thumbnail: '🪵' },
    { id: 'modern-wooden', name: t('legs.modernWooden'), thumbnail: '🪵' },
    { id: 'carved-area', name: t('legs.carvedArea'), thumbnail: '🎨' },
  ];

  const renderModelSelection = () => (
    <div>
      <h3 className="mb-4 font-semibold text-gray-900">{t('tabs.model')}</h3>
      <div className="grid grid-cols-3 gap-3">
        {sofaModels.map((model) => (
          <button
            key={model.id}
            className="flex flex-col items-center rounded-lg border-2 border-gray-200 p-4 transition-all hover:border-primary-600 hover:shadow-md"
          >
            <div className="mb-2 text-4xl">{model.thumbnail}</div>
            <span className="text-xs text-gray-700">{model.name}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderWoodTypeSelection = () => (
    <div>
      <h3 className="mb-4 font-semibold text-gray-900">{t('tabs.woodType')}</h3>
      <div className="grid grid-cols-2 gap-3">
        {woodTypes.map((wood) => (
          <button
            key={wood.id}
            onClick={() => updateCustomization({ selectedMaterial: wood.id })}
            className={`flex flex-col items-center rounded-lg border-2 p-4 transition-all hover:border-primary-600 hover:shadow-md ${
              customization?.selectedMaterial === wood.id
                ? 'border-primary-600 bg-primary-50'
                : 'border-gray-200'
            }`}
          >
            <div
              className="mb-2 h-12 w-12 rounded-full border-2 border-gray-300"
              style={{ backgroundColor: wood.color }}
            />
            <span className="text-sm text-gray-700">{wood.name}</span>
          </button>
        ))}
      </div>
    </div>
  );

  const renderLegsAndArtsSelection = () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 font-semibold text-gray-900">{t('legs.title')}</h3>
        <div className="grid grid-cols-2 gap-3">
          {legs.map((leg) => (
            <button
              key={leg.id}
              onClick={() =>
                updateCustomization({
                  selectedParts: { ...customization?.selectedParts, leg: leg.id },
                })
              }
              className={`flex flex-col items-center rounded-lg border-2 p-4 transition-all hover:border-primary-600 hover:shadow-md ${
                customization?.selectedParts?.leg === leg.id
                  ? 'border-primary-600 bg-primary-50'
                  : 'border-gray-200'
              }`}
            >
              <div className="mb-2 text-3xl">{leg.thumbnail}</div>
              <span className="text-xs text-gray-700">{leg.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 font-semibold text-gray-900">{t('headboardArts.title')}</h3>
        <div className="grid grid-cols-2 gap-3">
          <button className="flex flex-col items-center rounded-lg border-2 border-gray-200 p-4 transition-all hover:border-primary-600 hover:shadow-md">
            <div className="mb-2 text-3xl">🌸</div>
            <span className="text-xs text-gray-700">{t('headboardArts.floralCarving')}</span>
          </button>
          <button className="flex flex-col items-center rounded-lg border-2 border-gray-200 p-4 transition-all hover:border-primary-600 hover:shadow-md">
            <div className="mb-2 text-3xl">🎨</div>
            <span className="text-xs text-gray-700">{t('headboardArts.fowetCarving')}</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {activeTab === 'model' && renderModelSelection()}
      {activeTab === 'woodType' && renderWoodTypeSelection()}
      {activeTab === 'legsAndArts' && renderLegsAndArtsSelection()}
    </div>
  );
}
