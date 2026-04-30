
import Image from "next/image";
import Link from "next/link";

export default function areaWeServe() {
  return (
     <>
  <div className="bbt-part-box">
    <div className="bbt-part-box-f">
        <div className="bbt-part-header">
            <span>01</span>
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
         <h3><span>Sectors</span> we serve.</h3>
            <p>Six disciplines. Hospitality to high finance.</p>
        </div>
    </div>

    <div className="bbt-card-back">
                  <div className="bbt-hover-card">
                <h3><span>Sectors</span> we serve.</h3>
                <ul className="sectors-menu">
                   <li><Link href="/"><span>01</span> Real estate</Link></li>
                    <li><Link href="/"><span>02</span> Manufacturing</Link></li>
                <li><Link href="/"><span>03</span> Consumer & D2C</Link></li>
                <li><Link href="/"><span>04</span> Enterprises</Link></li>
                <li><Link href="/"><span>05</span> Social Impact</Link></li>
                </ul>
            </div>
    </div>
  </div>
  </>
  );
}