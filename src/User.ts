import faker from 'faker';

export class User {
	nam: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.nam = faker.name.firstName();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude())
		};
	}
}
