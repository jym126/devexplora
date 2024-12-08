import AppDev from "@/components/AppDev";
import DevExplora from "@/components/DevExplora";
import LearnJavaScript from "@/components/LearnJavaScript";
import SpaceComponent from "@/components/SpaceComponent";
import { useDocumentTitle } from "@/hooks/title";

export default function Home() {
  // Titulo
  useDocumentTitle("Inicio | DevExplora");

  return (
    <>
      <DevExplora />
      <div className="max-w-7xl mx-auto">
        <SpaceComponent />
        <AppDev />
        <LearnJavaScript />
      </div>
    </>
  );
}
