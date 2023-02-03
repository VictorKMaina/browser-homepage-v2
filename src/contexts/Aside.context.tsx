import { createContext, PropsWithChildren, Dispatch, useContext } from "react";

export const AsideContext = createContext(
  [] as unknown as [boolean, Dispatch<React.SetStateAction<boolean>>]
);

export function useAside(): [boolean, () => void] {
  const [asideOpen, setAsideOpen] = useContext(AsideContext);

  function toggleAside() {
    setAsideOpen((prevAsideOpen) => !prevAsideOpen);
  }

  return [asideOpen, toggleAside];
}

type AsideProviderProps = {
  value: [boolean, Dispatch<React.SetStateAction<boolean>>];
} & PropsWithChildren;

export function AsideProvider({ value, children }: AsideProviderProps) {
  return (
    <AsideContext.Provider value={value}>{children}</AsideContext.Provider>
  );
}
