import css from "./Container.module.scss";

const Container = function ({ children, className }) {
  return <div className={`${css.container} ${className}`}>{children}</div>;
};

export default Container;
