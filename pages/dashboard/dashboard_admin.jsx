import HeadDefault from "@/layout/head/HeadDefault";
//import TablePage from "@/components/table/TablePage";
import DashboardContainer from "@/components/container/dashboard/DashboardContainer";
import MainLayout from "@/layout/MainLayout";
export default function dashboard_admin() {
  return (
    <>
      <MainLayout>
        <HeadDefault title="Matrix CDG" description="Admin Dashboard" />
        <DashboardContainer />
      </MainLayout>
    </>
  );
}
