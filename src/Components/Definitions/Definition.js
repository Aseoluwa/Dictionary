/** @format */

import React from "react";
import Definitions from "./Definitions.css";

const Definition = ({ word, meanings }) => {
  return (
    <div className='meanings'>
      {word === "" ? (
        <span className='subTitle'>Start by typing a word in the search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                classname='Singlemeaning'
                style={{ backgroundColor: "white", color: "black" }}>
                <h2 className='Hay'>
                  <b>Definition:{def.definition}</b>
                </h2>
                <hr style={{ backgroundColor: "white", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example: </b>
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definition;
