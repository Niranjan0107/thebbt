import Link from "next/link";
import { cases } from "@/lib/cases";

type Props = {
  currentSlug: string;
};

export default function ProjectNavigation({
  currentSlug,
}: Props) {

  const currentIndex = cases.findIndex(
    (item) => item.slug === currentSlug
  );

  const currentProject = cases[currentIndex];

  const prevProject =
    currentIndex > 0
      ? cases[currentIndex - 1]
      : null;

  const nextProject =
    currentIndex < cases.length - 1
      ? cases[currentIndex + 1]
      : null;

  return (
    <div className="border-t border-white/[0.06] py-6 px-6">

      <div className="flex items-center justify-between">

        {/* PREVIOUS */}
        <div className="w-[33%]">

          {prevProject && (
            <Link
              href={`/case-studies/${prevProject.slug}`}
              className="group inline-flex items-start gap-3"
            >

              <span className="text-white/40 text-xl transition group-hover:-translate-x-1">
                ←
              </span>

              <div>

                <p className="font-inter font-normal text-[10.43px] leading-[15.64px] tracking-[3.34px] uppercase text-[#FFFFFF8C]">
                  Previous · {prevProject.id}
                </p>

                <h3 className="mt-1 text-white uppercase text-[14px] leading-none">
                  {prevProject.title}
                </h3>

              </div>

            </Link>
          )}

        </div>

        {/* CENTER */}
        <div className="w-[33%] text-center">

          <h3 className="font-inter font-normal text-[10.43px] leading-[15.64px] tracking-[3.34px] uppercase text-[#FFFFFF8C]">
            {currentProject.title}
          </h3>

          <span className="mt-1 block text-white font-normal text-[12px] leading-[15.64px] tracking-[3.34px] uppercase">
            {currentIndex + 1} / {cases.length}
          </span>

        </div>

        {/* NEXT */}
        <div className="w-[33%] flex justify-end">

          {nextProject && (
            <Link
              href={`/case-studies/${nextProject.slug}`}
              className="group inline-flex items-start gap-3 text-right"
            >

              <div>

                <p className="font-inter font-normal text-[10.43px] leading-[15.64px] tracking-[3.34px] uppercase text-[#FFFFFF8C]">
                  Next · {nextProject.id}
                </p>

                <h3 className="mt-1 text-white uppercase text-[14px] leading-none">
                  {nextProject.title}
                </h3>

              </div>

              <span className="text-white/40 text-xl transition group-hover:translate-x-1">
                →
              </span>

            </Link>
          )}

        </div>

      </div>

    </div>
  );
}