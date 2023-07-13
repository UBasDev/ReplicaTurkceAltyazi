import Custom_Submit_Button from "@/components/buttons/custom_submit_button/custom_submit_button";
import Custom_Text_Input from "@/components/form_inputs/custom_text_input/custom_text_input";

interface IForm_Input {
  id: number;
  name: string;
  defaultValue: string;
  placeholder: string;
  type: string;
}

const form_inputs: Array<IForm_Input> = [
  {
    id: 1,
    name: "username",
    defaultValue: "",
    placeholder: "Username",
    type: "text",
  },
  {
    id: 2,
    name: "password",
    defaultValue: "",
    placeholder: "Password",
    type: "password",
  },
];

export default function Login_Modal_Form(): JSX.Element {
  return (
    <div className="grid grid-cols-24 py-5">
      <div className="col-start-8 col-end-18 flex flex-col gap-y-5">
        {form_inputs.map((current_item: IForm_Input) => (
          <Custom_Text_Input
            className="rounded-md py-2 px-4 text-black"
            key={current_item.id}
            placeholder={current_item.placeholder}
          />
        ))}
        <Custom_Submit_Button
          className="rounded-md py-2 px-4"
          style={{
            backgroundColor: "#01AB63",
            color: "white",
            cursor: "pointer",
          }}
        >
          Login
        </Custom_Submit_Button>
      </div>
    </div>
  );
}
