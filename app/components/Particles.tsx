"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#062a61",
        },
      },
      fpsLimit: 120,
      particles: {
        number: { value: 300, density: { enable: true, value_area: 1000 } },
        color: { value: "#ffffff" },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 1,
          random: true,
          anim: { enable: true, speed: 4, opacity_min: 0, sync: false },
        },
        size: {
          value: 2,
          random: true,
          anim: { enable: true, speed: 4, size_min: 0.3, sync: false },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 600 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onHover: { enable: true, mode: "bubble" },
          onClick: { enable: true, mode: "repulse" },
        },
        modes: {
          repulse: { distance: 150, duration: 0.4 },
          bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
        },
      },
      retina_detect: true,
    }),
    []
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
};

export default ParticlesComponent;
