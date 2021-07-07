import { observer } from "mobx-react-lite";
import TabButton from "./TabButton";

const NavigationArea = observer(({ game }) => {
  
  const tabButtons = game.tabs.map((tab) => (
    <TabButton
      tab={tab}
      game={game}
      key={tab.id}
      selected={game.selectedTab.id === tab.id}
    />
  ));

  const onNewTabClick = () => game.addNewTab();

  return (
    <div className="flex items-center">
      {tabButtons}
      {game.canAddMoreTabs && (
        <button className="py-2 px-8" onClick={onNewTabClick}>
          <span className="text-white">&#10753;</span>
        </button>
      )}
    </div>
  );
});

export default NavigationArea;