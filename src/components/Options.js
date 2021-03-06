import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">You Options</h3>
      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        RemoveAll
      </button>
    </div>
    <div>
      {props.options.length === 0 && (
        <p className="widget__message">Please add an option to get started!</p>
      )}
    </div>
    {props.options.map((option, index) => (
      <Option
        key={option}
        option={option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
