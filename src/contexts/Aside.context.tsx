import { createContext, PropsWithChildren, Dispatch } from "react";

export const AsideContext = createContext(
  [] as unknown as [boolean, Dispatch<React.SetStateAction<boolean>>]
);

type AsideProviderProps = {
  value: [boolean, Dispatch<React.SetStateAction<boolean>>];
} & PropsWithChildren;

export function AsideProvider({ value, children }: AsideProviderProps) {
  return (
    <AsideContext.Provider value={value}>{children}</AsideContext.Provider>
  );
}
