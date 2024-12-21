import { useContext } from 'react';
import { ThemeContext } from '../../AppRouter';
import IntroBtn from './IntroBtn/IntroBtn';
import { FadeInDiv } from '../animation/FadelnDiv';
import style from './intro.module.css';
import { FC } from 'react';
import labelAtb from '../../images/Antiart.png';
import IntroFotos from './IntroFotos/IntroFotos';

type Props = {
fullName: string;
};

const Intro: FC<Props> = ({ fullName }) => {
const themeContext = useContext(ThemeContext);
const theme = themeContext?.theme === 'dark' ? style.dark : style.light;

return (
<div className={`${style.container} ${theme}`}>
<div className={style.introName}>
<div className={style.introNameWrapper}>
<p>Программист</p>
<h1 className={theme}>{fullName}</h1>
</div>
<div className={style.introLabelWrapper}>
<FadeInDiv>
<img src={labelAtb} alt="Label" />
</FadeInDiv>
</div>
<IntroBtn />
</div>
<div className={style.introRunLine}></div>
<div className={style.introFotos}>
<IntroFotos />
</div>
</div>
);
};

export default Intro;