import { observer } from "mobx-react-lite";
import NumberButton from './NumberButton';

const BoardNumbers = observer(({tab}) => {

    const numbers = Array
        .from({length: 49}, (x,i) => i+1)
        .map(n => (<NumberButton number={n} key={n} tab={tab} />));

    return (
        <div className='grid grid-flow-row auto-rows-ma grid-cols-10 gap-4'>{numbers}</div>
    );
});

export default BoardNumbers;