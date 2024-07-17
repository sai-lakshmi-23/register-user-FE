import { Field, reduxForm } from "redux-form";
import { dataAction, registerAction } from "../models/dataReducer";
import { useSelector } from "react-redux";
import { Button, TextInput } from "@mantine/core";
import styled from "styled-components";

const Wrapper = styled.div`
width:30%;
margin:auto;
`
export const required = (value) => (value ? undefined : "Required");
export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);
const renderField = ({ input, label, type, meta: { error, touched } }) => (
  <div>
     <TextInput
      label={label}
      placeholder={label}
      error={touched && error}
      {...input}
    />
  </div>
);

const Form = (props) => {
  const { handleSubmit } = props;
  const customHandler = (values) => {
    console.log("values", values);
    props.dispatch(dataAction(values));
    props.dispatch(registerAction(values));
  };
  const result = useSelector((state) => state?.data);
  console.log("result", result);
  return (
    <Wrapper>
    <form onSubmit={handleSubmit(customHandler)}>
      <Field
        name="email"
        type="text"
        label="Enter Your email"
        component={renderField}
        validate={[required, maxLength15]}
      />
      <Field
        name="password"
        type="password"
        label="Enter password"
        component={renderField}
        validate={[required, maxLength15]}
      />
     <Button variant="filled" type="submit">Button</Button>
    </form>
    </Wrapper>
  );
};

export default reduxForm({
  form: "Form",
})(Form);
