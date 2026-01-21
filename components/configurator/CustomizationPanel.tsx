'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useConfiguratorStore } from '@/lib/stores/useConfiguratorStore';

export default function CustomizationPanel() {
  const t = useTranslations('configurator');
  const { selectedProduct, customization, updateCustomization } = useConfiguratorStore();
  const [activeTab, setActiveTab] = useState<'materials' | 'legs' | 'arts'>('materials');

  if (!selectedProduct) {
    return null;
  }

  // Get available options from the product (already full objects, not IDs)
  const availableMaterials = selectedProduct.materials;
  const availableLegs = selectedProduct.availableParts.filter((part) => part.type === 'leg');
  const availableArts = selectedProduct.availableParts.filter((part) => part.type === 'art');

  // Get currently selected material and parts (need to look up by ID)
  const selectedMaterial = customization?.selectedMaterial
    ? availableMaterials.find((m) => m.id === customization.selectedMaterial)
    : null;
  const selectedLeg = customization?.selectedParts?.leg
    ? availableLegs.find((l) => l.id === customization.selectedParts.leg)
    : null;
  const selectedArt = customization?.selectedParts?.art
    ? availableArts.find((a) => a.id === customization.selectedParts.art)
    : null;

  const renderMaterialsTab = () => (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-gray-900">{t('tabs.woodType')}</h3>
      <div className="space-y-3">
        {availableMaterials.map((material) => {
          if (!material) return null;
          const isSelected = customization?.selectedMaterial === material.id;
          const priceModifier = material.priceModifier > 0 ? `+$${material.priceModifier}` : 'Included';

          return (
            <button
              key={material.id}
              onClick={() => updateCustomization({ selectedMaterial: material.id })}
              className={`w-full flex items-center justify-between rounded-lg border-2 p-4 transition-all hover:border-primary-600 hover:shadow-md ${
                isSelected ? 'border-primary-600 bg-primary-50' : 'border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full border-2 border-gray-300 shadow-sm"
                  style={{ backgroundColor: material.color }}
                />
                <div className="text-left">
                  <div className="font-medium text-gray-900">{material.name}</div>
                  <div className="text-xs text-gray-500">
                    {material.ecoFriendly && '🌱 '}{material.type}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-sm font-semibold ${isSelected ? 'text-primary-600' : 'text-gray-700'}`}>
                  {priceModifier}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderLegsTab = () => (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-gray-900">{t('legs.title')}</h3>
      {availableLegs.length === 0 ? (
        <p className="text-sm text-gray-500">No leg options available for this product.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {availableLegs.map((part) => {
            if (!part) return null;
            const isSelected = customization?.selectedParts?.leg === part.id;
            const priceModifier = part.priceModifier > 0 ? `+$${part.priceModifier}` : '';

            return (
              <button
                key={part.id}
                onClick={() =>
                  updateCustomization({
                    selectedParts: { ...customization?.selectedParts, leg: part.id },
                  })
                }
                className={`flex flex-col items-center rounded-lg border-2 p-4 transition-all hover:border-primary-600 hover:shadow-md ${
                  isSelected ? 'border-primary-600 bg-primary-50' : 'border-gray-200'
                }`}
              >
                <div className="mb-2 text-3xl">🦵</div>
                <span className="text-xs font-medium text-gray-900 text-center">{part.name}</span>
                {priceModifier && (
                  <span className="mt-1 text-xs font-semibold text-primary-600">{priceModifier}</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );

  const renderArtsTab = () => (
    <div>
      <h3 className="mb-4 text-lg font-semibold text-gray-900">{t('headboardArts.title')}</h3>
      {availableArts.length === 0 ? (
        <p className="text-sm text-gray-500">No artistic detail options available for this product.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {availableArts.map((part) => {
            if (!part) return null;
            const isSelected = customization?.selectedParts?.art === part.id;
            const priceModifier = part.priceModifier > 0 ? `+$${part.priceModifier}` : '';

            return (
              <button
                key={part.id}
                onClick={() =>
                  updateCustomization({
                    selectedParts: { ...customization?.selectedParts, art: part.id },
                  })
                }
                className={`flex flex-col items-center rounded-lg border-2 p-4 transition-all hover:border-primary-600 hover:shadow-md ${
                  isSelected ? 'border-primary-600 bg-primary-50' : 'border-gray-200'
                }`}
              >
                <div className="mb-2 text-3xl">🎨</div>
                <span className="text-xs font-medium text-gray-900 text-center">{part.name}</span>
                {priceModifier && (
                  <span className="mt-1 text-xs font-semibold text-primary-600">{priceModifier}</span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex gap-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('materials')}
          className={`px-4 py-2 text-sm font-semibold transition-all ${
            activeTab === 'materials'
              ? 'border-b-2 border-primary-600 text-primary-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Materials ({availableMaterials.length})
        </button>
        <button
          onClick={() => setActiveTab('legs')}
          className={`px-4 py-2 text-sm font-semibold transition-all ${
            activeTab === 'legs'
              ? 'border-b-2 border-primary-600 text-primary-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Legs ({availableLegs.length})
        </button>
        <button
          onClick={() => setActiveTab('arts')}
          className={`px-4 py-2 text-sm font-semibold transition-all ${
            activeTab === 'arts'
              ? 'border-b-2 border-primary-600 text-primary-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Arts ({availableArts.length})
        </button>
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        {activeTab === 'materials' && renderMaterialsTab()}
        {activeTab === 'legs' && renderLegsTab()}
        {activeTab === 'arts' && renderArtsTab()}
      </div>

      {/* Current Selection Summary */}
      <div className="rounded-lg bg-gray-50 p-4">
        <h4 className="mb-3 text-sm font-semibold text-gray-900">Current Selection</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Material:</span>
            <span className="font-medium text-gray-900">
              {selectedMaterial?.name || 'None selected'}
            </span>
          </div>
          {availableLegs.length > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Legs:</span>
              <span className="font-medium text-gray-900">
                {selectedLeg?.name || 'None selected'}
              </span>
            </div>
          )}
          {availableArts.length > 0 && (
            <div className="flex justify-between">
              <span className="text-gray-600">Artistic Details:</span>
              <span className="font-medium text-gray-900">
                {selectedArt?.name || 'None selected'}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
