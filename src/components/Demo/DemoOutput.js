import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput COMPONENT RUNNING");

  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default DemoOutput;
