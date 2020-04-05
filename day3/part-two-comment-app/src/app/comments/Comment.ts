export class Comment {

    constructor(
        public postId,
        public id: number,
        public name: string,
        public email: string,
        public body: string
    ) { }
}