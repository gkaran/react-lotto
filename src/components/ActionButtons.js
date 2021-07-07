import { observer } from "mobx-react-lite";
import ActionButton from "./ActionButton";

const ActionButtons = observer(({game}) => {
    const onTabClear = () => game.selectedTab.clear();
    const onGameClear = () => game.clearAll();
    const onTabQuickPick = () => game.selectedTab.quickPick();
    const onGameQuickPick = () => game.quickPickAll();
    const onGameReset = () => game.reset();

    return (<>
        <ActionButton text='CLR' onClick={onTabClear} />
        <ActionButton text='CLR ALL' onClick={onGameClear} />
        <ActionButton text='QS' onClick={onTabQuickPick} />
        <ActionButton text='QS ALL' onClick={onGameQuickPick} />
        <ActionButton text='R' onClick={onGameReset} />
    </>);
});

export default ActionButtons;