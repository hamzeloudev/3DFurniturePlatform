# Implementation Guide - OmniConfig 3D Platform

This document outlines the implementation status and next steps for completing all requested features.

## ✅ Completed Features

### Core Infrastructure
- ✅ Next.js 16 with App Router and TypeScript
- ✅ Tailwind CSS 3 with custom theming
- ✅ i18n support (English & Persian with RTL)
- ✅ MongoDB schemas and models
- ✅ Zustand state management
- ✅ Three.js integration for 3D rendering

### Pages Implemented
- ✅ Home page with hero and featured categories
- ✅ Products page with real demo data (6 products)
- ✅ 3D Configurator page with viewer
- ✅ Shopping cart with persistence
- ✅ Authentication pages (login/register)

### Demo Data
- ✅ Comprehensive product catalog (6 furniture items)
- ✅ 16 materials (wood, fabric, leather, metal)
- ✅ 6 leg styles
- ✅ 5 artistic detail options
- ✅ Product metadata with pricing

## 🚧 In Progress / Partially Implemented

### 3D Configurator
**Status**: Basic structure complete, needs enhancement

**To Complete**:
1. **Product Loading from URL**
   ```typescript
   // In configurator page, read product ID from URL params
   const productId = searchParams.get('product');
   // Load product using getProductById(productId)
   ```

2. **Dynamic Part Swapping**
   ```typescript
   // Update CustomizationPanel to:
   // - Show available parts for selected product
   // - Update 3D model when parts change
   // - Recalculate price on each change
   ```

3. **Material Application**
   ```typescript
   // Apply material colors/textures to 3D mesh:
   mesh.material = new MeshStandardMaterial({
     color: material.color,
     roughness: material.type === 'leather' ? 0.3 : 0.8
   });
   ```

### AR Mode
**Status**: UI toggle exists, camera background needs implementation

**To Implement**:
```typescript
// In ThreeViewer component:
if (arSession.active) {
  // 1. Request camera access
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });

  // 2. Create video element for background
  const video = document.createElement('video');
  video.srcObject = stream;

  // 3. Use video as canvas background
  // 4. Add plane detection for furniture placement
  // 5. Add resize/rotate controls
}
```

## 📋 Features To Implement

### 1. Enhanced Configurator Features

#### A. Real-Time Material Preview
```typescript
// lib/3d/materialApplier.ts
export function applyMaterialToMesh(mesh: Mesh, material: Material) {
  const mat = new MeshStandardMaterial({
    color: material.color,
    roughness: material.type === 'leather' ? 0.3 : 0.8,
    metalness: material.type === 'metal' ? 0.9 : 0.1,
  });

  if (material.textureUrl) {
    const textureLoader = new TextureLoader();
    mat.map = textureLoader.load(material.textureUrl);
  }

  mesh.material = mat;
}
```

#### B. Part Swapping Logic
```typescript
// lib/3d/partSwapper.ts
export async function swapPart(
  scene: Scene,
  partType: string,
  newPartUrl: string
) {
  // 1. Find existing part in scene
  const oldPart = scene.getObjectByName(partType);

  // 2. Load new part
  const loader = new GLTFLoader();
  const gltf = await loader.loadAsync(newPartUrl);

  // 3. Position new part
  gltf.scene.position.copy(oldPart.position);
  gltf.scene.rotation.copy(oldPart.rotation);

  // 4. Replace in scene
  scene.remove(oldPart);
  scene.add(gltf.scene);
}
```

### 2. Admin Dashboard

#### Pages to Create:
- `app/[locale]/admin/page.tsx` - Dashboard overview
- `app/[locale]/admin/products/page.tsx` - Product list
- `app/[locale]/admin/products/[id]/page.tsx` - Edit product
- `app/[locale]/admin/products/new/page.tsx` - Add product
- `app/[locale]/admin/orders/page.tsx` - Order management
- `app/[locale]/admin/analytics/page.tsx` - Analytics

#### Key Features:
```typescript
// Product Management
- Upload GLB models
- Set pricing for parts
- Manage materials
- Configure compatibility rules

// Order Management
- View all orders
- Update order status
- Track shipping
- Manage refunds

// Analytics
- Sales charts
- Popular products
- Customer behavior
- Revenue tracking
```

### 3. User Profile & Saved Designs

#### Create:
- `app/[locale]/profile/page.tsx`
- `app/[locale]/profile/designs/page.tsx`
- `app/[locale]/profile/orders/page.tsx`

#### Features:
```typescript
interface SavedDesign {
  id: string;
  productId: string;
  customization: FurnitureCustomization;
  thumbnail: string;
  createdAt: Date;
  name: string;
}

// Allow users to:
// - Save current customization
// - Load saved design
// - Share design (generate URL)
// - View order history
```

### 4. Checkout & Payment

#### Pages:
- `app/[locale]/checkout/page.tsx`
- `app/[locale]/checkout/success/page.tsx`

#### Implementation:
```typescript
// Install Stripe
npm install @stripe/stripe-js @stripe/react-stripe-js

// Create payment intent API
// app/api/create-payment-intent/route.ts
export async function POST(req: Request) {
  const { amount } = await req.json();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount * 100, // Convert to cents
    currency: 'usd',
  });

  return Response.json({
    clientSecret: paymentIntent.client_secret
  });
}
```

### 5. About & Contact Pages

#### Create:
```typescript
// app/[locale]/about/page.tsx
- Company story
- Mission & values
- Team members
- Sustainability commitment

// app/[locale]/contact/page.tsx
- Contact form
- Address & map
- Social media links
- Support email/phone
```

