const logCalculation = (area: number) => {
    console.log(`Calculando el area: ${area}`);
}

// Exportacion directa de la funcion 
export const calculateTriangleArea = (base: number, height: number): number => {
    const area = (base * height) / 2;
    logCalculation(area) // uso de la funcion privada
    return area;
}

export const TRIANGLE_NAME = 'Triangle';