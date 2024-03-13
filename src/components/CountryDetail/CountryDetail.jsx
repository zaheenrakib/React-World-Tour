import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    // const {country,handleVisitedCountry,handleVisitedflags} = props;
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData

            country = {country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedflags={handleVisitedflags}
            >
            </CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetail;