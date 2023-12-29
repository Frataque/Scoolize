import React, { useReducer } from "react";
import PropTypes from "prop-types";

interface Props {
  property1: "done" | "not";
  className: any;
}

const CheckBox = ({ property1, className }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "not",
  });

  return (
    <div className={`inline-flex items-start gap-[10px] relative ${className}`}>
      {state.property1 === "not" && (
        <div
          className="relative w-[26px] h-[26px] bg-[#d9d9d9] rounded-[2px]"
          onClick={() => {
            dispatch("click");
          }}
        />
      )}

      {state.property1 === "done" && (
        <img className="relative w-[26px] h-[26px]" alt="Done" src="done.svg" />
      )}

      <div className="[font-family:'Marianne-Medium',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[24px] text-black font-medium leading-[20px] whitespace-nowrap relative">
        {state.property1 === "not" ? "To-do à faire" : "To-do faite"}
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "done",
      };
    default:
      return state;
  }
}

CheckBox.propTypes = {
  property1: PropTypes.oneOf(["done", "not"]),
  className: PropTypes.any,
};

export default CheckBox;
