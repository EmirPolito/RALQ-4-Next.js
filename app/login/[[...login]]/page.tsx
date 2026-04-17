import { SignIn } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-background pt-20 px-4">
      <SignIn
        forceRedirectUrl="/menu"
        signUpUrl="/registro"
        appearance={{
          variables: {
            colorBackground: "var(--card)",
            colorText: "var(--foreground)",
          },
          elements: {
            card: "w-full max-w-[600px] border border-border shadow-2xl",
            rootBox: "w-full flex justify-center",
          },
        }}
      />
    </main>
  );
}
