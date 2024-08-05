import { Field, reduxForm } from "redux-form";
import { dataAction, registerAction } from "../models/dataReducer";
import { useSelector } from "react-redux";
import { Button } from "@mantine/core";
import styled from "styled-components";
import Input from "../components/Input";
import Nav from "../components/Nav";
import Registration from "./Registration";

export const Wrapper = styled.div`
  width: 50%;
  margin: auto;
`;
export const required = (value) => (value ? undefined : "Required");
export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
export const maxLength15 = maxLength(15);

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
          component={Input}
          validate={[required, maxLength15]}
        />
        <Field
          name="password"
          type="password"
          label="Enter password"
          component={Input}
          validate={[required, maxLength15]}
        />
        <Button variant="filled" type="submit">
          LOGIN
        </Button>
      </form>
     <Nav path={"/register"} label={"new user, to register"} linkText={"click here"}/>
    </Wrapper>
  );
};

export default reduxForm({
  form: "Form",
})(Form);
