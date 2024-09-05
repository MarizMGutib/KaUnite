
import ProvidersWrappers from "@/components/providerWrappers";
import AdminSidebar from "@/components/adminSidebar";
import AdminHeader from "@/components/adminHeader";


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
