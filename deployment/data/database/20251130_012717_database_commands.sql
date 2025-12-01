CREATE TABLE "myfirstmodule$trainingevent" (
	"id" BIGINT NOT NULL,
	"startdate" TIMESTAMP NULL,
	"enddate" TIMESTAMP NULL,
	"myfirstmodule$trainingevent_course" BIGINT NULL,
	"myfirstmodule$trainingevent_teacher" BIGINT NULL,
	"myfirstmodule$trainingevent_location" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE INDEX "idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_course" ON "myfirstmodule$trainingevent" ("myfirstmodule$trainingevent_course" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_teacher" ON "myfirstmodule$trainingevent" ("myfirstmodule$trainingevent_teacher" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_location" ON "myfirstmodule$trainingevent" ("myfirstmodule$trainingevent_location" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('25ac935f-c75d-4b29-9134-5120d1625bf6', 'MyFirstModule.TrainingEvent', 'myfirstmodule$trainingevent', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('54aa1834-53b6-44b8-a50b-937ff82d3cad', '25ac935f-c75d-4b29-9134-5120d1625bf6', 'StartDate', 'startdate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('07e57c33-3b29-4292-a723-ada259b212cd', '25ac935f-c75d-4b29-9134-5120d1625bf6', 'EndDate', 'enddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('f95e187b-2434-3c48-98d8-830303b698f2', '25ac935f-c75d-4b29-9134-5120d1625bf6', 'idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_course');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('f95e187b-2434-3c48-98d8-830303b698f2', 'a11b99df-2298-4f12-8b96-80dfd87d72de', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('b60c1c15-0189-3549-b676-6c03572fa020', '25ac935f-c75d-4b29-9134-5120d1625bf6', 'idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_teacher');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('b60c1c15-0189-3549-b676-6c03572fa020', '7a21299d-6622-437f-b21b-fb772985df5b', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('c4715d95-0dc6-32e0-9f77-26f40ca691d9', '25ac935f-c75d-4b29-9134-5120d1625bf6', 'idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_location');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('c4715d95-0dc6-32e0-9f77-26f40ca691d9', 'b96b2721-aa4a-4335-a21c-0b88ecbfaa1e', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('a11b99df-2298-4f12-8b96-80dfd87d72de', 'MyFirstModule.TrainingEvent_Course', 'myfirstmodule$trainingevent', '25ac935f-c75d-4b29-9134-5120d1625bf6', 'a3f6f143-3b08-4dcc-84e4-baf11f8e0b74', 'id', 'myfirstmodule$trainingevent_course', 'frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_course', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('7a21299d-6622-437f-b21b-fb772985df5b', 'MyFirstModule.TrainingEvent_Teacher', 'myfirstmodule$trainingevent', '25ac935f-c75d-4b29-9134-5120d1625bf6', '6fb7fa2b-b7fe-4fff-b277-16f7187f23d2', 'id', 'myfirstmodule$trainingevent_teacher', 'frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_teacher', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('b96b2721-aa4a-4335-a21c-0b88ecbfaa1e', 'MyFirstModule.TrainingEvent_Location', 'myfirstmodule$trainingevent', '25ac935f-c75d-4b29-9134-5120d1625bf6', '57f0548e-57ae-4f97-be70-5e84d2e60eac', 'id', 'myfirstmodule$trainingevent_location', 'frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_location', 2, 1);
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
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('da8e6a63-4a55-474a-931c-db3307b89d58', 'MyFirstModule.Registration', 'myfirstmodule$registration', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('c4ecfd0e-7658-4438-9c6b-42f4c57676b1', 'da8e6a63-4a55-474a-931c-db3307b89d58', 'Number', 'number', 0, 0, '1', true);
INSERT INTO "mendixsystem$sequence" ("attribute_id", "name", "start_value", "current_value") VALUES ('c4ecfd0e-7658-4438-9c6b-42f4c57676b1', 'myfirstmodule$registration_number_mxseq', 1, 0);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('6e8ae133-8a5c-4fb1-a0e6-7357af8c9277', 'da8e6a63-4a55-474a-931c-db3307b89d58', 'Date', 'date', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('289c4262-bbc3-4248-99cb-e93979521a27', 'da8e6a63-4a55-474a-931c-db3307b89d58', 'Attended', 'attended', 10, 0, 'false', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('048a5d74-fb94-3f0e-8167-f8a2b3550d15', 'da8e6a63-4a55-474a-931c-db3307b89d58', 'idx_myfirstmodule$registration_myfirstmodule$registration_trainee');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('048a5d74-fb94-3f0e-8167-f8a2b3550d15', 'd2cfeb99-bab3-441c-adc7-26ce4647dc4e', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('0a933ec7-9b54-3fde-9e3a-3eca7610aeaa', 'da8e6a63-4a55-474a-931c-db3307b89d58', 'idx_myfirstmodule$registration_myfirstmodule$registration_trainingevent');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('0a933ec7-9b54-3fde-9e3a-3eca7610aeaa', 'b687ebe1-c18d-48ee-8be1-bde6c198e96b', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('d2cfeb99-bab3-441c-adc7-26ce4647dc4e', 'MyFirstModule.Registration_Trainee', 'myfirstmodule$registration', 'da8e6a63-4a55-474a-931c-db3307b89d58', '9595fbc6-f1e8-40c7-ae96-bcf786e1a49a', 'id', 'myfirstmodule$registration_trainee', 'frn_myfirstmodule$registration_myfirstmodule$registration_trainee', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('b687ebe1-c18d-48ee-8be1-bde6c198e96b', 'MyFirstModule.Registration_TrainingEvent', 'myfirstmodule$registration', 'da8e6a63-4a55-474a-931c-db3307b89d58', '25ac935f-c75d-4b29-9134-5120d1625bf6', 'id', 'myfirstmodule$registration_trainingevent', 'frn_myfirstmodule$registration_myfirstmodule$registration_trainingevent', 2, 1);
ALTER TABLE "myfirstmodule$trainingevent" ADD CONSTRAINT "frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_course" FOREIGN KEY ( "myfirstmodule$trainingevent_course" ) REFERENCES "myfirstmodule$course" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$trainingevent" ADD CONSTRAINT "frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_location" FOREIGN KEY ( "myfirstmodule$trainingevent_location" ) REFERENCES "myfirstmodule$location" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$trainingevent" ADD CONSTRAINT "frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_teacher" FOREIGN KEY ( "myfirstmodule$trainingevent_teacher" ) REFERENCES "myfirstmodule$teacher" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$registration" ADD CONSTRAINT "frn_myfirstmodule$registration_myfirstmodule$registration_trainee" FOREIGN KEY ( "myfirstmodule$registration_trainee" ) REFERENCES "myfirstmodule$trainee" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$registration" ADD CONSTRAINT "frn_myfirstmodule$registration_myfirstmodule$registration_trainingevent" FOREIGN KEY ( "myfirstmodule$registration_trainingevent" ) REFERENCES "myfirstmodule$trainingevent" ( "id" ) ON DELETE SET NULL;
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251130 01:27:17';
