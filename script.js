// Configuração do canvas
const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');
const pixelBox = document.getElementById('pixelBox');
const brushSizeSlider = document.getElementById('brushSize');
const brushValueDisplay = document.getElementById('brushValue');

// Variáveis de estado
let isDrawing = false;
let brushSize = 2;

// Inicialização
function init() {
    // Limpa o canvas
    clearCanvas();
    
    // Atualiza display de pixels inicial
    updatePixelDisplay();
    
    // Event listeners para desenho
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Event listeners para touch (mobile)
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', stopDrawing);
    
    // Event listener para tamanho do pincel
    brushSizeSlider.addEventListener('input', function() {
        brushSize = parseInt(this.value);
        brushValueDisplay.textContent = brushSize;
    });
}

// Funções de desenho
function startDrawing(e) {
    isDrawing = true;
    draw(e);
}

function stopDrawing() {
    isDrawing = false;
    updatePixelDisplay();
}

function draw(e) {
    if (!isDrawing) return;
    
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);
    
    drawPixel(x, y);
}

function handleTouchStart(e) {
    e.preventDefault();
    isDrawing = true;
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

function handleTouchMove(e) {
    e.preventDefault();
    if (!isDrawing) return;
    
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = Math.floor((touch.clientX - rect.left) * scaleX);
    const y = Math.floor((touch.clientY - rect.top) * scaleY);
    
    drawPixel(x, y);
}

function drawPixel(centerX, centerY) {
    // Desenha com o tamanho do pincel
    const halfBrush = Math.floor(brushSize / 2);
    
    for (let dy = -halfBrush; dy <= halfBrush; dy++) {
        for (let dx = -halfBrush; dx <= halfBrush; dx++) {
            const x = centerX + dx;
            const y = centerY + dy;
            
            // Verifica se está dentro dos limites
            if (x >= 0 && x < 28 && y >= 0 && y < 28) {
                // Pinta o pixel de preto (255 de intensidade)
                ctx.fillStyle = 'black';
                ctx.fillRect(x, y, 1, 1);
            }
        }
    }
}

// Função para limpar o canvas
function clearCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    updatePixelDisplay();
}

// Função para obter os valores dos pixels
function getPixelValues() {
    const imageData = ctx.getImageData(0, 0, 28, 28);
    const pixels = [];
    
    // Converte os dados RGBA para valores de 0-255
    for (let i = 0; i < imageData.data.length; i += 4) {
        const r = imageData.data[i];
        const g = imageData.data[i + 1];
        const b = imageData.data[i + 2];
        
        // Calcula a intensidade (média RGB)
        // Inverte: branco = 0, preto = 255
        const intensity = 255 - Math.floor((r + g + b) / 3);
        pixels.push(intensity);
    }
    
    return pixels;
}

// Função para atualizar o display de pixels
function updatePixelDisplay() {
    const pixels = getPixelValues();
    let display = '';
    
    // Formata como matriz 28x28
    for (let i = 0; i < 28; i++) {
        const row = pixels.slice(i * 28, (i + 1) * 28);
        // Formata cada valor com 3 dígitos
        const formattedRow = row.map(val => val.toString().padStart(3, ' ')).join(' ');
        display += formattedRow + '\n';
    }
    
    pixelBox.textContent = display;
    
    // Também pode ser útil ter os valores como array
    console.log('Pixel values:', pixels);
}

// Função para exportar os dados (útil para ML)
function exportPixelData() {
    const pixels = getPixelValues();
    const blob = new Blob([JSON.stringify(pixels)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mnist_pixels.json';
    a.click();
    URL.revokeObjectURL(url);
}

// Função para salvar em TXT (compatível com Python)
function saveToTxt() {
    const pixels = getPixelValues();
    // Junta todos os valores com espaço
    const pixelString = pixels.join(' ');
    
    const blob = new Blob([pixelString], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'numero.txt';
    a.click();
    URL.revokeObjectURL(url);
    
    console.log('Arquivo salvo: numero.txt');
    console.log('Total de pixels:', pixels.length);
}

// Inicializa ao carregar a página
window.addEventListener('load', init);