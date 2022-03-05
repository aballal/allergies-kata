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

export class Allergies {
    private allergies: string[];

    constructor(_value: number) {
        const value = _value % 256;
        this.allergies = [0,1,2,3,4,5,6,7].map(i => (2**i & value) > 0 ? Allergens[i] : undefined).filter(Boolean);
    }

    public list(): string[] {
        return [...this.allergies];
    }

    public allergicTo(allergen: string) {
        return this.allergies.includes(allergen);
    }
}
