import style from './introFotos.module.css';
import photoCollage1 from '../../../images/collage/photoCollage1.webp';
import photoCollage2 from '../../../images/collage/photoCollage2.webp';
import photoCollage3 from '../../../images/collage/photoCollage3.webp';
import photoCollage4 from '../../../images/collage/photoCollage4.webp';
import photoCollage5 from '../../../images/collage/photoCollage5.webp';
import photoCollage6 from '../../../images/collage/photoCollage6.webp';
import { useContext } from 'react';
import { ThemeContext } from '../../../AppRouter';

const IntroFotos = () => {
  const currentTheme = useContext(ThemeContext);
  let theme = '';

  if (currentTheme?.theme === 'dark') {
    theme = 'dark';
  } else {
    theme = 'light';
  }

  return (
    <div className={style.container}>
      <figure className={`${style.item} ${style.item1}`}>
        <img
          className={`${style.itemImg} ${style.itemImg1}`}
          src={photoCollage1}
          alt="photoCollage1"
        />
      </figure>
      <figure className={`${style.item} ${style.item2}`}>
        <img
          className={`${style.itemImg} ${style.itemImg2}`}
          src={photoCollage2}
          alt="photoCollage2"
        />
      </figure>
      <figure className={`${style.item} ${style.item3} ${theme}`}>
        <img
          className={`${style.itemImg} ${style.itemImg3}`}
          src={photoCollage3}
          alt="photoCollage3"
        />
      </figure>
      <figure className={`${style.item} ${style.item4}`}>
        <img
          className={`${style.itemImg} ${style.itemImg4}`}
          src={photoCollage4}
          alt="photoCollage4"
        />
      </figure>
      <figure className={`${style.item} ${style.item5}`}>
        <img
          className={`${style.itemImg} ${style.itemImg5}`}
          src={photoCollage5}
          alt="photoCollage5"
        />
      </figure>
      <figure className={`${style.item} ${style.item6}`}>
        <img
          className={`${style.itemImg} ${style.itemImg6}`}
          src={photoCollage6}
          alt="photoCollage6"
        />
      </figure>
    </div>
  );
};

export default IntroFotos;
