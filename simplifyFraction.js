function simplifyFraction(n, d) {
    // 1. Suggested Validation
    if (
        typeof n !== 'number' ||
        typeof d !== 'number' ||
        n <= 0 ||
        d <= 0 ||
        n % 1 !== 0 ||
        d % 1 !== 0 ||
        n > Number.MAX_SAFE_INTEGER ||
        d > Number.MAX_SAFE_INTEGER
    ) {
        throw new Error("Inputs must be valid positive integers within safe precision limits.");
    }

    // 2. Matrix Initializations
    let x = 0;
    let num = 1;
    let y = 1;
    let dem = 0;

    // 3. Euclidean Matrix Loop
    while (d) {
        const rem = n % d;
        const quo = (n - rem) / d;

        [n, d, x, num, y, dem] = [
            d,
            rem,
            num,
            x + quo * num,
            dem,
            y + quo * dem
        ];
    }

    // 4. Output
    const rem = num % dem;
    const whole = (num - rem) / dem;
    const improperText = num + "/" + dem;

    return {
        num: num,
        dem: dem,
        text: improperText,
        mixed: num < dem
            ? improperText
            : (rem === 0
                ? "" + whole
                : whole + " " + rem + "/" + dem)
    };
}
