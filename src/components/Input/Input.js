import { Input as InputMain } from "antd";
import { ErrorMessage, FastField } from "formik";
import TextErrors from "../TextErrors/TextErrors";

const Input = (props) => {
  const { label, name, ...rest } = props;
  console.log(props);
  return (
    <div>
      <FastField name={name}>
        {({ field, form, props }) => {
          console.log(field);
          console.log(form);
          console.log(props);
          const { name } = field;
          const { errors, touched } = form;
          const showError = errors[name] && touched[name];
          return (
            <div>
              <div htmlFor={name}>{label}</div>
              <InputMain
                style={showError ? { border: "1px solid red" } : {}}
                {...rest}
                {...field}
                id={name}
              />
              <ErrorMessage component={TextErrors} name={name} />
            </div>
          );
        }}
      </FastField>
    </div>
  );
};
export default Input;
