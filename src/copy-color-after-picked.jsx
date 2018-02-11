function copyTextToClipboard(txt) {
    const keyTextData = app.charIDToTypeID('TxtD');
    const ktextToClipboardStr = app.stringIDToTypeID('textToClipboard');
    const textStrDesc = new ActionDescriptor();

    textStrDesc.putString(keyTextData, txt);
    executeAction(ktextToClipboardStr, textStrDesc, DialogModes.NO);
}

function getRGBA(color) {
    var R = color.rgb.red.toFixed(0);
    var G = color.rgb.green.toFixed(0);
    var B = color.rgb.blue.toFixed(0);
    return 'rgb(' + R + ', ' + G + ', ' + B + ');';
}

function getHexa(color) {
    return '#' + color.rgb.hexValue.toLowerCase();
}

var color = getHexa(app.foregroundColor);
copyTextToClipboard(color);
