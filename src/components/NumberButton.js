import { observer } from 'mobx-react-lite';

const NumberButton = observer(({number, tab}) => {
    const isSelected = tab.isNumberSelected(number);

    const toggleNumber = () => isSelected ? tab.deselectNumber(number) : tab.selectNumber(number);

    return (
        <button className={`${isSelected ? 'bg-yellow-600' : 'bg-gray-600'} text-white rounded-full w-16 h-16 text-center`} onClick={toggleNumber}>
            {number}
        </button>
    )
});

export default NumberButton;