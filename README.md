# OmniConfig 3D - 3D Furniture Customization Platform

A comprehensive 3D furniture customization platform built with Next.js 16, TypeScript, Three.js, and MongoDB. Features real-time 3D visualization, augmented reality support, and multi-language support (English and Persian).

## 🚀 Features

### Core Features
- **3D Customization Tools**: Real-time furniture customization with modular part swapping (legs, materials, artistic details)
- **Interactive 3D Viewer**: Powered by Three.js and React Three Fiber
- **AR Integration**: View furniture in your space using augmented reality
- **Multi-language Support**: Full i18n support for English and Persian (RTL support included)
- **State Management**: Zustand for efficient global state management
- **MongoDB Integration**: Full-stack solution with Mongoose schemas
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4

### Page Features
1. **Home Page**: Hero section with featured furniture categories
2. **Product Collection**: Browse and filter furniture by category
3. **3D Configurator**: Customize furniture with real-time 3D preview
4. **Shopping Cart**: Full cart management with quantity controls
5. **Authentication**: Login and registration pages
6. **User Profiles**: Save designs and order history (planned)
7. **Admin Dashboard**: Product and order management (planned)

### Technical Features
- **Next.js 16 App Router**: Latest Next.js features with server components
- **TypeScript**: Full type safety
- **Tailwind CSS 4**: Modern styling with CSS variables
- **Three.js**: 3D rendering and visualization
- **MongoDB**: NoSQL database for flexible data storage
- **Zustand**: Lightweight state management

## 📋 Prerequisites

- Node.js 18+ and npm
- MongoDB (local or cloud instance)
- Modern web browser with WebGL support

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 3DFurniturePlatform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and configure:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: Secret key for authentication
   - Other optional configurations (Stripe, AWS S3, etc.)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗂️ Project Structure

```
├── app/
│   ├── [locale]/              # Localized routes
│   │   ├── page.tsx           # Home page
│   │   ├── products/          # Product listing
│   │   ├── configurator/      # 3D configurator
│   │   ├── cart/              # Shopping cart
│   │   ├── auth/              # Authentication pages
│   │   └── layout.tsx         # Locale layout
│   └── globals.css            # Global styles with CSS variables
├── components/
│   ├── layout/                # Header, Footer, Navigation
│   ├── configurator/          # 3D viewer and customization panels
│   ├── product/               # Product components
│   └── ui/                    # Reusable UI components
├── lib/
│   ├── db/                    # MongoDB connection and models
│   ├── stores/                # Zustand state stores
│   ├── utils/                 # Utility functions
│   └── hooks/                 # Custom React hooks
├── types/                     # TypeScript type definitions
├── locales/                   # i18n translation files
│   ├── en/                    # English translations
│   └── fa/                    # Persian translations
├── public/                    # Static assets
│   ├── models/                # 3D GLB models
│   ├── images/                # Images
│   └── textures/              # 3D textures
├── i18n.ts                    # i18n configuration
├── middleware.ts              # Next.js middleware for i18n
└── next.config.ts             # Next.js configuration
```

## 🎨 Key Technologies

- **Frontend Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with CSS variables
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **State Management**: Zustand
- **Database**: MongoDB with Mongoose
- **Internationalization**: next-intl
- **Authentication**: JWT + bcrypt

## 🌐 Internationalization

The platform supports English and Persian languages with full RTL support:

- **English** (en): Default language
- **Persian** (fa): RTL layout with Persian translations

Switch languages using the language switcher in the header.

## 📝 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server
- `npm run lint`: Run ESLint
- `npm run type-check`: TypeScript type checking

## 🔒 Environment Variables

See `.env.example` for all available configuration options.

## 🚧 Roadmap

### Phase 1 (Current)
- ✅ Project setup with Next.js 16
- ✅ Basic layout and navigation
- ✅ Home page
- ✅ 3D configurator page
- ✅ Product listing
- ✅ Shopping cart
- ✅ Authentication pages
- ✅ i18n support (EN/FA)

### Phase 2 (Planned)
- [ ] Admin dashboard
- [ ] Order management
- [ ] Payment integration (Stripe)
- [ ] User profile pages
- [ ] Real GLB model loading
- [ ] Advanced AR features

### Phase 3 (Future)
- [ ] AI-driven design recommendations
- [ ] Virtual room designer
- [ ] Eco-friendly materials tracking
- [ ] Mobile app
- [ ] VR support

## 📄 License

ISC

---

**Built with ❤️ using Next.js 16, Three.js, and MongoDB**