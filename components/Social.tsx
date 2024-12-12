"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: '' },
  { icon: <FaLinkedinIn />, path: '' },
  { icon: <FaFacebook />, path: '' },
]

export default function Social({ containerStyles, iconStyles }: {containerStyles?: string;
  iconStyles?: string;
}) {
  return (
    <div className={containerStyles}>
      {socials?.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
