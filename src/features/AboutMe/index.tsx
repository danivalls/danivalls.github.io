import AnimatedEntrance from "../../ui/AnimatedEntrance";
import LockedFrame from "../../ui/LockedFrame";
import { SectionContent } from "../../ui/SectionContainer";
import SectionTitle from "../../ui/SectionTitle";
import Typography from "../../ui/Typography";

const AboutMe = () => {
  return (
    <LockedFrame height="100dvh" backgroundColor="primaryInverse">
      <SectionContent>
        <SectionTitle>Who am I</SectionTitle>

        <Typography
          as="p"
          variant="text3"
          variantTabletUp="text2"
          color="primaryInverse"
          weight="regular"
        >
          <AnimatedEntrance animation="fadeIn">
            I’m a front-end developer based in Spain, specializing in React and
            TypeScript. I love the blend of logic and creativity that coding
            offers—bringing an interface to life feels like solving a fun
            puzzle! Fluent in both Spanish and English, I also enjoy geeking out
            over DnD, playing guitar, singing, and unwinding with a good book or
            video game. I’m always eager to learn and collaborate, finding ways
            to mix tech with a bit of fun!
          </AnimatedEntrance>
        </Typography>
      </SectionContent>
    </LockedFrame>
  );
};

export default AboutMe;
