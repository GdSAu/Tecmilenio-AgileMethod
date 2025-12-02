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
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('7fc250d1-e0bc-4de2-8a25-17e492dff0d9', 'MyFirstModule.Registration', 'myfirstmodule$registration', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('399e9f54-09d7-41dc-8eb3-685ddaf1c6f0', '7fc250d1-e0bc-4de2-8a25-17e492dff0d9', 'Number', 'number', 0, 0, '1', true);
INSERT INTO "mendixsystem$sequence" ("attribute_id", "name", "start_value", "current_value") VALUES ('399e9f54-09d7-41dc-8eb3-685ddaf1c6f0', 'myfirstmodule$registration_number_mxseq', 1, 0);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('71004920-6e57-4702-aa6f-cdf9ed0c7b7f', '7fc250d1-e0bc-4de2-8a25-17e492dff0d9', 'Date', 'date', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('3022c518-a43e-4194-bca7-338075589926', '7fc250d1-e0bc-4de2-8a25-17e492dff0d9', 'Attended', 'attended', 10, 0, 'false', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('dd55c875-2c95-335d-b545-4f6ed693bb4e', '7fc250d1-e0bc-4de2-8a25-17e492dff0d9', 'idx_myfirstmodule$registration_myfirstmodule$registration_trainee');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('dd55c875-2c95-335d-b545-4f6ed693bb4e', '4369f2d4-6803-4f36-b597-ac7e423b183d', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('7ff9d77e-df49-3ae4-9db0-48c0850ce1be', '7fc250d1-e0bc-4de2-8a25-17e492dff0d9', 'idx_myfirstmodule$registration_myfirstmodule$registration_trainingevent');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('7ff9d77e-df49-3ae4-9db0-48c0850ce1be', '79eda78c-f929-47e7-a470-c75e2510c52f', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('4369f2d4-6803-4f36-b597-ac7e423b183d', 'MyFirstModule.Registration_Trainee', 'myfirstmodule$registration', '7fc250d1-e0bc-4de2-8a25-17e492dff0d9', 'b666d613-e3f3-4311-90c2-119bba55c987', 'id', 'myfirstmodule$registration_trainee', 'frn_myfirstmodule$registration_myfirstmodule$registration_trainee', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('79eda78c-f929-47e7-a470-c75e2510c52f', 'MyFirstModule.Registration_TrainingEvent', 'myfirstmodule$registration', '7fc250d1-e0bc-4de2-8a25-17e492dff0d9', 'a8296c4d-0f1c-4d25-91da-3adc5dce7eb6', 'id', 'myfirstmodule$registration_trainingevent', 'frn_myfirstmodule$registration_myfirstmodule$registration_trainingevent', 2, 1);
ALTER TABLE "myfirstmodule$registration" ADD CONSTRAINT "frn_myfirstmodule$registration_myfirstmodule$registration_trainee" FOREIGN KEY ( "myfirstmodule$registration_trainee" ) REFERENCES "myfirstmodule$trainee" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$registration" ADD CONSTRAINT "frn_myfirstmodule$registration_myfirstmodule$registration_trainingevent" FOREIGN KEY ( "myfirstmodule$registration_trainingevent" ) REFERENCES "myfirstmodule$trainingevent" ( "id" ) ON DELETE SET NULL;
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251114 19:38:35';
