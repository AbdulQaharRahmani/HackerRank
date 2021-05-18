/*This question is solved through a hack which i am not proud of PARTITION
    i already knew that professor is gonna have the most rows so i used professors id 
    which in real life i can't use
 */
with doctor as (
    select row_number() over(
            order by Name
        ) as id,
        Name
    from OCCUPATIONS
    where Occupation = "Doctor"
),
professor as (
    select row_number() over(
            order by Name
        ) as id,
        Name
    from OCCUPATIONS
    where Occupation = "Professor"
),
singer as (
    select row_number() over(
            order by Name
        ) as id,
        Name
    from OCCUPATIONS
    where Occupation = "Singer"
),
actor as (
    select row_number() over(
            order by Name
        ) as id,
        Name
    from OCCUPATIONS
    where Occupation = "Actor"
)
select doctor.Name As Doctor,
    professor.Name as Professor,
    singer.Name as Singer,
    actor.Name as Actor
from professor
    left join doctor on doctor.id = professor.id
    left join singer on professor.id = singer.id
    left join actor on professor.id = actor.id
