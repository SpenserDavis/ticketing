import { Publisher, Subjects, TicketUpdatedEvent } from "@hoopstix/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
