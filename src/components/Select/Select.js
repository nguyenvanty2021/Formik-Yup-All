import { ErrorMessage, FastField, Field } from "formik";
import TextErrors from "../TextErrors/TextErrors";
import { Select } from "antd";
const Select1 = (props) => {
  const { label, options, name, ...rest } = props;
  const { Option } = Select;
  console.log(options);
  return (
    <div>
      <div htmlFor={name}>{label}</div>
      <FastField as="select" id={name} name={name} {...rest}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </FastField>
      <ErrorMessage component={TextErrors} name={name} />
    </div>
  );
};
export default Select1;
