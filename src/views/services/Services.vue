<script>
import close_img from "@/assets/close.svg";
import appFooter from "@/components/layouts/AppFooter.vue";

export default {
  components: { appFooter },
  data() {
    return {
      imgClose: close_img,
      faqs: [
        {
          question: "Монтаж систем электроснабжения",
          answer: `
            <ul class="list-disc pl-5 space-y-2">
              <li><a href="/service/electromontazh">Электромонтажные работы</a></li>
              <li><a href="/service/electroshields">Проектирование и сборка электрощитов</a></li>
              <li><a href="/service/grounding">Монтаж системы заземления</a></li>
              <li><a href="/service/outdoor-lighting">Монтаж наружного освещения</a></li>
              <li><a href="/service/electro-repair">Ремонт и обслуживание эл. систем</a></li>
              <li><a href="/service/electric-heating">Электрообогрев</a></li>
            </ul>`,
          isHide: false,
        },
        {
          question: "Монтаж СКС",
          answer: `
            <ul class="list-disc pl-5 space-y-2">
              <li><a href="/service/lan-installation">Монтаж ЛВС</a></li>
              <li><a href="/service/certification">Тестирование и сертификация СКС</a></li>
            </ul>`,
          isHide: false,
        },
        {
          question: "Охранно-тревожная сигнализация",
          answer: `
            <ul class="list-disc pl-5 space-y-2">
              <li><a href="/service/security-alarm">Охранная сигнализация</a></li>
              <li><a href="/service/panic-alarm">Тревожная сигнализация</a></li>
            </ul>`,
          isHide: false,
        },
        {
          question: "Монтаж систем видеонаблюдения",
          answer: `
            <ul class="list-disc pl-5 space-y-2">
              <li><a href="/service/ip-cctv">Монтаж IP систем видеонаблюдения</a></li>
              <li><a href="/service/analog-cctv">Монтаж аналоговых систем видеонаблюдения</a></li>
            </ul>`,
          isHide: false,
        },
        {
          question: "Монтаж СКД и СКУД",
          answer: `
            <ul class="list-disc pl-5 space-y-2">
              <li><a href="/service/standalone-acs">Установка автономных СКД</a></li>
              <li><a href="/service/network-acs">Установка сетевых СКУД</a></li>
              <li><a href="/service/biometric-acs">Установка биометрических СКУД</a></li>
            </ul>`,
          isHide: false,
        },
      ],
    };
  },
  methods: {
    openAnswer(index) {
      this.faqs[index].isHide = !this.faqs[index].isHide;
    },
  },
};
</script>

<template>
  <div class="py-10 px-4 md:px-10 lg:px-40 bg-white">
    <div class="max-w-7xl mx-auto text-center mb-10">
      <h1 class="text-[#0502a7] text-3xl md:text-4xl font-bold">Наши услуги:</h1>
    </div>

    <div class="flex flex-col items-center gap-4">
      <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="w-full md:w-[90%] bg-[#eeebeb] rounded-2xl p-5 shadow-md transition-all duration-300"
      >
        <div
            class="flex justify-between items-center cursor-pointer"
            @click="openAnswer(index)"
        >
          <h2 class="text-xl sm:text-2xl md:text-2xl font-semibold text-[#0502a7]">
            {{ faq.question }}
          </h2>
          <img
              :src="imgClose"
              alt="toggle"
              class="w-6 h-6 transition-transform duration-300"
              :class="{ 'rotate-45': faq.isHide }"
          />
        </div>

        <div
            class="mt-3 text-base sm:text-lg md:text-xl transition-all duration-300 link-style"
            v-html="faq.answer"
            :class="{ hidden: faq.isHide }"
        />
      </div>
    </div>
  </div>

  <app-footer />
</template>

<!-- ❗ Без scoped! -->
<style>
.link-style a {
  display: inline-block;
  color: #0502a7;
  font-size: 18px;
  font-weight: 500;
  position: relative;
  text-decoration: none;
  transition: color 0.3s ease;
}

/* Анимированная линия под текстом */
.link-style a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0%;
  height: 2px;
  background-color: #0502a7;
  transition: width 0.3s ease;
}

.link-style a:hover {
  color: #030189;
}

.link-style a:hover::after {
  width: 100%;
}

/* Адаптивный размер текста */
@media (max-width: 768px) {
  .link-style a {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .link-style a {
    font-size: 14px;
  }
}
</style>
