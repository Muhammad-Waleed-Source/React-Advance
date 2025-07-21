import logoImg from '../assets/logo.jpg'
import Button from './UI/Button';

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Food Logo" />
        <h1>ZigZagFood</h1>
      </div>
      <nav>
        <Button textOnly={true}>Cart (0)</Button>
      </nav>
    </header>
  );
}
