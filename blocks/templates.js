export function createTemplateFormSection() {
    const doorsSelectionBlock = document.createElement('div')
    doorsSelectionBlock.classList.add('form-section')
    return doorsSelectionBlock
}

export function createTemplateCircle(block) {
    const circle = document.createElement('div')
    circle.classList.add('circle')
    circle.innerHTML = `${block.circleValue}`
    return circle
}

export function createTemplateOptions() {
    const options = document.createElement('div')
    options.classList.add('options')
    return options
}

export function createTemplateProperty(block) {
    const property = document.createElement('div')
    property.classList.add('property')
    const dataArr = (block.value.text).split(', ')
    dataArr.forEach(item => property.innerHTML += `<h3>${item}: </h3>`)
    return property
}

export function createTemplateOptionsSelections() {
    const optionsSelections = document.createElement('div')
    optionsSelections.classList.add('options-selections')
    return optionsSelections
}

export function createTemplateCheckBox(block) {
    const checkBox = document.createElement('div')
    checkBox.innerHTML = `${block.value.checkbox}`
    return checkBox
}

export function createTemplateSelect(block) {
    const doorSelect = document.createElement('div')
    doorSelect.innerHTML = `${block.value.select}`
    return doorSelect
}



export function createSelectForm(data) {
    let select = document.createElement('select')
    select.classList.add('form-select')

    data.forEach(item => {
        if(item.price) {
            let option = document.createElement('option')
            option.value = `${item.id}`
            option.innerHTML = `${item.name} - ${item.price} руб`
            select.id = 'door-select'
            select.append(option)
        } else if(item.deliveryPrice) {
            let option = document.createElement('option')
            option.value = `${item.id}`
            option.innerHTML = `${item.name}`
            select.id = 'city-select'
            select.append(option)
        }
    })

    return select.outerHTML
}


export function createCheckBox(type, data) {
    let checkBoxes = ''
    data.forEach((item, index) => {
        let checkBox = document.createElement('div')
        checkBox.classList.add('form-check-inline')

        let input = document.createElement('input')
        input.classList.add('form-check-input')
        input.type = 'radio'
        input.name = `${type}`
        input.id = `${type}${index + 1}`

        let label = document.createElement('label')
        label.classList.add('form-check-label')
        label.for = input.id
        label.innerHTML = `${item}`

        checkBox.append(input, label)
        checkBoxes += checkBox.outerHTML
    })

    return checkBoxes
}


export function createAddInfo(data) {
    let addInfo = document.createElement('p')
    addInfo.classList.add('total-cost-options')
    addInfo.classList.add('display-none')
    data.forEach(item => addInfo.innerHTML += `${item}<br>`)
    return addInfo.outerHTML
}

