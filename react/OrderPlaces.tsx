import React, { createContext, ReactNode, useContext } from 'react'

import { useOrderForm } from 'vtex.order-manager/OrderForm'

interface Context {
  countries: string[]
}

interface OrderPlacesProps {
  children: ReactNode
}

const OrderPlacesContext = createContext<Context | undefined>(undefined)

export const OrderPlacesProvider = ({ children }: OrderPlacesProps) => {
  const {
    orderForm: {
      shipping: { countries },
    },
  } = useOrderForm()

  return (
    <OrderPlacesContext.Provider value={{ countries }}>
      {children}
    </OrderPlacesContext.Provider>
  )
}

export const useOrderPlaces = () => {
  const context = useContext(OrderPlacesContext)
  if (context == undefined) {
    throw new Error('useOrderPlaces must be used within a OrderPlacesProvider')
  }

  return context
}

export default { OrderPlacesProvider, useOrderPlaces }
