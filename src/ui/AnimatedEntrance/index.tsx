import { ReactNode, useEffect, useRef, useState } from "react";
import { AnimatedSpan } from "./AnimatedEntrance.styled";
import { AnimationEntrance } from "./AnimatedEntrance.types";

type Props = {
  animation: AnimationEntrance;
  delay?: number;
  duration?: number;
  animateWhenVisible?: boolean;
  transition?: string;
  children: ReactNode;
};

const AnimatedEntrance = ({
  animation,
  delay = 0,
  duration = 1,
  animateWhenVisible = true,
  transition = "ease-out",
  children,
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (nodeRef.current === null) return;

    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    });

    observer.observe(nodeRef.current);

    return () => observer.disconnect();
  }, [nodeRef]);

  return (
    <AnimatedSpan
      ref={nodeRef}
      $animation={animation}
      $delay={delay}
      $duration={duration}
      $triggerAnimation={isVisible || !animateWhenVisible}
      $transition={transition}
    >
      {children}
    </AnimatedSpan>
  );
};

export default AnimatedEntrance;
