/* * * * * * * * * * * * * * * * * * * *
*
* NagishLi v2.3 Copyright (c) 2016-2019 Localize* (http://www.nagish.li)

! This program is free software: you can redistribute it and/or modify
! it under the terms of the GNU Lesser General Public License as published by
! the Free Software Foundation, either version 3 of the License, or
! (at your option) any later version.
!
! This program is distributed in the hope that it will be useful,
! but WITHOUT ANY WARRANTY; without even the implied warranty of
! MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
! GNU Lesser General Public License for more details.
!
! You should have received a copy of the GNU Lesser General Public License
! along with this program.  If not, see <http://www.gnu.org/licenses/>.

! People & Disability Pictograms Copyright (c) 2016 anatom5 GmbH in cooperation with Natko (http://www.anatom5.de & http://www.natko.de)
! Balloon.css Copyright (c) 2016 Claudio Holanda (https://kazzkiq.github.io/balloon.css/)
! Normalize.css Copyright (c) Nicolas Gallagher and Jonathan Neal (https://necolas.github.io/normalize.css/)
! Styling inspired by Pedro Nauk (https://codepen.io/pedronauck/)
! Arrows icons from Flaticon by Dave Gandy (http://www.flaticon.com/authors/dave-gandy)
! Star Of David icon from Flaticon by Scott de Jonge (http://www.flaticon.com/authors/scott-de-jonge)
! Bounce animations from Animate.css Copyright (c) 2016 Daniel Eden (https://daneden.github.io/animate.css/)
! Various icons (Cursor, audio ..) from Icons8 (https://icons8.com)
! Hotkeys Copyright (c) 2015 Kenny Wong (https://github.com/jaywcjlove/hotkeys/)

*
* * * * * * * * * * * * * * * * * * * */
if ('undefined' == typeof jQuery) {
  var docHead = document.getElementsByTagName('head')[0],
    scriptTag = document.createElement('script'),
    jq_not_found = !0;
  scriptTag.type = 'text/javascript';
  scriptTag.src = '//code.jquery.com/jquery-1.8.0.min.js';
  scriptTag.onload = initNagishLi;
  docHead.appendChild(scriptTag);
} else initNagishLi();
function initNagishLi() {
  function ma(a, d) {
    var e = document.createElement('script');
    e.src = a;
    e.id = d;
    document.getElementsByTagName('nagishli')[0].appendChild(e);
  }
  function h(a) {
    return (a = a.match(
      /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i,
    )) && 4 === a.length
      ? '#' +
          ('0' + parseInt(a[1], 10).toString(16)).slice(-2) +
          ('0' + parseInt(a[2], 10).toString(16)).slice(-2) +
          ('0' + parseInt(a[3], 10).toString(16)).slice(-2)
      : '';
  }
  function W(a) {
    a = a.replace('#', '');
    a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (a, d, e, f) {
      return d + d + e + e + f + f;
    });
    return (
      'rgb(' +
      [
        ((bigint = parseInt(a, 16)) >> 16) & 255,
        (bigint >> 8) & 255,
        bigint & 255,
      ].join() +
      ')'
    );
  }
  function f(a, d, e) {
    e = void 0 === e ? !1 : e;
    if (!A) return !1;
    var f = {
      version: M,
      menu: 'closed',
      position: N,
      submenus: '000000',
      help: '0',
      text: '0',
      colors: 'normal',
      display: 'normal',
      highlight: '00',
      zoom: '0.0',
      font: 'normal',
      animations: 'on',
      cursor: 'normal',
      tabbing: 'off',
      r2m: 'off',
      ok: '0',
    };
    f = localStorage.getItem('Localize-NagishLi-A11y-Plugin-Settings')
      ? localStorage.getItem('Localize-NagishLi-A11y-Plugin-Settings')
      : JSON.stringify(f);
    f = JSON.parse(f);
    'delete' == a ||
      f[d] ||
      console.log(
        phrases.missing_setting,
        'color: RoyalBlue; font-weight: bold;',
        '',
        'color: #EB2B36;',
        '',
      );
    if (-1 !== ['change', 'read', 'delete'].indexOf(a)) {
      if ('read' == a) return 'object' === typeof e && (f[d] = f[d].charAt(e.pos)), f[d];
      'change' == a
        ? ((f[d] =
            'object' === typeof e
              ? f[d].substring(0, e.pos) + e.to + f[d].substring(e.pos + 1)
              : e),
          localStorage.setItem(
            'Localize-NagishLi-A11y-Plugin-Settings',
            JSON.stringify(f),
          ))
        : 'delete' == a &&
          localStorage.removeItem('Localize-NagishLi-A11y-Plugin-Settings');
    } else return !1;
  }
  var K,
    x = '0',
    O = '0',
    C,
    d,
    e;
  var M = '2.3';
  var m =
    (K = 'undefined' != typeof nl_link && '0' != nl_link ? nl_link : !1) ||
    'undefined' == typeof nl_contact ||
    -1 == nl_contact.indexOf(':')
      ? !1
      : nl_contact;
  var g =
    'undefined' != typeof nl_lang && /^(he|en)$/i.test(nl_lang)
      ? nl_lang.toLowerCase()
      : 'he';
  var N =
    'undefined' != typeof nl_pos && /^(tr|br|tl|bl)$/i.test(nl_pos)
      ? nl_pos.toUpperCase()
      : 'TL';
  var P =
    'undefined' != typeof nl_color &&
    /^(blue|red|green|purple|yellow|pink|gray|brown|orange|turquoise|black)$/i.test(
      nl_color,
    )
      ? nl_color.toLowerCase()
      : 'blue';
  var na = 'undefined' != typeof nl_compact && '1' == nl_compact ? !0 : !1;
  if ('undefined' != typeof nl_lic)
    try {
      (x = nl_lic), window.atob(x);
    } catch (a) {
      x = '0';
    }
  if ('0' != x) {
    O = window.atob(x).split('+', 2)[0];
    var oa = window.atob(x).split('+', 2)[1];
  }
  var k = location.hostname;
  var Q = 0 === k.lastIndexOf('www.', 0) ? 'www' : '';
  var D =
    'www' == Q || ('2' == O && '' != Q)
      ? k.substr(k.indexOf('.') + 1, k.length)
      : k.toLowerCase();
  var pa =
    'undefined' !== typeof navigator
      ? 0 < navigator.userAgent.toLowerCase().indexOf('firefox')
      : !1;
  var qa = !window.ActiveXObject && 'ActiveXObject' in window ? !0 : !1;
  var X =
    'en' == g &&
    (window.webkitSpeechSynthesisUtterance ||
      window.mozSpeechSynthesisUtterance ||
      window.msSpeechSynthesisUtterance ||
      window.oSpeechSynthesisUtterance ||
      window.SpeechSynthesisUtterance)
      ? !0
      : !1;
  (function (a) {
    (jQuery.browser = jQuery.browser || {}).mobile =
      /(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4),
      );
  })(navigator.userAgent || navigator.vendor || window.opera);
  var G = jQuery.browser.mobile;
  var H = ('undefined' != typeof nl_accordion && '1' == nl_accordion) || G ? !0 : !1;
  var A = (function () {
    var a = new Date(),
      d;
    try {
      (d = window.localStorage).setItem(a, a);
      var e = d.getItem(a) == a;
      d.removeItem(a);
      return e && d;
    } catch (ra) {}
  })();
  if ('undefined' != typeof nl_dir)
    var q = '/' == nl_dir.substr(-1) ? nl_dir.slice(0, -1) : nl_dir;
  else {
    k = document.querySelectorAll('script[src]');
    k = k[k.length - 1].src;
    var I = k.split('/');
    k = k.replace(I[I.length - 1], '').slice(0, -1);
    q = k + '/nl-files';
  }
  if (!K && m) {
    var p = !1,
      v = !1,
      u = !1,
      z = !1;
    -1 != m.indexOf('|')
      ? ((m = nl_contact.split('|')),
        m.forEach(function (a) {
          !1 !== !!~a.indexOf('n:') && (p = a.replace('n:', ''));
          !1 !== !!~a.indexOf('p:') && (v = a.replace('p:', ''));
          !1 !== !!~a.indexOf('u:') &&
            (u =
              !1 !== !!~a.indexOf('d:')
                ? a.replace('+', '@').replace('u:', '').replace('d:', '')
                : a.replace('u:', '') + '@' + D);
          !1 !== !!~a.indexOf('f:') && (z = a.replace('f:', ''));
        }))
      : -1 != m.indexOf('n:')
        ? (p = m.replace('n:', ''))
        : -1 != m.indexOf('p:')
          ? (v = m.replace('p:', ''))
          : -1 != m.indexOf('u:')
            ? (u =
                -1 != m.indexOf('d:')
                  ? m.replace('+', '@').replace('u:', '').replace('d:', '')
                  : m.replace('u:', '') + '@' + D)
            : -1 != m.indexOf('f:') && (z = m.replace('f:', ''));
  }
  phrases =
    'en' == g
      ? {
          a11y_info: 'Accessibilty Statement',
          a11y_info_exp: "This website's accessibilty statement",
          a11y_title: 'Accessibility',
          about: 'About NagishLi',
          about_text:
            '<span class="nlap-stitle">How this website was made accessible?</span><br />This website was made accessible with <a href="https://www.nagish.li/' +
            g +
            '/" target="_blank" tabindex="1">NagishLi</a>, a free accessibility plugin developed by <a href="http://www.localize.co.il" target="_blank" tabindex="1">Localize*</a> and using it is under its <a href="https://www.nagish.li/' +
            g +
            '/license.html" target="_blank" tabindex="1">license terms</a>.<br /><br /><span class="nlap-stitle">Why develop such a plugin?</span><br />Since the accessibility subject got more attention, free accessibility plugins were offered mostly to WordPress users. Other scripts and website owners were pretty much "left out". Making a website accessible is a complicated and relatively long process (or at least that\'s how people describe it). Localize* also needed a plugin for its own websites, and if you need to manage a few websites, the time and cost of making them accessible can be expensive.<br /><br /><span class="nlap-stitle">Is it really free? Why?</span><br />The plugin was developed initially for Localize\'s personal use, which later decided to release it to the public in order to make every website accessible to impaired people. It still has a long way to develop and improve, but if it\'ll help make more websites accessible to impaired people - Localize* is happy to be a part of that.',
          about_text_lic:
            '<span class="nlap-stitle">How this website was made accessible?</span><br />This website was made accessible with <a href="https://www.nagish.li/' +
            g +
            '/" target="_blank" tabindex="1">NagishLi</a> and using it is under its <a href="https://www.nagish.li/' +
            g +
            '/license.html" target="_blank" tabindex="1">license terms</a>.<br /><br /><span class="nlap-stitle">Why develop such a plugin?</span><br />Since the accessibility subject got more attention, free accessibility plugins were offered mostly to WordPress users. Other scripts and website owners were pretty much "left out". Making a website accessible is a complicated and relatively long process (or at least that\'s how people describe it) and if you need to manage a few websites, the time and cost of making them accessible can be expensive. This plugin was developed also for non-WordPress websites.',
          accessibility_statement:
            'This website takes accessibilty seriously and make every effort possible to be comfortably accessed by the general population and people with disabilties so that every user will be able to make the most out of the content it presents. For this important purpose, this website uses <a href="https://www.nagish.li/' +
            g +
            '/" target="_blank" tabindex="1">NagishLi</a> - a free accessibility plugin. The usage of NagishLi is subject to the terms of <a href="https://www.nagish.li/' +
            g +
            '/license.html" target="_blank" tabindex="1">license</a> attached to it.<br /><br />' +
            (m
              ? 'If you have any questions or comments about this website accessibility, please contact us:<br /><br />' +
                (p ? 'Contact Person: ' + p + '<br />' : '') +
                (v ? 'Phone: ' + v + '<br />' : '') +
                (u ? 'E-Mail: <a href="mailto:' + u + '">' + u + '</a><br />' : '') +
                (z ? 'Fax: ' + z + '<br />' : '') +
                '<br />'
              : '') +
            "<span class=\"nlas-stitle\">How to use the accessibility plugin</span><br />After clicking the accesibility button, the accessibility plugin's menus will expand, presenting you with the following options:<ul><li>Adjusting text size (also accessible by using the keyboard shortcuts SHIFT and A, SHIFT and S)</li><li>Changing website's colors (also accessible by the keyboard shortcuts SHIFT and Q, SHIFT and W, SHIFT and E)</li><li>Changing website's display</li><li>Highlight titles and links (also accessible by using the keyboard shortcuts SHIFT and D, SHIFT and F)</li><li>Navigate quickly through areas of the page (also accessible by using the keyboard shortcuts ALT and V, ALT and B)</li><li>Shrink or magnify the website's display (zoom)</li><li>Make the website's font easier to read</li><li>Pause animations in the website</li><li>Listen to substituted audio for the pictures in the website using a text-to-speech program</li><li>Listen to an audio reading of phone numbers</li><li>Change the mouse cursor</li><li>Navigate through the plugin options using the Tab key (and also Shift+Tab) and activate them using the Enter key</li></ul>Despite the efforts invested in the development of this plugin, in some scenarios content may not be made accessible by it, such as contents presented by a third party (e.g. YouTube, other external embedded content, etc.). Note that NagishLi is in continuous development in order to improve and comply with the latest accessibility standards.<br /><br />",
          align_left: 'right',
          align_right: 'left',
          and: 'and ',
          animations: 'Animations',
          animations_exp: 'Stop moving and flickering elements',
          animations_on: 'On',
          animations_off: 'Off',
          aria_close_modal: 'Close this info',
          aria_select_bgcolor: 'Choose background color',
          aria_select_color: 'Choose the color of the ',
          aria_select_txtcolor: 'Choose text color',
          aria_the_option: 'The option ',
          aria_toggle_open_alt: 'Open the menu options of ',
          aria_toggle_close_alt: 'Close the menu options of ',
          bg: 'Background',
          bl_filter: 'Blue light filter',
          bl_filter_exp: 'Warm colors',
          blind: 'Color blind',
          blind_exp: 'Gray colors',
          body_missing:
            "NagishLi says: the <body> is missing! the accessibility plugin can't work without it.",
          branding: 'NagishLi',
          branding_exp: 'NagishLi - Free accessibilty plugin',
          chrome: 'Chrome',
          clr_black: 'Black',
          clr_blue: 'Blue',
          clr_custom: 'Custom color',
          clr_gray: 'Gray',
          clr_green: 'Green',
          clr_orange: 'Orange',
          clr_pink: 'Pink',
          clr_purple: 'Purple',
          clr_red: 'Red',
          clr_white: 'White',
          clr_yellow: 'Yellow',
          collapse_all: 'Collapse all the menus',
          color_select: 'Choose color',
          color: 'color',
          colors: 'Colors',
          cursor: 'Cursor',
          cursor_exp: 'Change the cursor icon',
          cursor_black: 'Black',
          cursor_white: 'White',
          custom_colors: 'Custom',
          custom_colors_close: 'Close custom colors options',
          custom_colors_exp: 'Change background and text colors',
          developed_by: 'developed by',
          developed_in: 'Developed in Israel',
          developed_in_link: 'https://en.wikipedia.org/wiki/Israel',
          developer: 'Localize',
          developer_exp: 'Web development services',
          developer_message:
            "A few words from the main person working on the plugin: \"I'm still studying and investigating the website accessibility subject when I can, and I'm interested in developing more features for this free plugin (there's already a feature list for the next versions), but I'm a busy guy - I can usually only work on this plugin in my free time. I do try my best to make it useful to as many website owners and visitors as possible. If you do decide to use the plugin, and like it - you can donate towards its developement. Any amount is more than welcome. If you choose not to donate, or can't donate, I still hope that the plugin will be useful to you and help your website's visitors.\"",
          dir: 'ltr',
          display: 'Display',
          edge: 'Edge',
          expand_all: 'Expand all the menus',
          experimental_feat: 'This is an experimental feature',
          explorer: 'Internet Explorer',
          firefox: 'Firefox',
          font: 'Font',
          font_exp: 'Change the font of the page',
          font_readable: 'Readable',
          help: 'Help',
          help_exp: 'Click here for help',
          highlight: 'Highlight',
          hl_headings: 'Highlight titles',
          hl_headings_exp: 'Highlight all the titles on the page',
          hl_links: 'Highlight links',
          hl_links_exp: 'Highlight all the links on the page',
          how_accessible: 'About this website accessibility',
          how_accessible_exp: 'About this accessibilty plugin',
          images_only: 'Images only',
          images_only_exp: 'Hide the text on the page',
          img_alt_missing: 'Image with no description',
          img_alt: 'Possible image description: ',
          impaired: 'Impaired vision',
          impaired_exp: 'Maximum contrast',
          jq_too_low:
            "%cNagishLi%c says: your jQuery version is too low, it's possible that some (or all) options of the accessibility plugin won't work.",
          jq_not_found_msg:
            "%cNagishLi%c says: it seems that jQuery do not exist on this page. The plugin can't function without it, and added the required minimum jQuery version to the page automatically.",
          kbnav: 'Keyboard navigation',
          kbnav_exp: 'Navigate this site using a keyboard',
          kbnav_off: 'Off',
          kbnav_on: 'On',
          kbshortcuts: 'Keyboard shortcuts',
          kbshortcuts_exp: 'Accessible key combinations and instructions',
          kbshortcuts_text:
            "To make it easier to use NagishLi, there are few keyboard shortcuts you can press to use the options it has to offer.<br /><br /><kbd>ALT and Z</kbd> - Collapse and expand the accessibility plugin.<br /><br /><kbd>ALT and X</kbd> - Show help inside the plugin. Repeating this combination will undo this option.<br /><br /><kbd>ALT and C</kbd> - Reset the accessibilty options set by the plugin.<br /><br /><kbd>ALT and V</kbd> - Quick navigation to the top of the page.<br /><br /><kbd>ALT and B</kbd> - Quick navigation to the bottom of page.<br /><br /><kbd>SHIFT and A</kbd> - Enlarge the text of the page.<br /><br /><kbd>SHIFT and S</kbd> - Shrink the text of the page.<br /><br /><kbd>SHIFT and D</kbd> - Highlight the links on the page. Repeating this combination will undo this option.<br /><br /><kbd>SHIFT and F</kbd> - Highlight the titles on the page. Repeating this combination will undo this option.<br /><br /><kbd>SHIFT and Q</kbd> - Activate the option 'Color blind' (Gray colors). Repeating this combination will undo this option.<br /><br /><kbd>SHIFT and W</kbd> - Activate the option 'Impaired vision' (High contrast). Repeating this combination will undo this option.<br /><br /><kbd>SHIFT and E</kbd> - Activate the option 'Strong colors' (Saturated colors). Repeating this combination will undo this option.<br /><br />",
          larger_text: 'Larger',
          larger_text_exp: 'Enlarge the text with each click',
          lc_filter: 'Living colors filter',
          lc_filter_exp: 'Cold colors',
          lic_warn:
            'This website is using an unlicensed version of NagishLi. A lot of time and effort were put into this plugin, please <a href="https://www.nagish.li/en/contact.html" target="_blank" style="color: black !important; text-decoration: underline !important;" tabindex="1">click here</a> to send an anonymous report about this website. Thank you!',
          logo_alt: 'Logo',
          misc: 'Misc',
          missing_setting: '%cNagishLi%c says: %cThe setting is missing.%c',
          move_bl: 'Move to Bottom Left',
          move_br: 'Move to Bottom Right',
          move_tl: 'Move to Top Left',
          move_tr: 'Move to Top Right',
          normal: 'Normal',
          normal_display: 'Normal',
          normal_plu: 'Normal',
          not_supported: 'This feature is not supported by your browser.',
          opera: 'Opera',
          r2m: 'Audio reading',
          r2m_exp: 'Listen to audio version of digits',
          r2m_na: 'Audio reading is not available at the moment. Try again later.',
          r2m_off: 'Off',
          r2m_on: 'On',
          reset_prompt: 'Would you like to reset the accessibilty settings?',
          reset_settings: 'Reset settings',
          reset_settings_exp: 'Reset all of the settings set by the plugin',
          saturated: 'Bright colors',
          saturated_exp: 'Saturate the page colors',
          settings: 'Info & Settings',
          settings_prompt:
            'It seems that the current accessibility settings might be problematic. Would you like to reset the settings? (Recommended)',
          settings_reset_alert_ok:
            'The settings have been reset. Please refresh the page.',
          settings_reset_html_ok:
            'The settings have been reset. <a href="javascript:void(0);" onclick="javascript:location.replace(window.location.href.split(\'#\')[0]);" style="color: black !important; text-decoration: underline !important; outline: 5px solid rgba(88, 144, 255, 0.75) !important;" tabindex="1">Refresh the page</a>',
          settings_save: 'The settings will be saved.',
          settings_save_reminder:
            "Remember: You can also reset them under 'Info & Settings'.",
          settings_upgrade_html:
            'NagishLi was upgraded. <a href="javascript:void(0);" onclick="javascript:location.replace(window.location.href.split(\'#\')[0]);" style="color: black !important; text-decoration: underline !important;" tabindex="1">Refresh the page</a>',
          skiplinks: 'Go to',
          skiplinks_exp: 'Quick navigation to website and page areas',
          skiplinks_default: 'Choose location',
          skiplinks_page_nav: 'Page navigation',
          skiplinks_site_nav: 'Site navigation',
          skiplinks_to_top: 'Top of the page',
          skiplinks_to_menu: 'Menu',
          skiplinks_to_header: 'Main title',
          skiplinks_to_paragraph: 'First paragraph',
          skiplinks_to_content: 'Content',
          skiplinks_to_bottom: 'Bottom of the page',
          skiplinks_to_home: 'Home page',
          smaller_text: 'Smaller',
          smaller_text_exp: 'Shrink the text with each click',
          supported_browsers: 'Supported browsers',
          supported_browsers_exp:
            'Supported browsers: Google Chrome, Microsoft Edge, Mozilla Firefox, Opera and Internet Explorer. The accessibility plugin makes use of advanced features in your browser. Please use an up-to-date browser.',
          text_only: 'Text only',
          text_only_exp: 'Hide the images on the page',
          text_size: 'Text Size',
          txt: 'Text',
          unsupported_media:
            'Playing this video or audio is unavailable in your browser.',
          untitled_page: 'Untitled page',
          zoom: 'Zoom',
          zoom_exp: 'Zoom in and out of the page',
          zoom_in: 'Zoom in',
          zoom_out: 'Zoom out',
        }
      : {
          a11y_info:
            '\u05d4\u05e6\u05d4\u05e8\u05ea \u05e0\u05d2\u05d9\u05e9\u05d5\u05ea',
          a11y_info_exp:
            '\u05d4\u05e6\u05d4\u05e8\u05ea \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05e9\u05dc \u05d0\u05ea\u05e8 \u05d6\u05d4',
          a11y_title: '\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea',
          about: '\u05d0\u05d5\u05d3\u05d5\u05ea \u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9',
          about_text:
            '<span class="nlap-stitle">\u05db\u05d9\u05e6\u05d3 \u05d4\u05d5\u05e0\u05d2\u05e9 \u05d0\u05ea\u05e8 \u05d6\u05d4?</span><br />\u05d0\u05ea\u05e8 \u05d6\u05d4 \u05d4\u05d5\u05e0\u05d2\u05e9 \u05e2\u05dc \u05d9\u05d3\u05d9 <a href="https://www.nagish.li/' +
            g +
            '/" target="_blank" tabindex="1">\u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9</a>, \u05ea\u05d5\u05e1\u05e3 \u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05dc\u05dc\u05d0 \u05e2\u05dc\u05d5\u05ea \u05e9\u05e4\u05d5\u05ea\u05d7 \u05e2\u05dc \u05d9\u05d3\u05d9 <a href="http://www.localize.co.il" target="_blank" tabindex="1">\u05dc\u05d5\u05e7\u05dc\u05d9\u05d9\u05d6*</a> \u05d5\u05d4\u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05d5 \u05db\u05e4\u05d5\u05e3 \u05dc\u05ea\u05e0\u05d0\u05d9 <a href="https://www.nagish.li/' +
            g +
            '/license.html" target="_blank" tabindex="1">\u05d4\u05e8\u05d9\u05e9\u05d9\u05d5\u05df</a> \u05d4\u05de\u05e6\u05d5\u05e8\u05e4\u05d9\u05dd \u05d0\u05dc\u05d9\u05d5.<br /><br /><span class="nlap-stitle">\u05dc\u05de\u05d4 \u05e4\u05d5\u05ea\u05d7 \u05ea\u05d5\u05e1\u05e3 \u05d6\u05d4?</span><br />\u05de\u05d0\u05d6 \u05e9\u05e0\u05d5\u05e9\u05d0 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05e2\u05dc\u05d4, \u05ea\u05d5\u05e1\u05e4\u05d9 \u05d4\u05e0\u05d2\u05e9\u05d4 \u05d7\u05d9\u05e0\u05de\u05d9\u05d9\u05dd \u05d4\u05d5\u05e6\u05e2\u05d5 \u05d1\u05e2\u05d9\u05e7\u05e8 \u05dc\u05de\u05e9\u05ea\u05de\u05e9\u05d9 \u05de\u05e2\u05e8\u05db\u05ea \u05d5\u05d5\u05e8\u05d3\u05e4\u05e8\u05e1. \u05d1\u05e2\u05dc\u05d9 \u05d0\u05ea\u05e8\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd \u05d5\u05de\u05e2\u05e8\u05db\u05d5\u05ea \u05d0\u05d7\u05e8\u05d5\u05ea \u05d3\u05d9 "\u05d4\u05d5\u05d6\u05e0\u05d7\u05d5". \u05d4\u05e0\u05d2\u05e9\u05ea \u05d0\u05ea\u05e8 \u05d4\u05d9\u05d0 \u05ea\u05d4\u05dc\u05d9\u05da \u05de\u05d5\u05e8\u05db\u05d1, \u05de\u05e1\u05d5\u05d1\u05da \u05d5\u05d0\u05e8\u05d5\u05da \u05d9\u05d7\u05e1\u05d9\u05ea (\u05d0\u05d5 \u05dc\u05e4\u05d7\u05d5\u05ea \u05db\u05db\u05d4 \u05de\u05ea\u05d0\u05e8\u05d9\u05dd \u05d0\u05d5\u05ea\u05d5). \u05d2\u05dd \u05dc\u05d5\u05e7\u05dc\u05d9\u05d9\u05d6* \u05e0\u05d6\u05e7\u05e7\u05d4 \u05dc\u05ea\u05d5\u05e1\u05e3 \u05dc\u05d0\u05ea\u05e8\u05d9\u05dd \u05e9\u05dc\u05d4, \u05d5\u05d0\u05dd \u05e6\u05e8\u05d9\u05da \u05dc\u05ea\u05d7\u05d6\u05e7 \u05db\u05de\u05d4 \u05d0\u05ea\u05e8\u05d9\u05dd, \u05e2\u05dc\u05d5\u05ea \u05d5\u05d6\u05de\u05df \u05d4\u05d4\u05e0\u05d2\u05e9\u05d4 \u05e9\u05dc \u05d4\u05d0\u05ea\u05e8\u05d9\u05dd \u05d4\u05d0\u05dc\u05d4 \u05d9\u05db\u05d5\u05dc\u05d9\u05dd \u05dc\u05d4\u05d9\u05d5\u05ea \u05d9\u05e7\u05e8\u05d9\u05dd.<br /><br /><span class="nlap-stitle">\u05d4\u05d5\u05d0 \u05d1\u05d0\u05de\u05ea \u05d1\u05d7\u05d9\u05e0\u05dd? \u05dc\u05de\u05d4?</span><br />\u05d4\u05ea\u05d5\u05e1\u05e3 \u05e4\u05d5\u05ea\u05d7 \u05d1\u05ea\u05d7\u05d9\u05dc\u05d4 \u05e2\u05d1\u05d5\u05e8 \u05d4\u05e9\u05d9\u05de\u05d5\u05e9 \u05d4\u05d0\u05d9\u05e9\u05d9 \u05e9\u05dc \u05dc\u05d5\u05e7\u05dc\u05d9\u05d9\u05d6*, \u05e9\u05dc\u05d0\u05d7\u05e8 \u05de\u05db\u05df \u05d4\u05d7\u05dc\u05d9\u05d8\u05d4 \u05dc\u05e9\u05d7\u05e8\u05e8 \u05d0\u05d5\u05ea\u05d5 \u05dc\u05e6\u05d9\u05d1\u05d5\u05e8 \u05d4\u05e8\u05d7\u05d1 \u05d1\u05de\u05d8\u05e8\u05d4 \u05dc\u05d4\u05e0\u05d2\u05d9\u05e9 \u05db\u05dc \u05d0\u05ea\u05e8 \u05e2\u05d1\u05d5\u05e8 \u05d0\u05e0\u05e9\u05d9\u05dd \u05e2\u05dd \u05de\u05d5\u05d2\u05d1\u05dc\u05d5\u05ea. \u05dc\u05ea\u05d5\u05e1\u05e3 \u05d9\u05e9 \u05e2\u05d5\u05d3 \u05d3\u05e8\u05da \u05d0\u05e8\u05d5\u05db\u05d4 \u05dc\u05d4\u05ea\u05e4\u05ea\u05d7 \u05d5\u05dc\u05d4\u05e9\u05ea\u05e4\u05e8, \u05d0\u05d1\u05dc \u05d0\u05dd \u05d4\u05d5\u05d0 \u05d9\u05e1\u05d9\u05d9\u05e2 \u05dc\u05d4\u05e4\u05d5\u05da \u05d9\u05d5\u05ea\u05e8 \u05d0\u05ea\u05e8\u05d9\u05dd \u05dc\u05e0\u05d2\u05d9\u05e9\u05d9\u05dd \u05e2\u05d1\u05d5\u05e8 \u05d0\u05e0\u05e9\u05d9\u05dd \u05e2\u05dd \u05de\u05d5\u05d2\u05d1\u05dc\u05d5\u05ea - \u05dc\u05d5\u05e7\u05dc\u05d9\u05d9\u05d6* \u05e9\u05de\u05d7\u05d4 \u05e9\u05d4\u05d9\u05d0 \u05d9\u05db\u05d5\u05dc\u05d4 \u05dc\u05e7\u05d7\u05ea \u05d7\u05dc\u05e7 \u05d1\u05d6\u05d4.',
          about_text_lic:
            '<span class="nlap-stitle">\u05db\u05d9\u05e6\u05d3 \u05d4\u05d5\u05e0\u05d2\u05e9 \u05d0\u05ea\u05e8 \u05d6\u05d4?</span><br />\u05d0\u05ea\u05e8 \u05d6\u05d4 \u05d4\u05d5\u05e0\u05d2\u05e9 \u05e2\u05dc \u05d9\u05d3\u05d9 <a href="https://www.nagish.li/' +
            g +
            '/" target="_blank" tabindex="1">\u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9</a> \u05d5\u05d4\u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05d5 \u05db\u05e4\u05d5\u05e3 \u05dc\u05ea\u05e0\u05d0\u05d9 <a href="https://www.nagish.li/' +
            g +
            '/license.html" target="_blank" tabindex="1">\u05d4\u05e8\u05d9\u05e9\u05d9\u05d5\u05df</a> \u05d4\u05de\u05e6\u05d5\u05e8\u05e4\u05d9\u05dd \u05d0\u05dc\u05d9\u05d5.<br /><br /><span class="nlap-stitle">\u05dc\u05de\u05d4 \u05e4\u05d5\u05ea\u05d7 \u05ea\u05d5\u05e1\u05e3 \u05d6\u05d4?</span><br />\u05de\u05d0\u05d6 \u05e9\u05e0\u05d5\u05e9\u05d0 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05e2\u05dc\u05d4, \u05ea\u05d5\u05e1\u05e4\u05d9 \u05d4\u05e0\u05d2\u05e9\u05d4 \u05d7\u05d9\u05e0\u05de\u05d9\u05d9\u05dd \u05d4\u05d5\u05e6\u05e2\u05d5 \u05d1\u05e2\u05d9\u05e7\u05e8 \u05dc\u05de\u05e9\u05ea\u05de\u05e9\u05d9 \u05de\u05e2\u05e8\u05db\u05ea \u05d5\u05d5\u05e8\u05d3\u05e4\u05e8\u05e1. \u05d1\u05e2\u05dc\u05d9 \u05d0\u05ea\u05e8\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd \u05d5\u05de\u05e2\u05e8\u05db\u05d5\u05ea \u05d0\u05d7\u05e8\u05d5\u05ea \u05d3\u05d9 "\u05d4\u05d5\u05d6\u05e0\u05d7\u05d5". \u05d4\u05e0\u05d2\u05e9\u05ea \u05d0\u05ea\u05e8 \u05d4\u05d9\u05d0 \u05ea\u05d4\u05dc\u05d9\u05da \u05de\u05d5\u05e8\u05db\u05d1, \u05de\u05e1\u05d5\u05d1\u05da \u05d5\u05d0\u05e8\u05d5\u05da \u05d9\u05d7\u05e1\u05d9\u05ea (\u05d0\u05d5 \u05dc\u05e4\u05d7\u05d5\u05ea \u05db\u05db\u05d4 \u05de\u05ea\u05d0\u05e8\u05d9\u05dd \u05d0\u05d5\u05ea\u05d5). \u05ea\u05d5\u05e1\u05e3 \u05d6\u05d4 \u05e4\u05d5\u05ea\u05d7 \u05d2\u05dd \u05e2\u05d1\u05d5\u05e8 \u05d0\u05ea\u05e8\u05d9\u05dd \u05e9\u05d0\u05d9\u05e0\u05dd \u05de\u05d5\u05e4\u05e2\u05dc\u05d9\u05dd \u05e2\u05dc \u05d9\u05d3\u05d9 \u05de\u05e2\u05e8\u05db\u05ea \u05d5\u05d5\u05e8\u05d3\u05e4\u05e8\u05e1.',
          accessibility_statement:
            '\u05d0\u05ea\u05e8 \u05d6\u05d4 \u05de\u05d9\u05d9\u05d7\u05e1 \u05d7\u05e9\u05d9\u05d1\u05d5\u05ea \u05e8\u05d1\u05d4 \u05dc\u05d4\u05e0\u05d2\u05e9\u05ea \u05d4\u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05d5 \u05dc\u05db\u05dc\u05dc \u05d4\u05d0\u05d5\u05db\u05dc\u05d5\u05e1\u05d9\u05d9\u05d4 \u05d5\u05e2\u05d5\u05e9\u05d4 \u05db\u05dc \u05e9\u05d1\u05d9\u05db\u05d5\u05dc\u05ea\u05d5 \u05dc\u05d4\u05d1\u05d8\u05d9\u05d7 \u05e9\u05d0\u05e0\u05e9\u05d9\u05dd \u05e2\u05dd \u05de\u05d5\u05d2\u05d1\u05dc\u05d5\u05ea \u05d9\u05d5\u05db\u05dc\u05d5 \u05dc\u05d4\u05e4\u05d9\u05e7 \u05d0\u05ea \u05d4\u05de\u05d9\u05d8\u05d1 \u05de\u05d4\u05ea\u05db\u05e0\u05d9\u05dd \u05d4\u05de\u05d5\u05e6\u05d2\u05d9\u05dd \u05d1\u05d5. \u05d0\u05ea\u05e8 \u05d6\u05d4 \u05de\u05e9\u05ea\u05de\u05e9 \u05d1\u05ea\u05d5\u05e1\u05e3 <a href="https://www.nagish.li/' +
            g +
            '/" target="_blank" tabindex="1">\u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9</a> \u05dc\u05e9\u05dd \u05de\u05d8\u05e8\u05d4 \u05d7\u05e9\u05d5\u05d1\u05d4 \u05d6\u05d5, \u05d5\u05d4\u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05ea\u05d5\u05e1\u05e3 \u05db\u05e4\u05d5\u05e3 \u05dc\u05ea\u05e0\u05d0\u05d9 <a href="https://www.nagish.li/' +
            g +
            '/license.html" target="_blank" tabindex="1">\u05d4\u05e8\u05d9\u05e9\u05d9\u05d5\u05df</a> \u05d4\u05de\u05e6\u05d5\u05e8\u05e4\u05d9\u05dd \u05d0\u05dc\u05d9\u05d5.<br /><br />' +
            (m
              ? '\u05d0\u05dd \u05d9\u05e9 \u05dc\u05da \u05e9\u05d0\u05dc\u05d5\u05ea \u05d0\u05d5 \u05d4\u05e2\u05e8\u05d5\u05ea \u05db\u05dc\u05e9\u05d4\u05df \u05dc\u05d2\u05d1\u05d9 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05e9\u05dc \u05d0\u05ea\u05e8 \u05d6\u05d4, \u05d1\u05d0\u05e4\u05e9\u05e8\u05d5\u05ea\u05da \u05dc\u05d9\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8:<br /><br />' +
                (p
                  ? '\u05de\u05de\u05d5\u05e0\u05d4 \u05e2\u05dc \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea: ' +
                    p +
                    '<br />'
                  : '') +
                (v ? '\u05d8\u05dc\u05e4\u05d5\u05df: ' + v + '<br />' : '') +
                (u
                  ? '\u05d3\u05d5\u05d0\u05e8 \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9: <a href="mailto:' +
                    u +
                    '">' +
                    u +
                    '</a><br />'
                  : '') +
                (z ? '\u05e4\u05e7\u05e1: ' + z + '<br />' : '') +
                '<br />'
              : '') +
            '<span class="nlas-stitle">\u05d0\u05d9\u05da \u05dc\u05d4\u05e9\u05ea\u05de\u05e9 \u05d1\u05ea\u05d5\u05e1\u05e3 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea</span><br />\u05dc\u05d0\u05d7\u05e8 \u05d4\u05dc\u05d7\u05d9\u05e6\u05d4 \u05e2\u05dc \u05db\u05e4\u05ea\u05d5\u05e8 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05d9\u05d9\u05e4\u05ea\u05d7\u05d5 \u05d1\u05e4\u05e0\u05d9\u05db\u05dd \u05ea\u05e4\u05e8\u05d9\u05d8\u05d9 \u05ea\u05d5\u05e1\u05e3 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea, \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea\u05dd \u05ea\u05d5\u05db\u05dc\u05d5:<ul><li>\u05dc\u05e9\u05e0\u05d5\u05ea \u05d0\u05ea \u05d2\u05d5\u05d3\u05dc \u05d4\u05d8\u05e7\u05e1\u05d8 (\u05e0\u05d9\u05ea\u05df \u05dc\u05d4\u05e9\u05ea\u05de\u05e9 \u05d2\u05dd \u05d1\u05e7\u05d9\u05e6\u05d5\u05e8\u05d9 \u05d4\u05de\u05e7\u05e9\u05d9\u05dd <span dir="rtl">SHIFT \u05d5- A</span>, SHIFT \u05d5- S)</li><li>\u05dc\u05e9\u05e0\u05d5\u05ea \u05d0\u05ea \u05e6\u05d1\u05e2\u05d9 \u05d4\u05d0\u05ea\u05e8 (\u05e0\u05d9\u05ea\u05df \u05dc\u05d4\u05e9\u05ea\u05de\u05e9 \u05d2\u05dd \u05d1\u05e7\u05d9\u05e6\u05d5\u05e8\u05d9 \u05d4\u05de\u05e7\u05e9\u05d9\u05dd <span dir="rtl">SHIFT \u05d5- Q</span>, <span dir="rtl">SHIFT \u05d5- W</span>, SHIFT \u05d5- E)</li><li>\u05dc\u05e9\u05e0\u05d5\u05ea \u05d0\u05ea \u05ea\u05e6\u05d5\u05d2\u05ea \u05d4\u05d0\u05ea\u05e8</li><li>\u05dc\u05e1\u05de\u05df \u05e7\u05d9\u05e9\u05d5\u05e8\u05d9\u05dd \u05d5\u05db\u05d5\u05ea\u05e8\u05d5\u05ea \u05d1\u05d0\u05ea\u05e8 (\u05e0\u05d9\u05ea\u05df \u05dc\u05d4\u05e9\u05ea\u05de\u05e9 \u05d2\u05dd \u05d1\u05e7\u05d9\u05e6\u05d5\u05e8\u05d9 \u05d4\u05de\u05e7\u05e9\u05d9\u05dd <span dir="rtl">SHIFT \u05d5- D</span>, SHIFT \u05d5- F)</li><li>\u05dc\u05e0\u05d5\u05d5\u05d8 \u05d1\u05de\u05d4\u05d9\u05e8\u05d5\u05ea \u05d1\u05d9\u05df \u05d0\u05d6\u05d5\u05e8\u05d9\u05dd \u05d1\u05db\u05dc \u05e2\u05de\u05d5\u05d3 (\u05e0\u05d9\u05ea\u05df \u05dc\u05d4\u05e9\u05ea\u05de\u05e9 \u05d2\u05dd \u05d1\u05e7\u05d9\u05e6\u05d5\u05e8\u05d9 \u05d4\u05de\u05e7\u05e9\u05d9\u05dd <span dir="rtl">ALT \u05d5- V</span>, ALT \u05d5- B)</li><li>\u05dc\u05d4\u05d2\u05d3\u05d9\u05dc \u05d5\u05dc\u05d4\u05e7\u05d8\u05d9\u05df \u05d0\u05ea \u05ea\u05e6\u05d5\u05d2\u05ea \u05d4\u05d0\u05ea\u05e8 (\u05d6\u05d5\u05dd)</li><li>\u05dc\u05e9\u05e0\u05d5\u05ea \u05d0\u05ea \u05d2\u05d5\u05e4\u05df \u05d4\u05d0\u05ea\u05e8 \u05dc\u05e7\u05e8\u05d9\u05d0</li><li>\u05dc\u05e2\u05e6\u05d5\u05e8 \u05d4\u05e0\u05e4\u05e9\u05d5\u05ea (\u05d0\u05e0\u05d9\u05de\u05e6\u05d9\u05d5\u05ea) \u05d1\u05d0\u05ea\u05e8</li><li>\u05dc\u05d4\u05d0\u05d6\u05d9\u05df \u05dc\u05d8\u05e7\u05e1\u05d8 \u05d7\u05dc\u05d5\u05e4\u05d9 \u05e2\u05d1\u05d5\u05e8 \u05ea\u05de\u05d5\u05e0\u05d5\u05ea \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05ea\u05d5\u05db\u05e0\u05ea \u05d4\u05e7\u05e8\u05d0\u05d4</li><li>\u05dc\u05d4\u05d0\u05d6\u05d9\u05df \u05dc\u05de\u05e1\u05e4\u05e8\u05d9 \u05d8\u05dc\u05e4\u05d5\u05df \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05d4\u05e7\u05e8\u05d0\u05d4 \u05e7\u05d5\u05dc\u05d9\u05ea</li><li>\u05dc\u05e9\u05e0\u05d5\u05ea \u05d0\u05ea \u05e1\u05de\u05df \u05d4\u05e2\u05db\u05d1\u05e8</li><li>\u05dc\u05e0\u05d5\u05d5\u05d8 \u05d1\u05d9\u05df \u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea \u05d4\u05ea\u05d5\u05e1\u05e3 \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05d4\u05de\u05e7\u05e9 Tab (\u05d5\u05d2\u05dd Shift+Tab) \u05d5\u05d4\u05e4\u05e2\u05dc\u05ea\u05df \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05d4\u05de\u05e7\u05e9 Enter</li></ul>\u05dc\u05de\u05e8\u05d5\u05ea \u05d4\u05de\u05d0\u05de\u05e6\u05d9\u05dd \u05e9\u05d4\u05d5\u05e9\u05e7\u05e2\u05d5 \u05d1\u05e4\u05d9\u05ea\u05d5\u05d7 \u05ea\u05d5\u05e1\u05e3 \u05d6\u05d4, \u05d9\u05d9\u05ea\u05db\u05e0\u05d5 \u05de\u05e6\u05d1\u05d9\u05dd \u05e9\u05d1\u05d4\u05dd \u05dc\u05d0 \u05ea\u05d4\u05d9\u05d4 \u05dc\u05d5 \u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05dc\u05d4\u05e0\u05d2\u05d9\u05e9 \u05d7\u05dc\u05e7 \u05de\u05ea\u05db\u05e0\u05d9 \u05d4\u05d0\u05ea\u05e8, \u05db\u05d2\u05d5\u05df \u05ea\u05db\u05e0\u05d9\u05dd \u05d4\u05de\u05d5\u05e6\u05e2\u05d9\u05dd \u05d3\u05e8\u05da \u05d2\u05d5\u05e8\u05de\u05d9 \u05e6\u05d3 \u05e9\u05dc\u05d9\u05e9\u05d9 (\u05db\u05d3\u05d5\u05d2\u05de\u05ea YouTube, \u05ea\u05db\u05e0\u05d9\u05dd \u05de\u05d5\u05d8\u05de\u05e2\u05d9\u05dd \u05de\u05d0\u05ea\u05e8\u05d9\u05dd \u05d0\u05d7\u05e8\u05d9\u05dd \u05d5\u05db\u05d3\u05d5\u05de\u05d4). \u05d7\u05e9\u05d5\u05d1 \u05dc\u05e6\u05d9\u05d9\u05df \u05e9\u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9 \u05e0\u05de\u05e6\u05d0 \u05d1\u05e4\u05d9\u05ea\u05d5\u05d7 \u05de\u05ea\u05de\u05d9\u05d3 \u05e2\u05dc \u05de\u05e0\u05ea \u05dc\u05d4\u05e9\u05ea\u05e4\u05e8 \u05d5\u05dc\u05e2\u05de\u05d5\u05d3 \u05d1\u05ea\u05e7\u05e0\u05d9 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05d4\u05e2\u05d3\u05db\u05e0\u05d9\u05d9\u05dd \u05d1\u05d9\u05d5\u05ea\u05e8.<br /><br />',
          align_left: 'left',
          align_right: 'right',
          and: '\u05d5',
          animations: '\u05d4\u05e0\u05e4\u05e9\u05d5\u05ea \u05d1\u05d3\u05e3',
          animations_exp:
            '\u05d4\u05e4\u05e1\u05e7\u05ea \u05ea\u05d6\u05d5\u05d6\u05d5\u05ea \u05d5\u05d4\u05d1\u05d4\u05d5\u05d1\u05d9\u05dd \u05d1\u05d3\u05e3',
          animations_on: '\u05e4\u05e2\u05d9\u05dc\u05d5\u05ea',
          animations_off: '\u05de\u05d5\u05e4\u05e1\u05e7\u05d5\u05ea',
          aria_close_modal:
            '\u05dc\u05e1\u05d2\u05d5\u05e8 \u05d0\u05ea \u05d4\u05de\u05d9\u05d3\u05e2 \u05d4\u05de\u05d5\u05e6\u05d2',
          aria_select_bgcolor:
            '\u05d1\u05d7\u05d9\u05e8\u05ea \u05e6\u05d1\u05e2 \u05e8\u05e7\u05e2',
          aria_select_color: '\u05d1\u05d7\u05d9\u05e8\u05ea \u05e6\u05d1\u05e2 ',
          aria_select_txtcolor:
            '\u05d1\u05d7\u05d9\u05e8\u05ea \u05e6\u05d1\u05e2 \u05d8\u05e7\u05e1\u05d8',
          aria_the_option: '\u05d4\u05d0\u05e4\u05e9\u05e8\u05d5\u05ea ',
          aria_toggle_open_alt:
            '\u05dc\u05e4\u05ea\u05d5\u05d7 \u05d0\u05ea \u05d4\u05ea\u05e4\u05e8\u05d9\u05d8 ',
          aria_toggle_close_alt:
            '\u05dc\u05e1\u05d2\u05d5\u05e8 \u05d0\u05ea \u05d4\u05ea\u05e4\u05e8\u05d9\u05d8 ',
          bg: '\u05e8\u05e7\u05e2',
          bl_filter:
            '\u05de\u05e1\u05e0\u05df \u05d0\u05d5\u05e8 \u05db\u05d7\u05d5\u05dc',
          bl_filter_exp: '\u05e6\u05d1\u05e2\u05d9\u05dd \u05d7\u05de\u05d9\u05dd',
          blind: '\u05e2\u05d9\u05d5\u05d5\u05e8\u05d9 \u05e6\u05d1\u05e2\u05d9\u05dd',
          blind_exp:
            '\u05d2\u05d5\u05d5\u05e0\u05d9 \u05e9\u05d7\u05d5\u05e8 \u05dc\u05d1\u05df',
          body_missing:
            '\u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9 \u05d0\u05d5\u05de\u05e8: \u05ea\u05d2 \u05d4-<body> \u05d7\u05e1\u05e8! \u05ea\u05d5\u05e1\u05e3 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05dc\u05d0 \u05d9\u05db\u05d5\u05dc \u05dc\u05e2\u05d1\u05d5\u05d3 \u05d1\u05dc\u05e2\u05d3\u05d9\u05d5.',
          branding: '\u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9',
          branding_exp:
            '\u05ea\u05d5\u05e1\u05e3 \u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05d1\u05d7\u05d9\u05e0\u05dd',
          chrome: '\u05db\u05e8\u05d5\u05dd',
          clr_black: '\u05e9\u05d7\u05d5\u05e8',
          clr_blue: '\u05db\u05d7\u05d5\u05dc',
          clr_custom: '\u05d1\u05d7\u05d9\u05e8\u05d4 \u05d0\u05d9\u05e9\u05d9\u05ea',
          clr_gray: '\u05d0\u05e4\u05d5\u05e8',
          clr_green: '\u05d9\u05e8\u05d5\u05e7',
          clr_orange: '\u05db\u05ea\u05d5\u05dd',
          clr_pink: '\u05d5\u05e8\u05d5\u05d3',
          clr_purple: '\u05e1\u05d2\u05d5\u05dc',
          clr_red: '\u05d0\u05d3\u05d5\u05dd',
          clr_white: '\u05dc\u05d1\u05df',
          clr_yellow: '\u05e6\u05d4\u05d5\u05d1',
          collapse_all:
            '\u05dc\u05e1\u05d2\u05d5\u05e8 \u05d0\u05ea \u05db\u05dc \u05d4\u05ea\u05e4\u05e8\u05d9\u05d8\u05d9\u05dd',
          color: '\u05e6\u05d1\u05e2',
          colors: '\u05e6\u05d1\u05e2\u05d9\u05dd',
          cursor: '\u05e1\u05de\u05df \u05e2\u05db\u05d1\u05e8',
          cursor_exp:
            '\u05e9\u05d9\u05e0\u05d5\u05d9 \u05e1\u05de\u05df \u05d4\u05e2\u05db\u05d1\u05e8 \u05dc\u05d4\u05ea\u05d0\u05de\u05d4 \u05e2\u05d1\u05d5\u05e8 \u05e6\u05d1\u05e2\u05d9 \u05e8\u05e7\u05e2 \u05e9\u05d5\u05e0\u05d9\u05dd',
          cursor_black: '\u05e9\u05d7\u05d5\u05e8',
          cursor_white: '\u05dc\u05d1\u05df',
          custom_colors: '\u05d4\u05ea\u05d0\u05de\u05d4 \u05d0\u05d9\u05e9\u05d9\u05ea',
          custom_colors_close:
            '\u05dc\u05e1\u05d2\u05d5\u05e8 \u05d0\u05ea \u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea \u05e6\u05d1\u05e2\u05d9 \u05d4\u05d4\u05ea\u05d0\u05de\u05d4 \u05d4\u05d0\u05d9\u05e9\u05d9\u05ea',
          custom_colors_exp:
            '\u05e9\u05d9\u05e0\u05d5\u05d9 \u05e6\u05d1\u05e2\u05d9 \u05d4\u05e8\u05e7\u05e2 \u05d5\u05d4\u05d8\u05e7\u05e1\u05d8',
          developed_by: '\u05e4\u05d5\u05ea\u05d7 \u05e2\u05dc \u05d9\u05d3\u05d9',
          developed_in: '\u05e4\u05d5\u05ea\u05d7 \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc',
          developed_in_link:
            'https://he.wikipedia.org/wiki/\u05d9\u05e9\u05e8\u05d0\u05dc',
          developer: '\u05dc\u05d5\u05e7\u05dc\u05d9\u05d9\u05d6',
          developer_exp:
            '\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9 \u05d1\u05e0\u05d9\u05d9\u05ea \u05d0\u05ea\u05e8\u05d9\u05dd',
          developer_message:
            '\u05db\u05de\u05d4 \u05de\u05d9\u05dc\u05d9\u05dd \u05de\u05d4\u05de\u05e4\u05ea\u05d7 \u05d4\u05e2\u05d9\u05e7\u05e8\u05d9 \u05e9\u05dc \u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9: "\u05d0\u05e0\u05d9 \u05e2\u05d3\u05d9\u05d9\u05df \u05d1\u05d5\u05d3\u05e7 \u05d5\u05dc\u05d5\u05de\u05d3 \u05d0\u05ea \u05e0\u05d5\u05e9\u05d0 \u05d4\u05e0\u05d2\u05e9\u05ea \u05d4\u05d0\u05ea\u05e8\u05d9\u05dd \u05db\u05e9\u05d0\u05e0\u05d9 \u05d9\u05db\u05d5\u05dc, \u05d5\u05de\u05e2\u05d5\u05e0\u05d9\u05d9\u05df \u05dc\u05e4\u05ea\u05d7 \u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea \u05e0\u05d5\u05e1\u05e4\u05d5\u05ea \u05e2\u05d1\u05d5\u05e8 \u05d4\u05ea\u05d5\u05e1\u05e3 \u05d4\u05d7\u05d9\u05e0\u05de\u05d9 \u05d4\u05d6\u05d4 (\u05d9\u05e9 \u05db\u05d1\u05e8 \u05e8\u05e9\u05d9\u05de\u05ea \u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea \u05dc\u05d2\u05d9\u05e8\u05e1\u05d0\u05d5\u05ea \u05d4\u05d1\u05d0\u05d5\u05ea), \u05d0\u05d1\u05dc \u05d0\u05e0\u05d9 \u05d0\u05d3\u05dd \u05e2\u05d5\u05d1\u05d3 \u05e9\u05dc\u05d0 \u05ea\u05de\u05d9\u05d3 \u05d9\u05db\u05d5\u05dc \u05dc\u05de\u05e6\u05d5\u05d0 \u05d0\u05ea \u05d4\u05d6\u05de\u05df \u05dc\u05d4\u05de\u05e9\u05d9\u05da \u05d5\u05dc\u05e4\u05ea\u05d7 \u05d0\u05ea \u05d4\u05ea\u05d5\u05e1\u05e3 \u05de\u05e2\u05d1\u05e8 \u05dc\u05d6\u05de\u05e0\u05d9 \u05d4\u05e4\u05e0\u05d5\u05d9. \u05d0\u05e0\u05d9 \u05de\u05e9\u05ea\u05d3\u05dc \u05dc\u05d4\u05e9\u05e7\u05d9\u05e2 \u05d1\u05d5 \u05db\u05d3\u05d9 \u05e9\u05d9\u05d5\u05db\u05dc \u05dc\u05d4\u05d5\u05e2\u05d9\u05dc \u05dc\u05db\u05de\u05d4 \u05e9\u05d9\u05d5\u05ea\u05e8 \u05de\u05e9\u05ea\u05de\u05e9\u05d9\u05dd \u05d5\u05d1\u05e2\u05dc\u05d9 \u05d0\u05ea\u05e8\u05d9\u05dd. \u05d0\u05dd \u05d4\u05d7\u05dc\u05d8\u05ea\u05dd \u05dc\u05d4\u05e9\u05ea\u05de\u05e9 \u05d1\u05ea\u05d5\u05e1\u05e3, \u05d5\u05d0\u05d4\u05d1\u05ea\u05dd \u05d0\u05d5\u05ea\u05d5 - \u05d0\u05ea\u05dd \u05de\u05d5\u05d6\u05de\u05e0\u05d9\u05dd \u05dc\u05ea\u05e8\u05d5\u05dd \u05e2\u05d1\u05d5\u05e8 \u05d4\u05ea\u05e7\u05d3\u05de\u05d5\u05ea \u05d4\u05e4\u05d9\u05ea\u05d5\u05d7 \u05e9\u05dc\u05d5. \u05db\u05dc \u05e1\u05db\u05d5\u05dd \u05d9\u05ea\u05e7\u05d1\u05dc \u05d1\u05d1\u05e8\u05db\u05d4. \u05d0\u05dd \u05d4\u05d7\u05dc\u05d8\u05ea\u05dd \u05dc\u05d0 \u05dc\u05ea\u05e8\u05d5\u05dd \u05d0\u05d5 \u05e9\u05d0\u05d9\u05df \u05d1\u05d0\u05e4\u05e9\u05e8\u05d5\u05ea\u05db\u05dd \u05dc\u05ea\u05e8\u05d5\u05dd, \u05d0\u05e0\u05d9 \u05de\u05e7\u05d5\u05d5\u05d4 \u05e9\u05d4\u05ea\u05d5\u05e1\u05e3 \u05d1\u05db\u05dc \u05d6\u05d0\u05ea \u05d9\u05d5\u05e2\u05d9\u05dc \u05dc\u05db\u05dd \u05d5\u05d9\u05e1\u05d9\u05d9\u05e2 \u05dc\u05d2\u05d5\u05dc\u05e9\u05d9\u05dd \u05d1\u05d0\u05ea\u05e8 \u05e9\u05dc\u05db\u05dd."',
          dir: 'rtl',
          display: '\u05ea\u05e6\u05d5\u05d2\u05d4',
          edge: "\u05d0\u05d3\u05d2'",
          expand_all:
            '\u05dc\u05e4\u05ea\u05d5\u05d7 \u05d0\u05ea \u05db\u05dc \u05d4\u05ea\u05e4\u05e8\u05d9\u05d8\u05d9\u05dd',
          experimental_feat:
            '\u05d6\u05d5\u05d4\u05d9 \u05ea\u05db\u05d5\u05e0\u05d4 \u05e0\u05d9\u05e1\u05d9\u05d5\u05e0\u05d9\u05ea',
          explorer:
            '\u05d0\u05d9\u05e0\u05d8\u05e8\u05e0\u05d8 \u05d0\u05e7\u05e1\u05e4\u05dc\u05d5\u05e8\u05e8',
          firefox: '\u05e4\u05d9\u05d9\u05e8\u05e4\u05d5\u05e7\u05e1',
          font: '\u05d2\u05d5\u05e4\u05df',
          font_exp:
            '\u05e9\u05d9\u05e0\u05d5\u05d9 \u05d4\u05d2\u05d5\u05e4\u05df \u05e9\u05dc \u05d4\u05d3\u05e3',
          font_readable: '\u05e7\u05e8\u05d9\u05d0',
          help: '\u05e2\u05d6\u05e8\u05d4',
          help_exp:
            '\u05dc\u05d7\u05e6\u05d5 \u05db\u05d0\u05df \u05dc\u05d4\u05e6\u05d2\u05ea \u05e2\u05d6\u05e8\u05d4 \u05d1\u05ea\u05d5\u05e1\u05e3 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea',
          highlight: '\u05d4\u05d3\u05d2\u05e9\u05d4',
          hl_headings:
            '\u05e1\u05d9\u05de\u05d5\u05df \u05db\u05d5\u05ea\u05e8\u05d5\u05ea',
          hl_headings_exp:
            '\u05e1\u05d9\u05de\u05d5\u05df \u05db\u05dc \u05d4\u05db\u05d5\u05ea\u05e8\u05d5\u05ea \u05d1\u05d3\u05e3',
          hl_links:
            '\u05e1\u05d9\u05de\u05d5\u05df \u05e7\u05d9\u05e9\u05d5\u05e8\u05d9\u05dd',
          hl_links_exp:
            '\u05e1\u05d9\u05de\u05d5\u05df \u05db\u05dc \u05d4\u05e7\u05d9\u05e9\u05d5\u05e8\u05d9\u05dd \u05d1\u05d3\u05e3',
          how_accessible:
            '\u05db\u05d9\u05e6\u05d3 \u05d4\u05d5\u05e0\u05d2\u05e9 \u05d0\u05ea\u05e8 \u05d6\u05d4',
          how_accessible_exp:
            '\u05d0\u05d5\u05d3\u05d5\u05ea \u05ea\u05d5\u05e1\u05e3 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea',
          images_only: '\u05ea\u05de\u05d5\u05e0\u05d5\u05ea \u05d1\u05dc\u05d1\u05d3',
          images_only_exp:
            '\u05d4\u05e1\u05ea\u05e8\u05ea \u05d4\u05d8\u05e7\u05e1\u05d8 \u05d1\u05d3\u05e3',
          img_alt_missing:
            '\u05ea\u05de\u05d5\u05e0\u05d4 \u05dc\u05dc\u05d0 \u05ea\u05d9\u05d0\u05d5\u05e8',
          img_alt:
            '\u05ea\u05d9\u05d0\u05d5\u05e8 \u05d0\u05e4\u05e9\u05e8\u05d9 \u05e9\u05dc \u05ea\u05de\u05d5\u05e0\u05d4: ',
          impaired: '\u05db\u05d1\u05d3\u05d9 \u05e8\u05d0\u05d9\u05d9\u05d4',
          impaired_exp:
            '\u05e0\u05d9\u05d2\u05d5\u05d3\u05d9\u05d5\u05ea \u05de\u05e7\u05e1\u05d9\u05de\u05dc\u05d9\u05ea',
          jq_too_low:
            '%c\u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9%c \u05d0\u05d5\u05de\u05e8: \u05d2\u05d9\u05e8\u05e1\u05ea jQuery \u05d1\u05d0\u05ea\u05e8 \u05d6\u05d4 \u05e0\u05de\u05d5\u05db\u05d4 \u05de\u05d3\u05d9. \u05d9\u05d9\u05ea\u05db\u05df \u05e9\u05d7\u05dc\u05e7 \u05de\u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea \u05ea\u05d5\u05e1\u05e3 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05dc\u05d0 \u05d9\u05e2\u05d1\u05d3\u05d5 (\u05d0\u05d5 \u05db\u05d5\u05dc\u05df).',
          jq_not_found_msg:
            '%c\u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9%c \u05d0\u05d5\u05de\u05e8: \u05e0\u05e8\u05d0\u05d4 \u05e9-jQuery \u05dc\u05d0 \u05e0\u05de\u05e6\u05d0\u05d4 \u05d1\u05d3\u05e3 \u05d6\u05d4. \u05d4\u05ea\u05d5\u05e1\u05e3 \u05dc\u05d0 \u05d9\u05db\u05d5\u05dc \u05dc\u05e4\u05e2\u05d5\u05dc \u05d1\u05dc\u05e2\u05d3\u05d9\u05d4, \u05d5\u05d4\u05d8\u05de\u05d9\u05e2 \u05d1\u05d3\u05e3 \u05d0\u05ea \u05d4\u05d2\u05d9\u05e8\u05e1\u05d4 \u05d4\u05de\u05d9\u05e0\u05d9\u05de\u05dc\u05d9\u05ea \u05d4\u05d3\u05e8\u05d5\u05e9\u05d4 \u05e2\u05d1\u05d5\u05e8\u05d5 \u05d1\u05d0\u05d5\u05e4\u05df \u05d0\u05d5\u05d8\u05d5\u05de\u05d8\u05d9.',
          kbnav: '\u05e0\u05d9\u05d5\u05d5\u05d8 \u05de\u05e7\u05dc\u05d3\u05ea',
          kbnav_exp:
            '\u05e0\u05d9\u05d5\u05d5\u05d8 \u05d1\u05d0\u05ea\u05e8 \u05d1\u05d0\u05de\u05e6\u05e2\u05d5\u05ea \u05de\u05e7\u05e9\u05d9 \u05d4\u05de\u05e7\u05dc\u05d3\u05ea',
          kbnav_off: '\u05db\u05d1\u05d5\u05d9',
          kbnav_on: '\u05e4\u05e2\u05d9\u05dc',
          kbshortcuts:
            '\u05e7\u05d9\u05e6\u05d5\u05e8\u05d9 \u05de\u05e7\u05e9\u05d9\u05dd',
          kbshortcuts_exp:
            '\u05e7\u05d9\u05e6\u05d5\u05e8\u05d9 \u05de\u05e7\u05e9\u05d9\u05dd \u05d5\u05d4\u05d5\u05e8\u05d0\u05d5\u05ea \u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05ea\u05d5\u05e1\u05e3 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea',
          kbshortcuts_text:
            "\u05dc\u05e0\u05d5\u05d7\u05d9\u05d5\u05ea\u05db\u05dd, \u05d1\u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9 \u05d9\u05e9 \u05de\u05e1\u05e4\u05e8 \u05e7\u05d9\u05e6\u05d5\u05e8\u05d9 \u05de\u05e7\u05e9\u05d9\u05dd \u05d1\u05de\u05e7\u05dc\u05d3\u05ea \u05e9\u05d1\u05d4\u05dd \u05ea\u05d5\u05db\u05dc\u05d5 \u05dc\u05d4\u05d9\u05e2\u05d6\u05e8 \u05db\u05d3\u05d9 \u05dc\u05d4\u05e9\u05ea\u05de\u05e9 \u05d1\u05d7\u05dc\u05e7 \u05de\u05d4\u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea \u05d4\u05de\u05d5\u05e6\u05e2\u05d5\u05ea \u05d1\u05d5.<br /><br /><kbd>ALT \u05d5- Z</kbd> - \u05dc\u05e4\u05ea\u05d5\u05d7 \u05d5\u05dc\u05e6\u05de\u05e6\u05dd \u05d0\u05ea \u05ea\u05d5\u05e1\u05e3 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea.<br /><br /><kbd>ALT \u05d5- X</kbd> - \u05dc\u05d4\u05e6\u05d9\u05d2 \u05e2\u05d6\u05e8\u05d4 \u05d1\u05ea\u05d5\u05e1\u05e3 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea. \u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05e7\u05d9\u05e6\u05d5\u05e8 \u05d6\u05d4 \u05d9\u05d1\u05d8\u05dc \u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05d6\u05d5.<br /><br /><kbd>ALT \u05d5- C</kbd> - \u05dc\u05d0\u05e4\u05e1 \u05d0\u05ea \u05d4\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea \u05e9\u05dc \u05ea\u05d5\u05e1\u05e3 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea.<br /><br /><kbd>ALT \u05d5- V</kbd> - \u05e0\u05d9\u05d5\u05d5\u05d8 \u05de\u05d4\u05d9\u05e8 \u05d0\u05dc \u05e8\u05d0\u05e9 \u05d4\u05d3\u05e3.<br /><br /><kbd>ALT \u05d5- B</kbd> - \u05e0\u05d9\u05d5\u05d5\u05d8 \u05de\u05d4\u05d9\u05e8 \u05d0\u05dc \u05ea\u05d7\u05ea\u05d9\u05ea \u05d4\u05d3\u05e3.<br /><br /><kbd>SHIFT \u05d5- A</kbd> - \u05dc\u05d4\u05d2\u05d3\u05d9\u05dc \u05d0\u05ea \u05d4\u05d8\u05e7\u05e1\u05d8 \u05d1\u05d3\u05e3.<br /><br /><kbd>SHIFT \u05d5- S</kbd> - \u05dc\u05d4\u05e7\u05d8\u05d9\u05df \u05d0\u05ea \u05d4\u05d8\u05e7\u05e1\u05d8 \u05d1\u05d3\u05e3.<br /><br /><kbd>SHIFT \u05d5- D</kbd> - \u05e1\u05d9\u05de\u05d5\u05df \u05d4\u05e7\u05d9\u05e9\u05d5\u05e8\u05d9\u05dd \u05d1\u05d3\u05e3. \u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05e7\u05d9\u05e6\u05d5\u05e8 \u05d6\u05d4 \u05e4\u05e2\u05dd \u05e0\u05d5\u05e1\u05e4\u05ea \u05d9\u05d1\u05d8\u05dc \u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05d6\u05d5.<br /><br /><kbd>SHIFT \u05d5- F</kbd> - \u05e1\u05d9\u05de\u05d5\u05df \u05d4\u05db\u05d5\u05ea\u05e8\u05d5\u05ea \u05d1\u05d3\u05e3. \u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05e7\u05d9\u05e6\u05d5\u05e8 \u05d6\u05d4 \u05e4\u05e2\u05dd \u05e0\u05d5\u05e1\u05e4\u05ea \u05d9\u05d1\u05d8\u05dc \u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05d6\u05d5.<br /><br /><kbd>SHIFT \u05d5- Q</kbd> - \u05dc\u05d4\u05e4\u05e2\u05d9\u05dc \u05d0\u05ea \u05d4\u05d0\u05e4\u05e9\u05e8\u05d5\u05ea '\u05e2\u05d9\u05d5\u05d5\u05e8\u05d9 \u05e6\u05d1\u05e2\u05d9\u05dd' (\u05d2\u05d5\u05d5\u05e0\u05d9 \u05e9\u05d7\u05d5\u05e8 \u05dc\u05d1\u05df). \u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05e7\u05d9\u05e6\u05d5\u05e8 \u05d6\u05d4 \u05e4\u05e2\u05dd \u05e0\u05d5\u05e1\u05e4\u05ea \u05d9\u05d1\u05d8\u05dc \u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05d6\u05d5.<br /><br /><kbd>SHIFT \u05d5- W</kbd> - \u05dc\u05d4\u05e4\u05e2\u05d9\u05dc \u05d0\u05ea \u05d4\u05d0\u05e4\u05e9\u05e8\u05d5\u05ea '\u05db\u05d1\u05d3\u05d9 \u05e8\u05d0\u05d9\u05d9\u05d4' (\u05e0\u05d9\u05d2\u05d5\u05d3\u05d9\u05d5\u05ea \u05d2\u05d1\u05d5\u05d4\u05d4). \u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05e7\u05d9\u05e6\u05d5\u05e8 \u05d6\u05d4 \u05e4\u05e2\u05dd \u05e0\u05d5\u05e1\u05e4\u05ea \u05d9\u05d1\u05d8\u05dc \u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05d6\u05d5.<br /><br /><kbd>SHIFT \u05d5- E</kbd> - \u05dc\u05d4\u05e4\u05e2\u05d9\u05dc \u05d0\u05ea \u05d4\u05d0\u05e4\u05e9\u05e8\u05d5\u05ea '\u05e6\u05d1\u05e2\u05d9\u05dd \u05d1\u05d4\u05d9\u05e8\u05d9\u05dd' (\u05d4\u05d1\u05d4\u05e8\u05ea \u05e6\u05d1\u05e2\u05d9\u05dd). \u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05e7\u05d9\u05e6\u05d5\u05e8 \u05d6\u05d4 \u05e4\u05e2\u05dd \u05e0\u05d5\u05e1\u05e4\u05ea \u05d9\u05d1\u05d8\u05dc \u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05d6\u05d5.<br /><br />",
          larger_text: '\u05d2\u05d3\u05d5\u05dc \u05d9\u05d5\u05ea\u05e8',
          larger_text_exp:
            '\u05d4\u05d2\u05d3\u05dc\u05ea \u05d4\u05d8\u05e7\u05e1\u05d8 \u05d1\u05db\u05dc \u05dc\u05d7\u05d9\u05e6\u05d4',
          lc_filter:
            '\u05de\u05e1\u05e0\u05df \u05e6\u05d1\u05e2\u05d9\u05dd \u05d7\u05d9\u05d9\u05dd',
          lc_filter_exp: '\u05e6\u05d1\u05e2\u05d9\u05dd \u05e7\u05e8\u05d9\u05dd',
          lic_warn:
            '\u05d0\u05ea\u05e8 \u05d6\u05d4 \u05de\u05e9\u05ea\u05de\u05e9 \u05d1\u05e2\u05d5\u05ea\u05e7 \u05dc\u05d0 \u05d7\u05d5\u05e7\u05d9 \u05e9\u05dc \u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9. \u05de\u05d0\u05de\u05e5 \u05d5\u05d6\u05de\u05df \u05e8\u05d1\u05d9\u05dd \u05d4\u05d5\u05e9\u05e7\u05e2\u05d5 \u05d1\u05e4\u05d9\u05ea\u05d5\u05d7 \u05d4\u05ea\u05d5\u05e1\u05e3, \u05d0\u05e0\u05d0 <a href="https://www.nagish.li/he/contact.html" target="_blank" style="color: black !important; text-decoration: underline !important;" tabindex="1">\u05dc\u05d7\u05e6\u05d5 \u05db\u05d0\u05df</a> \u05db\u05d3\u05d9 \u05dc\u05d3\u05d5\u05d5\u05d7 \u05e2\u05dc \u05d0\u05ea\u05e8 \u05d6\u05d4 \u05d1\u05d0\u05d5\u05e4\u05df \u05d0\u05e0\u05d5\u05e0\u05d9\u05de\u05d9. \u05ea\u05d5\u05d3\u05d4!',
          logo_alt: '\u05dc\u05d5\u05d2\u05d5',
          misc: '\u05e9\u05d5\u05e0\u05d5\u05ea',
          missing_setting:
            '%c\u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9%c \u05d0\u05d5\u05de\u05e8: %c\u05d4\u05d4\u05d2\u05d3\u05e8\u05d4 \u05d7\u05e1\u05e8\u05d4.%c',
          move_bl:
            '\u05dc\u05d4\u05d6\u05d9\u05d6 \u05e9\u05de\u05d0\u05dc\u05d4 \u05d5\u05dc\u05de\u05d8\u05d4',
          move_br:
            '\u05dc\u05d4\u05d6\u05d9\u05d6 \u05d9\u05de\u05d9\u05e0\u05d4 \u05d5\u05dc\u05de\u05d8\u05d4',
          move_tl:
            '\u05dc\u05d4\u05d6\u05d9\u05d6 \u05e9\u05de\u05d0\u05dc\u05d4 \u05d5\u05dc\u05de\u05e2\u05dc\u05d4',
          move_tr:
            '\u05dc\u05d4\u05d6\u05d9\u05d6 \u05d9\u05de\u05d9\u05e0\u05d4 \u05d5\u05dc\u05de\u05e2\u05dc\u05d4',
          normal: '\u05e8\u05d2\u05d9\u05dc',
          normal_display: '\u05e8\u05d2\u05d9\u05dc\u05d4',
          normal_plu: '\u05e8\u05d2\u05d9\u05dc\u05d9\u05dd',
          not_supported:
            '\u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05d6\u05d5 \u05d0\u05d9\u05e0\u05d4 \u05e0\u05ea\u05de\u05db\u05ea \u05e2\u05dc \u05d9\u05d3\u05d9 \u05d4\u05d3\u05e4\u05d3\u05e4\u05df \u05e9\u05dc\u05da.',
          opera: '\u05d0\u05d5\u05e4\u05e8\u05d4',
          r2m: '\u05d4\u05e7\u05e8\u05d0\u05d4 \u05e7\u05d5\u05dc\u05d9\u05ea',
          r2m_exp: '\u05d4\u05e7\u05e8\u05d0\u05ea \u05e1\u05e4\u05e8\u05d5\u05ea',
          r2m_na:
            '\u05d4\u05e7\u05e8\u05d0\u05d4 \u05e7\u05d5\u05dc\u05d9\u05ea \u05d0\u05d9\u05e0\u05d4 \u05d6\u05de\u05d9\u05e0\u05d4 \u05db\u05e8\u05d2\u05e2. \u05e0\u05e1\u05d5 \u05e9\u05d5\u05d1 \u05de\u05d0\u05d5\u05d7\u05e8 \u05d9\u05d5\u05ea\u05e8.',
          r2m_off: '\u05db\u05d1\u05d5\u05d9\u05d4',
          r2m_on: '\u05e4\u05e2\u05d9\u05dc\u05d4',
          reset_prompt:
            '\u05dc\u05d0\u05e4\u05e1 \u05d0\u05ea \u05d4\u05d2\u05d3\u05e8\u05d5\u05ea \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea?',
          reset_settings:
            '\u05d0\u05d9\u05e4\u05d5\u05e1 \u05d4\u05d2\u05d3\u05e8\u05d5\u05ea',
          reset_settings_exp:
            '\u05d0\u05d9\u05e4\u05d5\u05e1 \u05db\u05dc \u05d4\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea \u05e9\u05dc \u05ea\u05d5\u05e1\u05e3 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea',
          saturated:
            '\u05e6\u05d1\u05e2\u05d9\u05dd \u05d1\u05d4\u05d9\u05e8\u05d9\u05dd',
          saturated_exp:
            '\u05d4\u05d1\u05d4\u05e8\u05ea \u05d4\u05e6\u05d1\u05e2\u05d9\u05dd \u05d1\u05d3\u05e3',
          settings: '\u05de\u05d9\u05d3\u05e2 \u05d5\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea',
          settings_prompt:
            '\u05e0\u05e8\u05d0\u05d4 \u05e9\u05de\u05d9\u05e9\u05d4\u05d5 \u05d4\u05ea\u05e2\u05e1\u05e7 \u05e2\u05dd \u05d4\u05d2\u05d3\u05e8\u05d5\u05ea \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea. \u05d4\u05d0\u05dd \u05d1\u05e8\u05e6\u05d5\u05e0\u05da \u05dc\u05d0\u05e4\u05e1 \u05d0\u05ea \u05d4\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea? (\u05de\u05d5\u05de\u05dc\u05e5)',
          settings_reset_alert_ok:
            '\u05d4\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea \u05d0\u05d5\u05e4\u05e1\u05d5. \u05e0\u05d0 \u05dc\u05e8\u05e2\u05e0\u05df \u05d0\u05ea \u05d4\u05e2\u05de\u05d5\u05d3.',
          settings_reset_html_ok:
            '\u05d4\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea \u05d0\u05d5\u05e4\u05e1\u05d5. <a href="javascript:void(0);" onclick="javascript:location.replace(window.location.href.split(\'#\')[0]);" style="color: black !important; text-decoration: underline !important; outline: 5px solid rgba(88, 144, 255, 0.75) !important;" tabindex="1">\u05dc\u05e8\u05e2\u05e0\u05df \u05d0\u05ea \u05d4\u05e2\u05de\u05d5\u05d3</a>',
          settings_save:
            '\u05d4\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea \u05d9\u05d9\u05e9\u05de\u05e8\u05d5.',
          settings_save_reminder:
            "\u05d7\u05e9\u05d5\u05d1 \u05dc\u05d6\u05db\u05d5\u05e8: \u05d0\u05e4\u05e9\u05e8 \u05dc\u05d0\u05e4\u05e1 \u05d0\u05d5\u05ea\u05df \u05d2\u05dd \u05d1\u05ea\u05e4\u05e8\u05d9\u05d8 '\u05de\u05d9\u05d3\u05e2 \u05d5\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea'.",
          settings_upgrade_html:
            '\u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9 \u05e9\u05d5\u05d3\u05e8\u05d2. <a href="javascript:void(0);" onclick="javascript:location.replace(window.location.href.split(\'#\')[0]);" style="color: black !important; text-decoration: underline !important;" tabindex="1">\u05dc\u05e8\u05e2\u05e0\u05df \u05d0\u05ea \u05d4\u05e2\u05de\u05d5\u05d3</a>',
          skiplinks: '\u05e0\u05d9\u05d5\u05d5\u05d8 \u05de\u05d4\u05d9\u05e8',
          skiplinks_exp:
            '\u05d2\u05d9\u05e9\u05d4 \u05de\u05d4\u05d9\u05e8\u05d4 \u05dc\u05d0\u05d6\u05d5\u05e8\u05d9\u05dd \u05d1\u05d3\u05e3 \u05d5\u05d1\u05d0\u05ea\u05e8',
          skiplinks_default: '\u05d1\u05d7\u05e8\u05d5 \u05de\u05d9\u05e7\u05d5\u05dd',
          skiplinks_page_nav: '\u05e0\u05d9\u05d5\u05d5\u05d8 \u05d1\u05d3\u05e3',
          skiplinks_site_nav: '\u05e0\u05d9\u05d5\u05d5\u05d8 \u05d1\u05d0\u05ea\u05e8',
          skiplinks_to_top: '\u05e8\u05d0\u05e9 \u05d4\u05d3\u05e3',
          skiplinks_to_menu: '\u05ea\u05e4\u05e8\u05d9\u05d8',
          skiplinks_to_header:
            '\u05db\u05d5\u05ea\u05e8\u05ea \u05e8\u05d0\u05e9\u05d9\u05ea',
          skiplinks_to_paragraph:
            '\u05e4\u05e1\u05e7\u05d4 \u05e8\u05d0\u05e9\u05d5\u05e0\u05d4',
          skiplinks_to_content: '\u05ea\u05d5\u05db\u05df \u05de\u05e8\u05db\u05d6\u05d9',
          skiplinks_to_bottom: '\u05ea\u05d7\u05ea\u05d9\u05ea \u05d4\u05d3\u05e3',
          skiplinks_to_home: '\u05e2\u05de\u05d5\u05d3 \u05e8\u05d0\u05e9\u05d9',
          smaller_text: '\u05e7\u05d8\u05df \u05d9\u05d5\u05ea\u05e8',
          smaller_text_exp:
            '\u05d4\u05e7\u05d8\u05e0\u05ea \u05d4\u05d8\u05e7\u05e1\u05d8 \u05d1\u05db\u05dc \u05dc\u05d7\u05d9\u05e6\u05d4',
          supported_browsers:
            '\u05d3\u05e4\u05d3\u05e4\u05e0\u05d9\u05dd \u05e0\u05ea\u05de\u05db\u05d9\u05dd',
          supported_browsers_exp:
            "\u05d3\u05e4\u05d3\u05e4\u05e0\u05d9\u05dd \u05e0\u05ea\u05de\u05db\u05d9\u05dd: \u05d2\u05d5\u05d2\u05dc \u05db\u05e8\u05d5\u05dd, \u05de\u05d9\u05e7\u05e8\u05d5\u05e1\u05d5\u05e4\u05d8 \u05d0\u05d3\u05d2', \u05de\u05d5\u05d6\u05d9\u05dc\u05d4 \u05e4\u05d9\u05d9\u05e8\u05e4\u05d5\u05e7\u05e1, \u05d0\u05d5\u05e4\u05e8\u05d4 \u05d5\u05d0\u05d9\u05e0\u05d8\u05e8\u05e0\u05d8 \u05d0\u05e7\u05e1\u05e4\u05dc\u05d5\u05e8\u05e8. \u05ea\u05d5\u05e1\u05e3 \u05d4\u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05e2\u05d5\u05e9\u05d4 \u05e9\u05d9\u05de\u05d5\u05e9 \u05d1\u05d0\u05e4\u05e9\u05e8\u05d5\u05d9\u05d5\u05ea \u05de\u05ea\u05e7\u05d3\u05de\u05d5\u05ea \u05d1\u05d3\u05e4\u05d3\u05e4\u05df \u05e9\u05dc\u05db\u05dd. \u05d4\u05e7\u05e4\u05d9\u05d3\u05d5 \u05ea\u05de\u05d9\u05d3 \u05dc\u05d4\u05e9\u05ea\u05de\u05e9 \u05d1\u05d3\u05e4\u05d3\u05e4\u05df \u05e2\u05d3\u05db\u05e0\u05d9.",
          text_only: '\u05d8\u05e7\u05e1\u05d8 \u05d1\u05dc\u05d1\u05d3',
          text_only_exp:
            '\u05d4\u05e1\u05ea\u05e8\u05ea \u05d4\u05ea\u05de\u05d5\u05e0\u05d5\u05ea \u05d1\u05d3\u05e3',
          text_size: '\u05d2\u05d5\u05d3\u05dc \u05d8\u05e7\u05e1\u05d8',
          txt: '\u05d8\u05e7\u05e1\u05d8',
          unsupported_media:
            '\u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05e0\u05d9\u05d2\u05d5\u05df \u05e7\u05d5\u05d1\u05e5 \u05d4\u05e9\u05de\u05e2 \u05d0\u05d5 \u05d4\u05e1\u05e8\u05d8\u05d5\u05df \u05d4\u05d6\u05d4 \u05d0\u05d9\u05e0\u05d4 \u05d6\u05de\u05d9\u05e0\u05d4 \u05d1\u05d3\u05e4\u05d3\u05e4\u05df \u05e9\u05dc\u05da.',
          untitled_page: '\u05d3\u05e3 \u05dc\u05dc\u05d0 \u05db\u05d5\u05ea\u05e8\u05ea',
          zoom: '\u05d6\u05d5\u05dd',
          zoom_exp:
            '\u05d6\u05d5\u05dd \u05e4\u05e0\u05d9\u05de\u05d4 \u05d5\u05d4\u05d7\u05d5\u05e6\u05d4 \u05dc\u05d3\u05e3',
          zoom_in: '\u05d4\u05d2\u05d3\u05dc\u05ea \u05d6\u05d5\u05dd',
          zoom_out: '\u05d4\u05e7\u05d8\u05e0\u05ea \u05d6\u05d5\u05dd',
        };
  positions = {
    TR: 'top: 0vh; right: 0 !important;',
    TL: 'top: 0vh; left: 0 !important;',
    BR: 'bottom: 0vh; right: 0 !important;',
    BL: 'bottom: 0vh; left: 0 !important;',
  };
  commons = {
    currentYear: new Date().getFullYear(),
    bar: 'nagishli#NagishLiTag > #NagishLiBar',
    menus: 'nagishli#NagishLiTag > #NagishLiBar > #NagishLiMenus',
    dd: 'nagishli#NagishLiTag > #NagishLiBar > #NagishLiMenus > .nl-dropdown',
    checkmark:
      '<span class="sign" aria-hidden="true">&#x2714;&#xfe0e;&nbsp;&nbsp;</span>',
    not: '#NagishLiTag *, html, head, title, meta, script, style, br, img',
    help: '&#x2753;&#xfe0e;',
    warning: '&#x26a0;&#xfe0e;',
    sprite: "url('" + q + '/gfx/sprite.png?v=' + M + "') no-repeat ",
  };
  icons = {
    logo:
      commons.sprite + '0 0 !important; width: 21px !important; height: 21px !important',
    TR_pos: q + '/gfx/tr.png',
    BR_pos: q + '/gfx/br.png',
    TL_pos: q + '/gfx/tl.png',
    BL_pos: q + '/gfx/bl.png',
    toggle_all:
      commons.sprite +
      ('en' == g ? '4px' : '0') +
      ' -23px !important; width: 20px !important; height: 20px !important',
    toggle_single:
      commons.sprite +
      '0 -43px !important; width: 16px !important; height: 10px !important',
    chrome:
      commons.sprite +
      '0 -56px !important; width: 14px !important; height: 14px !important',
    edge:
      commons.sprite +
      '0 -75px !important; width: 13px !important; height: 14px !important',
    firefox:
      commons.sprite +
      '0 -94px !important; width: 16px !important; height: 16px !important',
    opera:
      commons.sprite +
      '0 -115px !important; width: 16px !important; height: 16px !important',
    explorer:
      commons.sprite +
      '0 -136px !important; width: 16px !important; height: 16px !important',
    sod:
      commons.sprite +
      '0 -157px !important; width: 22px !important; height: 24px !important',
    black_cursor: q + '/gfx/black_cursor.png',
    black_pointer: q + '/gfx/black_pointer.png',
    white_cursor: q + '/gfx/white_cursor.png',
    white_pointer: q + '/gfx/white_pointer.png',
    r2m: q + '/gfx/colored/' + P + '_r2m.png',
  };
  $NagishLi = jQuery;
  $NagishLi(function (a) {
    function m(b, c) {
      c = void 0 === c ? 'grayscale' : c;
      if (a('body').attr('nl-colors') != c) {
        if (
          ('custom' == a('body').attr('nl-colors') &&
            (a('*')
              .not(commons.not)
              .each(function () {
                for (var b = a(this).length; b--; )
                  a(this)[b].style.setProperty('background-color', '', ''),
                    a(this)[b].style.setProperty('color', '', ''),
                    a(this)[b].style.setProperty('border-color', '', '');
              }),
            a(
              commons.dd +
                ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsBG > #NLCurrentBG, ' +
                commons.dd +
                ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsTXT > #NLCurrentTXT',
            ).css({ 'background-color': 'transparent', display: 'none' }),
            a(commons.dd + ' > #NagishLiColors > li > #NLCustomColors')
              .children('span.sign')
              .remove(),
            a(
              commons.dd +
                ' > #NagishLiColors > li > #NLCustomColors > #NLcolorPanel > li.selected',
            ).removeClass('selected'),
            a(
              commons.dd +
                " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
                phrases.bg +
                "'] > li[aria-label='" +
                phrases.clr_custom +
                "'] > input#NLColorPicker",
            ).attr('value', h(a('body').css('background-color'))),
            a(
              commons.dd +
                " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
                phrases.txt +
                "'] > li[aria-label='" +
                phrases.clr_custom +
                "'] > input#NLColorPicker",
            ).attr('value', h(a('body').css('color'))),
            a(
              commons.dd +
                " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
                phrases.bg +
                "'] > li[aria-label='" +
                phrases.clr_custom +
                "']",
            )
              .attr('aria-label', phrases.aria_select_bgcolor)
              .css('background-color', a('body').css('background-color')),
            a(
              commons.dd +
                " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
                phrases.txt +
                "'] > li[aria-label='" +
                phrases.clr_custom +
                "']",
            )
              .attr('aria-label', phrases.aria_select_txtcolor)
              .css('color', a('body').css('color'))),
          '100%' != a('html').css('height') && a('html').css('height', '100%'),
          a(':root').css({
            filter: 'grayscale(100%)',
            '-webkit-filter': 'grayscale(100%)',
            '-khtml-filter': 'grayscale(100%)',
            '-ms-filter': 'grayscale(100%)',
            '-o-filter': 'grayscale(100%)',
            '-moz-filter': 'grayscale(100%)',
          }),
          a('body').attr('nl-colors', c),
          b)
        )
          return (
            a(commons.dd + ' > #NagishLiColors > li > #NLGrayscaleColors')
              .attr(
                'aria-label',
                phrases.aria_the_option + phrases.blind + ' ' + phrases.r2m_on,
              )
              .prepend(commons.checkmark)
              .parent('li')
              .addClass('active')
              .siblings('li')
              .removeClass('active')
              .find('span.sign')
              .remove(),
            a(commons.dd + ' > #NagishLiColors')
              .prev('div.nl-dropdown-toggle')
              .hasClass('open') ||
              a('<span class="selected">' + phrases.blind + '</span>').insertAfter(
                a(commons.dd + ' > #NagishLiColors')
                  .prev('div', '.nl-dropdown-toggle')
                  .children('.nl-dropdown-title'),
              ),
            !1
          );
      } else
        a('body').removeAttr('nl-colors'),
          a('html').css('height', ''),
          a(':root').css({
            filter: '',
            '-webkit-filter': '',
            '-khtml-filter': '',
            '-ms-filter': '',
            '-o-filter': '',
            '-moz-filter': '',
          }),
          (c = 'normal');
      f('change', 'colors', c);
    }
    function k(b, c) {
      b = void 0 === b ? !1 : b;
      c = void 0 === c ? 'invert' : c;
      if (a('body').attr('nl-colors') != c) {
        if (
          ('custom' == a('body').attr('nl-colors') &&
            (a('*')
              .not(commons.not)
              .each(function () {
                for (var b = a(this).length; b--; )
                  a(this)[b].style.setProperty('background-color', '', ''),
                    a(this)[b].style.setProperty('color', '', ''),
                    a(this)[b].style.setProperty('border-color', '', '');
              }),
            a(
              commons.dd +
                ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsBG > #NLCurrentBG, ' +
                commons.dd +
                ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsTXT > #NLCurrentTXT',
            ).css({ 'background-color': 'transparent', display: 'none' }),
            a(commons.dd + ' > #NagishLiColors > li > #NLCustomColors')
              .children('span.sign')
              .remove(),
            a(
              commons.dd +
                ' > #NagishLiColors > li > #NLCustomColors > #NLcolorPanel > li.selected',
            ).removeClass('selected'),
            a(
              commons.dd +
                " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
                phrases.bg +
                "'] > li[aria-label='" +
                phrases.clr_custom +
                "'] > input#NLColorPicker",
            ).attr('value', h(a('body').css('background-color'))),
            a(
              commons.dd +
                " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
                phrases.txt +
                "'] > li[aria-label='" +
                phrases.clr_custom +
                "'] > input#NLColorPicker",
            ).attr('value', h(a('body').css('color'))),
            a(
              commons.dd +
                " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
                phrases.bg +
                "'] > li[aria-label='" +
                phrases.clr_custom +
                "']",
            )
              .attr('aria-label', phrases.aria_select_bgcolor)
              .css('background-color', a('body').css('background-color')),
            a(
              commons.dd +
                " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
                phrases.txt +
                "'] > li[aria-label='" +
                phrases.clr_custom +
                "']",
            )
              .attr('aria-label', phrases.aria_select_txtcolor)
              .css('color', a('body').css('color'))),
          '100%' != a('html').css('height') && a('html').css('height', '100%'),
          a(':root').css({
            filter: 'invert(100%)',
            '-webkit-filter': 'invert(100%)',
            '-khtml-filter': 'invert(100%)',
            '-ms-filter': 'invert(100%)',
            '-o-filter': 'invert(100%)',
            '-moz-filter': 'invert(100%)',
          }),
          a('body').attr('nl-colors', c),
          b)
        )
          return (
            a(commons.dd + ' > #NagishLiColors > li > #NLInvertColors')
              .attr(
                'aria-label',
                phrases.aria_the_option + phrases.impaired + ' ' + phrases.r2m_on,
              )
              .prepend(commons.checkmark)
              .parent('li')
              .addClass('active')
              .siblings('li')
              .removeClass('active')
              .find('span.sign')
              .remove(),
            a(commons.dd + ' > #NagishLiColors')
              .prev('div.nl-dropdown-toggle')
              .hasClass('open') ||
              a('<span class="selected">' + phrases.impaired + '</span>').insertAfter(
                a(commons.dd + ' > #NagishLiColors')
                  .prev('div', '.nl-dropdown-toggle')
                  .children('.nl-dropdown-title'),
              ),
            !1
          );
      } else
        a('body').removeAttr('nl-colors'),
          a('html').css('height', ''),
          a(':root').css({
            filter: '',
            '-webkit-filter': '',
            '-khtml-filter': '',
            '-ms-filter': '',
            '-o-filter': '',
            '-moz-filter': '',
          }),
          (c = 'normal');
      f('change', 'colors', c);
    }
    function u(b, c) {
      b = void 0 === b ? 'warm' : b;
      c = void 0 === c ? !1 : c;
      if (a('body').attr('nl-colors') != b) {
        'custom' == a('body').attr('nl-colors') &&
          (a('*')
            .not(commons.not)
            .each(function () {
              for (var b = a(this).length; b--; )
                a(this)[b].style.setProperty('background-color', '', ''),
                  a(this)[b].style.setProperty('color', '', ''),
                  a(this)[b].style.setProperty('border-color', '', '');
            }),
          a(
            commons.dd +
              ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsBG > #NLCurrentBG, ' +
              commons.dd +
              ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsTXT > #NLCurrentTXT',
          ).css({ 'background-color': 'transparent', display: 'none' }),
          a(commons.dd + ' > #NagishLiColors > li > #NLCustomColors')
            .children('span.sign')
            .remove(),
          a(
            commons.dd +
              ' > #NagishLiColors > li > #NLCustomColors > #NLcolorPanel > li.selected',
          ).removeClass('selected'),
          a(
            commons.dd +
              " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
              phrases.bg +
              "'] > li[aria-label='" +
              phrases.clr_custom +
              "'] > input#NLColorPicker",
          ).attr('value', h(a('body').css('background-color'))),
          a(
            commons.dd +
              " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
              phrases.txt +
              "'] > li[aria-label='" +
              phrases.clr_custom +
              "'] > input#NLColorPicker",
          ).attr('value', h(a('body').css('color'))),
          a(
            commons.dd +
              " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
              phrases.bg +
              "'] > li[aria-label='" +
              phrases.clr_custom +
              "']",
          )
            .attr('aria-label', phrases.aria_select_bgcolor)
            .css('background-color', a('body').css('background-color')),
          a(
            commons.dd +
              " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
              phrases.txt +
              "'] > li[aria-label='" +
              phrases.clr_custom +
              "']",
          )
            .attr('aria-label', phrases.aria_select_txtcolor)
            .css('color', a('body').css('color')));
        var d = 'sepia(80%)' + ('cold' == b ? ' hue-rotate(200deg)' : '');
        'normal' != b &&
          '100%' != a('html').css('height') &&
          a('html').css('height', '100%');
        a(':root').css({
          filter: d,
          '-webkit-filter': d,
          '-khtml-filter': d,
          '-ms-filter': d,
          '-o-filter': d,
          '-moz-filter': d,
        });
        a('body').attr('nl-colors', b);
        if (c)
          return (
            'warm' == b
              ? (a(commons.dd + ' > #NagishLiColors > li > #NLWarmColors')
                  .attr(
                    'aria-label',
                    phrases.aria_the_option + phrases.bl_filter + ' ' + phrases.r2m_on,
                  )
                  .prepend(commons.checkmark)
                  .parent('li')
                  .addClass('active')
                  .siblings('li')
                  .removeClass('active')
                  .find('span.sign')
                  .remove(),
                a(commons.dd + ' > #NagishLiColors')
                  .prev('div.nl-dropdown-toggle')
                  .hasClass('open') ||
                  a(
                    '<span class="selected">' + phrases.bl_filter + '</span>',
                  ).insertAfter(
                    a(commons.dd + ' > #NagishLiColors')
                      .prev('div', '.nl-dropdown-toggle')
                      .children('.nl-dropdown-title'),
                  ))
              : (a(commons.dd + ' > #NagishLiColors > li > #NLColdColors')
                  .attr(
                    'aria-label',
                    phrases.aria_the_option + phrases.lc_filter + ' ' + phrases.r2m_on,
                  )
                  .prepend(commons.checkmark)
                  .parent('li')
                  .addClass('active')
                  .siblings('li')
                  .removeClass('active')
                  .find('span.sign')
                  .remove(),
                a(commons.dd + ' > #NagishLiColors')
                  .prev('div.nl-dropdown-toggle')
                  .hasClass('open') ||
                  a(
                    '<span class="selected">' + phrases.lc_filter + '</span>',
                  ).insertAfter(
                    a(commons.dd + ' > #NagishLiColors')
                      .prev('div', '.nl-dropdown-toggle')
                      .children('.nl-dropdown-title'),
                  )),
            !1
          );
      } else
        a('body').removeAttr('nl-colors'),
          a('html').css('height', ''),
          a(':root').css({
            filter: '',
            '-webkit-filter': '',
            '-khtml-filter': '',
            '-ms-filter': '',
            '-o-filter': '',
            '-moz-filter': '',
          }),
          (b = 'normal');
      f('change', 'colors', b);
    }
    function p(b, c) {
      b = void 0 === b ? !1 : b;
      c = void 0 === c ? 'saturate' : c;
      if (a('body').attr('nl-colors') != c) {
        if (
          ('custom' == a('body').attr('nl-colors') &&
            (a('*')
              .not(commons.not)
              .each(function () {
                for (var b = a(this).length; b--; )
                  a(this)[b].style.setProperty('background-color', '', ''),
                    a(this)[b].style.setProperty('color', '', ''),
                    a(this)[b].style.setProperty('border-color', '', '');
              }),
            a(
              commons.dd +
                ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsBG > #NLCurrentBG, ' +
                commons.dd +
                ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsTXT > #NLCurrentTXT',
            ).css({ 'background-color': 'transparent', display: 'none' }),
            a(commons.dd + ' > #NagishLiColors > li > #NLCustomColors')
              .children('span.sign')
              .remove(),
            a(
              commons.dd +
                ' > #NagishLiColors > li > #NLCustomColors > #NLcolorPanel > li.selected',
            ).removeClass('selected'),
            a(
              commons.dd +
                " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
                phrases.bg +
                "'] > li[aria-label='" +
                phrases.clr_custom +
                "'] > input#NLColorPicker",
            ).attr('value', h(a('body').css('background-color'))),
            a(
              commons.dd +
                " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
                phrases.txt +
                "'] > li[aria-label='" +
                phrases.clr_custom +
                "'] > input#NLColorPicker",
            ).attr('value', h(a('body').css('color'))),
            a(
              commons.dd +
                " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
                phrases.bg +
                "'] > li[aria-label='" +
                phrases.clr_custom +
                "']",
            )
              .attr('aria-label', phrases.aria_select_bgcolor)
              .css('background-color', a('body').css('background-color')),
            a(
              commons.dd +
                " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
                phrases.txt +
                "'] > li[aria-label='" +
                phrases.clr_custom +
                "']",
            )
              .attr('aria-label', phrases.aria_select_txtcolor)
              .css('color', a('body').css('color'))),
          '100%' != a('html').css('height') && a('html').css('height', '100%'),
          a(':root').css({
            filter: 'saturate(800%)',
            '-webkit-filter': 'saturate(800%)',
            '-khtml-filter': 'saturate(800%)',
            '-ms-filter': 'saturate(800%)',
            '-o-filter': 'saturate(800%)',
            '-moz-filter': 'saturate(800%)',
          }),
          a('body').attr('nl-colors', c),
          b)
        )
          return (
            a(commons.dd + ' > #NagishLiColors > li > #NLSaturateColors')
              .attr(
                'aria-label',
                phrases.aria_the_option + phrases.saturated + ' ' + phrases.r2m_on,
              )
              .prepend(commons.checkmark)
              .parent('li')
              .addClass('active')
              .siblings('li')
              .removeClass('active')
              .find('span.sign')
              .remove(),
            a(commons.dd + ' > #NagishLiColors')
              .prev('div.nl-dropdown-toggle')
              .hasClass('open') ||
              a('<span class="selected">' + phrases.saturated + '</span>').insertAfter(
                a(commons.dd + ' > #NagishLiColors')
                  .prev('div', '.nl-dropdown-toggle')
                  .children('.nl-dropdown-title'),
              ),
            !1
          );
      } else
        a('body').removeAttr('nl-colors'),
          a('html').css('height', ''),
          a(':root').css({
            filter: '',
            '-webkit-filter': '',
            '-khtml-filter': '',
            '-ms-filter': '',
            '-o-filter': '',
            '-moz-filter': '',
          }),
          (c = 'normal');
      f('change', 'colors', c);
    }
    function v(b, c, d, e, l) {
      b = void 0 === b ? 'bg' : b;
      d = void 0 === d ? !1 : d;
      A &&
        ((l = f('read', 'colors')),
        -1 !== l.indexOf(',')
          ? ((e = 1 < l.split(',')[0].length ? l.split(',')[0] : '-'),
            (l = 1 < l.split(',')[1].length ? l.split(',')[1] : '-'))
          : (l = e = '-'));
      d
        ? (a('body').attr('nl-colors', 'custom'),
          (d = {
            '#000000': phrases.clr_black,
            '#6495ed': phrases.clr_blue,
            '#3cb371': phrases.clr_green,
            '#ffd800': phrases.clr_yellow,
            '#e95d4f': phrases.clr_red,
            '#ffa500': phrases.clr_orange,
            '#a569bd': phrases.clr_purple,
            '#ff78bb': phrases.clr_pink,
            '#ffffff': phrases.clr_white,
            '#a3a3a3': phrases.clr_gray,
            custom: phrases.clr_custom,
          }),
          'bg' == b
            ? ((b =
                'he' == g
                  ? 'undefined' !== typeof d[h(c)]
                    ? phrases.bg + ' ' + d[h(c)]
                    : d.custom
                  : 'undefined' !== typeof d[h(c)]
                    ? d[h(c)] + ' ' + phrases.bg.toLowerCase()
                    : d.custom),
              a('*')
                .not(commons.not)
                .each(function () {
                  for (var b = a(this).length; b--; )
                    a(this)[b].style.setProperty('background-color', c, 'important');
                }),
              a(
                commons.dd +
                  ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsBG > #NLCurrentBG',
              )
                .css({ 'background-color': c, display: 'inline-block' })
                .attr('aria-label', b))
            : ((b =
                'he' == g
                  ? 'undefined' !== typeof d[h(c)]
                    ? phrases.txt + ' ' + d[h(c)]
                    : d.custom
                  : 'undefined' !== typeof d[h(c)]
                    ? d[h(c)] + ' ' + phrases.txt.toLowerCase()
                    : d.custom),
              a('*')
                .not(commons.not)
                .each(function () {
                  for (var b = a(this).length; b--; )
                    a(this)[b].style.setProperty('color', c, 'important'),
                      a(this)[b].style.setProperty('border-color', c, 'important');
                }),
              a(
                commons.dd +
                  ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsTXT > #NLCurrentTXT',
              )
                .css({ 'background-color': c, display: 'inline-block' })
                .attr('aria-label', b)),
          a('div#NLCustomColors').children('span.sign').length ||
            (a(commons.dd + ' > #NagishLiColors > li.active > #NLNormalColors')
              .children('span.sign')
              .remove(),
            a(commons.dd + ' > #NagishLiColors > li.active > #NLNormalColors')
              .parent('li.active')
              .removeClass('active'),
            a(commons.dd + ' > #NagishLiColors > li.not-clickable > #NLCustomColors')
              .parent('li.not-clickable')
              .addClass('active'),
            a(commons.checkmark).prependTo(a('div#NLCustomColors')),
            a(commons.dd + ' > #NagishLiColors')
              .prev('div.nl-dropdown-toggle')
              .hasClass('open') ||
              a(
                '<span class="selected">' + phrases.custom_colors + '</span>',
              ).insertAfter(
                a(commons.dd + ' > #NagishLiColors')
                  .prev('div', '.nl-dropdown-toggle')
                  .children('.nl-dropdown-title'),
              )))
        : a(
              commons.dd +
                ' > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel > li.selected',
            ).length
          ? ('custom' != a('body').attr('nl-colors') &&
              (a('html').css('height', ''),
              a(':root').css({
                filter: '',
                '-webkit-filter': '',
                '-moz-filter': '',
                '-khtml-filter': '',
                '-ms-filter': '',
                '-o-filter': '',
              })),
            a('body').attr('nl-colors', 'custom'),
            (c = a(
              commons.dd +
                ' > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel > li.selected',
            ).css('background-color')),
            'bg' == b
              ? (a('*')
                  .not(commons.not)
                  .each(function () {
                    for (var b = a(this).length; b--; )
                      a(this)[b].style.setProperty('background-color', c, 'important');
                  }),
                (e = h(c)))
              : (a('*')
                  .not(commons.not)
                  .each(function () {
                    for (var b = a(this).length; b--; )
                      a(this)[b].style.setProperty('color', c, 'important'),
                        a(this)[b].style.setProperty('border-color', c, 'important');
                  }),
                (l = h(c))),
            f('change', 'colors', e + ',' + l))
          : ('bg' == b
              ? (a('*')
                  .not(commons.not)
                  .each(function () {
                    for (var b = a(this).length; b--; )
                      a(this)[b].style.setProperty('background-color', '', '');
                  }),
                (e = '-'))
              : (a('*')
                  .not(commons.not)
                  .each(function () {
                    for (var b = a(this).length; b--; )
                      a(this)[b].style.setProperty('color', '', ''),
                        a(this)[b].style.setProperty('border-color', '', '');
                  }),
                (l = '-')),
            f('change', 'colors', '-' == e && '-' == l ? 'normal' : e + ',' + l),
            '-' == e && '-' == l && a('body').removeAttr('nl-colors'));
    }
    function z(b) {
      b = void 0 === b ? 'normal' : b;
      'custom' == a('body').attr('nl-colors')
        ? (a('*')
            .not(commons.not)
            .each(function () {
              for (var b = a(this).length; b--; )
                a(this)[b].style.setProperty('background-color', '', ''),
                  a(this)[b].style.setProperty('color', '', ''),
                  a(this)[b].style.setProperty('border-color', '', '');
            }),
          a(
            commons.dd +
              ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsBG > #NLCurrentBG, ' +
              commons.dd +
              ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsTXT > #NLCurrentTXT',
          )
            .css({ 'background-color': 'transparent', display: 'none' })
            .removeAttr('aria-label'),
          a(commons.dd + ' > #NagishLiColors > li > #NLCustomColors')
            .children('span.sign')
            .remove(),
          a(
            commons.dd +
              ' > #NagishLiColors > li > #NLCustomColors > #NLcolorPanel > li.selected',
          ).removeClass('selected'),
          a(
            commons.dd +
              " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
              phrases.bg +
              "'] > li[aria-label='" +
              phrases.clr_custom +
              "'] > input#NLColorPicker",
          ).attr('value', h(a('body').css('background-color'))),
          a(
            commons.dd +
              " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
              phrases.txt +
              "'] > li[aria-label='" +
              phrases.clr_custom +
              "'] > input#NLColorPicker",
          ).attr('value', h(a('body').css('color'))),
          a(
            commons.dd +
              " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
              phrases.bg +
              "'] > li[aria-label='" +
              phrases.clr_custom +
              "']",
          )
            .removeClass('selected')
            .attr('aria-label', phrases.aria_select_bgcolor)
            .css('background-color', a('body').css('background-color')),
          a(
            commons.dd +
              " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
              phrases.txt +
              "'] > li[aria-label='" +
              phrases.clr_custom +
              "']",
          )
            .removeClass('selected')
            .attr('aria-label', phrases.aria_select_txtcolor)
            .css('color', a('body').css('color')))
        : (a('html').css('height', ''),
          a(':root').css({
            filter: '',
            '-webkit-filter': '',
            '-moz-filter': '',
            '-khtml-filter': '',
            '-ms-filter': '',
            '-o-filter': '',
          }),
          a('nagishli > style#NagishLiPseudoStyling').remove());
      a('body').removeAttr('nl-colors');
      f('change', 'colors', b);
    }
    function R(b) {
      (void 0 === b ? 0 : b)
        ? (a(commons.dd + ' > #NagishLiText > li > #NLNormalText')
            .removeClass('active')
            .find('span.sign')
            .remove(),
          (b = f('read', 'text')))
        : ((b =
            16 != parseInt(a('body').css('font-size'))
              ? parseInt(a('body').css('font-size'))
              : 16),
          (b += 1));
      var c = b;
      a('*')
        .not(commons.not)
        .each(function () {
          for (var b = a(this).length; b--; )
            a(this)[b].style.setProperty('font-size', c + 'px', 'important');
        });
      'he' == g
        ? (a(commons.dd + ' > .nl-dropdown-toggle > #NLTextVal')[0].innerHTML =
            ':&nbsp;' + c)
        : (a(commons.dd + ' > .nl-dropdown-toggle > #NLTextVal')[0].innerHTML =
            ':&nbsp;' + c + 'px');
      a('body').attr('nl-text', c);
      f('change', 'text', c);
    }
    function S(b) {
      (void 0 === b ? 0 : b)
        ? (a(commons.dd + ' > #NagishLiText > li > #NLNormalText')
            .removeClass('active')
            .find('span.sign')
            .remove(),
          (b = f('read', 'text')))
        : ((b =
            16 != parseInt(a('body').css('font-size'))
              ? parseInt(a('body').css('font-size'))
              : 16),
          --b);
      var c = Math.max(0, b);
      a('*')
        .not(commons.not)
        .each(function () {
          for (var b = a(this).length; b--; )
            a(this)[b].style.setProperty('font-size', c + 'px', 'important');
        });
      'he' == g
        ? (a(commons.dd + ' > .nl-dropdown-toggle > #NLTextVal')[0].innerHTML =
            ':&nbsp;' + c)
        : (a(commons.dd + ' > .nl-dropdown-toggle > #NLTextVal')[0].innerHTML =
            ':&nbsp;' + c + 'px');
      a('body').attr('nl-text', c);
      f('change', 'text', c);
    }
    function I(b) {
      b = void 0 === b ? '0' : b;
      a('body[nl-text]').length &&
        (a('body').removeAttr('nl-text'),
        a('*')
          .not(commons.not)
          .each(function () {
            for (var b = a(this).length; b--; )
              a(this)[b].style.setProperty('font-size', '', ''),
                '0px' == a(this).css('font-size') &&
                  a(this)[b].style.setProperty('font-size', 'initial', '');
          }),
        (a(commons.dd + ' > .nl-dropdown-toggle > #NLTextVal')[0].innerHTML = ''),
        f('change', 'text', b));
    }
    function Y(b) {
      b = void 0 === b ? !1 : b;
      if ('text' != a('body').attr('nl-display')) {
        a('body').attr('nl-display', 'text');
        Z();
        a("link[rel='stylesheet']").prop('disabled', !0);
        a('body > *').not('#NagishLiBar').css('visibility', '');
        a('body > .fb-like, img').not('#NagishLiBar img').css('display', 'none');
        a("iframe[src*='youtube.com'], video").css('visibility', 'hidden');
        a('body').css('background-image', 'none');
        var c = 'textonly';
      } else
        a('body').removeAttr('nl-display'),
          a("link[rel='stylesheet']").prop('disabled', !1),
          a('body > .fb-like, img').not('#NagishLiBar img').css('display', ''),
          a("iframe[src*='youtube.com'], video").css('visibility', ''),
          a('body').css('background-image', ''),
          (c = 'normal');
      if (b)
        return (
          a('' + commons.dd + ' > #NagishLiDisplay > li > #NLTextDisplay')
            .attr(
              'aria-label',
              phrases.aria_the_option + phrases.text_only + ' ' + phrases.r2m_on,
            )
            .prepend(commons.checkmark)
            .parent('li')
            .addClass('active')
            .siblings('li')
            .removeClass('active')
            .find('span.sign')
            .remove(),
          a('' + commons.dd + ' > #NagishLiDisplay')
            .prev('div.nl-dropdown-toggle')
            .hasClass('open') ||
            a('<span class="selected">' + phrases.text_only + '</span>').insertAfter(
              a('' + commons.dd + ' > #NagishLiDisplay')
                .prev('div', '.nl-dropdown-toggle')
                .children('.nl-dropdown-title'),
            ),
          !1
        );
      f('change', 'display', c);
    }
    function aa(b, c) {
      'images' != a('body').attr('nl-display')
        ? (a('body').attr('nl-display', 'images'),
          Z(),
          a("link[rel='stylesheet']").prop('disabled') &&
            a("link[rel='stylesheet']").prop('disabled', !1),
          a('body > *').not('#NagishLiTag').css('visibility', 'hidden'),
          a('body > .fb-like').css('display', 'none'),
          a("iframe[src*='youtube.com'], video").css('visibility', 'hidden'),
          a('body').css('background-image', ''),
          a('img').css({ visibility: 'visible', display: '' }),
          (c = 'imagesonly'))
        : (a('body').removeAttr('nl-display'),
          a('body > *').not('#NagishLiBar').css('visibility', ''),
          a('body > .fb-like').css('display', ''),
          (c = 'normal'));
      if (b)
        return (
          a(commons.dd + ' > #NagishLiDisplay > li > #NLImagesDisplay')
            .attr(
              'aria-label',
              phrases.aria_the_option + phrases.images_only + ' ' + phrases.r2m_on,
            )
            .prepend(commons.checkmark)
            .parent('li')
            .addClass('active')
            .siblings('li')
            .removeClass('active')
            .find('span.sign')
            .remove(),
          a(commons.dd + ' > #NagishLiDisplay')
            .prev('div.nl-dropdown-toggle')
            .hasClass('open') ||
            a('<span class="selected">' + phrases.images_only + '</span>').insertAfter(
              a(commons.dd + ' > #NagishLiDisplay')
                .prev('div', '.nl-dropdown-toggle')
                .children('.nl-dropdown-title'),
            ),
          !1
        );
      f('change', 'display', c);
    }
    function ba(b) {
      b = void 0 === b ? 'normal' : b;
      a('body[nl-display]').length &&
        (a('body').removeAttr('nl-display'),
        a("link[rel='stylesheet']").prop('disabled') &&
          a("link[rel='stylesheet']").prop('disabled', !1),
        a("body > *, img, iframe[src*='youtube.com'], video").css({
          display: '',
          visibility: '',
        }),
        a('body').css('background-image', ''),
        f('change', 'display', b));
    }
    function T(b) {
      b
        ? (a(commons.dd + ' > #NagishLiHighlight > li > #NLHighlightLinks')
            .attr(
              'aria-label',
              phrases.aria_the_option + phrases.hl_links + ' ' + phrases.r2m_on,
            )
            .prepend(commons.checkmark)
            .parent('li')
            .addClass('active'),
          a('* a')
            .not('#NagishLiBar a')
            .each(function () {
              this.style.setProperty('outline', '3px red dotted', 'important');
              this.style.setProperty('background-color', 'black', 'important');
              this.style.setProperty('color', 'yellow', 'important');
              a('body').attr('nl-hl-links', '1');
            }))
        : (a('body[nl-hl-links]').length
            ? (a('* a')
                .not('#NagishLiBar a')
                .each(function () {
                  this.style.setProperty('outline', '', '');
                  this.style.setProperty('background-color', '', '');
                  this.style.setProperty('color', '', '');
                }),
              a('body[nl-hl-headings]').length &&
                a(
                  'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, h1 span, h2 span, h3 span, h4 span, h5 span, h6 span',
                ).each(function () {
                  this.style.setProperty('color', 'inherit', 'important');
                }),
              a('body').removeAttr('nl-hl-links'),
              (b = '0'))
            : (a('* a')
                .not('#NagishLiBar a')
                .each(function () {
                  this.style.setProperty('outline', '3px red dotted', 'important');
                  this.style.setProperty('background-color', 'black', 'important');
                  this.style.setProperty('color', 'yellow', 'important');
                }),
              a('body').attr('nl-hl-links', '1'),
              (b = '1')),
          f('change', 'highlight', { to: b, pos: 0 }));
    }
    function U(b) {
      b
        ? (a(commons.dd + ' > #NagishLiHighlight > li > #NLHighlightHeadings')
            .attr(
              'aria-label',
              phrases.aria_the_option + phrases.hl_headings + ' ' + phrases.r2m_on,
            )
            .prepend(commons.checkmark)
            .parent('li')
            .addClass('active'),
          a('h1, h2, h3, h4, h5, h6').each(function () {
            this.style.setProperty('outline', '3px red dotted', 'important');
            this.style.setProperty('background', 'black', 'important');
            this.style.setProperty('color', 'yellow', 'important');
          }),
          a('body[nl-hl-links]').length ||
            a(
              'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, h1 span, h2 span, h3 span, h4 span, h5 span, h6 span',
            ).each(function () {
              this.style.setProperty('color', 'inherit', 'important');
            }),
          a('body').attr('nl-hl-headings', '1'))
        : (a('body[nl-hl-headings]').length
            ? (a('h1, h2, h3, h4, h5, h6').each(function () {
                this.style.setProperty('outline', '', '');
                this.style.setProperty('background', '', '');
                this.style.setProperty('color', '', '');
              }),
              a('body[nl-hl-links]').length ||
                a(
                  'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, h1 span, h2 span, h3 span, h4 span, h5 span, h6 span',
                ).each(function () {
                  this.style.setProperty('color', '', '');
                }),
              a('body').removeAttr('nl-hl-headings'),
              (b = '0'))
            : (a('h1, h2, h3, h4, h5, h6, h1').each(function () {
                this.style.setProperty('outline', '3px red dotted', 'important');
                this.style.setProperty('background', 'black', 'important');
                this.style.setProperty('color', 'yellow', 'important');
              }),
              a('body[nl-hl-links]').length ||
                a(
                  'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a, h1 span, h2 span, h3 span, h4 span, h5 span, h6 span',
                ).each(function () {
                  this.style.setProperty('color', 'inherit', 'important');
                }),
              (b = '1'),
              a('body').attr('nl-hl-headings', '1')),
          f('change', 'highlight', { to: b, pos: 1 }));
    }
    function ca(b) {
      if ('zoom' in document.documentElement.style)
        b
          ? ((b = f('read', 'zoom')), (b = +b))
          : ((b = a("body[style*='zoom']").length
              ? -1 !== a('body').css('zoom').indexOf('%')
                ? parseInt(a('body').css('zoom')) / 100
                : parseFloat(a('body').css('zoom'))
              : 1),
            (b = +(b + 0.1).toFixed(1))),
          a('body').css('zoom', b),
          a('body > iframe').css({
            '-webkit-transform-origin': '0 0',
            '-moz-transform-origin': '0 0',
            '-khtml-transform-origin': '0 0',
            '-ms-transform-origin': '0 0',
            '-o-transform-origin': '0 0',
            '-webkit-transform': 'scale(' + b + ')',
            '-moz-transform': 'scale(' + b + ')',
            '-khtml-transform': 'scale(' + b + ')',
            '-ms-transform': 'scale(' + b + ')',
            '-o-transform': 'scale(' + b + ')',
          });
      else if ('transform' in document.documentElement.style)
        b
          ? ((b = f('read', 'zoom')), (b = +b))
          : (a("body[style*='transform: scale']").length
              ? ((b = a('body')
                  .css('transform')
                  .match(/-?[\d\.]+/g)),
                (b = parseFloat(b[0])))
              : (b = 1),
            (b = +(b + 0.1).toFixed(1))),
          a('body, body > iframe').css({
            '-webkit-transform-origin': '0 0',
            '-moz-transform-origin': '0 0',
            '-khtml-transform-origin': '0 0',
            '-ms-transform-origin': '0 0',
            '-o-transform-origin': '0 0',
            '-webkit-transform': 'scale(' + b + ')',
            '-moz-transform': 'scale(' + b + ')',
            '-khtml-transform': 'scale(' + b + ')',
            '-ms-transform': 'scale(' + b + ')',
            '-o-transform': 'scale(' + b + ')',
          });
      else return alert(phrases.not_supported), !1;
      f('change', 'zoom', b);
      a('html')[0].style.setProperty('overflow-y', 'auto', 'important');
      a(
        commons.dd + ' > #NagishLiMisc > li.not-clickable > #NLZoom > #NLZoomVal',
      )[0].innerHTML = b + '&nbsp;';
    }
    function da(b) {
      if ('zoom' in document.documentElement.style)
        b
          ? ((b = f('read', 'zoom')), (b = +b))
          : ((b = a("body[style*='zoom']").length
              ? -1 !== a('body').css('zoom').indexOf('%')
                ? parseInt(a('body').css('zoom')) / 100
                : parseFloat(a('body').css('zoom'))
              : 1),
            (b = +(b - 0.1).toFixed(1))),
          a('body').css('zoom', b),
          a('body > iframe').css({
            '-webkit-transform-origin': '0 0',
            '-moz-transform-origin': '0 0',
            '-khtml-transform-origin': '0 0',
            '-ms-transform-origin': '0 0',
            '-o-transform-origin': '0 0',
            '-webkit-transform': 'scale(' + b + ')',
            '-moz-transform': 'scale(' + b + ')',
            '-khtml-transform': 'scale(' + b + ')',
            '-ms-transform': 'scale(' + b + ')',
            '-o-transform': 'scale(' + b + ')',
          });
      else if ('transform' in document.documentElement.style)
        b
          ? ((b = f('read', 'zoom')), (b = +b))
          : (a("body[style*='transform: scale']").length
              ? ((b = a('body')
                  .css('transform')
                  .match(/-?[\d\.]+/g)),
                (b = parseFloat(b[0])))
              : (b = 1),
            (b = +(b - 0.1).toFixed(1))),
          a('body, body > iframe').css({
            '-webkit-transform-origin': '0 0',
            '-moz-transform-origin': '0 0',
            '-khtml-transform-origin': '0 0',
            '-ms-transform-origin': '0 0',
            '-o-transform-origin': '0 0',
            '-webkit-transform': 'scale(' + b + ')',
            '-moz-transform': 'scale(' + b + ')',
            '-khtml-transform': 'scale(' + b + ')',
            '-ms-transform': 'scale(' + b + ')',
            '-o-transform': 'scale(' + b + ')',
          });
      else return alert(phrases.not_supported), !1;
      f('change', 'zoom', b);
      1 >= b &&
        'absolute' == a(commons.bar).css('position') &&
        (a('html')[0].style.setProperty('overflow-y', '', ''),
        a(commons.bar)[0].style.setProperty('position', 'fixed', 'important'));
      a(
        commons.dd + ' > #NagishLiMisc > li.not-clickable > #NLZoom > #NLZoomVal',
      )[0].innerHTML = b + '&nbsp;';
    }
    function ea(b) {
      b = void 0 === b ? '0.0' : b;
      a('body, body > iframe').css({
        zoom: '',
        '-webkit-transform-origin': '',
        '-moz-transform-origin': '',
        '-khtml-transform-origin': '',
        '-ms-transform-origin': '',
        '-o-transform-origin': '',
        '-webkit-transform': '',
        '-moz-transform': '',
        '-khtml-transform': '',
        '-ms-transform': '',
        '-o-transform': '',
      });
      a('html')[0].style.setProperty('overflow-y', '', '');
      a(commons.bar)[0].style.setProperty('position', 'fixed', 'important');
      a(
        commons.dd + ' > #NagishLiMisc > li.not-clickable > #NLZoom > #NLZoomVal',
      ).empty();
      f('change', 'zoom', b);
    }
    function fa(b, c) {
      b = void 0 === b ? 'readable' : b;
      c = void 0 === c ? !1 : c;
      a('body[nl-font]').length
        ? (a('body').removeAttr('nl-font'),
          a('body *')
            .not(commons.not)
            .each(function () {
              this.style.setProperty('font-family', '', '');
            }),
          a(commons.dd + ' > #NagishLiMisc > li > #NLFont > #NLFontVal').text(
            phrases.normal,
          ),
          (b = 'normal'))
        : (a('body').attr('nl-font', 'readable'),
          a('body *')
            .not(commons.not)
            .each(function () {
              this.style.setProperty(
                'font-family',
                'Arial, Helvetica, sans-serif',
                'important',
              );
            }),
          a(commons.dd + ' > #NagishLiMisc > li > #NLFont > #NLFontVal').text(
            phrases.font_readable,
          ));
      c || f('change', 'font', b);
    }
    function y(b, c) {
      'TL' == b
        ? (a(commons.bar)[0].style.setProperty('top', '0vh', 'important'),
          a(commons.bar)[0].style.setProperty('bottom', 'auto', 'important'),
          a(commons.bar)[0].style.setProperty('left', '0', 'important'),
          a(commons.bar)[0].style.setProperty('right', 'auto', 'important'),
          'he' == g &&
            a('span#NagishLiMove > span').each(function () {
              a(this).attr('data-balloon-pos', phrases.align_right);
            }))
        : 'BR' == b
          ? (a(commons.bar)[0].style.setProperty('bottom', '0vh', 'important'),
            a(commons.bar)[0].style.setProperty('top', 'auto', 'important'),
            a(commons.bar)[0].style.setProperty('right', '0', 'important'),
            a(commons.bar)[0].style.setProperty('left', 'auto', 'important'),
            'he' == g &&
              a('span#NagishLiMove > span').each(function () {
                a(this).attr('data-balloon-pos', phrases.align_left);
              }))
          : 'TR' == b
            ? (a(commons.bar)[0].style.setProperty('bottom', 'auto', 'important'),
              a(commons.bar)[0].style.setProperty('top', '0vh', 'important'),
              a(commons.bar)[0].style.setProperty('right', '0', 'important'),
              a(commons.bar)[0].style.setProperty('left', 'auto', 'important'),
              'he' == g &&
                a('span#NagishLiMove > span').each(function () {
                  a(this).attr('data-balloon-pos', phrases.align_left);
                }))
            : 'BL' == b &&
              (a(commons.bar)[0].style.setProperty('bottom', '0vh', 'important'),
              a(commons.bar)[0].style.setProperty('top', 'auto', 'important'),
              a(commons.bar)[0].style.setProperty('right', 'auto', 'important'),
              a(commons.bar)[0].style.setProperty('left', '0', 'important'),
              'he' == g &&
                a('span#NagishLiMove > span').each(function () {
                  a(this).attr('data-balloon-pos', phrases.align_right);
                }));
      a(commons.bar + ' > #NagishLiBarStrip > #NagishLiMove > span').css(
        'visibility',
        'visible',
      );
      a(commons.bar + ' > #NagishLiBarStrip > #NagishLiMove > #NagishLiMove' + b).css(
        'visibility',
        'hidden',
      );
      c || f('change', 'position', b);
    }
    function ha(b, c) {
      b = void 0 === b ? !1 : b;
      c = void 0 === c ? 'off' : c;
      a('body[nl-animations]').length || 'off' != c
        ? ((jQuery.fx.off = !1),
          a('body *')
            .not(commons.not)
            .each(function () {
              this.style.setProperty('animation-play-state', '', '');
              this.style.setProperty('transition-duration', '', '');
            }),
          a('body').removeAttr('nl-animations'),
          (a(
            commons.dd + ' > #NagishLiMisc > li > #NLAnimations > #NLAnimationsVal',
          )[0].innerHTML = '&#x25ba;&nbsp;' + phrases.animations_on),
          (c = 'on'))
        : ((jQuery.fx.off = !0),
          a('body *')
            .not(commons.not)
            .each(function () {
              this.style.setProperty('animation-play-state', 'paused', 'important');
              this.style.setProperty('transition-duration', '0s', 'important');
            }),
          a('body').attr('nl-animations', c),
          (a(
            commons.dd + ' > #NagishLiMisc > li > #NLAnimations > #NLAnimationsVal',
          )[0].innerHTML =
            '<span aria-hidden="true">&#x275a;&#x275a;&nbsp;</span>' +
            phrases.animations_off));
      b || f('change', 'animations', c);
    }
    function ia(b, c) {
      b = void 0 === b ? !1 : b;
      c = void 0 === c ? 'off' : c;
      if (a('body[nl-r2m]').length || a('body span.r2m').length || 'off' != c)
        a('body span.r2m > img')
          .toggleClass('bounceIn bounceOut')
          .fadeOut(600, function () {
            a(this).parent('span.r2m').remove();
          }),
          a('body').removeAttr('nl-r2m'),
          a('nagishli > script#nlr2ms, nagishli > audio#nlr2mp').remove(),
          (a(commons.dd + ' > #NagishLiMisc > li > #NLR2M > #NLR2MVal')[0].innerHTML =
            phrases.r2m_off),
          (c = 'off');
      else {
        var d = function (b, c) {
            3 === c.nodeType
              ? e.test(c.data) && a(c).replaceWith(c.data.replace(e, l))
              : a(c).not('iframe').contents().each(d);
          },
          e = /([0|1][0-9-]{9,})/g,
          l =
            '$1<span style="display: inline !important; overflow-x: visible !important;" class="r2m" data-balloon="' +
            phrases.r2m_exp +
            '" nl-r2m-data="$1" data-balloon-pos="' +
            phrases.align_left +
            '">&nbsp;<img style="display: inline-block !important; vertical-align: top !important; width: 21px !important; height: 21px !important; cursor: pointer !important;" class="bounceIn animated" src="' +
            icons.r2m +
            '" alt="' +
            phrases.r2m_exp +
            '" /></span>';
        X ||
          (!b &&
            (a(commons.bar + ' > #nlr2mp').length ||
              a(commons.bar + ' > #nlr2ms').length)) ||
          (ma(q + '/sfx/male/' + g + '_digits.js', 'nlr2ms'),
          a('nagishli').append(
            '<audio crossorigin="anonymous" id="nlr2mp" style="display: none !important;">' +
              phrases.not_supported +
              '</audio>',
          ),
          a('body').attr('nl-r2m', '1').not(commons.not).each(d),
          (a(commons.dd + ' > #NagishLiMisc > li > #NLR2M > #NLR2MVal')[0].innerHTML =
            phrases.r2m_on));
        a('span.r2m > img').click(function (b) {
          b.preventDefault();
          if (X)
            (b = new SpeechSynthesisUtterance()),
              (b.lang = 'en'),
              pa
                ? ((b.pitch = 0.7), (b.rate = 0.7))
                : ((b.pitch = 1), (b.rate = 0.7 - 0.2)),
              (b.text = a(this)
                .parent('span.r2m')
                .attr('nl-r2m-data')
                .replace(/\D/g, '')),
              speechSynthesis.speak(b);
          else {
            var c = function (a) {
                e.src = 'data:audio/mp3;base64,' + edgts[a];
                e.load();
                e.play();
              },
              d = a(this)
                .parent('span.r2m')
                .attr('nl-r2m-data')
                .replace(/\D/g, '')
                .split(''),
              e = document.getElementById('nlr2mp'),
              f = 0;
            e.addEventListener('ended', function () {
              f < d.length - 1 && (f++, c(d[f]));
            });
            c(d[f]);
          }
        });
        c = 'on';
      }
      b || f('change', 'r2m', c);
    }
    function L(b, c) {
      b = void 0 === b ? 'black' : b;
      c = void 0 === c ? !1 : c;
      a('html[nl-cursor]').length && a('html').attr('nl-cursor') == b
        ? (a(':root').removeAttr('nl-cursor'), (b = 'normal'))
        : a(':root').attr('nl-cursor', b);
      if (c)
        return (
          'black' == b
            ? a(commons.checkmark).prependTo(
                a(commons.dd + ' > #NagishLiMisc > li > #NLCursor > #NLCursorBlack')
                  .attr(
                    'aria-label',
                    phrases.aria_the_option +
                      phrases.cursor +
                      ' ' +
                      phrases.cursor_black +
                      ' ' +
                      phrases.r2m_on,
                  )
                  .addClass('active'),
              )
            : a(commons.checkmark).prependTo(
                a(commons.dd + ' > #NagishLiMisc > li > #NLCursor > #NLCursorWhite')
                  .attr(
                    'aria-label',
                    phrases.aria_the_option +
                      phrases.cursor +
                      ' ' +
                      phrases.cursor_white +
                      ' ' +
                      phrases.r2m_on,
                  )
                  .addClass('active'),
              ),
          !1
        );
      f('change', 'cursor', b);
    }
    function ja() {
      a(commons.dd + ' > .nl-dropdown-toggle.open').length
        ? a(commons.bar + ' > #NagishLiBarStrip > #NagishLiToggleMenus').attr({
            class: 'collapse-all',
            'aria-label': phrases.collapse_all,
          })
        : a(commons.bar + ' > #NagishLiBarStrip > #NagishLiToggleMenus').attr({
            class: 'expand-all',
            'aria-label': phrases.expand_all,
          });
    }
    function V(b, c) {
      b = void 0 === b ? !1 : b;
      c = void 0 === c ? '1' : c;
      a(commons.dd + ' > #NagishLiInfo > #NagishLiHelp').hasClass('active')
        ? (a(commons.dd + ' > #NagishLiInfo > #NagishLiHelp')
            .removeClass('active')
            .find('span.sign')
            .remove(),
          a(commons.dd + ' > .nl-dropdown-menu > li > div')
            .children('span.help, span.notice')
            .hide(),
          a(
            commons.dd +
              ' > .nl-dropdown-menu > li > div > span.nagishli-option-title, ' +
              commons.menus +
              ' > li > div > span.nl-dropdown-title, ' +
              commons.dd +
              ' > .nl-dropdown-toggle > .nl-dropdown-arrow',
          ).attr('aria-hidden', 'false'),
          a(
            commons.dd +
              ' > .nl-dropdown-menu > li > div > span.nagishli-sr-only, ' +
              commons.menus +
              ' > li > div > span.nagishli-sr-only',
          ).attr('aria-hidden', 'true'),
          (c = '0'))
        : (a(commons.checkmark).prependTo(
            a(commons.dd + ' > #NagishLiInfo > #NagishLiHelp')
              .attr(
                'aria-label',
                phrases.aria_the_option + phrases.help + ' ' + phrases.r2m_on,
              )
              .addClass('active')
              .children('div'),
          ),
          a(commons.dd + ' > .nl-dropdown-menu > li > div')
            .children('span.help, span.notice')
            .css('display', 'inline-block'),
          a(
            commons.dd +
              ' > .nl-dropdown-menu > li > div > span.nagishli-option-title, ' +
              commons.menus +
              ' > li > div > span.nl-dropdown-title, ' +
              commons.dd +
              ' > .nl-dropdown-toggle > .nl-dropdown-arrow',
          ).attr('aria-hidden', 'true'),
          a(
            commons.dd +
              ' > .nl-dropdown-menu > li > div > span.nagishli-sr-only, ' +
              commons.menus +
              ' > li > div > span.nagishli-sr-only',
          ).attr('aria-hidden', 'false'));
      b || f('change', 'help', c);
    }
    function ka(b, c) {
      b = void 0 === b ? !1 : b;
      c = void 0 === c ? 'on' : c;
      a('body[nl-kbnav]').length || 'on' != c
        ? (a('body').removeAttr('nl-kbnav'),
          a('nagishli > style#NagishLiTabbingStyle').remove(),
          (a(commons.dd + ' > #NagishLiMisc > li > #NLKBNav > #NLKBNavVal')[0].innerHTML =
            phrases.kbnav_off),
          a('#NagishLiMenus .nl-dropdown-toggle').off('keypress.nlkbnavclk'),
          (c = 'off'))
        : (a(
            commons.bar +
              ' > #NagishLiBarStrip, ' +
              commons.bar +
              ' > #NagishLiBarStrip > #NagishLiMove > span#NagishLiMoveTL, ' +
              commons.bar +
              ' > #NagishLiBarStrip > #NagishLiMove > span#NagishLiMoveTR, ' +
              commons.bar +
              ' > #NagishLiBarStrip > #NagishLiMove > span#NagishLiMoveBL, ' +
              commons.bar +
              ' > #NagishLiBarStrip > #NagishLiMove > span#NagishLiMoveBR, ' +
              commons.bar +
              ' > #NagishLiBarStrip > #NagishLiToggleMenus, ' +
              commons.dd +
              ' > .nl-dropdown-toggle, ' +
              commons.dd +
              ' > .nl-dropdown-menu > li > div, ' +
              commons.dd +
              ' > .nl-dropdown-menu > li > div > a, ' +
              commons.dd +
              ' > .nl-dropdown-menu > li > div > span, ' +
              commons.dd +
              ' > .nl-dropdown-menu > li#NagishLiHelp, ' +
              commons.dd +
              ' > ul > li, ' +
              commons.dd +
              ' > .nl-dropdown-menu > li > div > ul > li, ' +
              commons.dd +
              ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsTXT, ' +
              commons.dd +
              ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsBG, ' +
              commons.dd +
              ' > #NagishLiColors > li > #NLCustomColors > ul > li#NLCloseColorPanel',
          ).on('keypress.nlkbnavclk', function (b) {
            13 === b.which && a(this).triggerHandler('click');
          }),
          a('body').attr('nl-kbnav', '1'),
          a('nagishli').append(
            '<style type="text/css" id="NagishLiTabbingStyle">body *:focus { outline: 5px solid rgba(88, 144, 255, 0.75) !important; } ' +
              commons.dd +
              ' > .nl-dropdown-menu > li > div:focus, ' +
              commons.dd +
              ' > .nl-dropdown-toggle:focus, ' +
              commons.dd +
              ' > .nl-dropdown-menu > li > div > span:focus, ' +
              commons.dd +
              ':last-child > .nl-dropdown-menu > li:last-child > div:focus, ' +
              commons.dd +
              ' > .nl-dropdown-menu > li > div > a:focus, #NagishLiBarStrip:focus, ' +
              commons.dd +
              ' > #NagishLiMisc > li > #NLSkipLinks > select#NLSkipLinksVal:focus { border: 5px solid rgba(88, 144, 255, 0.75) !important; } ' +
              commons.bar +
              ' > #NagishLiBarStrip > #NagishLiMove > span:focus, ' +
              commons.bar +
              ' > #NagishLiBarStrip > #NagishLiToggleMenus:focus, nagishli#NagishLiTag > .NagishLiOverlay #closeBtn:focus, #NagishLiOverlayContent > .NagishLiStatementText > a:focus, #NagishLiOverlayContent > .NagishLiAboutText > a:focus, #NagishLiOverlayContent > .NagishLiAboutText > span#licWarn > a:focus, #NagishLiOverlayContent > .NagishLiStatementText > span#licWarn > a:focus, #NagishLiOverlayContent > .NagishLiAboutText > #DeveloperMsg > a:focus > img, ' +
              commons.dd +
              ' > .nl-dropdown-menu > li > div > ul > li:focus, ' +
              commons.dd +
              ' > .nl-dropdown-menu > li > div > ul > li > input:focus { outline: 5px solid rgba(88, 144, 255, 0.75) !important; } ' +
              commons.dd +
              ' > .nl-dropdown-menu > li > div > ul > li > input:focus { outline-width: 8px !important; } ' +
              commons.dd +
              ' > .nl-dropdown-menu > li > div:focus { background: #f6f6f6 !important; } ' +
              commons.dd +
              ' > .nl-dropdown-toggle:focus, ' +
              commons.menus +
              '.blue > .nl-dropdown > .nl-dropdown-toggle:focus { background: #5478E4 !important; } ' +
              commons.menus +
              '.red > .nl-dropdown > .nl-dropdown-toggle:focus { background: #EB2B36 !important; } ' +
              commons.menus +
              '.green > .nl-dropdown > .nl-dropdown-toggle:focus { background: #365E1B !important; } ' +
              commons.menus +
              '.purple > .nl-dropdown > .nl-dropdown-toggle:focus { background: #8562B1 !important; } ' +
              commons.menus +
              '.yellow > .nl-dropdown > .nl-dropdown-toggle:focus { background: #EDCA19 !important; } ' +
              commons.menus +
              '.pink > .nl-dropdown > .nl-dropdown-toggle:focus { background: #FF78BB !important; } ' +
              commons.menus +
              '.gray > .nl-dropdown > .nl-dropdown-toggle:focus { background: #8493A3 !important; } ' +
              commons.menus +
              '.brown > .nl-dropdown > .nl-dropdown-toggle:focus { background: #A96342 !important; } ' +
              commons.menus +
              '.orange > .nl-dropdown > .nl-dropdown-toggle:focus { background: #FF9719 !important; } ' +
              commons.menus +
              '.turquoise > .nl-dropdown > .nl-dropdown-toggle:focus { background: #36B9B2 !important; } ' +
              commons.menus +
              '.black > .nl-dropdown > .nl-dropdown-toggle:focus { background: #242424 !important; }</style>',
          ),
          (a(commons.dd + ' > #NagishLiMisc > li > #NLKBNav > #NLKBNavVal')[0].innerHTML =
            phrases.kbnav_on));
      b || f('change', 'tabbing', c);
    }
    function Z() {
      a("[nl-role*='media']").length &&
        (a("iframe[src*='youtube.com']").each(function () {
          for (var b = a(this).length; b--; )
            'ytmedia' == a(this).attr('nl-role')
              ? (a("iframe[src*='youtube.com']")[b].contentWindow.postMessage(
                  '{"event":"command","func":"pauseVideo","args":""}',
                  '*',
                ),
                a(this).attr('nl-role', 'ytmedia-paused'))
              : a(this).attr('nl-role', 'ytmedia');
        }),
        a('video, audio').each(function () {
          for (var b = a(this).length; b--; )
            'media' == a(this).attr('nl-role')
              ? (a('video, audio')[b].pause(), a(this).attr('nl-role', 'media-paused'))
              : a(this).attr('nl-role', 'media');
        }));
    }
    jq_not_found &&
      console.log(phrases.jq_not_found_msg, 'color: RoyalBlue; font-weight: bold;', '');
    180 > jQuery.fn.jquery.replace(/\D/g, '') &&
      console.log(phrases.jq_too_low, 'color: RoyalBlue; font-weight: bold;', '');
    if (!a('body').length)
      throw (alert(phrases.body_missing), Error(phrases.body_missing));
    if (A) {
      var w = function (a) {
          if ('string' != typeof a) return !1;
          var b = a.split('.');
          a = parseInt(b[0]) || 0;
          var d = parseInt(b[1]) || 0;
          b = parseInt(b[2]) || 0;
          return { major: a, minor: d, patch: b };
        },
        J = w(f('read', 'version'));
      w = w(M);
      if (J.major < w.major || J.minor < w.minor || J.patch < w.patch)
        return (
          f('delete'),
          a(commons.bar).css({ 'max-height': '', 'overflow-y': '' }),
          a(
            commons.bar +
              ' > #NagishLiBarStrip > #NagishLiToggleMenus, ' +
              commons.bar +
              ' > #NagishLiBarStrip > #NagishLiMove',
          ).remove(),
          a(commons.bar + ' > #NagishLiBarStrip').addClass('open'),
          a(commons.menus).show(),
          a(commons.menus).html(
            '<li class="nl-dropdown"><ul class="nl-dropdown-menu show"><li class="not-clickable"><div href="#">' +
              phrases.settings_upgrade_html +
              '</div></li></ul></li>',
          ),
          !1
        );
    }
    !(function (a, c) {
      'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = c())
        : 'function' == typeof define && define.amd
          ? define(c)
          : ((a = a || self).hotkeys = c());
    })(this, function () {
      function a(a, b, c) {
        a.addEventListener
          ? a.addEventListener(b, c, !1)
          : a.attachEvent &&
            a.attachEvent('on'.concat(b), function () {
              c(window.event);
            });
      }
      function c(a, b) {
        for (var c = b.slice(0, b.length - 1), d = 0; d < c.length; d++)
          c[d] = a[c[d].toLowerCase()];
        return c;
      }
      function d(a) {
        a || (a = '');
        a = a.replace(/\s/g, '').split(',');
        for (var b = a.lastIndexOf(''); 0 <= b; )
          (a[b - 1] += ','), a.splice(b, 1), (b = a.lastIndexOf(''));
        return a;
      }
      function e(a) {
        z = a || 'all';
      }
      function f() {
        return z || 'all';
      }
      function g(a, b, c) {
        if (b.scope === c || 'all' === b.scope) {
          for (var d in ((c = 0 < b.mods.length), t))
            Object.prototype.hasOwnProperty.call(t, d) &&
              ((!t[d] && -1 < b.mods.indexOf(+d)) || (t[d] && !~b.mods.indexOf(+d))) &&
              (c = !1);
          ((0 !== b.mods.length || t[16] || t[18] || t[17] || t[91]) &&
            !c &&
            '*' !== b.shortcut) ||
            (!1 === b.method(a, b) &&
              (a.preventDefault ? a.preventDefault() : (a.returnValue = !1),
              a.stopPropagation && a.stopPropagation(),
              a.cancelBubble && (a.cancelBubble = !0)));
        }
      }
      function h(a) {
        var b = r['*'],
          c = a.keyCode || a.which || a.charCode;
        if (m.filter.call(this, a)) {
          if (
            (~p.indexOf(c) || 229 === c || p.push(c),
            (93 !== c && 224 !== c) || (c = 91),
            c in t)
          ) {
            for (var d in ((t[c] = !0), q)) q[d] === c && (m[d] = !0);
            if (!b) return;
          }
          for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (t[e] = a[v[e]]);
          d = f();
          if (b)
            for (e = 0; e < b.length; e++)
              b[e].scope === d &&
                (('keydown' === a.type && b[e].keydown) ||
                  ('keyup' === a.type && b[e].keyup)) &&
                g(a, b[e], d);
          if (c in r)
            for (b = 0; b < r[c].length; b++)
              if (
                (('keydown' === a.type && r[c][b].keydown) ||
                  ('keyup' === a.type && r[c][b].keyup)) &&
                r[c][b].key
              ) {
                e = r[c][b].key.split('+');
                for (var F = [], l = 0; l < e.length; l++) F.push(y(e[l]));
                F.sort().join('') === p.sort().join('') && g(a, r[c][b], d);
              }
        }
      }
      function m(b, e, f) {
        var l = d(b),
          g = [],
          F = 'all',
          B = document,
          k = 0,
          n = !1,
          E = !0;
        void 0 === f && 'function' == typeof e && (f = e);
        '[object Object]' === Object.prototype.toString.call(e) &&
          (e.scope && (F = e.scope),
          e.element && (B = e.element),
          e.keyup && (n = e.keyup),
          e.keydown && (E = e.keydown));
        for ('string' == typeof e && (F = e); k < l.length; k++)
          (g = []),
            1 < (b = l[k].split('+')).length && (g = c(q, b)),
            (b = '*' === (b = b[b.length - 1]) ? '*' : y(b)) in r || (r[b] = []),
            r[b].push({
              keyup: n,
              keydown: E,
              scope: F,
              mods: g,
              shortcut: l[k],
              method: f,
              key: l[k],
            });
        void 0 === B ||
          -1 < w.indexOf(B) ||
          !window ||
          (w.push(B),
          a(B, 'keydown', function (a) {
            h(a);
          }),
          a(window, 'focus', function () {
            p = [];
          }),
          a(B, 'keyup', function (a) {
            h(a);
            var b = a.keyCode || a.which || a.charCode,
              c = p.indexOf(b);
            if (
              (0 > c || p.splice(c, 1),
              a.key && 'meta' == a.key.toLowerCase() && p.splice(0, p.length),
              (93 !== b && 224 !== b) || (b = 91),
              b in t)
            )
              for (var d in ((t[b] = !1), q)) q[d] === b && (m[d] = !1);
          }));
      }
      for (
        var k =
            'undefined' != typeof navigator &&
            0 < navigator.userAgent.toLowerCase().indexOf('firefox'),
          u = {
            backspace: 8,
            tab: 9,
            clear: 12,
            enter: 13,
            return: 13,
            esc: 27,
            escape: 27,
            space: 32,
            left: 37,
            up: 38,
            right: 39,
            down: 40,
            del: 46,
            delete: 46,
            ins: 45,
            insert: 45,
            home: 36,
            end: 35,
            pageup: 33,
            pagedown: 34,
            capslock: 20,
            '\u21ea': 20,
            ',': 188,
            '.': 190,
            '/': 191,
            '`': 192,
            '-': k ? 173 : 189,
            '=': k ? 61 : 187,
            ';': k ? 59 : 186,
            "'": 222,
            '[': 219,
            ']': 221,
            '\\': 220,
          },
          q = {
            '\u21e7': 16,
            shift: 16,
            '\u2325': 18,
            alt: 18,
            option: 18,
            '\u2303': 17,
            ctrl: 17,
            control: 17,
            '\u2318': k ? 224 : 91,
            cmd: k ? 224 : 91,
            command: k ? 224 : 91,
          },
          v = { 16: 'shiftKey', 18: 'altKey', 17: 'ctrlKey' },
          t = { 16: !1, 18: !1, 17: !1 },
          r = {},
          n = 1;
        20 > n;
        n++
      )
        u['f'.concat(n)] = 111 + n;
      t[k ? 224 : 91] = !(v[k ? 224 : 91] = 'metaKey');
      var p = [],
        z = 'all',
        w = [],
        y = function (a) {
          return (
            u[a.toLowerCase()] || q[a.toLowerCase()] || a.toUpperCase().charCodeAt(0)
          );
        };
      k = {
        setScope: e,
        getScope: f,
        deleteScope: function (a, b) {
          var c, d;
          for (d in (a || (a = f()), r))
            if (Object.prototype.hasOwnProperty.call(r, d)) {
              var l = r[d];
              for (c = 0; c < l.length; ) l[c].scope === a ? l.splice(c, 1) : c++;
            }
          f() === a && e(b || 'all');
        },
        getPressedKeyCodes: function () {
          return p.slice(0);
        },
        isPressed: function (a) {
          return 'string' == typeof a && (a = y(a)), !!~p.indexOf(a);
        },
        filter: function (a) {
          a = a.target || a.srcElement;
          var b = a.tagName,
            c = !0;
          return (
            (!a.isContentEditable &&
              'TEXTAREA' !== b &&
              (('INPUT' !== b && 'TEXTAREA' !== b) || a.readOnly)) ||
              (c = !1),
            c
          );
        },
        unbind: function (a, b, e) {
          var l,
            B = d(a),
            g;
          'function' == typeof b && ((e = b), (b = 'all'));
          for (
            var k = 0;
            k < B.length &&
            ((g = 1 < (l = B[k].split('+')).length ? c(q, l) : []),
            (a = '*' === (a = l[l.length - 1]) ? '*' : y(a)),
            b || (b = f()),
            r[a]);
            k++
          )
            for (var m = 0; m < r[a].length; m++) {
              var h = r[a][m];
              var n;
              if (!(n = (e && h.method !== e) || h.scope !== b)) {
                n = h.mods;
                h = n.length < g.length ? g : n;
                n = n.length < g.length ? n : g;
                for (var p = !0, E = 0; E < h.length; E++) ~n.indexOf(h[E]) || (p = !1);
                n = !p;
              }
              n || (r[a][m] = {});
            }
        },
      };
      for (var x in k) Object.prototype.hasOwnProperty.call(k, x) && (m[x] = k[x]);
      if ('undefined' != typeof window) {
        var A = window.hotkeys;
        m.noConflict = function (a) {
          return a && window.hotkeys === m && (window.hotkeys = A), m;
        };
        window.hotkeys = m;
      }
      return m;
    });
    'he' == g
      ? ((C = '\x3c!--\n'),
        (C +=
          '/* * * * * * * * * * * * * * * * * * * *\n* \u05e0\u05d2\u05d9\u05e9 \u05dc\u05d9 - \u05ea\u05d5\u05e1\u05e3 \u05e0\u05d2\u05d9\u05e9\u05d5\u05ea \u05d1\u05d7\u05d9\u05e0\u05dd\n* \u05e4\u05d5\u05ea\u05d7 \u05e2\u05dc \u05d9\u05d3\u05d9 \u05dc\u05d5\u05e7\u05dc\u05d9\u05d9\u05d6* (c) 2016-' +
          commons.currentYear +
          '\n* http://www.nagish.li\n* * * * * * * * * * * * * * * * * * * */\n'))
      : ((C = '\x3c!--\n'),
        (C +=
          '/* * * * * * * * * * * * * * * * * * * *\n* NagishLi - Free accessibility plugin\n* Developed by Localize* (c) 2016-' +
          commons.currentYear +
          '\n* http://www.nagish.li\n* * * * * * * * * * * * * * * * * * * */\n'));
    C += '--\x3e';
    d = '<nagishli id="NagishLiTag" lang="' + g + '">';
    d += '<div id="NagishLiBar">';
    d += '<div id="NagishLiBarStrip" tabindex="1">';
    d +=
      '<span id="NagishLiLogo" alt="' +
      phrases.logo_alt +
      '" style="background: ' +
      icons.logo +
      '; display: inline-block !important; vertical-align: ' +
      ('he' == g ? 'middle' : 'top') +
      ' !important;" aria-hidden="true"></span><span id="NagishLiTitle">' +
      phrases.a11y_title +
      '</span>' +
      (H
        ? ''
        : '<span id="NagishLiToggleMenus" class="expand-all" tabindex="6" aria-label="' +
          phrases.expand_all +
          '" style="background: ' +
          icons.toggle_all +
          ';"></span>');
    d +=
      '<span id="NagishLiMove" style="height: 21px !important; width: 21px !important; vertical-align: middle !important; float: ' +
      phrases.align_left +
      ' !important; margin-' +
      phrases.align_right +
      ': 10px !important;">';
    d =
      'he' == g
        ? d +
          ('<span id="NagishLiMoveTL" alt="" aria-label="' +
            phrases.move_tl +
            '" style="background-image: url(\'' +
            icons.TL_pos +
            '\');" tabindex="3" data-balloon="' +
            phrases.move_tl +
            '" data-balloon-pos="' +
            phrases.align_right +
            '"></span><span id="NagishLiMoveTR" alt="" aria-label="' +
            phrases.move_tr +
            '" style="background-image: url(\'' +
            icons.TR_pos +
            '\');" tabindex="2" data-balloon="' +
            phrases.move_tr +
            '" data-balloon-pos="' +
            phrases.align_right +
            '"></span><span id="NagishLiMoveBL" alt="" aria-label="' +
            phrases.move_bl +
            '" style="background-image: url(\'' +
            icons.BL_pos +
            '\');" tabindex="5" data-balloon="' +
            phrases.move_bl +
            '" data-balloon-pos="' +
            phrases.align_right +
            '"></span><span id="NagishLiMoveBR" alt="" aria-label="' +
            phrases.move_br +
            '" style="background-image: url(\'' +
            icons.BR_pos +
            '\');" tabindex="4" data-balloon="' +
            phrases.move_br +
            '" data-balloon-pos="' +
            phrases.align_right +
            '"></span>')
        : d +
          ('<span id="NagishLiMoveTR" alt="' +
            phrases.move_tr +
            '" aria-label="' +
            phrases.move_tr +
            '" style="background-image: url(\'' +
            icons.TR_pos +
            '\');" tabindex="3" data-balloon="' +
            phrases.move_tr +
            '" data-balloon-pos="' +
            phrases.align_right +
            '"></span><span id="NagishLiMoveTL" alt="' +
            phrases.move_tl +
            '" aria-label="' +
            phrases.move_tl +
            '" style="background-image: url(\'' +
            icons.TL_pos +
            '\');" tabindex="2" data-balloon="' +
            phrases.move_tl +
            '" data-balloon-pos="' +
            phrases.align_right +
            '"></span><span id="NagishLiMoveBR" alt="' +
            phrases.move_br +
            '" aria-label="' +
            phrases.move_br +
            '" style="background-image: url(\'' +
            icons.BR_pos +
            '\');" tabindex="5" data-balloon="' +
            phrases.move_br +
            '" data-balloon-pos="' +
            phrases.align_right +
            '"></span><span id="NagishLiMoveBL" alt="' +
            phrases.move_bl +
            '" aria-label="' +
            phrases.move_bl +
            '" style="background-image: url(\'' +
            icons.BL_pos +
            '\');" tabindex="4" data-balloon="' +
            phrases.move_bl +
            '" data-balloon-pos="' +
            phrases.align_right +
            '"></span></span>');
    d += '</span>';
    d += '</div>';
    d += '<ul id="NagishLiMenus" class="' + P + '">';
    d += '<li class="nl-dropdown">';
    d +=
      '<div class="nl-dropdown-toggle" tabindex="10"><span class="nl-dropdown-title">' +
      phrases.settings +
      '</span><span class="nagishli-sr-only" aria-live="assertive" aria-hidden="true">' +
      phrases.aria_toggle_open_alt +
      phrases.settings +
      '</span></div>';
    d += '<ul id="NagishLiInfo" class="nl-dropdown-menu">';
    d +=
      '<li><div id="NagishLiStatement" tabindex="11"><span class="help" data-balloon="' +
      phrases.a11y_info_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
      phrases.a11y_info_exp +
      '</span><span class="nagishli-option-title">' +
      phrases.a11y_info +
      '</span></div></li>';
    d +=
      '<li><div id="NagishLiHowAccessible" tabindex="12"><span class="help" data-balloon="' +
      phrases.how_accessible_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
      phrases.how_accessible_exp +
      '</span><span class="nagishli-option-title">' +
      phrases.how_accessible +
      '</span></div></li>';
    d +=
      '<li><div id="NagishLiKeyboardShortcutsInfo" tabindex="12"><span class="help" data-balloon="' +
      phrases.kbshortcuts_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
      phrases.kbshortcuts_exp +
      '</span><span class="nagishli-option-title">' +
      phrases.kbshortcuts +
      '</span></div></li>';
    d +=
      '<li class="not-clickable"><div tabindex="13" data-balloon-length="large" data-balloon="' +
      phrases.supported_browsers_exp +
      '" data-balloon-pos="up"><span id="NagishLiSupportedBrowsers">' +
      phrases.supported_browsers +
      ':<span aria-label="' +
      phrases.chrome +
      '" style="background: ' +
      icons.chrome +
      ';"></span><span aria-label="' +
      phrases.edge +
      '" style="background: ' +
      icons.edge +
      ';"></span><span aria-label="' +
      phrases.firefox +
      '" style="background: ' +
      icons.firefox +
      ';"></span><span aria-label="' +
      phrases.opera +
      '" style="background: ' +
      icons.opera +
      ';"></span><span aria-label="' +
      phrases.explorer +
      '" style="background: ' +
      icons.explorer +
      ';"></span></span></div></li>';
    d += '<li id="NagishLiHelp">';
    d += '<div id="NLToggleHelp" tabindex="14">';
    d +=
      '<span class="nagishli-sr-only" aria-hidden="true">' +
      phrases.help_exp +
      '</span><span class="nagishli-option-title">' +
      phrases.help +
      '</span>';
    d += '</div>';
    d += '</li>';
    A &&
      ((d += '<li>'),
      (d +=
        '<div id="NLResetSettings" tabindex="15"><span class="help" data-balloon="' +
        phrases.reset_settings_exp +
        '" aria-hidden="true">' +
        commons.help +
        '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
        phrases.reset_settings_exp +
        '</span><span class="nagishli-option-title">' +
        phrases.reset_settings +
        '</span></div>'),
      (d += '</li>'));
    if ('0' == O || ('' != Q && D != oa))
      (d += '<li id="NagishLiDeveloper" class="not-clickable">'),
        (d += '<div>'),
        (d +=
          '<a href="http://www.nagish.li" target="_blank" style="border-bottom: 1px dashed !important;" title="' +
          phrases.branding_exp +
          '" tabindex="16">' +
          phrases.branding +
          '</a> ' +
          phrases.developed_by +
          ' <a href="http://www.localize.co.il" target="_blank" title="' +
          phrases.developer_exp +
          '" tabindex="16">' +
          phrases.developer +
          '<sup style="font-size: 65% !important;" aria-hidden="true">&#x2731;</sup></a>'),
        (d +=
          '<a href="' +
          phrases.developed_in_link +
          '" target="_blank" id="NLDevelopedIn" data-balloon="' +
          phrases.developed_in +
          '" data-balloon-pos="' +
          phrases.align_right +
          '" tabindex="16"><span aria-hidden="true" style="background: ' +
          icons.sod +
          '; display: inline-block !important;"></a>'),
        (d += '</div>'),
        (d += '</li>');
    d += '</ul>';
    d += '</li>';
    d += '<li class="nl-dropdown">';
    d +=
      '<div class="nl-dropdown-toggle" tabindex="20"><span class="nl-dropdown-title">' +
      phrases.text_size +
      '</span><span id="NLTextVal" aria-live="assertive" role="status"></span><span class="nagishli-sr-only" aria-live="assertive" aria-hidden="true">' +
      phrases.aria_toggle_open_alt +
      phrases.text_size +
      '</span></div>';
    d += '<ul id="NagishLiText" class="nl-dropdown-menu">';
    d += '<li>';
    d +=
      '<div id="NLBiggerText" tabindex="21"><span class="help" data-balloon="' +
      phrases.larger_text_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
      phrases.larger_text_exp +
      '</span><span class="nagishli-option-title">' +
      phrases.larger_text +
      '</span></div>';
    d += '</li>';
    d += '<li>';
    d +=
      '<div id="NLSmallerText" tabindex="22"><span class="help" data-balloon="' +
      phrases.smaller_text_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
      phrases.smaller_text_exp +
      '</span><span class="nagishli-option-title">' +
      phrases.smaller_text +
      '</span></div>';
    d += '</li>';
    d += '<li>';
    d +=
      '<div id="NLNormalText" tabindex="23">' +
      commons.checkmark +
      phrases.normal +
      '</div>';
    d += '</li>';
    d += '</ul>';
    d += '</li>';
    d += '<li class="nl-dropdown">';
    d +=
      '<div class="nl-dropdown-toggle" tabindex="30"><span class="nl-dropdown-title">' +
      phrases.colors +
      '</span><span class="nagishli-sr-only" aria-live="assertive" aria-hidden="true">' +
      phrases.aria_toggle_open_alt +
      phrases.colors +
      '</span></div>';
    d += '<ul id="NagishLiColors" class="nl-dropdown-menu">';
    qa ||
      ((d += '<li>'),
      (d +=
        '<div id="NLGrayscaleColors" tabindex="31"><span class="help" data-balloon="' +
        phrases.blind_exp +
        '" aria-hidden="true">' +
        commons.help +
        '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
        phrases.blind_exp +
        '</span><span class="nagishli-option-title">' +
        phrases.blind +
        '</span></div>'),
      (d += '</li>'),
      (d += '<li>'),
      (d +=
        '<div id="NLInvertColors" tabindex="32"><span class="help" data-balloon="' +
        phrases.impaired_exp +
        '" aria-hidden="true">' +
        commons.help +
        '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
        phrases.impaired_exp +
        '</span><span class="nagishli-option-title">' +
        phrases.impaired +
        '</span></div>'),
      (d += '</li>'),
      (d += '<li>'),
      (d +=
        '<div id="NLWarmColors" tabindex="33"><span class="help" data-balloon="' +
        phrases.bl_filter_exp +
        '" aria-hidden="true">' +
        commons.help +
        '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
        phrases.bl_filter_exp +
        '</span><span class="notice" data-balloon="' +
        phrases.experimental_feat +
        '" aria-hidden="true">' +
        commons.warning +
        '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
        phrases.experimental_feat +
        '</span><span class="nagishli-option-title">' +
        phrases.bl_filter +
        '</span></div>'),
      (d += '</li>'),
      (d += '<li>'),
      (d +=
        '<div id="NLColdColors" tabindex="34"><span class="help" data-balloon="' +
        phrases.lc_filter_exp +
        '" aria-hidden="true">' +
        commons.help +
        '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
        phrases.lc_filter_exp +
        '</span><span class="notice" data-balloon="' +
        phrases.experimental_feat +
        '" aria-hidden="true">' +
        commons.warning +
        '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
        phrases.experimental_feat +
        '</span><span class="nagishli-option-title">' +
        phrases.lc_filter +
        '</span></div>'),
      (d += '</li>'),
      (d += '<li>'),
      (d +=
        '<div id="NLSaturateColors" tabindex="35"><span class="help" data-balloon="' +
        phrases.saturated_exp +
        '" aria-hidden="true">' +
        commons.help +
        '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
        phrases.saturated_exp +
        '</span><span class="notice" data-balloon="' +
        phrases.experimental_feat +
        '" aria-hidden="true">' +
        commons.warning +
        '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
        phrases.experimental_feat +
        '</span><span class="nagishli-option-title">' +
        phrases.saturated +
        '</span></div>'),
      (d += '</li>'));
    if (null != a('body').css('background-color') || null != a('body').css('color'))
      (d += '<li class="not-clickable">'),
        (d +=
          '<div id="NLCustomColors"><span class="help" data-balloon="' +
          phrases.custom_colors_exp +
          '" tabindex="35">' +
          commons.help +
          '&nbsp;</span><span class="nagishli-option-title">' +
          phrases.custom_colors +
          '</span>:&nbsp;' +
          (null != a('body').css('background-color') &&
          'rgba(0, 0, 0, 0)' != a('body').css('background-color')
            ? '<span id="NLCustomColorsBG" tabindex="35"><span id="NLCurrentBG" style="display: none;"></span>' +
              phrases.bg +
              '</span>&nbsp;'
            : '') +
          (null != a('body').css('color') && 'rgba(0, 0, 0, 0)' != a('body').css('color')
            ? '<span id="NLCustomColorsTXT" tabindex="35"><span id="NLCurrentTXT" style="display: none;"></span>' +
              phrases.txt +
              '</span></div>'
            : '')),
        (d += '</li>');
    d += '<li class="active">';
    d +=
      '<div id="NLNormalColors" tabindex="35">' +
      commons.checkmark +
      '<span class="nagishli-option-title">' +
      phrases.normal_plu +
      '</span></div>';
    d += '</li>';
    d += '</ul>';
    d += '</li>';
    d += '<li class="nl-dropdown">';
    d +=
      '<div class="nl-dropdown-toggle" tabindex="40"><span class="nl-dropdown-title">' +
      phrases.display +
      '</span><span class="nagishli-sr-only" aria-live="assertive" aria-hidden="true">' +
      phrases.aria_toggle_open_alt +
      phrases.display +
      '</span></div>';
    d += '<ul id="NagishLiDisplay" class="nl-dropdown-menu">';
    d += '<li>';
    d +=
      '<div id="NLTextDisplay" tabindex="41"><span class="help" data-balloon="' +
      phrases.text_only_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
      phrases.text_only_exp +
      '</span><span class="nagishli-option-title">' +
      phrases.text_only +
      '</span></div>';
    d += '</li>';
    d += '<li>';
    d +=
      '<div id="NLImagesDisplay" tabindex="42"><span class="help" data-balloon="' +
      phrases.images_only_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
      phrases.images_only_exp +
      '</span><span class="nagishli-option-title">' +
      phrases.images_only +
      '</span></div>';
    d += '</li>';
    d += '<li class="active">';
    d +=
      '<div id="NLNormalDisplay" tabindex="43">' +
      commons.checkmark +
      '<span class="nagishli-option-title">' +
      phrases.normal_display +
      '</span></div>';
    d += '</li>';
    d += '</ul>';
    d += '</li>';
    d += '<li class="nl-dropdown">';
    d +=
      '<div class="nl-dropdown-toggle" tabindex="50"><span class="nl-dropdown-title">' +
      phrases.highlight +
      '</span><span class="nagishli-sr-only" aria-live="assertive" aria-hidden="true">' +
      phrases.aria_toggle_open_alt +
      phrases.highlight +
      '</span></div>';
    d += '<ul id="NagishLiHighlight" class="nl-dropdown-menu">';
    d += '<li>';
    d +=
      '<div id="NLHighlightLinks" tabindex="51"><span class="help" data-balloon="' +
      phrases.hl_links_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
      phrases.hl_links_exp +
      '</span><span class="nagishli-option-title">' +
      phrases.hl_links +
      '</span></div>';
    d += '</li>';
    d += '<li>';
    d +=
      '<div id="NLHighlightHeadings" tabindex="52"><span class="help" data-balloon="' +
      phrases.hl_headings_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span><span class="nagishli-sr-only" aria-hidden="true">' +
      phrases.hl_headings_exp +
      '</span><span class="nagishli-option-title">' +
      phrases.hl_headings +
      '</span></div>';
    d += '</li>';
    d += '</ul>';
    d += '</li>';
    d += '<li class="nl-dropdown">';
    d +=
      '<div class="nl-dropdown-toggle" tabindex="60"><span class="nl-dropdown-title">' +
      phrases.misc +
      '</span><span class="nagishli-sr-only" aria-live="assertive" aria-hidden="true">' +
      phrases.aria_toggle_open_alt +
      phrases.misc +
      '</span></div>';
    d += '<ul id="NagishLiMisc" class="nl-dropdown-menu">';
    d += '<li class="not-clickable">';
    d +=
      '<div id="NLSkipLinks"><span class="help" data-balloon="' +
      phrases.skiplinks_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span><span class="notice" data-balloon="' +
      phrases.experimental_feat +
      '" aria-hidden="true">' +
      commons.warning +
      '&nbsp;</span><label for="NLSkipLinksVal">' +
      phrases.skiplinks +
      ':</label>&nbsp;';
    d +=
      '<select id="NLSkipLinksVal" tabindex="61"><option aria-hidden="true" value="none" disabled selected>' +
      phrases.skiplinks_default +
      '</option><optgroup label="' +
      phrases.skiplinks_page_nav +
      '"><option value="top">' +
      phrases.skiplinks_to_top +
      '</option><option value="menu">' +
      phrases.skiplinks_to_menu +
      '</option><option value="header">' +
      phrases.skiplinks_to_header +
      '</option><option value="paragraph">' +
      phrases.skiplinks_to_paragraph +
      '</option><option value="content">' +
      phrases.skiplinks_to_content +
      '</option><option value="bottom">' +
      phrases.skiplinks_to_bottom +
      '</option></optgroup><optgroup label="' +
      phrases.skiplinks_site_nav +
      '"><option value="home">' +
      phrases.skiplinks_to_home +
      '</option></optgroup></select>';
    d += '</li>';
    d += '<li class="not-clickable">';
    d +=
      '<div id="NLZoom"><span class="help" data-balloon="' +
      phrases.zoom_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span>' +
      phrases.zoom +
      ':&nbsp;<span id="NLZoomVal" aria-live="assertive"></span><span id="NLZoomIn" tabindex="63"><span aria-hidden="true">&#x2795;&#xfe0e;</span><span class="nagishli-sr-only">' +
      phrases.zoom_in +
      '</span></span>&nbsp;&nbsp;<span id="NLZoomOut" tabindex="63"><span aria-hidden="true">&#x2796;&#xfe0e;</span><span class="nagishli-sr-only">' +
      phrases.zoom_out +
      '</span></span>&nbsp;&nbsp;<span id="NLNormalZoom" tabindex="63"><span class="nagishli-sr-only">' +
      phrases.zoom +
      ' </span>' +
      phrases.normal +
      '</span></div>';
    d += '</li>';
    d += '<li>';
    d +=
      '<div id="NLFont" tabindex="64"><span class="help" data-balloon="' +
      phrases.font_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span>' +
      phrases.font +
      ':&nbsp;<span id="NLFontVal" aria-live="assertive">' +
      phrases.normal +
      '</span></div>';
    d += '</li>';
    d += '<li>';
    d +=
      '<div id="NLAnimations" tabindex="65"><span class="help" data-balloon="' +
      phrases.animations_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span><span class="notice" data-balloon="' +
      phrases.experimental_feat +
      '" aria-hidden="true">' +
      commons.warning +
      '&nbsp;</span>' +
      phrases.animations +
      ':&nbsp;<span id="NLAnimationsVal" aria-live="assertive"><span aria-hidden="true">&#x25ba;&#xfe0e;&nbsp;</span>' +
      phrases.animations_on +
      '</span></div>';
    d += '</li>';
    d += '<li>';
    d +=
      '<div id="NLR2M" tabindex="67"><span class="help" data-balloon="' +
      phrases.r2m_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span><span class="notice" data-balloon="' +
      phrases.experimental_feat +
      '" aria-hidden="true">' +
      commons.warning +
      '&nbsp;</span>' +
      phrases.r2m +
      ':&nbsp;<span id="NLR2MVal" aria-live="assertive">' +
      phrases.r2m_off +
      '</span></div>';
    d += '</li>';
    d += '<li class="not-clickable">';
    d +=
      '<div id="NLCursor"><span class="help" data-balloon="' +
      phrases.cursor_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span><span class="notice" data-balloon="' +
      phrases.experimental_feat +
      '" aria-hidden="true">' +
      commons.warning +
      '&nbsp;</span>' +
      phrases.cursor +
      ':&nbsp;<span id="NLCursorBlack" tabindex="68">' +
      phrases.cursor_black +
      '</span>&nbsp;<span id="NLCursorWhite" tabindex="68">' +
      phrases.cursor_white +
      '</span></div>';
    d += '</li>';
    d += '<li>';
    d +=
      '<div id="NLKBNav" tabindex="70"><span class="help" data-balloon="' +
      phrases.kbnav_exp +
      '" aria-hidden="true">' +
      commons.help +
      '&nbsp;</span><span class="notice" data-balloon="' +
      phrases.experimental_feat +
      '" aria-hidden="true">' +
      commons.warning +
      '&nbsp;</span>' +
      phrases.kbnav +
      ':&nbsp;<span id="NLKBNavVal" aria-live="assertive">' +
      phrases.kbnav_off +
      '</span></div>';
    d += '</li>';
    d += '</ul>';
    d += '</li>';
    d += '</ul>';
    d += '</div>';
    d += '</nagishli>';
    e = '<style type="text/css" id="NagishLiStyle">';
    e +=
      '* nagishli#NagishLiTag * { font-family: Arial, Helvetica, sans-serif !important; font-size: 18px !important; line-height: ' +
      (G ? '2.5vh' : '1.15') +
      ' !important; -ms-text-size-adjust: 100% !important; -webkit-text-size-adjust: 100% !important; box-sizing: border-box !important; z-index: 9999998 !important; -webkit-user-select: none !important; -khtml-user-select: none !important; -o-user-select: none !important; -moz-user-select: none !important; user-select: none !important; backface-visibility: hidden !important; color: inherit !important; -webkit-animation: none !important; animation: none !important; transition-property: none !important; vertical-align: baseline !important; font-weight: bold !important; outline: none !important; }';
    e +=
      '* nagishli#NagishLiTag select { font-family: inherit !important; font-size: 100% !important; margin: 0 !important; line-height: 1.15 !important; height: auto !important; background: transparent !important; padding: 0 !important; text-overflow: ellipsis !important; border: 2px solid #6f6f6f !important; border-radius: 0 !important; width: auto !important; display: inline-block !important; }';
    e +=
      '* nagishli#NagishLiTag select optgroup { color: white !important; background: black !important; }';
    e +=
      '* nagishli#NagishLiTag select option { color: #6f6f6f !important; background: #EEE !important; }';
    e += '* nagishli#NagishLiTag label { display: inline-block !important; }';
    G &&
      (e +=
        '* nagishli#NagishLiTag .NagishLiOverlay * { line-height: 1.15 !important; }');
    e +=
      '* nagishli[lang=\'he\'] #NagishLiLogo { -moz-transform:scaleX(-1) !important;-o-transform:scaleX(-1) !important;-webkit-transform:scaleX(-1) !important;transform:scaleX(-1) !important;filter:FlipH !important;-ms-filter:"FlipH" !important; }';
    e +=
      '* nagishli#NagishLiTag a { color: inherit !important; text-decoration: none !important; cursor: pointer !important; border: 0 !important; }';
    e +=
      '* nagishli#NagishLiTag a:hover, * nagishli#NagishLiTag a:active { outline-width: 0 !important; }';
    e +=
      '* nagishli#NagishLiTag sub, * nagishli#NagishLiTag sup { font-size: 75% !important; line-height: 0 !important; position: relative !important; vertical-align: baseline !important; }';
    e += '* nagishli#NagishLiTag sub { bottom: -0.25em !important; }';
    e += '* nagishli#NagishLiTag sup { top: -0.5em !important; }';
    e +=
      '* nagishli#NagishLiTag #NagishLiOverlayContent > .NagishLiStatementText > ul { display: block !important; list-style-type: disc !important; margin: 1em 0 !important; padding-' +
      phrases.align_right +
      ': 40px !important; }';
    e += '* nagishli#NagishLiTag li { margin: 0 !important; padding: 0 !important; }';
    e +=
      'nagishli#NagishLiTag, nagishli#NagishLiTag:before, nagishli#NagishLiTag:after { box-sizing: border-box !important; }';
    e +=
      commons.menus +
      ' { list-style: none !important; display: none; padding: 0 !important; margin: 0 !important; width: 100% !important; min-width: 345px !important; max-height: ' +
      (a(window).height() - 41) +
      'px; overflow-x: hidden !important; height: 100%; }';
    H && (e += commons.menus + ' { overflow: hidden !important; }');
    e +=
      commons.bar +
      ' { position: fixed !important; direction: ' +
      phrases.dir +
      '; text-align: ' +
      phrases.align_right +
      ' !important; ' +
      positions[N.toUpperCase()] +
      ' }';
    e +=
      commons.dd +
      ' > .nl-dropdown-toggle { cursor: pointer !important; position: relative !important; display: block !important; color: white !important; text-shadow: 0 0 1px #000 !important; padding: 15px !important; }';
    e +=
      commons.bar +
      ' > #NagishLiBarStrip { display: inline-block; color: white !important; cursor: pointer !important; background: #000000 !important; box-shadow: -1px -1px 0 #404040 inset, -1px -1px 0 #404040 !important; text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.3) !important; padding: 10px !important; }';
    e += commons.bar + ' > #NagishLiBarStrip.open { display: block; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-menu > li > div { border-right: 2px solid !important; border-left: 2px solid !important; }';
    e +=
      commons.dd +
      ':last-child > .nl-dropdown-menu > li:last-child > div { border-bottom: 2px solid !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-toggle > .selected:before {content: ": " !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-menu { display: none; list-style: none !important; padding: 0 !important; margin: 0 !important; position: relative !important; float: none !important; border: 0 !important; border-radius: 0 !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-menu > li { position: relative !important; text-align: ' +
      phrases.align_right +
      ' !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-menu > li > div { display: block !important; color: #6f6f6f !important; background: #EEE !important; box-shadow: 0 1px 0 white inset, 0 -1px 0 #d5d5d5 inset !important; text-shadow: 0 -1px 0 rgba(255, 255, 255, 0.3) !important; padding: 15px !important; cursor: pointer !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-menu > li > div:hover { background: #f6f6f6 !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-menu > li.not-clickable > div { cursor: default !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-menu > li.not-clickable > div:hover { background: #EEE !important; }';
    e += commons.dd + ' > .nl-dropdown-menu.show { display: block !important; }';
    e +=
      commons.bar +
      ' > #NagishLiBarStrip > .expand-all, ' +
      commons.bar +
      ' > #NagishLiBarStrip > .collapse-all, ' +
      commons.dd +
      ' > .nl-dropdown-toggle > .nl-dropdown-arrow { display: none; position: absolute !important; }';
    e +=
      commons.bar +
      ' > #NagishLiBarStrip.open > .expand-all, ' +
      commons.bar +
      ' > #NagishLiBarStrip.open > .collapse-all, ' +
      commons.dd +
      ' > .nl-dropdown-toggle > .nl-dropdown-arrow { display: inline-block !important; ' +
      phrases.align_left +
      ': 15px !important; }';
    e +=
      commons.bar +
      ' > #NagishLiBarStrip > .collapse-all, ' +
      commons.dd +
      ' > .nl-dropdown-toggle.open > .nl-dropdown-arrow { -moz-transform: scaleY(-1) !important; -o-transform: scaleY(-1) !important; -webkit-transform: scaleY(-1); transform: scaleY(-1) !important; filter: FlipV !important; -ms-filter: "FlipV" !important; }';
    e += commons.bar + ' > #NagishLiBarStrip > .collapse-all { top: 9px !important; }';
    e += commons.bar + ' > #NagishLiBarStrip > .expand-all { top: 13px !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-menu > li > div > .help, ' +
      commons.dd +
      ' > .nl-dropdown-menu > li > div > .notice { display: none; cursor: help !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-toggle > .nl-dropdown-arrow { top: 20px !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-menu > li > div, ' +
      commons.dd +
      ':last-child > .nl-dropdown-menu > li:last-child > div, ' +
      commons.menus +
      '.blue > .nl-dropdown > .nl-dropdown-menu > li > div, ' +
      commons.menus +
      '.blue > .nl-dropdown:last-child > .nl-dropdown-menu > li:last-child > div { border-color: #5478E4 !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-toggle, ' +
      commons.menus +
      '.blue > .nl-dropdown > .nl-dropdown-toggle { background: #4169E1 !important; box-shadow: 0 1px 0 #5478E4 inset, 0 -1px 0 #3A5ECA inset !important; }';
    e +=
      commons.menus +
      '::-webkit-scrollbar-thumb, ' +
      commons.menus +
      '.blue::-webkit-scrollbar-thumb, #NagishLiOverlayContent::-webkit-scrollbar-thumb, #NagishLiOverlayContent.blue::-webkit-scrollbar-thumb { background: #4169E1 !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-toggle:hover, ' +
      commons.menus +
      '.blue > .nl-dropdown > .nl-dropdown-toggle:hover, ' +
      commons.menus +
      '::-webkit-scrollbar-thumb:active, ' +
      commons.menus +
      '.blue::-webkit-scrollbar-thumb:active, #NagishLiOverlayContent::-webkit-scrollbar-thumb:active, #NagishLiOverlayContent.blue::-webkit-scrollbar-thumb:active { background: #5478E4 !important; }';
    e +=
      commons.menus +
      ', ' +
      commons.menus +
      '.blue, #NagishLiOverlayContent, #NagishLiOverlayContent.blue { scrollbar-color: #4169E1 #EEE !important; scrollbar-face-color: #4169E1 !important; scrollbar-arrow-color: #4169E1 !important; scrollbar-track-color: #EEE !important; scrollbar-shadow-color: #FFF !important; scrollbar-highlight-color: #FFF !important; scrollbar-3dlight-color: #FFF !important; scrollbar-darkshadow-color: #FFF !important; }';
    e +=
      commons.menus +
      '::-webkit-scrollbar, #NagishLiOverlayContent::-webkit-scrollbar { width: 12px !important; } ' +
      commons.menus +
      '::-webkit-scrollbar-track, #NagishLiOverlayContent::-webkit-scrollbar-track { background: #EEE !important; } ' +
      commons.menus +
      '::-webkit-scrollbar-thumb, #NagishLiOverlayContent::-webkit-scrollbar-thumb { border-radius: 10px !important; border: 2px solid #FFF !important; }';
    e +=
      commons.menus +
      '.red > .nl-dropdown > .nl-dropdown-menu > li > div, ' +
      commons.menus +
      '.red > .nl-dropdown:last-child > .nl-dropdown-menu > li:last-child > div { border-color: #EB2B36 !important; }';
    e +=
      commons.menus +
      '.red > .nl-dropdown > .nl-dropdown-toggle { background: #E50000 !important; box-shadow: 0 1px 0 #E71919 inset, 0 -1px 0 #CE0000 inset !important; }';
    e +=
      commons.menus +
      '.red::-webkit-scrollbar-thumb, #NagishLiOverlayContent.red::-webkit-scrollbar-thumb { background: #E50000 !important; }';
    e +=
      commons.menus +
      '.red > .nl-dropdown > .nl-dropdown-toggle:hover, ' +
      commons.menus +
      '.red::-webkit-scrollbar-thumb:active, #NagishLiOverlayContent.red::-webkit-scrollbar-thumb:active { background: #EB2B36 !important; }';
    e +=
      commons.menus +
      '.red, #NagishLiOverlayContent.red { scrollbar-color: #E50000 #EEE !important; scrollbar-face-color: #E50000 !important; scrollbar-arrow-color: #E50000 !important; }';
    e +=
      commons.menus +
      '.green > .nl-dropdown > .nl-dropdown-menu > li > div, ' +
      commons.menus +
      '.green > .nl-dropdown:last-child > .nl-dropdown-menu > li:last-child > div { border-color: #365E1B !important; }';
    e +=
      commons.menus +
      '.green > .nl-dropdown > .nl-dropdown-toggle { background: #204D02 !important; box-shadow: 0 1px 0 #365E1B inset, 0 -1px 0 #1C4501 inset !important; }';
    e +=
      commons.menus +
      '.green::-webkit-scrollbar-thumb, #NagishLiOverlayContent.green::-webkit-scrollbar-thumb { background: #204D02 !important; }';
    e +=
      commons.menus +
      '.green > .nl-dropdown > .nl-dropdown-toggle:hover, ' +
      commons.menus +
      '.green::-webkit-scrollbar-thumb:active, #NagishLiOverlayContent.green::-webkit-scrollbar-thumb:active { background: #365E1B !important; }';
    e +=
      commons.menus +
      '.green, #NagishLiOverlayContent.green { scrollbar-color: #204D02 #EEE !important; scrollbar-face-color: #204D02 !important; scrollbar-arrow-color: #204D02 !important; }';
    e +=
      commons.menus +
      '.purple > .nl-dropdown > .nl-dropdown-menu > li > div, ' +
      commons.menus +
      '.purple > .nl-dropdown:last-child > .nl-dropdown-menu > li:last-child > div { border-color: #8562B1 !important; }';
    e +=
      commons.menus +
      '.purple > .nl-dropdown > .nl-dropdown-toggle { background: #7851A9 !important; box-shadow: 0 1px 0 #8562B1 inset, 0 -1px 0 #6C4898 inset !important; }';
    e +=
      commons.menus +
      '.purple::-webkit-scrollbar-thumb, #NagishLiOverlayContent.purple::-webkit-scrollbar-thumb { background: #7851A9 !important; }';
    e +=
      commons.menus +
      '.purple > .nl-dropdown > .nl-dropdown-toggle:hover, ' +
      commons.menus +
      '.purple::-webkit-scrollbar-thumb:active, #NagishLiOverlayContent.purple::-webkit-scrollbar-thumb:active { background: #8562B1 !important; }';
    e +=
      commons.menus +
      '.purple, #NagishLiOverlayContent.purple { scrollbar-color: #7851A9 #EEE !important; scrollbar-face-color: #7851A9 !important; scrollbar-arrow-color: #7851A9 !important; }';
    e +=
      commons.menus +
      '.yellow > .nl-dropdown > .nl-dropdown-menu > li > div, ' +
      commons.menus +
      '.yellow > .nl-dropdown:last-child > .nl-dropdown-menu > li:last-child > div { border-color: #EDCA19 !important; }';
    e +=
      commons.menus +
      '.yellow > .nl-dropdown > .nl-dropdown-toggle { background: #E5C100 !important; box-shadow: 0 1px 0 #EDCA19 inset, 0 -1px 0 #D5B516 inset !important; }';
    e +=
      commons.menus +
      '.yellow::-webkit-scrollbar-thumb, #NagishLiOverlayContent.yellow::-webkit-scrollbar-thumb { background: #E5C100 !important; }';
    e +=
      commons.menus +
      '.yellow > .nl-dropdown > .nl-dropdown-toggle:hover, ' +
      commons.menus +
      '.yellow::-webkit-scrollbar-thumb:active, #NagishLiOverlayContent.yellow::-webkit-scrollbar-thumb:active { background: #EDCA19 !important; }';
    e +=
      commons.menus +
      '.yellow, #NagishLiOverlayContent.yellow { scrollbar-color: #E5C100 #EEE !important; scrollbar-face-color: #E5C100 !important; scrollbar-arrow-color: #E5C100 !important; }';
    e +=
      commons.menus +
      '.pink > .nl-dropdown > .nl-dropdown-menu > li > div, ' +
      commons.menus +
      '.pink > .nl-dropdown:last-child > .nl-dropdown-menu > li:last-child > div { border-color: #FF69B4 !important; }';
    e +=
      commons.menus +
      '.pink > .nl-dropdown > .nl-dropdown-toggle { background: #FF69B4 !important; box-shadow: 0 1px 0 #FF78BB inset, 0 -1px 0 #E55EA2 inset !important; }';
    e +=
      commons.menus +
      '.pink::-webkit-scrollbar-thumb, #NagishLiOverlayContent.pink::-webkit-scrollbar-thumb { background: #FF69B4 !important; }';
    e +=
      commons.menus +
      '.pink > .nl-dropdown > .nl-dropdown-toggle:hover, ' +
      commons.menus +
      '.pink::-webkit-scrollbar-thumb:active, #NagishLiOverlayContent.pink::-webkit-scrollbar-thumb:active { background: #FF78BB !important; }';
    e +=
      commons.menus +
      '.pink, #NagishLiOverlayContent.pink { scrollbar-color: #FF69B4 #EEE !important; scrollbar-face-color: #FF69B4 !important; scrollbar-arrow-color: #FF69B4 !important; }';
    e +=
      commons.menus +
      '.gray > .nl-dropdown > .nl-dropdown-menu > li > div, ' +
      commons.menus +
      '.gray > .nl-dropdown:last-child > .nl-dropdown-menu > li:last-child > div { border-color: #778899 !important; }';
    e +=
      commons.menus +
      '.gray > .nl-dropdown > .nl-dropdown-toggle { background: #778899 !important; box-shadow: 0 1px 0 #8493A3 inset, 0 -1px 0 #6B7A89 inset !important; }';
    e +=
      commons.menus +
      '.gray::-webkit-scrollbar-thumb, #NagishLiOverlayContent.gray::-webkit-scrollbar-thumb { background: #778899 !important; }';
    e +=
      commons.menus +
      '.gray > .nl-dropdown > .nl-dropdown-toggle:hover, ' +
      commons.menus +
      '.gray::-webkit-scrollbar-thumb:active, #NagishLiOverlayContent.gray::-webkit-scrollbar-thumb:active { background: #8493A3 !important; }';
    e +=
      commons.menus +
      '.gray, #NagishLiOverlayContent.gray { scrollbar-color: #778899 #EEE !important; scrollbar-face-color: #778899 !important; scrollbar-arrow-color: #778899 !important; }';
    e +=
      commons.menus +
      '.brown > .nl-dropdown > .nl-dropdown-menu > li > div, ' +
      commons.menus +
      '.brown > .nl-dropdown:last-child > .nl-dropdown-menu > li:last-child > div { border-color: #A0522D !important; }';
    e +=
      commons.menus +
      '.brown > .nl-dropdown > .nl-dropdown-toggle { background: #A0522D !important; box-shadow: 0 1px 0 #A96342 inset, 0 -1px 0 #904928 inset !important; }';
    e +=
      commons.menus +
      '.brown::-webkit-scrollbar-thumb, #NagishLiOverlayContent.brown::-webkit-scrollbar-thumb { background: #A0522D !important; }';
    e +=
      commons.menus +
      '.brown > .nl-dropdown > .nl-dropdown-toggle:hover, ' +
      commons.menus +
      '.brown::-webkit-scrollbar-thumb:active, #NagishLiOverlayContent.brown::-webkit-scrollbar-thumb:active { background: #A96342 !important; }';
    e +=
      commons.menus +
      '.brown, #NagishLiOverlayContent.brown { scrollbar-color: #A0522D #EEE !important; scrollbar-face-color: #A0522D !important; scrollbar-arrow-color: #A0522D !important; }';
    e +=
      commons.menus +
      '.orange > .nl-dropdown > .nl-dropdown-menu > li > div, ' +
      commons.menus +
      '.orange > .nl-dropdown:last-child > .nl-dropdown-menu > li:last-child > div { border-color: #FF8C00 !important; }';
    e +=
      commons.menus +
      '.orange > .nl-dropdown > .nl-dropdown-toggle { background: #FF8C00 !important; box-shadow: 0 1px 0 #FF9719 inset, 0 -1px 0 #E57E00 inset !important; }';
    e +=
      commons.menus +
      '.orange::-webkit-scrollbar-thumb, #NagishLiOverlayContent.orange::-webkit-scrollbar-thumb { background: #FF8C00 !important; }';
    e +=
      commons.menus +
      '.orange > .nl-dropdown > .nl-dropdown-toggle:hover, ' +
      commons.menus +
      '.orange::-webkit-scrollbar-thumb:active, #NagishLiOverlayContent.orange::-webkit-scrollbar-thumb:active { background: #FF9719 !important; }';
    e +=
      commons.menus +
      '.orange, #NagishLiOverlayContent.orange { scrollbar-color: #FF8C00 #EEE !important; scrollbar-face-color: #FF8C00 !important; scrollbar-arrow-color: #FF8C00 !important; }';
    e +=
      commons.menus +
      '.turquoise > .nl-dropdown > .nl-dropdown-menu > li > div, ' +
      commons.menus +
      '.turquoise > .nl-dropdown:last-child > .nl-dropdown-menu > li:last-child > div { border-color: #20B2AA !important; }';
    e +=
      commons.menus +
      '.turquoise > .nl-dropdown > .nl-dropdown-toggle { background: #20B2AA !important; box-shadow: 0 1px 0 #36B9B2 inset, 0 -1px 0 #1CA099 inset !important; }';
    e +=
      commons.menus +
      '.turquoise::-webkit-scrollbar-thumb, #NagishLiOverlayContent.turquoise::-webkit-scrollbar-thumb { background: #20B2AA !important; }';
    e +=
      commons.menus +
      '.turquoise > .nl-dropdown > .nl-dropdown-toggle:hover, ' +
      commons.menus +
      '.turquoise::-webkit-scrollbar-thumb:active, #NagishLiOverlayContent.turquoise::-webkit-scrollbar-thumb:active { background: #36B9B2 !important; }';
    e +=
      commons.menus +
      '.turquoise, #NagishLiOverlayContent.turquoise { scrollbar-color: #20B2AA #EEE !important; scrollbar-face-color: #20B2AA !important; scrollbar-arrow-color: #20B2AA !important; }';
    e +=
      commons.menus +
      '.black > .nl-dropdown > .nl-dropdown-menu > li > div, ' +
      commons.menus +
      '.black > .nl-dropdown:last-child > .nl-dropdown-menu > li:last-child > div { border-color: #0C0C0C !important; }';
    e +=
      commons.menus +
      '.black > .nl-dropdown > .nl-dropdown-toggle { background: #0C0C0C !important; box-shadow: 0 1px 0 #242424 inset, 0 -1px 0 #0A0A0A inset !important; }';
    e +=
      commons.menus +
      '.black::-webkit-scrollbar-thumb, #NagishLiOverlayContent.black::-webkit-scrollbar-thumb { background: #0C0C0C !important; }';
    e +=
      commons.menus +
      '.black > .nl-dropdown > .nl-dropdown-toggle:hover, ' +
      commons.menus +
      '.black::-webkit-scrollbar-thumb:active, #NagishLiOverlayContent.black::-webkit-scrollbar-thumb:active { background: #242424 !important; }';
    e +=
      commons.menus +
      '.black, #NagishLiOverlayContent.black { scrollbar-color: #0C0C0C #EEE !important; scrollbar-face-color: #0C0C0C !important; scrollbar-arrow-color: #0C0C0C !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-menu > li > div > #NagishLiSupportedBrowsers > span { vertical-align: middle !important; margin: 0 2px !important; display: inline-block !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-menu > li > div > #NagishLiSupportedBrowsers > span:first-child, ' +
      commons.dd +
      ' > .nl-dropdown-menu > li > div > #NagishLiSupportedBrowsers > span:last-child { margin-' +
      phrases.align_right +
      ': 4px !important; margin-' +
      phrases.align_left +
      ': 0 !important; }';
    e +=
      commons.dd +
      ' > .nl-dropdown-menu > li > div > #NLDevelopedIn { display: inline-block !important; position: absolute !important; ' +
      phrases.align_left +
      ': 10px !important; top: 12px !important; }';
    H
      ? ((e +=
          commons.bar +
          ' > #NagishLiBarStrip.open > #NagishLiMove { margin-' +
          phrases.align_left +
          ': 0 !important; }'),
        (e +=
          commons.bar +
          ' > #NagishLiBarStrip > #NagishLiMove { margin-' +
          phrases.align_right +
          ': 10px !important; }'))
      : (e +=
          commons.bar +
          ' > #NagishLiBarStrip.open > #NagishLiMove { margin-' +
          phrases.align_left +
          ': 30px !important; }');
    na &&
      ((e +=
        commons.bar +
        ' > #NagishLiBarStrip > #NagishLiTitle, ' +
        commons.bar +
        ' > #NagishLiBarStrip > #NagishLiMove, ' +
        commons.bar +
        ' > #NagishLiBarStrip > #NagishLiToggleMenus  { display: none !important; }'),
      (e +=
        commons.bar +
        ' > #NagishLiBarStrip.open > #NagishLiTitle, ' +
        commons.bar +
        ' > #NagishLiBarStrip.open > #NagishLiMove, ' +
        commons.bar +
        ' > #NagishLiBarStrip.open > #NagishLiToggleMenus { display: inline-block !important; }'),
      (e +=
        commons.bar +
        ' > #NagishLiBarStrip > #NagishLiLogo { width: 25px !important; height: 25px !important; margin-' +
        phrases.align_right +
        ': 7px !important; }'),
      (e +=
        commons.bar +
        ' > #NagishLiBarStrip.open > #NagishLiLogo { width: 21px !important; height: 21px !important; margin-' +
        phrases.align_right +
        ': 0 !important; }'));
    e +=
      '.nagishli-sr-only { border: 0 !important; clip: rect(1px, 1px, 1px, 1px) !important; -webkit-clip-path: inset(50%) !important; clip-path: inset(50%) !important; height: 1px !important; margin: -1px !important; overflow: hidden !important; padding: 0 !important; position: absolute !important; width: 1px !important; white-space: nowrap !important;}';
    e +=
      '.nagishli-sr-only-focusable:focus, .nagishli-sr-only-focusable:active { clip: auto !important; -webkit-clip-path: none !important; clip-path: none !important; height: auto !important; margin: auto !important; overflow: visible !important; width: auto !important; white-space: normal !important;}';
    G ||
      ((e +=
        'button[data-balloon]{overflow:visible}[data-balloon]{position:relative;cursor:pointer}[data-balloon]:after{filter:alpha(opacity=0);-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";-moz-opacity:0;-khtml-opacity:0;opacity:0;pointer-events:none;-webkit-transition:all 0.18s ease-out 0.18s;-moz-transition:all 0.18s ease-out 0.18s;-ms-transition:all 0.18s ease-out 0.18s;-o-transition:all 0.18s ease-out 0.18s;transition:all 0.18s ease-out 0.18s;font-family:sans-serif !important;font-weight:normal !important;font-style:normal !important;text-shadow:none !important;font-size:12px !important;background:rgba(17,17,17,0.9);border-radius:4px;color:#fff;content:attr(data-balloon);padding:.5em 1em;position:absolute;white-space:nowrap;z-index:10}[data-balloon]:before{background:no-repeat url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba(17,17,17,0.9)%22%20transform%3D%22rotate(0)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E");background-size:100% auto;width:18px;height:6px;filter:alpha(opacity=0);-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";-moz-opacity:0;-khtml-opacity:0;opacity:0;pointer-events:none;-webkit-transition:all 0.18s ease-out 0.18s;-moz-transition:all 0.18s ease-out 0.18s;-ms-transition:all 0.18s ease-out 0.18s;-o-transition:all 0.18s ease-out 0.18s;transition:all 0.18s ease-out 0.18s;content:"";position:absolute;z-index:10}[data-balloon]:hover:before,[data-balloon]:hover:after,[data-balloon][data-balloon-visible]:before,[data-balloon][data-balloon-visible]:after{filter:alpha(opacity=100);-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";-moz-opacity:1;-khtml-opacity:1;opacity:1;pointer-events:auto}[data-balloon].font-awesome:after{font-family:FontAwesome}[data-balloon][data-balloon-break]:after{white-space:pre}[data-balloon][data-balloon-blunt]:before,[data-balloon][data-balloon-blunt]:after{-webkit-transition:none;-moz-transition:none;-ms-transition:none;-o-transition:none;transition:none}[data-balloon][data-balloon-pos="up"]:after{bottom:100%;left:50%;margin-bottom:11px;-webkit-transform:translate(-50%, 10px);-moz-transform:translate(-50%, 10px);-ms-transform:translate(-50%, 10px);transform:translate(-50%, 10px);-webkit-transform-origin:top;-moz-transform-origin:top;-ms-transform-origin:top;transform-origin:top}[data-balloon][data-balloon-pos="up"]:before{bottom:100%;left:50%;margin-bottom:5px;-webkit-transform:translate(-50%, 10px);-moz-transform:translate(-50%, 10px);-ms-transform:translate(-50%, 10px);transform:translate(-50%, 10px);-webkit-transform-origin:top;-moz-transform-origin:top;-ms-transform-origin:top;transform-origin:top}[data-balloon][data-balloon-pos="up"]:hover:after,[data-balloon][data-balloon-pos="up"][data-balloon-visible]:after{-webkit-transform:translate(-50%, 0);-moz-transform:translate(-50%, 0);-ms-transform:translate(-50%, 0);transform:translate(-50%, 0)}[data-balloon][data-balloon-pos="up"]:hover:before,[data-balloon][data-balloon-pos="up"][data-balloon-visible]:before{-webkit-transform:translate(-50%, 0);-moz-transform:translate(-50%, 0);-ms-transform:translate(-50%, 0);transform:translate(-50%, 0)}[data-balloon][data-balloon-pos="up-left"]:after{bottom:100%;left:0;margin-bottom:11px;-webkit-transform:translate(0, 10px);-moz-transform:translate(0, 10px);-ms-transform:translate(0, 10px);transform:translate(0, 10px);-webkit-transform-origin:top;-moz-transform-origin:top;-ms-transform-origin:top;transform-origin:top}[data-balloon][data-balloon-pos="up-left"]:before{bottom:100%;left:5px;margin-bottom:5px;-webkit-transform:translate(0, 10px);-moz-transform:translate(0, 10px);-ms-transform:translate(0, 10px);transform:translate(0, 10px);-webkit-transform-origin:top;-moz-transform-origin:top;-ms-transform-origin:top;transform-origin:top}[data-balloon][data-balloon-pos="up-left"]:hover:after,[data-balloon][data-balloon-pos="up-left"][data-balloon-visible]:after{-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-ms-transform:translate(0, 0);transform:translate(0, 0)}[data-balloon][data-balloon-pos="up-left"]:hover:before,[data-balloon][data-balloon-pos="up-left"][data-balloon-visible]:before{-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-ms-transform:translate(0, 0);transform:translate(0, 0)}[data-balloon][data-balloon-pos="up-right"]:after{bottom:100%;right:0;margin-bottom:11px;-webkit-transform:translate(0, 10px);-moz-transform:translate(0, 10px);-ms-transform:translate(0, 10px);transform:translate(0, 10px);-webkit-transform-origin:top;-moz-transform-origin:top;-ms-transform-origin:top;transform-origin:top}[data-balloon][data-balloon-pos="up-right"]:before{bottom:100%;right:5px;margin-bottom:5px;-webkit-transform:translate(0, 10px);-moz-transform:translate(0, 10px);-ms-transform:translate(0, 10px);transform:translate(0, 10px);-webkit-transform-origin:top;-moz-transform-origin:top;-ms-transform-origin:top;transform-origin:top}[data-balloon][data-balloon-pos="up-right"]:hover:after,[data-balloon][data-balloon-pos="up-right"][data-balloon-visible]:after{-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-ms-transform:translate(0, 0);transform:translate(0, 0)}[data-balloon][data-balloon-pos="up-right"]:hover:before,[data-balloon][data-balloon-pos="up-right"][data-balloon-visible]:before{-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-ms-transform:translate(0, 0);transform:translate(0, 0)}[data-balloon][data-balloon-pos="down"]:after{left:50%;margin-top:11px;top:100%;-webkit-transform:translate(-50%, -10px);-moz-transform:translate(-50%, -10px);-ms-transform:translate(-50%, -10px);transform:translate(-50%, -10px)}[data-balloon][data-balloon-pos="down"]:before{background:no-repeat url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba(17,17,17,0.9)%22%20transform%3D%22rotate(180 18 6)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E");background-size:100% auto;width:18px;height:6px;left:50%;margin-top:5px;top:100%;-webkit-transform:translate(-50%, -10px);-moz-transform:translate(-50%, -10px);-ms-transform:translate(-50%, -10px);transform:translate(-50%, -10px)}[data-balloon][data-balloon-pos="down"]:hover:after,[data-balloon][data-balloon-pos="down"][data-balloon-visible]:after{-webkit-transform:translate(-50%, 0);-moz-transform:translate(-50%, 0);-ms-transform:translate(-50%, 0);transform:translate(-50%, 0)}[data-balloon][data-balloon-pos="down"]:hover:before,[data-balloon][data-balloon-pos="down"][data-balloon-visible]:before{-webkit-transform:translate(-50%, 0);-moz-transform:translate(-50%, 0);-ms-transform:translate(-50%, 0);transform:translate(-50%, 0)}[data-balloon][data-balloon-pos="down-left"]:after{left:0;margin-top:11px;top:100%;-webkit-transform:translate(0, -10px);-moz-transform:translate(0, -10px);-ms-transform:translate(0, -10px);transform:translate(0, -10px)}[data-balloon][data-balloon-pos="down-left"]:before{background:no-repeat url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba(17,17,17,0.9)%22%20transform%3D%22rotate(180 18 6)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E");background-size:100% auto;width:18px;height:6px;left:5px;margin-top:5px;top:100%;-webkit-transform:translate(0, -10px);-moz-transform:translate(0, -10px);-ms-transform:translate(0, -10px);transform:translate(0, -10px)}[data-balloon][data-balloon-pos="down-left"]:hover:after,[data-balloon][data-balloon-pos="down-left"][data-balloon-visible]:after{-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-ms-transform:translate(0, 0);transform:translate(0, 0)}[data-balloon][data-balloon-pos="down-left"]:hover:before,[data-balloon][data-balloon-pos="down-left"][data-balloon-visible]:before{-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-ms-transform:translate(0, 0);transform:translate(0, 0)}[data-balloon][data-balloon-pos="down-right"]:after{right:0;margin-top:11px;top:100%;-webkit-transform:translate(0, -10px);-moz-transform:translate(0, -10px);-ms-transform:translate(0, -10px);transform:translate(0, -10px)}[data-balloon][data-balloon-pos="down-right"]:before{background:no-repeat url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2236px%22%20height%3D%2212px%22%3E%3Cpath%20fill%3D%22rgba(17,17,17,0.9)%22%20transform%3D%22rotate(180 18 6)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E");background-size:100% auto;width:18px;height:6px;right:5px;margin-top:5px;top:100%;-webkit-transform:translate(0, -10px);-moz-transform:translate(0, -10px);-ms-transform:translate(0, -10px);transform:translate(0, -10px)}[data-balloon][data-balloon-pos="down-right"]:hover:after,[data-balloon][data-balloon-pos="down-right"][data-balloon-visible]:after{-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-ms-transform:translate(0, 0);transform:translate(0, 0)}[data-balloon][data-balloon-pos="down-right"]:hover:before,[data-balloon][data-balloon-pos="down-right"][data-balloon-visible]:before{-webkit-transform:translate(0, 0);-moz-transform:translate(0, 0);-ms-transform:translate(0, 0);transform:translate(0, 0)}[data-balloon][data-balloon-pos="left"]:after{margin-right:11px;right:100%;top:50%;-webkit-transform:translate(10px, -50%);-moz-transform:translate(10px, -50%);-ms-transform:translate(10px, -50%);transform:translate(10px, -50%)}[data-balloon][data-balloon-pos="left"]:before{background:no-repeat url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba(17,17,17,0.9)%22%20transform%3D%22rotate(-90 18 18)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E");background-size:100% auto;width:6px;height:18px;margin-right:5px;right:100%;top:50%;-webkit-transform:translate(10px, -50%);-moz-transform:translate(10px, -50%);-ms-transform:translate(10px, -50%);transform:translate(10px, -50%)}[data-balloon][data-balloon-pos="left"]:hover:after,[data-balloon][data-balloon-pos="left"][data-balloon-visible]:after{-webkit-transform:translate(0, -50%);-moz-transform:translate(0, -50%);-ms-transform:translate(0, -50%);transform:translate(0, -50%)}[data-balloon][data-balloon-pos="left"]:hover:before,[data-balloon][data-balloon-pos="left"][data-balloon-visible]:before{-webkit-transform:translate(0, -50%);-moz-transform:translate(0, -50%);-ms-transform:translate(0, -50%);transform:translate(0, -50%)}[data-balloon][data-balloon-pos="right"]:after{left:100%;margin-left:11px;top:50%;-webkit-transform:translate(-10px, -50%);-moz-transform:translate(-10px, -50%);-ms-transform:translate(-10px, -50%);transform:translate(-10px, -50%)}[data-balloon][data-balloon-pos="right"]:before{background:no-repeat url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20width%3D%2212px%22%20height%3D%2236px%22%3E%3Cpath%20fill%3D%22rgba(17,17,17,0.9)%22%20transform%3D%22rotate(90 6 6)%22%20d%3D%22M2.658,0.000%20C-13.615,0.000%2050.938,0.000%2034.662,0.000%20C28.662,0.000%2023.035,12.002%2018.660,12.002%20C14.285,12.002%208.594,0.000%202.658,0.000%20Z%22/%3E%3C/svg%3E");background-size:100% auto;width:6px;height:18px;left:100%;margin-left:5px;top:50%;-webkit-transform:translate(-10px, -50%);-moz-transform:translate(-10px, -50%);-ms-transform:translate(-10px, -50%);transform:translate(-10px, -50%)}[data-balloon][data-balloon-pos="right"]:hover:after,[data-balloon][data-balloon-pos="right"][data-balloon-visible]:after{-webkit-transform:translate(0, -50%);-moz-transform:translate(0, -50%);-ms-transform:translate(0, -50%);transform:translate(0, -50%)}[data-balloon][data-balloon-pos="right"]:hover:before,[data-balloon][data-balloon-pos="right"][data-balloon-visible]:before{-webkit-transform:translate(0, -50%);-moz-transform:translate(0, -50%);-ms-transform:translate(0, -50%);transform:translate(0, -50%)}[data-balloon][data-balloon-length="small"]:after{white-space:normal;width:80px}[data-balloon][data-balloon-length="medium"]:after{white-space:normal;width:150px}[data-balloon][data-balloon-length="large"]:after{white-space:normal;width:260px}[data-balloon][data-balloon-length="xlarge"]:after{white-space:normal;width:380px}@media screen and (max-width: 768px){[data-balloon][data-balloon-length="xlarge"]:after{white-space:normal;width:90vw}}[data-balloon][data-balloon-length="fit"]:after{white-space:normal;width:100%}'),
      (e +=
        commons.dd +
        ' > .nl-dropdown-menu > li > div > .notice { z-index: 9999997 !important; }'),
      (e +=
        '* nagishli#NagishLiTag *[data-balloon]:before, * nagishli#NagishLiTag *[data-balloon]:after, body span.r2m[data-balloon]:before, body span.r2m[data-balloon]:after { -webkit-transition: none !important; -moz-transition: none !important; -ms-transition: none !important; -o-transition: none !important; transition: none !important; font-weight: bold !important;}'));
    e +=
      'nagishli#NagishLiTag > .NagishLiOverlay { position: fixed !important; top: 0 !important; ' +
      phrases.align_left +
      ': 0 !important; width: 100% !important; height: 100% !important; background: rgba(0, 0, 0, 0.7) repeat !important; text-align: center !important; z-index: 9999999 !important; opacity: 1; }';
    e +=
      'nagishli#NagishLiTag > .NagishLiOverlay #closeBtn { position: absolute !important; ' +
      phrases.align_left +
      ': 1% !important; top: 2% !important; font-size: 120% !important; cursor: pointer !important; }';
    e +=
      '.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.bounceIn,.animated.bounceOut{-webkit-animation-duration:.75s;animation-duration:.75s}@-webkit-keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.bounceIn{-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}.bounceOut{-webkit-animation-name:bounceOut;animation-name:bounceOut}';
    e +=
      commons.dd +
      ' > #NagishLiMisc > li > #NLZoom > span:not(#NLZoomVal), #NagishLiMisc > li > #NLCursor > span, ' +
      commons.dd +
      ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsBG, ' +
      commons.dd +
      ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsTXT { cursor: pointer !important; }';
    e +=
      'html[nl-cursor="white"] * { cursor: url(' +
      icons.white_cursor +
      ') 0 0, auto !important; }';
    e +=
      'html[nl-cursor="white"] * a:hover, html[nl-cursor="white"] * a:focus, html[nl-cursor="white"] * a:active, html[nl-cursor="white"] * a:visited { cursor: url(' +
      icons.white_pointer +
      ') 18 0, auto !important; }';
    e +=
      'html[nl-cursor="black"] * { cursor: url(' +
      icons.black_cursor +
      ') 0 0, auto !important; }';
    e +=
      'html[nl-cursor="black"] * a:hover, html[nl-cursor="black"] * a:focus, html[nl-cursor="black"] * a:active, html[nl-cursor="black"] * a:visited { cursor: url(' +
      icons.black_pointer +
      ') 18 0, auto !important; }';
    e +=
      commons.dd +
      ' > #NagishLiColors > li > #NLCustomColors > ul > li { display: inline-block !important; vertical-align: middle !important; width: 20px !important; height: 20px !important; cursor: pointer !important; margin: 5px !important; border: 1px solid black !important; }';
    e +=
      commons.dd +
      ' > #NagishLiColors > li > #NLCustomColors > ul > li:hover, ' +
      commons.dd +
      ' > #NagishLiColors > li > #NLCustomColors > ul > li.selected { border-color: white !important; }';
    e +=
      commons.dd +
      ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsBG > #NLCurrentBG, ' +
      commons.dd +
      ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsTXT > #NLCurrentTXT { width: 16px !important; height: 16px !important; vertical-align: middle !important; border: 1px solid black !important; margin-' +
      phrases.align_left +
      ': 5px !important; background-color: transparent; }';
    e += '</style>';
    a('body').append(C, e, d);
    a('video, audio').attr('nl-role', 'media');
    a("iframe[src*='youtube.com']").attr('nl-role', 'ytmedia');
    a(commons.dd + ' > #NagishLiColors > li > #NLGrayscaleColors').click(function () {
      m();
    });
    a(commons.dd + ' > #NagishLiColors > li > #NLInvertColors').click(function () {
      k();
    });
    a(commons.dd + ' > #NagishLiColors > li > #NLWarmColors').click(function () {
      u('warm');
    });
    a(commons.dd + ' > #NagishLiColors > li > #NLColdColors').click(function () {
      u('cold');
    });
    a(commons.dd + ' > #NagishLiColors > li > #NLSaturateColors').click(function () {
      p();
    });
    a(commons.dd + ' > #NagishLiColors > li > #NLNormalColors').click(function () {
      z();
    });
    a(commons.dd + ' > #NagishLiText > li > #NLBiggerText').click(function () {
      R();
    });
    a(commons.dd + ' > #NagishLiText > li > #NLSmallerText').click(function () {
      S();
    });
    a(commons.dd + ' > #NagishLiText > li > #NLNormalText').click(function () {
      I();
    });
    a(commons.dd + ' > #NagishLiDisplay > li > #NLTextDisplay').click(function () {
      Y();
    });
    a(commons.dd + ' > #NagishLiDisplay > li > #NLImagesDisplay').click(function () {
      aa();
    });
    a(commons.dd + ' > #NagishLiDisplay > li > #NLNormalDisplay').click(function () {
      ba();
    });
    a(commons.dd + ' > #NagishLiHighlight > li > #NLHighlightLinks').click(function () {
      T();
    });
    a(commons.dd + ' > #NagishLiHighlight > li > #NLHighlightHeadings').click(
      function () {
        U();
      },
    );
    a(commons.dd + ' > #NagishLiMisc > li > #NLZoom > #NLZoomIn').click(function () {
      ca();
    });
    a(commons.dd + ' > #NagishLiMisc > li > #NLZoom > #NLZoomOut').click(function () {
      da();
    });
    a(commons.dd + ' > #NagishLiMisc > li > #NLZoom > #NLNormalZoom').click(function () {
      ea();
    });
    a(commons.dd + ' > #NagishLiMisc > li > #NLFont').click(function () {
      fa();
    });
    a(commons.bar + ' > #NagishLiBarStrip > #NagishLiMove > #NagishLiMoveTL').click(
      function () {
        y('TL');
      },
    );
    a(commons.bar + ' > #NagishLiBarStrip > #NagishLiMove > #NagishLiMoveBR').click(
      function () {
        y('BR');
      },
    );
    a(commons.bar + ' > #NagishLiBarStrip > #NagishLiMove > #NagishLiMoveBL').click(
      function () {
        y('BL');
      },
    );
    a(commons.bar + ' > #NagishLiBarStrip > #NagishLiMove > #NagishLiMoveTR').click(
      function () {
        y('TR');
      },
    );
    if (A) {
      var la = function (b) {
        if ((b = confirm(phrases.reset_prompt)))
          return (
            f('delete'),
            a(commons.bar).css({ 'max-height': '', 'overflow-y': '' }),
            a(
              commons.bar +
                ' > #NagishLiBarStrip > #NagishLiToggleMenus, ' +
                commons.bar +
                ' > #NagishLiBarStrip > #NagishLiMove',
            ).remove(),
            a(commons.bar + ' > #NagishLiBarStrip').addClass('open'),
            a(commons.menus).show(),
            a(commons.menus).html(
              '<li class="nl-dropdown"><ul class="nl-dropdown-menu show"><li class="not-clickable"><div>' +
                phrases.settings_reset_html_ok +
                '</div></li></ul></li>',
            ),
            alert(phrases.settings_reset_alert_ok),
            a(commons.menus + ' a').focus(),
            !1
          );
        alert(phrases.settings_save);
      };
      a(commons.dd + ' > #NagishLiInfo > li > #NLResetSettings').click(function () {
        la();
      });
      hotkeys('alt+c, shift+c', function (a) {
        la();
        a.preventDefault();
      });
    }
    a(commons.dd + ' > #NagishLiMisc > li > #NLAnimations').click(function () {
      ha();
    });
    a(commons.dd + ' > #NagishLiInfo > #NagishLiHelp').click(function () {
      V();
    });
    hotkeys(
      'alt+z, alt+x, alt+v, alt+b, shift+z, shift+x, shift+a, shift+s, shift+q, shift+w, shift+e, shift+d, shift+f',
      function (b, c) {
        if ('alt+z' == c.key || 'shift+z' == c.key) {
          if (!a('#NagishLiOverlayContent').length) {
            if (a(commons.menus).is(':visible')) {
              a(commons.menus).slideUp(150, function () {
                a(commons.bar + ' > #NagishLiBarStrip').removeClass('open');
              });
              var d = 'closed';
            } else
              a(commons.bar + ' > #NagishLiBarStrip')
                .addClass('open')
                .next('#NagishLiMenus')
                .slideDown(150),
                (d = 'open');
            f('change', 'menu', d);
          }
        } else
          'alt+x' == c.key || 'shift+x' == c.key
            ? V()
            : 'alt+v' == c.key || 'alt+b' == c.key
              ? window.scrollTo(
                  0,
                  'alt+v' == c.key
                    ? 0
                    : (document.scrollingElement || document.body).scrollHeight,
                )
              : 'shift+a' == c.key
                ? R()
                : 'shift+s' == c.key
                  ? S()
                  : 'shift+q' == c.key
                    ? (m(),
                      a(
                        commons.dd +
                          ' > #NagishLiColors > li > #NLGrayscaleColors > .sign',
                      ).length
                        ? (a(
                            commons.dd +
                              ' > #NagishLiColors > li > #NLGrayscaleColors > .sign',
                          ).remove(),
                          a(commons.dd + ' > #NagishLiColors > li.active').removeClass(
                            'active',
                          ),
                          a(commons.dd + ' > #NagishLiColors > li > #NLNormalColors')
                            .addClass('active')
                            .prepend(commons.checkmark),
                          a(commons.dd + ' > #NagishLiColors')
                            .prev('div.nl-dropdown-toggle')
                            .children('.selected')
                            .remove())
                        : (a(commons.dd + ' > #NagishLiColors > li > #NLGrayscaleColors')
                            .attr(
                              'aria-label',
                              phrases.aria_the_option +
                                phrases.blind +
                                ' ' +
                                phrases.r2m_on,
                            )
                            .prepend(commons.checkmark)
                            .parent('li')
                            .addClass('active')
                            .siblings('li')
                            .removeClass('active')
                            .find('span.sign')
                            .remove(),
                          a(commons.dd + ' > #NagishLiColors')
                            .prev('div.nl-dropdown-toggle')
                            .hasClass('open') ||
                            a(commons.dd + ' > #NagishLiColors')
                              .prev('div.nl-dropdown-toggle')
                              .children('.selected').length ||
                            a(
                              '<span class="selected">' + phrases.blind + '</span>',
                            ).insertAfter(
                              a(commons.dd + ' > #NagishLiColors')
                                .prev('div', '.nl-dropdown-toggle')
                                .children('.nl-dropdown-title'),
                            )))
                    : 'shift+w' == c.key
                      ? (k(),
                        a(
                          commons.dd +
                            ' > #NagishLiColors > li > #NLInvertColors > .sign',
                        ).length
                          ? (a(
                              commons.dd +
                                ' > #NagishLiColors > li > #NLInvertColors > .sign',
                            ).remove(),
                            a(commons.dd + ' > #NagishLiColors > li.active').removeClass(
                              'active',
                            ),
                            a(commons.dd + ' > #NagishLiColors > li > #NLNormalColors')
                              .addClass('active')
                              .prepend(commons.checkmark),
                            a(commons.dd + ' > #NagishLiColors')
                              .prev('div.nl-dropdown-toggle')
                              .children('.selected')
                              .remove())
                          : (a(commons.dd + ' > #NagishLiColors > li > #NLInvertColors')
                              .attr(
                                'aria-label',
                                phrases.aria_the_option +
                                  phrases.impaired +
                                  ' ' +
                                  phrases.r2m_on,
                              )
                              .prepend(commons.checkmark)
                              .parent('li')
                              .addClass('active')
                              .siblings('li')
                              .removeClass('active')
                              .find('span.sign')
                              .remove(),
                            a(commons.dd + ' > #NagishLiColors')
                              .prev('div.nl-dropdown-toggle')
                              .hasClass('open') ||
                              a(commons.dd + ' > #NagishLiColors')
                                .prev('div.nl-dropdown-toggle')
                                .children('.selected').length ||
                              a(
                                '<span class="selected">' + phrases.impaired + '</span>',
                              ).insertAfter(
                                a(commons.dd + ' > #NagishLiColors')
                                  .prev('div', '.nl-dropdown-toggle')
                                  .children('.nl-dropdown-title'),
                              )))
                      : 'shift+e' == c.key
                        ? (p(),
                          a(
                            commons.dd +
                              ' > #NagishLiColors > li > #NLSaturateColors > .sign',
                          ).length
                            ? (a(
                                commons.dd +
                                  ' > #NagishLiColors > li > #NLSaturateColors > .sign',
                              ).remove(),
                              a(
                                commons.dd + ' > #NagishLiColors > li.active',
                              ).removeClass('active'),
                              a(commons.dd + ' > #NagishLiColors > li > #NLNormalColors')
                                .addClass('active')
                                .prepend(commons.checkmark),
                              a(commons.dd + ' > #NagishLiColors')
                                .prev('div.nl-dropdown-toggle')
                                .children('.selected')
                                .remove())
                            : (a(
                                commons.dd +
                                  ' > #NagishLiColors > li > #NLSaturateColors',
                              )
                                .attr(
                                  'aria-label',
                                  phrases.aria_the_option +
                                    phrases.saturated +
                                    ' ' +
                                    phrases.r2m_on,
                                )
                                .prepend(commons.checkmark)
                                .parent('li')
                                .addClass('active')
                                .siblings('li')
                                .removeClass('active')
                                .find('span.sign')
                                .remove(),
                              a(commons.dd + ' > #NagishLiColors')
                                .prev('div.nl-dropdown-toggle')
                                .hasClass('open') ||
                                a(commons.dd + ' > #NagishLiColors')
                                  .prev('div.nl-dropdown-toggle')
                                  .children('.selected').length ||
                                a(
                                  '<span class="selected">' +
                                    phrases.saturated +
                                    '</span>',
                                ).insertAfter(
                                  a(commons.dd + ' > #NagishLiColors')
                                    .prev('div', '.nl-dropdown-toggle')
                                    .children('.nl-dropdown-title'),
                                )))
                        : 'shift+d' == c.key
                          ? (T(),
                            a(
                              commons.dd +
                                ' > #NagishLiHighlight > li > #NLHighlightLinks > .sign',
                            ).length
                              ? (a(
                                  commons.dd +
                                    ' > #NagishLiHighlight > li > #NLHighlightLinks > .sign',
                                ).remove(),
                                a(
                                  commons.dd + ' > #NagishLiHighlight > li.active',
                                ).removeClass('active'),
                                a(commons.dd + ' > #NagishLiHighlight')
                                  .prev('div.nl-dropdown-toggle')
                                  .children('.selected')
                                  .remove())
                              : (a(
                                  commons.dd +
                                    ' > #NagishLiHighlight > li > #NLHighlightLinks',
                                )
                                  .attr(
                                    'aria-label',
                                    phrases.aria_the_option +
                                      phrases.hl_links +
                                      ' ' +
                                      phrases.r2m_on,
                                  )
                                  .prepend(commons.checkmark)
                                  .parent('li')
                                  .addClass('active')
                                  .siblings('li')
                                  .removeClass('active')
                                  .find('span.sign')
                                  .remove(),
                                a(commons.dd + ' > #NagishLiHighlight')
                                  .prev('div.nl-dropdown-toggle')
                                  .hasClass('open') ||
                                  a(commons.dd + ' > #NagishLiHighlight')
                                    .prev('div.nl-dropdown-toggle')
                                    .children('.selected').length ||
                                  a(
                                    '<span class="selected">' +
                                      phrases.hl_links +
                                      '</span>',
                                  ).insertAfter(
                                    a(commons.dd + ' > #NagishLiHighlight')
                                      .prev('div', '.nl-dropdown-toggle')
                                      .children('.nl-dropdown-title'),
                                  )))
                          : 'shift+f' == c.key &&
                            (U(),
                            a(
                              commons.dd +
                                ' > #NagishLiHighlight > li > #NLHighlightHeadings > .sign',
                            ).length
                              ? (a(
                                  commons.dd +
                                    ' > #NagishLiHighlight > li > #NLHighlightHeadings > .sign',
                                ).remove(),
                                a(
                                  commons.dd + ' > #NagishLiHighlight > li.active',
                                ).removeClass('active'),
                                a(commons.dd + ' > #NagishLiHighlight')
                                  .prev('div.nl-dropdown-toggle')
                                  .children('.selected')
                                  .remove())
                              : (a(
                                  commons.dd +
                                    ' > #NagishLiHighlight > li > #NLHighlightHeadings',
                                )
                                  .attr(
                                    'aria-label',
                                    phrases.aria_the_option +
                                      phrases.hl_headings +
                                      ' ' +
                                      phrases.r2m_on,
                                  )
                                  .prepend(commons.checkmark)
                                  .parent('li')
                                  .addClass('active')
                                  .siblings('li')
                                  .removeClass('active')
                                  .find('span.sign')
                                  .remove(),
                                a(commons.dd + ' > #NagishLiHighlight')
                                  .prev('div.nl-dropdown-toggle')
                                  .hasClass('open') ||
                                  a(commons.dd + ' > #NagishLiHighlight')
                                    .prev('div.nl-dropdown-toggle')
                                    .children('.selected').length ||
                                  a(
                                    '<span class="selected">' +
                                      phrases.hl_headings +
                                      '</span>',
                                  ).insertAfter(
                                    a(commons.dd + ' > #NagishLiHighlight')
                                      .prev('div', '.nl-dropdown-toggle')
                                      .children('.nl-dropdown-title'),
                                  )));
        b.preventDefault();
      },
    );
    a(commons.dd + ' > #NagishLiMisc > li > #NLR2M').click(function () {
      ia();
    });
    a(commons.dd + ' > #NagishLiMisc > li > #NLCursor > #NLCursorBlack').click(
      function () {
        L('black');
      },
    );
    a(commons.dd + ' > #NagishLiMisc > li > #NLCursor > #NLCursorWhite').click(
      function () {
        L('white');
      },
    );
    a(commons.dd + ' > #NagishLiMisc > li > #NLKBNav').click(function () {
      ka();
    });
    H ||
      a(commons.dd + ' > .nl-dropdown-toggle').each(function () {
        a(this).append(
          '<span class="nl-dropdown-arrow" aria-hidden="true" aria-label="' +
            phrases.aria_toggle_open_alt +
            a(this).children('.nl-dropdown-title').text() +
            '" style="background: ' +
            icons.toggle_single +
            ';"></span>',
        );
      });
    A
      ? (function () {
          var b = f('read', 'ok'),
            c = f('read', 'colors'),
            d = f('read', 'position'),
            e = f('read', 'text'),
            l = f('read', 'display'),
            h = f('read', 'zoom'),
            q = f('read', 'font'),
            w = f('read', 'highlight', { pos: 0 }),
            x = f('read', 'highlight', { pos: 1 }),
            A = f('read', 'help'),
            C = f('read', 'animations'),
            D = f('read', 'cursor'),
            t = f('read', 'tabbing'),
            r = f('read', 'r2m');
          if (
            '0' == b &&
            (('0' != e && (8 >= parseInt(e) || 35 <= parseInt(e))) ||
              ('0.0' != h && (0.5 >= parseFloat(h) || 2.5 <= parseFloat(h))) ||
              (-1 !== c.indexOf(',') && c.split(',')[0] == c.split(',')[1]))
          ) {
            b = confirm(phrases.settings_prompt);
            if (1 == b)
              return (
                f('delete'),
                a(commons.bar).css({ 'max-height': '', 'overflow-y': '' }),
                a(
                  commons.bar +
                    ' > #NagishLiBarStrip > #NagishLiToggleMenus, ' +
                    commons.bar +
                    ' > #NagishLiBarStrip > #NagishLiMove',
                ).remove(),
                a(commons.bar + ' > #NagishLiBarStrip').addClass('open'),
                a(commons.menus).show(),
                a(commons.menus).html(
                  '<li class="nl-dropdown"><ul class="nl-dropdown-menu show"><li class="not-clickable"><div href="#">' +
                    phrases.settings_reset_html_ok +
                    '</div></li></ul></li>',
                ),
                alert(phrases.settings_reset_alert_ok),
                a(commons.menus + ' a').focus(),
                !1
              );
            0 == b &&
              (f(name, 'write', 'ok', 1, '1'),
              alert(phrases.settings_save + '\n' + phrases.settings_save_reminder));
          }
          'open' == f('read', 'menu')
            ? a('#NagishLiBarStrip').addClass('open').next('#NagishLiMenus').show()
            : a('#NagishLiMenus').hide();
          'TR' == d
            ? y('TR', !0)
            : 'BR' == d
              ? y('BR', !0)
              : 'BL' == d
                ? y('BL', !0)
                : y('TL', !0);
          var n = !0;
          d = f('read', 'submenus');
          b = void 0;
          d = void 0 === d ? '000000' : d;
          b = void 0 === b ? '1' : b;
          if (void 0 === n ? 0 : n)
            for (n = d.length; n--; )
              d[n] == b &&
                (a(commons.dd + ' > .nl-dropdown-toggle')
                  .eq(n)
                  .addClass('open')
                  .next('ul.nl-dropdown-menu')
                  .show()
                  .addClass('show'),
                a(commons.dd + ' > .nl-dropdown-toggle')
                  .eq(n)
                  .children('.nl-dropdown-arrow')
                  .attr(
                    'aria-label',
                    phrases.aria_toggle_close_alt +
                      a(commons.dd + ' > .nl-dropdown-toggle')
                        .eq(n)
                        .children('.nl-dropdown-title')
                        .text(),
                  ));
          else
            for (n = d.length; n--; )
              d[n] == b &&
                (a(commons.dd + ' > .nl-dropdown-toggle')
                  .eq(n)
                  .addClass('open')
                  .next('ul.nl-dropdown-menu')
                  .slideDown('fast')
                  .addClass('show'),
                a(commons.dd + ' > .nl-dropdown-toggle')
                  .eq(n)
                  .children('.nl-dropdown-arrow')
                  .attr(
                    'aria-label',
                    phrases.aria_toggle_close_alt +
                      a(commons.dd + ' > .nl-dropdown-toggle')
                        .eq(n)
                        .children('.nl-dropdown-title')
                        .text(),
                  ));
          ja();
          0 == parseInt(e) ? I() : 0 < parseInt(e) ? R(!0) : S(!0);
          'grayscale' == c
            ? m(!0)
            : 'invert' == c
              ? k(!0)
              : 'warm' == c
                ? u('warm', !0)
                : 'cold' == c
                  ? u('cold', !0)
                  : 'saturate' == c
                    ? p(!0)
                    : -1 !== c.indexOf(',')
                      ? ('-' != c.split(',')[0] && v('bg', W(c.split(',')[0]), !0),
                        '-' != c.split(',')[1] && v('txt', W(c.split(',')[1]), !0))
                      : z();
          'textonly' == l ? Y(!0) : 'imagesonly' == l ? aa(!0) : ba();
          0 < parseFloat(h) ? ca(!0) : 0 > parseFloat(h) ? da(!0) : ea();
          'readable' == q && fa('readable', !0);
          '1' == w && T(!0);
          '1' == x && U(!0);
          !a('ul#NagishLiHighlight')
            .prev('.nl-dropdown-toggle', 'div')
            .hasClass('open') &&
            a('ul#NagishLiHighlight > li.active').length &&
            (1 < a('ul#NagishLiHighlight > li.active').find('span.sign').length
              ? ((c =
                  a('ul#NagishLiHighlight')
                    .children('li.active:first-child')
                    .find('.nagishli-option-title')
                    .text() +
                  ' ' +
                  a('ul#NagishLiHighlight')
                    .children('li.active:nth-child(2)')
                    .find('.nagishli-option-title')
                    .text()),
                (c = c.split(' ')),
                (c[1] = 'en' == g ? c[1].charAt(0).toUpperCase() + c[1].substr(1) : c[1]),
                a(
                  '<span class="selected">' +
                    c[1] +
                    '&nbsp;' +
                    phrases.and +
                    c[3] +
                    '</span>',
                ).insertAfter(
                  a('ul#NagishLiHighlight')
                    .prev('.nl-dropdown-toggle', 'div')
                    .children('.nl-dropdown-title'),
                ))
              : ((c = a('ul#NagishLiHighlight > li.active')
                  .find('.nagishli-option-title')
                  .text()),
                a('<span class="selected">' + c + '</span>').insertAfter(
                  a('ul#NagishLiHighlight')
                    .prev('.nl-dropdown-toggle', 'div')
                    .children('.nl-dropdown-title'),
                )));
          '1' == A && V(!0);
          'off' == C && ha(!0);
          'on' == r && ia(!0);
          'black' == D ? L('black', !0) : 'white' == D && L('white', !0);
          'on' == t && ka(!0);
        })()
      : a(commons.bar + ' > #NagishLiBarStrip > #NagishLiMove > #NagishLiMove' + N).css(
          'visibility',
          'hidden',
        );
    a('body').on('mousedown keypress.nlkbnavclk', function (b) {
      !a(commons.menus).is(':visible') ||
        a(b.target).is(
          '#NagishLiBar, .NagishLiOverlay, a, span[nl-r2m-data], #NLCustomColorsTXT, #NLCustomColorsBG, #NLCloseColorPanel',
        ) ||
        a(b.target).parents('#NagishLiBar, .NagishLiOverlay, a, span[nl-r2m-data]')
          .length ||
        (a(commons.menus).slideUp(150, function () {
          a(commons.bar + ' > #NagishLiBarStrip').removeClass('open');
        }),
        f('change', 'menu', 'closed'));
    });
    a(commons.bar + ' > #NagishLiBarStrip').on(
      'click keypress.nlkbnavclk',
      function (b, c) {
        (1 !== b.which && 13 !== b.which) ||
          a(b.target).parent('span').is('#NagishLiMove') ||
          a(b.target).is('#NagishLiToggleMenus') ||
          (a(commons.menus).is(':visible')
            ? (a(commons.menus).slideUp(150, function () {
                a(commons.bar + ' > #NagishLiBarStrip').removeClass('open');
              }),
              (c = 'closed'))
            : (a(this).addClass('open').next('#NagishLiMenus').slideDown(150),
              (c = 'open')),
          f('change', 'menu', c));
      },
    );
    a(commons.dd + ' > .nl-dropdown-toggle').click(function (b, c) {
      c = a(commons.dd + ' > .nl-dropdown-toggle').index(this);
      H
        ? (a(commons.dd + ' > .nl-dropdown-toggle')
            .not(a(this))
            .removeClass('open')
            .next('ul.nl-dropdown-menu')
            .slideUp('fast')
            .removeClass('show'),
          a(this)
            .toggleClass('open')
            .next('ul.nl-dropdown-menu')
            .slideToggle('fast')
            .toggleClass('show'),
          (b = '000000'),
          a(this).hasClass('open') && (b = b.substr(0, c) + '1' + b.substr(c + 1)),
          f('change', 'submenus', b))
        : (a(this)
            .toggleClass('open')
            .next('ul.nl-dropdown-menu')
            .slideToggle('fast')
            .toggleClass('show'),
          a(this).hasClass('open')
            ? ((b = '1'),
              a(this)
                .children('.nl-dropdown-arrow')
                .attr(
                  'aria-label',
                  phrases.aria_toggle_close_alt +
                    a(this).children('.nl-dropdown-title').text(),
                ),
              a(this)
                .children('.nagishli-sr-only')
                .text(
                  phrases.aria_toggle_close_alt +
                    a(this).children('.nl-dropdown-title').text(),
                ))
            : ((b = '0'),
              a(this)
                .children('.nl-dropdown-arrow')
                .attr(
                  'aria-label',
                  phrases.aria_toggle_open_alt +
                    a(this).children('.nl-dropdown-title').text(),
                ),
              a(this)
                .children('.nagishli-sr-only')
                .text(
                  phrases.aria_toggle_open_alt +
                    a(this).children('.nl-dropdown-title').text(),
                )),
          f('change', 'submenus', { to: b, pos: c }));
      ja();
    });
    a(commons.bar + ' > #NagishLiBarStrip > #NagishLiToggleMenus').on(
      'click keypress.nlkbnavclk',
      function (b, c) {
        !a(b.target).parent('span#NagishLiToggleMenus') ||
          (1 !== b.which && 13 !== b.which) ||
          (a(this).hasClass('expand-all')
            ? (a(this).attr({
                class: 'collapse-all',
                'aria-label': phrases.collapse_all,
              }),
              a(commons.dd + ' > .nl-dropdown-toggle')
                .addClass('open')
                .children('span.selected')
                .remove(),
              a(commons.dd + ' > .nl-dropdown-menu')
                .slideDown('fast')
                .addClass('show'),
              (c = '111111'),
              a(commons.dd + ' > .nl-dropdown-toggle').each(function () {
                a(this)
                  .children('.nl-dropdown-arrow')
                  .attr(
                    'aria-label',
                    phrases.aria_toggle_close_alt +
                      a(this).children('.nl-dropdown-title').text(),
                  );
              }))
            : (a(this).attr({ class: 'expand-all', 'aria-label': phrases.expand_all }),
              a(commons.dd + ' > .nl-dropdown-toggle.open').removeClass('open'),
              a(commons.dd + ' > .nl-dropdown-menu.show')
                .slideUp('fast')
                .removeClass('show'),
              (c = '000000'),
              a(commons.dd + ' > .nl-dropdown-toggle').each(function () {
                a(this)
                  .children('.nl-dropdown-arrow')
                  .attr(
                    'aria-label',
                    phrases.aria_toggle_open_alt +
                      a(this).children('.nl-dropdown-title').text(),
                  );
                if (
                  a(this)
                    .next('#NagishLiColors, #NagishLiDisplay', 'ul')
                    .children("li.active:not(':last-child')").length
                ) {
                  if (
                    !a(this).children('span.selected').length &&
                    a(this).next('ul').children('li.active').length
                  ) {
                    var b = a(this)
                      .next('ul')
                      .children('li.active')
                      .find('.nagishli-option-title')
                      .text();
                    a('<span class="selected">' + b + '</span>').insertAfter(
                      a(this).children('.nl-dropdown-title'),
                    );
                  }
                } else
                  a(this).next('#NagishLiHighlight', 'ul').length &&
                    (!a(this).children('span.selected').length &&
                    1 < a(this).next('ul').children('li.active').find('span.sign').length
                      ? ((b =
                          a(this)
                            .next('ul')
                            .children('li.active:first-child')
                            .find('.nagishli-option-title')
                            .text() +
                          ' ' +
                          a(this)
                            .next('ul')
                            .children('li.active:nth-child(2)')
                            .find('.nagishli-option-title')
                            .text()),
                        (b = b.split(' ')),
                        (b[1] =
                          'en' == g
                            ? b[1].charAt(0).toUpperCase() + b[1].substr(1)
                            : b[1]),
                        a(
                          '<span class="selected">' +
                            b[1] +
                            '&nbsp;' +
                            phrases.and +
                            b[3] +
                            '</span>',
                        ).insertAfter(a(this).children('.nl-dropdown-title')))
                      : !a(this).children('span.selected').length &&
                          a(this).next('ul').find('span.sign').length
                        ? ((b = a(this)
                            .next('ul')
                            .children('li.active')
                            .find('.nagishli-option-title')
                            .text()),
                          a('<span class="selected">' + b + '</span>').insertAfter(
                            a(this).children('.nl-dropdown-title'),
                          ))
                        : a(this).children('span.selected').remove());
              })),
          f('change', 'submenus', c));
      },
    );
    a(
      commons.dd +
        ' > #NagishLiInfo > li > #NagishLiStatement, ' +
        commons.dd +
        ' > #NagishLiInfo > li > #NagishLiHowAccessible, ' +
        commons.dd +
        ' > #NagishLiInfo > li > #NagishLiKeyboardShortcutsInfo',
    ).click(function (b) {
      if ('NagishLiStatement' == b.target.id && K) window.location.replace(K);
      else {
        a('body[nl-kbnav]').length && a(this).blur();
        a('html')[0].style.setProperty('overflow', 'hidden', 'important');
        a('body')[0].style.setProperty('overflow', 'hidden', 'important');
        a(document).on('keydown.nlkbnav mousedown.nlkbnav', function (b) {
          if (
            a(b.target).hasClass('NagishLiOverlay') ||
            ('closeBtn' == b.target.id &&
              9 !== b.which &&
              40 !== b.which &&
              38 !== b.which) ||
            27 === b.which
          )
            a('#DeveloperMsg').length
              ? a('.NagishLiOverlay').fadeOut('fast', function () {
                  a(this).remove();
                  a('body[nl-kbnav]').length &&
                    a(
                      commons.dd + ' > #NagishLiInfo > li > #NagishLiHowAccessible',
                    ).focus();
                })
              : a('.NagishLiOverlay').fadeOut('fast', function () {
                  a(this).remove();
                  a('body[nl-kbnav]').length &&
                    a(commons.dd + ' > #NagishLiInfo > li > #NagishLiStatement').focus();
                }),
              a('html')[0].style.setProperty('overflow', '', ''),
              a('body')[0].style.setProperty('overflow', '', ''),
              a(document).off('keydown.nlkbnav mousedown.nlkbnav');
        });
        var c = a(
          commons.dd + ':last-child > .nl-dropdown-menu > li:last-child > div',
        ).css('border-bottom-color');
        'NagishLiHowAccessible' == b.currentTarget.id
          ? ((b =
              '<div class="NagishLiAboutText" style="text-align: ' +
              phrases.align_right +
              ' !important; width: 80% !important; margin: 0 auto !important;"><a role="button" id="closeBtn" tabindex="1" aria-label="' +
              phrases.aria_close_modal +
              '">&#x274c;&#xfe0e;</a><span class="nlap-title">' +
              phrases.about +
              '</span>'),
            (b =
              '0' != x
                ? b + phrases.about_text_lic
                : b +
                  ('<span id="DeveloperMsg" style="border: 1px solid ' +
                    c +
                    ' !important; border-' +
                    phrases.align_right +
                    '-width: 10px !important; border-radius: 10px !important; display: block !important; padding: 2% !important; text-align: ' +
                    phrases.align_right +
                    ' !important; font-size: 90% !important; background: #EEE !important; font-weight: bold !important; color: #6f6f6f !important; max-width: 75% !important; margin: 0 auto 2.5% !important;"><a href="https://fb.me/ZannyBoy" target="_blank" tabindex="1"><img src="//graph.facebook.com/1452532180/picture?type=normal&amp;width=87&amp;height=87" onerror="this.parentNode.style.display=\'none\';" style="border-radius: 50% !important; margin-top: 1% !important; margin-' +
                    phrases.align_left +
                    ': 2% !important; float: ' +
                    phrases.align_right +
                    ' !important;" /></a>' +
                    phrases.developer_message +
                    '</span>' +
                    phrases.about_text)),
            (b +=
              '<br /><br /></div><style type="text/css">#NagishLiOverlayContent > .NagishLiAboutText > .nlap-title { font-size: 150% !important; color: ' +
              c +
              ' !important; display: block !important; margin: 2% 0 !important; font-weight: bold !important; text-align: center !important; } #NagishLiOverlayContent > .NagishLiAboutText > a { color: ' +
              c +
              ' !important; text-decoration: none !important; } #NagishLiOverlayContent > .NagishLiAboutText > .nlap-stitle { font-weight: bold !important; font-size: 110% !important; text-decoration: underline !important; }</style>'))
          : (b =
              'NagishLiStatement' == b.currentTarget.id
                ? '<div class="NagishLiStatementText" style="text-align: ' +
                  phrases.align_right +
                  ' !important; width: 80% !important; margin: 0 auto !important;"><a href="javascript:void(0);" role="button" id="closeBtn" tabindex="1" aria-label="' +
                  phrases.aria_close_modal +
                  '">&#x274c;&#xfe0e;</a><span class="nlas-title">' +
                  ('' != D ? D.toUpperCase() + '&nbsp;-&nbsp;' : '') +
                  (G ? '<br />' : '') +
                  phrases.a11y_info +
                  '</span>' +
                  phrases.accessibility_statement +
                  '</div><style type="text/css">#NagishLiOverlayContent > .NagishLiStatementText > .nlas-title { font-size: 150% !important; color: ' +
                  c +
                  ' !important; display: block !important; margin: 2% 0 !important; font-weight: bold !important; text-align: center !important; } #NagishLiOverlayContent > .NagishLiStatementText > a { color: ' +
                  c +
                  ' !important; text-decoration: none !important; } #NagishLiOverlayContent > .NagishLiStatementText > .nlas-stitle { font-weight: bold !important; font-size: 110% !important; text-decoration: underline !important; }</style>'
                : '<div class="NagishLiKeyboardShortcutsText" style="text-align: ' +
                  phrases.align_right +
                  ' !important; width: 80% !important; margin: 0 auto !important;"><a href="javascript:void(0);" role="button" id="closeBtn" tabindex="1" aria-label="' +
                  phrases.aria_close_modal +
                  '">&#x274c;&#xfe0e;</a><span class="nlas-title">' +
                  phrases.kbshortcuts +
                  '</span>' +
                  phrases.kbshortcuts_text +
                  '</div><style type="text/css">#NagishLiOverlayContent > .NagishLiKeyboardShortcutsText > .nlas-title { font-size: 150% !important; color: ' +
                  c +
                  ' !important; display: block !important; margin: 2% 0 !important; font-weight: bold !important; text-align: center !important; } #NagishLiOverlayContent > .NagishLiKeyboardShortcutsText > a { color: ' +
                  c +
                  ' !important; text-decoration: none !important; } #NagishLiOverlayContent > .NagishLiKeyboardShortcutsText > .nlas-stitle { font-weight: bold !important; font-size: 110% !important; text-decoration: underline !important; }#NagishLiOverlayContent > .NagishLiKeyboardShortcutsText > kbd { padding: 4px 6px !important; color: #fff !important; background-color: #212529 !important; border-radius: 3px !important; display: inline-block !important; }</style>');
        a(
          '<div class="NagishLiOverlay"><div id="NagishLiOverlayContent" class="' +
            P +
            '" style="color: black !important; background-color: white !important; width: 85% !important; margin: auto !important; top: 25% !important; height: 50% !important; position: relative !important; border: 10px solid !important; border-color: ' +
            c +
            ' !important; border-radius: 25px !important; overflow-x: hidden !important; direction: ' +
            phrases.dir +
            ' !important; cursor: context-menu !important;">' +
            b +
            '</div></div>',
        )
          .fadeIn('fast')
          .appendTo('#NagishLiTag');
        c = a('#NagishLiOverlayContent a');
        var d = c.first(),
          e = c.last();
        d.focus();
        e.on('keydown', function (a) {
          9 !== a.which || a.shiftKey || (a.preventDefault(), d.focus());
        });
        d.on('keydown', function (a) {
          9 === a.which && a.shiftKey && (a.preventDefault(), e.focus());
        });
      }
    });
    a(
      commons.dd +
        ' > ul > li > div > span.help, ' +
        commons.dd +
        ' > ul > li > div > span.notice',
    )
      .attr('data-balloon-pos', phrases.align_left)
      .on('mousedown keypress.nlkbnavclk', function () {
        alert(a(this).data('balloon'));
        return !1;
      });
    a(
      commons.dd +
        ' > #NagishLiColors > li > #NLCustomColors > span:not(.sign, .help, .nagishli-option-title)',
    ).click(function () {
      var b = a(this).is('#NLCustomColorsBG') ? a('#NLCurrentBG') : a('#NLCurrentTXT'),
        c = a(this).is('#NLCustomColorsBG') ? phrases.bg : phrases.txt,
        d = a(this).parent('div#NLCustomColors').contents().detach();
      var e =
        c == phrases.bg
          ? h(a('body').css('background-color'))
          : h(a('body').css('color'));
      var f = document.createElement('input');
      f.setAttribute('type', 'color');
      f =
        'text' !== f.type
          ? '<li style="background-color: ' +
            e +
            '; width: inherit !important;" role="button" aria-label="' +
            phrases.aria_select_color +
            c.toLowerCase() +
            '"><input tabindex="35" id="NLColorPicker" type="color" value="' +
            e +
            "\" onchange=\"$(this).parent('li').css('background-color', $('#NLColorPicker').val()).attr('aria-label', '" +
            phrases.clr_custom +
            '\');" style="min-width: 18px !important; min-height: 18px !important; width: 100% !important; height: 100% !important; vertical-align: top !important;" /></li>'
          : '';
      e =
        '<span class="nagishli-option-title" style="display: none !important;">' +
        phrases.custom_colors +
        '</span>';
      'he' == g
        ? (e +=
            phrases.color +
            ' ' +
            c +
            ':<ul id="NLcolorPanel" data-type="' +
            c +
            '" style="padding: 0 !important; text-align: center !important;"><li style="background-color: #000000;" tabindex="35" aria-label="' +
            c +
            ' ' +
            phrases.clr_black +
            '"></li><li style="background-color: #6495ed;" tabindex="35" aria-label="' +
            c +
            ' ' +
            phrases.clr_blue +
            '"></li><li style="background-color: #3cb371;" tabindex="35" aria-label="' +
            c +
            ' ' +
            phrases.clr_green +
            '"></li><li style="background-color: #ffd800;" tabindex="35" aria-label="' +
            c +
            ' ' +
            phrases.clr_yellow +
            '"></li><li style="background-color: #e95d4f;" tabindex="35" aria-label="' +
            c +
            ' ' +
            phrases.clr_red +
            '"></li><li style="background-color: #ffa500;" tabindex="35" aria-label="' +
            c +
            ' ' +
            phrases.clr_orange +
            '"></li><br /><li style="background-color: #a569bd;" tabindex="35" aria-label="' +
            c +
            ' ' +
            phrases.clr_purple +
            '"></li><li style="background-color: #ff78bb;" tabindex="35" aria-label="' +
            c +
            ' ' +
            phrases.clr_pink +
            '"></li><li style="background-color: #ffffff;" tabindex="35" aria-label="' +
            c +
            ' ' +
            phrases.clr_white +
            '"></li><li style="background-color: #a3a3a3;" tabindex="35" aria-label="' +
            c +
            ' ' +
            phrases.clr_gray +
            '"></li>' +
            f)
        : ((e +=
            c +
            ' ' +
            phrases.color +
            ':<ul id="NLcolorPanel" data-type="' +
            c +
            '" style="padding: 0 !important; text-align: center !important;">'),
          (c = c.toLowerCase()),
          (e +=
            '<li style="background-color: #000000;" tabindex="35" aria-label="' +
            phrases.clr_black +
            ' ' +
            c +
            '"></li><li style="background-color: #6495ed;" tabindex="35" aria-label="' +
            phrases.clr_blue +
            ' ' +
            c +
            '"></li><li style="background-color: #3cb371;" tabindex="35" aria-label="' +
            phrases.clr_green +
            ' ' +
            c +
            '"></li><li style="background-color: #ffd800;" tabindex="35" aria-label="' +
            phrases.clr_yellow +
            ' ' +
            c +
            '"></li><li style="background-color: #e95d4f;" tabindex="35" aria-label="' +
            phrases.clr_red +
            ' ' +
            c +
            '"></li><li style="background-color: #ffa500;" tabindex="35" aria-label="' +
            phrases.clr_orange +
            ' ' +
            c +
            '"></li><br /><li style="background-color: #a569bd;" tabindex="35" aria-label="' +
            phrases.clr_purple +
            ' ' +
            c +
            '"></li><li style="background-color: #ff78bb;" tabindex="35" aria-label="' +
            phrases.clr_pink +
            ' ' +
            c +
            '"></li><li style="background-color: #ffffff;" tabindex="35" aria-label="' +
            phrases.clr_white +
            ' ' +
            c +
            '"></li><li style="background-color: #a3a3a3;" tabindex="35" aria-label="' +
            phrases.clr_gray +
            ' ' +
            c +
            '"></li>' +
            f));
      e +=
        '<li style="border-color: transparent !important;" tabindex="35" id="NLCloseColorPanel" role="button"><span aria-hidden="true">&#x274c;&#xfe0e;</span><span class="nagishli-sr-only">' +
        phrases.custom_colors_close +
        '</span></li></ul>';
      document.getElementById('NLCustomColors').innerHTML = e;
      'none' != b.css('display') &&
        (a(commons.checkmark).prependTo(a('div#NLCustomColors')),
        a(
          commons.dd +
            ' > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel > li[style="background-color: ' +
            h(b.css('background-color')) +
            ';"]',
        ).length
          ? a(
              commons.dd +
                ' > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel > li[style="background-color: ' +
                h(b.css('background-color')) +
                ';"]',
            )
              .eq(0)
              .addClass('selected')
          : (a(
              commons.dd +
                " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
                phrases.bg +
                "'] > li[aria-label='" +
                phrases.aria_select_bgcolor +
                "'] > input#NLColorPicker",
            )
              .attr('value', h(b.css('background-color')))
              .parent('li')
              .attr('aria-label', phrases.clr_custom)
              .addClass('selected'),
            a(
              commons.dd +
                " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
                phrases.txt +
                "'] > li[aria-label='" +
                phrases.aria_select_txtcolor +
                "'] > input#NLColorPicker",
            )
              .attr('value', h(b.css('background-color')))
              .parent('li')
              .attr('aria-label', phrases.clr_custom)
              .addClass('selected')));
      a('body[nl-kbnav]').length &&
        document.getElementById('NLcolorPanel').firstElementChild.focus();
      a(
        commons.dd +
          ' > #NagishLiColors > li > #NLCustomColors > ul > li#NLCloseColorPanel',
      ).on('click keypress.nlkbnavclk', function () {
        var b = a(
            commons.dd +
              " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
              phrases.bg +
              "'] > li.selected",
          ),
          c = a(
            commons.dd +
              " > #NagishLiColors > li.not-clickable > #NLCustomColors > ul#NLcolorPanel[data-type='" +
              phrases.txt +
              "'] > li.selected",
          );
        a(commons.dd + ' > #NagishLiColors > li > #NLCustomColors')
          .empty()
          .append(d);
        a(this).parent('ul#NLcolorPanel').data('type') === phrases.bg
          ? (b.length
              ? a(
                  commons.dd +
                    ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsBG > #NLCurrentBG',
                )
                  .css({
                    'background-color': b.css('background-color'),
                    display: 'inline-block',
                  })
                  .attr('aria-label', b.attr('aria-label'))
              : a(
                  commons.dd +
                    ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsBG > #NLCurrentBG',
                ).css({ 'background-color': '', display: 'none' }),
            a('body[nl-kbnav]').length &&
              document.getElementById('NLCustomColorsBG').focus())
          : (c.length
              ? a(
                  commons.dd +
                    ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsTXT > #NLCurrentTXT',
                )
                  .css({
                    'background-color': c.css('background-color'),
                    display: 'inline-block',
                  })
                  .attr('aria-label', c.attr('aria-label'))
              : a(
                  commons.dd +
                    ' > #NagishLiColors > li > #NLCustomColors > #NLCustomColorsTXT > #NLCurrentTXT',
                ).css({ 'background-color': '', display: 'none' }),
            a('body[nl-kbnav]').length &&
              document.getElementById('NLCustomColorsTXT').focus());
        1 <= a('#NLCurrentBG:visible, #NLCurrentTXT:visible').length
          ? a('div#NLCustomColors').children('span.sign').length ||
            a(commons.checkmark).prependTo(a('div#NLCustomColors'))
          : a('div#NLCustomColors').children('span.sign').remove();
      });
    });
    a(commons.dd + ' > .nl-dropdown-toggle').click(function (b) {
      a(this)
        .next('#NagishLiColors, #NagishLiDisplay', 'ul')
        .children("li.active:not(':last-child')").length
        ? !a(this).children('span.selected').length &&
          a(this).next('ul').children('li.active').length
          ? ((b = a(this)
              .next('ul')
              .children('li.active')
              .find('.nagishli-option-title')
              .text()),
            a('<span class="selected">' + b + '</span>').insertAfter(
              a(this).children('.nl-dropdown-title'),
            ))
          : a(this).children('span.selected').remove()
        : a(this).next('#NagishLiHighlight', 'ul').length &&
          (!a(this).children('span.selected').length &&
          1 < a(this).next('ul').children('li.active').find('span.sign').length
            ? ((b =
                a(this)
                  .next('ul')
                  .children('li.active:first-child')
                  .find('.nagishli-option-title')
                  .text() +
                ' ' +
                a(this)
                  .next('ul')
                  .children('li.active:nth-child(2)')
                  .find('.nagishli-option-title')
                  .text()),
              (b = b.split(' ')),
              (b[1] = 'en' == g ? b[1].charAt(0).toUpperCase() + b[1].substr(1) : b[1]),
              a(
                '<span class="selected">' +
                  b[1] +
                  '&nbsp;' +
                  phrases.and +
                  b[3] +
                  '</span>',
              ).insertAfter(a(this).children('.nl-dropdown-title')))
            : !a(this).children('span.selected').length &&
                a(this).next('ul').find('span.sign').length
              ? ((b = a(this)
                  .next('ul')
                  .children('li.active')
                  .find('.nagishli-option-title')
                  .text()),
                a('<span class="selected">' + b + '</span>').insertAfter(
                  a(this).children('.nl-dropdown-title'),
                ))
              : a(this).children('span.selected').remove());
    });
    a(commons.dd + ' > #NagishLiText > li')
      .click(function () {
        a(this).is(':last-child') &&
          !a(this).find('span.sign').length &&
          a(commons.checkmark).prependTo(a(this).children('div'));
      })
      .on('mousedown keypress', function (b) {
        if (1 === b.which || 13 === b.which)
          a(this).siblings('li:last').find('span.sign').remove(),
            a(this).is(':first-child')
              ? a(
                  '<span class="sign" aria-hidden="true">&nbsp;&nbsp;&#x2795;&#xfe0e;</span>',
                ).appendTo(a(this).children('div'))
              : a(this).is(':nth-child(2)') &&
                a(
                  '<span class="sign" aria-hidden="true">&nbsp;&nbsp;&#x2796;&#xfe0e;</span>',
                ).appendTo(a(this).children('div'));
      })
      .on('mouseup mouseleave mouseout keydown keyup', function () {
        a(this).is(':last-child') || a(this).find('span.sign').remove();
      });
    a(
      commons.dd +
        ' > #NagishLiColors > li:not(.not-clickable), ' +
        commons.dd +
        ' > #NagishLiDisplay > li',
    ).click(function () {
      a(this).hasClass('active')
        ? (a(this).not('li:last-child').removeClass('active').find('span.sign').remove(),
          a(commons.checkmark).prependTo(
            a(this).siblings('li:last-child').addClass('active').children('div'),
          ))
        : (a(this)
            .addClass('active')
            .siblings('li')
            .removeClass('active')
            .find('span.sign')
            .remove(),
          a(commons.checkmark).prependTo(a(this).children('div')));
    });
    a(commons.dd + ' > #NagishLiColors > li.not-clickable').on(
      'click change keypress.nlkbnavclk',
      '#NLCustomColors > ul#NLcolorPanel > li:not(#NLCloseColorPanel)',
      function () {
        !a(this).hasClass('selected') || a(this).children('input').is('#NLColorPicker')
          ? (a(this).children('input').is('#NLColorPicker') &&
            a(this).siblings('li.selected').length
              ? a(this).removeClass('selected')
              : a(this)
                  .addClass('selected')
                  .siblings('li')
                  .removeClass('selected')
                  .closest('li.not-clickable')
                  .addClass('active')
                  .siblings('li')
                  .removeClass('active')
                  .find('span.sign')
                  .remove(),
            a(this).closest('div#NLCustomColors').children('span.sign').length ||
              a(commons.checkmark).prependTo(a(this).closest('#NLCustomColors', 'div')))
          : a(this)
              .removeClass('selected')
              .closest('#NLCustomColors', 'div')
              .find('span.sign')
              .remove();
        a(this).attr('aria-label') != phrases.aria_select_bgcolor &&
        a(this).attr('aria-label') != phrases.aria_select_txtcolor
          ? (a(this)
              .siblings('li')
              .removeClass('selected')
              .closest('li.not-clickable')
              .addClass('active')
              .siblings('li')
              .removeClass('active')
              .find('span.sign')
              .remove(),
            a(this).children('input').is('#NLColorPicker')
              ? a(this)
                  .addClass('selected')
                  .children('input#NLColorPicker')
                  .attr('value', a('#NLColorPicker').val())
              : (a(this)
                  .parent("ul[data-type='" + phrases.bg + "']")
                  .children("li[aria-label='" + phrases.clr_custom + "']")
                  .attr('aria-label', phrases.aria_select_bgcolor)
                  .css('background-color', 'transparent'),
                a(this)
                  .parent("ul[data-type='" + phrases.txt + "']")
                  .children("li[aria-label='" + phrases.clr_custom + "']")
                  .attr('aria-label', phrases.aria_select_txtcolor)
                  .css('background-color', 'transparent')),
            a(this).parent('ul#NLcolorPanel').data('type') === phrases.bg
              ? v()
              : v('txt'))
          : a(this).closest('div#NLCustomColors').children('span.sign').length &&
            !a('body[nl-colors]').length &&
            a(this)
              .removeClass('selected')
              .closest('#NLCustomColors', 'div')
              .find('span.sign')
              .remove();
        a('body[nl-colors]').length ||
          a('#NLCustomColors > ul#NLcolorPanel > li.selected').length ||
          a(commons.checkmark).prependTo(
            a(this)
              .closest('li.not-clickable')
              .removeClass('active')
              .siblings('li:last-child')
              .addClass('active')
              .children('div'),
          );
      },
    );
    a(commons.dd + ' > #NagishLiHighlight > li').click(function () {
      a(this).hasClass('active')
        ? a(this).removeClass('active').find('span.sign').remove()
        : a(commons.checkmark).prependTo(a(this).addClass('active').children('div'));
    });
    a(
      commons.dd +
        ' > #NagishLiMisc > li > #NLCursor > #NLCursorBlack, ' +
        commons.dd +
        ' > #NagishLiMisc > li > #NLCursor > #NLCursorWhite',
    ).click(function () {
      a(this).hasClass('active')
        ? a(this).removeClass('active').find('span.sign').remove()
        : (a(this).siblings('span').removeClass('active').find('span.sign').remove(),
          a(commons.checkmark).prependTo(a(this).addClass('active')));
    });
    a('span#NagishLiMove > span').each(function () {
      this.style.setProperty('display', 'inline-block', 'important');
      this.style.setProperty('float', phrases.align_left, 'important');
      this.style.setProperty('background-color', 'transparent', 'important');
      this.style.setProperty('background-position', 'center', 'important');
      this.style.setProperty('background-size', 'cover', 'important');
      this.style.setProperty('width', '50%', 'important');
      this.style.setProperty('height', '50%', 'important');
      this.style.setProperty('z-index', '9999999', 'important');
    });
    a('span#NagishLiMove > span').hover(function (b) {
      a(this).css('background-color', 'mouseenter' === b.type ? 'white' : 'transparent');
    });
    a(commons.dd + " > .nl-dropdown-menu > li > div[tabindex='13']").click(function () {
      alert(a(this).data('balloon'));
    });
    a(window).resize(function () {
      a(commons.menus).css('max-height', a(window).height() - 41 + 'px');
    });
    a('body').css('-ms-overflow-style', 'scrollbar');
    a(commons.menus + ' > li.nl-dropdown > ul.nl-dropdown-menu > li').on(
      'dragstart',
      function () {
        return !1;
      },
    );
    a(commons.bar).on('contextmenu', function () {
      return !1;
    });
    a('img').each(function () {
      if (!a(this).attr('alt')) {
        var b = a(this).attr('title')
          ? phrases.img_alt + a(this).attr('title')
          : phrases.img_alt_missing;
        a(this).attr('alt', b);
      }
    });
    a('audio, video').each(function () {
      a(this).text().trim().length ||
        a(this).append(document.createTextNode(phrases.unsupported_media));
    });
    a('h1, h2, h3, h4, h5, h6').attr('role', 'heading');
    a(commons.dd + ' > #NagishLiMisc > li > #NLSkipLinks > #NLSkipLinksVal').on(
      'change',
      function () {
        var b = a(this).val();
        b = void 0 === b ? 'top' : b;
        if ('top' == b || 'bottom' == b)
          window.scrollTo(
            0,
            'top' == b ? 0 : (document.scrollingElement || document.body).scrollHeight,
          );
        else if ('home' == b)
          location.assign(
            location.protocol +
              '//' +
              location.hostname +
              (location.port && ':' + location.port) +
              '/',
          );
        else {
          var c;
          'menu' == b
            ? (c =
                document.getElementsByTagName('nav')[0] ||
                a("*[role='navigation']")[0] ||
                a('ul li a')[0] ||
                a("*[class*='menu']")[0] ||
                a("*[id*='menu']")[0])
            : 'header' == b
              ? (c =
                  document.getElementsByTagName('h1')[0] ||
                  document.getElementsByTagName('h2')[0] ||
                  document.getElementsByTagName('header')[0] ||
                  a("*[role='banner']")[0] ||
                  document.getElementsByTagName('div')[0] ||
                  document.getElementsByTagName('body')[0])
              : 'paragraph' == b
                ? (c =
                    document.getElementsByTagName('p')[0] ||
                    document.getElementsByTagName('body')[0])
                : 'content' == b &&
                  (c =
                    document.getElementsByTagName('main')[0] ||
                    document.getElementsByTagName('article')[0] ||
                    document.getElementsByTagName('section')[0] ||
                    document.getElementsByTagName('h2')[0] ||
                    document.getElementsByTagName('h3')[0] ||
                    document.getElementsByTagName('p')[0] ||
                    document.getElementsByTagName('div')[0] ||
                    document.getElementsByTagName('body')[0]);
          c.scrollIntoView();
          a('body[nl-kbnav]').length && c.focus();
        }
      },
    );
    a('.link:not(a)').attr('role', 'link');
    document.getElementsByTagName('title')[0].length ||
      ((J =
        0 < document.getElementsByTagName('h1').length
          ? document.getElementsByTagName('h1')[0]
          : phrases.untitled_page),
      (w = document.createElement('title')),
      (w.innerHTML = J),
      document.getElementsByTagName('head')[0].appendChild(w));
  });
}
