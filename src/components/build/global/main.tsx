interface Props{
    children?: React.ReactNode;
    className?: string;
}


export default function Main({
    children,
    className,
}:Props){
    return(
        <main className={className}>
            {children}
        </main>
    )
}