import CoffeType from "../interfaces/CoffeeType"
import OrderType from "../interfaces/OrderType"

const base_URL = 'https://airbean-api-xjlcn.ondigitalocean.app'

const getMenu = async () => {
    let data: Response = await fetch(`${base_URL}/api/beans`)
    let menu = await data.json()
    return menu.menu
}

export const menu: CoffeType[] = await getMenu()


export const sendOrder = async (orders: OrderType[]) => {
    let data: Response = await fetch(`${base_URL}/api/beans/order`, {
        method: 'post',
        body: JSON.stringify({details: {
            'order': orders
        }}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let order = await data.json()
    return order
}