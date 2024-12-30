/*
    <input id="earthYear" type="text" placeholder="Year" />
    <input id="earthMonth" type="text" placeholder="Month" />
    <input id="earthDay" type="text" placeholder="Day" />
    <input id="earthHour" type="text" placeholder="Hour" />
    <input id="earthMinute" type="text" placeholder="Minute" />
    <input id="earthSecond" type="text" placeholder="Second" />
    <button onclick="earthToMiller()">Convert</button>

    <h3>Miller's Planet to Earth Time</h3>
    <input id="millerYear" type="text" placeholder="Year" />
    <input id="millerMonth" type="text" placeholder="Month" />
    <input id="millerDay" type="text" placeholder="Day" />
    <input id="millerHour" type="text" placeholder="Hour" />
    <input id="millerMinute" type="text" placeholder="Minute" />
    <input id="millerSecond" type="text" placeholder="Second" />
    <button onclick="millerToEarth()">Convert</button>
*/

/* const input = document.getElementById("input") */

const earthYear = document.getElementById("earthYear")
const earthMonth = document.getElementById("earthMonth")
const earthDay = document.getElementById("earthDay")
const earthHour = document.getElementById("earthHour")
const earthMinute = document.getElementById("earthMinute")
const earthSecond = document.getElementById("earthSecond")

const millerYear = document.getElementById("millerYear")
const millerMonth = document.getElementById("millerMonth")
const millerDay = document.getElementById("millerDay")
const millerHour = document.getElementById("millerHour")
const millerMinute = document.getElementById("millerMinute")
const millerSecond = document.getElementById("millerSecond")

document.body.style.background = "url('docs/assets/images/yihan-wang-4teb0ryKW3M-unsplash.jpg')"

// function to convert Earth time to Miller's Planet Time
function earthToMiller(year, month, day, hour, minute, second) {

    const miller_year = year * ((1 / 24) / 365) / 7
    let miller_month = month * ((1 / 24) / 30) / (7 * 12)
    let miller_day = day * (1 / 24) / (7 * 365)
    let miller_hour = hour * 1 / (7 * 365 * 24)
    let miller_minute = minute * (1 * 60) / (7 * 365 * 24 * 60)
    let miller_second = second * (1 * 60 * 60) / (7 * 365 * 24 * 60 * 60)

    // miller year
    const my_num = Math.floor(miller_year)
    const my_frac = miller_year - my_num

    // miller month
    let mm_frac = my_frac * 12 //   was doing dumbo mistake here -> / (24 * 365)

    miller_month = miller_month + mm_frac

    const mm_num = Math.floor(miller_month)
    mm_frac = miller_month - mm_num

    // miller day
    let md_frac = mm_frac * 30
    
    miller_day = miller_day + md_frac
    
    const md_num = Math.floor(miller_day)
    md_frac = miller_day - md_num

    // miller hour
    let mh_frac = md_frac * 24

    miller_hour = miller_hour + mh_frac
    
    const mh_num = Math.floor(miller_hour)
    mh_frac = miller_hour - mh_num

    // miller minute
    let m_min_frac = mh_frac * 60

    miller_minute = miller_minute + m_min_frac

    const m_min_num = Math.floor(miller_minute)
    m_min_frac = miller_minute - m_min_num

    // miller second
    let ms_frac = m_min_frac * 60

    miller_second = miller_second + ms_frac
    miller_second = parseFloat(miller_second.toFixed(3))

    return [my_num, mm_num, md_num, mh_num, m_min_num, miller_second]

}

