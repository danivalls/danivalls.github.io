import AnimatedEntrance from "../../ui/AnimatedEntrance";
import LockedFrame from "../../ui/LockedFrame";
import { SectionContent } from "../../ui/SectionContainer";
import SectionTitle from "../../ui/SectionTitle";
import Typography from "../../ui/Typography";
import { CareerCard, CareerContent } from "./Career.styled";

const Career = () => {
  return (
    <LockedFrame
      height="100dvh"
      backgroundColor="primaryInverse"
      underlay={
        <video autoPlay muted loop playsInline>
          <source src="/bg_career.webm" type="video/webm" />
          <source src="/bg_career.mp4" type="video/mp4" />
        </video>
      }
    >
      <SectionContent>
        <CareerContent>
          <SectionTitle>My journey so far</SectionTitle>
          <AnimatedEntrance animation="fadeIn">
            <CareerCard>
              <Typography
                as="h3"
                variant="text1"
                variantDesktopUp="display5"
                color="primaryInverse"
                weight="medium"
              >
                Education
              </Typography>
              <ul></ul>
            </CareerCard>
          </AnimatedEntrance>
          <AnimatedEntrance animation="fadeIn">
            <CareerCard>Test</CareerCard>
          </AnimatedEntrance>
        </CareerContent>
      </SectionContent>
    </LockedFrame>
  );
};

export default Career;
