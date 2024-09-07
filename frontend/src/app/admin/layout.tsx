
import ProvidersWrappers from "@/components/ProviderWrappers";
import AdminSidebar from "@/components/AdminSidebar";
import AdminHeader from "@/components/AdminHeader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="font-poppins">
        <ProvidersWrappers>
          <div className="flex w-full">
            <AdminSidebar />
            <div className="w-full">
              <AdminHeader />
              {children}
            </div>
          </div>
        </ProvidersWrappers>
      </body>
    </html>
  );
}
