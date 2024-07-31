export type Carteira = {
    saldo: number;
    transacoes: string[];
}

export type Produto = {
    id: number
    nome: string
    quantidade: number
}

export type Usuario = {
    nome: string 
    idade: number
    ocupacao: string
    salario?: number
}

export type Diretor = {
    nome: string 
    idade: number
    comissao: number
    salario?: number
}
