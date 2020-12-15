const SECRET_LIST: string[] = 'jeans umbrella popcorn quicksand unit mailbox bead frog'.split(' ');

async function stall(stallTime = 1000) {
    await new Promise((resolve) => setTimeout(resolve, stallTime));
}

export const getRandomWord = async () => {
    const randomword = SECRET_LIST[(Math.random() * SECRET_LIST.length) | 0];
    await stall();
    return new Promise<string>((resolve) => resolve(randomword));
};
