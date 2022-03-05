let X = Math.PI;
let Y = 1.82;
let step = [100,500,1000,3000,10000];
let area = X * Y;

function randomY(){
    let y = Math.random() 
    return y;
}

function integral(x){
    value = x*(Math.sin(x))
    return value;
}

let sum = 0;
let count = 0;
step.forEach( element => {
    for(let i = 0; i < element; i++){
        let integralValue = integral(randomY());
        if( integralValue <= randomY()){
            sum += integralValue;
            count++;
        }
    }
    console.log(count)
    let areaRectange = (sum / count) * area
    let areaFigure = (area * count) / element
    console.log('Шаг: ',element, '\nПлощадь прямоугольника равна:',areaRectange)
    console .log('Площадь фигуры равна:',areaFigure)
    count = 0;
    sum = 0;
})



