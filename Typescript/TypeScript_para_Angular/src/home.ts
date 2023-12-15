type heroi = {
    name: string;
    vulgo: string;
}

function printaObjeto(pessoa: heroi){
    console.log(pessoa);
}

// isso printa um objeto
printaObjeto({
    name: "Bruce Wayne",
    vulgo: "Batman"
});
