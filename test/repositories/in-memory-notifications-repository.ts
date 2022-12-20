import { Notification } from '../../src/app/entities/notification';
import { NotificationsRepository } from '../../src/app/repositories/notifications-repositories';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notificationLits: Notification[] = [];

  async create(notification: Notification) {
    this.notificationLits.push(notification);
  }
}
