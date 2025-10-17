import { useRouter } from 'next/router';
import React, { createContext, useState } from 'react';
import { useMount } from '@/hooks';

const rootPath = '/';

/**
 * This context provides a function that safely sends the user to the previous visited route
 * If the current page was directly accessed using a link, the context's function sends the user to its initial page
 */
export const PreviousPathContext = createContext<string>(rootPath);

const currentPathKey = 'currentPath';
const prevPathKey = 'prevPath';

export const PreviousPathProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const [previousPath, setPrevPath] = useState<string | null>();

  useMount(() => {
    setPrevPath(window.sessionStorage.getItem(prevPathKey));

    const refreshPrevAndCurrentPath = (path: string) => {
      const storage = window.sessionStorage;

      // Backup currentPath in prevPath key
      const prevPath = storage.getItem(currentPathKey);
      if (prevPath && prevPath !== path) {
        storage.setItem(prevPathKey, prevPath);
        setPrevPath(prevPath);
      }

      // Update currentPath
      storage.setItem(currentPathKey, path);
    };

    router.events.on('routeChangeComplete', refreshPrevAndCurrentPath);

    return () => router.events.off('routeChangeComplete', refreshPrevAndCurrentPath);
  });

  return (
    <PreviousPathContext.Provider value={previousPath || rootPath}>
      {children}
    </PreviousPathContext.Provider>
  );
};
