let truckX = 0; // Posição inicial do caminhão

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(135, 206, 235); // Céu azul

    // Desenha o chão
    fill(34, 139, 34); // Verde para o campo
    rect(0, height / 2, width, height / 2); // Parte inferior como campo

    // Desenha árvores com frutas
    drawTree(100, height / 2 - 100);
    drawTree(300, height / 2 - 100);
    drawTree(500, height / 2 - 100);

    // Desenha o caminhão
    drawTruck(truckX, height / 2 - 50);

    // Move o caminhão para a direita
    truckX += 2; // Velocidade do caminhão
    if (truckX > width) {
        truckX = -100; // Reseta a posição do caminhão
    }
}

// Função para desenhar árvores
function drawTree(x, y) {
    // Tronco da árvore
    fill(139, 69, 19); // Cor marrom para o tronco
    rect(x, y, 20, 50); // Tronco

    // Folhas da árvore
    fill(0, 128, 0); // Verde para as folhas
    ellipse(x + 10, y - 20, 60, 60); // Folhas

    // Frutas
    fill(255, 0, 0); // Vermelho para as frutas
    ellipse(x + 30, y - 20, 10, 10); // Fruta 1
    ellipse(x - 10, y - 20, 10, 10); // Fruta 2
}

// Função para desenhar o caminhão
function drawTruck(x, y) {
    fill(255, 165, 0); // Cor laranja para o caminhão
    rect(x, y, 100, 50); // Corpo do caminhão

    fill(0); // Cor preta para as rodas
    ellipse(x + 20, y + 50, 20, 20); // Roda 1
    ellipse(x + 80, y + 50, 20, 20); // Roda 2
}