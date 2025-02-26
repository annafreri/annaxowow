import { motion } from "motion/react";
import { CSSProperties, useEffect, useState } from "react";
import users from '../data/users.json'

export default function AnimatedBackground() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const random = (min: number, max: number) => Math.random() * (max - min) + min;

  const getRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
  };

  const people = Array.from({ length: 12 }, (_, i) => {
    const randomUser = getRandomUser();
    return {
      id: i,
      size: 250,
      startY: random(windowSize.height + 100, windowSize.height + 200),
      endY: random(-100, -200),
      duration: random(10, 25),
      delay: random(0, 10),
      right: random(80, windowSize.width - 80),
      opacity: 1,
      profilePicture: randomUser.profilePicture
    };
  });

  const getPersonStyle = (person: typeof people[0]): CSSProperties => ({
    width: `${person.size}px`,
    height: `${person.size}px`,
    backgroundImage: `url('/avatars/${person.profilePicture}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    position: 'fixed',
    pointerEvents: 'none',
    opacity: person.opacity,
  });

  return (
    <div
      className="fixed inset-0"
      style={{ zIndex: -999 }}
    >
      {people.map((person) => (
        <motion.div
          key={person.id}
          style={{ ...getPersonStyle(person), right: person.right }}
          animate={{
            y: [person.startY, person.endY]
          }}
          transition={{
            duration: person.duration,
            repeat: Infinity,
            ease: "linear",
            delay: person.delay
          }}
        />
      ))}
    </div>
  );
}