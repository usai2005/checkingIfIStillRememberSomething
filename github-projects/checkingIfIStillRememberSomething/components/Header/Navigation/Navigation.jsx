import React from "react";
import Image from "next/image";
import logo from "/public/Logo.svg";

import css from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={css.navigationBar}>
      <ul className={css.burgerMenu}>
        <li
          className={`${css.burgerMenuLineUnit}${css.burgerMenuLineTop}`}
        ></li>
        <li
          className={`${css.burgerMenuLineUnit}
          ${css.burgerMenuLineMiddle}`}
        ></li>
        <li
          className={`${css.burgerMenuLineUnit}
          ${css.burgerMenuLineBottom}`}
        ></li>
      </ul>
      <div className={css.logoThumb}>
        <Image
          src={logo}
          width={98}
          height={58}
          alt={logo}
        />
      </div>
    </div>
  );
};

export default Navigation;
