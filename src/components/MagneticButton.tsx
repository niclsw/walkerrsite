"use client";
import { useRef, useEffect, ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  as?: "button" | "div" | "a";
  [key: string]: unknown;
}

export default function MagneticButton({ 
  children, 
  className = "", 
  strength = 0.15,
  as: Component = "div",
  ...props 
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = "translate(0, 0)";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <Component 
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any} 
      className={`transition-transform duration-200 ease-out ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
