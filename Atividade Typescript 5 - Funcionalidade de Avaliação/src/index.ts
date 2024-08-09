import { Product } from "./classes/Product";
import { User } from "./classes/User";

const user1 = new User('Johann', 'Johann123', 'johann@example.com');
const product1 = new Product('Calça', 300);

product1.show()
product1.comment("Essa calça é muito boa", user1)
product1.rate(5, user1)

product1.showDetails()