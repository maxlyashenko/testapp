export class Question {
    constructor(
        public id: number, 
        public name: string, 
        public typeOfQuestion: number,
        public answer: string,
        public variants: any[],
        public file: string) { 
    }
}