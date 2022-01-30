import { Subjects, Publisher, OrderCancelledEvent } from "@hoopstix/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
