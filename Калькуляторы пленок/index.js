const calculateWrapper = document.querySelector('.calculate-wrapper');

// Рассчет веса по длине пленки в рулоне
// Константы с полями ввода для толщины ширины и длинны пленки и врапер для них
const wrapperWeight = document.querySelector('.wrapper-weight');
const metersForСalculateWeight = wrapperWeight.querySelector('#metersForСalculateWeight');
const widthForСalculateWeight = wrapperWeight.querySelector('#widthForСalculateWeight');
const thicknessForСalculateWeight = wrapperWeight.querySelector('#thicknessForСalculateWeight');
const calculateWeight = wrapperWeight.querySelector('#calculateWeight');
//

// Функция вычисления веса по длинне пленки в рулоне
const getStretchFilmFromWeight = function (l, a, b) {
  const m = (l.value * a.value * b.value * 0.92) / 1000000;
  return m.toFixed(2);
};
//

//  Обработчик события на весь врапер действующий на измененния в любом 
// поле ввода внтури врапера для рассчета веса
wrapperWeight.addEventListener('keyup', function (evt) {
  if (evt.target.matches('input')) {
    calculateWeight.value = getStretchFilmFromWeight(metersForСalculateWeight, widthForСalculateWeight, thicknessForСalculateWeight);
  }
})
//
//


// Рассчет длинны пленки в рулоне по весу 
// Константы с полями ввода для толщины ширины и длинны пленки и врапер для них
const wrapperMeters = document.querySelector('.wrapper-meters');
const weightForСalculateMeters = wrapperMeters.querySelector('#weightForСalculateMeters');
const widthForСalculateMeters = wrapperMeters.querySelector('#widthForСalculateMeters');
const thicknessForСalculateMeters = wrapperMeters.querySelector('#thicknessForСalculateMeters');
const сalculateMeters = wrapperMeters.querySelector('#сalculateMeters');
//

// Функция вычисления длинны пленки по весу рулона
const getMetersFilmFromWeight = function (m, a, b) {
  const l = m.value * 1000000 / (a.value * b.value * 0.92);
  return l.toFixed(2);
};
//

//  Обработчик события на весь врапер действующий на измененния в любом 
// поле ввода внтури врапера для рассчета длинны пленки
wrapperMeters.addEventListener('keyup', function (evt) {
  if (evt.target.matches('input')) {
    сalculateMeters.value = getMetersFilmFromWeight(weightForСalculateMeters, widthForСalculateMeters, thicknessForСalculateMeters);
  }
})
//
//
// calculateWrapper.addEventListener('keyup', function (evt) {
//   if (evt.target.closest('.wrapper-weight')) {
//     calculateWeight.value = getStretchFilmFromWeight(metersForСalculateWeight, widthForСalculateWeight, thicknessForСalculateWeight);
//   } else if (evt.target.closest('.wrapper-meters')) {
//     console.log('калькулятор длинны');
//   }
// })
