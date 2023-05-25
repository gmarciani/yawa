define(["require", "exports", "../utils/format"], function (require, exports, format_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function stringLength() {
        var utf8Length = function (str) {
            var s = str.length;
            for (var i = str.length - 1; i >= 0; i--) {
                var code = str.charCodeAt(i);
                if (code > 0x7f && code <= 0x7ff) {
                    s++;
                }
                else if (code > 0x7ff && code <= 0xffff) {
                    s += 2;
                }
                if (code >= 0xdc00 && code <= 0xdfff) {
                    i--;
                }
            }
            return "".concat(s);
        };
        return {
            validate: function (input) {
                var opts = Object.assign({}, {
                    message: '',
                    trim: false,
                    utf8Bytes: false,
                }, input.options);
                var v = opts.trim === true || "".concat(opts.trim) === 'true' ? input.value.trim() : input.value;
                if (v === '') {
                    return { valid: true };
                }
                var min = opts.min ? "".concat(opts.min) : '';
                var max = opts.max ? "".concat(opts.max) : '';
                var length = opts.utf8Bytes ? utf8Length(v) : v.length;
                var isValid = true;
                var msg = input.l10n ? opts.message || input.l10n.stringLength.default : opts.message;
                if ((min && length < parseInt(min, 10)) || (max && length > parseInt(max, 10))) {
                    isValid = false;
                }
                switch (true) {
                    case !!min && !!max:
                        msg = (0, format_1.default)(input.l10n ? opts.message || input.l10n.stringLength.between : opts.message, [
                            min,
                            max,
                        ]);
                        break;
                    case !!min:
                        msg = (0, format_1.default)(input.l10n ? opts.message || input.l10n.stringLength.more : opts.message, "".concat(parseInt(min, 10)));
                        break;
                    case !!max:
                        msg = (0, format_1.default)(input.l10n ? opts.message || input.l10n.stringLength.less : opts.message, "".concat(parseInt(max, 10)));
                        break;
                    default:
                        break;
                }
                return {
                    message: msg,
                    valid: isValid,
                };
            },
        };
    }
    exports.default = stringLength;
});
