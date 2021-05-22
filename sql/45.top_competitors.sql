-- always read question carefully please
-- also a student can score more than the maximum and it's not full score daa
select s.hacker_id,
    h.name
from Submissions s
    join Challenges c using(challenge_id)
    join Difficulty d using (difficulty_level)
    join Hackers h on h.hacker_id = s.hacker_id
where s.score = d.score
group by s.hacker_id,
    h.name
having count(*) > 1
order by count(*) desc,
    s.hacker_id;