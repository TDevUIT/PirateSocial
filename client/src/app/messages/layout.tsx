import Sidebar from "@/components/sidebar";

export default function MessageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <div className="flex h-screen">
            <Sidebar />
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </body>
    </html>
  );
}
