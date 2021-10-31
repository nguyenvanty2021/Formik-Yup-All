import Checkbox from "../Checkbox/Checkbox";
import DatePickerUI from "../DatePickerUI/DatePickerUI";
import Input from "../Input/Input";
import Radio from "../Radio/Radio";
import Select from "../Select/Select";
import Textarea from "../Textarea/Textarea";

const FormikControl = (props) => {
  const { control, field, form, ...rest } = props;

  switch (control) {
    case "input":
      return <Input placeholder={props.placeholder} {...rest} />;
    case "textarea":
      return <Textarea placeholder={props.placeholder} {...rest} />;
    case "select":
      return <Select placeholder={props.placeholder} {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <Checkbox {...rest} />;
    case "date":
      return <DatePickerUI {...rest} />;
    default:
      return null;
  }
};
export default FormikControl;
