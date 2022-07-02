export const enum PaymentSystem {
    Visa = "visa",
    Electron = "electron",
    Mastercard = "mastercard",
    Maestro = "maestro",
    Mir = "mir",
}

export type PaymentSystemT = "visa" | "electron" | "mastercard" | "maestro" | "mir";

export function getPaymentSystem(cardNumber: string): PaymentSystem | null {
    if (cardNumber === "") {
        return null;
    }

    const one = Number.parseInt(cardNumber[0], 10);
    const two = Number.parseInt(cardNumber.slice(0, 2), 10);
    const three = Number.parseInt(cardNumber.slice(0, 3), 10);
    const four = Number.parseInt(cardNumber.slice(0, 4), 10);

    if (isMaestro(three, two, one)) {
        return PaymentSystem.Maestro;
    }

    if (isMastercard(four, two, one)) {
        return PaymentSystem.Mastercard;
    }

    if (isMir(four)) {
        return PaymentSystem.Mir;
    }

    if (isElectron(four)) {
        return PaymentSystem.Electron;
    }

    if (isVisa(one)) {
        return PaymentSystem.Visa;
    }

    return null;
}

export function isMaestro(three: number, two: number, one: number): boolean {
    if (one === 6) {
        return true;
    }

    if (two === 50 || (two > 55 && two < 59)) {
        return true;
    }

    if (three < 500) {
        return false;
    }

    return three < 510;
}

export function isMastercard(four: number, two: number, one: number): boolean {
    if (one === 5) {
        return true;
    }

    if (two < 10) {
        return false;
    }

    if (two > 50 && two < 56) {
        return true;
    }

    if (four < 1000) {
        return false;
    }

    return four > 2220 && four < 2721;
}

export function isMir(four: number): boolean {
    return four > 2199 && four < 2205;
}

export function isElectron(four: number): boolean {
    switch (four) {
        case 4026:
        case 4175:
        case 4405:
        case 4508:
        case 4844:
        case 4913:
        case 4917:
            return true;
        default:
            return false;
    }
}

export function isVisa(one: number): boolean {
    return one === 4;
}