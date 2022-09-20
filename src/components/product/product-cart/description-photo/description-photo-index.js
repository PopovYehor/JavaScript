import "./description-photo-style.scss"

const desctiptionPhoto = ()=>{

    const wrap = document.querySelector('.description-photo-wrap')
    let elem = `
    <div class="description-photo">
                <div class="description-photo-choise">
                    <img id="photo-1" src="https://i.ibb.co/JmbHwxX/5059ec5f7e284c763688ac44fb733ac2.png" alt="">
                </div>
                <div class="description-photo-choise">
                    <img id="photo-2" src="https://i.ibb.co/JmbHwxX/5059ec5f7e284c763688ac44fb733ac2.png" alt="">
                </div>
                <div class="description-photo-choise">
                    <img id="photo-3" src="https://i.ibb.co/JmbHwxX/5059ec5f7e284c763688ac44fb733ac2.png" alt="">
                </div>
                <div class="description-photo-choise">
                    <img id="photo-4" src="https://i.ibb.co/JmbHwxX/5059ec5f7e284c763688ac44fb733ac2.png" alt="">
                </div>        
            </div>
    `
    wrap.innerHTML = elem
}
export {desctiptionPhoto}