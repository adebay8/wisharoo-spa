import {
  SetModalDataActionProps,
  SetModalItemActionProps,
} from "../reducers/modal/types";

export const actionSetModalItem = (
  payload: SetModalItemActionProps["payload"]
): SetModalItemActionProps => ({
  type: "SET_MODAL_ITEM",
  payload,
});

export const actionSetModalData = (
  payload: SetModalDataActionProps["payload"]
): SetModalDataActionProps => ({
  type: "SET_MODAL_DATA",
  payload,
});
