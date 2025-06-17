"use client";

import { Product } from "@/types/types";
import Link from "next/link";
import { useState } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

let cachedProducts: Product[] | null = null;

export default function PrefetchProductsLink({ href, children }: Props) {
  const [prefetched, setPrefetched] = useState(false);

  const handleMouseEnter = async () => {
    if (prefetched || cachedProducts) return;

    try {
      const res = await fetch("/api/products?page=1"); // first 100
      const data = await res.json();
      if (data.success) {
        cachedProducts = data.data;
      }
      setPrefetched(true);
    } catch (err) {
      console.error("Prefetch failed:", err);
    }
  };

  return (
    <Link href={href} onMouseEnter={handleMouseEnter}>
      {children}
    </Link>
  );
}
