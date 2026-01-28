import Image from "next/image";

export default function Cabin() {
  return (
    <>
      <Image
        src="https://i.pravatar.cc/48?u=118836"
        width={50}
        height={50}
        className="size-12 rounded-full ring-2 ring-background outline -outline-offset-1 outline-white/10"
        alt="Profile Pic"
      />
      <h1>Dashboard page</h1>
    </>
  );
}
