CREATE TABLE "myfirstmodule$registration" (
	"id" BIGINT NOT NULL,
	"number" BIGINT NULL,
	"date" TIMESTAMP NULL,
	"attended" BOOLEAN NULL,
	"myfirstmodule$registration_trainee" BIGINT NULL,
	"myfirstmodule$registration_trainingevent" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE SEQUENCE "myfirstmodule$registration_number_mxseq" AS BIGINT START WITH 1;
CREATE INDEX "idx_myfirstmodule$registration_myfirstmodule$registration_trainee" ON "myfirstmodule$registration" ("myfirstmodule$registration_trainee" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$registration_myfirstmodule$registration_trainingevent" ON "myfirstmodule$registration" ("myfirstmodule$registration_trainingevent" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('8420173f-4076-403b-b8a1-6cecc5433827', 'MyFirstModule.Registration', 'myfirstmodule$registration', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('e273fce1-3282-429b-8560-5322ccd9b05f', '8420173f-4076-403b-b8a1-6cecc5433827', 'Number', 'number', 0, 0, '1', true);
INSERT INTO "mendixsystem$sequence" ("attribute_id", "name", "start_value", "current_value") VALUES ('e273fce1-3282-429b-8560-5322ccd9b05f', 'myfirstmodule$registration_number_mxseq', 1, 0);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('b6ebad81-6fa6-4c10-8a48-1cff053daaed', '8420173f-4076-403b-b8a1-6cecc5433827', 'Date', 'date', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('dcd2bce9-21ee-41bc-8861-a9f908fbe85c', '8420173f-4076-403b-b8a1-6cecc5433827', 'Attended', 'attended', 10, 0, 'false', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('a7241e93-8bb7-3513-b986-cd0ad166598f', '8420173f-4076-403b-b8a1-6cecc5433827', 'idx_myfirstmodule$registration_myfirstmodule$registration_trainee');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('a7241e93-8bb7-3513-b986-cd0ad166598f', 'f23905f2-4349-4d88-b96f-98e2473575a1', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('963a9e36-cc43-3cf4-b469-295b3a9baff8', '8420173f-4076-403b-b8a1-6cecc5433827', 'idx_myfirstmodule$registration_myfirstmodule$registration_trainingevent');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('963a9e36-cc43-3cf4-b469-295b3a9baff8', '9ce0b3d4-c8bf-496b-bedf-eeda8f807cd0', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('f23905f2-4349-4d88-b96f-98e2473575a1', 'MyFirstModule.Registration_Trainee', 'myfirstmodule$registration', '8420173f-4076-403b-b8a1-6cecc5433827', 'a50b4a9a-5ae1-47bf-86ff-edc408598c6e', 'id', 'myfirstmodule$registration_trainee', 'frn_myfirstmodule$registration_myfirstmodule$registration_trainee', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('9ce0b3d4-c8bf-496b-bedf-eeda8f807cd0', 'MyFirstModule.Registration_TrainingEvent', 'myfirstmodule$registration', '8420173f-4076-403b-b8a1-6cecc5433827', 'a16dfaed-0490-487c-9593-614ab130d1cc', 'id', 'myfirstmodule$registration_trainingevent', 'frn_myfirstmodule$registration_myfirstmodule$registration_trainingevent', 2, 1);
ALTER TABLE "myfirstmodule$registration" ADD CONSTRAINT "frn_myfirstmodule$registration_myfirstmodule$registration_trainee" FOREIGN KEY ( "myfirstmodule$registration_trainee" ) REFERENCES "myfirstmodule$trainee" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$registration" ADD CONSTRAINT "frn_myfirstmodule$registration_myfirstmodule$registration_trainingevent" FOREIGN KEY ( "myfirstmodule$registration_trainingevent" ) REFERENCES "myfirstmodule$trainingevent" ( "id" ) ON DELETE SET NULL;
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251129 02:49:35';
