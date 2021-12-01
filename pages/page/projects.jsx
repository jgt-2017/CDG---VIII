import MainLayout from "@/layout/MainLayout";
import HeadDefault from "@/layout/head/HeadDefault";
import ProjectsHorizontal from "@/components/cards/ProjectHorizontal";

export default function project() {
  return (
    <div>
      <>
        <HeadDefault title="Projects" description="Dashboard" />
        <MainLayout>
          <ProjectsHorizontal />
        </MainLayout>
      </>
    </div>
  );
}
