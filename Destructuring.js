const user = {
    id: 1,
    name: {
        first: 'John',
        last: 'Doe'
    },
    email: 'john.doe@example.com',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
    phoneNumbers: [
        {
            type: 'home',
            number: '555-555-5555'
        },
        {
            type: 'work',
            number: '555-555-5556'
        }
    ],
    dateOfBirth: '1990-01-01',
    isActive: true,
    roles: ['user', 'admin'],
    preferences: {
        newsletter: true,
        notifications: {
            email: true,
            sms: false
        }
    }
};

// Destructuring
let { zipCode } = user.address;
console.log(zipCode);

// Array Destructuring
let [first,second] = user.roles;
// let [_,second] = user.roles; // skipping first element
console.log(first,second);