const API_KEY = `1ee107e3a071eae190306559bf714b94`;
const input = document.getElementById("input");
const showWeather = document.getElementById("showWeather");

const searchData = async () => {
    //   showWeather.innerHTML = `<div class="spinner-border" role="status">
    //     <span class="visually-hidden">Loading...</span>
    //   </div>`;

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${API_KEY}&units=metric`;
    const fetchData = await fetch(API_URL);
    const response = await fetchData.json();
    console.log(response);
    return showData(response);
};
const showData = (data) => {
    if (data.cod === "404") {
        // showWeather.innerHTML = ``;
        Swal.fire({
            icon: 'error',
            title: `${data.message}`,
        });
    } else {
        showWeather.innerHTML += `
            <div class="card shadow-lg mb-5 rounded bg-light" style="width: 20rem;">
                <div class="d-flex justify-content-center mt-3">
                    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" class="card-img-top w-50" alt="weather icon" />
                </div>
                <div class="card-body text-center">
                    <h4 class="card-title text-primary">${data.name}</h4>
                    <h5>${data.weather[0].main} (${data.weather[0].description})</h5>
                    <p class="card-text"><b>Temperature:</b> ${data.main.temp}°C</p>
                    <p class="card-text"><b>Feels Like:</b> ${data.main.feels_like}°C</p>
                    <p class="card-text"><b>Humidity:</b> ${data.main.humidity}%</p>
                    <p class="card-text"><b>Wind Speed:</b> ${data.wind.speed} m/s</p>
                </div>
            </div>
        `;
    }
};
