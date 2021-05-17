select test
from (
        select CONCAT(Name, '(', substr(Occupation, 1, 1), ')') as test,
            1 as sort
        from (
                select Name,
                    Occupation
                from OCCUPATIONS
                Order by Name
            ) as s
        union
        select CONCAT('There are a total of ', c, ' ', Occupation, 's.') as test,
            2 as sort
        from (
                select count(*) as c,
                    lower(Occupation) as Occupation
                from OCCUPATIONS
                group by Occupation
                Order by count(*),
                    Occupation
            ) as t
    ) as k
order by sort,
    test