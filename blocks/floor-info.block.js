import { createTemplateFormSection, createTemplateOptions, createTemplateOptionsSelections, createTemplateCircle, createTemplateProperty, createTemplateCheckBox } from "./templates.js"


export function createFloorInfoBlock(block) {
    const formSection = createFloorInfoFormSection()
    const options = createTemplateOptions()
    const optionsSelections = createTemplateOptionsSelections()
    
    formSection.append(createTemplateCircle(block), options)
    options.append(createTemplateProperty(block), optionsSelections)
    optionsSelections.append(createFloorCount(), createElevatorCheckBox(block))

    return formSection
}


function createFloorInfoFormSection() {
    const formSection = createTemplateFormSection()
    formSection.classList.add('display-none')
    formSection.id = 'floorSections'
    return formSection
}


function createElevatorCheckBox(block) {
    const elevatorCheckBox = createTemplateCheckBox(block)
    elevatorCheckBox.classList.add('elevator-checkbox')
    return elevatorCheckBox
}


function createFloorCount() {
    const floorCount = document.createElement('div')
    floorCount.classList.add('floor-count')
    floorCount.append(createMinusFloorBtn(), createFloorNumberDiv(), createPlusFloorBtn())
    return floorCount
}

function createMinusFloorBtn() {
    const button = document.createElement('button')
    button.id = 'minusBtn'
    button.classList.add('active-floor-button')
    button.innerHTML = '-'
    return button
}

function createFloorNumberDiv() {
    const floorNumber = document.createElement('div')
    floorNumber.id = 'floor-number'
    floorNumber.innerHTML = '1'
    return floorNumber
}

function createPlusFloorBtn() {
    const button = document.createElement('button')
    button.id = 'plusBtn'
    button.classList.add('active-floor-button')
    button.innerHTML = '+'
    return button
}