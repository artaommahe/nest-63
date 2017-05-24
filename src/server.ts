import { NestFactory } from '@nestjs/core';

import { AppModule } from './module';


const app = NestFactory.create(AppModule);

app.listen(14345, () => {

  (<any> app).logger.log(`RPC server is listening on port 14345`);
});
