select  "f"."releaseYear",
        "c"."name" as "category"
from "filmCategory"
join "films" as "f" using ("filmId")
join "categories" as "c" using ("categoryId")
where "f"."title" = 'Boogie Amelie';
