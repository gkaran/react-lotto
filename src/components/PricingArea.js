import { observer } from "mobx-react-lite";

const PricingArea = observer(({ game }) => (
  <div className="text-right pr-3">
    <p className="text-lg">Board Price {game.selectedTab.priceFormatted}</p>
    <p className="text-green-600 text-2xl">Total Price {game.price}</p>
  </div>
));

export default PricingArea;
