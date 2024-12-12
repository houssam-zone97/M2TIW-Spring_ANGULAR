import {Categorie} from './categorie';

export class Produit {
  constructor(public reference : string,
              public  description: string ,public prixUnitaire : string,public categorie : Categorie) {

  }
}
