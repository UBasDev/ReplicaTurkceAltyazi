"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import component_styles from "./header_navigation.module.css";
import Link from "next/link";
import { useEffect, useReducer } from "react";
import Login_Modal from "@/components/modals/login_modal/login_modal";

enum Reducer_Action_Enum {
  CHANGE_CURRENT_ACTIVE_NAV_ITEM = "CHANGE_CURRENT_ACTIVE_NAV_ITEM",
  ACTIVATE_LOGIN_MODAL = "ACTIVATE_LOGIN_MODAL",
  DEACTIVATE_LOGIN_MODAL = "DEACTIVATE_LOGIN_MODAL",
}

interface IReducer_Action {
  type: Reducer_Action_Enum;
  payload?: INavItem | any;
}

interface IReducer {
  current_active_tab: INavItem;
  is_login_modal_active: boolean;
}

const component_reducer_initial_state: IReducer = {
  current_active_tab: {
    id: 0,
    main_item_key: "",
    main_item_value: "",
    anchor_path: "",
    sub_items: [],
  },
  is_login_modal_active: false,
};

const component_reducer = (state: IReducer, action: IReducer_Action) => {
  switch (action.type) {
    case Reducer_Action_Enum.CHANGE_CURRENT_ACTIVE_NAV_ITEM:
      return {
        ...state,
        current_active_tab: action.payload,
      };
    case Reducer_Action_Enum.ACTIVATE_LOGIN_MODAL:
      return {
        ...state,
        is_login_modal_active: true,
      };
    case Reducer_Action_Enum.DEACTIVATE_LOGIN_MODAL:
      return {
        ...state,
        is_login_modal_active: false,
      };
    default:
      return state;
  }
};

interface ISubItem {
  id: number;
  sub_item_key: string;
  sub_item_value: string;
}

interface INavItem {
  id: number;
  main_item_key: string;
  main_item_value: string;
  anchor_path: string;
  sub_items: ReadonlyArray<ISubItem>;
}

interface IAuthButton {
  id: number;
  button_key: string;
  button_value: string;
  anchor_path: string;
}

const nav_items: ReadonlyArray<INavItem> = [
  {
    id: 1,
    main_item_key: "Homepage",
    main_item_value: "Homepage",
    anchor_path: "/home",
    sub_items: [
      {
        id: 1,
        sub_item_key: "TA 250 Movie",
        sub_item_value: "TA_250_Movie",
      },
      {
        id: 2,
        sub_item_key: "IMDB 250",
        sub_item_value: "IMDB_250",
      },
      {
        id: 3,
        sub_item_key: "1001 Movie",
        sub_item_value: "1001_Movie",
      },
      {
        id: 4,
        sub_item_key: "New Released",
        sub_item_value: "New_Released",
      },
      {
        id: 5,
        sub_item_key: "Expected",
        sub_item_value: "Expected",
      },
      {
        id: 6,
        sub_item_key: "Advanced Movie Search",
        sub_item_value: "Advanced_Movie_Search",
      },
      {
        id: 7,
        sub_item_key: "Series Schedule",
        sub_item_value: "Series_Schedule",
      },
      {
        id: 8,
        sub_item_key: "Groups",
        sub_item_value: "Groups",
      },
    ],
  },
  {
    id: 2,
    main_item_key: "Forum",
    main_item_value: "Forum",
    anchor_path: "/forum",
    sub_items: [
      {
        id: 1,
        sub_item_key: "Search In Forum",
        sub_item_value: "Search_In_Forum",
      },
      {
        id: 2,
        sub_item_key: "Translate Announcements",
        sub_item_value: "Translate_Announcements",
      },
      {
        id: 3,
        sub_item_key: "User Groups",
        sub_item_value: "User_Groups",
      },
    ],
  },
  {
    id: 3,
    main_item_key: "Subtitle",
    main_item_value: "Subtitle",
    anchor_path: "/subtitles",
    sub_items: [
      {
        id: 1,
        sub_item_key: "New Released",
        sub_item_value: "New_Released",
      },
      {
        id: 2,
        sub_item_key: "Expected",
        sub_item_value: "Expected",
      },
      {
        id: 3,
        sub_item_key: "Last 100 Subtitles",
        sub_item_value: "Last_100_Subtitles",
      },
      {
        id: 4,
        sub_item_key: "Top 100 Subtitles",
        sub_item_value: "Top_100_Subtitles",
      },
      {
        id: 5,
        sub_item_key: "Search Subtitle",
        sub_item_value: "Search_Subtitle",
      },
    ],
  },
  {
    id: 4,
    main_item_key: "Movies",
    main_item_value: "Movies",
    anchor_path: "/movies",
    sub_items: [
      {
        id: 1,
        sub_item_key: "TA 250 Movie List",
        sub_item_value: "TA_250_Movie_List",
      },
      {
        id: 2,
        sub_item_key: "IMDB 250 Movie List",
        sub_item_value: "IMDB_250_Movie_List",
      },
      {
        id: 3,
        sub_item_key: "1001 Movie",
        sub_item_value: "1001_Movie",
      },
      {
        id: 4,
        sub_item_key: "Advanced Movie Search",
        sub_item_value: "Advanced_Movie_Search",
      },
      {
        id: 5,
        sub_item_key: "Soon",
        sub_item_value: "Soon",
      },
    ],
  },
  {
    id: 5,
    main_item_key: "Series",
    main_item_value: "Series",
    anchor_path: "/series",
    sub_items: [
      {
        id: 1,
        sub_item_key: "Series Schedule",
        sub_item_value: "Series_Schedule",
      },
      {
        id: 2,
        sub_item_key: "TA 50 Series List",
        sub_item_value: "TA_50_Series_List",
      },
      {
        id: 3,
        sub_item_key: "IMDB 250 Series List",
        sub_item_value: "IMDB_250_Series_List",
      },
    ],
  },
  {
    id: 6,
    main_item_key: "News",
    main_item_value: "News",
    anchor_path: "/news",
    sub_items: [
      {
        id: 1,
        sub_item_key: "Cinema",
        sub_item_value: "Cinema",
      },
      {
        id: 2,
        sub_item_key: "Series",
        sub_item_value: "Series",
      },
      {
        id: 3,
        sub_item_key: "Movie Reviews",
        sub_item_value: "Movie_Reviews",
      },
      {
        id: 4,
        sub_item_key: "Special Files",
        sub_item_value: "Special_Files",
      },
    ],
  },
  {
    id: 7,
    main_item_key: "Lists",
    main_item_value: "Lists",
    anchor_path: "/lists",
    sub_items: [
      {
        id: 1,
        sub_item_key: "Movie Lists",
        sub_item_value: "Film_Lists",
      },
      {
        id: 2,
        sub_item_key: "User Lists",
        sub_item_value: "User_Lists",
      },
    ],
  },
  {
    id: 8,
    main_item_key: "Synchronizer",
    main_item_value: "Synchronizer",
    anchor_path: "/synchronizer",
    sub_items: [],
  },
  {
    id: 9,
    main_item_key: "Send Subtitle",
    main_item_value: "Subtitle_Send",
    anchor_path: "/send_subtitles",
    sub_items: [],
  },
  {
    id: 10,
    main_item_key: "Random movie",
    main_item_value: "Random_Movie",
    anchor_path: "/random_movie",
    sub_items: [],
  },
];

