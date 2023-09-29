import logo from './logo.svg';
import reactLogo from './react-logo.png';
import './App.css';

export default function Header() {
    return (
      <header className="App-header">
      <nav className="navigation">
        <img src={reactLogo} alt="React Logo" className="nav-img" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
        <img src={logo} className="App-logo" alt="logo" width="250"/>
        <p>
          About eTrifonova Learning Technologies
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get a free lesson
        </a>
      </header>
    )
  }