import Sidebar from "../components/layout/sidebar";
import HeroSlider from "../components/home/hero-slider";
import LogoSlider from "@/components/logoSlider/logoSlider";

export default function Home() {
  return (
    <main className=" overflow-hidden">
      <div className="bbt-layout flex h-screen">
        <div className="w-[255px] bbt-sidebar">
      <Sidebar />
      </div>
      <div className="bbt-content">
           <div className="bbt-content-area">
      <HeroSlider />
      </div>
      <div className="bbt-footer">
      <LogoSlider/>
      </div>
      </div>
      </div>
    </main>
  );
}