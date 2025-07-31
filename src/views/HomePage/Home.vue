<template>
  <div class="container fade-in">
    <div class="left-section fade-in-up">
      <img src="../../assets/h1.png" alt="Электрик" class="img1 fade-in-up">
    </div>
    <div class="right-section fade-in-up">
      <div class="top-images">
        <img src="../../assets/h2.png" alt="Щиток" class="img2 fade-in-up">
        <img src="../../assets/h3.png" alt="Проводка" class="img3 fade-in-up">
      </div>

      <div class="big-cont fade-in-up">
        <h1 class="main-text fade-in-up">Электромонтаж</h1>
        <p class="sub-text fade-in-up">Проектирование и сборка электрощитов в Донецке</p>
        <ul class="features fade-in-up">
          <li>Опытные специалисты</li>
          <li>Современное оборудование</li>
          <li>Доступные цены</li>
        </ul>
      </div>
    </div>
  </div>
  <hr style="color: blue;">
</template>


<script>
export default {
    name: 'ElectricianAd',
    data() {
        return {

        };
    }
};
</script>

<style scoped>
.big-cont {
    background-color: #EAE5E5;
    padding: 55px;
    border-radius: 18px;
    width: 100%;

}

.img1 {
    width: 100%;
    border-radius: 10px;
    /* height: 50%; */
}

.img2 {
    width: 100%;
    border-radius: 10px;
    width: 420px;
    height: 400px;
}

.img3 {
    width: 100%;
    border-radius: 10px;
    width: 420px;
    height: 400px;
}

.container {
    width: 100%;
    /* Ширина контейнера */
    margin: 20px auto;
    /* Отступ сверху и центрирование */
    background-color: #fff;
    /* Белый фон для содержимого */
    border-radius: 10px;
    /* Скругление углов */
    overflow: hidden;
    /* Обрезаем выходящее содержимое */
    display: flex;
    justify-content: space-between;
    /* Используем flexbox для компоновки */
}

.left-section {
    width: 40%;
    padding: 20px;
    height: 50%;
}

.right-section {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-right: 20px;
}

.top-images {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    /* Равномерное распределение картинок */
    gap: 10px;
}

/*   
  .top-images img {
      width: 200px; 
      height: 150px;
      border-radius: 10px;
      object-fit: cover; 
  } */

.main-text {
    color: #000080;
    /* Тёмно-синий цвет */
    font-size: 3em;
    /* Размер шрифта */
    margin-bottom: 10px;
    margin-top: -20px;
}

.sub-text {
    font-size: 1.5em;
    /* Размер подзаголовка */
    margin-bottom: 20px;
}

.features {
    list-style-type: disc;
    /* Маркированный список */
    padding-left: 20px;
    color: #000080;
    /* Тёмно-синий цвет */
    font-size: 1.1em;
    /* Размер шрифта */
    margin-bottom: 10px;
    font-weight: 570;
}

.features li {
    margin-bottom: 5px;
}

@media (max-width: 1537px) {
    .container {
        width: 100%;
        margin: 20px auto;
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
    }

    .big-cont {
        background-color: #EAE5E5;
        padding: 55px;
        border-radius: 18px;
        width: 670px;
        height: 300px;
        margin-left: 30px;

    }

    .img1 {
        width: 100%;
        border-radius: 10px;
        height: 50%;
    }

    .img2 {
        width: 100%;
        border-radius: 10px;
        width: 300px;
        height: 280px;
    }

    .img3 {
        width: 100%;
        border-radius: 10px;
        width: 300px;
        height: 280px;
    }

    .main-text {
        color: #000080;
        font-size: 1.8em;
        margin-bottom: 10px;
        margin-top: -20px;
    }

    .sub-text {
        font-size: 1.4em;
        margin-bottom: 20px;
    }

    .features {
        list-style-type: disc;
        padding-left: 20px;
        color: #000080;
        font-size: 1.0em;
        margin-bottom: 10px;
        font-weight: 570;
    }

    .features li {
        margin-bottom: 5px;
    }
}


@media (max-width: 1280px) {
    .container {
        width: 100%;
        /* margin: 20px auto; */
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        height: 100%;
    }

    .big-cont {
        background-color: #EAE5E5;
        padding: 55px;
        border-radius: 18px;
        width: 530px;
        height: 200px;
        margin-left: 30px;

    }

    .img1 {
        width: 100%;
        border-radius: 10px;
        height: 50%;
    }

    .img2 {
        width: 100%;
        border-radius: 10px;
        width: 250px;
        height: 230px;
    }

    .img3 {
        width: 100%;
        border-radius: 10px;
        width: 250px;
        height: 230px;
    }

    .main-text {
        color: #000080;
        font-size: 1.3em;
        margin-bottom: 10px;
        margin-top: -35px;
    }

    .sub-text {
        font-size: 1.0em;
        margin-bottom: 20px;
    }

    .features {
        list-style-type: disc;
        padding-left: 20px;
        color: #000080;
        font-size: 0.8em;
        margin-bottom: 10px;
        font-weight: 570;
    }

    .features li {
        margin-bottom: 5px;
    }
}

