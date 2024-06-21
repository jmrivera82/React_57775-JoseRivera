import producto1 from '../imagenes/italiana.jpg'
import producto2 from '../imagenes/napolitana.jpg'
import producto3 from '../imagenes/hawaiana.jpg'
import producto4 from '../imagenes/española.jpg'
import producto5 from '../imagenes/especial-cata.jpg'
import producto6 from '../imagenes/arma-tu-pizza.jpg'

export const fetchProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
            { id: 1, nombre: 'Pizza Italiana', precio: 7000, imagen: producto1, detalles: 'Queso Mozarella, jamón, tomate, oregano' },
            { id: 2, nombre: 'Pizza Napolitana', precio: 8000, imagen: producto2, detalles: 'Queso Mozarella, tomate, oregano'  },
            { id: 3, nombre: 'Pizza Hawaiana', precio: 9000, imagen: producto3, detalles: 'Queso Mozarella, jamón, piña'  },
            { id: 4, nombre: 'Pizza Española', precio: 10000, imagen: producto4, detalles: 'Queso Mozarella, jamón, tomate, chorizo, pimentón, salame'  },
            { id: 5, nombre: 'Pizza Especial Cata', precio: 12000, imagen: producto5, detalles: 'Extra queso Mozarella, carne mechada, tomate, cebolla'  },
            { id: 6, nombre: 'Pizza Personalizada', precio: 14000, imagen: producto6, detalles: 'Arma tu pizza con los ingredientes que desees'  },
        ])
      }, 1000) 
    })
  }