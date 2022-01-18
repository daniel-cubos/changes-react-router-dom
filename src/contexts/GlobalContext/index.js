import { createContext } from "react";
import useGlobalDataProvider from '../../hooks/userGlobalDataProvider';

const GlobalContext = createContext({});

export function GlobalProvider(props) {
  const globalProvider = useGlobalDataProvider();

  return (
    <GlobalContext.Provider value={globalProvider}>
      {props.children}
    </GlobalContext.Provider>
  );
}


export default GlobalContext;

