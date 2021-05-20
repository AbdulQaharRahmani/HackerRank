select case
        when Grade < 8 then null
        else Name
    end as name,
    Grade,
    Marks
from Students,
    Grades
where MARKS >= MIN_MARK
    AND MARKS <= MAX_MARK
order by Grade DESC,
    Name;