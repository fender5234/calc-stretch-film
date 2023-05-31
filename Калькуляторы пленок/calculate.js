const calculateWrapper = document.querySelector('.calculate-wrapper');

const DENSITY = 0.92;
const COEFF = 1000000;
const BOXCAPACITY = 6;
const BOXWEIGHT = 0.2;

const weigthFilm = {
  metersField: calculateWrapper.querySelector('#metersForСalculateWeight'),
  widthField: calculateWrapper.querySelector('#widthForСalculateWeight'),
  thicknessField: calculateWrapper.querySelector('#thicknessForСalculateWeight'),
  weightField: calculateWrapper.querySelector('#calculateWeight'),
  calcWeight: function () {
    const m = (this.metersField.value * this.widthField.value * this.thicknessField.value * DENSITY) / COEFF;
    this.weightField.value = m.toFixed(2);
  }
}

const metersFilm = {
  weightField: calculateWrapper.querySelector('#weightForСalculateMeters'),
  widthField: calculateWrapper.querySelector('#widthForСalculateMeters'),
  thicknessField: calculateWrapper.querySelector('#thicknessForСalculateMeters'),
  metersField: calculateWrapper.querySelector('#сalculateMeters'),
  calcMeters: function () {
    const l = this.weightField.value * COEFF / (this.widthField.value * this.thicknessField.value * DENSITY);
    this.metersField.value = l.toFixed(2);
  },
}

const cargoWeight = {
  oneRollWeight: calculateWrapper.querySelector('#oneRollWeight'),
  totalRoll: calculateWrapper.querySelector('#totalRoll'),
  totalBox: calculateWrapper.querySelector('#totalBox'),
  totalWeight: calculateWrapper.querySelector('#totalWeight'),
  allWeigt: function () {
    const w = (this.oneRollWeight.value * this.totalRoll.value) + BOXWEIGHT;
    this.totalWeight.value = w.toFixed(2);
  },
  allBox: function () {
    const b = (this.totalRoll.value / BOXCAPACITY);
    this.totalBox.value = b.toFixed(2);
  }
}

calculateWrapper.addEventListener('keyup', function (evt) {
  if (evt.target.closest('#wrapper-weight')) {
    weigthFilm.calcWeight();
  } else if (evt.target.closest('#wrapper-meters')) {
    metersFilm.calcMeters();
  }else if (evt.target.closest('#all-weight')) {
    cargoWeight.allBox();
    cargoWeight.allWeigt();
  }
})
