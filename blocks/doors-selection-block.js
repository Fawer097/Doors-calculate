import { createTemplateFormSection, createTemplateOptions, createTemplateOptionsSelections, createTemplateCircle, createTemplateProperty, createTemplateSelect } from "./templates.js"


export function createDoorsSelectionBlock(block) {
    const formSection = createTemplateFormSection()
    const options = createTemplateOptions()
    const optionsSelections = createTemplateOptionsSelections()

    formSection.append(createImage(), createTemplateCircle(block), options)
    options.append(createTemplateProperty(block), optionsSelections)
    optionsSelections.append(createDoorSelect(block))
    
    return formSection
}


function createImage() {
    const image = document.createElement('img')
    image.src = './images/Line 3.png'
    image.alt = 'line'
    image.id = 'line1'
    return image
}

function createDoorSelect(block) {
    const doorSelect = createTemplateSelect(block)
    doorSelect.classList.add('door-select')
    return doorSelect
}
