'use client'

import type { ISourceOptions } from '@tsparticles/engine'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useTheme } from 'nextra-theme-docs'
import { useEffect, useMemo } from 'react'
import { loadFull } from 'tsparticles'

const PanelParticles = () => {
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine)
    })
  }, [])


  const options = useMemo<ISourceOptions>(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: resolvedTheme === 'light' ? '#9f9cbf' : '#c1c7d1',
        },
        links: {
          color: {
            value: resolvedTheme === 'light' ? '#9f9cbf' : '#c1c7d1',
          },
          distance: 120,
          enable: true,
          opacity: resolvedTheme === 'light' ? 0.2 : 0.1,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 60,
        },
        opacity: {
          value: resolvedTheme === 'light' ? 0.2 : 0.15,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [resolvedTheme],
  )

  return (
    <Particles
      className="max-sm:hidden pointer-events-none"
      options={options}
    />
  )
}

export {
  PanelParticles,
}
