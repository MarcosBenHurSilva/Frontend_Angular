"use strict";
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototype, { __version: version, __name: "felipe" });
    };
}
function minLength(length) {
    return (target, key) => {
        let _value = target[key];
        const getter = () => "[play]" + _value;
        const setter = (value) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            }
            else {
                _value = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
