'use strict'
function getElementWidth(content, padding, border){
    const nulContent = parseFloat(content);
    const nulPadding = parseFloat(padding);
    const nulBorder = parseFloat(border);
    const sumWeight = nulContent + (nulPadding * 2) + (nulBorder * 2);
    return sumWeight;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200