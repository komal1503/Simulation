import React from "react";
import { useState } from "react";

function Data(props) {
  const [details, setDetails] = useState({
    Machine_type: "",
    Active_hours: "",
    ID: "",
    uid: props.user._delegate.uid,
  });

  const PostData = async (e) => {
    e.preventDefault();

    const { Machine_type, Active_hours, ID, uid } = details;

    const res = await fetch(
      "https://simulation-42792-default-rtdb.firebaseio.com/machineform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Machine_type,
          Active_hours,
          ID,
          uid,
        }),
      }
    );
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Machine Type"
        onChange={(e) =>
          setDetails({ ...details, Machine_type: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Active hours"
        onChange={(e) =>
          setDetails({ ...details, Active_hours: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Machine_ID"
        onChange={(e) => setDetails({ ...details, ID: e.target.value })}
      />
      <button onClick={PostData}>Submit</button>
    </div>
  );
}

export default Data;
