<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="footer">
        <div class="block block-1">
            <img class="block-select img-footer" src="../../assets/solbigico.png" alt="ДонЭнергоМонтаж">
            <p>Наша компания в Донецке предоставляет полный спектр <br> услуг по электромонтажу любой сложности, <br>
                от проектирования до сдачи объектов в эксплуатацию, <br>с гарантией качества и соблюдением всех стандартов.</p>

            <p><span>Телефон для связи:</span> <br> +7 (949) 452-35-46</p>
            <!-- <p><span>Телефон для связи по вопросам работы сайта:</span> <br> +7 (925) 537-12-13</p> -->
        </div>
        <div class="block block-2">
            <h3>Ссылки для навигации:</h3>
            <p><a href="/">Главная</a></p>
            <p><a href="/examples">Примеры работ</a></p>
            <p><a href="/forum-que">Форум</a></p>
            <p><a href="/services">Услуги</a></p>
        </div>
        <div class="block block-3">
            <h3>Прочее:</h3>
            <p><span><a href="/feedback">Форма обратной связи</a></span></p>
            <p><span><a href="">Telegram</a></span></p>
            <p><span><a href="">Whatsapp</a></span></p>

        </div>
    <h6 class="mt-7 block-select">© ДонЭнергоМонтаж. Проектирование и сборка электрощитов,  электромонтаж. Материалы сайта носят информационный характер и не являются публичной офертой.</h6>
    </div>
</template>

<style scoped>
h6 {
    font-size: 13px;
    text-align: center;
    grid-column: 1 / -1;
    color: white;
}
a {
    text-decoration: underline;
}

.footer {
    display: grid;
    grid-template-columns: auto auto auto;
    margin-top: 20px;
    padding: 20px;
    width: 100%;
    height: auto;
    background-color: #252525;
}

.block {
    h3 {
        color: #fff;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    span {
        color: #fff;
        font-weight: 600;
    }
    p {
        color: #d1d1d1;
        margin-bottom: 10px;
    }
}

.block-select {
    user-select: none;
    -webkit-user-drag: none;
    pointer-events: none;
}

.img-footer {
    width: 200px;
    height: 80px;
    margin-bottom: 30px;
}

@media (max-width: 1020px) {
    .footer {
        grid-template-columns: auto auto;
    }

    .block-3 {
        margin-top: 30px;
    }
}

@media (max-width: 790px) {
    .block {
        p {
            font-size: 14px;
        }
    }
}

@media (max-width: 715px) {
    .footer {
        grid-template-columns: auto;
    }

    .block-2 {
        margin-top: 30px;
    }
}
</style>