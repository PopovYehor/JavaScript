import "./test-drive-style.scss"
const testDrive = ()=>{
    const elem = `
    <div class="test-drive-wrap">
        <div class="transform-test-drive">
            <div class="title-test-drive">
                <div>
                <span class="title-test-drive-description">Посетите салон и проведите тест-драйв лично</span>
                </div>
                <div class ="title-test-drive-description-add">
                <span >У нас есть шоурумы в Днепре и области, где мы всегда рады видеть вас. Дат профессиональную консультацию и поделиться экспертизой</span>
                </div>
                <div>
                <button class="title-entry">Запись на тест-драйв</button>
                </div>
            </div>

            <div >
                <img class="tite-image" src="https://i.ibb.co/3RJ0cH2/c939a2b0c1ec5ca57f0dead322b21402.png" alt="">
            </div>
            <div >
                <img class="tite-image-2" src="https://i.ibb.co/MCNkd9c/fc03e5d5e89b4363653c7d220203694b.png" alt="">
            </div>

        </div>
    </div>
    `
    const wrap = document.querySelector('.test-wrap')
    wrap.innerHTML= elem

}
export {testDrive}