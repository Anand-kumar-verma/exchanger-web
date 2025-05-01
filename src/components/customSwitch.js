import React, { useState } from "react";
import Switch from "react-switch";

const CustomSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (nextChecked) => {
    setChecked(nextChecked);
  };

  return (
    <label className="flex items-center gap-3">
      
      <Switch
        onChange={handleChange}
        checked={checked}
        checkedIcon={
          <div className="flex items-center justify-center h-full text-xs text-white p-1">
            ON
          </div>
        }
        uncheckedIcon={
          <div className="flex items-center  justify-center h-full text-xs text-white p-1">
            OFF
          </div>
        }
        onColor="#4ade80"   
        offColor="#cbd5e1"  
        size={20}
      />
    </label>
  );
};

export default CustomSwitch;
