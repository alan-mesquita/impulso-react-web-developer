
let user1 = {
        name: 'Alan',
        age: 22
    }

let user2 = {
    name: 'Andrerlane',
    age: 19
}

let user3 = {
    name: 'Alisson',
    age: 14
}

function calculateAge(years) {
	return `Daqui a ${years} anos, ${this.name} terá ${
		this.age + years
	} anos de idade.`;
}

console.log(calculateAge.call(user2, 30))

console.log(calculateAge.apply(user1, [19]))