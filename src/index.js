let a = parseFloat(prompt("Введите левую границу интегрирования (a):"));
let b = parseFloat(prompt("Введите правую границу интегрирования (b):"));
let c = 0;

function f(x) {
    return x * x - Math.cos(x);
}

function leftSum(func, a, b) {
    if (a > b) {
        alert("a не должно быть больше b, они будут автоматически поменяны");
        let c = b;
        b = a;
        a = c;
    }

    const n = 1000;
    const h = (b - a) / n;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += func(a + i * h) * h;
    }

    return sum;
}

const result = leftSum(f, a, b);
alert("Результат интегрирования: " + result);
