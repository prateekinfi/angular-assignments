import { Geo } from './Geo';

export class Address {
    constructor(
            public street: string,
            public suite: string,
            public city: string,
            public zipcode: string,
            public geo: Geo
        ) { }
}