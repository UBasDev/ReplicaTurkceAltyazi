"use client";

import { Homepage_Search_Validation_Scheme } from "@/validations/homepage_search_validation_scheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import component_styles from "./header_search_form.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import Custom_Text_Input from "@/components/form_inputs/custom_text_input/custom_text_input";
import Custom_Submit_Button from "@/components/buttons/custom_submit_button/custom_submit_button";
//import {} from "@fortawesome/fontawesome-svg-core"

interface ISearch_Type_Option {
  id: number;
  key: string;
  value: string;
  default: boolean;
  placeholder: string;
}

const select_search_type_options: ReadonlyArray<ISearch_Type_Option> = [
  {
    id: 1,
    key: "Subtitle",
    value: "Subtitle",
    default: true,
    placeholder: "Search for Movie / Series or IMDB link",
  },
  {
    id: 2,
    key: "Artist",
    value: "Artist",
    default: false,
    placeholder: "Search for artist name",
  },
  {
    id: 3,
    key: "Translator",
    value: "Translator",
    default: false,
    placeholder: "Search for translator name",
  },
  {
    id: 4,
    key: "Word",
    value: "Word",
    default: false,
    placeholder: "Search for word",
  },
  {
    id: 5,
    key: "Forum",
    value: "Forum",
    default: false,
    placeholder: "Search for word",
  },
];

const component_classes = {
  header_search_form_classes1: "flex flex-col h-full gap-y-1",
  header_search_form_classes2: "flex items-end justify-center h-full",
  header_search_form_classes3:
    "text-xs h-8 rounded-l-md p-0 pl-2 pr-8 m-0 outline-none",
  header_search_form_classes4: "h-8 grow p-0 px-2 m-0 outline-none",
  header_search_form_classes5:
    "h-8 pr-1 bg-white flex items-center justify-center",
  header_search_form_classes6:
    "global_scale_up_animation text-gray-500 font-black hover:text-green-500",
  header_search_form_classes7: "text-sm p-0 m-0",
};

const component_constants = {
  select_input_name: "search_type",
  search_input_name: "search_text",
};

export default function Header_Search_Form(): JSX.Element {
  useEffect(() => {
    // document.getElementById("elem1")?.addEventListener(
    //   "mouseenter",
    //   () => {
    //     console.log("Event triggered!");
    //   },
    //   {
    //     capture: false,
    //   }
    // );
  }, []);

  useEffect(() => {
    set_current_selected_type(select_search_type_options[0]);
  }, []);

  const [current_selected_type, set_current_selected_type] =
    useState<ISearch_Type_Option>();

  const [starter_selected_search_type] = select_search_type_options.filter(
    (item) => item.default
  );

  const {
    register,
    unregister,
    handleSubmit,
    watch,
    formState,
    setValue,
    setFocus,
    getValues,
    getFieldState,
  }: any = useForm({
    resolver: yupResolver(Homepage_Search_Validation_Scheme),
    defaultValues: {
      [component_constants.select_input_name]:
        starter_selected_search_type.value,
      [component_constants.search_input_name]: "",
    },
  });

  const handleFormSubmit = async (form_data: any, event: any) => {
    //event.preventDefault();
    console.log(form_data);
  };
  const handleFormError = async (form_errors: any, event: any) => {
    //event.preventDefault();
    console.log(form_errors);
  };

  useEffect(() => {
    const subscription = watch((data: any) => {
      if (data.search_type != current_selected_type?.key) {
        const [new_selected_search_type] = select_search_type_options.filter(
          (item: ISearch_Type_Option) => item.value == data.search_type
        );
        set_current_selected_type(new_selected_search_type);
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  return (
    <>
      <div id="elem1" className={component_classes.header_search_form_classes1}>
        <form
          onSubmit={handleSubmit(handleFormSubmit, handleFormError)}
          className={component_classes.header_search_form_classes2}
        >
          <select
            className={`${component_styles.select_input} ${component_classes.header_search_form_classes3}`}
            {...register(component_constants.select_input_name, {})}
            defaultValue={starter_selected_search_type.value}
          >
            {select_search_type_options.map((item: ISearch_Type_Option) => (
              <option
                className={`${component_styles.option}`}
                key={item.id}
                value={item.value}
              >
                {item.key}
              </option>
            ))}
          </select>
          <Custom_Text_Input
            placeholder={current_selected_type?.placeholder}
            className={`${component_styles.text_input} ${component_classes.header_search_form_classes4}`}
            attributes={register(component_constants.search_input_name)}
          />
          <Custom_Submit_Button
            className={component_classes.header_search_form_classes5}
          >
            <FontAwesomeIcon
              style={{
                height: "1.2rem",
              }}
              className={`${component_classes.header_search_form_classes6}`}
              icon={faMagnifyingGlass}
            />
          </Custom_Submit_Button>
        </form>
        <p
          className={`${component_classes.header_search_form_classes7} text-red-600 text-center font-extrabold`}
        >
          {formState.errors?.search_type?.message ||
          formState.errors?.search_text?.message ? (
            <span>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              &nbsp;
              {formState.errors?.search_type?.message ||
                formState.errors?.search_text?.message}
            </span>
          ) : (
            <span>&nbsp;</span>
          )}
        </p>
      </div>
    </>
  );
}
