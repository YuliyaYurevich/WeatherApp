const wrapper = document.querySelector('.wrapper');

const daysOfWeekMap = {
  0: 'SUN',
  1: 'MON',
  2: 'TUES',
  3: 'WED',
  4: 'THUR',
  5: 'FRI',
  6: 'SAT',
};

const iconNameToSizeMap = {
  cloudy: { width: 264, height: 166 },
  sunny: { width: 208, height: 213 },
  stormy: { width: 246, height: 187 },
  snowy: { width: 230, height: 196 },
  'partly-cloudy': { width: 230, height: 209 },
  rainy: { width: 160, height: 222 },
};

let lon;
let lat;
const kelvin = 273;

window.addEventListener('load', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;

      // API ID
      const api = '6d055e39ee237af35ca066f35474e9df';

      // API URL
      const base =
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&` +
        `lon=${lon}&appid=6d055e39ee237af35ca066f35474e9df`;

      // Calling the API
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          //console.log(data.list[0].dt_txt.substr(0, 10));
          console.log(data);

          let j = 0;

          for (let i = 0; i < 5; i++) {
            let date = new Date(data.list[j].dt_txt);

            let dateNum = data.list[j].dt_txt.substr(8, 2);

            let dayOfWeek = daysOfWeekMap[date.getDay()];

            let id = data.list[j].weather[0].id.toString();

            if (id !== '800' && id !== '801' && id !== '802') {
              id = id.charAt(0);
            }

            let temp = Math.floor(data.list[j].main.temp - kelvin);

            let temp_min = Math.floor(data.list[j].main.temp_min - kelvin);

            let humidity = data.list[j].main.humidity;

            const day = document.createElement('div');
            day.classList.add('day');

            if (id === '801' || id === '802') {
              day.innerHTML = `<div class="day-of-week">${dayOfWeek}</div>
                <div class="date">${dateNum}</div>
        
                <div class="bar partly-cloudy">
                  <div class="weather">
                    <svg role="img" width="230" height="209" viewBox="0 0 230 209">
                      <use xlink:href="#partly-cloudy"></use>
                    </svg>
                  </div>
                  <div class="temperature">${temp}<span class="degrees">&deg;</span></div>
                  <div class="content">
                    <div class="precipitation">
                      <svg role="img" class="icon">
                        <use xlink:href="#precipitation"></use>
                      </svg>
                      ${humidity}%
                    </div>
                    <div class="low">
                      <svg role="img" class="icon">
                        <use xlink:href="#low"></use>
                      </svg>
                      ${temp_min}&deg;
                    </div>
                  </div>
                </div>`;
            }

            if (id === '5' || id === '3') {
              day.innerHTML = `
          <div class="day-of-week">${dayOfWeek}</div>
          <div class="date">${dateNum}</div>
  
          <div class="bar rainy">
            <div class="weather">
              <svg role="img" width="160" height="222" viewBox="0 0 160 222">
                <use xlink:href="#rainy"></use>
              </svg>
            </div>
            <div class="temperature">${temp}<span class="degrees">&deg;</span></div>
            <div class="content">
              <div class="precipitation">
                <svg role="img" class="icon">
                  <use xlink:href="#precipitation"></use>
                </svg>
                ${humidity}%
              </div>
              <div class="low">
                <svg role="img" class="icon">
                  <use xlink:href="#low"></use>
                </svg>
                ${temp_min}&deg;
              </div>
            </div>
          </div>
        
  `;
            }

            if (id === '800') {
              day.innerHTML = `<div class="day-of-week">${dayOfWeek}</div>
                <div class="date">${dateNum}</div>
        
                <div class="bar sunny">
                  <div class="weather">
                    <svg role="img" width="208" height="213" viewBox="0 0 208 213">
                      <use xlink:href="#sunny"></use>
                    </svg>
                  </div>
                  <div class="temperature">${temp}<span class="degrees">&deg;</span></div>
                  <div class="content">
                    <div class="precipitation">
                      <svg role="img" class="icon">
                        <use xlink:href="#precipitation"></use>
                      </svg>
                      ${humidity}%
                    </div>
                    <div class="low">
                      <svg role="img" class="icon">
                        <use xlink:href="#low"></use>
                      </svg>
                      ${temp_min}&deg;
                    </div>
                  </div>
                </div>`;
            }

            if (id === '8' || id === '7') {
              day.innerHTML = `<div class="day-of-week">${dayOfWeek}</div>
                <div class="date">${dateNum}</div>
        
                <div class="bar cloudy">
                  <div class="weather">
                    <svg role="img">
                      <use
                        xlink:href="#cloudy"
                        width="264"
                        height="166"
                        viewBox="0 0 264 166"
                      ></use>
                    </svg>
                  </div>
                  <div class="temperature">${temp}<span class="degrees">&deg;</span></div>
                  <div class="content">
                    <div class="precipitation">
                      <svg role="img" class="icon">
                        <use xlink:href="#precipitation"></use>
                      </svg>
                      ${humidity}%
                    </div>
                    <div class="low">
                      <svg role="img" class="icon">
                        <use xlink:href="#low"></use>
                      </svg>
                      ${temp_min}&deg;
                    </div>
                  </div>
                </div>`;
            }

            if (id === '2') {
              day.innerHTML = `<div class="day-of-week">${dayOfWeek}</div>
                <div class="date">${dateNum}</div>
        
                <div class="bar stormy">
                  <div class="weather">
                    <svg role="img" width="246" height="187" viewBox="0 0 246 187">
                      <use xlink:href="#stormy"></use>
                    </svg>
                  </div>
                  <div class="temperature">${temp}<span class="degrees">&deg;</span></div>
                  <div class="content">
                    <div class="precipitation">
                      <svg role="img" class="icon">
                        <use xlink:href="#precipitation"></use>
                      </svg>
                      ${humidity}%
                    </div>
                    <div class="low">
                      <svg role="img" class="icon">
                        <use xlink:href="#low"></use>
                      </svg>
                      ${temp_min}&deg;
                    </div>
                  </div>
                </div>`;
            }

            if (id === '6') {
              day.innerHTML = `<div class="day-of-week">${dayOfWeek}</div>
                <div class="date">${dateNum}</div>
        
                <div class="bar snowy">
                  <div class="weather">
                    <svg role="img" width="230" height="196" viewBox="0 0 230 196">
                      <use xlink:href="#snowy"></use>
                    </svg>
                  </div>
                  <div class="temperature">${temp}<span class="degrees">&deg;</span></div>
                  <div class="content">
                    <div class="precipitation">
                      <svg role="img" class="icon">
                        <use xlink:href="#precipitation"></use>
                      </svg>
                      ${humidity}%
                    </div>
                    <div class="low">
                      <svg role="img" class="icon">
                        <use xlink:href="#low"></use>
                      </svg>
                      ${temp_min}&deg;
                    </div>
                  </div>
                </div>`;
            }

            wrapper.appendChild(day);
            j = 8 + 8 * i;
          }
        });
    });
  }
});
