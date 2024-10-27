import { ReactNode } from "react";
import AnimatedEntrance from "./AnimatedEntrance";
import Typography from "./Typography";

type Props = {
  children: ReactNode;
};

const SectionTitle = ({ children }: Props) => {
  return (
    <Typography
      variant="display4"
      variantTabletUp="display2"
      as="h2"
      color="accent"
      weight="semibold"
    >
      <AnimatedEntrance animation="slideLeft" duration={0.5}>
        {children}
      </AnimatedEntrance>
    </Typography>
  );
};

export default SectionTitle;
