import {NgModule} from "@angular/core";
import { from } from "rxjs/observable/from";
import {ProductRepository} from "./product.repository";
import {StaticDataSource} from "./static.datasource";

@NgModule({
    providers: [ProductRepository, StaticDataSource]
})
export class ModelModule{}