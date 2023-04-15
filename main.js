//function to get the output
function get_results() {
    if (document.getElementById("city_input").value == "") {
        //error if the user clicks search icon without giving the input
        document.getElementById("label").style.visibility = "visible";
        setInterval(myTimer, 5000);
        function myTimer() {
            document.getElementById("label").style.visibility = "hidden";
        }
    }
    else {
        if (document.getElementById("tog_btn").checked) {
            //api key
            var api = "https://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("city_input").value+"&units=imperial&APPID=143454aa39bbe3442a890cdbf3f9db36";
            console.log(api);
            //function to fetch data from api
            fetch (api)
            .then(response => response.json())
            .then(data => {
                //storing the output in variables
                var current = data['main']['temp'];
                var max = data['main']['temp_max'];
                var min = data['main']['temp_min'];
                var hum = data['main']['humidity'];
                var wind = data['wind']['speed'];
                //printing the output
                document.getElementById("result_current").innerHTML = current + "°F";
                document.getElementById("result_max").innerHTML = max + "°F";
                document.getElementById("result_min").innerHTML = min + "°F";
                document.getElementById("result_hum").innerHTML = hum + "%";
                document.getElementById("result_wind").innerHTML = wind + "mph";
                console.log(current);
                console.log(max);
                console.log(min);
                console.log(hum);
                console.log(wind);
            })
            //error
            .catch(err => alert("WRONG CITY NAME!!"));
        }
        else {
            //api key
            var api = "https://api.openweathermap.org/data/2.5/weather?q="+document.getElementById("city_input").value+"&units=imperial&APPID=143454aa39bbe3442a890cdbf3f9db36";
            console.log(api);
            //function to fetch data from api
            fetch (api)
            .then(response => response.json())
            .then(data => {
                //storing the output in variables
                var current = data['main']['temp'];
                var max = data['main']['temp_max'];
                var min = data['main']['temp_min'];
                var hum = data['main']['humidity'];
                var wind = data['wind']['speed'];
                //printing the output
                document.getElementById("result_current").innerHTML = Math.ceil((current - 32) * 5/9) + "°C";
                document.getElementById("result_max").innerHTML = Math.ceil((max - 32) * 5/9) + "°C";
                document.getElementById("result_min").innerHTML = Math.ceil((min - 32) * 5/9) + "°C";
                document.getElementById("result_hum").innerHTML = hum + "%";
                document.getElementById("result_wind").innerHTML = wind + "mph";
                console.log(current);
                console.log(max);
                console.log(min);
                console.log(hum);
                console.log(wind);
            })
            //error
            .catch(err => alert("WRONG CITY NAME!!"));
        }
    }
}
