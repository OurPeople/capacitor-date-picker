'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const DatePicker = core.registerPlugin('DatePicker', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.DatePickerWeb()),
});

class DatePickerWeb extends core.WebPlugin {
    // @ts-ignore
    present(options) {
        throw new Error('Method not implemented.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DatePickerWeb: DatePickerWeb
});

exports.DatePicker = DatePicker;
//# sourceMappingURL=plugin.cjs.js.map
