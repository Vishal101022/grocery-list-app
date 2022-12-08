const Footer = (props) => {

  return (
    <footer>
      <p>{props.length} List {(props.length === 1) ? "item" : "items"}</p>
    </footer>
  );
};

export default Footer;
