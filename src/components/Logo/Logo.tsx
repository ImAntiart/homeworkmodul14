import logo from '../../images/logoAntiart.png';
import style from './logo.module.css';

const Logo = () => {
  return (
    <div className={style.logo}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;
