const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getName', () => {
        it('should return the name', () => {
            const name = "Tom";
            
            const result = new Engineer(name);
            expect(result).toEqual(name);
        })
    })
    describe('getId', () => {
        it('should return the id', () => {
            const id = "234";
            
            const result = new Engineer(id);
            expect(result).toEqual(id);
        })
    })
    describe('getEmail', () => {
        it('should return the email', () => {
            const email = "tom234@gmail.com";
            
            const result = new Engineer(email);
            expect(result).toEqual(email);
        })
    })
    describe('getRole', () => {
        it('should return the role', () => {
            const role = "Engineer";
            
            const result = new Engineer(role);
            expect(result).toEqual(role);
        })
    })
    describe('getGithub', () => {
        it('should return the github', () => {
            const github = "tom234";
            
            const result = new Engineer(github);
            expect(result).toEqual(role);
        })
    })
})