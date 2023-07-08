"use client";

import { Homepage_Search_Validation_Scheme } from "@/validations/homepage_search_validation_scheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import component_styles from "./header_search_form.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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

const header_search_form_classes1 = "flex flex-col h-full gap-y-1";
const header_search_form_classes2 = "flex items-end justify-center h-full";
const header_search_form_classes3 =
  "text-xs h-10 rounded-l-md p-0 pl-2 pr-8 m-0 outline-none";
const header_search_form_classes4 =
  "h-10 grow p-0 px-2 m-0 text-xs outline-none";
const header_search_form_classes5 = "h-10 bg-white p-2";
const header_search_form_classes6 = "h-full max-h-full";
const header_search_form_classes7 = "text-xs p-0 m-0";
const select_input_name = "search_type";
const search_input_name = "search_text";

export default function Header_Search_Form(): JSX.Element {
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
      [select_input_name]: starter_selected_search_type.value,
      [search_input_name]: "",
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
      <div className={header_search_form_classes1}>
        <form
          onSubmit={handleSubmit(handleFormSubmit, handleFormError)}
          className={header_search_form_classes2}
        >
          <select
            className={`${component_styles.select_input} ${header_search_form_classes3}`}
            {...register(select_input_name, {})}
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
          <input
            className={`${component_styles.text_input} ${header_search_form_classes4}`}
            {...register(search_input_name)}
            type="text"
            placeholder={current_selected_type?.placeholder ?? ""}
          />
          <button className={header_search_form_classes5} type="submit">
            <FontAwesomeIcon
              className={header_search_form_classes6}
              icon={faMagnifyingGlass}
            />
          </button>
        </form>
        <p className={header_search_form_classes7}>
          {(formState.errors?.search_type?.message ||
            formState.errors?.search_text?.message) ?? <span>&nbsp;</span>}
        </p>
      </div>
    </>
  );
}
