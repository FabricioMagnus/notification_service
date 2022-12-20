import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsrepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsrepository);

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'exemple',
    });
    expect(notificationsrepository.notificationLits).toHaveLength(1);
    expect(notificationsrepository.notificationLits[0]).toEqual(notification);
  });
});
