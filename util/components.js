import { Box } from "grommet";
import styled from "styled-components";

export const GradientBox = styled(Box)`
  background-image: linear-gradient(
    90deg,
    rgba(49, 221, 171, 0.64),
    rgba(193, 125, 245, 0.64),
    rgba(79, 86, 255, 0.64) 64%
  );
  --webkit-filter: blur(40px);
  filter: blur(40px);
`;
