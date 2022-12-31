const monthArr = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const daysArr = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

const dayStr = daysArr[new Date().getDay()];
const dayNum = new Date().getDate();
const month = monthArr[new Date().getMonth()];
const year = new Date().getFullYear();


setCalender();
function setCalender () {
    const monthEl = document.querySelector('.month-container p');
    const dayEl = document.querySelector('.day-container');
    const yearEl = document.querySelector('.year-container p');

    monthEl.innerText = month;
    yearEl.innerText = year;
    dayEl.innerHTML = `<p>${dayStr}</p><h4>${dayNum}</h4>`;
}