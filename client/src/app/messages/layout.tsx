'use client';
import Sidebar from "./_components/sidebar/sidebar";
import { useToggle } from "@/context/control";
import useIsMobile from "@/hook/useIsMobile";
export default function MessageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { showChildren, toggleChildren } = useToggle();
  const isMobile = useIsMobile();
  return (
    <div className="flex h-screen w-full">
      <Sidebar className={`md:block ${isMobile && showChildren ? "hidden md:block" : "block"}`} />
      <main className={`relative flex-grow ${isMobile && showChildren ? "w-full" : "hidden md:block"}`}>
        {children}
      </main>
    </div>
  );
}
