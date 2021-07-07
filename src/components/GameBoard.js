import BoardNumbers from './BoardNumbers';

import System from './System';
import { observer } from "mobx-react-lite"
import ActionButtons from './ActionButtons';
import MessageArea from './MessageArea';
import NavigationArea from './NavigationArea';
import PricingArea from './PricingArea';
import PlayButton from './PlayButton';

const GameBoard = observer(({ game }) => {

    return (
        <div>
            <MessageArea selectedTab={game.selectedTab} />
            <NavigationArea game={game} />

            <div className={`bg-gray-800 p-4 rounded-r-lg ${game.selectedTab.index > 1 ? 'rounded-tl-lg' : ''}`}>
                <BoardNumbers tab={game.selectedTab} />
                <System tab={game.selectedTab} />
            </div>

            <div className='flex items-center'>
                <div className='bg-gray-800 rounded-b-lg pb-4 pt-6 flex-initial pl-4 pr-4'>
                    <ActionButtons game={game} />
                </div>
                <div className='flex flex-1 justify-end items-center content-center'>
                    <PricingArea game={game} />
                    <PlayButton game={game} />
                </div>
            </div>
        </div>
    );
});

export default GameBoard;