import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Home() {
  useEffect(() => {
    getData();
  }, []);

  const [userName, setUserName] = useState();
  const nevigate = useNavigate();
  const getData = async () => {
    const res = await axios.get("http://localhost:3002/student");
    //console.log(res);
    setUserName(res.data);
    getData();
  };
  const onClickSubmit = () => {
    nevigate("/add");
  };
  const onClickDelete = async (id) => {
    const res = await axios.delete("http://localhost:3002/student", id);
    setUserName(res);
    getData();
  };

  return (
    <>
      <p> api data</p>

      <button onClick={onClickSubmit}> add</button>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th> email</th>
        </tr>
        <tbody>
          {userName &&
            userName.map((data, i) => (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>
                  <button onClick={() => onClickDelete(data.id)}>delete</button>

                  <button> update</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
export default Home;
