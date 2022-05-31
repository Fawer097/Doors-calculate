import { deliveryInfo, doorsInfo } from "./data.js"
import { createSelectForm, createAddInfo, createCheckBox } from "./blocks/templates.js"
import { DoorsSelectionBlock, CitySelectionBlock, HouseTypeBlock, FloorInfoBlock, TotalCostBlock } from "./classes.js"


export const model = [
    new DoorsSelectionBlock('1', {text: 'Выберите дверь', select: createSelectForm(doorsInfo)}
    ),
    new CitySelectionBlock('2', {
        text: 'Выберите город, Способ доставки',
        select: createSelectForm(deliveryInfo), 
        checkbox: createCheckBox('cityCheckBox', ['Самовывоз', 'С доставкой'])
    }
    ),
    new HouseTypeBlock('3', {
        text: 'Место установки', 
        checkbox: createCheckBox('houseCheckBox', ['Новостройка', 'Не новое жилье', 'Частный дом'])
    }
    ),
    new FloorInfoBlock('4', {
        text: 'Лифт, Этаж',
        checkbox: createCheckBox('elevatorCheckBox', ['Не работает', 'Работает']), 
    }
    ),
    new TotalCostBlock('images/vector.png', {
        text: 'Стоимость', 
        addInfo: createAddInfo(['+3000 руб., если требуется расширение дверного проёма', 
            '+500 руб, если требуется подрезка', 
            '+500 руб, если требуются монтажные уши'])
    }
    )
]


