import is from "is";
import { ComponentOptions } from "vue";
import { createDecorator } from "vue-class-component";

export default function Inject(type: symbol) {
    return createDecorator(function (componentOptions :ComponentOptions, key) {
        const originalBeforeCreate = componentOptions.beforeCreate;
        componentOptions.beforeCreate = function () : void{
            if (is.defined(this._container) && this._container.isBound(type)) {
                this[key] = this._container.get(type);
            }
            if (is.function(originalBeforeCreate)) {
                originalBeforeCreate?.apply(this);
            }
        }
    });
}

