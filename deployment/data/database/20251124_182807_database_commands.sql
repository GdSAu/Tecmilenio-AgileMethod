CREATE TABLE "myfirstmodule$registration" (
	"id" BIGINT NOT NULL,
	"number" BIGINT NULL,
	"date" TIMESTAMP NULL,
	"atended" BOOLEAN NULL,
	"myfirstmodule$registration_trainee" BIGINT NULL,
	"myfirstmodule$registration_trainingevent" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE SEQUENCE "myfirstmodule$registration_number_mxseq" AS BIGINT START WITH 1;
CREATE INDEX "idx_myfirstmodule$registration_myfirstmodule$registration_trainee" ON "myfirstmodule$registration" ("myfirstmodule$registration_trainee" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$registration_myfirstmodule$registration_trainingevent" ON "myfirstmodule$registration" ("myfirstmodule$registration_trainingevent" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('d15ad913-7200-4552-93be-f0dbe43f70af', 'MyFirstModule.Registration', 'myfirstmodule$registration', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('9bbf4d3e-b637-4502-a32f-953fea952598', 'd15ad913-7200-4552-93be-f0dbe43f70af', 'Number', 'number', 0, 0, '1', true);
INSERT INTO "mendixsystem$sequence" ("attribute_id", "name", "start_value", "current_value") VALUES ('9bbf4d3e-b637-4502-a32f-953fea952598', 'myfirstmodule$registration_number_mxseq', 1, 0);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('0f77ac90-575f-4fdc-9104-19c1c5e37e5d', 'd15ad913-7200-4552-93be-f0dbe43f70af', 'Date', 'date', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('a813936f-f187-4b3c-b458-ccf4c8c7ae61', 'd15ad913-7200-4552-93be-f0dbe43f70af', 'Atended', 'atended', 10, 0, 'false', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('e409331d-a91c-3935-ba11-862d85ff4a0a', 'd15ad913-7200-4552-93be-f0dbe43f70af', 'idx_myfirstmodule$registration_myfirstmodule$registration_trainee');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('e409331d-a91c-3935-ba11-862d85ff4a0a', '5a1e71be-6b3f-462a-9989-2db6bff9c8e9', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('ddc270d4-248d-32c8-9165-a75c4971af3d', 'd15ad913-7200-4552-93be-f0dbe43f70af', 'idx_myfirstmodule$registration_myfirstmodule$registration_trainingevent');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('ddc270d4-248d-32c8-9165-a75c4971af3d', 'ef0fbba1-0bef-4676-9063-da661d54ec92', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('5a1e71be-6b3f-462a-9989-2db6bff9c8e9', 'MyFirstModule.Registration_Trainee', 'myfirstmodule$registration', 'd15ad913-7200-4552-93be-f0dbe43f70af', '0ce678cb-50fb-419d-9fed-aa1374e03d31', 'id', 'myfirstmodule$registration_trainee', 'frn_myfirstmodule$registration_myfirstmodule$registration_trainee', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('ef0fbba1-0bef-4676-9063-da661d54ec92', 'MyFirstModule.Registration_TrainingEvent', 'myfirstmodule$registration', 'd15ad913-7200-4552-93be-f0dbe43f70af', '2b347726-2bb7-4322-bba8-c88f7538f201', 'id', 'myfirstmodule$registration_trainingevent', 'frn_myfirstmodule$registration_myfirstmodule$registration_trainingevent', 2, 1);
ALTER TABLE "myfirstmodule$registration" ADD CONSTRAINT "frn_myfirstmodule$registration_myfirstmodule$registration_trainee" FOREIGN KEY ( "myfirstmodule$registration_trainee" ) REFERENCES "myfirstmodule$trainee" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$registration" ADD CONSTRAINT "frn_myfirstmodule$registration_myfirstmodule$registration_trainingevent" FOREIGN KEY ( "myfirstmodule$registration_trainingevent" ) REFERENCES "myfirstmodule$trainingevent" ( "id" ) ON DELETE SET NULL;
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251124 18:28:07';
