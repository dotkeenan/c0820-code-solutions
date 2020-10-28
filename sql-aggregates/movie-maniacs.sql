/*
-List the first and last name of all customers, plus the total amount
they've spent on rentals.
-Order them by total paid, descending.
-Karl Seal should be first with $221.55 paid.

customers: customerId, firstName, lastName
payments: paymentId, customerId, amount

customers > payments
 */

select "c"."firstName",
       "c"."lastName",
       sum("p"."amount") as "totalSpent"
from "customers" as "c"
join "payments" as "p" using ("customerId")
group by "c"."customerId"
order by "totalSpent" desc
