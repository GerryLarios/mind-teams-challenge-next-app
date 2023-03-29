import { useContext } from 'react';
import { AlertsContext } from '@/context';

export default function useAlert() {
  return useContext(AlertsContext);
}
