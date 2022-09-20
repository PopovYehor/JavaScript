import "./question-style.scss"

const question = ()=>{
    const elem = `
    <div class="question-call-background">
        <div class="question-call-wrap">
            <div class="question-call-description">
                <div class="question-call-description-text">
                    <h2>У вас остались вопросы?</h2>
                    <h3>Оставьте контакты. Наш менеджер свяжется с вами и бесплатно проконсультирует</h3>
                </div>
                <div class="question-call-description-img">
                    <img class="hand-phone" src="https://i.ibb.co/bb3GSbz/34ac43313d9bfde992b123de4f5d071d.png" alt="">
                </div>
            </div>
            <div class="contact-form">
                <input class="contact-name" type="text" placeholder="&#xf007; Ваше имя">
                <input class="contact-name" type="text" placeholder="&#xf879; Телефон для связи">
                <button class="order-call">Заказать звонок</button>
            </div>
        </div>
    </div>
        <img class="map" src="https://i.ibb.co/GxcDB3h/map.png" alt="">
        <img class="map-point" src="https://cdn-icons-png.flaticon.com/512/149/149060.png" alt="">
    `
    const wrap = document.querySelector('.question-wrap')
    wrap.innerHTML = elem
}
export {question}