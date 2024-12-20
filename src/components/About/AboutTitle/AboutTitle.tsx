import { FC } from 'react';
import style from './aboutTitle.module.css';
import star4 from '../../../icons/purpleStar.png';

type Props = {
  text: string;
};

const AboutTitle: FC<Props> = ({ text }) => {
  return (
    <div className={style.container}>
      <img className={style.imgAboutTitle} src={star4} alt="purpleStar. Почти воровская фиолетовая звезда" />
      <h2 className={style.h2AboutTitle}>{text}</h2>
    </div>
  );
};

export default AboutTitle;
