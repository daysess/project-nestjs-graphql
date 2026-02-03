import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client/extension';

@Injectable()
export class PrismaService
extends PrismaClient
implements OnModuleInit, OnModuleDestroy {
  onModuleInit() {
      await this.$connect();
  }
  onModuleDestroy() {
      await this.$disconnect();
  }
}
