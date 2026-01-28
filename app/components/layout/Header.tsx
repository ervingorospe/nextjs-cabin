"use client";

import ThemeSwitch from "@/components/ui/ThemeSwitch";
import Loading from "@/components/ui/Loader";
import Avatar from "../ui/Avatar";

export default function Header() {
  return (
    <header className="bg-primary text-background">
      <div className="container flex justify-between items-center ">
        <div>logo</div>
        <ul className="flex items-center justify-center gap-4">
          <li>
            <ThemeSwitch />
          </li>
          <li>
            <Avatar
              image="https://i.pravatar.cc/48?u=118836"
              alt="Profile Pic"
              width={50}
              height={50}
              className="size-12 rounded-full ring-2 ring-background outline -outline-offset-1 outline-white/10"
            />
          </li>
          <li>
            <Loading.spinner />
          </li>
        </ul>
      </div>
    </header>
  );
}
