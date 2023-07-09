/*En un establecimiento de juegos existen cuatro salas: Arcade, Consolas, Rol, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala.*/
let cantCreditos = parseInt(prompt("¿Cuántos creditos deseas comprar?, elegí una de las siguientes opciones :\n 1)Arcade \n 2)Consolas \n 3)Rol \n 4)Realidad virtual"));

switch (true) {
    case (isNaN(cantCreditos)):
        console.error("Opción ingresada incorrecta, recuerda que debes ingresar un número entero positivo.✨✨")
        break;
        case (cantCreditos === 1):
        console.log(`Muy bien,compraste : ${cantCreditos} credito,tienes acceso a : \n 🕹️Arcade`);
        break;
        case (cantCreditos === 2):
        console.log(`Muy bien,compraste : ${cantCreditos} creditos,tienes acceso a : \n 🕹️Arcade \n 🎮Consolas`);
        break;
        case (cantCreditos === 3):
        console.log(`Muy bien,compraste : ${cantCreditos} creditos,tienes acceso a :  \n 🕹️Arcade \n 🎮Consolas \n 🤖Rol`);
        break;
        case (cantCreditos === 4):
        console.log(`Muy bien,compraste : ${cantCreditos} creditos,tienes acceso a : \n 🕹️Arcade \n 🎮Consolas \n 👾Rol y \n 🤖Realidad virtual`);
        break;
        case (cantCreditos > 4 && cantCreditos <= 20):
        alert(`Genial😉,compraste : ${cantCreditos} creditos,puedes usar los todos juegos que deseas dentro de las siguientes 48hs 😉👏`)
        break;
        default:
            console.warn('No se encuentra disponible esa opción😞.');
};