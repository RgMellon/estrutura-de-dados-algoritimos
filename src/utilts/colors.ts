export const COLORS = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
}


export type Props = {
    [key: string]: number
}

export const initializeColors = (vertices: string[]) => {
    const colors: Props = {};

    for (let index = 0; index < vertices.length; index++) {
        colors[vertices[index]] = COLORS.WHITE;
    }

    return colors;
}