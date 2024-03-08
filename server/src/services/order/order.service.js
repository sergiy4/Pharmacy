import { HttpCode } from '../../libs/enums/enums.js';
import { CustomError } from '../../libs/exception/custom-exception.js';

class Order {
  #orderRepository;
  #orderItemRepository;

  constructor({ orderRepository, orderItemRepository, medicineRepository }) {
    this.#orderRepository = orderRepository;
    this.#orderItemRepository = orderItemRepository;
  }

  async createOrder(orderData) {
    try {
      const { user, order_items: orderItems } = orderData;

      const createdOrderItem = await this.#orderItemRepository.create(user);

      const orders = await Promise.all(
        orderItems.map((item) => {
          return this.#orderRepository.create({
            order_id: createdOrderItem.id,
            medicine_id: item.medicine_Id,
            quantity: item.quantity,
          });
        })
      );

      return orders;
    } catch (err) {
      throw new CustomError({
        message: err.detail,
        statusCode: HttpCode.BAD_REQUEST,
      });
    }
  }

  async getOrdersByEmail(email) {
    try {
      if (email) {
        const iDs = await this.#orderItemRepository.searchOrderItemsByEmail(
          email
        );

        const orders = await this.#orderRepository.getOrdersByIDs(iDs);
        return orders.rows;
      }

      const orders = await this.#orderRepository.findAll();

      return orders;
    } catch (err) {
      throw new CustomError({
        message: err.detail,
        statusCode: HttpCode.BAD_REQUEST,
      });
    }
  }
}

export { Order };
