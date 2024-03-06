// // Elements
// const canvas = document.getElementById('signature-pad');
// const clearButton = document.getElementById('clear-btn');
// const downloadButton = document.getElementById('download-btn');
// const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
// const ctx = canvas.getContext('2d');
//
// // State
// let isDrawing = false;
// let lastX = 0;
// let lastY = 0;
//
// // Start drawing
// function startDrawing(e) {
//     isDrawing = true;
//     [lastX, lastY] = [e.offsetX, e.offsetY];
// }
//
// // Draw signature
// function draw(e) {
//     if (!isDrawing) return;
//     ctx.beginPath();
//     ctx.moveTo(lastX, lastY);
//     ctx.lineTo(e.offsetX, e.offsetY);
//     ctx.stroke();
//     [lastX, lastY] = [e.offsetX, e.offsetY];
// }
//
// // Stop drawing
// function stopDrawing() {
//     isDrawing = false;
// }
//
// // Clear canvas
// function clearCanvas() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// }
//
// // Download canvas as image
// function downloadCanvas() {
//     const dataURL = canvas.toDataURL('image/png');
//     const link = document.createElement('a');
//     link.href = dataURL;
//     link.download = 'signature.png';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }
//
// // Toggle dark mode
// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');
//     toggleDarkModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
// }
//
//
// const canvas = document.getElementById('signature-pad');
// const ctx = canvas.getContext('2d');
//
// let drawing = false;
//
// function draw(e) {
//     // Prevent scrolling on touch devices
//     e.preventDefault();
//
//     let x = e.clientX || e.touches[0].clientX;
//     let y = e.clientY || e.touches[0].clientY;
//
//     x -= canvas.offsetLeft;
//     y -= canvas.offsetTop;
//
//     if (drawing) {
//         ctx.lineTo(x, y);
//         ctx.stroke();
//     }
// }
//
// function startDrawing(e) {
//     drawing = true;
//     draw(e); // This draws a dot for a touchstart event
// }
//
// function stopDrawing() {
//     drawing = false;
//     ctx.beginPath(); // Begin a new path for the next drawing segment
// }
//
// canvas.addEventListener('mousedown', startDrawing);
// canvas.addEventListener('mousemove', draw);
// canvas.addEventListener('mouseup', stopDrawing);
// canvas.addEventListener('mouseout', stopDrawing);
//
// // Touch event listeners
// canvas.addEventListener('touchstart', startDrawing);
// canvas.addEventListener('touchmove', draw);
// canvas.addEventListener('touchend', stopDrawing);
//
// clearButton.addEventListener('click', clearCanvas);
// downloadButton.addEventListener('click', downloadCanvas);
// toggleDarkModeButton.addEventListener('click', toggleDarkMode);
//
// // Set up initial canvas context properties
// ctx.strokeStyle = '#000000';
// ctx.lineJoin = 'round';
// ctx.lineCap = 'round';
// ctx.lineWidth = 2;

// Elements
const canvas = document.getElementById('signature-pad');
const clearButton = document.getElementById('clear-btn');
const downloadButton = document.getElementById('download-btn');
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
const colorPicker = document.getElementById('color-picker');
const lineWidthSlider = document.getElementById('line-width');
const ctx = canvas.getContext('2d');

// State
let isDrawing = false;
let lastX = 0;
let lastY = 0;

// Start drawing
function startDrawing(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Draw signature
function draw(e) {
    if (!isDrawing) return;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// Stop drawing
function stopDrawing() {
    isDrawing = false;
}

// Clear canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Download canvas as image
function downloadCanvas() {
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'signature.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    toggleDarkModeButton.textContent = document.body.classList.contains('dark-mode') ? 'Toggle Light Mode' : 'Toggle Dark Mode';
}

// Update pen color
function updatePenColor() {
    ctx.strokeStyle = colorPicker.value;
}

// Update line width
function updateLineWidth() {
    ctx.lineWidth = lineWidthSlider.value;
}

// Event listeners
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Touch event listeners
canvas.addEventListener('touchstart', startDrawing, { passive: false });
canvas.addEventListener('touchmove', draw, { passive: false });
canvas.addEventListener('touchend', stopDrawing);

clearButton.addEventListener('click', clearCanvas);
downloadButton.addEventListener('click', downloadCanvas);
toggleDarkModeButton.addEventListener('click', toggleDarkMode);
colorPicker.addEventListener('input', updatePenColor);
lineWidthSlider.addEventListener('input', updateLineWidth);

// Set up initial canvas context properties
ctx.strokeStyle = '#000000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 2;
