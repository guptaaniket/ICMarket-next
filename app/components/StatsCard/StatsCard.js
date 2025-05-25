import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const StatsCard = ({ title, subtitle, delay, animateNumber }) => {
  const cardRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(title);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: delay || 0 }
    );

    if (animateNumber) {
      const num = { val: 0 };
      gsap.to(num, {
        val: 2250,
        duration: 2,
        ease: "power1.out",
        onUpdate: () => {
          setDisplayValue("+" + Math.floor(num.val));
        },
      });
    }
  }, [delay, animateNumber]);

  return (
    <div ref={cardRef} className="card-item">
      <span className="card-title">{displayValue}</span>
      <span className="card-subtitle">{subtitle}</span>
    </div>
  );
};

export default StatsCard;