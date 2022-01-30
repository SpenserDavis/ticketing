import { Subjects, Publisher, ExpirationCompleteEvent } from "@hoopstix/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
