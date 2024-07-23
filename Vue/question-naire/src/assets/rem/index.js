
/**
 * This file is responsible for setting up the rem unit for the application.
 * It defines a function that sets the font size of the root element based on the device's screen size.
 *
 * @file This file sets up the rem unit for the application.
 * @summary Sets the font size of the root element based on the device's screen size.
 * @description This file contains a self-invoking function that sets the font size of the root element (docEl) based on the device's screen size.
 * @since 2024-7-22
 * @name kailin
 * @param {Object} doc - The document object.
 */
(function(doc,){
    let docEl = doc.documentElement

    doc.addEventListener('DOMContentLoaded',recalc)

    function recalc(){
        let width=docEl.clientWidth
        docEl.style.fontSize =  20 * (width / 320) + 'px'
    }
})(document, window);