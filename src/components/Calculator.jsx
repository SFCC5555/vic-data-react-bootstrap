import { useState } from "react";
import buttons from "../data/buttons.json";
import { evaluateExpression } from "../utils/evaluateExpression";

const Calculator = () => {
  const [display, setDisplay] = useState("0");

  const handleClick = (e) => {
    const key = e.target.name;

    if (key === "AC") return setDisplay("0");

    if (key === "+/-") return setDisplay((prev) => `-(${prev})`);

    setDisplay((prev) => {
      if (prev === "Syntax Error" || prev === "Infinity") return key;

      if (key === "=") {
        const operation = prev.replace(/x/g, "*").replace(/÷/g, "/");
        return evaluateExpression(operation);
      }

      return prev === "0" ? key : prev + key;
    });
  };

  return (
    <div className="d-flex flex-column m-4 ">
      <div
        className={`display overflow-auto text-white fw-light p-4 font-size-${
          display === "Syntax Error" || display === "Infinity" ? "3-5" : "4"
        }-rem`}
      >
        {display}
      </div>
      <section className="keypad">
        {buttons.map((button) => (
          <button
            key={button.name}
            name={button.name}
            onClick={handleClick}
            className={`btn-${
              button.name === "0" ? "special" : "normal"
            } color-${button.color} fs-2`}
          >
            {button.name}
          </button>
        ))}
      </section>
      <div className="bar mt-5 bg-white align-self-center rounded-5"></div>
    </div>
  );
};

export { Calculator };
