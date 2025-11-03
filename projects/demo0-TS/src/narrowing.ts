interface Fish {
    swim: () => string;
}

interface Bird {
    fly: () => string;
}

type Pet = Fish | Bird;

export const invoqueAction = (pet: Pet): string => {
    let result = '';

    result = 'swim' in pet ? pet.swim() : pet.fly();
    return result;
};

export const invoqueAction2 = (pet: Pet): string => {
    const guard = (pet: Pet): pet is Fish => {
        return (pet as Fish).swim !== undefined;
    };

    let result = '';
    result = guard(pet) ? pet.swim() : pet.fly();

    return result;
};
