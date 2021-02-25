import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Search() {
  const [EmployeeState, setEmployeeState] = useState();

  useEffect(() => {
    API.searchPerson()
      .then((res) => {
        setEmployeeState(res);
        console.log(EmployeeState);
      })
      .catch((err) => console.log(err));
  }, [Search]);

  return (
    <div>
      <button onClick={() => setEmployeeState({ ...EmployeeState })}>
        Click Me
      </button>
    </div>
  );
}

export default Search;
