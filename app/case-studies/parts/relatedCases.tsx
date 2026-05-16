import Link from "next/link";
import { cases, Case } from "@/lib/cases";

type RelatedProps = {
  currentSlug: string;
};

export default function RelatedCases({
  currentSlug,
}: RelatedProps) {

const relatedCases = cases
  .filter((item) => item.slug !== currentSlug)
  .slice(0, 3);

  return (
    <div className=" border-t border-white/10 px-4 py-15 md:px-16 md:py-20">

      {/* Heading */}
      <div className="flex justify-between items-center mb-10">

        <h2 className="text-3xl text-white">
          More from the{" "}
          <span className="italic font-source-serif">
            archive.
          </span>
        </h2>

        <Link
          href="/case-studies"
          className="hidden md:block uppercase text-[11px] tracking-[2px] text-white/50 hover:text-white transition"
        >
          View Full Index →
        </Link>

      </div>

      {/* Grid */}
      <div className="flex overflow-x-auto gap-6 whitespace-nowrap
md:grid md:grid-cols-3 md:overflow-auto  scrollbar-hide">

        {relatedCases.map((item) => (
          <Link
            key={item.slug}
            href={`/case-studies/${item.slug}`}
            className="group min-w-[80%] md:min-w-0"
          >

            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[320px] object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Meta */}
            <div className="flex justify-between mt-4 text-[10px] uppercase tracking-[2px] text-white/40">
              <span>{item.id}</span>
              <span>{item.category}</span>
            </div>

            {/* Title */}
            <h3 className="mt-3 text-2xl text-white">
              {item.title}
            </h3>

          </Link>
        ))}

      </div>

      <Link
          href="/case-studies"
          className="block md:hidden mt-10 uppercase text-[11px] tracking-[2px] text-white/50 hover:text-white transition"
        >
          View Full Index →
        </Link>

    </div>
  );
}