var capacitorDatePicker = (function (exports, core) {
    'use strict';

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

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
