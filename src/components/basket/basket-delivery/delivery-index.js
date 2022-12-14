import "./delivery-style.scss"

const delivery = ()=>{
    const elem = `
    <div class="delivery-container">
        <h2>Доставка</h2>
        <div class="delivery-item">
            <div class="checkbox-item"><div class="check"></div></div>
            <div class="delivery-item-text">
            <h3>Самовывоз</h3>
            <p>просп. Богдана Хмельницкого, 59</p>
            </div>
        </div>
        <div class="delivery-item">
            <div class="checkbox-item"><div class="check"></div></div>
            <div class="delivery-item-text">
            <h3>Доставка курьером</h3>
            <p>Стоимость — 750 гривен, от 3 дней</p>
            </div>
        </div>
        <div class="delivery-item">
            <div class="checkbox-item"><div class="check"></div></div>
            <div class="delivery-item-text">
            <h3>Транспортной компании</h3>
            <p>По всей стране, услуги ТК оплачиваются отдельно при получении</p>
            </div>
        </div>
        <h2 class="adres-delivery-title">Адрес доставки</h2>
        <p>Уточните только город доставки. Остальные детали мы уточним по телефону</p>
        <input type="text" placeholder="Город">
        <div class="upload-delivery-item">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.08 8.2872L9.18747 15.1797C8.34309 16.0241 7.19786 16.4984 6.00372 16.4984C4.80959 16.4984 3.66436 16.0241 2.81997 15.1797C1.97559 14.3353 1.50122 13.1901 1.50122 11.9959C1.50122 10.8018 1.97559 9.65658 2.81997 8.8122L9.71247 1.9197C10.2754 1.35677 11.0389 1.04053 11.835 1.04053C12.6311 1.04053 13.3946 1.35677 13.9575 1.9197C14.5204 2.48262 14.8366 3.2461 14.8366 4.0422C14.8366 4.83829 14.5204 5.60177 13.9575 6.1647L7.05747 13.0572C6.77601 13.3387 6.39427 13.4968 5.99622 13.4968C5.59818 13.4968 5.21643 13.3387 4.93497 13.0572C4.65351 12.7757 4.49539 12.394 4.49539 11.9959C4.49539 11.5979 4.65351 11.2162 4.93497 10.9347L11.3025 4.5747" stroke="#0074D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            <a href="#">Загрузить реквизиты</a>
        </div>
    </div>
    `
    const wrap = document.getElementById('delivery-wrap')
    wrap.innerHTML = elem
    
}

export {delivery}