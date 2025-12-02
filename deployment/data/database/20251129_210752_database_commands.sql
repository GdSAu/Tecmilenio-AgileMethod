ALTER TABLE "myfirstmodule$teacher" ALTER COLUMN "address" RENAME TO "emailaddress";
UPDATE "mendixsystem$attribute" SET "entity_id" = 'd310055d-caeb-4d02-bd13-94b66409f4f8', "attribute_name" = 'EmailAddress', "column_name" = 'emailaddress', "type" = 30, "length" = 200, "default_value" = '', "is_auto_number" = false WHERE "id" = 'cace30e6-18b6-4763-89a0-39cb8549849b';
UPDATE "mendixsystem$version" SET "versionnumber" = '4.2', "lastsyncdate" = '20251129 21:07:52';
