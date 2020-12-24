import * as R from "react";
import * as RD from "react-dom";
import * as Lodash from "lodash";

declare global {
  type _ = typeof Lodash;
  type React = typeof R;
  type ReactDOM = typeof RD;
}