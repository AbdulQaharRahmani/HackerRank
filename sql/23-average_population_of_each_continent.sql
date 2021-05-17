select CONTINENT , floor(avg(CITY.POPULATION)) from COUNTRY 
    inner Join CITY
    on CITY.COUNTRYCODE = COUNTRY.CODE
    group by CONTINENT