import clsx from "clsx";
import { iconProps } from "#types/typages";
import Spinner from "#components/build/global/spinner";
import { ImSpinner9 } from "react-icons/im";
import Navlinks from "#components/build/global/navlink";
//
//
interface Props {
  variant?: "t1" | "t2" | "t3" | "t4";
  size?: "h1" | "h2" | "h3" | "h4" | "h5";
  fontSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "h7" | "h8";
  icon?: iconProps;
  disabled?: boolean;
  loading?: boolean;
  item_i?: boolean;
  className?: string;
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/ban-types
  fonction?: Function;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data_function?: any;
  href?: string;
  active?: string;
  type?: string;
  special?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useRef?: React.Ref<any>;
}
//
//
export default function Button({
  variant,
  size,
  fontSize,
  icon,
  disabled,
  loading,
  item_i,
  className,
  children,
  fonction = () => {
    console.log();
  },
  data_function,
  href,
  active,
  type,
  special,
  useRef,
}: Props) {
  //
  //
  let variantStyles = "";
  let sizeStyles = "";
  let fontSizeStyles = "";
  //
  //
  switch (variant) {
    case "t1":
      variantStyles = "type-btn1";
      break;
    case "t2":
      variantStyles = "type-btn2";
      break;
    case "t3":
      variantStyles = "type-btn3";
      break;
    case "t4":
      variantStyles = "type-btn4";
      break;
  }
  //
  //
  switch (size) {
    case "h1":
      sizeStyles = "size-btn1";
      break;
    case "h2":
      sizeStyles = "size-btn2";
      break;
    case "h3":
      sizeStyles = "size-btn3";
      break;
    case "h4":
      sizeStyles = "size-btn4";
      break;
    case "h5":
      sizeStyles = "size-btn5";
      break;
  }
  //
  //
  switch (fontSize) {
    case "h1":
      fontSizeStyles = "size-t1";
      break;
    case "h2":
      fontSizeStyles = "size-t2";
      break;
    case "h3":
      fontSizeStyles = "size-t3";
      break;
    case "h4":
      fontSizeStyles = "size-t4";
      break;
    case "h5":
      fontSizeStyles = "size-t5";
      break;
    case "h6":
      fontSizeStyles = "size-t6";
      break;
    case "h7":
      fontSizeStyles = "size-t7";
      break;
    case "h8":
      fontSizeStyles = "size-t8";
      break;
  }
  //
  //
  const handleClick = () => {
    if (fonction) fonction(data_function);
  };
  //
  //
  const buttonContent = (
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
  const buttonElement = (
    <button
      type="button"
      className={clsx(variantStyles, sizeStyles, fontSizeStyles, className)}
      onClick={handleClick}
      disabled={disabled}
      ref={useRef}
    >
      {buttonContent}
    </button>
  );
  //
  //
  if (href) {
    return (
      <Navlinks href={href} type={type} active={active} special={special}>
        {buttonElement}
      </Navlinks>
    );
  }
  //
  return buttonElement;
}
