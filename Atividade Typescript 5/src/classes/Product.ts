import { Base } from "./Base";


export class Product extends Base {
    public name: string;
    public value: number;

    constructor(name: string, value: number) {
        super()
        this.name = name;
        this.value = value;
    }

    public show(): string {
        return ``
    }

    private showDetails(): string {
        return ``
    }

    public comment(content: string, user: any): void {

    }

    public rate(rate: number, user: any): void {

    }
}