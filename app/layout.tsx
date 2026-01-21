import { ReactNode } from 'react';
import { locales } from '@/i18n';

type Props = {
  children: ReactNode;
};

// Since the root layout must be static, we generate params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children }: Props) {
  return children;
}
