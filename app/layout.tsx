import type { Metadata } from "next";

import "./globals.css";
import {IBM_Plex_Sans} from 'next/font/google'
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Vivid AI",
  description: "Transform your photos with Vivid AI, the ultimate AI-powered image enhancer. Enhance resolution, clarity, and vibrancy with cutting-edge technology designed for photographers, designers, and anyone seeking picture-perfect results. Experience stunning photo quality with ease—no technical skills required. Try Vivid AI today and elevate your visuals to the next level!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        {
          children
        }
      </body>
    </html>
  </ClerkProvider>
  );
}
