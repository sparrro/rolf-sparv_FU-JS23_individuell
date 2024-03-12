import CoffeType from "../interfaces/CoffeeType"

const base_URL = 'https://airbean-api-xjlcn.ondigitalocean.app'

const getMenu = async () => {
    let data: Response = await fetch(`${base_URL}/api/beans`)
    let menu = await data.json()
    return menu.menu
}

export const menu: CoffeType[] = await getMenu()