const Manager = require('../lib/manager');

describe('manager', () => {
    describe('office number', () => {
        it ('Should create an office number for the manager', () => {
            const manager = new Manager ('John', 25, 'testjohn@test.mail', 1);

            expect(manager.officeNumber).toBe(1);
        });
    });
    describe('get office number', () => {
        it ('Should get the managers office number', () => {
            const manager = new Manager ('John', 25, 'testjohn@test.mail', 1);

            expect(manager.getOfficeNumber()).toBe(1);
        });
    });
    describe('get role', () => {
        it ('Should get the managers role', () => {
            const manager = new Manager ('John', 25, 'testjohn@test.mail', 1);

            expect(manager.getRole()).toBe('Manager');
        });
    });
});