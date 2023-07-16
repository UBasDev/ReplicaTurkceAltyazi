import { Dispatch, useRef } from "react";
import component_styles from "./login_modal.module.css";
import Use_Click_Outside_Custom_Hook from "@/custom_hooks/use_click_outside_custom_hook";
import Use_Event_Listener from "@/custom_hooks/use_event_listener";
import Login_Modal_Form from "./login_modal_form/login_modal_form";
import dynamic from "next/dynamic";
import dynamic from "next/dynamic";

enum Reducer_Action_Enum {
  CHANGE_CURRENT_ACTIVE_NAV_ITEM = "CHANGE_CURRENT_ACTIVE_NAV_ITEM",
  ACTIVATE_LOGIN_MODAL = "ACTIVATE_LOGIN_MODAL",
  DEACTIVATE_LOGIN_MODAL = "DEACTIVATE_LOGIN_MODAL",
}

interface IReducer_Action {
  type: Reducer_Action_Enum;
}

interface IComponent_Props {
  children?: any;
  is_login_modal_active: boolean;
  dispatch_close_login_modal: Dispatch<IReducer_Action>;
}

const Login_Modal = (props: IComponent_Props): JSX.Element => {
  const element_ref_to_listen_outside_click: any = useRef();
  Use_Click_Outside_Custom_Hook(element_ref_to_listen_outside_click, () =>
    props.is_login_modal_active
      ? props.dispatch_close_login_modal({
          type: Reducer_Action_Enum.DEACTIVATE_LOGIN_MODAL,
        })
      : null
  );

  Use_Event_Listener(`keydown`, (e: any) => {
    props.is_login_modal_active && e.key === "Escape"
      ? props.dispatch_close_login_modal({
          type: Reducer_Action_Enum.DEACTIVATE_LOGIN_MODAL,
        })
      : null;
  });

  return (
    <div
      className={`${component_styles.login_modal_container} ${
        props.is_login_modal_active ? component_styles.show_login_modal : null
      }`}
    >
      <div
        ref={element_ref_to_listen_outside_click}
        className={`${component_styles.login_modal_body} ${
          props.is_login_modal_active ? component_styles.show_login_modal : null
        } w-3/5`}
      >
        <Login_Modal_Form />
      </div>
    </div>
  );
};
export default dynamic(() => Promise.resolve(Login_Modal), {
  ssr: false,
});
