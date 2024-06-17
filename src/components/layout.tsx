"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isRegisterOrDashboradPage = pathname === "/register" || pathname === '/dashboard';
  return (
    <>
      {!isRegisterOrDashboradPage && <Header />}
      {children}
      {!isRegisterOrDashboradPage && <Footer />}
    </>
  );
}
