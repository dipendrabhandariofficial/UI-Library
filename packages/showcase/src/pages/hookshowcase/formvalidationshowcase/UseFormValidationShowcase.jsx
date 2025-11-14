import React, { useState } from "react";
import ShowcaseContainer from "../../showcase/ShowcaseContainer"
import { useFormValidation } from "@dipendrabhandari/react-ui-library"
import "./UseFormValidationShowcase.css";

export default function UseFormValidationShowcase() {
  // ============================================================
  // USAGE EXAMPLE 1: Simple Login Form
  // ============================================================
  const usageCode1 = `import { useFormValidation } from "./useFormValidation";

function LoginForm() {
  const { values, errors, handleChange, handleBlur, 
          handleSubmit, showError } = useFormValidation(
    { email: "", password: "" },
    {
      email: { isRequired: true, pattern: "email" },
      password: { isRequired: true, minLength: 8 }
    }
  );

  const onSuccess = (data) => {
    console.log("Login successful:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSuccess)}>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {showError("email") && <span>{errors.email}</span>}
      
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {showError("password") && <span>{errors.password}</span>}
      
      <button type="submit">Login</button>
    </form>
  );
}`;

  // ============================================================
  // USAGE EXAMPLE 2: Registration with Password Match
  // ============================================================
  const usageCode2 = `import { useFormValidation } from "./useFormValidation";

function SignupForm() {
  const { values, errors, handleChange, handleBlur, 
          handleSubmit, showError, resetForm } = useFormValidation(
    { username: "", email: "", password: "", confirmPassword: "" },
    {
      username: { 
        isRequired: true, 
        minLength: 3,
        pattern: /^[a-zA-Z0-9_]+$/
      },
      email: { isRequired: true, pattern: "email" },
      password: { 
        isRequired: true, 
        minLength: 8,
        pattern: /^(?=.*[A-Z])(?=.*[0-9])/
      },
      confirmPassword: { 
        isRequired: true, 
        matches: "password" 
      }
    }
  );

  const onSuccess = (data) => {
    alert("Account created!");
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit(onSuccess)}>
      {/* Form fields */}
    </form>
  );
}`;

  // ============================================================
  // USAGE EXAMPLE 3: Custom Validation
  // ============================================================
  const usageCode3 = `import { useFormValidation } from "./useFormValidation";

function AgeVerificationForm() {
  const { values, errors, handleChange, handleBlur, 
          handleSubmit, showError } = useFormValidation(
    { age: "", country: "" },
    {
      age: {
        isRequired: true,
        min: 18,
        max: 120,
        custom: (value, allValues) => {
          if (allValues.country === "usa" && value < 21) {
            return "Must be 21+ in the USA";
          }
          return null;
        }
      },
      country: { isRequired: true }
    }
  );

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      {/* Form fields */}
    </form>
  );
}`;

  // ============================================================
  // LIVE DEMOS
  // ============================================================
  
  // Demo 1: Simple Login
  const [loginSuccess, setLoginSuccess] = useState(false);
  const loginForm = useFormValidation(
    { email: "", password: "" },
    {
      email: {
        isRequired: true,
        pattern: "email",
        msg: {
          isRequired: "Email is required",
          pattern: "Please enter a valid email",
        },
      },
      password: {
        isRequired: true,
        minLength: 8,
        msg: {
          isRequired: "Password is required",
          minLength: "Password must be at least 8 characters",
        },
      },
    }
  );

  const handleLoginSuccess = (data) => {
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      loginForm.resetForm();
    }, 3000);
  };

  // Demo 2: Signup with Password Match
  const [signupSuccess, setSignupSuccess] = useState(false);
  const signupForm = useFormValidation(
    { username: "", email: "", password: "", confirmPassword: "" },
    {
      username: {
        isRequired: true,
        minLength: 3,
        pattern: /^[a-zA-Z0-9_]+$/,
        msg: {
          isRequired: "Username is required",
          minLength: "Username must be at least 3 characters",
          pattern: "Only letters, numbers, and underscores allowed",
        },
      },
      email: {
        isRequired: true,
        pattern: "email",
      },
      password: {
        isRequired: true,
        minLength: 8,
        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        msg: {
          isRequired: "Password is required",
          minLength: "Password must be at least 8 characters",
          pattern: "Must contain uppercase, lowercase, and number",
        },
      },
      confirmPassword: {
        isRequired: true,
        matches: "password",
        msg: {
          isRequired: "Please confirm your password",
          matches: "Passwords do not match",
        },
      },
    }
  );

  const handleSignupSuccess = (data) => {
    setSignupSuccess(true);
    setTimeout(() => {
      setSignupSuccess(false);
      signupForm.resetForm();
    }, 3000);
  };

  // Demo 3: Custom Validation
  const [ageSuccess, setAgeSuccess] = useState(false);
  const ageForm = useFormValidation(
    { age: "", country: "" },
    {
      age: {
        isRequired: true,
        min: 18,
        max: 120,
        custom: (value, allValues) => {
          if (allValues.country === "usa" && value < 21) {
            return "Must be 21+ in the USA";
          }
          return null;
        },
        msg: {
          isRequired: "Age is required",
          min: "Must be at least 18 years old",
          max: "Please enter a valid age",
        },
      },
      country: {
        isRequired: true,
        msg: {
          isRequired: "Please select a country",
        },
      },
    }
  );

  const handleAgeSuccess = (data) => {
    setAgeSuccess(true);
    setTimeout(() => {
      setAgeSuccess(false);
      ageForm.resetForm();
    }, 3000);
  };

  return (
    <div className="form-validation-showcase-container">
      <h2 className="form-validation-showcase-title">useFormValidation Hook</h2>

      <p className="form-validation-showcase-intro">
        <code>useFormValidation</code> is a powerful, reusable hook for handling
        form validation in React. It supports required fields, pattern matching,
        length constraints, custom validation logic, and more. Works with any
        form - from simple login forms to complex multi-step wizards.
      </p>

      {/* ============================================================ */}
      {/* SHOWCASE 1: Simple Login Form */}
      {/* ============================================================ */}
      <ShowcaseContainer title="Usage 1: Simple Login Form" code={usageCode1}>
        <form
          onSubmit={loginForm.handleSubmit(handleLoginSuccess)}
          className="demo-form"
          noValidate
        >
          <div className="form-field">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={loginForm.values.email}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
              className={loginForm.showError("email") ? "error-input" : ""}
              placeholder="your.email@example.com"
            />
            {loginForm.showError("email") && (
              <span className="error-text">{loginForm.errors.email}</span>
            )}
          </div>

          <div className="form-field">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
              className={loginForm.showError("password") ? "error-input" : ""}
              placeholder="Min 8 characters"
            />
            {loginForm.showError("password") && (
              <span className="error-text">{loginForm.errors.password}</span>
            )}
          </div>

          <button type="submit" className="submit-button">
            Login
          </button>

          {loginSuccess && (
            <div className="success-message">✓ Login successful!</div>
          )}
        </form>
      </ShowcaseContainer>

      {/* ============================================================ */}
      {/* SHOWCASE 2: Registration with Password Match */}
      {/* ============================================================ */}
      <ShowcaseContainer
        title="Usage 2: Registration with Password Match"
        code={usageCode2}
      >
        <form
          onSubmit={signupForm.handleSubmit(handleSignupSuccess)}
          className="demo-form"
          noValidate
        >
          <div className="form-field">
            <label>Username *</label>
            <input
              type="text"
              name="username"
              value={signupForm.values.username}
              onChange={signupForm.handleChange}
              onBlur={signupForm.handleBlur}
              className={signupForm.showError("username") ? "error-input" : ""}
              placeholder="Letters, numbers, underscores"
            />
            {signupForm.showError("username") && (
              <span className="error-text">{signupForm.errors.username}</span>
            )}
          </div>

          <div className="form-field">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={signupForm.values.email}
              onChange={signupForm.handleChange}
              onBlur={signupForm.handleBlur}
              className={signupForm.showError("email") ? "error-input" : ""}
              placeholder="your.email@example.com"
            />
            {signupForm.showError("email") && (
              <span className="error-text">{signupForm.errors.email}</span>
            )}
          </div>

          <div className="form-field">
            <label>Password *</label>
            <input
              type="password"
              name="password"
              value={signupForm.values.password}
              onChange={signupForm.handleChange}
              onBlur={signupForm.handleBlur}
              className={signupForm.showError("password") ? "error-input" : ""}
              placeholder="Min 8 chars, uppercase, lowercase, number"
            />
            {signupForm.showError("password") && (
              <span className="error-text">{signupForm.errors.password}</span>
            )}
          </div>

          <div className="form-field">
            <label>Confirm Password *</label>
            <input
              type="password"
              name="confirmPassword"
              value={signupForm.values.confirmPassword}
              onChange={signupForm.handleChange}
              onBlur={signupForm.handleBlur}
              className={
                signupForm.showError("confirmPassword") ? "error-input" : ""
              }
              placeholder="Re-enter your password"
            />
            {signupForm.showError("confirmPassword") && (
              <span className="error-text">
                {signupForm.errors.confirmPassword}
              </span>
            )}
          </div>

          <button type="submit" className="submit-button">
            Create Account
          </button>

          {signupSuccess && (
            <div className="success-message">✓ Account created successfully!</div>
          )}
        </form>
      </ShowcaseContainer>

      {/* ============================================================ */}
      {/* SHOWCASE 3: Custom Validation */}
      {/* ============================================================ */}
      <ShowcaseContainer
        title="Usage 3: Custom Validation Logic"
        code={usageCode3}
      >
        <form
          onSubmit={ageForm.handleSubmit(handleAgeSuccess)}
          className="demo-form"
          noValidate
        >
          <div className="form-field">
            <label>Age *</label>
            <input
              type="number"
              name="age"
              value={ageForm.values.age}
              onChange={ageForm.handleChange}
              onBlur={ageForm.handleBlur}
              className={ageForm.showError("age") ? "error-input" : ""}
              placeholder="18+"
            />
            {ageForm.showError("age") && (
              <span className="error-text">{ageForm.errors.age}</span>
            )}
          </div>

          <div className="form-field">
            <label>Country *</label>
            <select
              name="country"
              value={ageForm.values.country}
              onChange={ageForm.handleChange}
              onBlur={ageForm.handleBlur}
              className={ageForm.showError("country") ? "error-input" : ""}
            >
              <option value="">Select Country</option>
              <option value="nepal">Nepal</option>
              <option value="india">India</option>
              <option value="usa">USA (21+ required)</option>
              <option value="uk">United Kingdom</option>
            </select>
            {ageForm.showError("country") && (
              <span className="error-text">{ageForm.errors.country}</span>
            )}
          </div>

          <div className="info-box">
            💡 <strong>Custom validation:</strong> If you select USA and enter an
            age below 21, you'll get a custom error message!
          </div>

          <button type="submit" className="submit-button">
            Verify Age
          </button>

          {ageSuccess && (
            <div className="success-message">✓ Age verified!</div>
          )}
        </form>
      </ShowcaseContainer>

      {/* ============================================================ */}
      {/* BEST PRACTICES SECTION */}
      {/* ============================================================ */}
      <div className="ls-best-practices-section">
        <h2 className="ls-best-practices-title">Best Practices</h2>
        <div className="ls-best-practices-grid">
          <div className="ls-dos-card">
            <h3 className="ls-card-header-do">✓ Do</h3>
            <ul className="ls-dos-list">
              <li>Define clear, user-friendly error messages</li>
              <li>Use built-in patterns for common formats (email, URL, phone)</li>
              <li>Validate on blur for better UX - don't annoy users while typing</li>
              <li>Use custom validation for complex business logic</li>
              <li>Reset form after successful submission</li>
              <li>Keep validation rules separate from component logic</li>
            </ul>
          </div>

          <div className="ls-donts-card">
            <h3 className="ls-card-header-dont">✗ Don't</h3>
            <ul className="ls-donts-list">
              <li>Don't show errors before user has interacted with field</li>
              <li>Don't validate on every keystroke unless necessary</li>
              <li>Don't use for file uploads or complex data structures</li>
              <li>Don't forget to add noValidate to form element</li>
              <li>Don't overcomplicate rules - keep them simple and readable</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* API REFERENCE SECTION */}
      {/* ============================================================ */}
      <div className="ls-api-section">
        <h2 className="ls-best-practices-title">API Reference</h2>
        
        <h3 className="api-subsection-title">Hook Parameters</h3>
        <div className="ls-api-grid">
          <div className="ls-api-item">
            <span className="ls-api-method">initialValues</span>
            <p>Object with initial form field values</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">rules</span>
            <p>Object defining validation rules for each field</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">options</span>
            <p>Optional configuration (validateOnChange, validateOnBlur, resetOnSubmit)</p>
          </div>
        </div>

        <h3 className="api-subsection-title">Return Values</h3>
        <div className="ls-api-grid">
          <div className="ls-api-item">
            <span className="ls-api-method">values</span>
            <p>Current form values object</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">errors</span>
            <p>Validation error messages object</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">touched</span>
            <p>Object tracking which fields user has interacted with</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">isSubmitting</span>
            <p>Boolean indicating if form is being submitted</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">handleChange(e)</span>
            <p>Handler for input onChange events</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">handleBlur(e)</span>
            <p>Handler for input onBlur events (triggers validation)</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">handleSubmit(onSuccess, onError)</span>
            <p>Returns form submit handler function</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">showError(field)</span>
            <p>Returns error message if field is touched and has error</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">resetForm()</span>
            <p>Resets form to initial state</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">setFieldValue(field, value)</span>
            <p>Programmatically set a field value</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">validateField(field)</span>
            <p>Manually validate a specific field</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">validateAll()</span>
            <p>Manually validate all fields, returns boolean</p>
          </div>
        </div>

        <h3 className="api-subsection-title">Validation Rules</h3>
        <div className="ls-api-grid">
          <div className="ls-api-item">
            <span className="ls-api-method">isRequired</span>
            <p>Field must have a value</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">minLength</span>
            <p>Minimum string length</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">maxLength</span>
            <p>Maximum string length</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">min</span>
            <p>Minimum numeric value</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">max</span>
            <p>Maximum numeric value</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">pattern</span>
            <p>"email", "url", "phone", or custom RegExp</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">matches</span>
            <p>Must match another field (e.g., password confirmation)</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">custom</span>
            <p>Custom validation function (value, allValues) = error | null</p>
          </div>
          <div className="ls-api-item">
            <span className="ls-api-method">msg</span>
            <p>Custom error messages for each rule</p>
          </div>
        </div>
      </div>
    </div>
  );
}