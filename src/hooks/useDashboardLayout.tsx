import { useContext } from 'react';
import { DashboardLayoutContext } from '@/context';

export default function useDashboardLayout() {
  return useContext(DashboardLayoutContext);
}
