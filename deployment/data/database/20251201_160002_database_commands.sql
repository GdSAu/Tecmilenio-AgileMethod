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
INSERT INTO "mendixsystem$entity" ("id", "entity_name", "table_name", "remote", "remote_primary_key") VALUES ('324b9430-9195-4942-b1d6-634524a42458', 'MyFirstModule.TrainingEvent', 'myfirstmodule$trainingevent', false, false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('30281dd7-7caa-4d18-916e-e06711da1583', '324b9430-9195-4942-b1d6-634524a42458', 'StartDate', 'startdate', 20, 0, '', false);
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('cad73485-6e98-49fc-9f05-094e81fc2780', '324b9430-9195-4942-b1d6-634524a42458', 'EndDate', 'enddate', 20, 0, '', false);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('ee539f9c-1975-3477-9461-bdb84965f63c', '324b9430-9195-4942-b1d6-634524a42458', 'idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_course');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('ee539f9c-1975-3477-9461-bdb84965f63c', 'b46e379c-f12b-411c-87c1-1e7b04e24766', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('e16ba44b-ef90-3019-986d-f4c70486fdb9', '324b9430-9195-4942-b1d6-634524a42458', 'idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_teacher');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('e16ba44b-ef90-3019-986d-f4c70486fdb9', '065ba0da-0942-40ec-9624-2fde0d9cd8e3', false, 0);
INSERT INTO "mendixsystem$index" ("id", "table_id", "index_name") VALUES ('1d01516a-bba7-3f29-9788-a9dbf04f5768', '324b9430-9195-4942-b1d6-634524a42458', 'idx_myfirstmodule$trainingevent_myfirstmodule$trainingevent_location');
INSERT INTO "mendixsystem$index_column" ("index_id", "column_id", "sort_order", "ordinal") VALUES ('1d01516a-bba7-3f29-9788-a9dbf04f5768', '5ab2ea2d-c51e-4f75-a84d-df9cb61c3722', false, 0);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('b46e379c-f12b-411c-87c1-1e7b04e24766', 'MyFirstModule.TrainingEvent_Course', 'myfirstmodule$trainingevent', '324b9430-9195-4942-b1d6-634524a42458', 'ca342953-0abe-47e8-aae5-d40eab373476', 'id', 'myfirstmodule$trainingevent_course', 'frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_course', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('065ba0da-0942-40ec-9624-2fde0d9cd8e3', 'MyFirstModule.TrainingEvent_Teacher', 'myfirstmodule$trainingevent', '324b9430-9195-4942-b1d6-634524a42458', 'ea9f44da-b5a4-4c3e-8c74-a9c7154b60ac', 'id', 'myfirstmodule$trainingevent_teacher', 'frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_teacher', 2, 1);
INSERT INTO "mendixsystem$association" ("id", "association_name", "table_name", "parent_entity_id", "child_entity_id", "parent_column_name", "child_column_name", "child_fkc_name", "child_fkc_action", "storage_format") VALUES ('5ab2ea2d-c51e-4f75-a84d-df9cb61c3722', 'MyFirstModule.TrainingEvent_Location', 'myfirstmodule$trainingevent', '324b9430-9195-4942-b1d6-634524a42458', '614bacc9-cb65-49f4-af81-8744e4261ead', 'id', 'myfirstmodule$trainingevent_location', 'frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_location', 2, 1);
ALTER TABLE "myfirstmodule$trainingevent" ADD CONSTRAINT "frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_course" FOREIGN KEY ( "myfirstmodule$trainingevent_course" ) REFERENCES "myfirstmodule$course" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$trainingevent" ADD CONSTRAINT "frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_location" FOREIGN KEY ( "myfirstmodule$trainingevent_location" ) REFERENCES "myfirstmodule$location" ( "id" ) ON DELETE SET NULL;
ALTER TABLE "myfirstmodule$trainingevent" ADD CONSTRAINT "frn_myfirstmodule$trainingevent_myfirstmodule$trainingevent_teacher" FOREIGN KEY ( "myfirstmodule$trainingevent_teacher" ) REFERENCES "myfirstmodule$teacher" ( "id" ) ON DELETE SET NULL;
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251201 16:00:02';
