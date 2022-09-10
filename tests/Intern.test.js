const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getName', () => {
        it('should return the name', () => {
            const name = "Sarah";
            
            const result = new Intern(name);
            expect(result).toEqual(name);
        })
    })
    describe('getId', () => {
        it('should return the id', () => {
            const id = "345";
            
            const result = new Intern(id);
            expect(result).toEqual(id);
        })
    })
    describe('getEmail', () => {
        it('should return the email', () => {
            const email = "sarah345@gmail.com";
            
            const result = new Intern(email);
            expect(result).toEqual(email);
        })
    })
    describe('getRole', () => {
        it('should return the role', () => {
            const role = "Intern";
            
            const result = new Intern(role);
            expect(result).toEqual(role);
        })
    })
    describe('getSchool', () => {
        it('should return the school', () => {
            const school = "UCI";
            
            const result = new Engineer(school);
            expect(result).toEqual(school);
        })
    })
})