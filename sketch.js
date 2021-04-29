var nivel = 1;
var escolhaFase = 0;

var larguraBotoes = 200;
var alturaBotoes = 50;

var xMinBotao1 = 200;
var xMaxBotao1 = xMinBotao1 + larguraBotoes;
var yMinBotao1 = 160;
var yMaxBotao1 = yMinBotao1 + alturaBotoes;

var xMinBotao2 = 200;
var xMaxBotao2 = xMinBotao2 + larguraBotoes;
var yMinBotao2 = 220;
var yMaxBotao2 = yMinBotao2 + alturaBotoes

var xMinBotao3 = 200;
var xMaxBotao3 = xMinBotao3 + larguraBotoes;
var yMinBotao3 = 280;
var yMaxBotao3 = yMinBotao3 + alturaBotoes;

var imagemCredito1;
var imagemCredito2;
var imagemTF;
var imagemMenu;
var imagemMenu1;
var imagemTN;

var tela = 0;

function tentenovamente(){
  if(keyIsDown(ESCAPE)){
    tela = 0
  }
  
  background("#3399ff");
  
  fill("white");
  rect(25, 75, 550, 110, 25, 25, 25, 25);
  
  textSize(35);
  textFont("fantasy")
  fill(0);
  text("UMA PENA! TENTE NOVAMENTE!", 92, 100, 420);
  
  textSize(20);
  fill(0);
  text("*APERTE A TECLA ESCAPE (ESC) PARA VOLTAR AO MENU DO JOGO", 295, 160);

  image(imagemTN, 220, 210)
}

function mousePressed(){
  if(tela == 1 && nivel == 1){
    if(escolhaFase == 1 || escolhaFase == 3 || escolhaFase == 4 || escolhaFase == 5 || escolhaFase == 6 || escolhaFase == 7 || escolhaFase == 8){
      tela = 4;
    }
    if(escolhaFase == 2){
      nivel = 2;
    }
  }
  else{
    if(tela == 1 && nivel == 2){
    if(escolhaFase == 5){
    nivel = 3;
     }
    if(escolhaFase == 1 || escolhaFase == 2 || escolhaFase == 3 || escolhaFase == 4 || escolhaFase == 6 || escolhaFase == 7 || escolhaFase == 8){
      tela = 4;
    }
  }
  }
  if(tela == 1 && nivel == 3){
    if(escolhaFase == 1 || escolhaFase == 3){
      tela = 4;
    }
    if(escolhaFase == 2){
      nivel = 4;
    }
    
  }
  else{
    if(tela == 1 && nivel == 4){
    if(escolhaFase == 1 || escolhaFase == 2 || escolhaFase == 3 || escolhaFase == 4 || escolhaFase == 5 || escolhaFase == 6 || escolhaFase == 8){
      tela = 4;
    }
    if(escolhaFase == 7){
      nivel = 5;
    }
  }
  }
  if(tela == 1 && nivel == 5){
    if(escolhaFase == 2 || escolhaFase == 3){
      tela = 4;
    }
    if(escolhaFase == 1){
      nivel = 6;
    }
  }
  else{
    if(tela == 1 && nivel == 6){
      if(escolhaFase == 1 || escolhaFase == 2){
        tela = 4;
      }
      if(escolhaFase == 3){
        tela = 5;
      }
    }
  }
}

function opcaoBotao(xMin, xMax, yMin, yMax, largura, altura, csc, ccc, opcao){
  
  yMax = yMin + altura
  xMax = xMin + largura
  
  if(mouseX > xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax){
     
     fill(ccc);
      escolhaFase = opcao;

    }else{
      fill(csc);
    }
    rect(xMin, yMin, largura, altura)
    yMax = yMin = -1;
}

function fase1(){
  background("#C07CDA")
  
  fill("white")
  rect(35, 50, 530, 70, 15, 15, 15, 15)
  
  textSize(37)
  fill(0)
  text("1 - SELECIONE O QUADRADO AZUL:", 47, 68, 500)
  
  escolhaFase = 0;
    
  opcaoBotao(70, 170, 150, 250, 100, 100, "green", "darkgreen", 1);
  
  opcaoBotao(190, 290, 150, 250, 100, 100, "blue", "darkblue", 2);
  
  opcaoBotao(310, 410, 150, 250, 100, 100, "red", "darkred", 3);
  
  opcaoBotao(430, 530, 150, 250, 100, 100, "yellow", "#999900", 4);
    
  opcaoBotao(70, 170, 270, 370, 100, 100, "pink", "#ff99a8", 5);
  
  opcaoBotao(190, 290, 270, 370, 100, 100, "orange", "#cc8500", 6);
  
  opcaoBotao(310, 410, 270, 370, 100, 100, "white", "#E0E0E0", 7);
  
  opcaoBotao(430, 530, 270, 370, 100, 100, "purple", "#6f006f", 8);
}

