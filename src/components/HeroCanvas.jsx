import React, { useEffect, useRef } from 'react'

export default function HeroCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const dpr = window.devicePixelRatio || 1
    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.scale(dpr, dpr)

    const particles = []
    const particleCount = Math.min(Math.floor((width * height) / 14000), 85)
    const mouse = { x: -1000, y: -1000, radius: 180, isInside: false }

    class Particle {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.7
        this.vy = (Math.random() - 0.5) * 0.7
        this.radius = Math.random() * 2 + 1.2
        this.baseRadius = this.radius
        this.originX = this.x
        this.originY = this.y
        this.phase = Math.random() * Math.PI * 2
      }

      update(time) {
        this.x += this.vx + Math.cos(time * 0.001 + this.phase) * 0.2
        this.y += this.vy + Math.sin(time * 0.001 + this.phase) * 0.2

        // Screen wrap
        if (this.x < 0) this.x = width
        if (this.x > width) this.x = 0
        if (this.y < 0) this.y = height
        if (this.y > height) this.y = 0

        // Mouse interaction
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouse.radius) {
          const force = (1 - distance / mouse.radius) * 18
          const angle = Math.atan2(dy, dx)
          this.x -= Math.cos(angle) * force * 0.15
          this.y -= Math.sin(angle) * force * 0.15
          this.radius = this.baseRadius * 1.5
        } else {
          this.radius = this.baseRadius
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(15, 23, 42, 0.35)'
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const connect = () => {
      const maxDistance = 140
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.16
            ctx.beginPath()
            ctx.strokeStyle = `rgba(15, 23, 42, ${opacity})`
            ctx.lineWidth = 0.8
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }

        // Connect to mouse if close
        const mdx = mouse.x - particles[a].x
        const mdy = mouse.y - particles[a].y
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy)
        if (mdist < mouse.radius) {
          const mOpacity = (1 - mdist / mouse.radius) * 0.3
          ctx.beginPath()
          ctx.strokeStyle = `rgba(37, 99, 235, ${mOpacity})`
          ctx.lineWidth = 1.2
          ctx.moveTo(particles[a].x, particles[a].y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      }
    }

    let lastTime = 0
    const animate = (time) => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((p) => {
        p.update(time)
        p.draw()
      })

      connect()
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
      mouse.isInside = true
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
      mouse.isInside = false
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
    />
  )
}
