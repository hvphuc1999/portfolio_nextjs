"use client";

import { cn } from "@/lib/utils";
import CountUp from "react-countup";

const stats = [
  { num: 3, text: "Years of experience"},
  { num: 6, text: "Project Completed"},
  { num: 8, text: "Technologies mastered"},
]

export default function Stats() {
  return <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
        {stats.map((item, index) => (
          <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
            <CountUp
              end={item.num}
              duration={5}
              delay={2}
              className="text-4xl xl:text-6xl font-extrabold"
             />
             <p className={cn("leading-snug text-white/80",{
              "max-w-[100px]": item.text.length < 15,
              "max-w-[150px]": item.text.length >= 15,
             })}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
}