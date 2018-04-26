import { Produto } from './produto';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoService {
    getProdutos(){
        let produtos: Produto[] = [];

        let produto1 = new Produto();
        produto1.id = 1;
        produto1.nome = "Macarrão";
        produtos.push(produto1);
        
        let produto2 = new Produto();
        produto2.id = 2;
        produto2.nome = "Feijão";
        produtos.push(produto2);

        return produtos;
    }
}