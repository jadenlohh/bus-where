"use client";

import { useSearchParams } from "next/navigation";

export default function Navbar() {
  const searchParams = useSearchParams();
  const showModal = searchParams.get("help");

  return (
    <>
      <div className="navbar">
        <div className="flex justify-between">
          <div className="bg-white rounded-full shadow grow p-5">
            <h1 className="font-semibold">where my bus?</h1>
          </div>
        </div>
      </div>
    </>
  );
}
