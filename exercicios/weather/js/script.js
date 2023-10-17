const APIKey = "9b79994121830da530ee2eac4d4b0975"

const search = document.querySelector(".searchBox button");
const container = document.querySelector(".container");
const temperatureText = document.querySelector("#temperature");
const humidityText = document.querySelector("#humidity");
const weatherBox = document.querySelector(".weatherBox");
const weatherDetails = document.querySelector(".weatherDetails");
const error404 = document.querySelector(".notFound");


search.addEventListener("click", () => {
    getData()
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getData()
    }
});

function getData() {
    const city = document.querySelector(".searchBox input").value;
    if (city === "") {
        alert("Digite uma cidade");
        return;
    }

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
        )
    .then((response) => {
        return response.json();
    })
     .then((data) => {
        console.log(data);
        container.style.height = "400px";

        // tratando 404
        if (data.cod === "404") {
            weatherDisplay(false)
            error404.style.display = "block";
            error404.classList.add("fadeIn");
            return;
        };

        error404.style.display = "none";
        weatherDisplay(true)

        //alterando imagem do clima
        

        // mostrando temperatura
        const { temp } = data.main;
        temperatureText.innerHTML = `${temp}°C`;

        //mostrando humidade
        const { humidity } = data.main;
        humidityText.innerHTML = `${humidity}%`;

     });
}

function weatherDisplay(bool) {
    if (bool) {
        weatherBox.style.display = "block";
        weatherBox.style.opacity = "1";
        weatherBox.style.scale = "1";

        weatherDetails.style.display = "block";
        weatherDetails.style.opacity = "1";
        weatherDetails.style.scale = "1";
        
    } else {
        weatherBox.style.display = "none";
        weatherBox.style.opacity = "0";
        weatherBox.style.scale = "0";

        weatherDetails.style.display = "none";
        weatherDetails.style.opacity = "0";
        weatherDetails.style.scale = "0";
    }
}