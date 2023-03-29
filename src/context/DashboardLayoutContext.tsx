import React, { createContext, useCallback, useMemo, useState } from 'react';

type DashboardLayoutContextValue = {
  isOpen: boolean;
  toggleIsOpen: () => void;
};

export const DashboardLayoutContext = createContext<DashboardLayoutContextValue>({
  isOpen: false,
  toggleIsOpen: () => undefined,
});

export const DashboardLayoutProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = useCallback(() => setIsOpen((v) => !v), [setIsOpen]);

  const value = useMemo<DashboardLayoutContextValue>(
    () => ({ isOpen, toggleIsOpen }),
    [isOpen, toggleIsOpen],
  );

  return (
    <DashboardLayoutContext.Provider value={value}>{children}</DashboardLayoutContext.Provider>
  );
};
