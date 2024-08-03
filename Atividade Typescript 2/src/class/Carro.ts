export class Carro {
    consumo: number;
    qtdCombustivel: number

    constructor(consumo: number) {
        this.consumo = consumo; 
        this.qtdCombustivel = 0; 
    }

    andar(distancia: number): number {
        if (this.qtdCombustivel <= 0) {
            console.log("Não há combustível suficiente para andar.");
            return 0;
        }
    
        if (distancia <= 0) {
            console.log("A distância deve ser maior que zero.");
            return 0;
        }
    
        const combustivelNecessario = distancia / this.consumo;
    
        if (combustivelNecessario > this.qtdCombustivel) {
            console.log("Não há combustível suficiente para percorrer a distância desejada.");
            return 0;
        }
    
        this.qtdCombustivel -= combustivelNecessario;
        return distancia;
    }
    

    adicionarGasolina(combustivel: number):void {
        this.qtdCombustivel += combustivel
    }

    obterGasolina(): number {
        return this.qtdCombustivel;
    }
}