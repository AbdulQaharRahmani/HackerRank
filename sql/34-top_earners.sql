select months * salary,
    count(*)
from Employee
where months * salary = (
        select max(months * salary) as k
        from Employee
    )
group by months * salary;