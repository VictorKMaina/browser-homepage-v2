import { createContext, PropsWithChildren, Dispatch, useContext, useState } from "react";

export const AsideContext = createContext(
  [] as unknown as [boolean, Dispatch<React.SetStateAction<boolean>>]
);

export function AsideProvider({ children }: PropsWithChildren) {
  const asideState = useState(false)

  return (
    <AsideContext.Provider value={asideState}>{children}</AsideContext.Provider>
  );
}

export function useAside(): [boolean, () => void] {
  const [asideOpen, setAsideOpen] = useContext(AsideContext);

  function toggleAside() {
    setAsideOpen((prevAsideOpen) => !prevAsideOpen);
  }

  return [asideOpen, toggleAside];
}

