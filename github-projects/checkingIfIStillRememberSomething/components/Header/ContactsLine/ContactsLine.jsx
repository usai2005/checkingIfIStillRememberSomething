import React from "react";
import css from "./ContactsLine.module.scss";

const ContactsLine = () => {
  return (
    <div className={css.line}>
      <ul className={css.contacts}>
        <li className={css.contactsUnit}></li>
        <li className={css.contactsUnit}></li>
        <li className={css.contactsUnit}></li>
      </ul>
      <div className={css.languages}></div>
    </div>
  );
};

export default ContactsLine;
