//BUILDER
import Typo from "#components/build/global/typography";
import Button from "#components/build/global/button";
//HOOK
import React, { useState, useRef, useEffect } from "react";
//DATA
import { projets } from "#data/links";
// OTHER
import { v4 as uuidv4 } from "uuid";
//
//
//
export default function Section_2() {
  //
  // VARIABLE REF
  //
  const buttonRef = useRef<HTMLDivElement>(null);
  const framework_icon = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  //
  // ANIMATION HOVER FRAMEWORK
  //
  const indicatorRef = useRef<HTMLDivElement>(null);
  const articleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const indicator = indicatorRef.current;
    if (indicator) {
      indicator.style.opacity = "1";
      indicator.style.transitionDelay = "0s";
      indicator.style.top = e.currentTarget.offsetTop + "px";
      indicator.style.left = e.currentTarget.offsetLeft + "px";
      indicator.style.width = e.currentTarget.offsetWidth + "px";
      indicator.style.height = e.currentTarget.offsetHeight + "px";
    }
  };
  const articleMouseLeave = () => {
    const indicator = indicatorRef.current;
    if (indicator) {
      indicator.style.opacity = "0";
    }
  };
  //
  // DATAS DYNAMIQUES
  //
  const [data_projet, setData_projet] = useState(projets[13]);
  const [data_wait, setData_wait] = useState(projets[13]);
  const choose_projet = (data: string) => {
    const projet = projets.find((projet) => projet.label === data);
    if (projet) {
      setData_projet(projet);
    }
  };
  //
  // BUILDER
  //
  const name_site = (
    <>
      <Typo
        balise="span"
        size="h2"
        color="C7"
        transform="maj"
        className="name_site_before"
        children={data_wait.label}
        datatext={data_wait.label}
        useRef={titleRef}
      />
    </>
  );
  //
  const icon_fram = data_wait.framework[0].icon.map((Icon, index) => (
    <article key={index}>
      <div
        className={"bloc"}
        onMouseEnter={articleMouseEnter}
        onMouseLeave={articleMouseLeave}
      >
        <Icon className="icon" />
        <Typo
          balise="span"
          color="white"
          className="name"
          transform="maj"
          children={data_wait.framework[0].name[index]}
        />
      </div>
    </article>
  ));
