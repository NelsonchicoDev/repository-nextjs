"use client";

import { useTypeWriter } from "@/hooks/use-type-writer";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const HomeDescription = () => {
  const description =
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque dignissimos beatae enim tempore aperiam voluptate adipisci facilis distinctio. Iure aliquam tempora est harum consequatur? Officia iste animi expedita perspiciatis dolorum!";

  const [hasLoaded, setHasLoaded] = useState(false);
  const { displayedText, iscomplete } = useTypeWriter(description, 30);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  //<p className=" w-auto md:max-w-[500px] text-white/50 font-thin leading-6 ">
  return (
    <motion.p
      className=" w-auto font-normal leading-7 mb-6 min-h-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {hasLoaded ? (
        displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ color: "rgb(156 163 175)" }}
            animate={{
              color: iscomplete ? "rgb(255 255 255)" : "rgb(156 163 175)",
            }}
            transition={{ duration: 0.5, delay: index * 0.03 }}
          >
            {char}
          </motion.span>
        ))
      ) : (
        <span>{description}</span>
      )}
    </motion.p>
  );
};
export default HomeDescription;