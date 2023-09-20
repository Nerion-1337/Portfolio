import clsx from "clsx";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { iconProps } from "#types/typages";
import Spinner from "#components/build/global/spinner";
import Navlinks from "#components/build/global/navlink";
import { ImSpinner9 } from "react-icons/im";
//
interface Props {
  size?:
    | "h0"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "h7"
    | "h8"
    | "h9"
    | "h10";
  balise?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "li" | "span";
  color?:
    | "black"
    | "white"
    | "red"
    | "C1"
    | "C2"
    | "C3"
    | "C4"
    | "C5"
    | "C6"
    | "C7"
    | "C8"
    | "C9"
    | "C10";
  transform?: "maj" | "min";
  className?: string;
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/ban-types
  fonction?: Function;
  href?: string;
  active?: string;
  type?: string;
  special?: string;
  copy?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useRef?: React.Ref<any>;
  datatext?: string;
  icon?: iconProps;
  item_i?: boolean;
  loading?: boolean;
}
//
//
export default function Typo({
  size = "h6",
  balise: Balise = "div",
  color = "black",
  transform,
  className,
  children,
  fonction = () => {
    console.log();
  },
  href,
  active,
  type,
  special,
  copy,
  useRef,
  datatext,
  icon,
  item_i,
  loading,

}: Props) {
  //
  //
  let sizeStyles = "";
  let colorStyles = "";
  let transformStyles = "";
  //
  //
  switch (size) {
    case "h0":
      sizeStyles = "typo-h0";
      break;
    case "h1":
      sizeStyles = "typo-h1";
      break;
    case "h2":
      sizeStyles = "typo-h2";
      break;
    case "h3":
      sizeStyles = "typo-h3";
      break;
    case "h4":
      sizeStyles = "typo-h4";
      break;
    case "h5":
      sizeStyles = "typo-h5";
      break;
    case "h6":
      sizeStyles = "typo-h6";
      break;
    case "h7":
      sizeStyles = "typo-h7";
      break;
    case "h8":
      sizeStyles = "typo-h8";
      break;
    case "h9":
      sizeStyles = "typo-h9";
      break;
    case "h10":
      sizeStyles = "typo-h10";
      break;
  }
  //
  //
  switch (color) {
    case "black":
      colorStyles = "C-black";
      break;
    case "white":
      colorStyles = "C-white";
      break;
    case "C1":
      colorStyles = "C1";
      break;
    case "C2":
      colorStyles = "C2";
      break;
    case "C3":
      colorStyles = "C3";
      break;
    case "C4":
      colorStyles = "C4";
      break;
    case "C5":
      colorStyles = "C5";
      break;
    case "C6":
      colorStyles = "C6";
      break;
    case "C7":
      colorStyles = "C7";
      break;
    case "C8":
      colorStyles = "C8";
      break;
    case "C9":
      colorStyles = "C9";
      break;
    case "C10":
      colorStyles = "C10";
      break;
  }
  //
  //
  switch (transform) {
    case "maj":
      transformStyles = "maj";
      break;
    case "min":
      transformStyles = "min";
      break;
  }
  //
  //
  const handleClick = () => {
    if (fonction) fonction();
  };
  //
  //
  const typoContent = (
    <>
      {loading ? (
        <Spinner variant="t1" size="h1" icon={{ icon: ImSpinner9 }} />
      ) : (
        <>
          {icon && !children ? (
            <icon.icon />
          ) : (
            <>
              {icon && children ? (
                <>
                  <icon.icon /> {children}
                </>
              ) : (
                <>
                  {item_i && children ? (
                    <>
                      <i /> <span>{children}</span>
                    </>
                  ) : (
                    <>{children}</>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
  //
  const typoElement = (
    <Balise
      className={clsx(sizeStyles, colorStyles, transformStyles, className)}
      onClick={handleClick}
      ref={useRef}
      data-text={datatext}
    >
      {typoContent}
    </Balise>
  );
  //
  //
  if (href) {
    return (
      <Navlinks href={href} type={type} active={active} special={special}>
        {typoElement}
      </Navlinks>
    );
  } else if (copy) {
    return <CopyToClipboard text={copy}>{typoElement}</CopyToClipboard>;
  }
  //
  return typoElement;
}
