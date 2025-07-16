"use client"

import { useEffect, useState } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)

  useEffect(() => {
    const chars = "!<>-_\\/[]{}—=+*^?#________"
    let interval: NodeJS.Timeout

    const glitch = () => {
      let iterations = 0

      interval = setInterval(() => {
        setGlitchText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return text[index]
              }
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join(""),
        )

        if (iterations >= text.length) {
          clearInterval(interval)
        }

        iterations += 1 / 3
      }, 30)
    }

    const timeout = setTimeout(glitch, 500)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [text])

  return (
    <div className={`relative ${className}`}>
      <span className="relative z-10">{glitchText}</span>
      <span className="absolute top-0 left-0 text-purple-500 opacity-70 animate-pulse">{glitchText}</span>
      <span className="absolute top-0 left-0 text-pink-500 opacity-70 animate-pulse animation-delay-200">
        {glitchText}
      </span>
    </div>
  )
}
