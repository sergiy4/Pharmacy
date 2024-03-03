import { HttpOptions } from './http-options.type';

type HttpApi = {
  load<T>(url: string, options: Partial<HttpOptions>): Promise<T> | never;
};

export { type HttpApi };
