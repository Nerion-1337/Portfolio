//BUILDER
import Button from "#components/build/global/button";
//DATA
import { S_thibaut } from "#data/links";
//HOOK
import { useRef } from "react";
// OTHER
import { v4 as uuidv4 } from "uuid";
import ThemeMode from "#components/themeMode";

export default function Aside() {
  //
  //
  const ref = useRef(
    S_thibaut.links.map((item) => (
      <Button
        key={uuidv4()}
        variant="t1"
        size="h3"
        fontSize="h4"
        href={item?.url}
        type={item?.type}
        icon={item?.icon}
        special={item?.special}
        className="contact"
      />
    ))
  );
  //
  //
  return (
    <aside>
      <ThemeMode />
      {ref.current}
    </aside>
  );
}
