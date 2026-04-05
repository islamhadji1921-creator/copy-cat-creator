import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
}

const BlurText = ({ text, className = "", delay = 0, animateBy = "words", direction = "bottom" }: BlurTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const segments = animateBy === "words" ? text.split(" ") : text.split("");
  const yStart = direction === "bottom" ? 20 : -20;

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {segments.map((segment, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: yStart }}
          animate={inView ? { filter: "blur(0px)", opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay / 1000 + i * 0.08,
            ease: "easeOut",
          }}
          className="inline-block"
          style={{ marginInlineEnd: animateBy === "words" ? "0.3em" : undefined }}
        >
          {segment}
        </motion.span>
      ))}
    </span>
  );
};

export default BlurText;
