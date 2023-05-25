define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function numeric() {
        return {
            validate: function (input) {
                if (input.value === '') {
                    return { valid: true };
                }
                var opts = Object.assign({}, {
                    decimalSeparator: '.',
                    thousandsSeparator: '',
                }, input.options);
                var v = "".concat(input.value);
                if (v.substr(0, 1) === opts.decimalSeparator) {
                    v = "0".concat(opts.decimalSeparator).concat(v.substr(1));
                }
                else if (v.substr(0, 2) === "-".concat(opts.decimalSeparator)) {
                    v = "-0".concat(opts.decimalSeparator).concat(v.substr(2));
                }
                var decimalSeparator = opts.decimalSeparator === '.' ? '\\.' : opts.decimalSeparator;
                var thousandsSeparator = opts.thousandsSeparator === '.' ? '\\.' : opts.thousandsSeparator;
                var testRegexp = new RegExp("^-?[0-9]{1,3}(".concat(thousandsSeparator, "[0-9]{3})*(").concat(decimalSeparator, "[0-9]+)?$"));
                var thousandsReplacer = new RegExp(thousandsSeparator, 'g');
                if (!testRegexp.test(v)) {
                    return { valid: false };
                }
                if (thousandsSeparator) {
                    v = v.replace(thousandsReplacer, '');
                }
                if (decimalSeparator) {
                    v = v.replace(decimalSeparator, '.');
                }
                var n = parseFloat(v);
                return { valid: !isNaN(n) && isFinite(n) };
            },
        };
    }
    exports.default = numeric;
});
