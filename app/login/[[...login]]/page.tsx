import { HeroHeader } from "@/components/header";
import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <>
      <HeroHeader />
      <main className="flex justify-center items-center min-h-screen bg-background pt-20">
        <SignIn forceRedirectUrl="/menu" signUpUrl="/registro" />
      </main>
    </>
  );
}
