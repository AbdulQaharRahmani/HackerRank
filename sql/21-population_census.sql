select sum(CITY.POPULATION) from COUNTRY 
    Left Join CITY
    on CITY.COUNTRYCODE = COUNTRY.CODE
    where CONTINENT = 'Asia'