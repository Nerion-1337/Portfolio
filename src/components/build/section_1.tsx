//BUILDER
import Typo from "#components/build/global/typography";
import Framework from "#components/build/framework";
//HOOK
import { useState, useRef } from "react";
//DATA
import { framework } from "#data/links";
// OTHER
import { v4 as uuidv4 } from "uuid";

export default function Section_1() {
  //
  // HOVER FRAMEWORK
  //
  const [content, setContent] = useState("");
  const handleHover = (label: string) => {
    setContent(label);
  };
  const handleMouseLeave = () => {
    setContent("");
  };
  //
  // ANIMATION MOUSE FRAMEWORK
  //
  const position = document.documentElement;
  position.addEventListener("mousemove", (e) => {
    const max = 100;
    const min = -100;
    let x = e.pageX * 0.2 - window.innerWidth / 6.62;
    let y = e.pageY * 0.2 - window.innerHeight / 10.8;
    x = Math.max(Math.min(x, max), min);
    y = Math.max(Math.min(y, max), min);
    position.style.setProperty("--x", x + "px");
    position.style.setProperty("--y", y + "px");
  });
  //
  // BUILDER
  //
  const frame = useRef(
    framework.map((item) => (
      <Framework
        key={uuidv4()}
        icon={item.icon}
        label={item.label}
        hover={handleHover}
        leave={handleMouseLeave}
      />
    ))
  );
  //
  //
  //
  //
  return (
    <section className="section1" onMouseEnter={() => handleMouseLeave()}>
      {/* - - - - - - - - - */}
      {/* - TITRE - */}
      {/* - - - - - - - - - */}
      <Typo
        balise="h1"
        size="h1"
        className="profession"
        color="C2"
        transform="maj"
      >
        Developpeur d'application web
      </Typo>
      {/* - - - - - - - - - */}
      {/* - TEXT VERTICAL - */}
      {/* - - - - - - - - - */}
      <Typo balise="span" size="h2" className="accueil" transform="maj">
        Bienvenu
      </Typo>
      {/* - - - - - - - - - */}
      {/* - LOGO FLOTANT - */}
      {/* - - - - - - - - - */}
      <div className="a1_left">
        <div className="logo" />
      </div>
      <div className="a2_right">
        <div className="framework">
          {/* - - - - - - - - - */}
          {/* - NOM FRAMEWORK DYNAMIQUE - */}
          {/* - - - - - - - - - */}
          <Typo
            balise="span"
            color="C5"
            size="h4"
            className="title_framework"
            children={content}
          />
          {/* - - - - - - - - - */}
          {/* - ICONS FRAMEWORK - */}
          {/* - - - - - - - - - */}
          {frame.current}
        </div>
        {/* - - - - - - - - - */}
        {/* - IMAGES ANIMATION - */}
        {/* - - - - - - - - - */}
        <img src="./assets/scss.png" alt="scss" className="screen s1" />
        <img src="./assets/tsx.png" alt="tsx" className="screen s2" />
        <img src="./assets/typage.png" alt="typage" className="screen s3" />
        <img src="./assets/jsx.png" alt="jsx" className="screen s4" />
        <img src="./assets/js.png" alt="js" className="screen s5" />
        <img src="./assets/html.png" alt="html" className="screen s6" />
      </div>
    </section>
  );
}
