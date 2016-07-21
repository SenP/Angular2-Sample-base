export class Post {
    id: number;
    userId: number;
    title: string;
    body: string;
    comments: [
        id: number;
        name: string;
        email: string;
        body: string;
    ];

    constructor() {
        this.comments = [];
    }
}