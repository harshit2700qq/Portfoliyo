
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


/* =========================================================
   GALAXY / SUN BACKGROUND
========================================================= */


/* =========================================================
   GALAXY / SUN BACKGROUND
========================================================= */

function SpaceBackground({ lightMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let scrollY = window.scrollY;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const particles = [];
    const particleCount = lightMode ? 520 : 950;

    const clamp = (value, min, max) =>
      Math.max(min, Math.min(max, value));

    const smoothstep = (value) => {
      const x = clamp(value, 0, 1);
      return x * x * (3 - 2 * x);
    };

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
      particles.length = 0;

      const centerX = width * 0.60;
      const centerY = height * 0.50;
      const maxRadius = Math.min(width, height) * 0.47;

      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.pow(Math.random(), 0.62) * maxRadius;
        const spiral =
          angle +
          radius * 0.018 +
          (Math.random() - 0.5) * 0.55;

        const homeX =
          centerX + Math.cos(spiral) * radius;
        const homeY =
          centerY +
          Math.sin(spiral) * radius * (lightMode ? 0.75 : 0.58);

        const spread = Math.max(width, height) * 0.65;

        particles.push({
          homeX,
          homeY,
          x: homeX,
          y: homeY,
          dispersedX: Math.random() * width,
          dispersedY: Math.random() * height,
          vx: 0,
          vy: 0,
          size: lightMode
            ? Math.random() * 2.2 + 0.4
            : Math.random() < 0.08
              ? Math.random() * 2.8 + 1.3
              : Math.random() * 1.5 + 0.35,
          brightness:
            Math.random() * 0.75 + 0.25,
          angle,
          radius,
          phase: Math.random() * Math.PI * 2,
          rotationSpeed: lightMode
            ? (Math.random() - 0.5) * 0.002
            : (Math.random() - 0.5) * 0.0007,
          armOffset:
            (Math.random() - 0.5) * 0.45,
          warm: Math.random() > 0.88,
          blue: Math.random() > 0.18,
          driftX:
            (Math.random() - 0.5) * spread * 0.000035,
          driftY:
            (Math.random() - 0.5) * spread * 0.000035,
        });
      }
    }

    function drawStar(x, y, size, alpha, warm, blue) {
      let r = 245;
      let g = 245;
      let b = 255;

      if (warm) {
        r = 255;
        g = 204;
        b = 155;
      } else if (blue) {
        r = 180;
        g = 210;
        b = 255;
      }

      ctx.beginPath();
      ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();

      if (size > 1.5) {
        const glow = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          size * 5
        );

        glow.addColorStop(
          0,
          `rgba(${r},${g},${b},${alpha * 0.55})`
        );
        glow.addColorStop(
          1,
          `rgba(${r},${g},${b},0)`
        );

        ctx.beginPath();
        ctx.fillStyle = glow;
        ctx.arc(x, y, size * 5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function drawSunParticle(x, y, size, alpha) {
      const glow = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        size * 6
      );

      glow.addColorStop(
        0,
        `rgba(255,235,170,${alpha})`
      );
      glow.addColorStop(
        0.3,
        `rgba(255,170,65,${alpha * 0.65})`
      );
      glow.addColorStop(
        1,
        "rgba(255,80,20,0)"
      );

      ctx.beginPath();
      ctx.fillStyle = glow;
      ctx.arc(x, y, size * 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = `rgba(255,225,160,${alpha})`;
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawSun(centerX, centerY, time) {
      const sunRadius =
        Math.min(width, height) * 0.115;

      const outerGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        sunRadius * 0.5,
        centerX,
        centerY,
        sunRadius * 3
      );

      outerGlow.addColorStop(
        0,
        "rgba(255,175,70,0.30)"
      );
      outerGlow.addColorStop(
        0.35,
        "rgba(255,125,35,0.14)"
      );
      outerGlow.addColorStop(
        1,
        "rgba(255,80,20,0)"
      );

      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(
        centerX,
        centerY,
        sunRadius * 3,
        0,
        Math.PI * 2
      );
      ctx.fill();

      const sunGradient = ctx.createRadialGradient(
        centerX - sunRadius * 0.25,
        centerY - sunRadius * 0.3,
        sunRadius * 0.1,
        centerX,
        centerY,
        sunRadius
      );

      sunGradient.addColorStop(
        0,
        "rgba(255,245,205,1)"
      );
      sunGradient.addColorStop(
        0.25,
        "rgba(255,210,115,1)"
      );
      sunGradient.addColorStop(
        0.65,
        "rgba(247,135,40,0.98)"
      );
      sunGradient.addColorStop(
        1,
        "rgba(195,65,18,0.95)"
      );

      ctx.fillStyle = sunGradient;
      ctx.beginPath();
      ctx.arc(
        centerX,
        centerY,
        sunRadius,
        0,
        Math.PI * 2
      );
      ctx.fill();

      for (let i = 0; i < 36; i++) {
        const angle = (Math.PI * 2 * i) / 36;
        const wave =
          Math.sin(time * 0.002 + i) * 9;
        const inner = sunRadius * 1.03;
        const outer =
          sunRadius * (1.18 + wave / 100);

        const x1 =
          centerX + Math.cos(angle) * inner;
        const y1 =
          centerY + Math.sin(angle) * inner;
        const x2 =
          centerX + Math.cos(angle) * outer;
        const y2 =
          centerY + Math.sin(angle) * outer;

        ctx.beginPath();
        ctx.strokeStyle =
          "rgba(255,145,45,0.18)";
        ctx.lineWidth = 1;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }

    function drawMoon(centerX, centerY, time) {
      const moonRadius =
        Math.min(width, height) * 0.075;

      const glow = ctx.createRadialGradient(
        centerX,
        centerY,
        moonRadius * 0.5,
        centerX,
        centerY,
        moonRadius * 3
      );

      glow.addColorStop(
        0,
        "rgba(230,240,255,0.22)"
      );
      glow.addColorStop(
        0.3,
        "rgba(190,210,240,0.12)"
      );
      glow.addColorStop(
        0.65,
        "rgba(130,160,210,0.05)"
      );
      glow.addColorStop(
        1,
        "rgba(80,110,170,0)"
      );

      ctx.beginPath();
      ctx.fillStyle = glow;
      ctx.arc(
        centerX,
        centerY,
        moonRadius * 3,
        0,
        Math.PI * 2
      );
      ctx.fill();

      const moonGradient = ctx.createRadialGradient(
        centerX - moonRadius * 0.3,
        centerY - moonRadius * 0.3,
        moonRadius * 0.08,
        centerX,
        centerY,
        moonRadius
      );

      moonGradient.addColorStop(
        0,
        "rgba(255,255,255,1)"
      );
      moonGradient.addColorStop(
        0.55,
        "rgba(235,240,248,0.98)"
      );
      moonGradient.addColorStop(
        0.82,
        "rgba(205,214,230,0.96)"
      );
      moonGradient.addColorStop(
        1,
        "rgba(155,170,195,0.95)"
      );

      ctx.beginPath();
      ctx.fillStyle = moonGradient;
      ctx.arc(
        centerX,
        centerY,
        moonRadius,
        0,
        Math.PI * 2
      );
      ctx.fill();

      const craters = [
        [-0.35, -0.20, 0.12],
        [0.22, -0.30, 0.09],
        [0.38, 0.08, 0.14],
        [-0.12, 0.28, 0.10],
        [-0.42, 0.28, 0.07],
        [0.05, 0.05, 0.055],
        [0.12, 0.37, 0.045],
      ];

      craters.forEach(([x, y, radius]) => {
        ctx.beginPath();
        ctx.fillStyle =
          "rgba(120,135,160,0.18)";
        ctx.arc(
          centerX + x * moonRadius,
          centerY + y * moonRadius,
          radius * moonRadius,
          0,
          Math.PI * 2
        );
        ctx.fill();
      });

      const pulse =
        Math.sin(time * 0.001) * 0.015;

      ctx.beginPath();
      ctx.strokeStyle =
        `rgba(225,238,255,${0.18 + pulse})`;
      ctx.lineWidth = 1;
      ctx.arc(
        centerX,
        centerY,
        moonRadius + 1,
        0,
        Math.PI * 2
      );
      ctx.stroke();
    }

    function animate(time) {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = lightMode
        ? "rgba(42,25,18,1)"
        : "rgba(3,6,15,1)";

      ctx.fillRect(0, 0, width, height);

      const centerX = width * 0.60;
      const centerY = height * 0.50;

      const heroProgress = smoothstep(
        scrollY / Math.max(height * 0.85, 1)
      );

      if (!lightMode) {
        drawMoon(
          width * 0.78,
          height * 0.22,
          time
        );
      }

      if (lightMode) {
        drawSun(centerX, centerY, time);
      }

      particles.forEach((particle) => {
        if (!lightMode) {
          particle.angle += particle.rotationSpeed;

          const spiralAngle =
            particle.angle +
            particle.radius * 0.018 +
            particle.armOffset;

          particle.homeX =
            centerX +
            Math.cos(spiralAngle) *
              particle.radius;

          particle.homeY =
            centerY +
            Math.sin(spiralAngle) *
              particle.radius *
              0.58;
        } else {
          particle.angle += particle.rotationSpeed;

          const movement =
            Math.sin(
              time * 0.0015 +
                particle.phase
            ) * 5;

          particle.homeX =
            centerX +
            Math.cos(particle.angle) *
              (particle.radius + movement);

          particle.homeY =
            centerY +
            Math.sin(particle.angle) *
              (particle.radius + movement);
        }

        particle.dispersedX +=
          Math.sin(
            time * 0.00025 +
              particle.phase
          ) * 0.015;
        particle.dispersedY +=
          Math.cos(
            time * 0.00022 +
              particle.phase
          ) * 0.015;

        if (particle.dispersedX < -40)
          particle.dispersedX = width + 40;
        if (particle.dispersedX > width + 40)
          particle.dispersedX = -40;
        if (particle.dispersedY < -40)
          particle.dispersedY = height + 40;
        if (particle.dispersedY > height + 40)
          particle.dispersedY = -40;

        const targetX =
          particle.homeX +
          (particle.dispersedX - particle.homeX) *
            heroProgress;

        const targetY =
          particle.homeY +
          (particle.dispersedY - particle.homeY) *
            heroProgress;

        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(
          dx * dx + dy * dy
        );

        const interactionRadius =
          lightMode ? 190 : 175;

        if (
          mouse.active &&
          distance < interactionRadius
        ) {
          const strength = Math.pow(
            1 -
              distance / interactionRadius,
            2
          );

          const safeDistance = Math.max(
            distance,
            1
          );

          const push =
            strength * (lightMode ? 11 : 15);

          particle.vx +=
            (dx / safeDistance) * push;
          particle.vy +=
            (dy / safeDistance) * push;
        }

        const spring = lightMode
          ? 0.016
          : 0.018;

        particle.vx +=
          (targetX - particle.x) * spring;
        particle.vy +=
          (targetY - particle.y) * spring;

        particle.vx *= 0.91;
        particle.vy *= 0.91;

        particle.x += particle.vx;
        particle.y += particle.vy;

        const twinkle =
          0.7 +
          Math.sin(
            time * 0.0015 +
              particle.phase
          ) *
            0.25;

        const alpha =
          particle.brightness * twinkle;

        if (lightMode) {
          drawSunParticle(
            particle.x,
            particle.y,
            particle.size,
            alpha
          );
        } else {
          drawStar(
            particle.x,
            particle.y,
            particle.size,
            alpha,
            particle.warm,
            particle.blue
          );
        }
      });

      animationFrame =
        requestAnimationFrame(animate);
    }

    function handleMouseMove(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    }

    function handleMouseLeave() {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    }

    function handleScroll() {
      scrollY = window.scrollY;
    }

    resize();
    createParticles();

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );
    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );
    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );
    window.addEventListener(
      "resize",
      resize
    );

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      window.removeEventListener(
        "scroll",
        handleScroll
      );
      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, [lightMode]);

  return (
    <canvas
      ref={canvasRef}
      className="space-canvas"
      aria-hidden="true"
    />
  );
}


