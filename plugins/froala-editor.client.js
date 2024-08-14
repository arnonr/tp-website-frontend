// import Vue from "vue";
import FroalaEditor from "froala-editor";
window.FroalaEditor = FroalaEditor;

import "froala-editor/js/plugins.pkgd.min.js";
import VueFroala from "vue-froala-wysiwyg";

if (window.FroalaEditor) {
    import("@wiris/mathtype-froala3");
} else {
    console.error("FroalaEditor is not loaded");
}

//Import third party plugins
import "froala-editor/js/third_party/embedly.min";
import "froala-editor/js/third_party/font_awesome.min";
import "froala-editor/js/third_party/spell_checker.min";
import "froala-editor/js/third_party/image_tui.min";

// import Froala from 'froala-editor';

// Import Froala Editor css files.
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueFroala);
});
