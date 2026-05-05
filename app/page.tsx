import HeroSlider from "@/components/home/hero-slider";
import LogoSlider from "@/components/logoSlider/logoSlider";

export default function Home() {
  return (
    <>
      <div className="bbt-content-area">
        <HeroSlider />
      </div>

      <div className="bbt-footer">
        <LogoSlider />
      </div>
    </>
  );
}