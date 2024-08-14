<template>
    <div>
        <div id="google_translate_element"></div>
    </div>
</template>

<script lang="ts">
export default {
    name: "GoogleTranslateWidget",
    mounted() {
        // Load Google Translate script dynamically
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src =
            "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        document.head.appendChild(script);
        
        // Declare googleTranslateElementInit on window object
        (window as any).googleTranslateElementInit = () => {
            new (window as any).google.translate.TranslateElement(
                {
                    pageLanguage: "th",
                    includedLanguages: "en", // กำหนดภาษาที่ต้องการแสดงใน widget
                    layout: (window as any).google.translate.TranslateElement
                        .InlineLayout.SIMPLE,
                },
                "google_translate_element"
            );
        };
    },
};
</script>