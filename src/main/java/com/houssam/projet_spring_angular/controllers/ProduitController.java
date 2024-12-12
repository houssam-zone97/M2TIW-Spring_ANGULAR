package com.houssam.projet_spring_angular.controllers;

import com.houssam.projet_spring_angular.entities.Categorie;
import com.houssam.projet_spring_angular.entities.Produit;
import com.houssam.projet_spring_angular.repositories.CategorieRepository;
import com.houssam.projet_spring_angular.repositories.ProduitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProduitController {
    @Autowired
    private ProduitRepository produitRepository;
    @Autowired
    private CategorieRepository categorieRepository;

    @GetMapping(path ="/produits")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Produit> getAllProduits(){
        List<Produit> produits = produitRepository.findAll();
        return produits;
    }

    @PostMapping(path = "/ajoutProduit",produces = {MediaType.APPLICATION_JSON_VALUE})
    @CrossOrigin(origins = "http://localhost:4200")
    public Produit addProduit(@RequestBody Produit produit ){

        return produitRepository.save(produit);
    }
    @GetMapping(path = "/produits/{idCategorie}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Produit> produitsByIdCategorie(@PathVariable Long idCategorie) {
        return produitRepository.findByCategorieId(idCategorie);
    }

    @GetMapping(path ="/categories")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Categorie> getAllCategories() {
        List<Categorie> categories = categorieRepository.findAll();
        return categories;
    }

}
