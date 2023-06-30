import React, {
  createContext,
  useReducer,
  useMemo,
  Dispatch,
  Reducer,
  useContext,
} from "react";
import { ActionProps } from "./actions/types";
import { StateProps } from "./types";
import stateReducer from "./reducers";

export * from "./actions";
export * from "./reducers";
export * from "./types";

export const initialStoreState = {
  me: null,
  data: {},
  loading: false,
  modal: {},
};

export const AppStateContext = createContext<
  [StateProps, Dispatch<ActionProps>]
>([initialStoreState, () => {}]);

export const useAppContext = () =>
  useContext<[StateProps, Dispatch<ActionProps>]>(AppStateContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<Reducer<StateProps, ActionProps>>(
    stateReducer,
    initialStoreState
  );

  const store = useMemo(
    (): [StateProps, Dispatch<ActionProps>] => [state, dispatch],
    [state]
  );

  return (
    <AppStateContext.Provider value={store}>
      {children}
    </AppStateContext.Provider>
  );
};
