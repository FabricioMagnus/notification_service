import { Module } from '@nestjs/common';
import { NotificationsRepository } from 'src/app/repositories/notifications-repositories';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsrepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsrepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
