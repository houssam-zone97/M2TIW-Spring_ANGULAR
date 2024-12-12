import {Component, OnInit} from '@angular/core';
import {Produit} from  '../model/produit';
import {HttpClient} from '@angular/common/http';
import {Categorie} from '../model/categorie';
@Component({
  selector: 'app-produits',
  standalone: false,

  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css'
})
export class ProduitsComponent implements OnInit {
  constructor(private  client : HttpClient) {
  }
  ngOnInit(): void {
    this.getProduits();
    this.getCategories();
  }
  filteredProduits: Produit[] = [];

  produits:Produit[]=[];
  categories:Categorie[]=[];
  // url du service backEnd qui permet de recuperer la liste des contacts
  private url="http://localhost:8083/produits";
  private urlCategories = 'http://localhost:8083/categories';
  private urlByCategorie = 'http://localhost:8083/produits/{idCategorie}';
  // declarer la methode qui permet de recuperer la liste des contacts depuis le
  // backEnd et la mettre au niveau de l'attribut contacts
  selectedCategorie: string ='';
  private getProduits() {
    this.client.get<any>(this.url).subscribe(
      (reponse)=>{
        this.produits=reponse;
        this.filteredProduits = reponse;
        console.log('récuperation des produits : '+reponse);
      }
    );
  }

  private getCategories() {
this.client.get<any>(this.urlCategories).subscribe(
  (response : any) => {
    this.categories =response;
    console.log(response)
  }
)
  }
  private getProduitsByCategorie(idCategorie: number) {
    const url = `http://localhost:8083/produits/${idCategorie}`;
    this.client.get<any>(url).subscribe(
      (reponse) => {
        this.filteredProduits = reponse; // Afficher uniquement les produits filtrés
        console.log('Produits filtrés : ', reponse);
      },
    );
  }


  filterProduits(): void {
    if (this.selectedCategorie === '') {
      // Si aucune catégorie n'est sélectionnée, réinitialiser à tous les produits
      this.filteredProduits = this.produits;
    } else {
      // Si une catégorie est sélectionnée, récupérer les produits filtrés depuis le backend
      const idCategorie = parseInt(this.selectedCategorie, 10);
      this.getProduitsByCategorie(idCategorie);
    }
  }


}
