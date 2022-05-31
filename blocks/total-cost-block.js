import { createTemplateFormSection, createTemplateOptions, createTemplateCircle } from "./templates.js"


export function createTotalCostBlock(block) {
    const formSection = createTemplateFormSection()
    const options = createOptions()

    formSection.append(createImage(), createCircleImage(block), options)
    options.append(createTotalCostHeader(block), createAddInfoBlock(block), createPhoneButton())
    
    return formSection
}

function createTotalCostHeader(block) {
    const totalCostHeader = document.createElement('h2')
    totalCostHeader.innerHTML = `${block.value.text}: <span id="totalCost">0</span> руб.`
    return totalCostHeader
}

function createOptions() {
    const options = createTemplateOptions()
    options.classList.add('total-cost')
    return options
}


function createImage() {
    const image = document.createElement('img')
    image.src = './images/Line 3.png'
    image.alt = 'line'
    image.id = 'line2'
    return image
}

function createCircleImage(block) {
    const circle = createTemplateCircle(block)
    circle.innerHTML = ''
    const image = createImage()
    image.src = `${block.circleValue}`
    image.alt = 'vector'
    image.id = 'vector'
    circle.append(image)
    return circle
}


function createAddInfoBlock(block) {
    const div = document.createElement('div')
    div.innerHTML = `${block.value.addInfo}`
    return div
}


function createPhoneButton() {
    const phoneLink = document.createElement('a')
    phoneLink.id = 'phoneButton'
    phoneLink.href = 'tel:+1111111111'
    phoneLink.append(createPhoneImage(), createText())
    return phoneLink
}

function createPhoneImage() {
    const image = document.createElement('img')
    image.src = './images/phone.png'
    image.alt = 'phone'
    return image
}


function createText() {
    const text = document.createElement('p')
    text.innerHTML = 'Позвонить, чтобы согласовать Ваши пожелания'
    return text
}