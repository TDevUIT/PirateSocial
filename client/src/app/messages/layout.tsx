import Sidebar from "@/components/sidebar";

export default function MessageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
