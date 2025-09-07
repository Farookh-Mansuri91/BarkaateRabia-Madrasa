// src/app/layout.tsx
import 'bootstrap/dist/css/bootstrap.min.css';  // <-- Add this line
import { ReactNode } from 'react';
import Header from './component/common/header';
import Footer from './component/common/footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
