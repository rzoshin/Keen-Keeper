import { Link, useRouteError } from "react-router";
import { useEffect, useRef } from "react";

const ErrorPage = () => {
  const error = useRouteError();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animFrame;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    // Fireflies
    const fireflies = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2.2 + 0.6,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random(),
      dAlpha: (Math.random() * 0.015 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
      hue: Math.random() < 0.7 ? 110 : 160,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      fireflies.forEach((f) => {
        f.x += f.dx;
        f.y += f.dy;
        f.alpha += f.dAlpha;
        if (f.alpha <= 0 || f.alpha >= 1) f.dAlpha *= -1;
        if (f.x < 0) f.x = W;
        if (f.x > W) f.x = 0;
        if (f.y < 0) f.y = H;
        if (f.y > H) f.y = 0;

        const grd = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 6);
        grd.addColorStop(0, `hsla(${f.hue}, 90%, 72%, ${f.alpha * 0.9})`);
        grd.addColorStop(1, `hsla(${f.hue}, 90%, 72%, 0)`);
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r * 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${f.hue}, 100%, 88%, ${f.alpha})`;
        ctx.fill();
      });

      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="error-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .error-root {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          background: #071a0f;
        }

        .error-canvas {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        /* Forest silhouette layers */
        .forest-back {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .forest-mid {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 2;
          pointer-events: none;
        }

        /* Sky gradient */
        .sky-gradient {
          position: absolute;
          inset: 0;
          z-index: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, #0d3320 0%, #071a0f 60%, #040e08 100%);
        }

        /* Moonlight glow */
        .moon-glow {
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(180,255,180,0.08) 0%, rgba(100,200,120,0.03) 50%, transparent 70%);
          z-index: 1;
          animation: moonPulse 5s ease-in-out infinite;
        }

        @keyframes moonPulse {
          0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
          50% { opacity: 1; transform: translateX(-50%) scale(1.07); }
        }

        .error-card {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 20px;
          animation: fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .error-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(5rem, 15vw, 10rem);
          font-weight: 700;
          line-height: 1;
          background: linear-gradient(160deg, #a8f0b8 0%, #4ade80 40%, #16a34a 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -4px;
          filter: drop-shadow(0 0 40px rgba(74,222,128,0.35));
          animation: numGlow 3s ease-in-out infinite;
          margin-bottom: 4px;
        }

        @keyframes numGlow {
          0%, 100% { filter: drop-shadow(0 0 30px rgba(74,222,128,0.3)); }
          50% { filter: drop-shadow(0 0 55px rgba(74,222,128,0.55)); }
        }

        .error-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #4ade80, transparent);
          margin: 0 auto 20px;
        }

        .error-tagline {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: clamp(1.1rem, 3vw, 1.5rem);
          color: #86efac;
          margin-bottom: 10px;
          letter-spacing: 0.02em;
        }

        .error-sub {
          font-size: 0.95rem;
          color: rgba(200,230,210,0.55);
          max-width: 380px;
          margin: 0 auto 8px;
          line-height: 1.6;
          font-weight: 300;
        }

        .error-detail {
          font-size: 0.78rem;
          color: rgba(200,230,210,0.3);
          margin-bottom: 36px;
          font-style: italic;
        }

        .error-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #16a34a, #15803d);
          color: #f0fdf4;
          border: none;
          padding: 12px 28px;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 24px rgba(22,163,74,0.35), inset 0 1px 0 rgba(255,255,255,0.1);
          transition: all 0.25s ease;
          letter-spacing: 0.01em;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #15803d, #166534);
          box-shadow: 0 6px 32px rgba(22,163,74,0.5), inset 0 1px 0 rgba(255,255,255,0.15);
          transform: translateY(-2px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.04);
          color: rgba(200,230,210,0.7);
          border: 1px solid rgba(74,222,128,0.2);
          padding: 12px 28px;
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          cursor: pointer;
          text-decoration: none;
          backdrop-filter: blur(4px);
          transition: all 0.25s ease;
        }

        .btn-secondary:hover {
          background: rgba(74,222,128,0.08);
          border-color: rgba(74,222,128,0.4);
          color: #86efac;
          transform: translateY(-2px);
        }

        /* Logo mark top */
        .nav-top {
          position: absolute;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          color: rgba(200,230,210,0.5);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .nav-top strong {
          color: rgba(200,230,210,0.8);
          font-weight: 700;
        }
      `}</style>

      {/* Sky */}
      <div className="sky-gradient" />
      <div className="moon-glow" />

      {/* Firefly canvas */}
      <canvas ref={canvasRef} className="error-canvas" />

      {/* Back forest layer (lighter, taller) */}
      <svg className="forest-back" viewBox="0 0 1440 340" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,340 L0,220 Q30,180 60,220 Q80,160 110,200 Q140,130 170,175 Q200,120 230,165 Q260,100 290,150 Q320,90 360,140 Q390,80 420,130 Q450,70 490,120 Q520,60 560,110 Q590,50 630,100 Q660,40 700,95 Q730,45 770,90 Q810,35 850,85 Q880,25 920,80 Q955,30 990,78 Q1025,20 1065,72 Q1095,15 1135,68 Q1165,10 1205,62 Q1235,5 1275,58 Q1310,10 1350,60 Q1385,12 1440,55 L1440,340 Z" fill="#0a2415" />
      </svg>

      {/* Front forest layer (darker, shorter) */}
      <svg className="forest-mid" viewBox="0 0 1440 260" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,260 L0,200 Q20,170 45,200 Q65,150 90,185 Q115,140 140,175 Q165,125 195,162 Q220,110 250,148 Q275,105 305,142 Q330,90 365,130 Q390,85 420,122 L420,260 Z" fill="#061510" />
        <path d="M380,260 L380,185 Q400,155 425,188 Q445,145 470,178 Q495,130 525,168 Q550,120 580,158 Q605,108 635,148 Q660,100 695,140 Q720,92 755,132 Q780,85 815,125 Q840,80 875,118 Q900,70 935,112 Q960,65 995,105 Q1020,60 1055,98 Q1080,55 1115,92 Q1140,48 1178,88 Q1205,42 1245,82 Q1270,38 1310,76 Q1340,32 1380,68 L1440,60 L1440,260 Z" fill="#040f09" />
      </svg>

      {/* Top nav */}
      <div className="nav-top">
        <strong>Keen</strong>Keeper
      </div>

      {/* Main content */}
      <div className="error-card">
        <div className="error-num">404</div>
        <div className="error-divider" />
        <p className="error-tagline">Lost in the wilderness</p>
        <p className="error-sub">
          This path doesn't lead anywhere. The page you're looking for has wandered off or doesn't exist.
        </p>
        {error && (
          <p className="error-detail">{error.statusText || error.message}</p>
        )}
        <div className="error-actions">
          <Link to="/" className="btn-primary">
            ← Back to Dashboard
          </Link>
          <button className="btn-secondary" onClick={() => window.location.reload()}>
            ↻ Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;