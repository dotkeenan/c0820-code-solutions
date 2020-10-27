select "c"."firstName",
        "c"."lastName"
from "rentals"
join "inventory" using ("inventoryId")
join "films" using ("filmId")
join "customers" as "c" using ("customerId")
where "films"."title" = 'Magic Mallrats';
