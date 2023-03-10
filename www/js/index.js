import footer from './footer.js';
import adhkar from './adhkar.js';

document.addEventListener('deviceready',async (e) => {

    document.getElementById("platform").innerHTML = device.platform;
    document.getElementById("manufacturer").innerHTML = device.manufacturer;
    document.getElementById("isVirtual").innerHTML = device.isVirtual;
    document.getElementById("serial").innerHTML = device.serial;
    document.getElementById("cordova").innerHTML = device.cordova;
    document.getElementById("model").innerHTML = device.model;
    document.getElementById("version").innerHTML = device.version;
    document.getElementById("uuid").innerHTML = device.uuid;
    document.getElementById("name").innerHTML = device.model;
    document.getElementById("width").innerHTML = screen.width;
    document.getElementById("height").innerHTML = screen.height;
    document.getElementById("colorDepth").innerHTML = screen.colorDepth;

}, false);

await adhkar();   

await footer();
