import React from "react";
import Grid from "@mui/material/Grid";
//state: a variable we care about and will re-render whenever it changes
import { useState } from "react";

export default function () {
  //[variable_name, function_to_change_variable] = useState(default_value);
  const [size, setSize] = useState(1);
  //let size = 4;
  const toggleSize = (event) => {
    console.log(event.altKey);
    if (event.altKey) {
      setSize(size - 1); //decrease size
    } else {
      setSize(size + 1); //increase size
    }
    console.log("toggleSize() being called");
    //size++;
  };
  return (
    <Grid item xs={size}>
      <div className="item" onClick={toggleSize}></div>
    </Grid>
  );
}
