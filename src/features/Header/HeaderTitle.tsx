import AnimatedEntrance from "../../ui/AnimatedEntrance";
import Typography from "../../ui/Typography";
import { TitleContainer } from "./Header.styled";

const HeaderTitle = () => {
  return (
    <TitleContainer>
      <Typography
        as="h1"
        variant="text1"
        variantTabletUp="display2"
        variantDesktopUp="display1"
        color="primaryInverse"
        weight="semibold"
      >
        <AnimatedEntrance
          animateWhenVisible={false}
          animation="slideUp"
          transition="bounce"
          delay={1}
          duration={0.5}
        >
          Hi!
        </AnimatedEntrance>{" "}
        <AnimatedEntrance
          animateWhenVisible={false}
          animation="fadeIn"
          delay={2}
          duration={0.5}
        >
          I'm{" "}
          <Typography
            variant="text1"
            variantTabletUp="display2"
            variantDesktopUp="display1"
            as="span"
            weight="semibold"
            color="accent"
          >
            Daniel Valls
          </Typography>
        </AnimatedEntrance>
      </Typography>
      <AnimatedEntrance
        animateWhenVisible={false}
        animation="fadeIn"
        delay={3}
        duration={2}
      >
        <Typography
          variantTabletUp="text1"
          variant="text3"
          as="h2"
          color="accentSubtle"
        >
          Front-end Developer
        </Typography>
      </AnimatedEntrance>
    </TitleContainer>
  );
};

export default HeaderTitle;
