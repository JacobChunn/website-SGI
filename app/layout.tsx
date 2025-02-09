import ThemeProvider from "@/components/theme-provider";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";


const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "The Stellar Group",
  description: "The Stellar Group's home remodeling website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
