import { HeroHeader } from "@/components/header";
import { SignUp } from "@clerk/nextjs";

export default function RegisterPage() {
  return (
    <>
      <HeroHeader />
      <main className="flex justify-center items-center min-h-screen bg-background pt-20">
        <SignUp forceRedirectUrl="/menu" signInUrl="/login" />
      </main>
    </>
  );
}
