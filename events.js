import { doorsInfo, deliveryInfo } from "./data.js"

export function allEvents() {

document.querySelectorAll('select').forEach(element => element.addEventListener('change', events))
document.querySelectorAll('input, .floor-count button').forEach(element => element.addEventListener('click', events))

const floorSections = document.querySelector('#floorSections')
const line = document.querySelector('#line2')
const cityRadio1 = document.querySelector('#cityCheckBox1')
const cityRadio2 = document.querySelector('#cityCheckBox2')
const houseRadio1 = document.querySelector('#houseCheckBox1')
const houseRadio2 = document.querySelector('#houseCheckBox2')
const houseRadio3 = document.querySelector('#houseCheckBox3')
const elevatorRadio1 = document.querySelector('#elevatorCheckBox1')
const elevatorRadio2 = document.querySelector('#elevatorCheckBox2')
const floorPlus = document.querySelector('#plusBtn')
const floorMinus = document.querySelector('#minusBtn')
let totalCostHtml = document.querySelector('#totalCost')
const floor = document.querySelector('#floor-number')
const doorSelect = document.querySelector('.door-select select')
const citySelect = document.querySelector('.city-select select')
const totalCostOptions = document.querySelector('.total-cost-options')

totalCostHtml.innerHTML = doorsInfo[doorSelect.selectedIndex].price
elevatorRadio2.checked = true

function events(event) {
    switch (event.target.id) {
        case 'door-select':
            calcTheCost()
            break;
        case 'city-select':
            calcTheCost()
            break;
        case 'cityCheckBox1':
            calcTheCost()
            break;
        case 'cityCheckBox2':
            calcTheCost()
            break;
        case 'houseCheckBox1':
            floorSections.style.display = 'flex'
            line.style.bottom = '90px'
            totalCostOptions.style.display = 'none'
            calcTheCost()
            break;
        case 'houseCheckBox2':
            floorSections.style.display = 'flex'
            line.style.bottom = '130px'
            totalCostOptions.style.display = 'block'
            calcTheCost()
            break;
        case 'houseCheckBox3':
            floorSections.style.display = 'none'
            line.style.bottom = '130px'
            totalCostOptions.style.display = 'block'
            calcTheCost() 
            break;
        case 'elevatorCheckBox1':
            calcTheCost()
            break;
        case 'elevatorCheckBox2':
            calcTheCost() 
            break;
        case 'plusBtn':
            floorIncrement()
            calcTheCost() 
            break;
        case 'minusBtn':
            floorDecrement()
            calcTheCost()
        break;
        default:
            break;
    }
}

    function floorIncrement() {
    let floorNumber = Number(floor.innerHTML)
    if (floorNumber >= 1 && floorNumber < 24) {
        floorNumber = ++floorNumber
        floor.innerHTML = floorNumber
    } 
}

    function floorDecrement() {
    let floorNumber = Number(floor.innerHTML)
    if (floorNumber > 1 && floorNumber <= 24) {
        floorNumber = --floorNumber
        floor.innerHTML = floorNumber
    }
}


function calcTheCost() {

    let doorPrice = doorsInfo[doorSelect.selectedIndex].price
    
    let result = doorPrice

    if(cityRadio1.checked || cityRadio2.checked) {
        result += cityDelivery()
        function cityDelivery() {
            const citySelectIndex = citySelect.selectedIndex
            if (cityRadio1.checked) {
                return deliveryInfo[citySelectIndex].mountingPrice
            } else if (cityRadio2.checked) {
                return deliveryInfo[citySelectIndex].deliveryPrice + deliveryInfo[citySelectIndex].mountingPrice
            }
        }
    }

    if(houseRadio1.checked || houseRadio2.checked) {
            result += elevator()
            function elevator() {
                const floorNumber = floor.innerHTML
                let floorPrice = 0
                 if (elevatorRadio1.checked) {
                    floorPlus.disabled = false
                    floorMinus.disabled = false
                    floorPlus.classList.add('active-floor-button')
                    floorMinus.classList.add('active-floor-button')
                    floor.style.color = "#000"
                    if (floorNumber == 2) {
                        floorPrice = 400
                    } else if (floorNumber > 2) {
                        floorPrice = floorNumber * 200
                    }
                    return floorPrice
                } else if (elevatorRadio2.checked) {
                    floorPlus.disabled = true
                    floorMinus.disabled = true
                    floorPlus.classList.remove('active-floor-button')
                    floorMinus.classList.remove('active-floor-button')
                    floor.style.color = "#EAEAEA"
                    return 0
                }
            }
        } else {
            result
        }


        totalCostHtml.innerHTML = result 
    }      

}

