import { createAsyncThunk } from '@reduxjs/toolkit';

import { ActionType } from './common.js';
import { type NotificationPayload } from '../../libs/packages/notification/notification.js';
import { type AsyncThunkConfig } from '../../libs/types/types.js';

const notify = createAsyncThunk<null, NotificationPayload, AsyncThunkConfig>(
  ActionType.NOTIFY,
  (payload, { extra }) => {
    const { notificationApi } = extra;
    const { type, message } = payload;

    notificationApi[type](message);

    return null;
  }
);

export { notify };
