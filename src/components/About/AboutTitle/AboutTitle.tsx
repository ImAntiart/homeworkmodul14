import { useContext, FC } from 'react';
import { ThemeContext } from '../../../AppRouter';
import style from './aboutTitle.module.css';
import star4 from '../../../icons/purpleStar.png';

type Props = {
text: string;
};

const AboutTitle: FC<Props> = ({ text }) => {
const themeContext = useContext(ThemeContext);
const theme = themeContext?.theme === 'dark' ? 'dark' : 'light';

return (
<div className={`${style.container} ${style[theme]}`}>
<img className={style.imgAboutTitle} src={star4} alt="purpleStar. Почти воровская фиолетовая звезда" />
<h2 className={style.h2AboutTitle}>{text}</h2>
</div>
);
};

export default AboutTitle;
