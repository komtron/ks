import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // 300 for light, 400 for regular, 700 for bold
});

export const metadata = {
  title: 'Zen Massage Therapy',
  description: 'Experience the art of relaxation',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
