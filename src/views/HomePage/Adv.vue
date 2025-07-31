<template>
  <h1 class="mt-5 title-animate">Наши преимущества:</h1>
  <div class="advantages-container">
    <div class="advantage fade-up" @mouseover="hovered = 'security'" @mouseleave="hovered = ''"
      :class="{ 'hovered': hovered === 'security' }">
      <h2 style="color: #2F23A0;">Безопасность</h2>
      <p>Монтируем электросети, отвечающие всем нормам и стандартам безопасности. Наша работа
        предотвращает замыкания, перегрузки и другие опасные ситуации.</p>
    </div>
    <div class="advantage fade-up" @mouseover="hovered = 'speed'" @mouseleave="hovered = ''"
      :class="{ 'hovered': hovered === 'speed' }">
      <h2 style="color: #2F23A0;">Скорость</h2>
      <p>Обеспечиваем быстрый и эффективный монтаж электросетей, минимизируя время простоя и гарантируя
        своевременное выполнение проектов. Наши процессы оптимизированы для максимальной оперативности без ущерба для
        качества.</p>
    </div>
    <div class="advantage fade-up" @mouseover="hovered = 'quality'" @mouseleave="hovered = ''"
      :class="{ 'hovered': hovered === 'quality' }">
      <h2 style="color: #2F23A0;">Качество</h2>
      <p>Используем только высококачественные материалы и передовые технологии для обеспечения долговечности и
        надежности электросетей. Каждый этап работы тщательно контролируется, чтобы гарантировать безупречный
        результат.</p>
    </div>
  </div>
  <hr class="hr mt-5">
  <div style="display: flex; justify-content: center; margin-bottom: 30px;">
    <button class="cost-button button-fade" @click="gotoPage()">Узнать стоимость</button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      hovered: ''
    };
  },
  methods: {
    gotoPage() {
      this.$router.push({ path: '/feedback' });
    }
  }
};
</script>

<style scoped>
h1{
  font-size: 30px;
  font-weight: 800;
  color: #2F23A0;
  text-align: center;
}
.hr {
  /* margin: 20px 0; */
  padding: 0;
  height: 0;
  border: none;
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #2F23A0;

}

.advantages-container {
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  flex-wrap: wrap;
}

.advantage {
  margin-bottom: 20px;
  text-align: center;
  width: 310px;
  height: 310px;
  background-color: #EAE5E5;
  padding: 20px;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* Добавляем transition */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Начальная тень */
}

.advantage h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.advantage p {
  font-size: 16px;
  color: #666;
}

.cost-button {
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  background-color: #2F23A0;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-top: -26px;
}

.cost-button:hover {
  background-color: #271aa2;
}

@media (max-width: 768px) {
  .advantage h2 {
    font-size: 20px;
  }

  .advantage p {
    font-size: 14px;
  }

  .cost-button {
    font-size: 16px;
  }
  .advantages-container {
  gap: 20px;

}
}

/* Добавляем стиль для наведения */
.advantage:hover,
.advantage.hovered {
  transform: translateY(-10px);
  /* Сдвигаем вверх */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  /* Увеличиваем тень */
}

/* Заголовок */
.title-animate {
  opacity: 0;
  transform: translateY(-20px);
  animation: slideDownFade 0.8s ease forwards;
  animation-delay: 0.2s;
}

@keyframes slideDownFade {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Карточки */
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUpCard 0.8s ease forwards;
}

.fade-up:nth-child(1) {
  animation-delay: 0.3s;
}
.fade-up:nth-child(2) {
  animation-delay: 0.5s;
}
.fade-up:nth-child(3) {
  animation-delay: 0.7s;
}

@keyframes fadeUpCard {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Кнопка */
.button-fade {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInButton 0.8s ease forwards;
  animation-delay: 1s;
}

@keyframes fadeInButton {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>