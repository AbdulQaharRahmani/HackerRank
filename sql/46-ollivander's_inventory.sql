select substring_index(
        group_concat(
            id
            order by coins_needed
        ),
        ',',
        1
    ) as id,
    age,
    min(coins_needed),
    power
from Wands
    inner join Wands_property using (code)
where is_evil = 0
group by age,
    power
order by power desc,
    age desc;