import { Checkbox as CheckboxMain } from "antd";
import { ErrorMessage, FastField, Field } from "formik";
import React from "react";
import TextErrors from "../TextErrors/TextErrors";

const Checkbox = (props) => {
  const { label, options, name, ...rest } = props;
  return (
    <div>
      <FastField as="select" id={name} name={name} {...rest}>
        {({ field }) => {
          return options.map((option, index) => {
            return (
              <React.Fragment key={index}>
                <CheckboxMain
          
                  // type="checkbox"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                />
                <div htmlFor={name}>{option.key}</div>
              </React.Fragment>
            );
          });
        }}
      </FastField>
      <ErrorMessage component={TextErrors} name={name} />
    </div>
  );
};
export default Checkbox;
