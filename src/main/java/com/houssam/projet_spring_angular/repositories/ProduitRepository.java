package com.houssam.projet_spring_angular.repositories;

import com.houssam.projet_spring_angular.entities.Categorie;
import com.houssam.projet_spring_angular.entities.Produit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProduitRepository extends JpaRepository<Produit, Long> {
    List<Produit> findByCategorieId(Long idCategorie);
}
