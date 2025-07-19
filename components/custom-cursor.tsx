"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);

  useEffect(() => {
    // Detect mobile screen size
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setHasMoved(true); // start showing cursor after first move
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    if (!isMobile) {
      window.addEventListener("mousemove", updateMousePosition);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);

      const interactiveElements = document.querySelectorAll(
        'button, a, [role="button"], input, textarea'
      );
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter);
        el.addEventListener("mouseleave", handleMouseLeave);
      });

      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter);
          el.removeEventListener("mouseleave", handleMouseLeave);
        });
        window.removeEventListener("resize", checkMobile);
      };
    }
  }, [isMobile]);

  if (isMobile || !hasMoved) return null; // Hide on mobile & before movement

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isClicking ? 0.5 : isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Outer cursor ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-purple-500/50 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isClicking ? 0.8 : isHovering ? 2 : 1,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />

      {/* Trailing effect */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-purple-400/30 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      />
    </>
  );
}
