const ActionButton = ({text, onClick}) => (
    <button className='border-white text-white border-2 rounded-lg p-2 text-lg mr-2 last:mr-0' onClick={onClick}>{text}</button>
);

export default ActionButton;