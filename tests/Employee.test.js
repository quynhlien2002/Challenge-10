const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should return the name', () => {
            const name = "Sam";
            
            const result = new Employee(name);
            expect(result).toEqual(name);
        })
    })
    describe('getId', () => {
        it('should return the id', () => {
            const id = "123";
            
            const result = new Employee(id);
            expect(result).toEqual(id);
        })
    })
    describe('getEmail', () => {
        it('should return the email', () => {
            const email = "sam1234@gmail.com";
            
            const result = new Employee(email);
            expect(result).toEqual(email);
        })
    })
    describe('getRole', () => {
        it('should return the role', () => {
            const role = "Employee";
            
            const result = new Employee(role);
            expect(result).toEqual(role);
        })
    })
})