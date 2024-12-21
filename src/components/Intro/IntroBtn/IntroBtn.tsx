import { useContext } from 'react';
import { ThemeContext } from '../../../AppRouter';
import arrow from '../../../icons/arrow.png';
import style from './introBtn.module.css';

const IntroBtn = () => {
const themeContext = useContext(ThemeContext);
const theme = themeContext?.theme === 'dark' ? style.dark : style.light;

return (
  <div className={`${style.introButtonWrapper} ${style[theme]}`}>
  <p className={`${style.introBtnP} ${style[theme]}`}>
  Давайте
  <a className={style.link}>
  <img src={arrow} alt="стрелочка" />
  </a>{' '}
  <div>Работать вместе</div>
  </p>
  </div>
  );
  };

export default IntroBtn;