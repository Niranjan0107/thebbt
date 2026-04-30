"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { id: "01", name: "Home", path: "/" },
    { id: "02", name: "Services", path: "/services" },
    { id: "03", name: "About", path: "/about" },
    { id: "04", name: "Testimonials", path: "/testimonials" },
    { id: "05", name: "Contact", path: "/contact" },
  ];

  return (
    <aside className="bg-dark">
      
      {/* Logo */}
      <div className="logo">
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
      <ul className="text-gray-400 bbt-menu-box">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`flex items-center gap-3 transition-all duration-300 ${
                  isActive
                    ? "active font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span>{item.id}</span>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Button */}
      <button
        className="text-white px-6 py-3"
        style={{ background: "var(--primary-gradient)" }}
      >
        Start a <em>Conversation</em>
      </button>
      </div>


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

      <div className="bbt-country">
        <span>Mumbai · India</span>
        <span>04:21 IST</span>
      </div>

    </aside>
  );
}