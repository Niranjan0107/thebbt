"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
const [hovered, setHovered] = useState<string | null>(null);
const menuItems = [
  {
    id: "01",
    name: "Home",
    path: "/",
    icon: "/images/home.svg",
    hoverIcon: "/images/home-b.svg",
    
  },
  {
    id: "02",
    name: "Services",
    path: "/services",
    icon: "/images/services.svg",
    hoverIcon: "/images/services-b.svg",
    
  },
  {
    id: "03",
    name: "About",
    path: "/about",
    icon: "/images/about.svg",
    hoverIcon: "/images/about-b.svg",
  },
  {
    id: "04",
    name: "Testimonials",
    path: "/testimonials",
    icon: "/images/testimonials.svg",
    hoverIcon: "/images/testimonials-b.svg",
  },
  {
    id: "05",
    name: "Contact",
    path: "/contact",
    icon: "/images/contact.svg",
    hoverIcon: "/images/contact-b.svg",
  },
  {
    id: "06",
    name: "Case Studies",
    path: "/case-studies",
    icon: "/images/case.svg",
    hoverIcon: "/images/folder-b.svg",
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

  const isActive =
    item.path === "/"
      ? pathname === "/"
      : pathname.startsWith(item.path);

  return (
            <li
  key={item.path}
  className={`
    py-1 md:py-2
    ${isActive ? "menu-active" : ""}
  `}
>
             <Link
  onMouseEnter={() => setHovered(item.path)}
  onMouseLeave={() => setHovered(null)}
  onClick={() => setOpen(false)}
  href={item.path}
  className={`
    relative flex items-center
    ${collapsed ? "justify-center" : "gap-3"}
    transition-all duration-300
    ${
      isActive
        ? "active font-semibold"
        : "text-[#737373] hover:text-white"
    }
  `}
>
        {collapsed ? (
  <>
    <Image
      src={
        isActive || hovered === item.path
          ? item.hoverIcon
          : item.icon
      }
      alt={item.name}
      width={18}
      height={18}
    />

    <span className="sidebar-tooltip">
      {item.name}
    </span>
  </>
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
  className="bbt-convo-btn text-white px-6 py-3 flex gap-2 align-center"
>
  <bdi>Start a <em>Conversation</em></bdi> <Image
    src="/images/arrow_back_ios.svg"
    alt="Conversation"
    width={5}
    height={5}
  />
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