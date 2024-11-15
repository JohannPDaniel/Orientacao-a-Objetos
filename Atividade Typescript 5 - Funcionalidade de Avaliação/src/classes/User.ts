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
        const index = this._cart.findIndex(item => item.id === product.id)

        if (index === -1) {
            console.log(`${product.name} removido com sucesso`)
            return
        }

        this._cart.splice(index, 1)
    }

    public showProducts(): string {
        const somaProdutos = this._cart.reduce((prev, acc) => prev + acc.value, 0)
        const dados = this._cart.map(product => `${product.name}`).join(", ")
        const response = `Produtos: \n${dados}, Soma dos produtos: ${somaProdutos}`
        return response;
    }
}
