export const colourStyles = {
    menuList: (provided, state) => ({
      ...provided,
      padding: "5px",
     
    }),
    control: (styles) => ({
      ...styles,
      backgroundColor: "white",
      border: 0,
      color: "#333333",
      // This line disable the blue border
      boxShadow: "none",
      width: "100%",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: "#939393",
        color: "#FFF",
        cursor: isDisabled ? "not-allowed" : "default",
      };
    },
  };