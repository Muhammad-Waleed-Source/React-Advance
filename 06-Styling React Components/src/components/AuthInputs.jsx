import { useState } from "react";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";

  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow"

  if (emailNotValid){
    labelClasses += " text-red-400"
    inputClasses += " text-red-500 bg-red-100 border-red-300"
  } else{
    labelClasses += " text-stone-300"
    inputClasses += " text-gray-700 bg-stone-300"
  }

  return (
    <div id="auth-inputs" className="w-full max-w-sm p-8 mx-auto rounded shadow-md  bg-gradient-to-b from-stone-700 to-stone-800">
      <div className="flex flex-col gap-2 mb-6">
        <p>
          <label className={labelClasses}>
            Email
          </label>
          <input
            type="email"
            // style={{
            //   backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db",
            // }}
            className={inputClasses}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <label className={labelClasses}>
            Password
          </label>
          <input
            type="password"
            className={inputClasses}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
          />
        </p>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hover:text-amber-500">
          Create a new account
        </button>
        <button className="px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-amber-500" onClick={handleLogin}>
          Sign In
        </button>
      </div>
    </div>
  );
}
