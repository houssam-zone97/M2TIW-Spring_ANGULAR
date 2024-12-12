package com.houssam.projet_spring_angular.repositories;

import com.houssam.projet_spring_angular.entities.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategorieRepository extends JpaRepository<Categorie, Long> {
    public Categorie findById(long id);
}
