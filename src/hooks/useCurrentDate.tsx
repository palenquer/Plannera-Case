import { createContext, useState, ReactNode, useContext } from "react";

interface CurrentDate {
  month: number;
  year: number;
}

interface CurrentDateInput {
  month: number;
  year: number;
}

interface CurrentDateProviderProps {
  children: ReactNode;
}

interface CurrentDateContextData {
  currentDate: CurrentDate;
  updateCurrentDate: (CurrentDateInput: CurrentDateInput) => void;
}

export const CurrentDateContext = createContext<CurrentDateContextData>(
  {} as CurrentDateContextData
);

export function CurrentDateProvider({ children }: CurrentDateProviderProps) {
  const [currentDate, setCurrentDate] = useState<CurrentDate>();

  function updateCurrentDate(CurrentDateInput: CurrentDateInput) {
    setCurrentDate(CurrentDateInput);
  }

  return (
    <CurrentDateContext.Provider value={{ currentDate, updateCurrentDate }}>
      {children}
    </CurrentDateContext.Provider>
  );
}

export function useCurrentDate() {
  const context = useContext(CurrentDateContext);
  return context;
}
