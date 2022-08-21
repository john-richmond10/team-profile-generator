const Employee = require('../lib/engineer');

describe('Engineer', () => {
    describe('github', () => {
        it ('Should create a github object', () => {
            const engineer = new Engineer ('John', 25, 'testjohn@test.mail', 'testjohn');

            expect(engineer.github).toBe('testjohn');
        });
    });
    describe('get github', () => {
        it ('Should get the github username', () => {
            const engineer = new Engineer ('John', 25, 'testjohn@test.mail', 'testjohn');

            expect(engineer.getGitHub).toBe('testjohn');
        });
    });
    describe('get role', () => {
        it ('Should get the employees role', () => {
            const engineer = new Engineer ('John', 25, 'testjohn@test.mail', 'testjohn');

            expect(engineer.getRole).toBe('Engineer');
        });
    });
});