function fase2(){
  noStroke()
  textFont("fantasy")
  
  background("#009999")
  
  fill("white")
  rect(35, 50, 530, 70, 15, 15, 15, 15)
  
  textSize(35);
  fill(0);
  text("2 -SELECIONE O QUADRADO VERMELHO:", 42, 68, 520)
  
  escolhaFase = 0;
    
  opcaoBotao(70, 170, 150, 250, 100, 100, "white", "#E0E0E0", 1);
  
  opcaoBotao(190, 290, 150, 250, 100, 100, "yellow", "#999900", 2);
  
  opcaoBotao(310, 410, 150, 250, 100, 100, "cyan", "#00cccc", 3);
  
  opcaoBotao(430, 530, 150, 250, 100, 100, "purple", "#6f006f", 4);
    
  opcaoBotao(70, 170, 270, 370, 100, 100, "red", "darkred", 5);
  
  opcaoBotao(190, 290, 270, 370, 100, 100, "green", "darkgreen", 6);
  
  opcaoBotao(310, 410, 270, 370, 100, 100, "pink", "#ff99a8", 7);
  
  opcaoBotao(430, 530, 270, 370, 100, 100, "orange", "#cc8500", 8);
}

function fase3(){
  background("#FF699F")
  
  fill("white")
  rect(35, 50, 530, 120, 15, 15, 15, 15)
  
  textSize(25)
  fill(0)
  text("3 - JUNTANDO AS CORES AZUL E VERMELHA TEMOS A COR ROXA. QUAL DESTES QUADRADOS ABAIXO É         ROXO?", 47, 70, 500)
  
  escolhaFase = 0;
  
  opcaoBotao(120, 220, 230, 330, 100, 100, "yellow", "#999900", 1);
  
  opcaoBotao(250, 350, 230, 330, 100, 100, "purple", "#6f006f", 2);
  
  opcaoBotao(380, 480, 230, 330, 100, 100, "green", "darkgreen", 3);
  
}

function fase4(){
  noStroke()
  textFont("fantasy")
  
  background("#FF3F3F")
  
  fill("white")
  rect(35, 50, 530, 70, 15, 15, 15, 15)
  
  textSize(35);
  fill(0);
  text("4 - SELECIONE O QUADRADO AMARELO:", 45, 70, 510)
  
  escolhaFase = 0;
    
  opcaoBotao(70, 170, 150, 250, 100, 100, "orange", "#cc8500", 1);
  
  opcaoBotao(190, 290, 150, 250, 100, 100, "green", "darkgreen", 2);
  
  opcaoBotao(310, 410, 150, 250, 100, 100, "gray", "dimgray", 3);
  
  opcaoBotao(430, 530, 150, 250, 100, 100, "#663300", "#4d2600", 4);
      
  opcaoBotao(70, 170, 270, 370, 100, 100, "pink", "#ff99a8", 5);
  
  opcaoBotao(190, 290, 270, 370, 100, 100, "cyan", "#00cccc", 6);
  
  opcaoBotao(310, 410, 270, 370, 100, 100, "yellow", "#999900", 7);
  
  opcaoBotao(430, 530, 270, 370, 100, 100, "white", "#E0E0E0", 8);
}

function fase5(){
  background("#57C394")
  
  fill("white")
  rect(35, 50, 530, 120, 15, 15, 15, 15)
  
  textSize(25)
  fill(0)
  text("5 - JUNTANDO AS CORES AMARELA E AZUL TEMOS A   COR VERDE. QUAL DESTES QUADRADOS ABAIXO É       VERDE?", 47, 70, 500)
  
  escolhaFase = 0;
  
  opcaoBotao(120, 220, 230, 330, 100, 100, "green", "darkgreen", 1);
  
  opcaoBotao(250, 350, 230, 330, 100, 100, "orange", "#cc8500", 2);
  
  opcaoBotao(380, 480, 230, 330, 100, 100, "cyan", "#00cccc", 3);
}

function fase6(){
  background("#3E59F1")
  
  fill("white")
  rect(35, 50, 530, 120, 15, 15, 15, 15)
  
  textSize(25)
  fill(0)
  text(" 6 - JUNTANDO AS CORES AMARELA E VERMELHA            TEMOS A COR LARANJA. QUAL DESTES QUADRADOS   ABAIXO É LARANJA?", 47, 68, 500)
  
  escolhaFase = 0;
  
  opcaoBotao(120, 220, 230, 330, 100, 100, "pink", "#ff99a8", 1);
  
  opcaoBotao(250, 350, 230, 330, 100, 100, "gray", "dimgray", 2);
  
  opcaoBotao(380, 480, 230, 330, 100, 100, "orange", "#cc8500", 3);
}

function telaFinal(){
  if(keyIsDown(ESCAPE)){
    tela = 0
    nivel = 1;
  }
  background("#3399ff");
  
  fill("white");
  rect(35, 50, 530, 100, 15, 15, 15, 15);
  
  textSize(30);
  fill(0);
  text("          PARABÉNS! VOCÊ CONCLUIU TODAS AS            FASES COM ÊXITO!", 47, 68, 500);
  
  image(imagemTF, 210, 190)
  
  textSize(15);
  fill(0);
  text("APERTE A TECLA ESCAPE (ESC) PARA VOLTAR AO MENU DO JOGO", 420, 395);
}