### 6. AR Enhancements

#### Room Measurement:
```typescript
// Use WebXR Device API
if ('xr' in navigator) {
  const session = await navigator.xr.requestSession('immersive-ar');

  // Implement hit testing for surfaces
  // Allow users to place furniture
  // Add measurement tools
  // Enable multiple item placement
}
```

#### Full AR Experience:
- Camera background ✓ (needs implementation)
- Surface detection
- Lighting estimation
- Multiple furniture placement
- Room scanning

### 7. Marketing Features

#### Email Newsletter:
```typescript
// components/marketing/NewsletterPopup.tsx
- Pop-up on homepage
- Email capture form
- Integration with mailing service (Mailchimp/SendGrid)
```

#### Referral Program:
```typescript
interface ReferralCode {
  code: string;
  userId: string;
  usedCount: number;
  discount: number;
}

// Generate unique code for each user
// Track referrals
// Apply discounts
// Show referral dashboard
```

#### Promotions:
```typescript
interface Promotion {
  code: string;
  discountType: 'percentage' | 'fixed';
  discountValue: number;
  validFrom: Date;
  validTo: Date;
  usageLimit?: number;
}

// Apply at checkout
// Show on homepage banner
// Time-limited offers
```

### 8. AI Features (Future)

#### Design Recommendations:
```typescript
// lib/ai/recommendations.ts
export function getRecommendations(
  userPreferences: any,
  currentSelection: any
) {
  // Analyze user's choices
  // Suggest complementary parts
  // Recommend popular combinations
  // ML model integration
}
```

## 🗂️ File Structure for New Features

```
app/[locale]/
├── about/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── profile/
│   ├── page.tsx
│   ├── designs/
│   │   └── page.tsx
│   └── orders/
│       └── page.tsx
├── checkout/
│   ├── page.tsx
│   └── success/
│       └── page.tsx
└── admin/
    ├── page.tsx
    ├── products/
    │   ├── page.tsx
    │   ├── [id]/
    │   │   └── page.tsx
    │   └── new/
    │       └── page.tsx
    ├── orders/
    │   └── page.tsx
    └── analytics/
        └── page.tsx

components/
├── 3d/
│   ├── ARViewer.tsx
│   ├── MaterialApplier.tsx
│   └── PartSwapper.tsx
├── admin/
│   ├── ProductForm.tsx
│   ├── OrderTable.tsx
│   └── AnalyticsChart.tsx
├── marketing/
│   ├── NewsletterPopup.tsx
│   └── ReferralWidget.tsx
└── checkout/
    ├── CheckoutForm.tsx
    └── PaymentElement.tsx

lib/
├── 3d/
│   ├── materialApplier.ts
│   ├── partSwapper.ts
│   └── arSession.ts
├── ai/
│   └── recommendations.ts
└── payments/
    └── stripe.ts
```

## 🎯 Priority Implementation Order

### Phase 1 (Critical - Week 1)
1. ✅ Complete demo data
2. ✅ Update products page
3. ⚠️ Enhance configurator with product loading
4. ⚠️ Implement material/part swapping
5. ⚠️ Add AR camera background

### Phase 2 (High Priority - Week 2)
1. Admin dashboard (product management)
2. User profile & saved designs
3. Checkout & payment integration
4. About & Contact pages

### Phase 3 (Medium Priority - Week 3-4)
1. Advanced AR features
2. Email newsletter
3. Referral program
4. Promotions system
5. Order management

### Phase 4 (Future Enhancements)
1. AI recommendations
2. VR support
3. Mobile app
4. Advanced analytics
5. Eco-tracking features

## 💡 Development Tips

### For 3D Features:
- Use `@react-three/drei` helpers for common 3D tasks
- Optimize models (keep under 5MB)
- Use Draco compression for GLB files
- Implement LOD (Level of Detail) for performance

### For AR:
- Test on actual devices (AR doesn't work well in desktop browsers)
- Use WebXR Device API for full AR support
- Fallback to model-viewer for basic AR
- Consider using 8th Wall or AR.js for better compatibility

### For Performance:
- Lazy load 3D models
- Use React.memo for expensive components
- Implement virtualization for long lists
- Cache API responses with SWR or React Query

### For State Management:
- Keep Zustand stores focused (separate concerns)
- Use persist middleware for cart & preferences
- Implement optimistic updates for better UX

## 📦 Additional Dependencies Needed

```bash
# For advanced 3D features
npm install @react-three/postprocessing leva

# For AR
npm install @google/model-viewer

# For payments
npm install @stripe/stripe-js @stripe/react-stripe-js

# For analytics
npm install recharts

# For forms
npm install react-hook-form @hookform/resolvers yup

# For email
npm install @sendgrid/mail

# For file uploads
npm install uploadthing @uploadthing/react
```

## 🔧 Configuration Files

### Environment Variables to Add:
```env
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# SendGrid
SENDGRID_API_KEY=SG....

# Upload Thing
UPLOADTHING_SECRET=sk_...
UPLOADTHING_APP_ID=...

# Analytics
NEXT_PUBLIC_GA_ID=G-...
```

## 📚 Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
- [WebXR Device API](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API)
- [Stripe Documentation](https://stripe.com/docs)
- [Next.js App Router](https://nextjs.org/docs/app)

## 🤝 Contributing

When implementing new features:
1. Create feature branch from main
2. Follow existing code patterns
3. Add TypeScript types
4. Test on both EN/FA locales
5. Ensure mobile responsiveness
6. Update this guide with changes

---

**Last Updated**: January 2026
**Status**: Phase 1 in progress
