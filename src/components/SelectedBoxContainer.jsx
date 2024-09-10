import React, { useState } from "react";
import SelectBox from './SelectBox';

const SelectBoxContainer = () => {
  const [value, setValue] = useState(30);
  
  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };
  
  return (
    <SelectBox value={value} onChange={handleChange} />
  );
};

export default SelectBoxContainer;
