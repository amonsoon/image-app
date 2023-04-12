import React from "react";

type Props = {};

function LogoSmall({}: Props) {
  return (
    <div>
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
      >
        <g transform="translate(-3894 2762)">
          <rect width="50" height="50" rx="8" transform="translate(3894 -2762)" fill="#07a081"></rect>
          <path
            d="M32.671,44.73h7.091V37.935H41.9a5.657,5.657,0,1,0,0-11.314H32.671Zm10.763,3.622H29V23H41.9a9.271,9.271,0,0,1,1.53,18.435Z"
            transform="translate(3880 -2773)"
            fill="#fff"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default LogoSmall;