function menuBotao(texto, yMin, yMax, opcao, AA, BB){
    if ( mouseX > xMinBotao3 && mouseX < xMaxBotao3 && mouseY > yMin && mouseY < yMax){
      fill(BB);
      if (mouseIsPressed){
        tela = opcao;
      }
    } else {
      fill(AA)
    }
    rect(xMinBotao3, yMin, larguraBotoes, alturaBotoes)
    textSize(30)
    fill(0)
    text(texto, xMinBotao3 + 95, yMin + 36)
}

function telaMenu(){
  textAlign(CENTER);
  noStroke();
  background("#3399ff");
  //#7FE85B
  //#101010
  
  fill("white");
  rect(75, 50, 450, 75, 15, 15, 15, 15);
  
  textSize(45);
  textFont("fantasy");
  fill(0);
  text("CONHECENDO AS CORES", 93, 67, 420);
    
    menuBotao("JOGAR", yMinBotao1, yMaxBotao1, 1, "blue", "darkblue");
    
    menuBotao(" INSTRUÇÕES", yMinBotao2, yMaxBotao2, 2, "red", "darkred");
    
    menuBotao("CRÉDITOS", yMinBotao3, yMaxBotao3, 3, "yellow", "#999900");
  
  image(imagemMenu, 10, 230);
  image(imagemMenu1, 430, 230);
  
}

function telaInstrucoes(){
  if(keyIsDown(ESCAPE)){
    tela = 0
  }
  
  background("red");
  
  fill("white");
  rect(150, 50, 300, 70, 20, 20, 20, 20);
  
  textSize(40);
  fill(0);
  text("INSTRUÇÕES", 300, 102);
  
  fill("white");
  rect(50, 200, 500, 80, 20, 20, 20, 20);
  
  textSize(20);
  fill(0);
  text("USE O MOUSE PARA SELECIONAR A OPÇÃO CORRETA EM       CADA FASE", 77, 217, 450);
  
  textSize(15);
  fill(0);
  text("APERTE A TECLA ESCAPE (ESC) PARA VOLTAR AO MENU DO JOGO", 420, 395);
}

function telaCreditos(){
  //VOLTAR PARA TELA DO MENU
  if(keyIsDown(ESCAPE)){
    tela = 0;
  }
  
  background("yellow");
  
  fill("white");
  rect(170, 38, 260, 50, 25, 25, 25, 25);
  
  textSize(40);
  fill(0);
  text("CRÉDITOS", 295, 80);
  
  fill("white");
  rect(10, 110, 580, 130, 10, 10, 10, 10);
  image(imagemCredito1, 19, 125);
  fill("white");
  rect(10, 255, 580, 112, 10, 10, 10, 10);
  image(imagemCredito2, 22, 261);
  
  textSize(25);
  fill(0);
  text("Wendy Sousa de Oliveira", 258, 138);
  
  textSize(25);
  fill(0);
  text("Função: estudante.", 228, 163);
  
  textSize(20);
  fill(0);
  text("Tecnóloga em gestão de recursos humanos pela              Unifacex, e estudante de Gestão Hospitalar pela               Universidade Federal do Rio Grande do Norte.", 130, 165, 450);
  
  //DENILSON
  textSize(25);
  fill(0);
  text("Denilson Ivo de Araújo Melo",273, 282);
  
  textSize(25);
  fill(0);
  text("Função: programador.", 243, 307);
  
  textSize(20);
  fill(0);
  text("Graduando em Ciências e Tecnologia pela                     Universidade Federal do Rio Grande do Norte.", 130, 315, 420);
  
  textSize(15);
  fill(0);
  text("APERTE A TECLA ESCAPE (ESC) PARA VOLTAR AO MENU DO JOGO", 420, 395);
}

function preload(){
  imagemCredito1 = loadImage("fotoWendyEditada.png");
  imagemCredito2 = loadImage("fotoDenilsonEditada.jpg");
  imagemTF = loadImage("imtf.png");
  imagemMenu = loadImage("immenu.png");
  imagemMenu1 = loadImage("immenu1.png")
  imagemTN = loadImage("sad.png");
}

function setup(){
  createCanvas(600, 400);
}

function draw(){
  if(tela == 0){
  telaMenu()
  }
  if(tela == 1){
    if(nivel == 1){
      fase1();
    }
    if(nivel == 2){
      fase2();
    }
    if(nivel == 3){
      fase3();
    }
    if(nivel == 4){
      fase4();
    }
    if(nivel == 5){
      fase5();
    }
    if(nivel == 6){
      fase6();
    }
  }
  if(tela == 2){
    telaInstrucoes()
  }
  if(tela == 3){
    telaCreditos()
  }
  if(tela == 4){
    tentenovamente()
  }
  if(tela == 5){
    telaFinal();
  }
}