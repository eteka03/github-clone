import React from "react";
import { BiError } from "react-icons/bi";
const Error = () => {
  return (
    <div>
      <h3>
        <BiError /> Oups !! On a une erreur!{" "}
      </h3>
      <h4>Paniquez Pas :) , rafraichissez a page s'il vous plait</h4>
    </div>
  );
};

export default Error;
