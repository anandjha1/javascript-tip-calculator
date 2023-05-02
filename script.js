// HTML Element Link
const totalBillInputEl = document.getElementById('bill-amount')
const tipPercentInputEl = document.getElementById('tip-percent')
const numberOfPeopleInputEl = document.getElementById('number-of-people')
const perPersonTipEl = document.getElementById('per-person-tip')
const totalAmountPerPersonEl = document.getElementById('total-amount-per-person')



// event Listeners on elements
class TipCalculator {
    constructor() {
        this.calulateAndUpdate()
        totalBillInputEl.addEventListener('change', this.calulateAndUpdate)
        tipPercentInputEl.addEventListener('change', this.calulateAndUpdate)
        numberOfPeopleInputEl.addEventListener('change', this.calulateAndUpdate)
    }
    calulateAndUpdate() {
        this.totalBill = +totalBillInputEl.value
        this.tipPercent = +tipPercentInputEl.value
        this.numberOfPeople = +numberOfPeopleInputEl.value
        this.tipAmount = (this.totalBill * (this.tipPercent / 100))
        perPersonTipEl.innerText = (this.tipAmount / this.numberOfPeople).toFixed(2)
        totalAmountPerPersonEl.innerText = ((this.totalBill + this.tipAmount) / this.numberOfPeople).toFixed(2)

    }

}


// create new calc object
const calc1 = new TipCalculator()