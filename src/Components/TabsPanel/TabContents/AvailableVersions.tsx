import React from "react";
import styled from "styled-components";
import { styles, ItemCard, ItemCardInfo } from "game-guide-ui-kit";

const StyledAvailableVersions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(130px, 1fr));
  column-gap: 25px;
  row-gap: 25px;

  @media (min-width: ${styles.breakpoint.laptopScreen}px) {
    grid-template-columns: repeat(4, minmax(170px, 1fr));
    column-gap: 28px;
    row-gap: 28px;
  }

  @media (min-width: ${styles.breakpoint.largeScreen}px) {
    grid-template-columns: repeat(4, minmax(230px, 1fr));
    column-gap: 40px;
    row-gap: 40px;
  }
`;

export type AvailableVersionsProps = {
  tabContentData?: ItemCardInfo[];
};

const AvailableVersions: React.FC<AvailableVersionsProps> = ({
  tabContentData,
}) => {
  return (
    <StyledAvailableVersions>
      {tabContentData?.map((item) => {
        return <ItemCard key={item.id} cardInfo={item} />;
      })}
    </StyledAvailableVersions>
  );
};

export default AvailableVersions;
