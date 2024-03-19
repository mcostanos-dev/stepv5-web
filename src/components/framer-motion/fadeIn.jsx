"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const FadeIn = ({ children, className, duration = 0.4, delay }) => {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: duration,
        ease: "easeIn",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
