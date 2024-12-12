import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categorie} from '../model/categorie';

@Component({
  selector: 'app-ajout-produit',
  standalone: false,

  templateUrl: './ajout-produit.component.html',
  styleUrl: './ajout-produit.component.css'
})
export class AjoutProduitComponent implements OnInit {
  constructor(private client:HttpClient){}
  ngOnInit(): void {
    this.getCategories();  // Récupérer les catégories au chargement du composant
  }
  private url1="http://localhost:8083/ajoutProduit";
  private url2="http://localhost:8083/categories";
  reference:string='';
  description:string='';
  prixUnitaire:string='';
  categorie!: Categorie;
  cat: Categorie[] = [];
  ajoutProduit():void{
    // creer l'objet qui devrait être injecté dans le corps de la requete
    const objet = {
      'reference':this.reference, 'description':this.description, 'prixUnitaire':this.prixUnitaire,
      'categorie':this.categorie
    };
    console.log(objet);
    // utiliser le client HTTP pour envoyer une request d'ajout
    this.client.post<any>(this.url1,objet).subscribe();
    this.reference='';    this.description='';     this.prixUnitaire='';
  }


  getCategories(): void {
    this.client.get<Categorie[]>(this.url2).subscribe(
      (reponse) => {
        this.cat = reponse;  // Assigner la réponse à la liste des catégories
        console.log('Catégories récupérées :', reponse);
      },

    );
  }

}
