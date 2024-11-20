import { Link } from 'react-router-dom';

Link;

function Header() {
  return (
    <header>
      <Link to='/'>Fast React Pizza Co.</Link>
      <p>Antonio</p>
    </header>
  );
}

export default Header;
