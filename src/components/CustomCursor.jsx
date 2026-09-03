import React, { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 })
  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorText, setCursorText] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const animFrameRef = useRef(null)

  useEffect(() => {
    // Only activate on devices with fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)')
    if (!mediaQuery.matches) return

    document.body.classList.add('has-custom-cursor')

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target.closest('a, button, input, textarea, select, [data-cursor], .interactive')
      if (target) {
        setIsHovered(true)
        const customText = target.getAttribute('data-cursor') || ''
        setCursorText(customText)
      } else {
        setIsHovered(false)
        setCursorText('')
      }
    }

    const onMouseDown = () => setIsClicking(true)
    const onMouseUp = () => setIsClicking(false)
    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    // Smooth lerp for outer follower
    let currentX = -100
    let currentY = -100

    const render = () => {
      currentX += (position.x - currentX) * 0.18
      currentY += (position.y - currentY) * 0.18
      setTrailPosition({ x: currentX, y: currentY })
      animFrameRef.current = requestAnimationFrame(render)
    }
    animFrameRef.current = requestAnimationFrame(render)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
      cancelAnimationFrame(animFrameRef.current)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [position.x, position.y, isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Precision Center Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isClicking ? 0.7 : 1})`,
        }}
      >
        <div className={`rounded-full transition-all duration-200 ${
          cursorText ? 'w-0 h-0 opacity-0' : isHovered ? 'w-2 h-2 bg-blue-600' : 'w-2 h-2 bg-neutral-900'
        }`} />
      </div>

      {/* Outer Spring Follower Ring / Badge */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] transition-all ease-out"
        style={{
          transform: `translate3d(${trailPosition.x}px, ${trailPosition.y}px, 0) translate(-50%, -50%) scale(${
            isClicking ? 0.85 : isHovered ? (cursorText ? 1.8 : 1.4) : 1
          })`,
        }}
      >
        <div
          className={`flex items-center justify-center rounded-full transition-all duration-300 ${
            cursorText
              ? 'w-16 h-16 bg-neutral-900 text-white shadow-2xl backdrop-blur-md'
              : isHovered
              ? 'w-10 h-10 border-2 border-neutral-900 bg-neutral-900/5 backdrop-blur-[1px]'
              : 'w-7 h-7 border border-neutral-400 bg-transparent'
          }`}
        >
          {cursorText && (
            <span className="text-[9px] font-mono font-bold tracking-wider uppercase text-white animate-pulse">
              {cursorText}
            </span>
          )}
        </div>
      </div>
    </>
  )
}
