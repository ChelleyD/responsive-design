import React from "react";
import Grid from "@mui/material/Grid";
//state: a variable we care about and will re-render whenever it changes
import { useState } from "react";

export default function () {
  //[variable_name, function_to_change_variable] = useState(default_value);
  const [size, setSize] = useState(1);
  //let size = 4;
  const toggleSize = () => {
    console.log("toggleSize() being called");
    //size++;
    setSize(((size + 1) % 12) + 1);
  };
  return (
    <Grid item xs={size}>
      <div className="item" onClick={toggleSize}></div>
    </Grid>
  );
}
