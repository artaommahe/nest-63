import { Module } from '@nestjs/common';

import { RpcClientController } from './controller/rpc-client';
import { RpcClientService } from './service/rpc-client';


@Module({
  controllers: [
    RpcClientController,
  ],
  components: [
    RpcClientService,
  ],
})
export class AppModule {}
