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
            { id: 1, nombre: 'Pizza Italiana', precio: 7000, imagen: producto1, ingredientes: 'Queso Mozarella, jamón, tomate, oregano', categoria: 'pizza', stock: 110 },
            { id: 2, nombre: 'Pizza Napolitana', precio: 8000, imagen: producto2, ingredientes: 'Queso Mozarella, tomate, oregano', categoria: 'pizza', stock: 120   },
            { id: 3, nombre: 'Pizza Hawaiana', precio: 9000, imagen: producto3, ingredientes: 'Queso Mozarella, jamón, piña', categoria: 'pizza', stock: 130   },
            { id: 4, nombre: 'Pizza Española', precio: 10000, imagen: producto4, ingredientes: 'Queso Mozarella, jamón, tomate, chorizo, pimentón, salame', categoria: 'pizza', stock: 140   },
            { id: 5, nombre: 'Pizza Especial Cata', precio: 12000, imagen: producto5, ingredientes: 'Extra queso Mozarella, carne mechada, tomate, cebolla', categoria: 'pizza', stock: 10   },
            { id: 6, nombre: 'Pizza Personalizada', precio: 14000, imagen: producto6, ingredientes: 'Arma tu pizza con los ingredientes que desees', categoria: 'pizza', stock: 20   },
        ])
      }, 1000) 
    })
  }