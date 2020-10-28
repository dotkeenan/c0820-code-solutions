/*
List the categories of movies (and how many) that 'Lisa Monroe' appeared in. She
appeared in a lot of films! Your results should include 3 Sports films
and 2 Sci-Fi films, plus a lot more!

 films: filmId, title
 filmCategory: filmId, categoryId
  categories: categoryId, name

*/

select "c"."name" as "category",
        count("c"."name") as "categoryCount"
from "actors" as "a"
join "castMembers" as "cm" using ("actorId")
join "filmCategory" as "fc" using ("filmId")
join "categories" as "c" using ("categoryId")
where "a"."firstName" = 'Lisa'
and   "a"."lastName" = 'Monroe'
group by "c"."name"
order by "categoryCount" desc
