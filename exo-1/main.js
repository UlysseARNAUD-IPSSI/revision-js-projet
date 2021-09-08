function password(
    size = 12,
    params = {},
    globals = {}
) {

    // Nos valeurs par défaut pour le paramètre params

    const defaultParams = {
        numbers: true,
        lowercase: true,
        specials: true
    }

    params = {...defaultParams, ...params}

    // On "parse" les valeurs de params pour qu'ils correspondent aux bons types.
    params = {
        ...params,
        size: +params.size
    }

    const {numbers, lowercase, specials} = params

    // On stocke les différents alphabets, soit uppercase, numbers, lowercase et specials.

    const alphabets = {}

    alphabets.uppercase = _generateAlphabet(26, 65)

    if (numbers) alphabets.numbers = [...Array(10).keys()]

    if (lowercase) alphabets.lowercase = _generateAlphabet(26, 97)

    if (specials) alphabets.specials = [
        ..._generateAlphabet(1, 33),
        ..._generateAlphabet(4, 35),
        ..._generateAlphabet(4, 40),
        ..._generateAlphabet(1, 45),
        ..._generateAlphabet(1, 47),
        ..._generateAlphabet(5, 60),
    ]

    // je garde en mémoire l'alphabet dans la variable globals,
    // ça ne sert pas à grand chose tout de suite mais on peut très bien imaginer
    // un debug ou une autre fonctionnalité de la fonction utilisant les alphabets générés.
    globals.alphabets = alphabets


    // On commence la génération du mot de passe
    let password = Array(size)

    for (let i = 0; i < size; ++i) {
        // Une variable tampon qui nous permettra de recupere les alphabets sous forme d'array.
        let _alphabets
        // On récupère un alphabet aléatoirement
        const alphabet = (_alphabets = Object.values(alphabets))[Math.floor(Math.random() * _alphabets.length)]
        password[i] = alphabet[Math.floor(Math.random() * alphabet.length)]
    }

    // On retourne une chaîne de caractères correspondant à notre mot de passe.
    return password.join('')

    function _generateAlphabet(size, start) {
        return [...Array.from(Array(size).keys()).map(index => index + start)].map(index => String.fromCharCode(index))
    }

}