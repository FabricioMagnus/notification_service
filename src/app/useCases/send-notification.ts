import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

interface SenNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SenNotification {
  async execute(
    request: SenNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });
    return {
      notification,
    };
  }
}
