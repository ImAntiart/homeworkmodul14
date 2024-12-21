/** @format */

import { useContext } from "react";
import { ThemeContext } from "../../AppRouter";
import Button from "../Button/Button";
import style from "./about.module.css";
import btn from "../../db/btn.json";
import antiartPhoto from "../../images/antiartPhoto1.jpg";
import { FC } from "react";
import { updateStringByNum } from "../../modules/modules";
import AboutTitle from "./AboutTitle/AboutTitle";
import face from "../../icons/f.svg";
import tw from "../../icons/t.svg";
import in_ from "../../icons/in.svg";
import SocialButtons from "../SocialButtons/SocialButtons";
import TitlePart from "../TitlePart/TitlePart";
import { IButtonData } from "../../interfaces";

type Props = {
  biography: string;
  email: string;
  phone: string;
};

const About: FC<Props> = ({ biography, email, phone }) => {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme === "dark" ? "dark" : "light";

  return (
    <div className={`${style.container} ${style[theme]}`}>
      <div className={style.aboutFirstLine}>
        <TitlePart
          namePart={"Обо мне"}
          headPart={"Я Алексей Ромашев"}
          isNavigatyBtns={false}
          isButton={true}
          objBtn={[btn[0] as IButtonData]}
          styleGroup={{ maxWidth: "163px", width: "100%" }}
        />
      </div>
      <div className={style.aboutSecondLine}>
        <div className={style.aboutDivFoto}>
          <img className={style.aboutFoto} src={antiartPhoto} alt="обо мне" />
        </div>
        <div className={style.aboutIntroWrapper}>
          <div className={style.aboutIntroFirstLine}>
            <AboutTitle text="Обо мне" />
            <p>{updateStringByNum(biography, 403)}</p>
          </div>
          <div className={style.aboutIntroSecondLine}>
            <AboutTitle text="Контактная информация" />
            <div className={style.aboutDivEP}>
              <div className={style.aboutDivEmail}>
                <p className={style.aboutNameEP}>Email</p>
                <p className={style.aboutValueEP}>{email}</p>
              </div>
              <div className={style.aboutDivPhone}>
                <p className={style.aboutNameEP}>Номер телефона</p>
                <p className={style.aboutValueEP}>{phone}</p>
              </div>
            </div>
            <div className={style.aboutSocialWrapper}>
              <SocialButtons icons={[face, tw, in_]} />
              <div className={style.aboutBtnGroup}>
                <Button
                  text={btn[1].text}
                  size={btn[1].size}
                  path={btn[1].path}
                />
                <Button
                  text={btn[2].text}
                  size={btn[2].size}
                  path={btn[2].path}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;