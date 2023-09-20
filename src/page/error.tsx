import { Links_Routes } from "#data/links";
import Typo from "#components/build/global/typography";
import ThemeMode from "#components/themeMode";
//
//
interface Props {
  id?: string;
  error?: string;
}
//
//
export default function Error({
  id = "404",
  error = "Oups! La page que vous demandez n'existe pas.",
}: Props) {
  //
  //
  if (Links_Routes) {
    //
    return (
      <section className="error">
        <ThemeMode />

        <Typo size="h0" balise="span" color="C7">
          {id}
        </Typo>

        <Typo size="h3" balise="span" color="C6">
          {error}
        </Typo>

        <Typo
          size="h5"
          balise="span"
          className="backHomeError404"
          children="Retourner sur la page d’accueil"
          datatext="Retourner sur la page d’accueil"
          href={Links_Routes[0].url}
          type={Links_Routes[0].type}
        />
      </section>
    );
    //
  } else {
    //
    return <h1>Fail Link</h1>;
  }
}
