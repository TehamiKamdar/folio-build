import type { ReactNode } from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { C , globalStyles } from "../styles/theme";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="noise-overlay" style={{ minHeight: "100vh", background: C.bg, color: C.text, fontFamily: "'Geist', sans-serif" }}>
      <style>{globalStyles}</style>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}