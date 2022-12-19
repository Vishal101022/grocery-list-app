import logo from "./asset/logo.svg";

function Header(props) {
  return (
    <header>
      <img id='logo' src={logo} alt='logo' />
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;
