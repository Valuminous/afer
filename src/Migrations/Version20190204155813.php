<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190204155813 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE role (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE stagiaire_stage (stagiaire_id INT NOT NULL, stage_id INT NOT NULL, INDEX IDX_979FD2C5BBA93DD6 (stagiaire_id), INDEX IDX_979FD2C52298D193 (stage_id), PRIMARY KEY(stagiaire_id, stage_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE stagiaire_stage ADD CONSTRAINT FK_979FD2C5BBA93DD6 FOREIGN KEY (stagiaire_id) REFERENCES stagiaire (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE stagiaire_stage ADD CONSTRAINT FK_979FD2C52298D193 FOREIGN KEY (stage_id) REFERENCES stage (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE prefecture CHANGE prefecture_service_id prefecture_service_id INT DEFAULT NULL, CHANGE prefecture_autorite_id prefecture_autorite_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE utilisateur ADD role_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE utilisateur ADD CONSTRAINT FK_1D1C63B3D60322AC FOREIGN KEY (role_id) REFERENCES role (id)');
        $this->addSql('CREATE INDEX IDX_1D1C63B3D60322AC ON utilisateur (role_id)');
        $this->addSql('ALTER TABLE tribunal CHANGE tribunal_service_id tribunal_service_id INT DEFAULT NULL, CHANGE tribunal_autorite_id tribunal_autorite_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE animateur CHANGE animateur_statut_id animateur_statut_id INT DEFAULT NULL, CHANGE animateur_fonction_id animateur_fonction_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE lieu_stage CHANGE divers divers VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE stagiaire DROP FOREIGN KEY FK_4F62F7312298D193');
        $this->addSql('DROP INDEX IDX_4F62F7312298D193 ON stagiaire');
        $this->addSql('ALTER TABLE stagiaire DROP stage_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE utilisateur DROP FOREIGN KEY FK_1D1C63B3D60322AC');
        $this->addSql('DROP TABLE role');
        $this->addSql('DROP TABLE stagiaire_stage');
        $this->addSql('ALTER TABLE animateur CHANGE animateur_statut_id animateur_statut_id INT DEFAULT NULL, CHANGE animateur_fonction_id animateur_fonction_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE lieu_stage CHANGE divers divers VARCHAR(255) DEFAULT \'NULL\' COLLATE utf8mb4_unicode_ci');
        $this->addSql('ALTER TABLE prefecture CHANGE prefecture_service_id prefecture_service_id INT DEFAULT NULL, CHANGE prefecture_autorite_id prefecture_autorite_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE stagiaire ADD stage_id INT NOT NULL');
        $this->addSql('ALTER TABLE stagiaire ADD CONSTRAINT FK_4F62F7312298D193 FOREIGN KEY (stage_id) REFERENCES stage (id)');
        $this->addSql('CREATE INDEX IDX_4F62F7312298D193 ON stagiaire (stage_id)');
        $this->addSql('ALTER TABLE tribunal CHANGE tribunal_service_id tribunal_service_id INT DEFAULT NULL, CHANGE tribunal_autorite_id tribunal_autorite_id INT DEFAULT NULL');
        $this->addSql('DROP INDEX IDX_1D1C63B3D60322AC ON utilisateur');
        $this->addSql('ALTER TABLE utilisateur DROP role_id');
    }
}
