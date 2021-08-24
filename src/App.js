import React, { useRef } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({ mode: "onTouched" });
  const password = useRef({});
  password.current = watch("password", "");
  function onSubmitButton(data) {
    if (data.password !== data.confirmPassword) {
      console.log(data);
    }
  }

  return (
    <div className="App">
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmitButton)}>
        <input
          {...register("name", {
            required: true,
            minLength: 10,
            pattern: /^[A-Za-z ]+$/i
          })}
          type="text"
          placeholder="Enter your name."
          id="name"
        />
        <br />
        {errors?.name?.type === "required" && (
          <span className="errorText">*Name field is required.</span>
        )}
        {errors?.name?.type === "minLength" && (
          <span className="errorText">
            Name field must be at least 10 characters.
          </span>
        )}
        {errors?.name?.type === "pattern" && (
          <span className="errorText">
            Name field must be alphabetical characters only
          </span>
        )}
        <br />
        {/* https://stackoverflow.com/a/8897615 */}
        <input
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          })}
          type="email"
          placeholder="Enter your email address."
          id="email"
        />
        <br />
        {errors?.email?.type === "required" && (
          <span className="errorText">*Email field is required.</span>
        )}
        {errors?.email?.type === "pattern" && (
          <span className="errorText">Enter a valid email address.</span>
        )}
        <br />
        {/* https://stackoverflow.com/a/8234912 */}
        <input
          {...register("url", {
            required: true,
            pattern: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
          })}
          type="url"
          placeholder="Enter your website url."
          id="websiteUrl"
        />
        <br />
        {errors?.url?.type === "required" && (
          <span className="errorText">*Url field is required.</span>
        )}
        {errors?.url?.type === "pattern" && (
          <span className="errorText">Enter a valid url address.</span>
        )}
        <br />
        {/* https://stackoverflow.com/a/19611675 */}
        <input
          {...register("phone", {
            required: true,
            maxLength: 10,
            pattern: /(7|8|9)\d{9}$/
          })}
          type="phone"
          placeholder="Enter your contact number."
          id="phone"
        />
        <br />
        {errors?.phone?.type === "required" && (
          <span className="errorText">*Phone number field is required.</span>
        )}
        {errors?.phone?.type === "maxLength" && (
          <span className="errorText">
            Phone number field must be 10 digits.
          </span>
        )}
        {errors?.phone?.type === "pattern" && (
          <span className="errorText">Enter a valid contact number.</span>
        )}
        <br />
        <input
          {...register("address", { required: true })}
          type="text"
          placeholder="Enter your address."
          id="address"
        />
        <br />
        {errors?.address?.type === "required" && (
          <span className="errorText">*Address field is required.</span>
        )}
        <br />
        <input
          {...register("password", {
            required: true,
            minLength: 8
          })}
          type="password"
          placeholder="Enter your password."
          id="password"
        />
        <br />
        {errors?.password?.type === "required" && (
          <span className="errorText">*Password field is required.</span>
        )}
        {errors?.password?.type === "minLength" && (
          <span className="errorText">
            Password must have at least 8 characters.
          </span>
        )}
        <br />
        <input
          {...register("confirmPassword", {
            required: true,
            minLength: 8,
            validate: (value) =>
              value === password.current || "The password does not match."
          })}
          type="password"
          placeholder="Confirm your password."
          id="confirmPassword"
        />
        <br />
        {errors?.confirmPassword?.type === "required" && (
          <span className="errorText">
            *Confirm Password field is required.
          </span>
        )}
        {errors?.confirmPassword?.type === "minLenght" && (
          <span className="errorText">
            Password must have at least 8 characters.
          </span>
        )}
        {errors.confirmPassword && (
          <span className="errorText">{errors.confirmPassword.message}</span>
        )}

        <br />
        <p>Does your application need support for ?</p>
        <div>
          <input type="radio" value="Amp" {...register("ampSelection")} /> Amp
          <input
            type="radio"
            value="Non-Amp"
            {...register("ampSelection")}
            checked
          />
          Non-Amp
          <input type="radio" value="Both" {...register("ampSelection")} /> Both
        </div>
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
