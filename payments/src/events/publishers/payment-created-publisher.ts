import { Subjects, Publisher, PaymentCreatedEvent } from "@hoopstix/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