const auth_buttons: ReadonlyArray<IAuthButton> = [
  {
    id: 1,
    button_key: "Register",
    button_value: "Register",
    anchor_path: "/register",
  },
  {
    id: 2,
    button_key: "Login",
    button_value: "Login",
    anchor_path: "",
  },
];

export default function Header_Navigation(): JSX.Element {
  const [reducer_state, reducer_dispatch] = useReducer(
    component_reducer,
    component_reducer_initial_state
  );

  useEffect(() => {
    reducer_dispatch({
      type: Reducer_Action_Enum.CHANGE_CURRENT_ACTIVE_NAV_ITEM,
      payload: nav_items[0],
    });
  }, []);

  return (
    <>
      <div className="grid grid-cols-24 gap-0 text-white pt-2 px-0.5">
        <div className="col-span-21 xl:col-span-20 2xl:col-span-20 flex items-center justify-start gap-x-1">
          {nav_items.map((item: INavItem) => (
            <Link
              as={item.anchor_path ?? {}}
              key={item.id}
              href={item.anchor_path ?? {}}
            >
              <div
                onMouseEnter={() =>
                  reducer_dispatch({
                    type: Reducer_Action_Enum.CHANGE_CURRENT_ACTIVE_NAV_ITEM,
                    payload: item,
                  })
                }
                className={`${component_styles.main_nav_item_hover} flex items-center justify-center gap-x-1 lg:px-2.5 xl:px-5 2xl:px-7 3xl:px-10 py-1 rounded-t-md`}
              >
                <span>{item.main_item_key}</span>{" "}
                {item.sub_items.length > 0 ? (
                  <FontAwesomeIcon
                    style={{ height: "8px", width: "8px" }}
                    icon={faChevronDown}
                  />
                ) : null}
              </div>
            </Link>
          ))}
        </div>
        <div className="col-span-1 3xl:col-span-1"></div>
        <div className="col-span-2 xl:col-span-3 3xl:col-span-3 flex items-center justify-end gap-x-1">
          {auth_buttons.map((item: IAuthButton) => (
            <Link
              key={item.id}
              as={item.anchor_path ?? {}}
              href={item.anchor_path ?? {}}
            >
              <div
                onClick={(event: any) => {
                  if (item.button_value === "Login")
                    reducer_dispatch({
                      type: Reducer_Action_Enum.ACTIVATE_LOGIN_MODAL,
                    });

                  /*
                  document
                    .getElementById("item1")
                    ?.classList.add("show_modal1");
                    */
                }}
                className={`${component_styles.main_nav_button_hover} rounded-md lg:px-2 xl:px-5 2xl:px-7 3xl:px-10 py-1`}
              >
                <button>{item.button_key}</button>
              </div>
            </Link>
          ))}
        </div>
        <div
          style={{ color: "#1E8AC2", backgroundColor: "#EBF3F9" }}
          className="col-span-24 flex items-center justify-start gap-x-1"
        >
          {(reducer_state.current_active_tab as INavItem).sub_items.length >
          0 ? (
            (reducer_state.current_active_tab as INavItem).sub_items.map(
              (current_sub_item: ISubItem) => (
                <span
                  key={current_sub_item.id}
                  className={`${component_styles.sub_nav_item_hover} lg:px-2.5 xl:px-5 2xl:px-7 3xl:px-10`}
                >
                  {current_sub_item.sub_item_key}
                </span>
              )
            )
          ) : (
            <span>&nbsp;</span>
          )}
        </div>
      </div>
      <Login_Modal
        dispatch_close_login_modal={reducer_dispatch}
        is_login_modal_active={reducer_state.is_login_modal_active}
      />
    </>
  );
}
