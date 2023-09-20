//import clsx from "clsx";
import { iconProps } from "#types/typages";

interface Props{
    label?: string;
    icon: iconProps;
// eslint-disable-next-line @typescript-eslint/ban-types    
    hover: Function;
// eslint-disable-next-line @typescript-eslint/ban-types    
    leave: Function;
}

export default function Framework({
label,
icon,
hover,
leave,
}: Props){

    return(
<article 
onMouseLeave={() => leave()}
onMouseEnter={() => hover(label)}
>
    <icon.icon/>
</article>
    )
}