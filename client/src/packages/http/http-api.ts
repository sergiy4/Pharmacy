import { HttpMethod, HttpHeader, HttpCode } from '../../libs/enums/enums.js';
import { HttpError } from '../../libs/exception/exceptions.js';
import { type ValueOf } from '../../libs/types/types.js';
import { type HttpApi, type HttpOptions } from './libs/types/types.js';

class Http implements HttpApi {
  public async load<T>(
    url: string,
    options: Partial<HttpOptions> = {}
  ): Promise<T> | never {
    const { method = HttpMethod.GET, payload = null, contentType } = options;
    const headers = this.#getHeaders({
      contentType,
    });

    return await fetch(url, {
      method,
      headers,
      body: payload,
    })
      .then(this.#checkStatus)
      .then<T>(this.#parseJSON)
      .catch(this.#throwError);
  }

  #getHeaders({
    contentType,
  }: Partial<Pick<HttpOptions, 'contentType'>>): Headers {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    return headers;
  }

  #checkStatus = async (response: Response): Promise<Response> => {
    if (!response.ok) {
      const parsedException = (await response.json().catch(() => ({
        message: response.statusText,
      }))) as Record<'message', string>;

      throw new HttpError({
        status: response.status as ValueOf<typeof HttpCode>,
        message: parsedException?.message,
      });
    }

    return response;
  };

  #parseJSON = <T>(response: Response): Promise<T> => {
    return response.json() as Promise<T>;
  };

  #throwError = (error: Error): never => {
    throw error;
  };
}

export { Http };
