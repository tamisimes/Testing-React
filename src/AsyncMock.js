const products = [
    {
        id: '1',
        nombre: 'Remera Negra con Logo',
        precio: 11500,
        categoria: 'Remeras',
        img: 'https://www.digitalsport.com.ar/files/products/570d4116bfd39-294550-500x500.jpg',
        stock: 15,
        descripcion: 'Remera Negra Lisa de Algodón'
    },
    {
        id: '2',
        nombre: 'Remera Blanca con Mariposa',
        precio: 12500,
        img: 'https://www.digitalsport.com.ar/files/products/570d4116bfd39-294550-500x500.jpg',
        stock: 10,
        descripcion: 'Remera Blanca de Algodón con Estampado de Mariposa'
    },
    {
        id: '3',
        nombre: 'Remera Blanca Símbolo de Paz',
        precio: 13000,
        img: 'https://i0.wp.com/tiendaproactiva.com.ar/wp-content/uploads/2022/05/PAZ-Reme-Blanca-copia-scaled.jpg?fit=2556%2C2560&ssl=1',
        stock: 20,
        descripcion: 'Remera Blanca de Algodón con Estampado de Paz'
    },
    {
        id: '4',
        nombre: 'Remera Blanca Símbolo de Paz',
        precio: 13000,
        img: 'https://i0.wp.com/tiendaproactiva.com.ar/wp-content/uploads/2022/05/PAZ-Reme-Blanca-copia-scaled.jpg?fit=2556%2C2560&ssl=1',
        stock: 20,
        descripcion: 'Remera Blanca de Algodón con Estampado de Paz'      

    },
    {
        id:5,
        nombre: 'Remera Blanca Símbolo de Paz',
        precio: 13000,
        img: 'https://i0.wp.com/tiendaproactiva.com.ar/wp-content/uploads/2022/05/PAZ-Reme-Blanca-copia-scaled.jpg?fit=2556%2C2560&ssl=1',
        stock: 20,
        descripcion: 'Remera Blanca de Algodón con Estampado de Paz'
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise ((resolve)=> {
        setTimeout (()=>{
            resolve (products.find (prod => prod.id === productId))
        }, 500)
    })
}