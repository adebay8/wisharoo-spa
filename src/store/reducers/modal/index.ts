import { StateProps } from "../../types";
import { ModalActionProps } from "./types";

export const modalReducer = (state: StateProps, action: ModalActionProps) => {
  switch (action.type) {
    case "SET_MODAL_ITEM":
      return {
        ...state,
        modal: {
          ...state.modal,
          [action.payload.name]: action.payload.value,
        },
      };
    case "SET_MODAL_DATA":
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};
