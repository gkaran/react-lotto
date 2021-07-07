import { observer } from "mobx-react-lite";

const MessageArea = observer(({selectedTab}) => {
    if (selectedTab.isValid) return null;
    return (
        <div className='bg-red-600 text-left px-6 p-2 mb-2 rounded-lg text-lg'>
            <span className='inline-block text-center align-middle rounded-full border-2 border-white text-white text-2xl w-8 h-8 mr-5'>!</span>{selectedTab.errorMessage}
        </div>
    );
});

export default MessageArea;