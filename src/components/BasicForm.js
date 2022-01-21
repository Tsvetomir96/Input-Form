import useForm from "../hooks/use-form";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameInputChangeHandler,
    inputBlurChangeHandler: firstNameInputBlurChangeHandler,
    reset: firstNameInputReset,
  } = useForm((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameInputChangeHandler,
    inputBlurChangeHandler: lastNameInputBlurChangeHandler,
    reset: lastNameInputReset,
  } = useForm((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurChangeHandler: emailInputBlurChangeHandler,
    reset: emailInputReset,
  } = useForm((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredFirstName, enteredLastName, enteredEmail);

    firstNameInputReset();
    lastNameInputReset();
    emailInputReset();
  };

  const inputFirstNameInvalidStyle = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const inputLastNameInvalidStyle = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInvalidStyle = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={inputFirstNameInvalidStyle}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurChangeHandler}
            value={enteredFirstName}
          />
          {firstNameHasError && (
            <p className="error-text">Name cannot be empty.</p>
          )}
        </div>
        <div className={inputLastNameInvalidStyle}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurChangeHandler}
            value={enteredLastName}
          />
          {lastNameHasError && (
            <p className="error-text">Name cannot be empty.</p>
          )}
        </div>
      </div>
      <div className={emailInvalidStyle}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurChangeHandler}
          value={enteredEmail}
        />
        {emailHasError && <p className="error-text">E-mail is invalid.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
