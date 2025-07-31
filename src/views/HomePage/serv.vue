<template>
  <h1 class="mt-5 title-animate">Наши услуги:</h1>
  <div class="services-container">
    <div class="service-card fade-up"
         @mouseover="hovered = 'design'"
         @mouseleave="hovered = ''"
         :class="{ 'hovered': hovered === 'design' }"
         @click="gotoService('electroshields')">

      <div class="image-wrapper">
        <img src="/src/assets/shield1.jpg" alt="Проектирование электрощитов" class="service-image">
        <div class="service-title">Сборка щитов</div>
      </div>
      <div class="service-overlay">
        <p>Профессиональное проектирование и сборка электрощитов любой сложности с учетом всех норм и требований</p>
      </div>
    </div>

    <div class="service-card fade-up"
         @mouseover="hovered = 'installation'"
         @mouseleave="hovered = ''"
         :class="{ 'hovered': hovered === 'installation' }"
         @click="gotoService('electromontazh')">
      <div class="image-wrapper">
        <img src="/src/assets/electroprovodka1.jpg" alt="Монтаж электросетей" class="service-image">
        <div class="service-title">Монтаж</div>
      </div>
      <div class="service-overlay">
        <p>Качественный монтаж электросетей с использованием современных материалов и технологий</p>
      </div>
    </div>

    <div class="service-card fade-up"
         @mouseover="hovered = 'maintenance'"
         @mouseleave="hovered = ''"
         :class="{ 'hovered': hovered === 'maintenance' }"
         @click="gotoService('electro-repair')">

      <div class="image-wrapper">
        <img src="/src/assets/rese1.jpg" alt="Обслуживание электросетей" class="service-image">
        <div class="service-title">Обслуживание</div>
      </div>
      <div class="service-overlay">
        <p>Комплексное обслуживание и ремонт электросетей для обеспечения бесперебойной работы</p>
      </div>
    </div>
  </div>

  <hr class="hr mt-5">
  <div style="display: flex; justify-content: center; margin-bottom: 30px;">
    <button class="cost-button button-fade" @click="gotoPage()">Наши услуги</button>
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
    },
    gotoService(name){
      this.$router.push({ path: `/service/` + name });
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 30px;
  font-weight: 800;
  color: #2F23A0;
  text-align: center;
  margin-bottom: 40px;
}

.hr {
  padding: 0;
  height: 0;
  border: none;
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #2F23A0;
}

.services-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  flex-wrap: wrap;
}

.service-card {
  position: relative;
  width: 350px;
  height: 250px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.service-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.service-title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(47, 35, 160, 0.8);
  color: white;
  padding: 15px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  transition: all 0.3s ease;
}

.service-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(47, 35, 160, 0.9);
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.service-card:hover .service-overlay {
  opacity: 1;
}

.service-card:hover .service-image {
  transform: scale(1.05);
}

.service-card:hover .service-title {
  opacity: 0;
}

.service-card.hovered {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.cost-button {
  padding: 12px 25px;
  font-size: 20px;
  font-weight: 500;
  color: #fff;
  background-color: #2F23A0;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-top: -26px;
  transition: background-color 0.3s ease;
}

.cost-button:hover {
  background-color: #271aa2;
}

@media (max-width: 768px) {
  .services-container {
    gap: 20px;
  }

  .service-card {
    width: 300px;
    height: 200px;
  }

  .service-title {
    font-size: 20px;
    padding: 10px;
  }

  .cost-button {
    font-size: 16px;
    padding: 10px 20px;
  }
}

@media (max-width: 480px) {
  .service-card {
    width: 100%;
    max-width: 350px;
  }
}

/* Заголовок с анимацией */
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

/* Анимация карточек */
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

/* Анимация кнопки */
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