// Web Audio API lightweight tactile sound generator
class SoundController {
  constructor() {
    this.ctx = null
    this.enabled = true
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || window.webkitAudioContext
      if (AudioContext) {
        this.ctx = new AudioContext()
      }
    }
  }

  playClick() {
    if (!this.enabled) return
    try {
      this.init()
      if (!this.ctx) return
      if (this.ctx.state === 'suspended') {
        this.ctx.resume()
      }

      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'sine'
      osc.frequency.setValueAtTime(800, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.04)

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.04)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.04)
    } catch (e) {
      // Ignore audio errors gracefully
    }
  }

  playHover() {
    if (!this.enabled) return
    try {
      this.init()
      if (!this.ctx) return
      if (this.ctx.state === 'suspended') {
        this.ctx.resume()
      }

      const osc = this.ctx.createOscillator()
      const gain = this.ctx.createGain()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(450, this.ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.03)

      gain.gain.setValueAtTime(0.015, this.ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.03)

      osc.connect(gain)
      gain.connect(this.ctx.destination)

      osc.start()
      osc.stop(this.ctx.currentTime + 0.03)
    } catch (e) {
      // Ignore audio errors gracefully
    }
  }

  playSuccess() {
    if (!this.enabled) return
    try {
      this.init()
      if (!this.ctx) return
      if (this.ctx.state === 'suspended') {
        this.ctx.resume()
      }

      const notes = [523.25, 659.25, 783.99, 1046.50] // C5, E5, G5, C6
      notes.forEach((freq, index) => {
        const osc = this.ctx.createOscillator()
        const gain = this.ctx.createGain()

        const startTime = this.ctx.currentTime + index * 0.06
        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, startTime)

        gain.gain.setValueAtTime(0.03, startTime)
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.15)

        osc.connect(gain)
        gain.connect(this.ctx.destination)

        osc.start(startTime)
        osc.stop(startTime + 0.15)
      })
    } catch (e) {
      // Ignore
    }
  }

  toggle() {
    this.enabled = !this.enabled
    return this.enabled
  }
}

export const soundFx = new SoundController()
