import { useContext } from "react";

import { LoaderContext } from "./LoaderContex";

export const useLoader = () => {
  return useContext(LoaderContext);
};
