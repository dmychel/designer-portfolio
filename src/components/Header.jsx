import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/assets/icons/white.png" alt="" />
      </div>
      <nav>
        <ul>
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link>
            <li>WORK</li>
          </Link>
          <Link to="/about">
            <li>ABOUT</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
