import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

export default function useGlobalData() {
  return useContext(GlobalContext);
}