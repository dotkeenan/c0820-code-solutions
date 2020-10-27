select "a"."firstName",
       "a"."lastName"
from "castMembers"
join "actors" as "a" using ("actorId")
join "films" using ("filmId")
where "films"."title" = 'Jersey Sassy'
