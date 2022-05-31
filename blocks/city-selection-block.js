import { createTemplateFormSection, createTemplateOptions, createTemplateOptionsSelections, createTemplateCircle, createTemplateProperty, createTemplateSelect, createTemplateCheckBox } from "./templates.js"


export function createCitySelectionBlock(block) {
    const formSection = createTemplateFormSection()
    const options = createTemplateOptions()
    const optionsSelections = createTemplateOptionsSelections()
    
    formSection.append(createTemplateCircle(block), options)
    options.append(createTemplateProperty(block), optionsSelections)
    optionsSelections.append(createCityCheckBox(block), createCitySelect(block))

    return formSection
}

function createCityCheckBox(block) {
    const cityCheckBox = createTemplateCheckBox(block)
    cityCheckBox.classList.add('city-checkbox')
    return cityCheckBox
}


function createCitySelect(block) {
    const citySelect = createTemplateSelect(block)
    citySelect.classList.add('city-select')
    return citySelect
}









