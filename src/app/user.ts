export class User {
    constructor(
        public id: number, 
        public name: string,
        public phone: number,
        public learnedPolish: boolean,
        public ballAmount: number,
        public login: string,
        public password: string) { 
    }
}