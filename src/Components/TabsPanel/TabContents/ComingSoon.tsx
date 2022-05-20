import React from "react";
import styled from "styled-components";
import { Text } from "game-guide-ui-kit";

const StyledComingSoon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.05);
  span {
    text-transform: capitalize;
  }
`;

const ComingSoon: React.FC = () => {
  return (
    <StyledComingSoon>
      <Text isSpan size="lg">
        coming soon
      </Text>
    </StyledComingSoon>
  );
};

export default ComingSoon;
