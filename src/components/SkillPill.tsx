"use client";

interface SkillPillProps {
  label: string;
}

export function SkillPill({ label }: SkillPillProps) {
  return (
    <p className="w-fit h-fit p-1 px-5 m-1 border border-[#888888aa] rounded-full duration-500 cursor-default hover:bg-olive-deep hover:text-white  ">
      {label}
    </p>
  );
}
