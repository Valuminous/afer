<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190205120125 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE prefecture CHANGE prefecture_service_id prefecture_service_id INT DEFAULT NULL, CHANGE prefecture_autorite_id prefecture_autorite_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE utilisateur CHANGE role_id role_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE tribunal CHANGE tribunal_service_id tribunal_service_id INT DEFAULT NULL, CHANGE tribunal_autorite_id tribunal_autorite_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE animateur CHANGE animateur_statut_id animateur_statut_id INT DEFAULT NULL, CHANGE animateur_fonction_id animateur_fonction_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE lieu_stage CHANGE divers divers VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE user');
        $this->addSql('ALTER TABLE animateur CHANGE animateur_statut_id animateur_statut_id INT DEFAULT NULL, CHANGE animateur_fonction_id animateur_fonction_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE lieu_stage CHANGE divers divers VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE prefecture CHANGE prefecture_service_id prefecture_service_id INT DEFAULT NULL, CHANGE prefecture_autorite_id prefecture_autorite_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE tribunal CHANGE tribunal_service_id tribunal_service_id INT DEFAULT NULL, CHANGE tribunal_autorite_id tribunal_autorite_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE utilisateur CHANGE role_id role_id INT DEFAULT NULL');
    }
}
