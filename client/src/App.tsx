import React, { useEffect } from "react";
import { getData } from "./API";

function App() {
  useEffect(() => {
    getData().then(({ data }) => console.log(data));
  }, []);

  return <h1 className="text-3xl font-bold underline"> Hello world! </h1>;
}

export default App;
