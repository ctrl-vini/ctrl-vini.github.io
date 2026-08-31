"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const CompanyName = ({ name, url, className }) => {
  if (!url) {
    return <span className={className}>{name}</span>;
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} underline transition-colors decoration-neutral-700 underline-offset-4 hover:text-neutral-200 hover:decoration-lavender`}
    >
      {name}
    </a>
  );
};

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">Minhas Experiências</h2>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="flex-col items-start hidden gap-1 md:flex md:pl-20">
                <span className="text-base text-lavender">{item.date}</span>
                <h3 className="text-2xl font-bold lg:text-3xl text-neutral-100">
                  {item.title}
                </h3>
                <CompanyName
                  name={item.job}
                  url={item.jobUrl}
                  className="text-lg whitespace-pre-line text-neutral-400"
                />
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="flex flex-col items-start gap-1 mb-6 text-left md:hidden">
                <span className="text-sm text-lavender">{item.date}</span>
                <h3 className="text-xl font-bold text-neutral-100">
                  {item.title}
                </h3>
                <CompanyName
                  name={item.job}
                  url={item.jobUrl}
                  className="whitespace-pre-line text-neutral-400"
                />
              </div>

              <ul className="max-w-2xl pl-4 space-y-4 list-disc list-outside marker:text-lavender/60">
                {item.contents.map((content, contentIndex) => (
                  <li
                    className="font-normal leading-relaxed text-neutral-400"
                    key={contentIndex}
                  >
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};