const CountryData = ({country,handleVisitedCountry,handleVisitedflags}) => {

    console.log('inside country data',country ,handleVisitedCountry, handleVisitedflags);

    return (
        <div>
            <p><small>Country Data:{country.name.common}</small></p>
        </div>
    );
};

export default CountryData;