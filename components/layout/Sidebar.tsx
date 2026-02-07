"use client";
import { useState } from "react";
import "@/styles/sidebar.style.scss";
import ChevronLeft from "@/components/ui/icons/ChevronLeft";
import ChevronRight from "@/components/ui/icons/ChevronRight";
import ButtonIcon from "@/components/ui/ButtonIcon";
import routes from "@/data/routes";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="absolute md:relative">
      <div className="fixed h-[100%] bg-header shadow-lg">
        <ButtonIcon
          onClick={() => setIsOpen((open) => !open)}
          className="absolute rounded-md -right-6 top-30 py-2 bg-header z-20"
        >
          {isOpen ? (
            <ChevronLeft className="h-8 w-8" />
          ) : (
            <ChevronRight className="h-8 w-8" />
          )}
        </ButtonIcon>
        <div
          className={`sidebar overflow-hidden z-10  ${isOpen ? "open" : "close"}`}
        >
          <ul className="grid gap-4 py-4 px-8">
            {routes?.map((nav, i) => (
              <li
                className="border-b border-background-400 pb-4 last:border-b-0"
                key={i}
              >
                <h4 className="text-lg font-bold tracking-wider">
                  {nav.label}
                </h4>
                {nav.menu.length > 0 && (
                  <ul className="grid font-semibold text-foreground mt-2">
                    {nav.menu?.map((menu, idx) => (
                      <li key={idx}>
                        <Link href={menu.link}>
                          <div className="flex gap-1 items-center px-4 py-3 hover:bg-background transition duration-300 ease-in-out rounded-md">
                            {menu.icon}
                            <span>{menu.text}</span>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`sidebar ${isOpen ? "open" : "close"}`}></div>
    </div>
  );
}
