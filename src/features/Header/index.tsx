import { useEffect, useState } from "react";
import LockedFrame from "../../ui/LockedFrame";
import { HeaderContainer, ScrollDownIconContainer } from "./Header.styled";
import HeaderTitle from "./HeaderTitle";
import { ArrowDownTag } from "iconoir-react";
import AnimatedEntrance from "../../ui/AnimatedEntrance";

const Header = () => {
  const [videoIsReady, setVideoIsReady] = useState(false);

  useEffect(() => {
    document.body.style.overflow = videoIsReady ? "auto" : "hidden";
  }, [videoIsReady]);

  return (
    <LockedFrame
      height="100dvh"
      backgroundColor="primaryInverse"
      underlay={
        <video
          autoPlay
          muted
          loop
          playsInline
          onCanPlay={() => setVideoIsReady(true)}
        >
          <source src="/bg_av1.webm" type="video/webm" />
          <source src="/bg_mp4.mp4" type="video/mp4" />
        </video>
      }
    >
      <HeaderContainer>
        {videoIsReady && (
          <>
            <HeaderTitle />
            <AnimatedEntrance animation="fadeIn" delay={5}>
              <ScrollDownIconContainer>
                <ArrowDownTag />
              </ScrollDownIconContainer>
            </AnimatedEntrance>
          </>
        )}
      </HeaderContainer>
    </LockedFrame>
  );
};

export default Header;
