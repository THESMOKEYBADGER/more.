import { useEffect } from 'react';

function useBouncingBall() {
  useEffect(() => {
    const ball = document.getElementById('bouncingBall');
    let x = 0;
    let y = 0;
    let dx = 2; // Velocity in x direction
    let dy = 2; // Velocity in y direction
    const ballSize = 50; // Ball size
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    function animate() {
      if (!ball) return;

      x += dx;
      y += dy;

      if (x + ballSize > containerWidth || x < 0) {
        dx = -dx;
      }
      if (y + ballSize > containerHeight || y < 0) {
        dy = -dy;
      }

      ball.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      // Cleanup if needed
    };
  }, []);
}

export default useBouncingBall;
