"use client"
import { useMemo } from "react"
import Particles from "@tsparticles/react"
import { ParticlesProvider } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import type { ISourceOptions } from "@tsparticles/engine"

export default function ParticlesBackground() {
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#c9a84c",
        },
        links: {
          enable: true,
          distance: 120,
          color: "#c9a84c",
          opacity: 0.25,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          outModes: {
            default: "bounce",
          },
        },
        number: {
          density: {
            enable: true,
          },
          value: 60,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  )

  return (
    <ParticlesProvider init={loadSlim}>
      <Particles
        id="tsparticles"
        options={options}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />
    </ParticlesProvider>
  )
}
