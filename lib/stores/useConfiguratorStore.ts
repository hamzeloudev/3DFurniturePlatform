import { create } from 'zustand';
import { Product, FurnitureCustomization, SceneConfig, ARSession } from '@/types';

interface ConfiguratorStore {
  selectedProduct: Product | null;
  customization: FurnitureCustomization | null;
  sceneConfig: SceneConfig;
  arSession: ARSession;
  isLoading: boolean;

  setSelectedProduct: (product: Product) => void;
  updateCustomization: (customization: Partial<FurnitureCustomization>) => void;
  updateSceneConfig: (config: Partial<SceneConfig>) => void;
  setARSession: (session: Partial<ARSession>) => void;
  calculatePrice: () => void;
  reset: () => void;
  setLoading: (loading: boolean) => void;
}

const defaultSceneConfig: SceneConfig = {
  cameraPosition: [5, 3, 5],
  lightIntensity: 1,
  backgroundColor: '#f5f5f5',
  environmentPreset: 'apartment',
};

const defaultARSession: ARSession = {
  active: false,
  furnitureScale: 1,
};

export const useConfiguratorStore = create<ConfiguratorStore>((set, get) => ({
  selectedProduct: null,
  customization: null,
  sceneConfig: defaultSceneConfig,
  arSession: defaultARSession,
  isLoading: false,

  setSelectedProduct: (product: Product) => {
    set({
      selectedProduct: product,
      customization: {
        productId: product._id,
        selectedParts: {},
        selectedMaterial: product.materials[0]?.id || '',
        totalPrice: product.basePrice,
      },
    });
  },

  updateCustomization: (updates: Partial<FurnitureCustomization>) => {
    const { customization } = get();
    if (customization) {
      set({ customization: { ...customization, ...updates } });
      get().calculatePrice();
    }
  },

  updateSceneConfig: (config: Partial<SceneConfig>) => {
    set({ sceneConfig: { ...get().sceneConfig, ...config } });
  },

  setARSession: (session: Partial<ARSession>) => {
    set({ arSession: { ...get().arSession, ...session } });
  },

  calculatePrice: () => {
    const { selectedProduct, customization } = get();
    if (!selectedProduct || !customization) return;

    let totalPrice = selectedProduct.basePrice;

    // Add material price modifier
    const selectedMaterial = selectedProduct.materials.find(
      (m) => m.id === customization.selectedMaterial
    );
    if (selectedMaterial) {
      totalPrice += selectedMaterial.priceModifier;
    }

    // Add part price modifiers
    Object.values(customization.selectedParts).forEach((partId) => {
      const part = selectedProduct.availableParts.find((p) => p.id === partId);
      if (part) {
        totalPrice += part.priceModifier;
      }
    });

    set({
      customization: { ...customization, totalPrice },
    });
  },

  reset: () => {
    set({
      selectedProduct: null,
      customization: null,
      sceneConfig: defaultSceneConfig,
      arSession: defaultARSession,
    });
  },

  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },
}));
