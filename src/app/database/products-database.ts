import { DB } from "../interfaces/database";

export const DATABASE: DB = {
    products: [
        {
            id: '01',
            title: 'Página Personal',
            description: 'Creación sitio web personal. Incluye porfolio de trabajos, información y contacto.',
            price: 20000,
            quantity: 0,
        },
        {
            id: '02',
            title: 'Blog de Trabajos',
            description: 'Sitio web sobre una marca, firma o empresa..',
            price: 25000,
            quantity: 0,
        },
        {
            id: '03',
            title: 'Tienda Virtual de Comercio',
            description: 'Creación de logotipo, productos de venta, carrito de compra, métodos de pago y envíos.',
            price: 40000,
            quantity: 0,
        },
        {
            id: '04',
            title: 'Sitio Web Empresarial',
            description: 'Sitio web sobre una marca, firma o empresa..',
            price: 40000,
            quantity: 0,
        },

    ]
}

