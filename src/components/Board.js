import BoardNumbers from './BoardNumbers';
import TabButton from "./TabButton";
import System from './System';
import { observer } from "mobx-react-lite"
import ActionButtons from './ActionButtons';

const Board = observer(({ game }) => {

    const onNewTabClick = () => game.addNewTab();

    const tabButtons = game.tabs.map(tab => <TabButton 
        tab={tab} 
        game={game}
        key={tab.id}
        selected={game.selectedTab.id === tab.id} />);

    return (
        <div>
            {!game.selectedTab.isValid && <div className='bg-red-600 text-left px-6 p-2 mb-2 rounded-lg text-lg'><span className='inline-block text-center align-middle rounded-full border-2 border-white text-white text-2xl w-8 h-8 mr-5'>!</span>{game.selectedTab.errorMessage}</div>}
            <div className='flex items-center'>
                {tabButtons}
                {game.canAddMoreTabs && <button className='py-2 px-8' onClick={onNewTabClick}><span className='text-white'>&#10753;</span></button>}
            </div>

            <div className={`bg-gray-800 p-4 rounded-r-lg ${game.selectedTab.index > 1 ? 'rounded-tl-lg' : ''}`}>
                <BoardNumbers tab={game.selectedTab} />
                <System tab={game.selectedTab} />
            </div>

            <div className='flex items-center'>
                <div className='bg-gray-800 rounded-b-lg pb-4 pt-6 flex-initial pl-4 pr-4'>
                    <ActionButtons game={game} />
                </div>
                <div className='flex flex-1 justify-end items-center content-center'>
                    <div className='text-right pr-3'>
                        <p className='text-lg'>Board Price {game.selectedTab.priceFormatted}</p>
                        <p className='text-green-600 text-2xl'>Total Price {game.price}</p>
                    </div>
                    <button className={`${game.isValid ? 'bg-green-600' : 'bg-gray-700'} rounded-lg px-3 py-2`} disabled={!game.isValid}>Play All</button>
                </div>
            </div>
        </div>
    );
});

export default Board;