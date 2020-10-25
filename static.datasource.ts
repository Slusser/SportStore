import { Injectable} from "@angular/core";
import { Product} from "./product.model";
import { Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1,"Produkt 1", "Kategoria 1", "Produkt 1 (Kategoria 1)", 100),
        new Product(2,"Produkt 2", "Kategoria 1", "Produkt 2 (Kategoria 1)", 100),
        new Product(3,"Produkt 3", "Kategoria 1", "Produkt 3 (Kategoria 1)", 100),
        new Product(4,"Produkt 4", "Kategoria 1", "Produkt 4 (Kategoria 1)", 100),
        new Product(1,"Produkt 5", "Kategoria 1", "Produkt 5 (Kategoria 1)", 100),
        new Product(1,"Produkt 6", "Kategoria 2", "Produkt 6 (Kategoria 2)", 100),
        new Product(1,"Produkt 7", "Kategoria 2", "Produkt 7 (Kategoria 2)", 100),
        new Product(1,"Produkt 8", "Kategoria 2", "Produkt 8 (Kategoria 2)", 100),
        new Product(1,"Produkt 9", "Kategoria 2", "Produkt 9 (Kategoria 2)", 100),
        new Product(1,"Produkt 10", "Kategoria 2", "Produkt 10 (Kategoria 2)", 100),
        new Product(1,"Produkt 11", "Kategoria 3", "Produkt 11 (Kategoria 3)", 100),
        new Product(1,"Produkt 12", "Kategoria 3", "Produkt 12 (Kategoria 3)", 100),
        new Product(1,"Produkt 13", "Kategoria 3", "Produkt 13 (Kategoria 3)", 100),
        new Product(1,"Produkt 14", "Kategoria 3", "Produkt 14 (Kategoria 3)", 100),
        new Product(1,"Produkt 15", "Kategoria 3", "Produkt 15 (Kategoria 3)", 100),
    ];

    getProducts(): Observable<Product[]> {
        return Observable.from([this.products]);
    }
}