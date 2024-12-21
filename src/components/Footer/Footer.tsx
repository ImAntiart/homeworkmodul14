import IntroRunLine from "../Intro/IntroRunLine/IntroRunLine";
import style from "./footer.module.css";
import data from "../../db/db.json";
import logo from "../../images/Antiart.png";
import { FadeInDiv } from "../animation/FadelnDiv";
import IntroBtn from "../Intro/IntroBtn/IntroBtn";
import face from "../../icons/f.svg";
import tw from "../../icons/t.svg";
import in_ from "../../icons/in.svg";
import SocialButtons from "../SocialButtons/SocialButtons";
import links from "../../db/links.json";
import Links from "../Links/Links";



const Footer = () => {
  return (
    <div className={style.container}>
      
      <div className={style.logoFooterWrapper}>
        <div className={style.logoWrapper}>
          <FadeInDiv>
            <img src={logo} alt="antiart logo" />
          </FadeInDiv>
        </div>
        <IntroRunLine categories={data.categories} isAbsolute={false} />
      </div>

      <div className={style.mainFooterBlock}>
        <div className={style.mainFooterBlockOne}>
          <div className={style.footerButtonWrapper}>
            <span>Для нас ваш проект имеет значение</span>
            <IntroBtn />
          </div>

          <div className={style.footerLinksBlock}>
            <div className={style.linksWrapper}>
              {links.map((linkL) => (
                <Links key={linkL.id} title={linkL.name} links={linkL.links} />
              ))}
            </div>
          </div>

        </div>
      </div>
      <div className={style.mainFooterBlockTwo}>
          <div className={style.blockTwoWrapper}>
            <div className={style.footerTermsBlock}>
            <p className={style.footerTerms}>Условия использования</p>
            <p>Политика конфиденциальности</p>
            </div>
            <div><SocialButtons icons={[face, tw, in_]} /></div>
            <div className={style.footerCopyBlock}>
              <p>© 2024 Алексей Ромашев "Antiart". Все права защищены.</p>
            </div> 
          </div>
        </div>
    </div>
  );
};

export default Footer;
