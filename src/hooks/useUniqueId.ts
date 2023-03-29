import { nanoid } from 'nanoid';
import { useState } from 'react';

export default function useUniqueId() {
  const [id] = useState(nanoid());

  return id;
}
