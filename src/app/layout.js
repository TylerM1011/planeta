import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import styles from "./layour.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "PlanetA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav className={styles.topnav}>
          <Link className={styles.topLink} href="/">
            Home{" "}
          </Link>
          <Link className={styles.topLink} href="/games">
            Games{" "}
          </Link>
          <Link className={styles.topLink} href="/store">
            Store{" "}
          </Link>
          <Link className={styles.topLink} href="/friends">
            Friends{" "}
          </Link>
          <Link className={styles.topLink} href="/profile">
            Profile{" "}
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
