import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";

@Injectable()
export class StaticDataSource {
private products: Product[] = [
new Product(1, "Tênis Nike", "Calçados", "Tênis marca Nike. Cor preto e amarelo.", 90, "assets/tenisNike.jpg"),
new Product(2, "Tênis Adidas", "Calçados", "Tênis marca Adidas. Cor branco e azul.", 86, "assets/tenisAdidas.jpg"),
new Product(3, "Tênis Puma", "Calçados", "Tênis marca Puma. Cor branco com listras vermelhas, azuis e amarelas.", 83, "assets/tenisPuma.jpg"),
new Product(4, "Chinelo Colcci", "Calçados", "Chinelo marca Colcci. Modelo slide. Cor preta e branco. Florado.",30, "assets/chineloColcci.jpg"),
new Product(5, "Chinelo Coca-cola", "Calçados", "Chinelo marca Coca-cola. Modelo slide. Cor preto e branco.", 20, "assets/chineloCoca.jpg"),
new Product(6, "Camisa Coca-cola", "Camisas", "Camisa marca Coca-cola. Cor branca. Tamanho único.", 15, "assets/camisaCoca.jpg"),
new Product(7, "Camisa Colcci", "Camisas", "Camisa marca Colcci. Cor preta. Tamanho único.", 17, "assets/camisaColcci.jpg"),
new Product(8, "Camisa Adidas", "Camisas", "Camisa marca Adidas. Cor branca e preta. Tamanho único.", 25, "assets/camisaAdidas.jpg"),
new Product(9, "Camisa Nike", "Camisas", "Camisa marca Nike. Cor branca. Tamanho único.", 28, "assets/camisaNike.jpg"),
new Product(10, "Camisa Puma", "Camisas", "Camisa marca Puma. Cor azul. Tamanho único.", 30, "assets/camisaPuma.jpg"),
new Product(11, "Touca Natação Speedo", "Acessórios", "Touca de natação marca speedo. Cor azul. Silicone.", 10, "assets/toucaSpeedo.jpg"),
new Product(12, "Óculos de Sol Ray-ban", "Acessórios", "Óculos de sol marca Ray-ban. Cor dourado, modelo aviator.", 80, "assets/oculosRayban.jpg"),
new Product(13, "Relógio Calvin Klein", "Acessórios", "Relógio marca Calvin Klein. Cor preto. Pulseira couro sintético.", 120, "assets/relogioCalvinKlein.jpg"),
new Product(14, "Óculos de Natação Speedo", "Acessórios", "Óculos de natação marca Speedo. Cor preto e cinza.", 13, "assets/oculosSpeedo.jpg"),
new Product(15, "Mochila Coca-cola", "Acessórios", "Mochila marca Coca-cola. 2L", 60, "assets/mochilaCocacola.jpg"),
];
getProducts(): Observable<Product[]> {
return from([this.products]);
}
}
