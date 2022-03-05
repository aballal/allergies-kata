enum Allergens {
    eggs = 0,
    peanuts,
    shellfish,
    strawberries,
    tomatoes,
    chocolate,
    pollen,
    cats,
}

function decimalToBinaryArray(value: number): Array<0 | 1> {
    const unsignedBits = [...(value >>> 0).toString(2)].map(e => parseInt(e));
    return new Array(8 - unsignedBits.length).fill(0).concat(unsignedBits);
}

export class Allergies {
    private allergies: string[];

    constructor(value: number) {
        const littleEndianUnsignedBinaryArray = decimalToBinaryArray(value >= 256 ? value % 256 : value ).reverse();
        this.allergies = littleEndianUnsignedBinaryArray.map((value, index) => value === 1 ? Allergens[index] : undefined).filter(Boolean);
    }

    public list(): string[] {
        return [...this.allergies];
    }

    public allergicTo(allergen: string) {
        throw new Error('Implement this method!');
    }
}
