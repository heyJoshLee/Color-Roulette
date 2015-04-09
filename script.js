var colorOne;
var colorTwo;
var colorThree;
var colorAlpha;
var fullColor;
var rgb;
var colorTotal;
var hexColor;

function rgbToHex(r, g, b) {
    hexColor = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}



var generateColor = function() {
    colorOne = Math.floor((Math.random() * 255));
    colorTwo = Math.floor((Math.random() * 255));
    colorThree = Math.floor((Math.random() * 255));
    colorAlpha = Math.random().toFixed(1);
    fullColor = 'rgba(' + colorOne + ',' + colorTwo + ',' + colorThree + ',' + colorAlpha +')';
    colorTotal = colorOne + colorTwo + colorThree + (colorAlpha * 100);

    document.getElementById('colorBox').style.backgroundColor = fullColor;
    
    rgbToHex(colorOne, colorTwo, colorThree);
    
    document.getElementById('doubleCheck').style.backgroundColor = hexColor;
    
    document.getElementById('rgbaValue').innerHTML = fullColor;
    document.getElementById('hexValue').innerHTML = hexColor;
};


var generatePallette = function() {
    colorOne = Math.floor((Math.random() * 255));
    colorTwo = Math.floor((Math.random() * 255));
    colorThree = Math.floor((Math.random() * 255));
    colorAlpha = Math.random().toFixed(1);
    fullColor = 'rgba(' + colorOne + ',' + colorTwo + ',' + colorThree + ',' + colorAlpha +')';
    colorTotal = colorOne + colorTwo + colorThree + (colorAlpha * 100);
    document.getElementById('swatch1').style.backgroundColor = fullColor;
    rgbToHex(colorOne, colorTwo, colorThree);
    document.getElementById('swatch5').style.backgroundColor = hexColor;
    document.getElementById('swatch1').innerHTML = fullColor;
    document.getElementById('swatch5').innerHTML = hexColor;
    
    colorOne = Math.floor((Math.random() * 255));
    colorTwo = Math.floor((Math.random() * 255));
    colorThree = Math.floor((Math.random() * 255));
    colorAlpha = Math.random().toFixed(1);
    fullColor = 'rgba(' + colorOne + ',' + colorTwo + ',' + colorThree + ',' + colorAlpha +')';
    colorTotal = colorOne + colorTwo + colorThree + (colorAlpha * 100);
    document.getElementById('swatch2').style.backgroundColor = fullColor;
    rgbToHex(colorOne, colorTwo, colorThree);
    document.getElementById('swatch6').style.backgroundColor = hexColor;
    document.getElementById('swatch2').innerHTML = fullColor;
    document.getElementById('swatch6').innerHTML = hexColor;
    
    colorOne = Math.floor((Math.random() * 255));
    colorTwo = Math.floor((Math.random() * 255));
    colorThree = Math.floor((Math.random() * 255));
    colorAlpha = Math.random().toFixed(1);
    fullColor = 'rgba(' + colorOne + ',' + colorTwo + ',' + colorThree + ',' + colorAlpha +')';
    colorTotal = colorOne + colorTwo + colorThree + (colorAlpha * 100);
    document.getElementById('swatch3').style.backgroundColor = fullColor;
    rgbToHex(colorOne, colorTwo, colorThree);
    document.getElementById('swatch7').style.backgroundColor = hexColor;
    document.getElementById('swatch3').innerHTML = fullColor;
    document.getElementById('swatch7').innerHTML = hexColor;
    
    colorOne = Math.floor((Math.random() * 255));
    colorTwo = Math.floor((Math.random() * 255));
    colorThree = Math.floor((Math.random() * 255));
    colorAlpha = Math.random().toFixed(1);
    fullColor = 'rgba(' + colorOne + ',' + colorTwo + ',' + colorThree + ',' + colorAlpha +')';
    colorTotal = colorOne + colorTwo + colorThree + (colorAlpha * 100);
    document.getElementById('swatch4').style.backgroundColor = fullColor;
    rgbToHex(colorOne, colorTwo, colorThree);
    document.getElementById('swatch8').style.backgroundColor = hexColor;
    document.getElementById('swatch4').innerHTML = fullColor;
    document.getElementById('swatch8').innerHTML = hexColor;
    
    
    
    
    
};






