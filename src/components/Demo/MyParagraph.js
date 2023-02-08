const MyParagraph = (props) => {
  console.log("MyParagraph COMPONENT RUNNING");

  return <p>{props.children}</p>;
};

export default MyParagraph;
