// GET /products
// GET /products?categoryId=123&page=1
// GET /products/:productId
// POST /products
// PATCH /products/:productId
// DELETE /products/:productId
import axios from "axios";
import axiosClient from "./axiosClient.js";

const prefix = "/product";

const productApi = {
    getProducts: ({
        page = undefined,
        perPage = undefined,
        category = undefined,
        author = undefined,
        rating = undefined,
        priceFrom = undefined,
        priceTo = undefined,
        brand = [],
        sortKey = "on_sale",
        sortValue = "desc",
        search = '',
        limit = undefined,
        paginate = false,
    } = {}) => {
        let url = prefix;
        const queryStringArray = [];

        if (page) {
            queryStringArray.push(`page=${page}`);
        }

        if (perPage) {
            queryStringArray.push(`per_page=${perPage}`);
        }

        if (category) {
            queryStringArray.push(`category=${category}`);
        }

        if (author) {
            queryStringArray.push(`filter[author]=${author}`);
        }
        if (brand.length > 0) {
            let stringBrand = '';
            brand.forEach((item) => {
                stringBrand += `${item}-`;
            })
            stringBrand = stringBrand.slice(0, -1 ) ;
            queryStringArray.push(`brand=${stringBrand}`);
        }

        if (rating) {
            queryStringArray.push(`star=${rating}`);
        }

        if (priceFrom) {
            queryStringArray.push(`priceFrom=${priceFrom}`);
        }

        // if(search != ''){
        //     queryStringArray.push(`name=${search}`);
        // }

        if (priceTo) {
            queryStringArray.push(`priceTo=${priceTo}`);
        }

        if (sortKey && sortValue) {
            queryStringArray.push(`sort${sortKey}=${sortValue}`);
        }

        if (limit) {
            queryStringArray.push(`limit=${limit}`);
        }

        if (paginate) {
            queryStringArray.push("mode[paginate]=on");
        }

        if (queryStringArray.length > 0) {
            for (const index in queryStringArray) {
                url +=
                    index === "0"
                        ? `?${queryStringArray[index]}`
                        : `&${queryStringArray[index]}`;
            }
        }
        return axiosClient.get(url);
    },
    getAll: () => {
        const url = `${prefix}`;
        return axiosClient.get(url);
    },
    getProductById: (id) => {
        const url = `${prefix}/${id}`;
        return axiosClient.get(url);
    },
};

export default productApi;