import React from "react";
import { StyledTabsPanel } from "./TabsPanel.styled";
import { Tabs } from "game-guide-ui-kit";
import { AvailableVersions, ComingSoon } from "./TabContents";
import { categoryTabsType } from "../../DummyData";
import helpers from "../../Helpers";

export type TabsPanelProps = {
  tabsData?: categoryTabsType;
};

const TabsPanel: React.FC<TabsPanelProps> = ({ tabsData }) => {
  const getTabContent = (targetTab: string) => {
    switch (targetTab) {
      case "top_sellers":
        return (
          <AvailableVersions tabContentData={tabsData && tabsData[targetTab]} />
        );
      default:
        return <ComingSoon />;
    }
  };

  return (
    <StyledTabsPanel>
      <Tabs
        tabItems={
          tabsData
            ? [
                ...Object.keys(tabsData).map((item) => {
                  const tabHasContent = tabsData[item as keyof typeof tabsData];
                  return {
                    tabTitle: helpers.string.replaceUnderscoreWithSpace(item),
                    tabContent: tabHasContent ? (
                      getTabContent(item)
                    ) : (
                      <ComingSoon />
                    ),
                  };
                }),
              ]
            : []
        }
        defaultActiveIndex={1}
      />
    </StyledTabsPanel>
  );
};

export default React.memo(TabsPanel);
