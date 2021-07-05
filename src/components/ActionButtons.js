import { observer } from "mobx-react-lite";

const ActionButtons = observer(({game}) => {
    const onTabClear = () => game.selectedTab.clear();
    const onGameClear = () => game.clearAll();
    const onTabQuickPick = () => game.selectedTab.quickPick();
    const onGameQuickPick = () => game.quickPickAll();
    const onGameReset = () => game.reset();

    return [
        <button className='border-white text-white border-2 rounded-lg p-2 text-lg mr-2' onClick={onTabClear}>CLR</button>,
        <button className='border-white text-white border-2 rounded-lg p-2 text-lg mr-2' onClick={onGameClear}>CLR ALL</button>,
        <button className='border-white text-white border-2 rounded-lg p-2 text-lg mr-2' onClick={onTabQuickPick}>QS</button>,
        <button className='border-white text-white border-2 rounded-lg p-2 text-lg mr-2' onClick={onGameQuickPick}>QS ALL</button>,
        <button className='border-white text-white border-2 rounded-lg p-2 text-lg' onClick={onGameReset}>R</button>
    ];
});

export default ActionButtons;