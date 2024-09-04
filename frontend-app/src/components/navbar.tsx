"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Library", href: "/library" },
  { name: "Job Portal", href: "/jobs" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut({ redirect: false }).then(() => {
      router.push("/");
    });
  };

  return (
    <div className="bg-[#165B4B] p-6">
      <div className="container flex">
        <div className="text-2xl font-bold tracking-wide text-white">
          KaUnite
        </div>
        <div className="flex-1 space-x-20 text-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                href={link.href}
                key={link.name}
                className={isActive ? "text-gray-400" : "text-white"}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div>
          <Link href="/login" className="ml-[20rem] text-white">
           <span className="text-white">Login</span>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
