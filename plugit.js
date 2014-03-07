/*!
 * GitHub: https://github.com/tssoft/plugit
 */
var plugIt = (function ($) {
    return function (name, prototype) {
        $.fn[name] = function (method) {
            var instanceDataName = 'plgt-' + name + '-instance',
                instance = this.data(instanceDataName),
                initSettings = function (options) {
                    this.settings = $.extend(this.settings, options);
                };
            if (!instance) {
                instance = Object.create(prototype);
                instance._el = this;
                this.data(instanceDataName, instance);
            }
            if (instance[method]) {
                return instance[method].apply(instance, Array.prototype.slice.call(arguments, 1));
            } else if (typeof method === 'object' || !method) {
                instance.settings = Object.create(instance.settings || {});
                initSettings.apply(instance, arguments);
                if (instance.init) {
                    instance.init.apply(instance, arguments);
                }
                return this;

            } else {
                $.error(name + ': Method "' + method + '" not exists');
            }
        };
    };
}(jQuery));