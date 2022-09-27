import React from "react";
import Select from "react-select";

function CustomSelect({ onChange, options, value, className, placeholder }) {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };
  return (
    <div className={className}>
      <Select
        placeholder={placeholder}
        value={defaultValue(options, value)}
        onChange={(value) => {
          onChange(value);
        }}
        options={options}
      />
    </div>
  )
}

export default CustomSelect