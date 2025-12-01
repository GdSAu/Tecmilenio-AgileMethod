ALTER TABLE "myfirstmodule$course" ADD CONSTRAINT "uniq_myfirstmodule$course_title" UNIQUE ("title");
INSERT INTO "mendixsystem$unique_constraint" ("name", "table_id", "column_id") VALUES ('uniq_myfirstmodule$course_title', 'a3f6f143-3b08-4dcc-84e4-baf11f8e0b74', '20c2c90a-d37e-45b9-b481-670258c08c81');
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251130 22:48:22';
