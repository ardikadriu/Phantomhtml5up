import Image from "next/image";
import logo from "@/public/images/logo.svg";

const Header = () => {
  return (
    <header id="header">
      <div className="inner">
        <a href="index.html" className="logo">
          <span className="symbol">
            <Image src={logo} alt="" />
          </span>
          <span className="title">Phantom</span>
        </a>

        <nav>
          <ul>
            <li>
              <a href="#menu">Menu</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
