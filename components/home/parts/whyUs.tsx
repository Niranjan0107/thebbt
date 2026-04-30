
import Image from "next/image";
import Link from "next/link";

export default function whyUs() {
  return (
  <>
  <div className="bbt-part-box">
    <div className="bbt-part-box-f">
        <div className="bbt-part-header">
            <span>02</span>
            <Link href="/">
          <Image
            src="/images/Arrow.png"
            alt="BBT Arrow"
            width={140}
            height={50}
            priority
          />
        </Link>
        </div>
        <div className="bbt-part-content">
            <h3><span>Why</span> us.</h3>
            <p>A studio of seventeen. Founder-led, always.</p>
        </div>
    </div>

    <div className="bbt-card-back">
                  <div className="bbt-hover-card">
                <h3><span>Why</span> us.</h3>
                <p>A founder-led studio focused on clarity, precision, and outcomes. No guesswork. Just considered decisions.</p>
                <Link href="/">See How we Work  <Image
            src="/images/Arrow.png"
            alt="BBT Arrow"
            width={140}
            height={50}
            priority
          /></Link>
            </div>
    </div>
  </div>
  </>
  );
}