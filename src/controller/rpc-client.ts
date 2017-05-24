import { Controller } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';


@Controller()
export class RpcClientController {

  @Client({ transport: Transport.TCP, port: 65441 })
  private client: ClientProxy;


  constructor() {

    setTimeout(() => console.log('controller client', this.client), 3000);
  }


  public get() {

    const pattern = { command: 'add' };
    const data = null;

    this.client.send(pattern, data)
        .subscribe(() => null);
  }
}
