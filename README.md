# MNIST Canvas Draw - 28x28

![MNIST Canvas Draw](https://img.shields.io/badge/IA-IFSULDEMINAS-blue)
![Status](https://img.shields.io/badge/Status-Ativo-success)
![License](https://img.shields.io/badge/License-Educational-orange)

## 📚 Sobre o Projeto

Ferramenta educacional desenvolvida para a disciplina de **Inteligência Artificial** do **IFSULDEMINAS - Campus Machado**. O projeto permite visualizar de forma prática como imagens são representadas numericamente em Redes Neurais, utilizando o formato padrão do dataset MNIST (28x28 pixels).

## 🎯 Objetivos Didáticos

- Compreender a transformação de uma imagem em matriz numérica
- Visualizar a representação de pixels em valores de 0-255
- Preparar dados no formato compatível com modelos de Machine Learning
- Experimentar com o formato MNIST usado em reconhecimento de dígitos manuscritos

## 🚀 Funcionalidades

### Canvas de Desenho
- **Resolução:** 28x28 pixels (padrão MNIST)
- **Tamanho visual:** 560x560 pixels (ampliado para facilitar o desenho)
- **Pincel ajustável:** Tamanhos de 1 a 5 pixels
- **Suporte:** Mouse e touch (dispositivos móveis)

### Visualização de Dados
- **Display em tempo real:** Mostra os 784 valores de pixels (28×28)
- **Formato matriz:** Valores formatados em grade 28x28
- **Escala de cores:** 0 = vazio (branco), 1-255 = desenhado (preto)

### Exportação
- **Salvar TXT:** Exporta valores separados por espaço
- **Compatibilidade Python:** Formato pronto para leitura com NumPy
- **Nome do arquivo:** `numero.txt`

## 📁 Estrutura do Projeto

```
Mnist Canva Draw/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos e layout
├── script.js           # Lógica de desenho e exportação
└── README.md           # Documentação do projeto
```


## 🔧 Tecnologias Utilizadas

- **HTML5 Canvas:** Para desenho e manipulação de pixels
- **JavaScript (Vanilla):** Lógica de interação e processamento
- **CSS3:** Estilização e layout responsivo

## 📊 Formato dos Dados

### Estrutura do Array
- **Total de pixels:** 784 (28 × 28)
- **Valores:** 0 a 255
  - `0`: Pixel vazio (fundo branco)
  - `1-255`: Pixel desenhado (intensidade do preto)

### Exemplo de Saída (numero.txt)
```
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
...
```

## 🎓 Aplicações Educacionais

### Conceitos Trabalhados
- Representação numérica de imagens
- Estrutura de dados para Machine Learning
- Pré-processamento de imagens
- Dataset MNIST e reconhecimento de padrões
- Preparação de dados para Redes Neurais Convolucionais (CNN)

### Exercícios Sugeridos
1. Desenhar os 10 dígitos (0-9) e exportar cada um
2. Criar um dataset personalizado de caracteres
3. Comparar valores de pixels de diferentes dígitos
4. Implementar um modelo de classificação usando os dados exportados

## 📖 Referências

- [MNIST Database](http://yann.lecun.com/exdb/mnist/)
- [TensorFlow MNIST Tutorial](https://www.tensorflow.org/datasets/catalog/mnist)
- [Canvas API - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

## 👨‍🏫 Instituição

**IFSULDEMINAS - Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais**
- Campus: Machado
- Disciplina: Inteligência Artificial 


## 📝 Licença

Este projeto foi desenvolvido para fins educacionais e está disponível para uso acadêmico.

---

**Desenvolvido para fins didáticos | IFSULDEMINAS - Campus Machado**
