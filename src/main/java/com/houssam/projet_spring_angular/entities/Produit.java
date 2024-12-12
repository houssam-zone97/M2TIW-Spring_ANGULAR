package com.houssam.projet_spring_angular.entities;

import jakarta.persistence.*;

@Entity
public class Produit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
   @Column(length = 25, nullable = false)
    private String reference;
    private String description;
    private double prixUnitaire;
    @ManyToOne
    @JoinColumn(name = "categorie_id")
    private Categorie categorie;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrixUnitaire() {
        return prixUnitaire;
    }

    public void setPrixUnitaire(double prixUnitaire) {
        this.prixUnitaire = prixUnitaire;
    }

    public Categorie getCategorie() {
        return categorie;
    }

    public void setCategorie(Categorie categorie) {
        this.categorie = categorie;
    }

    public Produit(Long id, String reference, String description, double prixUnitaire, Categorie categorie) {
        this.id = id;
        this.reference = reference;
        this.description = description;
        this.prixUnitaire = prixUnitaire;
        this.categorie = categorie;
    }

    public Produit() {
    }
}
