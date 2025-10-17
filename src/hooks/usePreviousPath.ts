import { PreviousPathContext } from '@/context/PreviousPathContext';
import { useContext } from 'react';

export default function usePreviousPath() {
  return useContext(PreviousPathContext);
}
