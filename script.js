async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'defea6f912e291344df73f9949e8903b';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=defea6f912e291344df73f9949e8903b`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            document.getElementById('weather-result').innerText =`Temperature in ${city}: ${(data.main.temp - 273.15).toFixed(2)}°C`

            const temp=data.main.temp - 273.15.toFixed(2);
                
            if (temp < 5) {
                advice = "It's freezing! Wear warm clothes and stay indoors if possible.";
                document.getElementById('1').innerHTML='Advice!';
                document.getElementById('advice').innerHTML=advice;
                
            } else if (temp < 15) {

                document.getElementById('1').innerHTML='Advice!';
                advice = "It's quite chilly. Wear a jacket or sweater.";
                document.getElementById('advice').innerHTML=advice;

            } else if (temp < 25) {
                document.getElementById('1').innerHTML='Advice!';
                advice = "The weather is mild. Enjoy your day!";
                document.getElementById('advice').innerHTML=advice

            } else if (temp < 35) {
                document.getElementById('1').innerHTML='Advice!';
                advice = "It's warm. Stay hydrated and wear light clothing.";
                document.getElementById('advice').innerHTML=advice

            } else {
                document.getElementById('1').innerHTML='Advice!';
                advice = "It's very hot! Avoid the sun, drink plenty of water, and stay cool.";
                document.getElementById('advice').innerHTML=advice

            }


        } else {
            document.getElementById('weather-result').innerText = 'City not found';
        }
    } catch (error) {
        document.getElementById('weather-result').innerText = 'Error fetching data';
    }
}