//
  const button_prenium = [
    projets[13].label,
    projets[4].label,
    projets[9].label,
  ].map((item, index) => (
    <div className="anim_visible_button" key={index}>
      <Button
        key={uuidv4()}
        variant="t4"
        size="h3"
        fontSize="h5"
        children={index + 1}
        fonction={choose_projet}
        data_function={item}
        className={`${data_wait.label === item ? "active" : ""}`}
      />
    </div>
  ));
  //
  const button_extern = (
    <>
      {data_projet.url && data_projet.code ? (
        <>
          <Button
            variant="t2"
            fontSize="h3"
            item_i={true}
            href={data_projet.url}
            type="extern"
            children="voir"
          />
          <Button
            variant="t2"
            fontSize="h3"
            item_i={true}
            href={data_projet.code}
            type="extern"
            children="code"
          />
        </>
      ) : (
        <>
          {!data_projet.url && data_projet.code ? (
            <Button
              variant="t2"
              fontSize="h3"
              item_i={true}
              href={data_projet.code}
              type="extern"
              children="code"
            />
          ) : (
            <Button
              variant="t2"
              fontSize="h3"
              item_i={true}
              href={data_projet.url}
              type="extern"
              children="aperçu"
            />
          )}
        </>
      )}
    </>
  );
  //
  const all_projets_scroll = projets.slice(0, 16).map((item) => (
    <Button
      key={uuidv4()}
      variant="t3"
      fontSize="h3"
      fonction={choose_projet}
      data_function={item.label}
    >
      <img src={item.icon} alt={item.label} /> {item.label}
    </Button>
  ));
  // const all_projets_scroll_2 = projets.slice(7, 16).map((item) => (
  //   <Button
  //     key={uuidv4()}
  //     variant="t3"
  //     fontSize="h3"
  //     fonction={choose_projet}
  //     data_function={item.label}
  //   >
  //     <img src={item.icon} alt={item.label} /> {item.label}
  //   </Button>
  // ));
  //
  // ANIMATION DYNAMIQUE CHANGEMENT DATA
  //
  useEffect(() => {
    imgRef.current?.classList.add("active");
    textRef.current?.classList.add("active");
    titleRef.current?.classList.add("active");
    framework_icon.current?.classList.add("active");
    setTimeout(() => {
      setData_wait(data_projet);
      titleRef.current?.classList.remove("active");
      framework_icon.current?.classList.remove("active");
      titleRef.current?.classList.toggle("name_site_before");
      titleRef.current?.classList.toggle("name_site_after");
      imgRef.current?.classList.remove("active");
      textRef.current?.classList.remove("active");
    }, 400);
  }, [data_projet]);
  //
  // ANIMATION OBSERVER
  //
  const observeIntersection = (
    ref: React.RefObject<HTMLElement>,
    callback: (entry: IntersectionObserverEntry[]) => void
  ) => {
    let options: IntersectionObserverInit;

    if (ref === framework_icon) {
      options = {
        root: null,
        rootMargin: "-100px 0px",
        threshold: 1,
      };
    } else {
      options = {
        root: null,
        rootMargin: "0px 0px",
        threshold: 1,
      };
    }

    const observer = new IntersectionObserver(callback, options);
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  };

  const useIntersectionObserver = (
    ref: React.RefObject<HTMLElement>,
    callback: (entry: IntersectionObserverEntry[]) => void
  ) => {
    useEffect(() => {
      return observeIntersection(ref, callback);
    }, [ref, callback]);
  };

  const handlIntersection =
    (setButtonState: React.Dispatch<React.SetStateAction<boolean>>) =>
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setButtonState(entry.isIntersecting);
    };

  // Utilisation pour le bouton
  const [isButton, setIsButton] = useState(false);
  useIntersectionObserver(buttonRef, handlIntersection(setIsButton));

  // Utilisation pour le titre
  const [isTitle, setIsTitle] = useState(false);
  useIntersectionObserver(titleRef, handlIntersection(setIsTitle));

  // Utilisation pour le text
  const [isText, setIsText] = useState(false);
  useIntersectionObserver(textRef, handlIntersection(setIsText));

  // Utilisation pour le image
  const [isImg, setImg] = useState(false);
  useIntersectionObserver(imgRef, handlIntersection(setImg));

  // Utilisation pour le text
  const [isFramework, setFramework] = useState(false);
  useIntersectionObserver(framework_icon, handlIntersection(setFramework));
  //
  //
  //
  //
  return (
    <section className="section2">
      {/* - - - - - - - - - */}
      {/* - TITRE - */}
      {/* - - - - - - - - - */}
      <Typo
        balise="h2"
        size="h1"
        className="projets"
        color="C2"
        transform="maj"
        children="projets"
      />
      {/* - - - - - - - - - */}
      {/* - BUTTON - 1,2,3 - */}
      {/* - - - - - - - - - */}
      <div className="podium_projets">
        <div className={`button ${isButton ? "open" : ""}`} ref={buttonRef}>
          {button_prenium}
        </div>
        {/* - - - - - - - - - */}
        {/* - IMAGE - */}
        {/* - - - - - - - - - */}
        <div className="img_anim" ref={imgRef}>
          <img
            src={data_wait.image}
            alt={data_wait.label}
            className={`${isImg ? "open" : ""}`}
          />
        </div>
        {/* - - - - - - - - - */}
        {/* - TITRE - */}
        {/* - - - - - - - - - */}
        <div className="infos">
          <div className={`bloc_name_site ${isTitle ? "open" : ""}`}>
            {name_site}
          </div>
          {/* - - - - - - - - - */}
          {/* - TEXT - */}
          {/* - - - - - - - - - */}
          <div
            className={`bloc_descritpion ${isText ? "open" : ""}`}
            ref={textRef}
            style={{ whiteSpace: 'pre-line' }}
          >
            <Typo
              balise="p"
              size="h6"
              color="C6"
              className="description"
              children={data_wait.text}
            />
          </div>
          {/* - - - - - - - - - */}
          {/* - FRAMEWORK - */}
          {/* - - - - - - - - - */}
          <div className="framework">
            <Typo
              balise="span"
              size="h5"
              color="C7"
              className="title"
              children="Framework"
            />
            <div
              className={`framework_icon ${isFramework ? "open" : ""}`}
              ref={framework_icon}
            >
              {/* - - - - - - - - - */}
              {/* - BLOC HOVER - */}
              {/* - - - - - - - - - */}
              <div className="indicator" ref={indicatorRef} />
              {/* - - - - - - - - - */}
              {/* - ICONS - */}
              {/* - - - - - - - - - */}
              {icon_fram}
            </div>
          </div>
          {/* - - - - - - - - - */}
          {/* - BUTTON LIEN EXTERNE - */}
          {/* - - - - - - - - - */}
          <div className="navigation">{button_extern}</div>
        </div>
      </div>
      {/* - - - - - - - - - */}
      {/* - LISTE PROJECTS - */}
      {/* - - - - - - - - - */}
      <div className="all_projets">
        <div className="marquee ligne_1">{all_projets_scroll}</div>
        <div className="marquee ligne_1">{all_projets_scroll}</div>
      </div>
      {/* <div className="all_projets">
        <div className="marquee ligne_2">{all_projets_scroll_2}</div>
        <div className="marquee ligne_2">{all_projets_scroll_2}</div>
      </div> */}
    </section>
  );
}
