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
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('a8296c4d-0f1c-4d25-91da-3adc5dce7eb6', 'MyFirstModule.TrainingEvent', 'myfirstmodule$trainingevent', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('fd59bd6c-44c4-413a-85e2-e968fc969674', 'a8296c4d-0f1c-4d25-91da-3adc5dce7eb6', 'StartDate', 'startdate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('8a864307-6cf2-4161-a085-905cbe39bfe9', 'a8296c4d-0f1c-4d25-91da-3adc5dce7eb6', 'EndDate', 'enddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('a517072e-957f-3c69-a142-a8405f697a84', 'a8296c4d-0f1c-4d25-91da-3adc5dce7eb6', 'idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_course');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('a517072e-957f-3c69-a142-a8405f697a84', '6bf92e68-6141-46a0-92b5-668410e182c3', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('b5c741de-b63c-3384-ba78-c4fbb1983dfa', 'a8296c4d-0f1c-4d25-91da-3adc5dce7eb6', 'idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_teacher');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('b5c741de-b63c-3384-ba78-c4fbb1983dfa', '386a132b-2875-4c0c-8992-c5a055dd51ea', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('aa0b7b5b-6209-3a9e-9717-3f12b27290d6', 'a8296c4d-0f1c-4d25-91da-3adc5dce7eb6', 'idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_location');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('aa0b7b5b-6209-3a9e-9717-3f12b27290d6', '2eff3427-eb5c-4220-ac49-39bf2a9f48d2', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('6bf92e68-6141-46a0-92b5-668410e182c3', 'MyFirstModule.TrainingEvent_Course', 'myfirstmodule$trainingevent', 'a8296c4d-0f1c-4d25-91da-3adc5dce7eb6', '5e77dd97-cdc5-48ff-9035-60af5a543299', 'id', 'myfirstmodule$trainingevent_course', 'frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_course', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('386a132b-2875-4c0c-8992-c5a055dd51ea', 'MyFirstModule.TrainingEvent_Teacher', 'myfirstmodule$trainingevent', 'a8296c4d-0f1c-4d25-91da-3adc5dce7eb6', '8b4aca66-48a6-4896-9d41-6330c55afb1e', 'id', 'myfirstmodule$trainingevent_teacher', 'frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_teacher', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('2eff3427-eb5c-4220-ac49-39bf2a9f48d2', 'MyFirstModule.TrainingEvent_Location', 'myfirstmodule$trainingevent', 'a8296c4d-0f1c-4d25-91da-3adc5dce7eb6', 'addaa60c-309a-4124-97b8-315ad445410e', 'id', 'myfirstmodule$trainingevent_location', 'frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_location', 2, 1);
ALTER TABLE "myfirstmodule$trainingevent" ADD CONSTRAINT "frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_course" FOREIGN KEY ( "myfirstmodule$trainingevent_course" ) REFERENCES "myfirstmodule$course" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$trainingevent" ADD CONSTRAINT "frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_location" FOREIGN KEY ( "myfirstmodule$trainingevent_location" ) REFERENCES "myfirstmodule$location" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$trainingevent" ADD CONSTRAINT "frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_teacher" FOREIGN KEY ( "myfirstmodule$trainingevent_teacher" ) REFERENCES "myfirstmodule$teacher" ( "id" ) ON DELETE SET NULL;
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251114 19:02:03';
