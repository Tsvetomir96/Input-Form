import { useState } from "react";

const useForm = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueTouched, setValueTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && valueTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const valueBlurChangeHandler = (event) => {
    setValueTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setValueTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    inputChangeHandler: valueChangeHandler,
    inputBlurChangeHandler: valueBlurChangeHandler,
    reset,
  };
};

export default useForm;
