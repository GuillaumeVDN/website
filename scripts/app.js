// --- Dynamic dates ---
const birthdayDate = new Date(2001, 3, 2);
const javaStartDate = new Date(2015, 0, 1);

function yearsSince(date) {
  const now = new Date();
  let years = now.getFullYear() - date.getFullYear();
  const m = now.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < date.getDate())) years--;
  return years;
}

function timeSince(date) {
  const years = yearsSince(date);
  return years + " years";
}

document.getElementById("age").textContent = yearsSince(birthdayDate);
document.getElementById("experience").textContent = timeSince(javaStartDate);

// --- Particle network canvas ---
(function () {
  const canvas = document.getElementById("network");
  const ctx = canvas.getContext("2d");

  let width, height;
  let mouse = { x: -9999, y: -9999 };
  let particles = [];

  const PARTICLE_COUNT = 80;
  const MAX_DIST = 150;
  const MOUSE_RADIUS = 200;
  const PARTICLE_COLOR = "rgba(255,255,255,";
  const LINE_COLOR_BASE = [0, 162, 255];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 2 + 1,
    };
  }

  function init() {
    resize();
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }
  }

  function dist(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update & draw particles
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Subtle attraction toward mouse
      const dMouse = dist(p, mouse);
      if (dMouse < MOUSE_RADIUS) {
        const force = (MOUSE_RADIUS - dMouse) / MOUSE_RADIUS * 0.02;
        p.vx += (mouse.x - p.x) * force * 0.05;
        p.vy += (mouse.y - p.y) * force * 0.05;
        // Dampen
        p.vx *= 0.99;
        p.vy *= 0.99;
      }

      const alpha = dMouse < MOUSE_RADIUS ? 0.9 : 0.3;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = PARTICLE_COLOR + alpha + ")";
      ctx.fill();
    }

    // Draw lines between nearby particles (boosted near mouse)
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const d = dist(particles[i], particles[j]);
        const midX = (particles[i].x + particles[j].x) / 2;
        const midY = (particles[i].y + particles[j].y) / 2;
        const dMid = dist({ x: midX, y: midY }, mouse);
        const nearMouse = dMid < MOUSE_RADIUS;
        const maxD = nearMouse ? MAX_DIST * 1.5 : MAX_DIST;

        if (d < maxD) {
          const alpha = (1 - d / maxD) * (nearMouse ? 0.6 : 0.12);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle =
            "rgba(" +
            LINE_COLOR_BASE[0] + "," +
            LINE_COLOR_BASE[1] + "," +
            LINE_COLOR_BASE[2] + "," +
            alpha + ")";
          ctx.lineWidth = nearMouse ? 1 : 0.5;
          ctx.stroke();
        }
      }
    }

    // Lines from mouse to nearby particles
    for (const p of particles) {
      const d = dist(p, mouse);
      if (d < MOUSE_RADIUS) {
        const alpha = (1 - d / MOUSE_RADIUS) * 0.5;
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle =
          "rgba(" +
          LINE_COLOR_BASE[0] + "," +
          LINE_COLOR_BASE[1] + "," +
          LINE_COLOR_BASE[2] + "," +
          alpha + ")";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }

    requestAnimationFrame(animate);
  }

  window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", function () {
    mouse.x = -9999;
    mouse.y = -9999;
  });

  window.addEventListener("resize", resize);

  init();
  animate();
})();
