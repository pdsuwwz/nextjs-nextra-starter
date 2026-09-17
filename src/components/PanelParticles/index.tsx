'use client'

import type { ISourceOptions } from '@tsparticles/engine'
import type { ParticlesPluginRegistrar } from '@tsparticles/react'
import { Particles, ParticlesProvider } from '@tsparticles/react'
import { useTheme } from 'nextra-theme-docs'
import { useMemo } from 'react'
import { loadFull } from 'tsparticles'

/**
 * The provider requires the init callback to be stable across the app lifecycle,
 * so it is declared at module scope instead of being re-created on every render.
 */
const initParticlesEngine: ParticlesPluginRegistrar = async (engine) => {
  await loadFull(engine)
}

const PanelParticles = () => {
  const { resolvedTheme } = useTheme()

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
    <ParticlesProvider init={initParticlesEngine}>
      <Particles
        className="max-sm:hidden pointer-events-none"
        options={options}
      />
    </ParticlesProvider>
  )
}

export {
  PanelParticles,
}
