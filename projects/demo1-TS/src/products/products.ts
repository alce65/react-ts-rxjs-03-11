/* eslint-disable @typescript-eslint/no-extraneous-class */

export type Product = {
    id: string;
    name: string;
    price: number;
    category: string;
};

export class ProductApiService {
    static async createProduct(productFormData: FormData): Promise<Product> {
        // Simula una llamada a una API para crear un producto
        return new Promise((resolve) => {
            setTimeout(() => {
                const newProduct: Product = {
                    id: Math.random().toString(36).substring(2, 15),
                    name: productFormData.get('name') as string,
                    price: Number(productFormData.get('price')),
                    category: productFormData.get('category') as string,
                };
                resolve(newProduct);
            }, 1000);
        });
    }
}

export class AnalyticsService {
    static trackEvent(eventName: string, data: unknown): void {
        console.log(`[Analytics] Event: ${eventName}`, data);
    }
}

export class OperationTeamBusinessService {
    static notifyAfterProductCreation(product: Product): void {
        console.log(`[Operation Team] New product created:`, product);
        // Aquí podrías añadir lógica para notificar al equipo de operaciones
    }
}

export class LoggerService {
    static debug(message: string, data?: unknown): void {
        console.debug(`[DEBUG] ${message}`, data || '');
    }

    static error(message: string, error?: unknown): void {
        console.error(`[ERROR] ${message}`, error || '');
    }
}
