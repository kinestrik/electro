<template>
  <!-- <div class="container"> -->
    <div class="bg-grid"></div>
    <div class="content">
      <h1>404</h1>
      <p>Мы искали эту страницу в щитах, схемах и даже в шкафах управления...</p>
      <p class="subtext">Но похоже, она не подключена. Вернёмся к главной?</p>
      <a href="/">
        <button>На главную</button>
      </a>
    </div>
  <!-- </div> -->
</template>

<style scoped>
.container {
  width: 100%;
  min-height: 92vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  overflow: hidden;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
}

.bg-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(90deg, rgba(13, 13, 13, 0.05) 1px, transparent 1px),
    linear-gradient(rgba(13, 13, 13, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: pan 40s linear infinite;
  overflow: hidden;
  box-sizing: border-box;
  text-align: center;
  user-select: none;
  margin-top: 100px;
}

@keyframes pan {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-40px, -40px);
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  max-width: 700px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  position: absolute; /* Добавлено */
  top: 50%; /* Добавлено */
  left: 50%; /* Добавлено */
  transform: translate(-50%, -50%); /* Добавлено */
  text-align: center;
  user-select: none;
}

h1 {
  font-size: 130px;
  font-weight: 800;
  color: #161616;
  margin: 0;
}

p {
  font-size: 22px;
  color: #2e2e2e;
  margin: 15px 0;
}

.subtext {
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
}

button {
  width: 190px;
  height: 50px;
  border-radius: 12px;
  border: none;
  background-color: var(--color);
  color: white;
  cursor: pointer;

  font-weight: 600;
  font-size: 18px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  transition: all 200ms ease;
}

button:active {
  background-color: #4200FF;
  color: #fff;
}

@media (hover: hover) {
  button:hover {
    background-color: #2d00aa;
    transform: scale(1.03);
  }

  button:active {
    background-color: #240088;
    transform: scale(0.98);
  }
}

@media (max-width: 600px) {
  h1 {
    font-size: 90px;
  }

  p {
    font-size: 18px;
  }

  .subtext {
    font-size: 14px;
  }
}
/* Анимации появления */
@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translate(-50%, calc(-50% + 30px));
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

@keyframes pulse404 {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.04);
  }
}

.content {
  animation: fadeSlideUp 1s ease-out;
}

/* Дыхание 404 */
h1 {
  animation: pulse404 5s infinite ease-in-out;
}

/* Поочерёдное появление текста */
p, .subtext, a {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

p {
  animation-delay: 0.6s;
}
.subtext {
  animation-delay: 1s;
}
a {
  animation-delay: 1.4s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Кнопка с "прыжком" при наведении */
button:hover {
  background-color: #2d00aa;
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
  transition: all 200ms ease-in-out;
}


</style>
