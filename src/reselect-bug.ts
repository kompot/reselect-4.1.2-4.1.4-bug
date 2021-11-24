import { createSelector } from "reselect";

type IReduxState = {
  ui: {
    x: string;
    y: string;
  };
};

const someSelector1 = createSelector(
  (state: IReduxState, param: "x" | "y" | undefined) =>
    param !== undefined ? state.ui[param] : null,
  (a: string | null) => a
);

const someSelector2 = createSelector(
  (state: IReduxState, param?: "x" | "y") =>
    param !== undefined ? state.ui[param] : null,
  (a: string | null) => a
);

const state = { ui: { x: "1", y: "2" } };

const selectorResult1 = someSelector1(state, undefined);
const selectorResult2 = someSelector2(state, undefined);
