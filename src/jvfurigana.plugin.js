/*
   Copyright 2013 Julian Fernando Vidal | https://github.com/poisa/JVFurigana.js

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
(function( $ ) {
  $.fn.JVFurigana = function(options) {

            this.defaultOptions = {
                html: true,                // When set to true this will use jQuery's .html() function to get the contents
                                           // of the passed selectors. Otherwise it will use .text(), therefore losing all
                                           // styling.

                forceRender: false         // Will force rendering in non supported browsers. This usually results in no visible
                                           // change in the output though results may vary depending on the browser.
            };

            var settings = $.extend({}, this.defaultOptions, options),

                patt = XRegExp('([\\p{Han}]+)' +
                               '（([\\p{Hiragana}]*)）',
                               'gim');
            
            return this.each(function() {

                if ($.browser.mozilla || $.browser.opera) {
                    // Incompatible browser detected
                    if (!settings.forceRender) {
                        return;
                    }
                }

                var $this = $(this),
                    text = '';

                if (settings.html) {
                    text = $this.html();
                } else {
                    text = $this.text();
                }
                
                text = text.replace(patt, '<ruby>$1<rp>（</rp><rt>$2</rt><rp>）</rp></ruby>');

                $this.html(text);

            });
        }
})(jQuery);