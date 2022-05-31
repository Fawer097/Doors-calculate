import { allEvents } from "./events.js"
import { createDoorsSelectionBlock } from "./blocks/doors-selection-block.js"
import { createCitySelectionBlock } from "./blocks/city-selection-block.js"
import { createHouseTypeBlock } from "./blocks/house-type-block.js"
import { createFloorInfoBlock } from "./blocks/floor-info.block.js"
import { createTotalCostBlock } from "./blocks/total-cost-block.js"


class Data {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

export class DoorData extends Data {
    constructor(id, name, price) {
        super(id, name)
        this.price = price
    }
}

export class CityData extends Data {
    constructor(id, name, deliveryPrice, mountingPrice) {
        super(id, name)
        this.deliveryPrice = deliveryPrice
        this.mountingPrice = mountingPrice
    }
}



export class Site {
    constructor(id) {
        this.element = document.getElementById(id)
    }

    render(model) {
        model.forEach(block => {
            this.element.append(block.toHtml())
            })
    }

    events() {
        allEvents()
    }
}



class Block {   
    constructor(circleValue, value) { 
        this.circleValue = circleValue
        this.value = value
    }

    toHtml() {}
}

export class DoorsSelectionBlock extends Block {
    constructor(circleValue, value) {
        super(circleValue, value)
    }

    toHtml() {
        return createDoorsSelectionBlock(this)
    }
}


export class CitySelectionBlock extends Block {
    constructor(circleValue, value) {
        super(circleValue, value)
    }

    toHtml() {
        return createCitySelectionBlock(this)
    }
}

export class HouseTypeBlock extends Block {
    constructor(circleValue, value) {
        super(circleValue, value)
    }

    toHtml() {
        return createHouseTypeBlock(this)
    }
}

export class FloorInfoBlock extends Block {
    constructor(circleValue, value) {
        super(circleValue, value)
    }

    toHtml() {
        return createFloorInfoBlock(this)
    }
}

export class TotalCostBlock extends Block {
    constructor(circleValue, value) {
        super(circleValue, value)
    }

    toHtml() {
        return createTotalCostBlock(this)
    }
}

