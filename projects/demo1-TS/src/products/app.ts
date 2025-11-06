// Usage Example

import { AnalyticsListener, OperationTeamListener, LoggerListener } from "./product.listeners.js";
import { EventManager } from "./product.observer.js";
import { type Product, ProductApiService, LoggerService } from "./products.js";

// Configuración del EventManager y suscripción de listeners
const eventManager = new EventManager();
eventManager.subscribe('product_created', new AnalyticsListener());
eventManager.subscribe('product_created', new OperationTeamListener());
eventManager.subscribe('product_created', new LoggerListener());

// Función para crear un producto y emitir el evento
const createProductToAPI = async (productFormData: FormData): Promise<void> => {
    try {
        const createdProduct: Product = await ProductApiService.createProduct(
            productFormData
        );
        console.log(
            '[CREATE PRODUCT] Product created successfully:',
            createdProduct
        );

        // Emitir el evento después de la creación del producto
        // Ha desaparecido el acoplamiento directo con los servicios
        // AnalyticsService, OperationTeamBusinessService, LoggerService

        eventManager.emit('product_created', createdProduct);
    } catch (error) {
        LoggerService.error(
            '[CREATE PRODUCT] Error creating the product:',
            error
        );
    }
};

// Simulación de un formulario de producto

const productForm = new FormData();
productForm.append('name', 'New Product');
productForm.append('price', '99.99');
productForm.append('category', 'Category 1');

// Crear el producto

createProductToAPI(productForm);
