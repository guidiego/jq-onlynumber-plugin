/*!
 * jQuery Only Number Plugin
 * Original author: @guidiego
 * Further changes, comments: @guidiego
 * Licensed under the MIT license
 */
 (function( $, window, document, undefined ) {
   'use strict';

    var Plugin = {
      /**
      * Inicia o Plugin
      * @param param (string) : Necessario para "destruir" o componente
      */
      init : function (params) {
        if (params === "destroy") $(this).off("keyup")
        else Plugin._transformToOnlyNumber($(this), params);
      },

      _getConfig : function(params) {

        var config = {
          regex : /[^0-9]/gi,
          callback : function (){}
        };

        if (params) {
          if (params.min && params.max){
            if (params.min >= params.max) console.error("O valor minimo tem que ser menor que o maximo")
            else config.regex = new RegExp("[^" + params.min + "-" + params.max + "]", "gi");
          }

          if (params.callback) config.callback = params.callback;
        }

        return config;
      },

      /**
      * Faz o campo aceitar apenas numerais
      */
      _transformToOnlyNumber : function (__this, params) {

        var config = Plugin._getConfig(params);
        console.log(config);
        __this.val(__this.val().replace(config.regex, ""));
        __this.attr("type", "numeric");

        __this.on("keyup", function () {
          __this.val(__this.val().replace(config.regex, ""));
        });
      }
    };

   $.fn.onlynumbers = Plugin.init;
 }( jQuery, window, document ));
