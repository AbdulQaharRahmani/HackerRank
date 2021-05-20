delimiter $ create procedure mean(m int) begin
select round(LAT_N, 4)
from STATION
order by LAT_N
LIMIT m, 1;
end $ delimiter;
set @middle = (
        select ceil(count(*) / 2)
        from STATION
    );
call mean(@middle -1);