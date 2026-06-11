import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { whyChooseUs } from "@/data/site";
import { SectionHeading } from "./Common";

export function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const radius =
    screenWidth < 640
      ? 135
      : screenWidth < 1024
      ? 185
      : 235;

  return (
    <section className="py-0 lg:py-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="Why us"
          title={
            <>
              Why brands{" "}
              <span className="text-brand-gradient">
                choose AstraVidya
              </span>
            </>
          }
          subtitle="The unfair advantages we bring to every engagement."
        />

        <div
          className="
            relative
            flex
            items-center
            justify-center
            mx-auto
            h-[430px]
            sm:h-[540px]
            lg:h-[680px]
          "
        >
          {/* Background Glow */}
          <div className="absolute h-60 w-60 sm:h-80 sm:w-80 lg:h-[500px] lg:w-[500px] rounded-full bg-purple-500/10 blur-3xl" />

          {/* Orbit Rings */}
          <div className="absolute h-[260px] w-[260px] sm:h-[420px] sm:w-[420px] lg:h-[620px] lg:w-[620px] rounded-full border border-purple-300/10" />

          <div className="absolute h-[200px] w-[200px] sm:h-[320px] sm:w-[320px] lg:h-[500px] lg:w-[500px] rounded-full border border-purple-300/5" />

          {/* Orbit Container */}
          <div
            className="
              relative
              w-[260px]
              h-[260px]

              sm:w-[420px]
              sm:h-[420px]

              lg:w-[620px]
              lg:h-[620px]
            "
          >
            {whyChooseUs.map((item, index) => {
              const angle =
                (index / whyChooseUs.length) * Math.PI * 2;

              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              const Icon = item.icon;
              const isActive = activeIndex === index;

              return (
                <div
                  key={item.title}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      relative
                      rounded-full
                      flex
                      items-center
                      justify-center
                      shadow-xl
                      transition-all
                      duration-300

                      h-12 w-12
                      sm:h-14 sm:w-14
                      lg:h-16 lg:w-16

                      ${
                        isActive
                          ? "bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500 text-white"
                          : "bg-white text-purple-600"
                      }
                    `}
                  >
                    <Icon className="h-5 w-5 lg:h-6 lg:w-6" />
                  </motion.button>

                  <div
                    className="
                      absolute
                      top-14
                      sm:top-16
                      left-1/2
                      -translate-x-1/2
                      whitespace-nowrap

                      text-[10px]
                      sm:text-xs
                      lg:text-sm

                      font-medium
                      text-slate-900
                    "
                  >
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Card */}
          <AnimatePresence mode="wait">
            {activeIndex !== null && (
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  z-50

                  w-[118px]
                  sm:w-[220px]
                  lg:w-[320px]

                  rounded-3xl
                  glass-purple
                  border
                  border-purple-300/20

                  pt-0.5
                  pb-1
                  px-1

                  sm:p-4
                  lg:p-7

                  text-center
                  backdrop-blur-xl
                  shadow-[0_15px_50px_rgba(168,85,247,0.18)]
                "
              >
                <div className="mx-auto mb-1 flex h-8 w-8 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-500 text-white">
                  {(() => {
                    const ActiveIcon =
                      whyChooseUs[activeIndex].icon;

                    return (
                      <ActiveIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                    );
                  })()}
                </div>

                <h3 className="text-[11px] sm:text-base lg:text-2xl font-bold text-slate-900 leading-tight">
                  {whyChooseUs[activeIndex].title}
                </h3>

                <p className="mt-1 text-[9px] sm:text-xs lg:text-base leading-relaxed text-muted-foreground">
                  {whyChooseUs[activeIndex].desc}
                </p>

                <div className="mt-2 flex justify-center">
                  <div className="h-1 w-12 sm:w-16 rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}