/* =========================================================
   PROJECT ORBIT
========================================================= */

function ProjectOrbit({ projects }) {
  return (
    <div className="project-orbit-system">
      <div className="project-orbit-glow"></div>

      <div className="project-orbit-ring ring-outer">
        {projects.map((project, index) => (
          <div
            className="project-planet"
            style={{
              "--planet-angle": `${index * 60}deg`,
            }}
            key={project.title}
          >
            <div className="project-planet-body">
              <span></span>

              <div className="project-planet-tooltip">
                <strong>{project.title}</strong>
                <small>{project.desc}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="project-orbit-ring ring-middle"></div>

      <div className="project-orbit-core">
        <span>H</span>
        <small>BUILD • LEARN • CREATE</small>
      </div>

      <div className="project-orbit-caption">
        <span>06</span>
        PROJECTS IN ORBIT
      </div>
    </div>
  );
}


/* =========================================================
   PARTICLE H TRANSITION
========================================================= */

function HParticleTransition({ lightMode }) {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;

    if (!section || !canvas) return;

    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const mouse = {
      x: -1000,
      y: -1000,
      active: false,
    };

    const particles = [];
    const count = 1600;

    const clamp = (value, min, max) =>
      Math.max(min, Math.min(max, value));

    const smoothstep = (value) => {
      const x = clamp(value, 0, 1);
      return x * x * (3 - 2 * x);
    };

    function resize() {
      width = section.clientWidth;
      height = section.clientHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    /*
      Create a thick 3D H.

      X = horizontal
      Y = vertical
      Z = depth

      The particles are distributed through the complete
      thickness of the H instead of sitting on one flat plane.
    */
    function createHPoints() {
      const points = [];

      const scale = Math.min(width * 0.48, height * 0.52);
      const depth = scale * 0.65;

      const leftX = -scale * 0.34;
      const rightX = scale * 0.34;
      const topY = -scale * 0.50;
      const bottomY = scale * 0.50;
      const crossY = 0;

      const thicknessX = Math.max(18, scale * 0.075);
      const thicknessY = Math.max(18, scale * 0.075);

      // Left vertical column
      for (let i = 0; i < 560; i++) {
        const t = Math.random();

        points.push({
          x:
            leftX +
            (Math.random() - 0.5) * thicknessX,
          y:
            topY +
            (bottomY - topY) * t +
            (Math.random() - 0.5) * thicknessY,
          z:
            (Math.random() - 0.5) * depth,
        });
      }

      // Right vertical column
      for (let i = 0; i < 560; i++) {
        const t = Math.random();

        points.push({
          x:
            rightX +
            (Math.random() - 0.5) * thicknessX,
          y:
            topY +
            (bottomY - topY) * t +
            (Math.random() - 0.5) * thicknessY,
          z:
            (Math.random() - 0.5) * depth,
        });
      }

      // Middle bridge
      for (let i = 480; i < count; i++) {
        const t = Math.random();

        points.push({
          x:
            leftX +
            (rightX - leftX) * t +
            (Math.random() - 0.5) * thicknessX,
          y:
            crossY +
            (Math.random() - 0.5) * thicknessY,
          z:
            (Math.random() - 0.5) * depth,
        });
      }

      return points;
    }

    function createParticles() {
      particles.length = 0;

      const hPoints = createHPoints();

      hPoints.forEach((point, index) => {
        const angle = Math.random() * Math.PI * 2;
        const radius =
          Math.random() *
          Math.max(width, height) *
          0.55;

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: 0,
          vy: 0,

          targetX: point.x,
          targetY: point.y,
          targetZ: point.z,

          z: (Math.random() - 0.5) * 900,

          scatterX:
            width / 2 +
            Math.cos(angle) * radius,

          scatterY:
            height / 2 +
            Math.sin(angle) * radius,

          phase: Math.random() * Math.PI * 2,

          size:
            index % 13 === 0
              ? Math.random() * 2.8 + 1.1
              : Math.random() * 1.9 + 0.45,

          brightness:
            Math.random() * 0.65 + 0.35,
        });
      });
    }

    function getGatherProgress() {
      const rect = section.getBoundingClientRect();

      const sectionCenter =
        rect.top + rect.height / 2;

      const viewportCenter =
        window.innerHeight / 2;

      const distance = Math.abs(
        sectionCenter - viewportCenter
      );

      return smoothstep(
        1 -
          distance /
            (window.innerHeight * 0.95)
      );
    }

    function drawGlow(
      x,
      y,
      radius,
      alpha
    ) {
      const warm = lightMode;

      const glow = ctx.createRadialGradient(
        x,
        y,
        0,
        x,
        y,
        radius
      );

      glow.addColorStop(
        0,
        warm
          ? `rgba(255,185,80,${alpha})`
          : `rgba(165,170,255,${alpha})`
      );

      glow.addColorStop(
        0.35,
        warm
          ? `rgba(255,130,35,${alpha * 0.55})`
          : `rgba(110,120,255,${alpha * 0.55})`
      );

      glow.addColorStop(
        1,
        warm
          ? "rgba(255,80,20,0)"
          : "rgba(70,70,255,0)"
      );

      ctx.beginPath();
      ctx.fillStyle = glow;
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawParticle(
      x,
      y,
      size,
      alpha,
      depthScale
    ) {
      const warm = lightMode;

      const core = warm
        ? `rgba(255,177,70,${alpha})`
        : `rgba(160,165,255,${alpha})`;

      const brightCore = warm
        ? `rgba(255,225,150,${alpha})`
        : `rgba(225,228,255,${alpha})`;

      if (size > 0.9) {
        drawGlow(
          x,
          y,
          size * (warm ? 6 : 6.5),
          alpha * 0.38 * depthScale
        );
      }

      ctx.beginPath();
      ctx.fillStyle = core;

      ctx.arc(
        x,
        y,
        Math.max(0.35, size * depthScale),
        0,
        Math.PI * 2
      );

      ctx.fill();

      if (size > 0.8) {
        ctx.beginPath();
        ctx.fillStyle = brightCore;

        ctx.arc(
          x,
          y,
          Math.max(
            0.22,
            size * depthScale * 0.35
          ),
          0,
          Math.PI * 2
        );

        ctx.fill();
      }
    }

    function animate(time) {
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      const gather = getGatherProgress();

      const centerX = width / 2;
      const centerY = height / 2;

      /*
        IMPORTANT:
        The H rotates around the VERTICAL Y axis.

        There is intentionally NO X rotation.
        This keeps the H upright while giving it
        genuine 3D left/right depth.
      */
      const rotationY = time * 0.00105;

      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      particles.forEach((particle) => {
        /*
          Before gathering, particles are scattered.
          During gathering, they move toward their
          individual 3D H positions.
        */

        const scatterX =
          particle.scatterX;

        const scatterY =
          particle.scatterY;

        const targetX =
          centerX +
          scatterX * (1 - gather) +
          (
            particle.targetX * cosY -
            particle.targetZ * sinY
          ) *
            gather;

        const targetY =
          centerY +
          scatterY * (1 - gather) +
          particle.targetY * gather;

        /*
          Rotate Z around the vertical Y axis.
          This creates perspective:
          particles farther from the camera
          become smaller/dimmer.
        */
        const rotatedZ =
          particle.targetX * sinY +
          particle.targetZ * cosY;

        const perspective =
          700 /
          (700 + rotatedZ * gather);

        const projectedX =
          centerX +
          (
            particle.targetX * cosY -
            particle.targetZ * sinY
          ) *
            gather *
            perspective;

        const projectedY =
          centerY +
          particle.targetY *
            gather *
            perspective;

        const finalTargetX =
          targetX * (1 - gather) +
          projectedX * gather;

        const finalTargetY =
          targetY * (1 - gather) +
          projectedY * gather;

        /*
          Mouse interaction.
        */
        const dx =
          particle.x - mouse.x;

        const dy =
          particle.y - mouse.y;

        const distance =
          Math.sqrt(dx * dx + dy * dy);

        if (
          mouse.active &&
          distance < 190
        ) {
          const strength = Math.pow(
            1 - distance / 190,
            2
          );

          const safeDistance =
            Math.max(distance, 1);

          particle.vx +=
            (dx / safeDistance) *
            strength *
            15;

          particle.vy +=
            (dy / safeDistance) *
            strength *
            15;
        }

        /*
          Stronger spring as the H forms.
        */
        const spring =
          0.008 + gather * 0.045;

        particle.vx +=
          (finalTargetX - particle.x) *
          spring;

        particle.vy +=
          (finalTargetY - particle.y) *
          spring;

        particle.vx *= 0.91;
        particle.vy *= 0.91;

        particle.x += particle.vx;
        particle.y += particle.vy;

        const twinkle =
          0.72 +
          Math.sin(
            time * 0.0015 +
            particle.phase
          ) *
            0.28;

        /*
          Particles closer to the camera are
          larger and brighter.
        */
        const depthScale =
          gather
            ? clamp(
                perspective,
                0.45,
                1.65
              )
            : 1;

        const alpha =
          particle.brightness *
          twinkle *
          (0.22 + gather * 0.78);

        drawParticle(
          particle.x,
          particle.y,
          particle.size,
          alpha,
          depthScale
        );
      });

      /*
        Central atmospheric glow changes with theme.
      */
      drawGlow(
        centerX,
        centerY,
        Math.min(width, height) * 0.38,
        0.11 * gather
      );

      animationFrame =
        requestAnimationFrame(
          animate
        );
    }

    function handleMouseMove(event) {
      const rect =
        canvas.getBoundingClientRect();

      mouse.x =
        event.clientX - rect.left;

      mouse.y =
        event.clientY - rect.top;

      mouse.active = true;
    }

    function handleMouseLeave() {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    }

    resize();
    createParticles();

    window.addEventListener(
      "resize",
      resize
    );

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    canvas.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    animationFrame =
      requestAnimationFrame(
        animate
      );

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      canvas.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [lightMode]);

  return (
    <section
      ref={sectionRef}
      className="h-transition-section"
      aria-label="Portfolio transition"
    >
      <canvas
        ref={canvasRef}
        className="h-transition-canvas"
        aria-hidden="true"
      />
    </section>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {

  const [darkMode, setDarkMode] =
    useState(true);


  /* =======================================================
     PROJECTS
  ======================================================= */

  const projects = [

    {
      title: "AI Chatbot",

      desc:
        "Intelligent AI chatbot capable of generating dynamic responses using NLP concepts.",

      link:
        "https://github.com/harshit2700qq/ai-chatbot",
    },


    {
      title:
        "Dynamic Pricing Model",

      desc:
        "Machine learning model designed to optimize pricing strategies using real-time datasets.",

      link:
        "https://github.com/harshit2700qq/Dynamic-pricing-model/blob/main/dynamic-pricing.ipynb",
    },


    {
      title:
        "Sentiment Analysis",

      desc:
        "NLP-powered sentiment analysis system that classifies text into multiple sentiments.",

      link:
        "https://github.com/harshit2700qq/Sentiment-analysis",
    },


    {
      title:
        "Estate Price Variation",

      desc:
        "Predictive analytics model focused on forecasting estate price fluctuations.",

      link:
        "https://github.com/harshit2700qq/Estate-price-variation-model",
    },


    {
      title:
        "Churn Prediction Model",

      desc:
        "Machine learning model built to predict customer churn and improve retention.",

      link:
        "https://github.com/harshit2700qq/Churn-model",
    },


    {
      title:
        "Eco Nexus",

      desc:
        "An environmental-focused project designed to explore technology-driven solutions for sustainability and real-world ecological challenges.",

      link:
        "https://github.com/harshit2700qq/EcoNexus",
    },

  ];


  return (

    <div
      className={
        darkMode
          ? "site dark-theme"
          : "site light-theme"
      }
    >


      {/* =================================================
          BACKGROUND
      ================================================= */}

      <SpaceBackground
        lightMode={!darkMode}
      />


      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav className="navbar">

        {/* Portfolio logo */}

        <a
          href="#home"
          className="logo"
        >
          Portfolio<span>.</span>
        </a>


        {/* Navigation */}

        <div className="nav-links">

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        {/* Right side */}

        <div className="nav-actions">


          <button
            type="button"
            className="theme-button"
            onClick={() =>
              setDarkMode(!darkMode)
            }
            aria-label="Toggle theme"
          >

            {darkMode
              ? "☀"
              : "☾"}

          </button>


          <a
            href="#contact"
            className="nav-hire"
          >
            Hire Me
          </a>


        </div>

      </nav>


      {/* =================================================
          HERO
      ================================================= */}

      <section
        id="home"
        className="hero section-anchor"
      >

        <div className="hero-content">


          {/* LEFT */}

          <motion.div
            className="hero-text"

            initial={{
              opacity: 0,
              x: -50,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.9,
            }}
          >


            <div className="eyebrow">

              <span></span>

              HELLO, I'M

            </div>


            <h1 className="hero-name">

              Himoghno

              <span>
                Ghosh
              </span>

            </h1>


            <h2>
              Computer Science Student
            </h2>


            <p className="hero-description">

              Passionate about technology,
              artificial intelligence, machine
              learning and web development.
              I enjoy learning, experimenting
              and building projects that solve
              real-world problems.

            </p>


            <div className="hero-buttons">


              <a
                href="#projects"
                className="hero-button hero-button-main"
              >

                View My Work

                <span>
                  →
                </span>

              </a>


              <a
                href="#contact"
                className="hero-button"
              >

                Get In Touch

              </a>


            </div>


            <div className="social-links">


              <a
                href="https://github.com/harshit2700qq"
                target="_blank"
                rel="noreferrer"
              >

                <FaGithub />

              </a>


              <a
                href="https://www.linkedin.com/in/himoghno-ghosh-591936325"
                target="_blank"
                rel="noreferrer"
              >

                <FaLinkedin />

              </a>


              <a
                href="mailto:himoghno.dev@gmail.com"
              >

                <MdEmail />

              </a>


            </div>

          </motion.div>


          {/* RIGHT SIDE */}

          <div className="hero-side-content">


            <div className="hero-floating-label label-one">

              <span>
                01
              </span>

              AI / ML

            </div>


            <div className="hero-floating-label label-two">

              <span>
                02
              </span>

              WEB DEV

            </div>


            <div className="hero-side-title">

              BUILDING
              <br />

              <span>
                IDEAS
              </span>

              <br />

              INTO
              <br />

              REALITY

            </div>


          </div>


        </div>


        <div className="scroll-indicator">

          <span>
            SCROLL
          </span>

          <div className="scroll-mouse">

            <div></div>

          </div>

        </div>


      </section>


      {/* =================================================
          ABOUT
      ================================================= */}

      <section
        id="about"
        className="content-section section-anchor"
      >

        <motion.div
          className="about-container"

          initial={{
            opacity: 0,
            y: 50,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}
        >


          <div className="about-text">


            <div className="section-eyebrow">

              <span></span>

              ABOUT ME

            </div>


            <h2>

              Curious about
              <br />

              technology.
              <br />

              Focused on{" "}

              <span>
                learning.
              </span>

            </h2>


            <p>
              Hello! I'm a B.Tech Computer
              Science student with a passion
              for technology and problem-solving.
            </p>


            <p>
              I enjoy learning new skills,
              building projects, and exploring
              areas like Artificial Intelligence,
              Machine Learning, and web
              development.
            </p>


            <p>
              I believe the best way to learn
              is by creating and experimenting,
              so I spend my time working on
              projects that help me improve and
              gain real-world experience.
            </p>


            <p>
              My goal is to keep learning,
              grow as a developer, and use
              technology to build useful and
              impactful solutions.
            </p>


            <div className="about-status">

              <span></span>

              Available for opportunities

            </div>


          </div>


          <div className="about-visual">

            <ProjectOrbit projects={projects} />

            <div className="about-stat stat-one">

              <strong>
                B.Tech
              </strong>

              <span>
                Computer Science
              </span>

            </div>


            <div className="about-stat stat-two">

              <strong>
                6+
              </strong>

              <span>
                Projects
              </span>

            </div>


            <div className="about-stat stat-three">

              <strong>
                Always
              </strong>

              <span>
                Learning
              </span>

            </div>

          </div>


        </motion.div>

      </section>


      {/* =================================================
          SKILLS
      ================================================= */}

      <section
        id="skills"
        className="content-section skills-section section-anchor"
      >


        <motion.div
          className="skills-heading"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}
        >


          <div>

            <div className="section-eyebrow">

              <span></span>

              SKILLS

            </div>


            <h2>

              Technologies
              <br />

              I'm{" "}

              <span>
                exploring.
              </span>

            </h2>

          </div>


          <p>

            Technologies and tools that I use
            while learning, building projects,
            and exploring new ideas in software
            development and AI.

          </p>


        </motion.div>


        <div className="skill-grid">


          {[

            {
              title:
                "Programming Languages",

              icon: "💻",

              skills: [
                "C",
                "C++",
                "Python",
                "HTML",
              ],
            },


            {
              title:
                "AI & Machine Learning",

              icon: "🧠",

              skills: [
                "TensorFlow",
                "PyTorch",
                "Scikit-Learn",
                "OpenCV",
                "NLTK",
                "Pandas",
                "NumPy",
              ],
            },


            {
              title:
                "Web Development",

              icon: "🌐",

              skills: [
                "React",
                "Node.js",
                "FastAPI",
                "MongoDB",
                "Tailwind CSS",
              ],
            },


            {
              title:
                "Tools & Technologies",

              icon: "🛠",

              skills: [
                "Git",
                "Jupyter",
                "VS Code",
                "Linux",
              ],
            },

          ].map(
            (category, index) => (

              <motion.div
                key={category.title}
                className="skill-card"

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.6,
                  delay:
                    index * 0.1,
                }}

                viewport={{
                  once: true,
                }}
              >


                <div className="skill-icon">
                  {category.icon}
                </div>


                <h3>
                  {category.title}
                </h3>


                <div className="skill-pills">

                  {category.skills.map(
                    (skill) => (

                      <span key={skill}>
                        {skill}
                      </span>

                    )
                  )}

                </div>


              </motion.div>

            )
          )}


        </div>

      </section>


      {/* =================================================
          PROJECTS
      ================================================= */}

      <section
        id="projects"
        className="content-section projects-section section-anchor"
      >


        <motion.div
          className="section-heading-left"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}
        >


          <div className="section-eyebrow">

            <span></span>

            SELECTED WORK

          </div>


          <h2>

            Things I've
            <br />

            <span>
              built.
            </span>

          </h2>


        </motion.div>


        <div className="projects-grid">


          {projects.map(
            (project, index) => (

              <motion.article
                key={project.title}
                className="project-card"

                initial={{
                  opacity: 0,
                  y: 40,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.6,
                  delay:
                    index * 0.08,
                }}

                viewport={{
                  once: true,
                }}
              >


                <div className="project-number">

                  0{index + 1}

                </div>


                <h3>
                  {project.title}
                </h3>


                <p>
                  {project.desc}
                </p>


                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >

                  Git Repository

                  <span>
                    ↗
                  </span>

                </a>


              </motion.article>

            )
          )}


          {/* CKD FEATURED */}

          <motion.article
            className="project-card featured-project"

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
            }}

            viewport={{
              once: true,
            }}
          >


            <div className="featured-label">

              FEATURED PROJECT

            </div>


            <div className="project-number">
              07
            </div>


            <h3>
              CKD Predictor
            </h3>


            <p>

              Chronic Kidney Disease
              prediction system developed
              using machine learning to assist
              in early diagnosis and healthcare
              support.

            </p>


            <a
              href="https://github.com/harshit2700qq/CKD-predictor"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >

              Git Repository

              <span>
                ↗
              </span>

            </a>


          </motion.article>


        </div>

      </section>


      {/* =================================================
          CINEMATIC H TRANSITION
      ================================================= */}

      <HParticleTransition lightMode={!darkMode} />


      {/* =================================================
          EXPERIENCE
      ================================================= */}

      <section className="content-section experience-section">


        <motion.div
          className="experience-container"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}
        >


          <div className="section-eyebrow">

            <span></span>

            MY JOURNEY

          </div>


          <h2>

            Learning through
            <br />

            <span>
              building.
            </span>

          </h2>


          <div className="experience-item">

            <div className="experience-dot"></div>


            <div>

              <span className="experience-date">

                2024 — PRESENT

              </span>


              <h3>

                Machine Learning &
                Development Projects

              </h3>


              <p>

                Developing practical projects
                in machine learning, artificial
                intelligence, data analysis and
                web development while
                continuously learning new
                technologies.

              </p>

            </div>

          </div>


          <div className="experience-points">


            <div>

              <span>
                01
              </span>

              Developed machine learning
              projects including CKD Prediction,
              Churn Prediction, Sentiment
              Analysis and Dynamic Pricing.

            </div>


            <div>

              <span>
                02
              </span>

              Built intelligent applications
              using Python, machine learning
              and data analysis techniques.

            </div>


            <div>

              <span>
                03
              </span>

              Worked with real-world datasets
              for prediction, classification and
              analytics tasks.

            </div>


            <div>

              <span>
                04
              </span>

              Created responsive web applications
              and explored modern frontend
              technologies.

            </div>


          </div>


        </motion.div>

      </section>


      {/* =================================================
          CONTACT
      ================================================= */}

      <section
        id="contact"
        className="content-section contact-section section-anchor"
      >


        <motion.div
          className="contact-container"

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}
        >


          <div className="section-eyebrow">

            <span></span>

            LET'S CONNECT

          </div>


          <h2>

            Have an idea?
            <br />

            Let's{" "}

            <span>
              build it.
            </span>

          </h2>


          <p className="contact-description">

            Have a project idea? Tell me a
            little about yourself and the work
            you'd like to discuss.

          </p>


          <form
            action="https://formspree.io/f/xpqewayd"
            method="POST"
            className="contact-form"
          >


            <div className="form-row">


              <div className="form-group">

                <label>
                  Your Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Your Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />

              </div>


            </div>


            <div className="form-group">

              <label>
                Project Title
              </label>

              <input
                type="text"
                name="subject"
                placeholder="Project Title"
                required
              />

            </div>


            <div className="form-group">

              <label>
                Project Details
              </label>

              <textarea
                name="message"
                rows="6"
                placeholder="Describe the project or work you want me to do..."
                required
              ></textarea>

            </div>


            <button
              type="submit"
              className="hero-button hero-button-main submit-button"
            >

              Send Message

              <span>
                →
              </span>

            </button>


          </form>


          <div className="contact-email">

            <MdEmail />

            <a href="mailto:himoghno.dev@gmail.com">

              himoghno.dev@gmail.com

            </a>

          </div>


        </motion.div>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="footer">


        <div>

          <strong>

            Portfolio<span>.</span>

          </strong>


          <p>

            Learning, building and growing
            through technology.

          </p>

        </div>


        <div className="footer-socials">


          <a
            href="https://github.com/harshit2700qq"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>


          <a
            href="https://www.linkedin.com/in/himoghno-ghosh-591936325"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>


          <a href="mailto:himoghno.dev@gmail.com">
            <MdEmail />
          </a>


        </div>


      </footer>


    </div>
  );
}


export default App;
