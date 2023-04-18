import React from "react";
import { useState } from "react";
import "./data_adj.css"
function Data(props) {
  const [details, setDetails] = useState({
    Machine_type: "",
    Active_hours: "",
    ID: "",
    Active_status:"",
    MTTF:"",
    uid: props.user._delegate.uid,
  });

  const PostData = async (e) => {
    e.preventDefault();
    alert("submitted");

    const { Machine_type, Active_hours, ID,Active_status,MTTF, uid } = details;

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
          Active_status,
          MTTF,
          uid,
        }),
      }
    );
  };

  return (
    <div className="form">

      <h1>Machine Data Entry</h1>
      <div className="datas"> 
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
      <input
        type="text"
        placeholder="Active_status"
        onChange={(e) => setDetails({ ...details, Active_status: e.target.value })}
      />

      <input
        type="text"
        placeholder="MTTF"
        
        onChange={(e) => setDetails({ ...details, MTTF: e.target.value })}
      />
      <button className="submit" onClick={PostData}>Submit</button>
    </div>
    </div>
  );
}

export default Data;
