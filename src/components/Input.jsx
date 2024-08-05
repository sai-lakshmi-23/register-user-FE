import { Select, TextInput } from "@mantine/core";
import React from "react";

const Input = ({
  input,
  defaultValue = undefined,
  data = undefined,
  label,
  maxLength = undefined,
  type,
  meta: { error, touched },
}) => {
  let component = null;
  switch (type) {
    case "select":
      component = (
        <Select
          label={label}
          placeholder={label}
          data={data}
          defaultValue={defaultValue}
          clearable
          {...input}
        />
      );
      break;

    default:
      component = (
        <TextInput
          label={label}
          type={type}
          placeholder={label}
          maxLength={maxLength}
          error={touched && error}
          {...input}
        />
      );
      break;
  }
  return component;
};
export default Input;
