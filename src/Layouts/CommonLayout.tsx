export default function CommonLayout(props:any) :JSX.Element{
    return (
        <>
            <p>Common Layout works!</p>
            {props.children}
        </>
    )
}