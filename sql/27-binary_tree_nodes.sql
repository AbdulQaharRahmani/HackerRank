create view children as
select N,
    sum(if(C is null, 0, 1)) as total
from (
        select a.N as N,
            b.N as C
        from BST a
            left join BST b on a.N = b.P
    ) as temp
group by temp.N
order by temp.N;
create view parents as
select N,
    sum(if(C is null, 0, 1)) as total
from (
        select a.N as N,
            b.N as C
        from BST a
            left join BST b on a.P = b.N
    ) as temp
group by temp.N
order by temp.N;
create view endresult as
select children.N as node,
    children.total as c,
    parents.total as p
from children
    left join parents on children.N = parents.N;
select case
        when endresult.p = 0 then concat(endresult.node, " Root")
        when endresult.c > 0 then concat(endresult.node, " Inner")
        else concat(endresult.node, " Leaf")
    end
from endresult;