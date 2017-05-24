import { Component } from '@nestjs/common';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';


@Component()
export class RpcClientService {

  @Client({ transport: Transport.TCP, port: 65441 })
  private client: ClientProxy;


  constructor() {

    setTimeout(() => console.log('service client', this.client), 3000);
  }


  public get() {

    const pattern = { command: 'add' };
    const data = null;

    this.client.send(pattern, data)
        .subscribe(() => null);
  }
}
