import { NavLink } from "react-router-dom";
import { Typelinks } from "#data/links";
//
interface Props {
  href: string;
  active?: string;
  type?: string;
  children: React.ReactNode;
  special?: string;
}
//
export default function Navlinks({
  href,
  children,
  active,
  type = "intern",
  special,
}: Props) {
  //
  //
  let urlStyles = "";
  //
  //
  switch (special) {
    case "tel":
      urlStyles = "tel:+33" + href?.slice(-9);
      break;
    case "mail":
      urlStyles = `mailto:${href}`;
      break;
  }
  //
  //
  return (
    <>
      {type === Typelinks.INTERN && (
        <NavLink
          to={href}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? active : ""
          }
        >
          {children}
        </NavLink>
      )}

      {type === Typelinks.EXTERN && (
<>
        { special ? ( 
          <a href={urlStyles} target="_blank">
        {children}
      </a>
      ) : (  
        <a href={href} target="_blank">
          {children}
        </a> 
        )}
        </>
      )}
    </>
  );
}