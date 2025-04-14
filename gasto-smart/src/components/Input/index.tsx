import CustomCurrencyInput from "./CurrencyInput";
import DefaultInput from "./DefaultInput";
import DropdownInput from "./DropdownInput";
import Root from "./RootInput";

const Input = Object.assign(Root, {
  Default: DefaultInput,
  Currency: CustomCurrencyInput,
  Dropdown: DropdownInput,
});

export { Input };
