import "./catalog-items-style.scss"

const catalogItems = ()=>{
    const elem = `

        <div class="chair-items-wrap">

            <div class="chair-items">
                <img class="chair-img" src="https://i.ibb.co/W2V09XY/e1c3949cc94a5b4451c89a08da480298.png" alt="">
                <div class="chair-items-description">
                    <div class="chair-description">
                    <span >Samurai KL-1.04 Темно-коричневый</span>
                </div>
                <div class="chair-price">
                    <span >5000 &#x20b4;</span>
                </div>
                <div class="chair-last-price">
                    <span >5500 &#x20b4;</span>
                    <svg class="cross-price" width="70" height="10" viewBox="0 0 91 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.14125 7.9018C1.14125 7.9018 28.3552 4.10366 45.9067 2.94797C63.4405 1.79345 90.8899 1.98823 90.8899 1.98823" stroke="#F54D35" stroke-width="3"/>
                        </svg>
                        
                </div>
                </div>
            </div>

            <div class="chair-items">
                <img class="chair-img" src="https://i.ibb.co/W2V09XY/e1c3949cc94a5b4451c89a08da480298.png" alt="">
                <div class="chair-items-description">
                    <div class="chair-description">
                    <span >Samurai KL-1.04 Темно-коричневый</span>
                </div>
                <div class="chair-price">
                    <span >5000 &#x20b4;</span>
                </div>
                <div class="chair-last-price">
                    <span >5500 &#x20b4;</span>
                    <svg class="cross-price" width="70" height="10" viewBox="0 0 91 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.14125 7.9018C1.14125 7.9018 28.3552 4.10366 45.9067 2.94797C63.4405 1.79345 90.8899 1.98823 90.8899 1.98823" stroke="#F54D35" stroke-width="3"/>
                        </svg>
                        
                </div>
                </div>
            </div>

            <div class="chair-items">
                <img class="chair-img" src="https://i.ibb.co/W2V09XY/e1c3949cc94a5b4451c89a08da480298.png" alt="">
                <div class="chair-items-description">
                    <div class="chair-description">
                    <span >Samurai KL-1.04 Темно-коричневый</span>
                </div>
                <div class="chair-price">
                    <span >5000 &#x20b4;</span>
                </div>
                <div class="chair-last-price">
                    <span >5500 &#x20b4;</span>
                    <svg class="cross-price" width="70" height="10" viewBox="0 0 91 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.14125 7.9018C1.14125 7.9018 28.3552 4.10366 45.9067 2.94797C63.4405 1.79345 90.8899 1.98823 90.8899 1.98823" stroke="#F54D35" stroke-width="3"/>
                        </svg>
                        
                </div>
                </div>
            </div>

            <div class="chair-items">
                <img class="chair-img" src="https://i.ibb.co/W2V09XY/e1c3949cc94a5b4451c89a08da480298.png" alt="">
                <div class="chair-items-description">
                    <div class="chair-description">
                    <span >Samurai KL-1.04 Темно-коричневый</span>
                </div>
                <div class="chair-price">
                    <span >5000 &#x20b4;</span>
                </div>
                <div class="chair-last-price">
                    <span >5500 &#x20b4;</span>
                    <svg class="cross-price" width="70" height="10" viewBox="0 0 91 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.14125 7.9018C1.14125 7.9018 28.3552 4.10366 45.9067 2.94797C63.4405 1.79345 90.8899 1.98823 90.8899 1.98823" stroke="#F54D35" stroke-width="3"/>
                        </svg>
                        
                </div>
                </div>
            </div>

        </div>
        

    `
    const wrap = document.querySelector('.chair-wrap')
    wrap.innerHTML = elem
}

export {catalogItems}