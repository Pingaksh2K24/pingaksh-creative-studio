"use client";
import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  size: number;
  life: number;
  maxLife: number;
  velocityX: number;
  velocityY: number;
}

export default function CursorTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let particleId = 0;
    let animationFrame: number;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create new particles
      const newParticles: Particle[] = [];
      for (let i = 0; i < 3; i++) {
        newParticles.push({
          id: particleId++,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          opacity: 0.8,
          size: Math.random() * 8 + 4,
          life: 0,
          maxLife: 60 + Math.random() * 40,
          velocityX: (Math.random() - 0.5) * 2,
          velocityY: (Math.random() - 0.5) * 2 - 1,
        });
      }

      setParticles(prev => [...prev, ...newParticles]);
    };

    const updateParticles = () => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.velocityX,
            y: particle.y + particle.velocityY,
            life: particle.life + 1,
            opacity: Math.max(0, 0.8 * (1 - particle.life / particle.maxLife)),
            size: particle.size * (1 - particle.life / particle.maxLife * 0.5),
            velocityY: particle.velocityY + 0.1, // gravity effect
          }))
          .filter(particle => particle.life < particle.maxLife && particle.opacity > 0.01)
      );

      animationFrame = requestAnimationFrame(updateParticles);
    };

    window.addEventListener('mousemove', handleMouseMove);
    updateParticles();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 blur-sm"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            transform: `scale(${1 + particle.life / particle.maxLife})`,
            transition: 'opacity 0.1s ease-out',
          }}
        />
      ))}
      
      {/* Main cursor glow */}
      <div
        className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 blur-md pointer-events-none"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          opacity: 0.6,
          transition: 'all 0.1s ease-out',
        }}
      />
      
      {/* Cursor center dot */}
      <div
        className="absolute w-2 h-2 rounded-full bg-white pointer-events-none"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          opacity: 0.9,
          transition: 'all 0.05s ease-out',
        }}
      />
    </div>
  );
}
