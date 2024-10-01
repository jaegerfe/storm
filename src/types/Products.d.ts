export interface Product {
    product: string;
    description: string;
    status: string;
    serial: string;
    id: number;
    quantity: number;
    total: number;
    image?: string;
}

export interface ProductsState {
    productsList: Product[],
    total: number,
}

export interface ProductApiResponse {
    data: Product[];
    total: number;
}
