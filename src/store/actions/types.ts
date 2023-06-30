import { RootActionProps } from "../reducers/root/types";
import { ModalActionProps } from "../reducers/modal/types";

export type ActionProps = RootActionProps | ModalActionProps;
