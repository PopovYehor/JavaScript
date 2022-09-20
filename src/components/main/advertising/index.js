import "./style.scss"

const advertising = ()=>{
    let elem = `
    <button class="slide slide-left"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1L1 7L7 13" stroke="#576077" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>

        <div class="title-advertising">
            <div>
            <span class="title-advertising-description">Кресла Samurai на выгодных условиях по всей стране <img class="flag" src="https://www.freepnglogos.com/uploads/ukraine-flag-png/ukraine-flag-waving-blue-and-yellow-image-11.png" alt=""></span>
            </div>
            <div class ="title-advertising-description-add">
            <span >Здесь вам не придется покупать товар в слепую — проведите тест-драйв перед покупкой</span>
            </div>
            <div>
            <button class="title-entry">Запись на тест-драйв</button>
            </div>
        </div>

        <div >
            <img class="tite-image" src="https://i.ibb.co/Pmn5811/6d4562219984035e9c686740c1093289.png" alt="">
        </div>
        <div >
            <img class="tite-image-2" src="https://i.ibb.co/W2V09XY/e1c3949cc94a5b4451c89a08da480298.png " alt="">
        </div>

        <button class="slide slide-right"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L1 13" stroke="#576077" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>                        
            </button>
    `
    const wrap = document.querySelector('.advertising')
    wrap.innerHTML = elem
}

export {advertising}