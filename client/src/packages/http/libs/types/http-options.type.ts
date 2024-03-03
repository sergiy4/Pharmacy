import { ValueOf } from '../../../../libs/types/types';
import { HttpMethod, ContentType } from '../../../../libs/enums/enums';

type HttpOptions = {
  method: ValueOf<typeof HttpMethod>;
  payload: BodyInit | null;
  headers: Headers;
  hasAuth: boolean;
  query: Record<string, unknown>;
  contentType?: ValueOf<typeof ContentType> | undefined;
};

export { type HttpOptions };
