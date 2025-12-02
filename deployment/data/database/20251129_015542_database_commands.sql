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
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('a16dfaed-0490-487c-9593-614ab130d1cc', 'MyFirstModule.TrainingEvent', 'myfirstmodule$trainingevent', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('5cd2d867-f074-42d0-9f7a-4d721f0e5485', 'a16dfaed-0490-487c-9593-614ab130d1cc', 'StartDate', 'startdate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('581f9055-d306-4a18-a66b-6a9af2215e6a', 'a16dfaed-0490-487c-9593-614ab130d1cc', 'EndDate', 'enddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('b49edd53-f190-32e0-a773-07c426c1379e', 'a16dfaed-0490-487c-9593-614ab130d1cc', 'idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_course');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('b49edd53-f190-32e0-a773-07c426c1379e', '7c16da93-e1c5-494e-8f16-f3129147d0db', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('c93a8e91-678b-3ec0-bdea-c9a6bc641654', 'a16dfaed-0490-487c-9593-614ab130d1cc', 'idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_teacher');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('c93a8e91-678b-3ec0-bdea-c9a6bc641654', 'e788776d-53da-464a-a6d0-ea1b95700111', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('ffd2fb4d-c73d-3fec-9d9d-5eefd4947983', 'a16dfaed-0490-487c-9593-614ab130d1cc', 'idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_location');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('ffd2fb4d-c73d-3fec-9d9d-5eefd4947983', 'b7cdcc83-f6b4-4179-ab17-e478f82630e3', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('7c16da93-e1c5-494e-8f16-f3129147d0db', 'MyFirstModule.TrainingEvent_Course', 'myfirstmodule$trainingevent', 'a16dfaed-0490-487c-9593-614ab130d1cc', '724a1d51-1bfe-404e-be50-14541846a2d2', 'id', 'myfirstmodule$trainingevent_course', 'frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_course', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('e788776d-53da-464a-a6d0-ea1b95700111', 'MyFirstModule.TrainingEvent_Teacher', 'myfirstmodule$trainingevent', 'a16dfaed-0490-487c-9593-614ab130d1cc', 'd310055d-caeb-4d02-bd13-94b66409f4f8', 'id', 'myfirstmodule$trainingevent_teacher', 'frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_teacher', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('b7cdcc83-f6b4-4179-ab17-e478f82630e3', 'MyFirstModule.TrainingEvent_Location', 'myfirstmodule$trainingevent', 'a16dfaed-0490-487c-9593-614ab130d1cc', 'd6f6f627-2df2-4c43-9be2-429b725116d1', 'id', 'myfirstmodule$trainingevent_location', 'frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_location', 2, 1);
ALTER TABLE "myfirstmodule$trainingevent" ADD CONSTRAINT "frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_course" FOREIGN KEY ( "myfirstmodule$trainingevent_course" ) REFERENCES "myfirstmodule$course" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$trainingevent" ADD CONSTRAINT "frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_location" FOREIGN KEY ( "myfirstmodule$trainingevent_location" ) REFERENCES "myfirstmodule$location" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$trainingevent" ADD CONSTRAINT "frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_teacher" FOREIGN KEY ( "myfirstmodule$trainingevent_teacher" ) REFERENCES "myfirstmodule$teacher" ( "id" ) ON DELETE SET NULL;
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251129 01:55:42';
