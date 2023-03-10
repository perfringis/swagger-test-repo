import { GET, Path, PathParam } from 'typescript-rest';
import { Inject } from 'typescript-ioc';
import { HelloWorldApi } from '../services';
import { Tags } from 'typescript-rest-swagger';

@Path('/hello')
export class HelloWorldController {
  @Inject
  service!: HelloWorldApi;

  @Tags('Test')
  @GET
  async sayHelloToUnknownUser(): Promise<string> {
    return this.service.greeting();
  }

  @Path(':name')
  @GET
  async sayHello(@PathParam('name') name: string): Promise<string> {
    return this.service.greeting(name);
  }
}
