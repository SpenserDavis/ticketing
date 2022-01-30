import { Publisher, OrderCreatedEvent, Subjects } from "@hoopstix/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
