import { DM_Sans } from "next/font/google";
import "./globals.css";

const inter = DM_Sans({
  subsets: ["latin"]
});


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
