CREATE TABLE "myfirstmodule$registration" (
	"id" BIGINT NOT NULL,
	"number" BIGINT NULL,
	"date" TIMESTAMP NULL,
	"attended" BOOLEAN NULL,
	"myfirstmodule$registration_trainingevent" BIGINT NULL,
	"myfirstmodule$registration_trainee" BIGINT NULL,
	PRIMARY KEY("id"));
CREATE SEQUENCE "myfirstmodule$registration_number_mxseq" AS BIGINT START WITH 1;
CREATE INDEX "idx_myfirstmodule$registration_myfirstmodule$registration_trainingevent" ON "myfirstmodule$registration" ("myfirstmodule$registration_trainingevent" ASC,"id" ASC);
CREATE INDEX "idx_myfirstmodule$registration_myfirstmodule$registration_trainee" ON "myfirstmodule$registration" ("myfirstmodule$registration_trainee" ASC,"id" ASC);
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('6476830e-498f-4b99-b684-087550c897a8', 'MyFirstModule.Registration', 'myfirstmodule$registration', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('3f48ccba-f814-4df1-9306-0fc96f2c041a', '6476830e-498f-4b99-b684-087550c897a8', 'Number', 'number', 0, 0, '1', true);
INSERT INTO "mendixsystem$sequence" ("attribute_id", "name", "start_value", "current_value") VALUES ('3f48ccba-f814-4df1-9306-0fc96f2c041a', 'myfirstmodule$registration_number_mxseq', 1, 0);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('e84ec1a3-dee4-4b44-a1dd-a2e930724317', '6476830e-498f-4b99-b684-087550c897a8', 'Date', 'date', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('8e9297df-35b0-4ee7-9abe-01499ede760f', '6476830e-498f-4b99-b684-087550c897a8', 'Attended', 'attended', 10, 0, 'false', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('9043e733-ae8c-356a-9714-9ad79ae3966c', '6476830e-498f-4b99-b684-087550c897a8', 'idx_myfirstmodule$registration_myfirstmodule$registration_trainingevent');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('9043e733-ae8c-356a-9714-9ad79ae3966c', 'f703ea9e-2d95-46da-99a4-b819060688d6', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('bcaa15e4-62c9-3700-84e9-81fae437c1ad', '6476830e-498f-4b99-b684-087550c897a8', 'idx_myfirstmodule$registration_myfirstmodule$registration_trainee');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('bcaa15e4-62c9-3700-84e9-81fae437c1ad', '6ebfb8e1-3521-4a16-bc29-49f9d57b7b6c', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('f703ea9e-2d95-46da-99a4-b819060688d6', 'MyFirstModule.Registration_TrainingEvent', 'myfirstmodule$registration', '6476830e-498f-4b99-b684-087550c897a8', '324b9430-9195-4942-b1d6-634524a42458', 'id', 'myfirstmodule$registration_trainingevent', 'frn_myfirstmodule$registration_myfirstmodule$registration_trainingevent', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('6ebfb8e1-3521-4a16-bc29-49f9d57b7b6c', 'MyFirstModule.Registration_Trainee', 'myfirstmodule$registration', '6476830e-498f-4b99-b684-087550c897a8', '4b69fbcf-3b75-40c2-bfb9-4dc1b9d513c6', 'id', 'myfirstmodule$registration_trainee', 'frn_myfirstmodule$registration_myfirstmodule$registration_trainee', 2, 1);
ALTER TABLE "myfirstmodule$registration" ADD CONSTRAINT "frn_myfirstmodule$registration_myfirstmodule$registration_trainee" FOREIGN KEY ( "myfirstmodule$registration_trainee" ) REFERENCES "myfirstmodule$trainee" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$registration" ADD CONSTRAINT "frn_myfirstmodule$registration_myfirstmodule$registration_trainingevent" FOREIGN KEY ( "myfirstmodule$registration_trainingevent" ) REFERENCES "myfirstmodule$trainingevent" ( "id" ) ON DELETE SET NULL;
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251201 17:01:58';
