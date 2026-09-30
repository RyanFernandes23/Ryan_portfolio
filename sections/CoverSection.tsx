import Image from "next/image";

const coverSrc =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2400&q=80";

export function CoverSection() {
  return (
    <div className="relative h-[180px] w-full overflow-hidden sm:h-[240px] lg:h-[300px]">
      <Image
        src={coverSrc}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/85 to-transparent sm:h-40"
      />
    </div>
  );
}