@media (max-width: 1023px) {
    .big-cont {
        background-color: #EAE5E5;
        padding: 55px;
        border-radius: 18px;
        width: 540px;
        height: 210px;
        margin-left: -230px;
        margin-right: auto;
        margin-top: 80px;
    }

    .right-section {
        width: 60%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: -80px;
    }

    .container {
        width: 100%;
        /* margin: 20px auto; */
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        justify-content: center;
    }

    .img1 {
        width: 400px;
        border-radius: 10px;
        height: 470px;
        margin-right: 300px;
    }

    .left-section {
        width: 50%;
        padding: 20px;
        height: 50%;
    }
}

@media (max-width: 670px) {
    .big-cont {
        background-color: #EAE5E5;
        padding: 55px;
        border-radius: 18px;
        width: 540px;
        height: 210px;
        margin-left: -245px;
        margin-right: auto;
        margin-top: 40px;
    }

}

@media (max-width: 655px) {
    .img1 {
        width: 300px;
        border-radius: 10px;
        height: 410px;
        margin-right: 300px;
    }

    .img2 {
        border-radius: 10px;
        width: 200px;
        height: 200px;
    }

    .img3 {
        border-radius: 10px;
        width: 200px;
        height: 200px;
    }

    .big-cont {
        background-color: #EAE5E5;
        padding: 55px;
        border-radius: 18px;
        width: 430px;
        height: 210px;
        margin-left: -190px;
        margin-right: auto;
        margin-top: 40px;
    }

    .right-section {
        width: 60%;
        padding-left: 20;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: -200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: -80px;
        margin-right: -40px;
    }

}
@media (max-width: 590px) {
    .img1 {
        width: 200px;
        border-radius: 10px;
        height: 255px;
        margin-right: 20px;
    }

    .img2 {
        border-radius: 10px;
        width: 140px;
        height: 120px;
    }

    .img3 {
        border-radius: 10px;
        width: 140px;
        height: 125px;
    }

    .big-cont {
        background-color: #EAE5E5;
        padding: 55px;
        border-radius: 18px;
        width: 350px;
        height: 210px;
        margin-left: -157px;
        margin-right: auto;
        margin-top: 30px;
    }

    .right-section {
        width: 60%;
        padding-left: 20;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: -200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: -80px;
        margin-right: -40px;
    }
}
@media (max-width: 450px) {
      .img1 {
        width: 110px;
        border-radius: 10px;
        height: 180px;
        margin-right: 20px;
    }

    .img2 {
        border-radius: 10px;
        width: 110px;
        height: 85px;
    }

    .img3 {
        border-radius: 10px;
        width: 110px;
        height: 85px;
    }

    .big-cont {
        background-color: #EAE5E5;
        padding: 55px;
        border-radius: 18px;
        width: 270px;
        height: 280px;
        margin-left: -117px;
        margin-right: auto;
        margin-top: 30px;
    }

    .right-section {
        width: 60%;
        padding-left: 20;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-right: -200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: -80px;
        margin-right: -40px;
    }
}
/* АНИМАЦИИ */
@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeLeft {
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeListItem {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ПРИМЕНЕНИЕ АНИМАЦИЙ */

.big-cont {
  animation: fadeUp 1s ease-out forwards;
}

.main-text {
  opacity: 0;
  animation: fadeLeft 1s ease-out forwards;
  animation-delay: 0.3s;
  animation-fill-mode: forwards;
}

.sub-text {
  opacity: 0;
  animation: fadeLeft 1s ease-out forwards;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

.features li {
  opacity: 0;
  animation: fadeListItem 0.5s ease-out forwards;
}

.features li:nth-child(1) {
  animation-delay: 0.7s;
}
.features li:nth-child(2) {
  animation-delay: 0.9s;
}
.features li:nth-child(3) {
  animation-delay: 1.1s;
}

/* Hover эффект для изображений */
.img1,
.img2,
.img3 {
  transition: transform 0.4s ease;
}

.img1:hover,
.img2:hover,
.img3:hover {
  transform: scale(1.05);
}

</style>