import {
    AnalyticsService,
    LoggerService,
    OperationTeamBusinessService,
    type Product,
    ProductApiService,
} from './products.js';

const createProductToAPI = async (productFormData: FormData): Promise<void> => {
    try {
        const createdProduct: Product = await ProductApiService.createProduct(
            productFormData
        );
        console.log(
            '[CREATE PRODUCT] Product created successfully:',
            createdProduct
        );
        AnalyticsService.trackEvent('product_created', createdProduct);
        OperationTeamBusinessService.notifyAfterProductCreation(createdProduct);
        LoggerService.debug(
            '[CREATE PRODUCT] All business tasks executed successfully'
        );
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
