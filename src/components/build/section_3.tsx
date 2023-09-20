// HOOK
import { RefObject, useRef, useEffect, useState } from "react";
import {useScroll, motion, MotionValue} from "framer-motion";
// BUILDER
import Typo from "./global/typography";
// DATA
import { apropos } from "#data/links";
//
//
//
export default function Section_3() {
//
// USEREF
//
const ParaRef1 = useRef<HTMLDivElement>(null);
const ParaRef2 = useRef<HTMLDivElement>(null);
const ParaRef3 = useRef<HTMLDivElement>(null);    
//
// SCROLL CERCLE
//
function Scroll(): [RefObject<HTMLLIElement>, MotionValue<number>]{
  
const ref = useRef<HTMLLIElement>(null);
const {scrollYProgress} = useScroll({
  target: ref,
  offset: ["center end", "center center"],
})

return [ref, scrollYProgress]
}
  //
  // SCROLL BAR
  //
  const scrollBarRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: scrollBarRef,
    offset: ["center end", "center center"],
  })
  //
  // ANIMATION OBSERVER
  //
  const observeIntersection = (
    ref: React.RefObject<HTMLElement>,
    callback: (entry: IntersectionObserverEntry[]) => void
  ) => {
    let options: IntersectionObserverInit;

    if (ref === ParaRef2) {
      options = {
        root: null,
        rootMargin: "300px",
        threshold: 1,
      };
    } else if (ref === ParaRef3) {
      options = {
        root: null,
        rootMargin: "250px",
        threshold: 1,
      };
    } else {
      options = {
        root: null,
        rootMargin: "150px",
        threshold: 1,
    }
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

  // Utilisation pour le first paragraphe
  const [isFirstPara, setIsFirstPara] = useState(false);
  useIntersectionObserver(ParaRef1, handlIntersection(setIsFirstPara));
  // Utilisation pour le second paragraphe
  const [isSectPara, setIsSecPara] = useState(false);
  useIntersectionObserver(ParaRef2, handlIntersection(setIsSecPara));
  // Utilisation pour la photo
  const [isImg, setIsImg] = useState(false);
  useIntersectionObserver(ParaRef3, handlIntersection(setIsImg));
//
// BUILD CERCLE
//
const build_apropos = apropos.map((item, index) =>{
  const [ref, scrollYProgress] = Scroll();
  let AllParaRef;
  let useState;
  if (index === 0) {
    AllParaRef = ParaRef1;
    useState = isFirstPara;
  } else {
    AllParaRef = ParaRef2;
    useState = isSectPara;
  }

  return(
  <li key={index} ref={ref} >
          <figure ref={AllParaRef}>
            <svg viewBox="0 0 100 100">
              <circle cx="75" cy="50" r="25" pathLength="1" className="c1" />
               <motion.circle  cx="75" cy="50" r="20" className="c2" style={{ pathLength: scrollYProgress}}/>
              <circle cx="75" cy="50" r="15" pathLength="1" className="c3" />
            </svg>
          </figure>
          <div className={`bloc ${useState ? "open" : ""}`} >
            <Typo
              balise="h3"
              size="h4"
              transform="maj"
              className="name_apropos"
              children={item.title}
            />
            <Typo
              balise="span"
              size="h8"
              color="white"
              children={item.span}
              icon={item.icon}
            />
            <Typo 
            balise="p" 
            size="h7" 
            color="C6" 
            className="presentation"
            children={item.p}
            />       
          </div>
        </li>
        )
  })
  //
  //
  //
  //
  return (
    <section className="section3" ref={scrollBarRef}>
      {/* - - - - - - - - - */}
      {/* - TITRE - */}
      {/* - - - - - - - - - */}
      <Typo
        balise="h2"
        size="h1"
        className="apropos"
        color="C2"
        transform="maj"
        children="à propos"
      />
      {/* - - - - - - - - - */}
      {/* - IMAGE PROFIL - */}
      {/* - - - - - - - - - */}
      <div className="bloc_1">
     <div className="left">
      <div className="bloc_img" ref={ParaRef3}>
      <article className={` ${isImg ? "open" : ""}`}>
        <img src="./assets/photo_moi.jpg" alt="photo de profil" />
      </article>
      </div>
      </div>
<div className="right">
      <ul>
      {/* - - - - - - - - - */}
      {/* - SCROLL BAR - */}
      {/* - - - - - - - - - */}
        <motion.div
        style={{scaleY: scrollYProgress}}
         className="scroll_bar" /> 
      {/* - - - - - - - - - */}
      {/* - LISTE CONTENU - */}
      {/* - - - - - - - - - */}   
        {build_apropos}
      </ul>
      </div>
      </div>
    </section>
  );
}
