select CITY.NAME from COUNTRY 
    right Join CITY
    on CITY.COUNTRYCODE = COUNTRY.CODE
    where CONTINENT = 'Africa'