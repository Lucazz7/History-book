import { ComboBox } from "../ComboBox";

export const ComboBoxDefault = () => {
  return (
    <ComboBox>
      <option value="Please Select">Please Select ...</option>
      <option className="option" value="Iran">
        Iran
      </option>
    </ComboBox>
  );
};
