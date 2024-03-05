const products = [
    {
        id: '1',
        nombre: 'Remera Negra con Logo',
        precio: 11500,
        category: 'Remeras',
        img: 'https://www.digitalsport.com.ar/files/products/570d4116bfd39-294550-500x500.jpg',
        stock: 15,
        descripcion: 'Remera Negra Lisa de Algodón'
    },
    {
        id: '2',
        nombre: 'Remera Blanca con Mariposa',
        precio: 12500,
        category: 'Remeras',
        img: 'https://acdn.mitiendanube.com/stores/001/456/050/products/1031-f51d346d1d16ce327716930060974325-640-0.jpg',
        stock: 10,
        descripcion: 'Remera Blanca de Algodón con Estampado de Mariposa'
    },
    {
        id: '3',
        nombre: 'Buzo  Gris Mickey Mouse',
        precio: 22000,
        category: 'Buzos',
        img: 'https://sportotalar.vtexassets.com/arquivos/ids/359875-600-600?v=637910034253430000&width=600&height=600&aspect=true',
        stock: 12,
        descripcion: 'Buzo Gris con Dibujo de Mickey Mouse'
    },
    {
        id: '4',
        nombre: 'Remera Blanca Símbolo de Paz',
        precio: 13000,
        category: 'Remeras',
        img: 'https://i0.wp.com/tiendaproactiva.com.ar/wp-content/uploads/2022/05/PAZ-Reme-Blanca-copia-scaled.jpg?fit=2556%2C2560&ssl=1',
        stock: 20,
        descripcion: 'Remera Blanca de Algodón con Estampado de Paz'      

    },
    {
        id:5,
        nombre: 'Short de Jean Color Azul',
        precio: 25000,
        category: 'Pantalones',
        img: 'https://dcdn.mitiendanube.com/stores/266/056/products/short-jean-caballito1-cc8eb4661e1c2a883316152155231498-1024-1024.jpg',
        stock: 7,
        descripcion: 'Short de Jean Color Azul'
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