// import React, { useState } from "react";
// import { Logo } from "./Logo";
// import { AuthInput } from "./AuthInput";
// import {
//   validateEmail,
//   emailValidationMessage,
//   validatePassword,
//   validateUsername,
//   passwordValidationMessage,
//   validatePasswordConf,
//   usernameValidationMessage,
//   passwordConfValidationMessage,
// } from "../shared/validators";
// import { useRegister } from "../shared/hooks";
// import { register } from "../api";

// export const Register = ({ switchAuthHandler }) => {
//   const { isLoading, Register } = useRegister();
//   const [formState, setFormState] = useState({
//     email: {
//       value: "",
//       isValid: false,
//       showError: false,
//     },
//     password: {
//       value: "",
//       isValid: false,
//       showError: false,
//     },
//     username: {
//       value: "",
//       isValid: false,
//       showError: false,
//     },
//     passwordConf: {
//       value: "",
//       isValid: false,
//       showError: false,
//     },
//   });

//   const handleInputValueChange = (value, field) => {
//     setFormState((prevState) => ({
//       ...prevState,
//       [field]: {
//         ...prevState[field],
//         value,
//       },
//     }));
//   };

//   const handleInputValidationOnBlur = (value, field) => {
//     let isValid = false;

//     switch (field) {
//       case "email":
//         isValid = validateEmail(value);
//         break;
//       case "password":
//         isValid = validatePassword(value);
//         break;
//       case "username":
//         isValid = validateUsername(value);
//         break;
//       case "passwordConf":
//         isValid = validatePasswordConf(value);

//       default:
//         break;
//     }

//     setFormState((prevState) => ({
//       ...prevState,
//       [field]: {
//         ...prevState[field],
//         isValid,
//         showError: !isValid,
//       },
//     }));
//   };
//   const handleRegister = (event) => {
//     event.preventDefault();

//     register(
//       formState.email.value,
//       formState.password.value,
//       formState.username.value
//     );
//   };

//   const isSubmitButtonDisabled =
//     !formState.password.isValid ||
//     !formState.email.isValid ||
//     !formState.username.isValid ||
//     formState.password.value !== formState.passwordConf.value ||
//     isLoading;

//   return (
//     <div className="register-container">
//       <Logo text={"Sign up to Clone"} />
//       <form className="auth-form">
//         <AuthInput
//           field="email"
//           label="Email"
//           value={formState.email.value}
//           onChangeHandler={handleInputValueChange}
//           type="text"
//           onBlurHandler={handleInputValidationOnBlur}
//           showErrorMessage={formState.email.showError}
//           validationMessage={emailValidationMessage}
//         />
//         <AuthInput
//           field="username"
//           label="Username"
//           value={formState.username.value}
//           onChangeHandler={handleInputValueChange}
//           type="text"
//           onBlurHandler={handleInputValidationOnBlur}
//           showErrorMessage={formState.username.showError}
//           validationMessage={usernameValidationMessage}
//         />
//         <AuthInput
//           field="password"
//           label="Password"
//           value={formState.password.value}
//           onChangeHandler={handleInputValueChange}
//           type="password"
//           onBlurHandler={handleInputValidationOnBlur}
//           showErrorMessage={formState.password.showError}
//           validationMessage={passwordValidationMessage}
//         />
//         <AuthInput
//           field="passwordConf"
//           label="Password confirmation"
//           value={formState.passwordConf.value}
//           onChangeHandler={handleInputValueChange}
//           type="password"
//           onBlurHandler={handleInputValidationOnBlur}
//           showErrorMessage={formState.passwordConf.showError}
//           validationMessage={passwordConfValidationMessage}
//         />

// <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
//           Register
//         </button>
//       </form>
//       <span onClick={switchAuthHandler} className="auth-form-switch-label">
//         Already have an account ?
//       </span>
//     </div>
//   );
// };

import React, { useState } from "react";
import { Logo } from "./Logo";
import { AuthInput } from "./AuthInput";
import {
  emailValidationMessage,
  passwordConfValidationMessage,
  passwordValidationMessage,
  usernameValidationMessage,
  validateEmail,
  validatePassword,
  validatePasswordConf,
  validateUsername,
} from "../shared/validators";
import { useRegister } from "../shared/hooks";

export const Register = ({ switchAuthHandler }) => {
  const { isLoading, register } = useRegister();

  const [formState, setFormState] = useState({
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    username: {
      value: "",
      isValid: false,
      showError: false,
    },
    passwordConf: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;

    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "username":
        isValid = validateUsername(value);
        break;
      case "passwordConf":
        isValid = validatePasswordConf(formState.password.value, value);
        break;
      default:
        break;
    }

    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleRegister = (event) => {
    event.preventDefault();

    register(
      formState.email.value,
      formState.password.value,
      formState.username.value
    );
  };

  const isSubmitButtonDisabled =
    !formState.password.isValid ||
    !formState.email.isValid ||
    !formState.username.isValid ||
    formState.password.value !== formState.passwordConf.value ||
    isLoading;

  return (
    <div className="register-container">
      <Logo text={"Sign up"} />
      <form className="auth-form">
        <AuthInput
          field="email"
          label="Email"
          value={formState.email.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.email.showError}
          validationMessage={emailValidationMessage}
        />
        <AuthInput
          field="username"
          label="Username"
          value={formState.username.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.username.showError}
          validationMessage={usernameValidationMessage}
        />
        <AuthInput
          field="password"
          label="Password"
          value={formState.password.value}
          onChangeHandler={handleInputValueChange}
          type="password"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.password.showError}
          validationMessage={passwordValidationMessage}
        />
        <AuthInput
          field="passwordConf"
          label="Password confirmation"
          value={formState.passwordConf.value}
          onChangeHandler={handleInputValueChange}
          type="password"
          onBlurHandler={handleInputValidationOnBlur}
          showErrorMessage={formState.passwordConf.showError}
          validationMessage={passwordConfValidationMessage}
        />
        <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
          Register
        </button>
      </form>
      <span onClick={switchAuthHandler} className="auth-form-switch-label">
        Already have an account ? Sign in
      </span>
    </div>
  );
};


