# NestJS Configuration Management

Example repository for NestJS configuration management. See the Medium article here:
https://medium.com/twenty5seven-engineering/nestjs-configuration-management-c06bd2d7e4c1


## Instructions

Start the webserver via `npm run start`.

You can access the two different example "feature modules" via these routes:

* Hello world feature module: http://localhost:3000/hello-world
* Hello mars feature module: http://localhost:3000/hello-mars


You can change the configuration values for each of the feature modules using environment variables e.g.:

```sh
$ helloWorld__greeting="Hello ENVIRONMENT!" npm run start
$ helloMars__marsianGreeting="Hello Elon!" npm run start
```

All options for loading configuration values from the application's environment can be found here: [ts-configurable](https://www.npmjs.com/package/ts-configurable).


## Contributing

Ideas, critical questions and PRs are welcome! You can communicate with me on these platforms:

* GitHub: https://github.com/derbenoo
* Twitter: https://twitter.com/derbenoo
* Medium: https://medium.com/@derbenoo

