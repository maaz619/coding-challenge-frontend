import React, { BaseSyntheticEvent } from "react";

const FormPost = () => {
  interface FormType {
    email: string;
    password: string;
  }
  const [formData, setFormData] = React.useState<FormType>({
    email: "",
    password: "",
  });
  const style = { padding: "1rem" };
  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if (
      formData.email !== "" &&
      formData.password !== "" &&
      formData.password.length > 7
    )
      console.log(formData);
    else if (formData.password.length < 7)
      console.log("Password must be greater than 7 char");
    else console.log("invali email or password");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let currentStatus = formData;
    currentStatus[e.currentTarget.name as keyof typeof formData] =
      e.currentTarget.value;
    setFormData({ ...currentStatus });
  };

  return (
    <>
      {/* <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem",
        }}
        action=""
        onSubmit={handleSubmit}
      >
        <div style={style}>
          <label style={style} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            onChange={handleChange}
            value={formData.email}
            type="email"
            name="email"
            required
          />
        </div>
        <div>
          <label style={style} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
            type="password"
            required
          />
        </div>
        <button style={{ padding: ".5rem 2rem", margin: "1rem" }}>
          Submit
        </button>
      </form> */}
    </>
  );
};

export default FormPost;
