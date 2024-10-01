import mockedProducts from '@/api/mocked-products.json';

export const getProducts = (productName = "", sortBy = "", asc = true) => {
    let products = [...mockedProducts];

    if (productName !== "") {
        products = mockedProducts.filter((product) => product.product.includes(productName));
    }

    if (sortBy !== "") {

        products = products.sort((pa, pb) => {
            if (asc) {
                return pa[sortBy]?.toString().localeCompare(pb[sortBy]?.toString());
            } else {
                return pb[sortBy]?.toString().localeCompare(pa[sortBy]?.toString());
            }
        });
    }

    return {
        data: products,
        total: mockedProducts.length
    };
};
