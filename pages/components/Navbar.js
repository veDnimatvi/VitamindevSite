import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container flex-1 mx-auto">
        <Link href="/" className="link">
          <div className="text-fuchsia-400">Vitamindev100</div>
        </Link>
        <Link href="/my-vitamin">
          <div className="text-green-300">My Vitamin</div>
        </Link>
      </div>
    </div>
  );
}
