ALTER TABLE "myfirstmodule$trainingevent" ADD "totalnumberofregistrations" INT NULL;
UPDATE "myfirstmodule$trainingevent" SET "totalnumberofregistrations" = 0;
INSERT INTO "mendixsystem$attribute" ("id", "entity_id", "attribute_name", "column_name", "type", "length", "default_value", "is_auto_number") VALUES ('cd8618f2-13ec-4af9-818b-805ccc11e277', 'a8296c4d-0f1c-4d25-91da-3adc5dce7eb6', 'TotalNumberOfRegistrations', 'totalnumberofregistrations', 3, 0, '0', false);
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251127 21:10:44';
