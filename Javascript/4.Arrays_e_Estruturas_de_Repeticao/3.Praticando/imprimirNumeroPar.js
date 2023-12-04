/*
2) Crie um programa que seja capaz de percorrer uma 
lista de números e imprima cada número Par encontrado.
*/

const nums = [12,21,32,45,56,64,79,82,93,107];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if(num % 2 === 0){
        console.log(num);
    }
}

