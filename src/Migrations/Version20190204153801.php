<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190204153801 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE prefecture (id INT AUTO_INCREMENT NOT NULL, prefecture_service_id INT DEFAULT NULL, prefecture_autorite_id INT DEFAULT NULL, nom_prefecture VARCHAR(255) NOT NULL, adresse_prefecture VARCHAR(255) NOT NULL, cp INT NOT NULL, commune VARCHAR(255) NOT NULL, INDEX IDX_ABE6511A2A932B1C (prefecture_service_id), INDEX IDX_ABE6511ADE30800A (prefecture_autorite_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE utilisateur (id INT AUTO_INCREMENT NOT NULL, identifiant VARCHAR(255) NOT NULL, nom_utilisateur VARCHAR(255) NOT NULL, prenom_utilisateur VARCHAR(255) NOT NULL, mdp_utilisateur VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stage (id INT AUTO_INCREMENT NOT NULL, prefecture_id INT NOT NULL, tribunal_id INT NOT NULL, lieu_stage_id INT NOT NULL, numero_stage VARCHAR(255) NOT NULL, date_debut_stage DATE NOT NULL, date_fin_stage DATE NOT NULL, stage_programme_officiel TINYINT(1) NOT NULL, INDEX IDX_C27C93699D39C865 (prefecture_id), INDEX IDX_C27C936975C2CEC3 (tribunal_id), INDEX IDX_C27C9369F5748745 (lieu_stage_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stage_animateur (stage_id INT NOT NULL, animateur_id INT NOT NULL, INDEX IDX_136F210D2298D193 (stage_id), INDEX IDX_136F210D7F05C301 (animateur_id), PRIMARY KEY(stage_id, animateur_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tribunal (id INT AUTO_INCREMENT NOT NULL, tribunal_service_id INT DEFAULT NULL, tribunal_autorite_id INT DEFAULT NULL, nom_tribunal VARCHAR(255) NOT NULL, adresse_tribunal VARCHAR(255) NOT NULL, numero_adresse_tribunal INT NOT NULL, commune_tribunal VARCHAR(255) NOT NULL, INDEX IDX_DC8C3AAF429095E9 (tribunal_service_id), INDEX IDX_DC8C3AAF138F8527 (tribunal_autorite_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE animateur (id INT AUTO_INCREMENT NOT NULL, animateur_statut_id INT DEFAULT NULL, animateur_fonction_id INT DEFAULT NULL, nom_animateur VARCHAR(255) NOT NULL, prenom_animateur VARCHAR(255) NOT NULL, raison_sociale_animateur VARCHAR(255) NOT NULL, fonction_animateur VARCHAR(255) NOT NULL, status_animateur VARCHAR(255) NOT NULL, gta_animateur VARCHAR(255) NOT NULL, cp_animateur INT NOT NULL, commune_animateur VARCHAR(255) NOT NULL, region_animateur VARCHAR(255) NOT NULL, rue_animateur VARCHAR(255) NOT NULL, numero_portable_animateur INT NOT NULL, numero_fixe_animateur INT NOT NULL, email_animateur VARCHAR(255) NOT NULL, urssaf_animateur INT NOT NULL, siret_animateur INT NOT NULL, observations_animateur VARCHAR(255) NOT NULL, INDEX IDX_2064DB2CE393327E (animateur_statut_id), INDEX IDX_2064DB2C628DF4F1 (animateur_fonction_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE animateur_statut (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE lieu_stage (id INT AUTO_INCREMENT NOT NULL, nom_etablissement VARCHAR(255) NOT NULL, agrement INT NOT NULL, adresse_stage VARCHAR(255) NOT NULL, numero_adresse_stage INT NOT NULL, cp INT NOT NULL, commune VARCHAR(255) NOT NULL, telephone_stage INT NOT NULL, latitude INT NOT NULL, longitude INT NOT NULL, divers VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stagiaire (id INT AUTO_INCREMENT NOT NULL, stage_id INT NOT NULL, nom_stagiaire VARCHAR(255) NOT NULL, prenom_stagiaire VARCHAR(255) NOT NULL, cp INT NOT NULL, commune VARCHAR(255) NOT NULL, nom_naissance_stagiaire VARCHAR(255) NOT NULL, date_naissance_stagiaire DATE NOT NULL, lieu_naissance_stagiaire VARCHAR(255) NOT NULL, adresse_stagiaire VARCHAR(255) NOT NULL, nationalite_stagiaire VARCHAR(255) NOT NULL, numero_portable_stagiaire INT NOT NULL, numero_fixe_stagiaire INT NOT NULL, email_stagiaire VARCHAR(255) NOT NULL, carte_jeune_stagiaire TINYINT(1) NOT NULL, partenaire_stagiaire TINYINT(1) NOT NULL, adherent_stagiaire TINYINT(1) NOT NULL, numero_adresse_stagiaire INT NOT NULL, INDEX IDX_4F62F7312298D193 (stage_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE prefecture_service (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tribunal_autorite (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE civilite (id INT AUTO_INCREMENT NOT NULL, nom_civilite VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tribunal_service (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE animateur_fonction (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE prefecture_autorite (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE prefecture ADD CONSTRAINT FK_ABE6511A2A932B1C FOREIGN KEY (prefecture_service_id) REFERENCES prefecture_service (id)');
        $this->addSql('ALTER TABLE prefecture ADD CONSTRAINT FK_ABE6511ADE30800A FOREIGN KEY (prefecture_autorite_id) REFERENCES prefecture_autorite (id)');
        $this->addSql('ALTER TABLE stage ADD CONSTRAINT FK_C27C93699D39C865 FOREIGN KEY (prefecture_id) REFERENCES prefecture (id)');
        $this->addSql('ALTER TABLE stage ADD CONSTRAINT FK_C27C936975C2CEC3 FOREIGN KEY (tribunal_id) REFERENCES tribunal (id)');
        $this->addSql('ALTER TABLE stage ADD CONSTRAINT FK_C27C9369F5748745 FOREIGN KEY (lieu_stage_id) REFERENCES lieu_stage (id)');
        $this->addSql('ALTER TABLE stage_animateur ADD CONSTRAINT FK_136F210D2298D193 FOREIGN KEY (stage_id) REFERENCES stage (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE stage_animateur ADD CONSTRAINT FK_136F210D7F05C301 FOREIGN KEY (animateur_id) REFERENCES animateur (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE tribunal ADD CONSTRAINT FK_DC8C3AAF429095E9 FOREIGN KEY (tribunal_service_id) REFERENCES tribunal_service (id)');
        $this->addSql('ALTER TABLE tribunal ADD CONSTRAINT FK_DC8C3AAF138F8527 FOREIGN KEY (tribunal_autorite_id) REFERENCES tribunal_autorite (id)');
        $this->addSql('ALTER TABLE animateur ADD CONSTRAINT FK_2064DB2CE393327E FOREIGN KEY (animateur_statut_id) REFERENCES animateur_statut (id)');
        $this->addSql('ALTER TABLE animateur ADD CONSTRAINT FK_2064DB2C628DF4F1 FOREIGN KEY (animateur_fonction_id) REFERENCES animateur_fonction (id)');
        $this->addSql('ALTER TABLE stagiaire ADD CONSTRAINT FK_4F62F7312298D193 FOREIGN KEY (stage_id) REFERENCES stage (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE stage DROP FOREIGN KEY FK_C27C93699D39C865');
        $this->addSql('ALTER TABLE stage_animateur DROP FOREIGN KEY FK_136F210D2298D193');
        $this->addSql('ALTER TABLE stagiaire DROP FOREIGN KEY FK_4F62F7312298D193');
        $this->addSql('ALTER TABLE stage DROP FOREIGN KEY FK_C27C936975C2CEC3');
        $this->addSql('ALTER TABLE stage_animateur DROP FOREIGN KEY FK_136F210D7F05C301');
        $this->addSql('ALTER TABLE animateur DROP FOREIGN KEY FK_2064DB2CE393327E');
        $this->addSql('ALTER TABLE stage DROP FOREIGN KEY FK_C27C9369F5748745');
        $this->addSql('ALTER TABLE prefecture DROP FOREIGN KEY FK_ABE6511A2A932B1C');
        $this->addSql('ALTER TABLE tribunal DROP FOREIGN KEY FK_DC8C3AAF138F8527');
        $this->addSql('ALTER TABLE tribunal DROP FOREIGN KEY FK_DC8C3AAF429095E9');
        $this->addSql('ALTER TABLE animateur DROP FOREIGN KEY FK_2064DB2C628DF4F1');
        $this->addSql('ALTER TABLE prefecture DROP FOREIGN KEY FK_ABE6511ADE30800A');
        $this->addSql('DROP TABLE prefecture');
        $this->addSql('DROP TABLE utilisateur');
        $this->addSql('DROP TABLE stage');
        $this->addSql('DROP TABLE stage_animateur');
        $this->addSql('DROP TABLE tribunal');
        $this->addSql('DROP TABLE animateur');
        $this->addSql('DROP TABLE animateur_statut');
        $this->addSql('DROP TABLE lieu_stage');
        $this->addSql('DROP TABLE stagiaire');
        $this->addSql('DROP TABLE prefecture_service');
        $this->addSql('DROP TABLE tribunal_autorite');
        $this->addSql('DROP TABLE civilite');
        $this->addSql('DROP TABLE tribunal_service');
        $this->addSql('DROP TABLE animateur_fonction');
        $this->addSql('DROP TABLE prefecture_autorite');
    }
}
