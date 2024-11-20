import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

Link;

function Header() {
  return (
    <header>
      <Link to='/'>Fast React Pizza Co.</Link>
      <SearchOrder />
      <p>Antonio</p>
    </header>
  );
}

export default Header;
