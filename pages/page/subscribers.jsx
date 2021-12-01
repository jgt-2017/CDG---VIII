import MainLayout from "@/layout/MainLayout";

import HeadDefault from "@/layout/head/HeadDefault";

import SubscriberContainer from "@/components/container/page/SubscriberContainer";

export default function Subscribers() {
  return (
    <div>
      <>
        <HeadDefault title="Projects" description="Dashboard" />
        <MainLayout>
          <SubscriberContainer />
        </MainLayout>
      </>
    </div>
  );
}
