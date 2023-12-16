/**
 * variaveis
 */

//tipos primitivos: boolean, number, string
let ligado: boolean = false;
let nome: string = "marcos";
let idade: number = 30;
let altura: number = 1.9;

// tipos especiais null, undefined
let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
let retorno: void;
let retornoView: any = false;

//objeto - sem previsibilidade
let produto: object = {
    name: "marcos",
    cidade: "sp",
    idade: 30,
};

//objeto tipado - com previsibilidade
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};

/**
 * arrays
 */

let dados: string[] = ["marcos", "ana", "adriana"];
let dados2: Array<string> = ["marcos", "ana", "adriana"];

let infos: (string | number)[] = [322, "marcos"];

/**
 * Tuplas
 */
let boleto: [string, number, number] = ["agua conta", 199.9, 32342342];

/**
 * arrays métodos (são os mesmos do Javascript)
 */
dados.pop();

/**
 * Datas
 */
let aniversario: Date = new Date("2023-04-22 05:00");
console.log(aniversario.toString());