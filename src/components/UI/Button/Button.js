import "./Button.css";

const Button = (props) => (
  <button type={props.type} className="button" onClick={props.onClick}>
    {props.children}
  </button>
);

export default Button;