// function to convert Miller's planet time to Earth time
function millerToEarth(year, month, day, hour, minute, second) {

    avg_days = (31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31) / 12

    const earth_year = (year * 12 * avg_days * 24 * 7) + (month * avg_days * 24 * 7) + (day * 24 * 7) + (hour * 7) + ((minute * 7) / 60) + ((second * 7) / (60 * 60))
    let earth_month = 0
    let earth_day = 0
    let earth_hour = 0
    let earth_minute = 0
    let earth_second = 0

    // need to the frac stuff at the end i supppse

    // earth year
    const ey_num = Math.floor(earth_year)
    const ey_frac = earth_year - ey_num

    // earth month
    let em_frac = ey_frac * 12
    earth_month = earth_month + em_frac

    const em_num = Math.floor(earth_month)
    em_frac = earth_month - em_num

    // earth day
    let ed_frac = em_frac * avg_days
    earth_day = earth_day + ed_frac

    const ed_num = Math.floor(earth_day)
    ed_frac = earth_day - ed_num

    // earth hour
    let eh_frac = ed_frac * 24
    earth_hour = earth_hour + eh_frac

    const eh_num = Math.floor(earth_hour)
    eh_frac = earth_hour - eh_num

    // earth minute
    let emin_frac = eh_frac * 60
    earth_minute = earth_minute + emin_frac

    const emin_num = Math.floor(earth_minute)
    emin_frac = earth_minute - emin_num
    
    // earth second
    let es_frac = emin_frac * 60
    earth_second = earth_second + es_frac

    earth_second = parseFloat(earth_second.toFixed(3))

    return [ey_num, em_num, ed_num, eh_num, emin_num, earth_second]

}

// get earth to miller conversion and display it
function getToMillerConversion() {
    const earthYearValue = earthYear.value
    const earthMonthValue = earthMonth.value
    const earthDayValue = earthDay.value
    const earthHourValue = earthHour.value
    const earthMinuteValue = earthMinute.value
    const earthSecondValue = earthYear.value

    const [year, month, day, hour, minute, second]= earthToMiller(earthYearValue, earthMonthValue, earthDayValue, earthHourValue, earthMinuteValue, earthSecondValue)

    document.getElementById("result1").textContent = "The conversion from Earth to Miller's Planet is " + year + " years, " + month + " months, " + day + " days, " + hour + " hours, " + minute + " minutes, " + second + " seconds."

}

// get miller to earth conversion and display it
function getToEarthConversion() {
    const millerYearValue = millerYear.value
    const millerMonthValue = millerMonth.value
    const millerDayValue = millerDay.value
    const millerHourValue = millerHour.value
    const millerMinuteValue = millerMinute.value
    const millerSecondValue = millerSecond.value

    const [year, month, day, hour, minute, second] = millerToEarth(millerYearValue, millerMonthValue, millerDayValue, millerHourValue, millerMinuteValue, millerSecondValue)

    document.getElementById("result2").textContent = "The conversion from Miller's Planet to Earth is " + year + " years, " + month + " months, " + day + " days, " + hour + " hours, " + minute + " minutes, " + second + " seconds."

}

// get a specific earth date and time and convert it to earth year format, i.e. 1 year 6 months -> 1.5 years
function getDateTime(year, month, day, hour, minute, second) {
    monthToYear = month / 12
    dayToYear = day / 365.25
    hourToYear = hour / (24 * 365.25)
    minuteToYear = minute / (60 * 24 * 365.25)
    secondToYear = second / (60 * 60 * 24 * 365.25)

    const yearValue = year + monthToYear + dayToYear + hourToYear + minuteToYear + secondToYear

    return yearValue

}

// get the current earth date and time in earth year format
function getCurrentDateTime() {
    let currentTime = new Date()

    let currentYear = currentTime.getFullYear()
    let currentMonth = currentTime.getMonth() + 1
    let currentDay = currentTime.getDate()
    let currentHour = currentTime.getHours()
    let currentMinute = currentTime.getMinutes()
    let currentSecond = currentTime.getSeconds()

    const currentDateTime = getDateTime(currentYear, currentMonth, currentDay, currentHour, currentMinute, currentSecond)

    return currentDateTime

}

// get the earth premiere date and time in earth year format
function getPremiereDateTime() {
    let year = 2014
    let month = 11
    let day = 7
    let hour = 0
    let minute = 0
    let second = 0

    const premiereDateTime = getDateTime(year, month, day, hour, minute, second)

    return premiereDateTime

}

// get time elapsed on Miller's Planet since Interstellar premiered
function getElapsedTime() {
    const currentDateTime = getCurrentDateTime()

    const premiereDateTime = getPremiereDateTime()

    const elapsedEarthTime = currentDateTime - premiereDateTime

    const [year, month, day, hour, minute, second]= earthToMiller(elapsedEarthTime, 0, 0, 0, 0, 0)

    document.getElementById("result3").textContent = "The time elapsed on Miller's Planet since Interstellar premiered is " + year + " years, " + month + " months, " + day + " days, " + hour + " hours, " + minute + " minutes, " + second + " seconds."

}