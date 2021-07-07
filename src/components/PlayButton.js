import { observer } from "mobx-react-lite";

const PlayButton = observer(({ game }) => (
  <button
    className={`${
      game.isValid ? "bg-green-600" : "bg-gray-700 cursor-not-allowed"
    } rounded-lg px-3 py-2`}
    disabled={!game.isValid}
  >
    Play All
  </button>
));

export default PlayButton;
