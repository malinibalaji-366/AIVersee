import AuthLayout from "@/components/auth/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";

export const metadata = {
  title: "Sign Up | AIVerse",
};
export default function SignupPage() {
  return (
    <AuthLayout
      title="Begin Your Journey 🚀"
      subtitle="Join AIVerse and start learning AI through interactive missions, real projects, and daily challenges."
    >
      <SignupForm />
    </AuthLayout>
  );
}