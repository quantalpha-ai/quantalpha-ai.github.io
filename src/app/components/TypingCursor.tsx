"use client"
import { useEffect } from "react"

export const TypingCursor = () => {
  useEffect(() => {
    const line1 = document.getElementById("line1")
    const line2 = document.getElementById("line2")
    const cursor = document.getElementById("typing-cursor")
    line1!.style.fontFamily = "Courier New, monospace" // Apply the font-family to line1

    const typeWriter = (text: string, element: HTMLElement, i: number, cb: () => void) => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
        setTimeout(() => typeWriter(text, element, i, cb), 50)
      } else {
        cb()
      }
    }

    const startTyping = () => {
      typeWriter("Quant Finance 2.0 ", line1!, 0, () => {
        line2!.style.fontFamily = "Courier New, monospace" // Apply the font-family to line2
        cursor!.style.animation = "blinkCursor 1s step-end infinite"
        setTimeout(() => {
          typeWriter(" for Digital Assets", line2!, 0, () => {})
        }, 1000) // Adjust the delay based on your preference
      })
    }

    startTyping()
  }, [])
  return (
    <span id="typing-container" className="font-mono">
      <span id="line1" className="font-mono"></span>
      <span id="line2" className="ml-2 font-mono"></span>
      <span id="typing-cursor" className="cursor font-mono"></span>
    </span>
  )
}
