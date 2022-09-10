const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('getName', () => {
        it('should return the name', () => {
            const name = "Min";
            
            const result = new Manager(name);
            expect(result).toEqual(name);
        })
    })
    describe('getId', () => {
        it('should return the id', () => {
            const id = "567";
            
            const result = new Manager(id);
            expect(result).toEqual(id);
        })
    })
    describe('getEmail', () => {
        it('should return the email', () => {
            const email = "min567@gmail.com";
            
            const result = new Manager(email);
            expect(result).toEqual(email);
        })
    })
    describe('getRole', () => {
        it('should return the role', () => {
            const role = "Manager";
            
            const result = new Manager(role);
            expect(result).toEqual(role);
        })
    })
    describe('getOfficeNumber', () => {
        it('should return the office number', () => {
            const office = "0000";
            
            const result = new Manager(office);
            expect(result).toEqual(office);
        })
    })
})