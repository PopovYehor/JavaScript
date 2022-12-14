import "./special-style.scss"

const special = ()=>{
    const elem = `
    <div class="special-title">
        <h1 class="special-title-primary">Особенности кресел Самурай</h1>
        <h2 class="special-title-secondary">Здесь будет более подробно развернуто ключевое преимущество. Четвертое поколение Samurai, выпускаемое с сентября 2020 года. Исправлены десятки недочетов предыдущих поколений</h2>
    </div>
    <div class="special-desctiption-wrap">
        <div class="specials-decription">
            <div class="box-1">
                <div class="specials-item">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
                <div class="specials-item active">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
                <div class="specials-item">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
                <div class="specials-item">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
            </div>
                
            <div class="box-2">
                <div class="specials-item">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
                <div class="specials-item">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
                <div class="specials-item">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
                <div class="specials-item">
                    <h1>Индивидуальные настройки</h1>
                    <h2>Учитывая ключевые сценарии поведения, высокое качество позиционных исследований способствует повышению</h2>
                </div>
            </div>
            <div class="box-img">
                <img class="special-description-img" src="https://i.ibb.co/fCyyxDx/afc0080a44931c318326ffa1ce319bad.png" alt="">                                    
                </div>
        </div>
    </div>
    `
    const wrap = document.querySelector('.specials-wrap')
    wrap.innerHTML = elem
}

export {special}