import { Publisher, Subjects, TicketCreatedEvent } from "@hoopstix/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
