import React from "react";

import Container from "../Container/Container";
import ContactsLine from "./ContactsLine/ContactsLine";
import Navigation from "./Navigation/Navigation";

import css from "./Header.module.scss";

const Header = () => {
  return (
    <Container>
      <div className={css.header}>
        <ContactsLine></ContactsLine>
        <Navigation></Navigation>
      </div>
    </Container>
  );
};

export default Header;
