interface Component_Props {
  children?: any;
  classes: string;
}

export default function Mobile_Header(props: Component_Props): JSX.Element {
  return <p className={`${props.classes}`}>Mobile header works!</p>;
}
