import styles from './styles.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../libs/hooks/hooks';
import { Input, Loader } from '../../../../libs/components/components';
import { getCartsState } from '../../../../slices/cart/cart';
import { actions as orderActionCreator } from '../../../../slices/order/order';
import { actions as appActionCreator } from '../../../../slices/app/app';
import {
  NotificationMessage,
  NotificationType,
} from '../../../../libs/packages/notification/libs/enums/enums';

type UserFormType = {
  username: string;
  email: string;
  phone: string;
  address: string;
};

const UserForm = () => {
  const cartItems = useAppSelector((state) => getCartsState(state));
  const dispatch = useAppDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<UserFormType>({
    username: '',
    email: '',
    phone: '',
    address: '',
  });

  const setEmail = (value: string) => {
    setFormData({ ...formData, email: value });
  };

  const setAddress = (value: string) => {
    setFormData({ ...formData, address: value });
  };

  const setPhone = (value: string) => {
    setFormData({ ...formData, phone: value });
  };

  const setUsername = (value: string) => {
    setFormData({ ...formData, username: value });
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
  };
  const handlePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };
  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const resetState = () => {
    setEmail('');
    setPhone('');
    setUsername('');
    setAddress('');
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if ((event.target as HTMLFormElement).checkValidity()) {
      const dataArray = cartItems.map((item) => ({
        medicine_Id: item.id,
        quantity: item.quantity,
      }));

      if (!dataArray.length) {
        void dispatch(
          appActionCreator.notify({
            message: NotificationMessage.CART_IS_EMPTY,
            type: NotificationType.ERROR,
          })
        );
      }

      if (dataArray.length) {
        setIsLoading(true);
        void dispatch(
          orderActionCreator.createOrder({
            user: {
              address: formData.address,
              email: formData.email,
              phone: formData.phone,
              username: formData.username,
            },
            order_items: dataArray,
          })
        )
          .unwrap()
          .then(() => {
            void dispatch(
              appActionCreator.notify({
                message: NotificationMessage.ORDER_HAS_BEEN_CREATED,
                type: NotificationType.SUCCESS,
              })
            );
          })
          .catch(() => {
            void dispatch(
              appActionCreator.notify({
                message: NotificationMessage.CREATE_ORDER_FAILED,
                type: NotificationType.ERROR,
              })
            );
          })
          .finally(() => {
            resetState();
            setIsLoading(false);
          });
      }
    }
  };

  return (
    <main className={styles['user-form-main']}>
      <form
        className={styles['user-form']}
        autoComplete='off'
        onSubmit={onSubmit}
      >
        <Input
          value={formData.username}
          label='Full name'
          name='full-name'
          type='text'
          onChange={handleUsername}
        />
        <Input
          value={formData.email}
          label='Email'
          name='email'
          type='email'
          onChange={handleEmail}
        />
        <Input
          value={formData.phone}
          label='Phone'
          name='phone'
          type='text'
          onChange={handlePhone}
          attributes={{
            minLength: '10',
            maxLength: '10',
          }}
        />
        <Input
          value={formData.address}
          label='Address'
          name='address'
          type='text'
          onChange={handleAddress}
          attributes={{
            minLength: '3',
            maxLength: '50',
          }}
        />

        <button disabled={isLoading} type='submit'>
          {isLoading ? <Loader /> : <>Submit</>}
        </button>
      </form>
    </main>
  );
};

export { UserForm };
