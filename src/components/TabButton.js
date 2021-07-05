import { observer } from "mobx-react-lite";

const TabButton = observer(({tab, selected, game}) => {
    const bgColor = selected && 'bg-gray-800';
    let indicatorColors;
    if (tab.isDirty) {
        indicatorColors = tab.isValid ? 'bg-green-600' : 'bg-red-600';
    } else if (selected) indicatorColors = 'border-white border-2';

    return (
    <button className={`rounded-t-lg py-2 px-5 ${bgColor}`} onClick={() => game.selectTab(tab.index - 1)}>
        <span className={`inline-block align-middle mr-0.5 rounded-full w-2 h-2 ${indicatorColors}`} />
        <span>{tab.index}</span>
    </button>
    );
});

export default TabButton;