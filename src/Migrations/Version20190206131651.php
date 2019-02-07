<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190206131651 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE commune');
        $this->addSql('ALTER TABLE prefecture CHANGE prefecture_service_id prefecture_service_id INT DEFAULT NULL, CHANGE prefecture_autorite_id prefecture_autorite_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE utilisateur CHANGE role_id role_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE tribunal CHANGE tribunal_service_id tribunal_service_id INT DEFAULT NULL, CHANGE tribunal_autorite_id tribunal_autorite_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE animateur CHANGE animateur_statut_id animateur_statut_id INT DEFAULT NULL, CHANGE animateur_fonction_id animateur_fonction_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE lieu_stage CHANGE divers divers VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE stagiaire CHANGE cp cp VARCHAR(255) NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE commune (id INT AUTO_INCREMENT NOT NULL, nom_region VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, numero_departement VARCHAR(25) NOT NULL COLLATE utf8_unicode_ci, nom_departement VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, nom_commune VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, codes_postaux VARCHAR(25) NOT NULL COLLATE utf8_unicode_ci, latitude VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, longitude VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE animateur CHANGE animateur_statut_id animateur_statut_id INT DEFAULT NULL, CHANGE animateur_fonction_id animateur_fonction_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE lieu_stage CHANGE divers divers VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE prefecture CHANGE prefecture_service_id prefecture_service_id INT DEFAULT NULL, CHANGE prefecture_autorite_id prefecture_autorite_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE stagiaire CHANGE cp cp INT NOT NULL');
        $this->addSql('ALTER TABLE tribunal CHANGE tribunal_service_id tribunal_service_id INT DEFAULT NULL, CHANGE tribunal_autorite_id tribunal_autorite_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE utilisateur CHANGE role_id role_id INT DEFAULT NULL');
    }
}
