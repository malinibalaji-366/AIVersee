import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
export const metadata = {
  title: "Login | AIVerse",
};
export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="complete missions, build real AI projects, and grow one step closer to becoming an AI Engineer."
    >
      <LoginForm />
    </AuthLayout>
  );
}