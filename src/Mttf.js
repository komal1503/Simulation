import React from "react";
import { useState } from "react";
import "./Adj_Calculations.css";

function Mttf(props) {
  const uid = props.user._delegate.uid;

  const [mttf, setMttf] = useState(0);

  const [active, setActive] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(
      "https://simulation-42792-default-rtdb.firebaseio.com/machineform.json"
    );
    const response = await res.json();

    const machines = [];
    for (const key in response) {
      const obj = {
        id: key,
        ...response[key],
      };
      if (obj.uid === uid) {
        machines.push(obj);
      }
    }

    const arr = {}

    machines.forEach((currValue) => {
      const num = Number(currValue.MTTF);
      arr[num] = 0
    });

    machines.forEach((currValue) => {
        const num = Number(currValue.MTTF);
        arr[num]++
    });

    let act = 0;

    machines.forEach((currValue) => {
        if(currValue.Active_status.toLowerCase() === 'a') {act++;}
    });

    const newarr = Object.values(arr)
    let max = 0;
    newarr.forEach(val => {
        if(val>max) {max=val}
    })

    setMttf(max);
    setActive(act);
  };

  return (
    <>
      <h1 className="utzhead">Optimum Number of Adjusters</h1>
      <div className="form">
       
        <div className="creds">
          <form onSubmit={handleSubmit}>
            <button type="submit">Output</button>
          </form>
        </div>

        <div className="output">
          {mttf !== 0 && (
            <div>
              <p>Optimum Number of Adjusters: {mttf}</p>
            </div>
          )}
          {active !== 0 && (
            <div>
              <p>Active machines: {active}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Mttf;
