interface IOption {
  key: string;
  value: string;
}

interface IComponent_Props {
  select_className?: string;
  option_className?: string;
  attributes?: any;
  defaultValue?: string;
  options?: Array<IOption>;
  children?: any;
}

export default function Custom_Select_Input(
  props: IComponent_Props
): JSX.Element {
  return (
    <select
      className={`${props?.select_className ?? ""}`}
      {...(props?.attributes ?? null)}
      defaultValue={props?.defaultValue ?? ""}
    >
      {props?.options ? (
        props?.options?.map((item: IOption, index: number) => (
          <option
            className={`${props?.option_className ?? ""}`}
            key={index}
            value={item?.value ?? ""}
          >
            {item?.key ?? ""}
          </option>
        ))
      ) : (
        <option>{""}</option>
      )}
    </select>
  );
}
