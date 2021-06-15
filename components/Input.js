import { useState } from "react";
import Button from "./Button.js";

const Input = ({ setNameCountry }) => {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setNameCountry(inputValue);

      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={(e) => handleOnChange(e)}>
        <div>
          <div>
            <input
              type="text"
              placeholder="Search for a countries.."
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
          </div>

          <div className="btn">
            <Button value={"Search"} />
          </div>
        </div>
      </form>

      <style jsx>
        {`
          div {
            margin-top: 30px;
            height: 30%;
            display: flex;
            align-items: center;
            justify-content: start;
            text-align: center;
            margin-left: 20px;
          }

          input {
            width: 250px;
            text-align: center;
            padding: 10px;
          }

          .btn {
            width: 250px;
            text-align: center;
            padding: 10px;
          }
        `}
      </style>
    </>
  );
};

export default Input;
