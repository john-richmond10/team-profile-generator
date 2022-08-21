const Employee = require('../lib/intern');

describe('intern', () => {
    describe('school', () => {
        it ('Should create a new school object', () => {
            const intern = new Intern ('John', 25, 'testjohn@test.mail', 'UConn');

            expect(intern.school).toBe('UConn');
        });
    });
    describe('get school', () => {
        it ('Should get the school object', () => {
            const intern = new Intern ('John', 25, 'testjohn@test.mail', 'UConn');

            expect(intern.getSchool).toBe('UConn');
        });
    });
    describe('get role', () => {
        it ('Should get the employees role', () => {
            const intern = new Intern ('John', 25, 'testjohn@test.mail', 'UConn');

            expect(intern.getRol).toBe('Intern');
        });
    });
});