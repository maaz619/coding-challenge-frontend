import React from "react";

export type UserID = {
  id: number;
  geo: Location;
};
export type Location = {
  lat: number;
  lng: number;
};
interface FormType {
  title: string;
  body: string;
}
const FormControl = ({ callback }: any) => {
  const [formData, setFormData] = React.useState<FormType>({
    title: "",
    body: "",
  });

  const style = { padding: "1rem" };

  const handleSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    try {
      if (
        formData.title !== "" &&
        formData.body !== "" &&
        formData.body.length &&
        formData.title.length > 0
      ) {
        const data = {
          ...formData,
          userId: userData?.id,
        };

        const JSONdata = JSON.stringify(data);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            body: JSONdata,
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          }
        );
        console.log(JSONdata, response.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let currentStatus = formData;
    currentStatus[e.currentTarget.name as keyof typeof formData] =
      e.currentTarget.value;
    setFormData({ ...currentStatus });
  };

  const [user, setUser] = React.useState<any>([]);

  const [userData, setUserData] = React.useState<UserID>();

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser([...data]));
  };

  const postData = (data: any) => {};

  callback(userData?.geo);

  const handleChange1 = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    e.preventDefault();

    let currentData = e.currentTarget.value;
    setUserData({
      ...userData,
      id: user[Number(currentData) - 1].id,
      geo: {
        lat: user[Number(currentData) - 1].address.geo.lat,
        lng: user[Number(currentData) - 1].address.geo.lng,
      },
    });
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "3rem",
        }}
      >
        <form className="form-container" onSubmit={handleSubmit} action="">
          <label style={{ padding: "1rem" }} htmlFor="name">
            Select options:
          </label>
          <select
            required
            defaultValue="DEFAULT"
            onChange={(e) => handleChange1(e)}
            name="name"
            id="name"
          >
            <option hidden disabled selected value="">
              Choose here
            </option>

            {user?.map((usr: any, key: any) => {
              return (
                <option onClick={() => {}} value={usr.id} key={key}>
                  {usr.name}
                </option>
              );
            })}
          </select>
          <div style={style}>
            <label style={style} htmlFor="title">
              Title
            </label>
            <input
              id="title"
              onChange={handleChange}
              value={formData.title}
              type="title"
              name="title"
              required
            />
          </div>
          <div>
            <label style={style} htmlFor="body">
              body
            </label>
            <input
              id="body"
              value={formData.body}
              onChange={handleChange}
              name="body"
              type="body"
              required
            />
          </div>
          <button style={{ padding: ".5rem 2rem", margin: "1rem" }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormControl;
