interface IComponent_Props {
  children?: any;
  className?: string;
  style?: React.CSSProperties;
}

export default function Custom_Submit_Button(
  props: IComponent_Props
): JSX.Element {
  return (
    <button
      className={props?.className ?? ""}
      type="submit"
      style={{
        ...(props?.style ?? null),
      }}
    >
      {props?.children ?? null}
    </button>
  );
}
