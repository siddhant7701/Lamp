const lamp = document.querySelector('.lamp');
const light = document.querySelector('.light');
const brightnessSlider = document.getElementById('brightnessSlider');

function updateBrightness() {
    const brightness = brightnessSlider.value;
    light.style.opacity = brightness / 100;
}

brightnessSlider.addEventListener('input', updateBrightness);

updateBrightness();
