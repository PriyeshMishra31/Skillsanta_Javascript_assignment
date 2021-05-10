// program to pass a function as a parameter

function greet() {
    return 'Welcome';
}

// passing function greet() as a parameter
function name(username, func)
{

    // accessing passed function
    const message = func();

    document.write(`${message}
     ${username}`);
}

name('Priyesh', greet,);
name('Pragyesh', greet);
name('Tarun', greet);