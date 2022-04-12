import React from "react";

export type UserID = {
  id?: number;
  geo: { lat: number; lng: number };
};
const FormControl = ({ callback }: any) => {
  const [user, setUser] = React.useState<any>([]);
  const [userData, setUserData] = React.useState<UserID>();
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser([...data]));
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  callback(userData?.geo);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
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

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "3rem",
        }}
      >
        <form action="">
          <label style={{ padding: "1rem" }} htmlFor="name">
            Select options:{" "}
          </label>
          <select
            defaultValue="DEFAULT"
            onChange={(e) => handleChange(e)}
            name="name"
            id="name"
          >
            <option value="DEFAULT" disabled hidden>
              Choose here
            </option>

            {user?.map((usr: any, key: any) => {
              return (
                <option value={usr.id} key={key}>
                  {usr.name}
                </option>
              );
            })}
          </select>
        </form>
      </div>
    </>
  );
};

export default FormControl;
