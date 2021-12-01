import LoginContainer from "@/components/container/page/LoginContainer";
import SingleLayout from "@/layout/SingleLayout";
import HeadDefault from "@/layout/head/HeadDefault";

export default function LoginPage() {
  return (
    <>
      <HeadDefault title="Matrix CDG APP" description="Admin Dashboard" />
      <SingleLayout>
        <LoginContainer />
      </SingleLayout>
    </>
  );
}
