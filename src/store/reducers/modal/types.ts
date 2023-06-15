export type ModalActionProps =
  | SetModalItemActionProps
  | SetModalDataActionProps;

export interface SetModalItemActionProps {
  type: "SET_MODAL_ITEM";
  payload: { name: string; value: boolean };
}

export interface SetModalDataActionProps {
  type: "SET_MODAL_DATA";
  payload: { [key: string]: boolean };
}
