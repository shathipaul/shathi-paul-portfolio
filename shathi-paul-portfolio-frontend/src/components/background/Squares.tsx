"use client";
import { useEffect, useRef, useState } from "react";

export default function Squares() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hovered, setHovered] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = 44; // square size
    const updateCanvas = () => {
      const { innerWidth: width, innerHeight: height } = window;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const draw = () => {
      ctx.fillStyle = "#f0e6e400"; // background color
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / dpr / size);
      const rows = Math.ceil(canvas.height / dpr / size);

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const px = x * size;
          const py = y * size;

          // fill square background
          ctx.fillStyle = "#f0e6e400";
          ctx.fillRect(px, py, size, size);

          // draw border (like "1px solid #3e2c2390")
          ctx.strokeStyle = "#3e2c2390";
          ctx.lineWidth = 0.03;
          ctx.strokeRect(px, py, size, size);

          // highlight hovered square
          if (hovered && hovered.x === x && hovered.y === y) {
            ctx.fillStyle = "#a88f7a30"; // slightly darker hover
            ctx.fillRect(px, py, size, size);
            ctx.strokeStyle = "#a88f7a30";
            ctx.strokeRect(px, py, size, size);
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = Math.floor(
        (((e.clientX - rect.left) / rect.width) * canvas.width) / dpr / size
      );
      const y = Math.floor(
        (((e.clientY - rect.top) / rect.height) * canvas.height) / dpr / size
      );
      setHovered({ x, y });
    };

    const handleMouseLeave = () => setHovered(null);

    window.addEventListener("resize", updateCanvas);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    updateCanvas();

    return () => {
      window.removeEventListener("resize", updateCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hovered]);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
  );
}
