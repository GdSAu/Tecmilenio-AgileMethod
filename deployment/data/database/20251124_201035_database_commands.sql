ALTER TABLE "myfirstmodule$trainingevent" ADD "totalnumberofregistrations" INT NULL;
UPDATE "myfirstmodule$trainingevent" SET "totalnumberofregistrations" = 0;
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('2f1e63fc-858b-4dbe-ba48-194eebd33af7', '2b347726-2bb7-4322-bba8-c88f7538f201', 'TotalNumberOfRegistrations', 'totalnumberofregistrations', 3, 0, '0', false);
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251124 20:10:35';
