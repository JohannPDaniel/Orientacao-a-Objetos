import { Base } from "./Base";
import { Product } from "./Product";
import { Rate } from "./Rating";

export class User extends Base {
    public name: string;
    public username: string;
    public email: string;
    private _cart: Product[];

    constructor(name: string, username: string, email: string) {
        super();
        this.name = name;
        this.username = username;
        this.email = email;
        this._cart = [];
    }

    public addToCart(product: Product): void {
        this._cart.push(product);
    }

    public removeFromCart(product: Product): void {
        this._cart = this._cart.filter(p => p.id !== product.id);
    }

    public showProducts(): string {
        return this._cart.map(product => product.show()).join(', ');
    }

    public rateProduct(product: Product, rate: Rate): void {
    //     const success = product.rate(rate, this);
    //     if (!success) {
    //         console.log("----------- Este produto não pode ser avaliado mais de uma vez !!! -----------");
    //     }
     }
}
