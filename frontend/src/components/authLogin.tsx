"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLogin() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  if (session) {
    return null;
  } else {
    return (
      <div className="mx-auto flex w-[300px] items-center justify-around text-sm lg:w-full lg:text-2xl">
        <button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          type="button"
          className="flex w-full flex-row items-center justify-center rounded-lg border-[1px] border-primary-color px-2 py-1 lg:rounded-xl lg:px-4 lg:py-2"
        >
          <img
            src="/landing/google.png"
            alt=""
            width={24}
            height={24}
            className="my-auto mr-1 lg:mr-3"
          />{" "}
          Google
        </button>
      </div>
    );
  }
}
