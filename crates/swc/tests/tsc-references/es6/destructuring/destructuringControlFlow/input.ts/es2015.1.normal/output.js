// @strict: true
function f1(obj) {
    if (obj.a) {
        obj = {
        };
        let a1 = obj["a"]; // string | undefined
        let a2 = obj.a; // string | undefined
    }
}
function f2(obj) {
    let a0 = obj[0]; // number | null
    let a1 = obj[1]; // string | null
    let [b0, b1] = obj;
    [a0, a1] = obj;
    if (obj[0] && obj[1]) {
        let c0 = obj[0]; // number
        let c1 = obj[1]; // string
        let [d0, d1] = obj;
        [c0, c1] = obj;
    }
}
function f3(obj) {
    if (obj.a && obj.b) {
        let { a , b  } = obj; // number, string
        ({ a , b  } = obj);
    }
}
function f4() {
    let x;
    ({ x  } = 0); // Error
    ({ ["x"]: x  } = 0); // Error
    ({ ["x" + ""]: x  } = 0); // Errpr
}
let [key, value] = [
    "foo"
];
value.toUpperCase(); // Error