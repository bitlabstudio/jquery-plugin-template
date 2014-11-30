/*
 * MYPLUGIN_FULL_NAME v0.1.0
 *
 * MYPLUGIN_DESCRIPTION
 *
 * Latest source at MYPLUGIN_REPO_URL
 *
 *
 */

function MYPLUGIN_PROTOTYPE_NAME(element) {

    // init the prototype here

}

MYPLUGIN_PROTOTYPE_NAME.prototype.init = function () {

    //  call the plugin here

};


(function ($) {
    $.fn.MYPLUGIN_NAMESPACE = function () {
        var plugin,     // the plugin instance
            plugin_name = 'plugin_MYPLUGIN_NAMESPACE';
        return this.each(function () {
            plugin = new MYPLUGIN_PROTOTYPE_NAME(this);
            $.data(this, plugin_name, plugin);
            plugin.init();
        });
    };
})(jQuery);
