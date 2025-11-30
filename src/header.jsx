
import { useSelector } from "react-redux";

function Header() {
  const selector = useSelector((state)=> state.cart.value)
  return (
    <header className="header">
      <span>Count {selector}</span>
    </header>
  );
}

export default Header;
