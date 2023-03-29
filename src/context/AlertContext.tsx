import React, { createContext, useCallback, useState } from 'react';
import { AlertColor } from '@mui/material';
import Toast from '@/components/Toast';

type Alert = {
  message: string;
  severity?: AlertColor;
};

type AlertContextValue = {
  showAlert: (alert: Alert) => void;
};

export const AlertsContext = createContext<AlertContextValue>({ showAlert: () => undefined });

type AlertsProviderProps = {
  children?: React.ReactNode;
};

export const AlertsProvider: React.FC<AlertsProviderProps> = ({ children }) => {
  const [alert, setAlert] = useState<Alert | undefined>(undefined);

  const showAlert = useCallback((a: Alert) => setAlert(a), [setAlert]);

  return (
    <AlertsContext.Provider value={{ showAlert }}>
      {alert && (
        <Toast open severity={alert?.severity ?? 'success'} onClose={() => setAlert(undefined)}>
          {alert.message}
        </Toast>
      )}
      {children}
    </AlertsContext.Provider>
  );
};
