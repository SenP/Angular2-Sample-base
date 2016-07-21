export class User {
    id: number;
    name: string;
    email: string;
    address: {
                street: string,
                suite: string,                
                city: string,
                zipcode: string
            } 
            
    constructor() {
        this.id = null;
        this.name = null;
        this.email = null;
        this.address = {};
    } 
}