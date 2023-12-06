'use strict'
function etElementWidth(content, padding, border){
    const sumWeight = content + (padding * 2) + (border * 2);
    return sumWeight;
}
console.log(etElementWidth(60, 12, 8.5));