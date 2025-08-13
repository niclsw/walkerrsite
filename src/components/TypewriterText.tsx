"use client";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  cursorChar?: string;
}

export default function TypewriterText({
  text,
  speed = 50,
  delay = 500,
  className = "",
  showCursor = true,
  cursorChar = "|",
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayText(text.slice(0, currentIndex + 1));
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, text, speed]);

  const isComplete = currentIndex >= text.length;
  const shouldShowCursor = showCursor && (isTyping || !isComplete);

  return (
    <span className={className}>
      {displayText}
      {shouldShowCursor && (
        <span className="animate-pulse text-foreground/70 ml-1">
          {cursorChar}
        </span>
      )}
    </span>
  );
}
