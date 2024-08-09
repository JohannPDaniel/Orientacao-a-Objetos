import { Base } from "./Base";
import { User } from "./User";
import { Comment } from "./Comment";
import { Rating } from "./Rating";

// Type
import { Rate } from "./Rating";

// Banco de dados
import { comments } from "../db/comments";
import { ratings } from "../db/ratings";
export class Product extends Base {
    public name: string;
    public value: number;

    constructor(name: string, value: number) {
        super();
        this.name = name;
        this.value = value;
    }

    public show(): string {
        const response = `Product: ${this.name}, Price: R$ ${this.value.toFixed(2)}`
        console.log(response);
        console.log("\n---------------------\n");
        return response;
    }

    public showDetails(): string {
        const productComments = comments.filter(comment => comment.product === this);
    
        if (productComments.length !== 0) {
            productComments.forEach(comment =>
                console.log(`[${comment.fromUser.username}]: (${comment.content})`)
            );
        } else {
            console.log("Não existem comentários!");
        }
    
        const productRatings = ratings.filter(rating => rating.product === this);
    
        if (productRatings.length !== 0) {
            const averageRating = productRatings.reduce((sum, rating) => sum + rating.rate, 0) / productRatings.length;
            console.log(`A média das avaliações é: ${averageRating.toFixed(1)}`);
        } else {
            console.log("Não existem avaliações!");
        }
    
        return ``;
    }

    public comment(content: string, user: User): void {
        const comment = new Comment(content, this, user);
        comments.push(comment);
    }

    public rate(rate: Rate, user: User): void {
        const rating = new Rating(rate, this, user);
        ratings.push(rating);
    }
}
