const Weather = ({temperature}) => {
    return (
        <div>
            {temperature.map((temp) => {
                let message = '';

                if(temp < 15) {
                    message = "It's cold outside"
                } else if(temp >= 15 && temp <= 25) {
                    message = "It's nice outside!"
                } else {
                    message = "It's hot outside!"
                }
                
                return (
                    <div key={Math.random()}>
                        <p>{message}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Weather;