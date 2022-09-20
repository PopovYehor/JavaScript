import "./main-description-style.scss"

const mainDescription = ()=>{
    const wrap = document.querySelector('.main-description-wrap')
    let element = `
    <div class="description-img">
            <img src="https://i.ibb.co/JmbHwxX/5059ec5f7e284c763688ac44fb733ac2.png" alt="">
        </div>
        <div class="sale-description">
            <div class="title-description">
                <h1>Кресло Samurai S-2.04 плюс вторая строка</h1>
            </div>
            <div class="secondary-description">
                <h2>Эргономичное офисное кресло с синхромеханизмом качания «MultiBlock» — раздельное синхронное отклонение спинки и сиденья кресла.</h2>
            </div>
            <div class="color-description">
                <span>Черный</span>
            </div>
            <div class="choise-img">
                <div class="description-img-choise ">
                    <img src="https://i.ibb.co/JmbHwxX/5059ec5f7e284c763688ac44fb733ac2.png" alt="">
                </div>
                <div class="description-img-choise active">
                    <img src="https://i.ibb.co/JmbHwxX/5059ec5f7e284c763688ac44fb733ac2.png" alt="">
                </div>
                <div class="description-img-choise">
                    <img src="https://i.ibb.co/JmbHwxX/5059ec5f7e284c763688ac44fb733ac2.png" alt="">
                </div>
                <div class="description-img-choise">
                    <img src="https://i.ibb.co/JmbHwxX/5059ec5f7e284c763688ac44fb733ac2.png" alt="">
                </div>        
            </div>
            <div class="function-description">
                <span>Механизм</span>
                <p>Эргономичное офисное кресло с синхромеханизмом качания «MultiBlock» — раздельное синхронное.</p>
            </div>
            <div class="description-price">
                <svg width="128" height="10" viewBox="0 0 128 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.18545 7.90944C1.18545 7.90944 39.3344 4.12251 63.9391 2.97391C88.5189 1.82647 127 2.0321 127 2.0321" stroke="#F54D35" stroke-width="3"/>
                    </svg>  
                <p>5 500 &#8372;</p>              
                <span>5000 &#8372;</span>
            </div>
            <div class="description-add-to-basket">
                <button class="add-to-basket">&#xf07a; Добавить в корзину</button>
                    <button class="count-to-basket"><svg class="minus" width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.1665 1H12.8332" stroke="#2B3350" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </button>
                    <span>1</span>
                    <button class="count-to-basket"><svg class="plus" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 4.1665V15.8332" stroke="#2B3350" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.1665 10H15.8332" stroke="#2B3350" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                                                             
                        </button>
                
            </div>
        </div> 
    `
    wrap.innerHTML = element
}

export {mainDescription}