import React from "react";
import Nav from "../components/Nav";
import { Field, reduxForm } from "redux-form";
import Input from "../components/Input";
import { Button, CheckIcon, Radio } from "@mantine/core";
import { doSignAction, signAction } from "../models/signReducer";
import { useSelector } from "react-redux";
import { Wrapper } from "./Form";

export const phoneNumber = (value) => {
  // Regular expression to check mobile number format
  const mobilePattern = /^[6-9]\d{9}$/;

  // Check if the value matches the pattern
  return mobilePattern.test(value)
    ? undefined
    : "Mobile number must be exactly 10 digits and start with a digit from 6 to 9";
};
export const email = (value) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value) ? undefined : "Invalid email address";
};
export const required = (value) => (value ? undefined : "Required");
export const aadhaarNumber = (value) => {
    const aadhaarPattern = /^\d{4}\s\d{4}\s\d{4}$/;
  return aadhaarPattern.test(value)
    ? undefined
    : "Aadhaar number must be exactly 12 digits and contain only numeric characters";
};
export const panNumber = (value) => {
  const panPattern = /^[A-Z]{5}\d{4}[A-Z]{1}$/;
  return panPattern.test(value)
    ? undefined
    : "PAN number must be in the format XXXXX9999X where X is an uppercase letter and 9 is a digit";
};
const normalizeUppercase = (value) => value && value.toUpperCase();
export const normalizeAadhaar = value => {
    if (!value) return value;
    const onlyNums = value.replace(/[^\d]/g, '');
    if (onlyNums.length <= 4) return onlyNums;
    if (onlyNums.length <= 8) return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4)}`;
    return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4, 8)} ${onlyNums.slice(8, 12)}`;
  };

const Registration = (props) => {
  const { handleSubmit } = props;
  const userHandler = (values) => {
    console.log("values", values);
    props.dispatch(signAction(values));
    props.dispatch(doSignAction(values));
  };
  const res = useSelector((state) => state?.sign);
  console.log("results", res);
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(userHandler)}>
        <Field
          name="firstName"
          type="text"
          label="Enter Your FirstName"
          component={Input}
          validate={[required]}
        />
        <Field
          name="lastName"
          type="text"
          label="Enter Your LastName"
          component={Input}
          validate={[required]}
        />
        <Field
          name="dateOfBirth"
          type="date"
          label="Date Of Birth"
          component={Input}
          validate={[required]}
        />

        <Field
        name="gender"
        type="select"
         label="Gender" 
         data={['Male','Female', 'Others']}
         defaultValue="Male"
         component={Input}
        />

        <Field
          name="email"
          type="email"
          label="Enter Your Email"
          component={Input}
          validate={[required, email]}
        />
        <Field
          name="phoneNumber"
          type="tel"
          label="Phone Number"
          component={Input}
          validate={[required, phoneNumber]}
          maxLength="10"
        />
        <Field
          name="aadharNumber"
          type="text"
          label="aadhar Number"
          component={Input}
          maxLength="14"
          normalize={normalizeAadhaar}
          validate={[required, aadhaarNumber]}
        />
        <Field
          name="panNumber"
          type="text"
          label="Pan Number"
          component={Input}
          validate={[required, panNumber]}
          maxLength="10"
          normalize={normalizeUppercase}
        />
        <Button variant="filled" type="submit">
          SIGN IN
        </Button>
      </form>
      <Nav
        path={"/"}
        label={"already have account?"}
        linkText={"click here login"}
      />
    </Wrapper>
  );
};

export default reduxForm({
  form: "Registration",
})(Registration);

//export default Registration
