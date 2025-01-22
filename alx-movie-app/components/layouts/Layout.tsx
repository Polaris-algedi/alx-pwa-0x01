import { ComponentProps } from "@/interfaces";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: ComponentProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
