ALTER TABLE "myfirstmodule$trainingevent" ADD "totalnumberofregistrations" INT NULL;
UPDATE "myfirstmodule$trainingevent" SET "totalnumberofregistrations" = 0;
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('3267dd40-1f05-4ece-ab51-2c20b47947fb', '324b9430-9195-4942-b1d6-634524a42458', 'TotalNumberOfRegistrations', 'totalnumberofregistrations', 3, 0, '0', false);
ALTER TABLE "myfirstmodule$course" ADD CONSTRAINT "uniq_myfirstmodule$course_title" UNIQUE ("title");
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_myfirstmodule$course_title', 'ca342953-0abe-47e8-aae5-d40eab373476', '5701ac7b-9d2f-41b4-b5c3-9c9d894e8227');
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251201 19:05:30';
