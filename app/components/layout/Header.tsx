"use client";
import Link from "next/link";
import ThemeSwitch from "@/components/ui/ThemeSwitch";
import Avatar from "@/components/ui/Avatar";

export default function Header() {
  return (
    <header className="bg-header">
      <div className="container flex justify-between items-center">
        <div>logo</div>
        <ul className="flex items-center justify-center gap-4">
          <li className="mt-1">
            <ThemeSwitch />
          </li>
          <li>
            <Link href="/profile">
              <Avatar
                image="https://i.pravatar.cc/48?u=118836"
                name="Ervin Gorospe"
                width={50}
                height={50}
                size="sm"
              />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
