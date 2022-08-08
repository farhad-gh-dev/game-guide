import React from "react";
import { StyledTabsPanel } from "./TabsPanel.styled";
import { Tabs, ItemCardInfo } from "game-guide-ui-kit";
import { AvailableVersions, ComingSoon } from "./TabContents";

export type TabsPanelProps = {
  tabsData?: {
    collection_details?: {};
    available_versions?: ItemCardInfo[];
    installation_guide?: {};
    comments?: {};
  };
};

const TabsPanel: React.FC<TabsPanelProps> = ({ tabsData }) => {
  return (
    <StyledTabsPanel>
      <Tabs
        tabItems={[
          {
            tabTitle: "games on sale",
            tabContent: <ComingSoon />,
          },
          {
            tabTitle: "top sellers",
            tabContent: (
              <AvailableVersions
                tabContentData={tabsData?.available_versions}
              />
            ),
          },
          {
            tabTitle: "new release",
            tabContent: <ComingSoon />,
          },
          {
            tabTitle: "comments",
            tabContent: <ComingSoon />,
          },
        ]}
        defaultActiveIndex={1}
      />
    </StyledTabsPanel>
  );
};

export default TabsPanel;
