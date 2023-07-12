import { Dispatch } from "react";
import component_styles from "./login_modal.module.css";

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

export default function Login_Modal(
  props: IComponent_Props
): JSX.Element | undefined {
  return (
    <div
      className={`${component_styles.modal_container1} ${
        props.is_login_modal_active ? component_styles.show_modal1 : null
      }`}
      onClick={() => {
        props.dispatch_close_login_modal({
          type: Reducer_Action_Enum.DEACTIVATE_LOGIN_MODAL,
        });
      }}
    >
      <span
        className={`${component_styles.modal1} ${
          props.is_login_modal_active ? component_styles.show_modal1 : null
        } w-3/5`}
      >
        Login modal works!
      </span>
    </div>
  );
}
