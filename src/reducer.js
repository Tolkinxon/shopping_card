import { toast } from 'react-toastify'


const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'handleBasketShow':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      }
    case 'addToBasket': {
      const itemIndex = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id,
      )

      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        }
        state.order = [...state.order, newItem]
      } else {
        const newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...payload,
              quantity: orderItem.quantity + 1,
            }
          } else {
            return orderItem
          }
        })
        return {
          ...state,
          order: newOrder,
        }
      }
      toast.success('added new items')
    }

    case 'incrDecr': {
      const index = state.order.findIndex(
        (orderItem) => orderItem.id === payload.id,
      )

      const newArr = state.order.map((item, id) => {
        if (payload.number == -1 && item.quantity === 0) {
          return item
        }
        return index === id
          ? { ...item, quantity: item.quantity + payload.number }
          : item
      })

      return {
        ...state,
        order: newArr,
      }
    }

    case 'clearBasket': {
   
      const index = state.order.findIndex((orderItem) => orderItem.id === payload)
      const newArr = state.order.filter((item, idx) => {return index != idx && item })

    
      toast.error('the item is deleted')

      return { 
        ...state,
        order: newArr
       }
    }
    default:
      return state
  }
}

export default reducer
