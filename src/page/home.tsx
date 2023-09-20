//BUILDER
import Main from "#components/build/global/main";
import Aside from "#components/build/aside";
import Section_1 from "#components/build/section_1";
import Section_2 from "#components/build/section_2";
import Section_3 from "#components/build/section_3";
// OTHER
import Error from "./error";


export default function Home() {
  //
  //
  //
  //
  //
  if (Aside && Section_1 && Section_2 && Section_3) {
    return (
      <>
        <Main>
          <Aside />
          <Section_1 />
          <Section_2 />
          <Section_3 />
        </Main>
      </>
    );
  } else {
    return (
      <Error
        id="400"
        error="Echec du chargement de la variable ou de la fonction"
      />
    );
  }
}
