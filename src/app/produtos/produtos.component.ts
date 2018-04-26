import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoService } from 'app/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private service: ProdutoService) { 
  }

  produtos: Produto[] = [];

  ngOnInit() {

    this.produtos = this.service.getProdutos();

    /*
    let produto1 = new Produto();
    produto1.id = 1;
    produto1.nome = "Macarrão";
    this.produtos.push(produto1);
    let produto2 = new Produto();
    produto2.id = 2;
    produto2.nome = "Feijão";
    this.produtos.push(produto2);
    */
  }

}
