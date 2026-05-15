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
    <div className=" border-t border-white/10 px-16 pt-20 pb-20">

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
          className="uppercase text-[11px] tracking-[2px] text-white/50 hover:text-white transition"
        >
          View Full Index →
        </Link>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {relatedCases.map((item) => (
          <Link
            key={item.slug}
            href={`/case-studies/${item.slug}`}
            className="group"
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

    </div>
  );
}