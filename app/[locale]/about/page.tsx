import { useLocale } from 'next-intl';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            {locale === 'en' ? 'About OmniConfig 3D' : 'درباره اومنی کانفیگ سه بعدی'}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {locale === 'en'
              ? 'Revolutionizing furniture customization with cutting-edge 3D technology and augmented reality'
              : 'متحول کردن سفارشی‌سازی مبلمان با فناوری سه بعدی پیشرفته و واقعیت افزوده'}
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16 rounded-2xl bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {locale === 'en' ? 'Our Mission' : 'مأموریت ما'}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {locale === 'en'
              ? 'At OmniConfig 3D, we believe that everyone deserves furniture that perfectly matches their style, space, and needs. Our mission is to democratize custom furniture design by providing an intuitive, powerful platform that lets you visualize and customize your dream furniture in real-time 3D, then see it in your actual space using augmented reality.'
              : 'در اومنی کانفیگ سه بعدی، ما معتقدیم که همه شایسته مبلمانی هستند که کاملاً با سبک، فضا و نیازهایشان مطابقت داشته باشد. مأموریت ما دموکراتیک کردن طراحی مبلمان سفارشی با ارائه یک پلتفرم قدرتمند و بصری است که به شما امکان می‌دهد مبلمان رویایی خود را به صورت سه بعدی و لحظه‌ای تجسم کنید و سپس با استفاده از واقعیت افزوده آن را در فضای واقعی خود ببینید.'}
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4 text-5xl">🎨</div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              {locale === 'en' ? '3D Customization' : 'سفارشی‌سازی سه بعدی'}
            </h3>
            <p className="text-gray-600">
              {locale === 'en'
                ? 'Real-time 3D visualization lets you see every detail of your custom furniture before ordering'
                : 'تجسم سه بعدی لحظه‌ای به شما امکان می‌دهد قبل از سفارش، هر جزئیات مبلمان سفارشی خود را ببینید'}
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4 text-5xl">📱</div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              {locale === 'en' ? 'AR Preview' : 'پیش‌نمایش واقعیت افزوده'}
            </h3>
            <p className="text-gray-600">
              {locale === 'en'
                ? 'See how your furniture fits in your actual space using augmented reality on your phone'
                : 'با استفاده از واقعیت افزوده روی تلفن خود ببینید مبلمان شما چگونه در فضای واقعی قرار می‌گیرد'}
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="mb-4 text-5xl">🌱</div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">
              {locale === 'en' ? 'Sustainable' : 'پایدار'}
            </h3>
            <p className="text-gray-600">
              {locale === 'en'
                ? 'Choose from eco-friendly materials and track the carbon footprint of your design'
                : 'از مواد سازگار با محیط زیست انتخاب کنید و ردپای کربن طراحی خود را دنبال کنید'}
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16 rounded-2xl bg-gradient-to-br from-primary-50 to-primary-100 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {locale === 'en' ? 'Our Story' : 'داستان ما'}
          </h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            {locale === 'en'
              ? 'Founded in 2024, OmniConfig 3D emerged from a simple frustration: why is it so hard to customize furniture online? Traditional furniture shopping forces you to imagine how pieces will look, relying on 2D images and guesswork about dimensions.'
              : 'در سال 2024 تأسیس شد، اومنی کانفیگ سه بعدی از یک ناامیدی ساده پدید آمد: چرا سفارشی‌سازی مبلمان به صورت آنلاین این قدر سخت است؟ خرید سنتی مبلمان شما را مجبور می‌کند تصور کنید که قطعات چگونه به نظر می‌رسند و به تصاویر دو بعدی و حدس و گمان درباره ابعاد تکیه کنید.'}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {locale === 'en'
              ? 'We set out to change that. By combining cutting-edge 3D technology, augmented reality, and intuitive design tools, we\'ve created a platform that makes custom furniture accessible to everyone. Our team of designers, engineers, and craftspeople work together to ensure that what you see is exactly what you get.'
              : 'ما تصمیم گرفتیم این را تغییر دهیم. با ترکیب فناوری پیشرفته سه بعدی، واقعیت افزوده و ابزارهای طراحی بصری، ما پلتفرمی ایجاد کرده‌ایم که مبلمان سفارشی را برای همه قابل دسترس می‌کند. تیم ما متشکل از طراحان، مهندسان و صنعتگران است که با هم کار می‌کنند تا اطمینان حاصل کنند که آنچه می‌بینید دقیقاً همان چیزی است که دریافت می‌کنید.'}
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            {locale === 'en' ? 'Our Values' : 'ارزش‌های ما'}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border-l-4 border-primary-600 bg-white p-6 shadow">
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {locale === 'en' ? 'Innovation' : 'نوآوری'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'We continuously push boundaries with new technologies to enhance your experience'
                  : 'ما به طور مداوم با فناوری‌های جدید مرزها را جابجا می‌کنیم تا تجربه شما را بهبود بخشیم'}
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-primary-600 bg-white p-6 shadow">
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {locale === 'en' ? 'Quality' : 'کیفیت'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Every piece is crafted with attention to detail and built to last'
                  : 'هر قطعه با دقت به جزئیات ساخته شده و برای ماندگاری ساخته شده است'}
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-primary-600 bg-white p-6 shadow">
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {locale === 'en' ? 'Sustainability' : 'پایداری'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'We\'re committed to eco-friendly materials and sustainable manufacturing practices'
                  : 'ما متعهد به مواد سازگار با محیط زیست و روش‌های تولید پایدار هستیم'}
              </p>
            </div>

            <div className="rounded-lg border-l-4 border-primary-600 bg-white p-6 shadow">
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {locale === 'en' ? 'Customer Focus' : 'تمرکز بر مشتری'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Your satisfaction is our priority, from design to delivery and beyond'
                  : 'رضایت شما اولویت ماست، از طراحی تا تحویل و فراتر از آن'}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            {locale === 'en' ? 'Ready to Start Designing?' : 'آماده شروع طراحی هستید؟'}
          </h2>
          <p className="mb-6 text-gray-600">
            {locale === 'en'
              ? 'Join thousands of satisfied customers who have transformed their spaces with OmniConfig 3D'
              : 'به هزاران مشتری راضی بپیوندید که فضاهای خود را با اومنی کانفیگ سه بعدی تغییر داده‌اند'}
          </p>
          <a
            href={`/${locale}/configurator`}
            className="inline-block rounded-lg bg-primary-600 px-8 py-3 font-semibold text-white transition-all hover:bg-primary-500"
          >
            {locale === 'en' ? 'Start Customizing' : 'شروع سفارشی‌سازی'}
          </a>
        </div>
      </div>
    </div>
  );
}
