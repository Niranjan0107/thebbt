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
       {/* Button */}
    <button
  className="text-white px-6 py-3 block md:hidden relative z-[1]"
  style={{
    backgroundImage: "url('/images/btn-bg.gif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  Start a <em>Conversation</em>
</button>
    </>
  );
}