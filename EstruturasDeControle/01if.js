function Aprovado(nota) {
    if(nota >= 7) {
        console.log("Aprovado! Sua nota é " + nota)
    }
};

Aprovado(8.1);
Aprovado(6.1);

function verdade(valor) {
    if(valor) {
        console.log("É verdade... " + valor)
    }
};

verdade();
verdade(null);
verdade(undefined);
verdade(NaN);
verdade('');
verdade(0);
verdade(-1);
verdade('Olha ai ó');
verdade([]);
verdade([1, 2]);
verdade({});