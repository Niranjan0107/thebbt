"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({
  setOpen,
  collapsed,
  setCollapsed,
}: {
  setOpen: (value: boolean) => void;
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}) {
  const pathname = usePathname();

const menuItems = [
  {
    id: "01",
    name: "Home",
    path: "/",
    icon: "/images/home.svg",
  },
  {
    id: "02",
    name: "Services",
    path: "/services",
    icon: "/images/services.svg",
  },
  {
    id: "03",
    name: "About",
    path: "/about",
    icon: "/images/about.svg",
  },
  {
    id: "04",
    name: "Testimonials",
    path: "/testimonials",
    icon: "/images/testimonials.svg",
  },
  {
    id: "05",
    name: "Contact",
    path: "/contact",
    icon: "/images/contact.svg",
  },
  {
    id: "06",
    name: "Case Studies",
    path: "/case-studies",
    icon: "/images/folder-b.svg",
  },
];



const isCaseStudyPage =
  pathname.startsWith("/case-studies/") &&
  pathname !== "/case-studies";

  return (
   <aside
  className={`
    bg-[#0e0e0e] h-screen transition-all duration-30
  `}
>
      
      {/* Logo */}
 <div
  className={`
    logo overflow-hidden transition-all duration-300
    ${collapsed
      ? "opacity-100 max-h-[65px]"
      : "opacity-100 max-h-[120px]"}
  `}
>
  <Link href="/">
    <Image
      src="/images/bbt-logo-w.png"
      alt="BBT Logo"
      width={140}
      height={50}
      priority
    />
  </Link>
</div>

<div className="bbt-menu">
      {/* Menu */}
      <ul className="text-gray-400 bbt-menu-box bg-[#0E0E0E]">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li key={item.path} className="py-1 md:py-2">
              <Link
                onClick={() => setOpen(false)} 
                href={item.path}
                className={`flex items-center gap-3 transition-all duration-300 ${
                  isActive
                    ? "active font-semibold"
                    : "text-[#737373] text-[14px] hover:text-white"
                }`}
              >
          {collapsed ? (
  <Image
    src={item.icon}
    alt={item.name}
    width={18}
    height={18}
  />
) : (
  <>
    <span>{item.id}</span>
    <bdi>{item.name}</bdi>
  </>
)}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Button */}
      {!collapsed && (
  <button
    className="text-white px-6 py-3"
    style={{ background: "var(--primary-gradient)" }}
  >
    Start a <em>Conversation</em>
  </button>
)}
      </div>


      {!collapsed && (
  <div className="bbt-stats">
        <div className="bbt-stats-box">
            <h3>247</h3>
            <span>Clients served</span>
        </div>

          <div className="bbt-stats-box">
            <h3>32 countries</h3>
            <span>Global reach</span>
        </div>

          <div className="bbt-stats-box">
            <h3>71</h3>
            <span>Awards</span>
        </div>

          <div className="bbt-stats-box">
            <h3>MMIX</h3>
            <span>EST.</span>
        </div>
        </div>
)}


  <div className="bbt-country">
           {!collapsed && ( <span>Mumbai · India</span>)}
         {!collapsed && (   <span>04:21 IST</span>)}
           {isCaseStudyPage && (
  <button
    onClick={() => setCollapsed(!collapsed)}
    className="expand-btn absolute bottom-6 left-1/2 -translate-x-1/2 text-[#737373] text-[16px]"
  >
    {collapsed ? "›" : "‹"}
  </button>
)}
       </div>


    

    </aside>
  );
}