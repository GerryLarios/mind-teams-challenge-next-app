import { useState, useCallback, useRef } from 'react';
import { UseProviderResult } from '@/types';

type UseProviderOptions<TResult> = {
  onComplete?(data: TResult): void;
  onError?(error?: unknown): void;
};

export default function useProvider<TArgs extends unknown[], TResult>(
  provider: (...args: TArgs) => Promise<TResult>,
  options?: UseProviderOptions<TResult>,
): [(...args: TArgs) => Promise<void>, UseProviderResult<TResult>] {
  const [result, setResult] = useState<UseProviderResult<TResult>>({
    called: false,
    data: undefined,
    error: undefined,
    loading: false,
  });

  const lastCallToken = useRef<Record<string, unknown>>();

  const onComplete = options?.onComplete;
  const onError = options?.onError;

  const callback = async (...args: TArgs) => {
    const callToken = {};
    lastCallToken.current = callToken;

    setResult({ called: true, loading: true, data: undefined, error: undefined });

    let data: TResult | undefined = undefined;
    let error: unknown;
    try {
      data = await provider(...args);
    } catch (err) {
      error = err;
    }

    // only process the result of the most recent call
    if (callToken !== lastCallToken.current) {
      return;
    }

    if (error) {
      onError?.(error);
    } else {
      onComplete?.(data as TResult);
    }

    setResult((prev) => ({ ...prev, data, error, loading: false }));
  };

  const runProvider = useCallback(callback, [onError, onComplete, provider]);

  return [runProvider, result];
}
