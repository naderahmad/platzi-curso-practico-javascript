// Codigo del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
};
function areaCuadrado(lado) {
    return lado * lado;
};

// Codigo del triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

// Codigo del Circulo
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI.toFixed(2);

// Perimetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}

// Calcular Triangulo
function calcularTriangulo() {
    const inputAltura = document.getElementById("inputAltura");
    const inputBase = document.getElementById("inputBase");
    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB");
    const resArea = document.getElementById("aResult");
    const resPerimetro = document.getElementById("pResult");
    const h = parseInt(inputAltura.value);
    const bs = parseInt(inputBase.value);
    const a = parseInt(inputA.value);
    const b = parseInt(inputB.value);
    const perimetro = perimetroTriangulo(a, b, bs);
    const area = areaTriangulo(bs, h);
    resPerimetro.innerHTML = perimetro + " cm";
    resArea.innerHTML = area + " cm";
}

// Calcular Circulo
function calcularCirculo() {
    const inputRadio = document.getElementById("inputRadio");
    const resArea = document.getElementById("aResult");
    const resPerimetro = document.getElementById("pResult");
    const r = parseInt(inputRadio.value);
    const area = areaCirculo(r)
    const perimetro = perimetroCirculo(r);
    resPerimetro.innerHTML = perimetro.toFixed(2) + " cm";
    resArea.innerHTML = area.toFixed(2) + " cm";
}

// Calcular Cuadrado
function calcularCuadrado() {
    const inputLados = document.getElementById("inputLados");
    const resArea = document.getElementById("aResult");
    const resPerimetro = document.getElementById("pResult");
    const lado = parseInt(inputLados.value);
    const area = areaCuadrado(lado)
    const perimetro = perimetroCuadrado(lado);
    resPerimetro.innerHTML = perimetro.toFixed(2) + " cm";
    resArea.innerHTML = area.toFixed(2) + " cm";
}

// Restablecer formulario
function restablecer() {
    const resArea = document.getElementById("aResult");
    const resPerimetro = document.getElementById("pResult");
    document.getElementById("form").reset();
    resPerimetro.innerHTML = 0 + " cm";
    resArea.innerHTML = 0 + " cm";
}