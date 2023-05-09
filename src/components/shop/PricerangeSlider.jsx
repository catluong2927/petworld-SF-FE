import React, { useState } from "react";
// import Slider from "react-rangeslider";

function PricerangeSlider() {
  const [value, setValue] = useState(10);

  const handleChangeStart = () => {
    console.log("Change event started");
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleChangeComplete = () => {
    console.log("Change event completed");
  };

  return (
    <div className="slider">
      {/*<Slider*/}
      {/*  min={0}*/}
      {/*  max={100}*/}
      {/*  value={value}*/}
      {/*  onChangeStart={handleChangeStart}*/}
      {/*  onChange={handleChange}*/}
      {/*  onChangeComplete={handleChangeComplete}*/}
      {/*/>*/}
      <div className="value">{value}</div>
    </div>
  );
}

export default PricerangeSlider;
