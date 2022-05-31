import { createTemplateFormSection, createTemplateOptions, createTemplateOptionsSelections, createTemplateCircle, createTemplateProperty, createTemplateCheckBox } from "./templates.js"


export function createHouseTypeBlock(block) {
    const formSection = createTemplateFormSection()
    const options = createTemplateOptions()
    const optionsSelections = createTemplateOptionsSelections()

    formSection.append(createTemplateCircle(block), options)
    options.append(createTemplateProperty(block), optionsSelections)
    optionsSelections.append(createHouseTypeCheckbox(block))
    
    return formSection
}


function createHouseTypeCheckbox(block) {
    const houseTypeCheckbox = createTemplateCheckBox(block)
    houseTypeCheckbox.classList.add('house-type-checkbox')
    return houseTypeCheckbox
}