ALTER TABLE "myfirstmodule$trainingevent" ADD "totalnumberofregistrations" INT NULL;
UPDATE "myfirstmodule$trainingevent" SET "totalnumberofregistrations" = 0;
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('f348777a-1f6b-49b7-a5f4-6d608b20f6d3', 'a16dfaed-0490-487c-9593-614ab130d1cc', 'TotalNumberOfRegistrations', 'totalnumberofregistrations', 3, 0, '0', false);
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251129 18:15:42';
