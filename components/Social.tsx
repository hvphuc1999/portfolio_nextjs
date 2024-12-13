"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: process.env.NEXT_PUBLIC_GITHUB ?? "" },
  { icon: <FaLinkedinIn />, path: process.env.NEXT_PUBLIC_LINKEDIN ?? "" },
]

export default function Social({ containerStyles, iconStyles }: {containerStyles?: string;
  iconStyles?: string;
}) {
  return (
    <div className={containerStyles}>
      {socials?.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles} target="_blank">
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
