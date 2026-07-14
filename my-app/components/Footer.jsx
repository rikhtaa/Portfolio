import React from "react";

export function Footer() {
  return (
    <div className="max-w-[1200px] w-[90%] mx-auto py-[20px] flex flex-wrap gap-[10px] justify-between items-center border-t border-[#1d1d1d]">
      <a href="/" className="text-white font-semibold text-sm">
        Rekhta Menahil
      </a>
      <span className="text-[0.9rem] font-[500] text-[#9e9e9e]">
        © {new Date().getFullYear()} Rekhta Menahil. All Rights Reserved.
      </span>
    </div>
  );
}