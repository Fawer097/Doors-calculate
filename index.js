import { model } from "./model.js";
import { Site } from "./classes.js";

const site = new Site('calc')

site.render(model)

site.events()


