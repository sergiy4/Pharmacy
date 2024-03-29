import { ValueOf } from '../../../../types/types.js';
import { type NotificationType } from '../enums/enums.js';

type NotificationPayload = {
  type: ValueOf<typeof NotificationType>;
  message: string;
};

export { type NotificationPayload };
