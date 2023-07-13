interface IComponent_Props {
  className?: string;
  attributes?: any;
  placeholder?: string;
  style?: React.CSSProperties;
  children?: any;
}

export default function Custom_Text_Input(
  props: IComponent_Props
): JSX.Element {
  return (
    <input
      className={`${props?.className ?? ""}`}
      {...(props?.attributes ?? null)}
      style={{
        ...props.style,
      }}
      type="text"
      placeholder={props?.placeholder ?? ""}
    />
  );
}
