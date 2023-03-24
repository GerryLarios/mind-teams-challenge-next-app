import axios, { Method } from 'axios';
import FriendlyError from '@/utils/FriendlyError';
import { getAuthToken } from '@/utils';

type Request<TBody, TQuery extends Record<string, string>> = {
  method: Method;
  endpoint: string;
  query?: TQuery;
  body?: TBody;
};

export default class RequestSender {
  get<TQuery extends Record<string, string>>(endpoint: string, query?: TQuery) {
    return this.request({ method: 'GET', endpoint, query });
  }

  delete<TQuery extends Record<string, string>>(endpoint: string, query?: TQuery) {
    return this.request({ method: 'DELETE', endpoint, query });
  }

  post<TBody>(endpoint: string, body?: TBody) {
    return this.request({ method: 'POST', endpoint, body });
  }

  patch<TBody>(endpoint: string, body?: TBody) {
    return this.request({ method: 'PATCH', endpoint, body });
  }

  private async request<TBody, TQuery extends Record<string, string>>({
    method,
    endpoint,
    body,
    query,
  }: Request<TBody, TQuery>) {
    const queryUrl = query ? new URLSearchParams(query).toString() : null;
    const queryStr = queryUrl ? `?${queryUrl}` : '';
    const token = getAuthToken();

    try {
      return await axios.request({
        method,
        url: `${endpoint}${queryStr}`,
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        data: body,
      });
    } catch (err) {
      const errorMessage = axios.isAxiosError(err) ? (err.response?.data?.error as string) : null;
      throw typeof errorMessage === 'string' ? new FriendlyError(errorMessage) : err;
    }
  }
}

export async function createDeleteProvider(endpoint: string) {
  const result = await new RequestSender().delete(endpoint);

  return result.data;
}

export async function createGetProvider<TQuery extends Record<string, string>>(
  endpoint: string,
  query?: TQuery,
) {
  const result = await new RequestSender().get(endpoint, query);

  return result?.data;
}

export async function createPatchProvider<TPayload>(endpoint: string, payload: TPayload) {
  const result = await new RequestSender().patch(endpoint, payload);

  return result?.data;
}

export async function createPostProvider<TPayload>(endpoint: string, payload: TPayload) {
  const result = await new RequestSender().post(endpoint, payload);

  return result?.data;
}
