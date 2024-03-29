import Keyboard from "./Keyboard";
import Screen from "./Screen";

const Calculator = () => (
  <div className="max-w-sm w-full	h-fit rounded-2xl overflow-hidden	z-10">
    <Screen />
    <Keyboard />
  </div>
);

export default Calculator;
