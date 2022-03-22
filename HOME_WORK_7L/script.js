function consoleNKdigit1(n) {
    for(let i = 0; i <= n; i++) {
        if (n % 2 != 0) {
            return true;
        }       
    }
    return false;
}

function consoleNKdigit2(n) {
    for(let i = 0; i <= n; i++) {
        if (n % 2 === 0) {
            return true;
        }       
    }
    return false;
}

function consoleNSimpledigit(n,k) {

    for (let i = k; i <= n; i = i + k) {
        if (consoleNKdigit1(i)) {
            console.log(i);
        }
        if (consoleNKdigit2(i)) {
            console.log(i);
        }
    }
}

