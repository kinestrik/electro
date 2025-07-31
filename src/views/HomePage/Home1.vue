<template>
    <div>
        <div class="pagestart">
            <div class="greetings">
                <div class="content">

                    <h1 class="title">Электромонтаж</h1>
                    <p class="title-desc" style="font-size: 24px;">Проектирование и сборка электрощитов в Донецке</p>
                    <ul class="features">
                        <li>Опытные специалисты</li>
                        <li>Современное оборудование</li>
                        <li>Доступные цены</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            isL: true
        }
    }
}
</script>

<style scoped>
/* html, body {
    font-family: 'rubik', sans-serif;
    margin: 0;
    padding: 0;
} */

#app {
    font-family: 'rubik', sans-serif;
}

.pagestart {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -100px;
    border-radius: 20px;
}

.greetings {
    border-radius: 0px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/main.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
}
.features{
    margin-top: 30px;
    list-style-type: disc;
    margin-left: 20px;
}
.features li{
    font-size: 20px;
    font-weight: 750;
    margin-top: 0;
    color: #2F23A0;
}
.title {
    font-size: 70px;
    font-weight: 750;
    margin-top: 0;
    color: #2F23A0;
}

.title-desc {
    /* text-align: center; */
    font-size: 27px;
    margin-top: 10px;
    font-size: 20px;
    color: #2F23A0;

}

.btn-join {
    font-weight: 600;
    background-color: #166AA7;
    color: #fff;
    box-shadow: 0px 0px 20px #166AA7;
    border: none;
    margin-top: 25px;
    padding: 30px 70px;
    border-radius: 15px;
    font-size: 24px;
    transition: all 200ms;
    cursor: pointer;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
.content{
    border-radius: 25px;
    background-color: #EAE5E5;
    padding: 40px;
    opacity: 0.85;
    margin-left: auto;
    margin-right: auto;
}
@media (hover: hover) {
    .btn-join:hover {
        background-color: #145482;
        box-shadow: 0px 0px 40px #145482;
        transform: scale(1.2);
    }
}

@media (min-width: 100px) and (max-width: 600px) {
    .title {
        font-size: 32px;
        text-align: center;
    }

    .title-desc {
        font-size: 16px;
    }

    .btn-join {
        padding: 20px 40px;
        font-size: 20px;
    }
}

/* Анимации */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInTitle {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInFeature {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


/* Применение анимаций */

.content {
  animation: fadeIn 1s ease-out forwards;
}

.title {
  animation: slideInTitle 1s ease-out forwards;
}

.features li {
  opacity: 0;
  animation: fadeInFeature 0.6s ease-out forwards;
}

/* Задержка появления для списка */
.features li:nth-child(1) {
  animation-delay: 0.8s;
}
.features li:nth-child(2) {
  animation-delay: 1s;
}
.features li:nth-child(3) {
  animation-delay: 1.2s;
}


</style>