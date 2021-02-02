//------------- slider bar -----------------------------
const inputElem1 = document.getElementById("cyan_value");
const currentValueElem1 = document.getElementById("current_cyan_value");
const setCurrentValue1 = (val) => {
    currentValueElem1.innerText = val;
}
const inputElem2 = document.getElementById("mage_value");
const currentValueElem2 = document.getElementById("current_mage_value");
const setCurrentValue2 = (val) => {
    currentValueElem2.innerText = val;
}
const inputElem3 = document.getElementById("yell_value");
const currentValueElem3 = document.getElementById("current_yell_value");
const setCurrentValue3 = (val) => {
    currentValueElem3.innerText = val;
}

const rangeOnChange1 = (e) =>{
    var ccode1 = rgb2hex([Math.round(255*(1-inputElem1.value/100)), 255, 255]);
    console.log("Cyan code: " + ccode1);
    setCurrentValue1(ccode1);
    cyan.addColorStop(0, ccode1);
}

const rangeOnChange2 = (e) =>{
    var ccode2 = rgb2hex([255, Math.round(255*(1-inputElem2.value/100)), 255]);
    console.log("Mage code: " + ccode2);
    setCurrentValue2(ccode2);
    mage.addColorStop(0, ccode2);
}

const rangeOnChange3 = (e) =>{
    var ccode3 = rgb2hex([255, 255, Math.round(255*(1-inputElem3.value/100))]);
    console.log("Yell code: " + ccode3);
    setCurrentValue3(ccode3);
    yell.addColorStop(0, ccode3);
}

window.onload = () => {
    inputElem1.addEventListener('input', rangeOnChange1);
    inputElem2.addEventListener('input', rangeOnChange2);
    inputElem3.addEventListener('input', rangeOnChange3);
    setCurrentValue1(inputElem1.value);
    setCurrentValue2(inputElem2.value);
    setCurrentValue3(inputElem3.value);
}
//--------------------------------------------------------*/

var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
ctx.globalAlpha = 0.1;

var yx = 250;
var yy = 0;
var mx = 0;
var my = 433;
var cx = 500;
var cy = 433;

var cyan = ctx.createRadialGradient(cx, cy, 0, cx, cy, 500);
//cyan.addColorStop(1, '#00000000');
//cyan.addColorStop(0.5, '#00FFFF');
cyan.addColorStop(1, '#ffffff');
cyan.addColorStop(0, '#00FFFF');

var mage = ctx.createRadialGradient(mx, my, 0, mx, my, 500);
//mage.addColorStop(1, '#00000000');
//mage.addColorStop(0.5, '#FF00FF');
mage.addColorStop(1, '#ffffff');
mage.addColorStop(0, '#FF00FF');

var yell = ctx.createRadialGradient(yx, yy, 0, yx, yy, 500);
//yell.addColorStop(1, '#00000000');
//yell.addColorStop(0.5, '#FFFF00');
yell.addColorStop(1, '#ffffff');
yell.addColorStop(0, '#FFFF00');

function draw(){
    
    var c_circle = new Path2D();
    c_circle.arc(cx, cy, 500, Math.PI, Math.PI*4/3);
    c_circle.lineTo(cx, cy);
    ctx.fillStyle = cyan;
    ctx.fill(c_circle);

    var m_circle = new Path2D();
    m_circle.arc(mx, my, 500, Math.PI*5/3, Math.PI*2);
    m_circle.lineTo(mx, my);
    ctx.fillStyle = mage;
    ctx.fill(m_circle);

    var y_circle = new Path2D();
    y_circle.arc(yx, yy, 500, Math.PI/3, Math.PI*2/3);
    y_circle.lineTo(yx, yy);
    ctx.fillStyle = yell;
    ctx.fill(y_circle);

    requestAnimationFrame(draw);
}

function rgb2hex ( rgb ) {
	return "#" + rgb.map( function ( value ) {
		return ( "0" + value.toString( 16 ) ).slice( -2 ) ;
	} ).join( "" ) ;
}

draw();