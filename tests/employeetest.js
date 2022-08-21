const Employee = require('../lib/employee');

describe('Employee', () => {
    describe ('name', () => {
        it ('Should create a new employee name object', () => {
            const employee = new Employee('John', 25, 'newjohn@test.mail');

            expect(employee.name).toBe('John');
        });
    });
    describe ('id', () => {
        it ('Should create a new employee id', () => {
            const employee = new Employee('John', 25, 'newjohn@test.mail');

            expect(employee.id).toBe(25);
        });
    });
    describe('email', () => {
        it ('Should create a new employee email', () => {
            const employee = new Employee('John', 25, 'newjohn@test.mail');
            
            expect(employee.email).toBe('newjohn@test.mail');
        });
    });
    describe('get name', () => {
        it ('Should get the employee name', () => {
            const employee = new Employee ('John', 25, 'newjohn@test.mail');

            expect(employee.getName).toBe('John');
        });
    });
    describe('get id', () => {
        it ('Should get the employee id', () => {
            const employee = new Employee ('John', 25, 'newjohn@test.mail');

            expect(employee.getID).toBe(25);
        });
    });
    describe('get email', () => {
        it('Should get the employee email', () => {
            const employee = new Employee ('John', 25, 'newjohn@test.mail');

            expect(employee.getEmail).toBe('newjohn@test.mail');
        });
    });
    describe('get role', () => {
        it ('Should get the role of the employee', () => {
            const employee = new Employee ('John', 25, 'newjohn@test.mail');

            expect(employee.getRole).toBe('Employee');
        });
    });
});