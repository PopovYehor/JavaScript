import "./style.scss"
import { createElem } from "../../helper/createElement"
import { switchItem,  svgSwitch} from "../../components/switch"
import { catalogTitle } from "../../components/catalog/catalog-title"
import { basketItem } from "../../components/basket/basket-item/basket-item-index"
import { bayerData } from "../../components/basket/bayer-data/bayer-data-index"
import { delivery } from "../../components/basket/basket-delivery/delivery-index"
import { paymant } from "../../components/basket/payment/payment-index"
import { order } from "../../components/basket/basket-order/order-index"
const Basket = ()=>{
    const wrap = document.getElementById('main')
    createElem('div', 'switch-wrap', null, wrap)
    const SwitchWrap = document.querySelector('.switch-wrap')
    createElem('div', 'switch-line', null, SwitchWrap)
    switchItem('Главная', null, '/')
    svgSwitch('1')
    switchItem('Корзина', 'active', '/basket')

    const basketWrap = createElem('div', 'basket-wrap', null, wrap)
    const basketContainer = createElem('div', 'basket-container', null, basketWrap)
    catalogTitle('Ваш Заказ', basketContainer, '-basket')

    createElem('div', 'basket-items-wrap', null, basketContainer)
    basketItem()
    createElem('div', 'bayer-data-wrap', null, basketContainer)
    bayerData()
    createElem('div', 'delivery-wrap', null, basketContainer, 'id', 'delivery-wrap')
    delivery()
    createElem('div', 'delivery-wrap', null, basketContainer, 'id', 'paymant-wrap')
    paymant()
    createElem('div', 'order-wrap', null, basketContainer)
    order()
    let elem = `
    <div class="basket-wrap">
            <div class="basket-container">

                <div class="order-wrap">
                    <div class="order-container">
                        <button> <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.50002 4.91384L0.257019 1.67184L1.67202 0.256836L4.91402 3.49984H20.156C20.3119 3.49983 20.4656 3.53625 20.6049 3.6062C20.7442 3.67616 20.8652 3.7777 20.9583 3.90273C21.0513 4.02776 21.1139 4.17282 21.1409 4.32632C21.168 4.47983 21.1588 4.63753 21.114 4.78684L18.714 12.7868C18.6523 12.9929 18.5257 13.1736 18.3531 13.302C18.1806 13.4305 17.9712 13.4999 17.756 13.4998H5.50002V15.4998H16.5V17.4998H4.50002C4.2348 17.4998 3.98045 17.3945 3.79291 17.2069C3.60538 17.0194 3.50002 16.7651 3.50002 16.4998V4.91384ZM5.00002 21.4998C4.60219 21.4998 4.22066 21.3418 3.93936 21.0605C3.65805 20.7792 3.50002 20.3977 3.50002 19.9998C3.50002 19.602 3.65805 19.2205 3.93936 18.9392C4.22066 18.6579 4.60219 18.4998 5.00002 18.4998C5.39784 18.4998 5.77938 18.6579 6.06068 18.9392C6.34198 19.2205 6.50002 19.602 6.50002 19.9998C6.50002 20.3977 6.34198 20.7792 6.06068 21.0605C5.77938 21.3418 5.39784 21.4998 5.00002 21.4998ZM17 21.4998C16.6022 21.4998 16.2207 21.3418 15.9394 21.0605C15.6581 20.7792 15.5 20.3977 15.5 19.9998C15.5 19.602 15.6581 19.2205 15.9394 18.9392C16.2207 18.6579 16.6022 18.4998 17 18.4998C17.3978 18.4998 17.7794 18.6579 18.0607 18.9392C18.342 19.2205 18.5 19.602 18.5 19.9998C18.5 20.3977 18.342 20.7792 18.0607 21.0605C17.7794 21.3418 17.3978 21.4998 17 21.4998Z" fill="white"/>
                            </svg>
                            <p class="button-text">Оформить заказ</p>
                        </button>
                        <p class="order-text">Нажимая «Оформить заказ», вы даете согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности.</p>
                    </div>
                </div>
            </div>
        </div>
    `
}

export default Basket