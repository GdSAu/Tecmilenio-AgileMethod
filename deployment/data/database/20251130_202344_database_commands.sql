ALTER TABLE "myfirstmodule$trainingevent" ADD "totalnumberofregistrations" INT NULL;
UPDATE "myfirstmodule$trainingevent" SET "totalnumberofregistrations" = 0;
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('f68f3189-08dd-4a33-b48c-4f6537ca9c66', '25ac935f-c75d-4b29-9134-5120d1625bf6', 'TotalNumberOfRegistrations', 'totalnumberofregistrations', 3, 0, '0', false);
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251130 20:23:44';
