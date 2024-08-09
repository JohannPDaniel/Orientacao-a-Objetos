import { User } from "./User";
import { Product } from "./Product";

// Definição do tipo Rate (se necessário)
export type Rate = 1 | 2 | 3 | 4 | 5;

export class Rating {
    public rate: Rate;
    private _product: Product;  // Certifique-se de que esta linha está presente
    public user: User;

    constructor(rate: Rate, product: Product, user: User) {
        this.rate = rate;
        this._product = product;
        this.user = user;
    }

    
    public get product() : Product {
        return this._product;
    }
    
}
