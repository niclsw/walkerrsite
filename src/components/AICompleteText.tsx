"use client";
import { useState, useEffect } from "react";

interface AICompleteTextProps {
  prefix: string;
  suggestion: string;
  speed?: number;
  delay?: number;
  suggestionDelay?: number;
  autoCompleteDelay?: number;
  className?: string;
  showCursor?: boolean;
  cursorChar?: string;
}

export default function AICompleteText({
  prefix,
  suggestion,
  speed = 75,
  delay = 800,
  suggestionDelay = 1000,
  autoCompleteDelay = 1500,
  className = "",
  showCursor = true,
  cursorChar = "|",
}: AICompleteTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsTyping(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!isTyping || currentIndex >= prefix.length || isCompleting || isComplete) return;

    const timer = setTimeout(() => {
      setDisplayText(prefix.slice(0, currentIndex + 1));
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, isTyping, prefix, speed, isCompleting, isComplete]);

  // Show suggestion after typing the prefix
  useEffect(() => {
    if (currentIndex >= prefix.length && !showSuggestion && !isCompleting && !isComplete) {
      const suggestionTimer = setTimeout(() => {
        setShowSuggestion(true);
      }, suggestionDelay);

      return () => clearTimeout(suggestionTimer);
    }
  }, [currentIndex, prefix.length, showSuggestion, suggestionDelay, isCompleting, isComplete]);

  // Auto-complete after showing suggestion
  useEffect(() => {
    if (showSuggestion && !isCompleting && !isComplete) {
      const autoCompleteTimer = setTimeout(() => {
        setIsCompleting(true);
        setShowSuggestion(false);
      }, autoCompleteDelay);

      return () => clearTimeout(autoCompleteTimer);
    }
  }, [showSuggestion, autoCompleteDelay, isCompleting, isComplete]);

  // Complete the text
  useEffect(() => {
    if (!isCompleting || isComplete) return;

    const completeTimer = setTimeout(() => {
      setDisplayText(prefix + suggestion);
      setIsComplete(true);
      setIsCompleting(false);
    }, 300);

    return () => clearTimeout(completeTimer);
  }, [isCompleting, isComplete, prefix, suggestion]);

  const shouldShowCursor = showCursor && (isTyping && !isComplete);

  return (
    <span className={className}>
      {displayText}
      {showSuggestion && <span className="mx-1"></span>}
      {showSuggestion && (
        <span className="text-foreground/40 italic">
          {suggestion}
        </span>
      )}
      {shouldShowCursor && (
        <span className="animate-pulse text-foreground/70 ml-1">
          {cursorChar}
        </span>
      )}
      {showSuggestion && (
        <span className="ml-6 text-xs text-foreground/50 bg-foreground/5 px-3 py-1.5 rounded border">
          Tab to complete
        </span>
      )}
    </span>
  );
}
