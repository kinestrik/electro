const services = [
    {
        tag: `electroshields`,
        title: `Проектирование и сборка электрощитов`,
        alt_1: `Модульный электрощит с аккуратной компоновкой автоматов, УЗО и приборов учета.`,
        img_1: new URL('/src/assets/shield1.jpg', import.meta.url).href,
        text_1: ` <h1 class="text-3xl font-bold mb-6">Проектирование и сборка электрощитов</h1>

      <p class="text-lg mb-6">
        Электрощит — это интеллектуальный центр управления электроснабжением, отвечающий за безопасное распределение энергии и защиту оборудования. Качественная сборка щита обеспечивает бесперебойную работу всех электрических систем объекта.
      </p>

      <div class="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 class="text-xl font-semibold mb-4">Этапы проектирования</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li>Анализ нагрузок и расчет мощности</li>
            <li>Разработка принципиальных схем</li>
            <li>Подбор оборудования</li>
            <li>Оптимизация компоновки</li>
          </ul>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-4">Процесс сборки</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li>Монтаж DIN-реек и шин</li>
            <li>Установка защитных устройств</li>
            <li>Прокладка и маркировка проводов</li>
            <li>Комплексное тестирование</li>
          </ul>
        </div>
      </div>`,
        img_2: new URL('/src/assets/shield2.jpg', import.meta.url).href,
        alt_2: `Вторая картинка: сравнение профессионально собранного щита с аккуратной разводкой и кустарной сборки с нарушением норм`,
        text_2: `
    <div class="prose prose-lg max-w-none mb-12">
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Ключевые преимущества</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Гарантия безопасности и надежности</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Соблюдение всех норм ПУЭ и ГОСТ</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Использование профессионального инструмента</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Возможность дальнейшего расширения</span>
          </div>
        </div>
      </div>
    </div>`
    },
    {
        tag: `electromontazh`,
        title: `Электромонтажные работы`,
        alt_1: `Главная картинка: электрик производит монтаж проводки в жилом помещении`,
        img_1: new URL('/src/assets/electroprovodka1.jpg', import.meta.url).href, // Замените на реальный URL изображения
        text_1: `

    <p class="text-lg mb-6">
      Электромонтажные работы — это комплекс мероприятий по установке, подключению и наладке электрооборудования. Качественный монтаж обеспечивает надежную и безопасную работу электросетей в жилых домах, офисах и на производственных объектах.
    </p>

    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Основные этапы работ:</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Прокладка кабельных трасс (скрытая и открытая проводка)</li>
        <li>Установка розеток, выключателей и распределительных коробок</li>
        <li>Монтаж осветительных приборов и электрощитового оборудования</li>
        <li>Подключение силовых установок и бытовой техники</li>
        <li>Тестирование и сдача в эксплуатацию</li>
      </ul>
    </div>`,
        img_2: new URL('/src/assets/electroprovodka2.jpg', import.meta.url).href, // Замените на реальный URL изображения
        alt_2: `Вторая картинка: сравнение профессионального и непрофессионального монтажа электропроводки`,
        text_2: `
    <div class="prose prose-lg max-w-none mb-12">
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Преимущества:</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Строгое соблюдение ПУЭ и ГОСТ</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Использование качественных материалов и инструментов</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Гарантия долговечности и пожарной безопасности</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Индивидуальный подход к каждому проекту</span>
          </div>
        </div>
      </div>
    </div>`
    },
    {
        tag: `grounding`,
        title: `Монтаж системы заземления`,
        alt_1: `Главная картинка: профессиональный монтаж контура заземления с медными электродами`,
        img_1: new URL('/src/assets/zazem1.webp', import.meta.url).href,
        text_1: `

    <p class="text-lg mb-6">
      Система заземления — это важнейший элемент электробезопасности, защищающий людей и оборудование от поражения током и повреждений при авариях. Правильно смонтированное заземление обеспечивает стабильную работу электроустановок и предотвращает риски, связанные с утечками тока.
    </p>

    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Этапы монтажа:</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Расчет сопротивления заземления</li>
        <li>Выбор материалов (сталь, медь, оцинкованные электроды)</li>
        <li>Земляные работы и установка заземлителей</li>
        <li>Прокладка соединительных проводников</li>
        <li>Измерение параметров и составление акта</li>
      </ul>
    </div>`,
        img_2: new URL('/src/assets/zazem2.png', import.meta.url).href,
        alt_2: `Сравнение профессионального и неправильного монтажа заземления`,
        text_2: `
    <div class="prose prose-lg max-w-none mb-12">
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Преимущества:</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Полное соответствие требованиям ПУЭ и ПТЭЭП</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Повышение уровня безопасности объекта</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Увеличение срока службы электрооборудования</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Минимизация риска выхода из строя техники</span>
          </div>
        </div>
      </div>
    </div>`
    },
    {
        tag: `outdoor-lighting`,
        title: `Монтаж наружного освещения`,
        alt_1: `Профессиональный монтаж уличных LED-светильников вдоль дорожки`,
        img_1: new URL('/src/assets/naruj1.jpeg', import.meta.url).href, // Замените на реальный URL
        text_1: `

    <p class="text-lg mb-6">
      Наружное освещение выполняет не только декоративную, но и практическую функцию, обеспечивая безопасность и комфорт на территории. Современные технологии позволяют создавать энергоэффективные системы с автоматическим управлением и долгим сроком службы.
    </p>

    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Этапы работ:</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Разработка проекта с учетом ландшафта и норм освещенности</li>
        <li>Выбор светильников (LED, прожекторы, садовые фонари)</li>
        <li>Прокладка кабельных трасс и установка опор</li>
        <li>Монтаж автоматики и датчиков движения</li>
        <li>Пуско-наладочные работы</li>
      </ul>
    </div>`,
        img_2: new URL('/src/assets/naruj2.jpg', import.meta.url).href, // Замените на реальный URL
        alt_2: `Сравнение профессиональной и любительской установки наружного освещения`,
        text_2: `
    <div class="prose prose-lg max-w-none mb-12">
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Преимущества:</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Энергосбережение за счет использования LED-технологий</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Автоматизация управления для удобства и экономии</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Устойчивость к погодным условиям</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Эстетичное и функциональное решение для любой территории</span>
          </div>
        </div>
      </div>
    </div>`
    },
    {
        tag: `electro-repair`,
        title: `Ремонт и обслуживание электросистем`,
        alt_1: `Электрик проводит диагностику электрощита с помощью мультиметра`,
        img_1: new URL('/src/assets/rese1.jpg', import.meta.url).href, // Замените на реальный URL
        text_1: `

    <p class="text-lg mb-6">
      Регулярное обслуживание и своевременный ремонт электросистем — залог их бесперебойной работы и безопасности. Профессиональный подход позволяет выявить и устранить неисправности на ранних стадиях, предотвращая аварии и простои.
    </p>

    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Виды работ:</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Диагностика состояния проводки и оборудования</li>
        <li>Замена изношенных элементов (кабели, розетки, выключатели)</li>
        <li>Настройка защитных устройств (УЗО, автоматические выключатели)</li>
        <li>Проверка контактов и соединений</li>
        <li>Обновление устаревших компонентов</li>
      </ul>
    </div>`,
        img_2: new URL('/src/assets/rese2.jpg', import.meta.url).href, // Замените на реальный URL
        alt_2: `Сравнение профессионального ремонта и непрофессионального вмешательства в электросистемы`,
        text_2: `
    <div class="prose prose-lg max-w-none mb-12">
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Преимущества:</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Снижение риска возгораний и поломок</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Оптимизация энергопотребления</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Соответствие действующим нормам безопасности</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Продление срока эксплуатации электрооборудования</span>
          </div>
        </div>
      </div>
    </div>`
    },
    {
        tag: `electric-heating`,
        title: `Электрообогрев`,
        alt_1: `Монтаж системы теплого пола в жилом помещении`,
        img_1: new URL('/src/assets/obogrev1.jpg', import.meta.url).href, // Замените на реальный URL
        text_1: `
    <p class="text-lg mb-6">
      Электрообогрев — это современное и энергоэффективное решение для обогрева жилых, коммерческих и промышленных помещений. Системы электрообогрева обеспечивают комфортную температуру, равномерное распределение тепла и возможность точного регулирования.
    </p>

    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Виды электрообогрева:</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Кабельные системы (теплые полы, обогрев кровли и труб)</li>
        <li>Инфракрасные панели и пленочные нагреватели</li>
        <li>Электрические конвекторы и радиаторы</li>
        <li>Системы антиобледенения (крыши, ступени, дорожки)</li>
      </ul>
    </div>`,
        img_2: new URL('/src/assets/obogrev2.jpg', import.meta.url).href, // Замените на реальный URL
        alt_2: `Сравнение различных систем электрообогрева`,
        text_2: `
    <div class="prose prose-lg max-w-none mb-12">
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Преимущества:</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Высокий КПД и экономия энергии</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Простота монтажа и эксплуатации</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Возможность зонированного управления</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Долговечность и безопасность</span>
          </div>
        </div>
      </div>
    </div>`
    },
    {
        tag: `lan-installation`,
        title: `Монтаж ЛВС (локальных вычислительных сетей)`,
        alt_1: `Профессиональный монтаж структурированной кабельной системы в серверной комнате`,
        img_1: new URL('/src/assets/lvs1.jpg', import.meta.url).href, // Замените на реальный URL
        text_1: `

    <p class="text-lg mb-6">
      Локальная вычислительная сеть (ЛВС) — это основа современной ИТ-инфраструктуры, обеспечивающая быстрый обмен данными, совместный доступ к ресурсам и стабильную работу всех подключенных устройств. Профессиональный монтаж ЛВС гарантирует высокую производительность, безопасность и масштабируемость сети.
    </p>

    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Этапы монтажа ЛВС:</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Проектирование топологии сети с учетом требований заказчика</li>
        <li>Прокладка кабельных трасс (витая пара, оптоволокно)</li>
        <li>Установка и настройка активного оборудования (коммутаторы, маршрутизаторы)</li>
        <li>Монтаж телекоммуникационных шкафов и кросс-панелей</li>
        <li>Подключение и тестирование рабочих станций</li>
        <li>Настройка сетевой безопасности и управления доступом</li>
      </ul>
    </div>`,
        img_2: new URL('/src/assets/lvs2.jpg', import.meta.url).href, // Замените на реальный URL
        alt_2: `Комплект профессионального оборудования для монтажа ЛВС`,
        text_2: `
    <div class="prose prose-lg max-w-none mb-12">
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Преимущества:</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Высокая скорость передачи данных</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Надежность и отказоустойчивость сети</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Соответствие международным стандартам (TIA/EIA, ISO)</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Возможность дальнейшего расширения сети</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Профессиональная гарантия на все работы</span>
          </div>
        </div>
      </div>
    </div>`
    },
    {
        tag: `certification`,
        title: `Тестирование и сертификация СКС`,
        alt_1: `Профессиональное тестирование кабельной системы сертификационным анализатором`,
        img_1: new URL('/src/assets/sks1.jpg', import.meta.url).href,
        text_1: `
    <p class="text-lg mb-6">
      Структурированная кабельная система (СКС) — это универсальная инфраструктура для передачи данных, голоса и видео. Тестирование и сертификация СКС подтверждают соответствие системы международным стандартам, гарантируют стабильную работу и выявляют возможные проблемы до ввода в эксплуатацию.
    </p>

    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Процесс тестирования и сертификации:</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Проверка параметров кабельных линий (затухание, NEXT, возвратные потери)</li>
        <li>Тестирование пропускной способности и качества соединений</li>
        <li>Визуальный осмотр разъемов и коммутационных панелей</li>
        <li>Составление отчетов и сертификатов соответствия</li>
        <li>Рекомендации по устранению выявленных недостатков</li>
      </ul>
    </div>`,
        img_2: new URL('/src/assets/sks2.jpg', import.meta.url).href,
        alt_2: `Пример сертификационного отчета с результатами тестирования`,
        text_2: `
    <div class="prose prose-lg max-w-none mb-12">
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Преимущества:</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Гарантия соответствия стандартам (ISO/IEC 11801, TIA/EIA-568)</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Предотвращение сбоев и простоев сети</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Документальное подтверждение качества системы</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Повышение срока службы кабельной инфраструктуры</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Уверенность в надежности и безопасности сети</span>
          </div>
        </div>
      </div>
    </div>`
    },
    {
        tag: `security-alarm`,
        title: `Охранная сигнализация`,
        alt_1: `Профессиональный монтаж охранной сигнализации с датчиками движения`,
        img_1: new URL('/src/assets/ohran1.jpg', import.meta.url).href,
        text_1: `<h1 class="text-3xl font-bold mb-6">Охранная сигнализация</h1>

    <p class="text-lg mb-6">
      Охранная сигнализация - это комплекс технических средств, предназначенных для своевременного обнаружения несанкционированного проникновения на охраняемый объект. Современные системы обеспечивают надежную защиту имущества и безопасность людей.
    </p>

    <div class="grid md:grid-cols-2 gap-8 mb-8">
      <div>
        <h2 class="text-xl font-semibold mb-4">Компоненты системы:</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li>Датчики движения и открытия дверей/окон</li>
          <li>Контрольная панель управления</li>
          <li>Сирены и световые оповещатели</li>
          <li>Система передачи тревожных извещений (GSM, радиоканал, интернет)</li>
          <li>Резервное питание</li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-4">Этапы монтажа:</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li>Обследование объекта и разработка проекта</li>
          <li>Установка датчиков по периметру и внутри помещений</li>
          <li>Прокладка кабельных линий или настройка беспроводной связи</li>
          <li>Настройка и программирование оборудования</li>
          <li>Обучение персонала и сдача в эксплуатацию</li>
        </ul>
      </div>
    </div>`,
        img_2: new URL('/src/assets/ohran2.jpg', import.meta.url).href,
        alt_2: `Комплект оборудования для охранной сигнализации`,
        text_2: `
    <div class="prose prose-lg max-w-none mb-12">
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Преимущества:</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Круглосуточная защита объекта</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Мгновенное оповещение о тревоге</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Возможность интеграции с другими системами безопасности</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Снижение страховых выплат за счет защиты имущества</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Соответствие требованиям ГОСТ Р 50775-95 и Р 50658-94</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Гибкие настройки под конкретные задачи охраны</span>
          </div>
        </div>
      </div>
    </div>`
    },
    {
        tag: `panic-alarm`,
        title: `Тревожная сигнализация`,
        alt_1: `Профессиональный монтаж тревожной кнопки в банковском учреждении`,
        img_1: new URL('/src/assets/trevoj1.jpg', import.meta.url).href,
        text_1: `

    <p class="text-lg mb-6">
      Тревожная сигнализация - это система оперативного оповещения о возникновении чрезвычайной ситуации, позволяющая быстро вызвать помощь при угрозе жизни или здоровью людей.
    </p>

    <div class="grid md:grid-cols-2 gap-8 mb-8">
      <div>
        <h2 class="text-xl font-semibold mb-4">Типы систем:</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li>Стационарные тревожные кнопки</li>
          <li>Переносные радиобрелоки</li>
          <li>Мобильные приложения для смартфонов</li>
          <li>Комбинированные решения</li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl font-semibold mb-4">Применение:</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li>В банках и финансовых учреждениях</li>
          <li>В школах и детских учреждениях</li>
          <li>На рабочих местах с повышенным риском</li>
          <li>В частных домах и квартирах</li>
        </ul>
      </div>
    </div>`,
        img_2: new URL('/src/assets/trevoj2.jpg', import.meta.url).href,
        alt_2: `Сравнение различных типов тревожных сигнализаций`,
        text_2: `
    <div class="prose prose-lg max-w-none mb-12">
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Преимущества:</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Мгновенный вызов помощи в экстренной ситуации</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Дискретное срабатывание без привлечения внимания</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Круглосуточный мониторинг сигналов</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Простота использования в критической ситуации</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Интеграция с системами видеонаблюдения</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Соответствие требованиям безопасности (ГОСТ Р 52651)</span>
          </div>
        </div>
      </div>
    </div>`
    },
    {
        tag: `ip-cctv`,
        title: `Монтаж IP систем видеонаблюдения`,
        alt_1: `Профессиональный монтаж IP-камер видеонаблюдения на промышленном объекте`,
        img_1: new URL('/src/assets/ipcamera1.jpg', import.meta.url).href,
        text_1: `

    <p class="text-lg mb-6">
      IP видеонаблюдение — это современное цифровое решение, обеспечивающее высокое качество изображения, удалённый доступ и гибкость в настройке. Системы на базе IP-камер применяются для охраны жилых домов, бизнес-центров и промышленных объектов.
    </p>

    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Этапы работ:</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Оценка объекта и разработка проекта системы</li>
        <li>Подбор IP-камер и видеорегистратора (NVR)</li>
        <li>Прокладка сетевых кабелей (витая пара)</li>
        <li>Подключение камер и настройка питания (PoE)</li>
        <li>Настройка удалённого доступа и хранения данных</li>
      </ul>
    </div>`,
        img_2: new URL('/src/assets/ipcamera2.jpg', import.meta.url).href,
        alt_2: `Комплект оборудования для IP видеонаблюдения: камеры, регистратор, коммутатор`,
        text_2: `
    <div class="prose prose-lg max-w-none mb-12">
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Преимущества:</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Высокое разрешение (до 8K) и детализация видео</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Удалённый доступ с любых устройств через интернет</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Гибкая масштабируемость (добавление камер без замены системы)</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Интеграция с охранной сигнализацией и СКУД</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Экономия на кабельной инфраструктуре (PoE технология)</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Интеллектуальные функции (распознавание лиц, детекция движения)</span>
          </div>
        </div>
      </div>
      <p class="text-lg">
        Монтаж IP систем видеонаблюдения — это надёжное решение для организации круглосуточного видеоконтроля, обеспечивающее высокий уровень безопасности и удобство управления.
      </p>
    </div>`
    },
    {
        tag: "analog-cctv",
        title: "Монтаж аналоговых систем видеонаблюдения",
        alt_1: "Профессиональный монтаж аналоговых камер видеонаблюдения",
        img_1: new URL('/src/assets/analogcamera1.jpg', import.meta.url).href,
        text_1: `
    <p class="text-lg mb-6">
      Аналоговые системы видеонаблюдения — это проверенное и экономичное решение для базового видеоконтроля. 
      Они особенно актуальны для объектов, где не требуется высокая детализация, но важны стабильность и простота эксплуатации.
    </p>
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Этапы работ:</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Осмотр объекта и составление проекта системы</li>
        <li>Выбор аналоговых камер (HD-CVI, HD-TVI, AHD)</li>
        <li>Прокладка коаксиального кабеля и подвод питания</li>
        <li>Установка видеорегистратора (DVR) и монитора</li>
        <li>Настройка системы записи и отображения</li>
      </ul>
    </div>`,
        img_2: new URL('/src/assets/analogcamera2.webp', import.meta.url).href,
        alt_2: "Комплект оборудования для аналогового видеонаблюдения",
        text_2: `<div class="prose prose-lg max-w-none mb-12">
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Преимущества:</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Низкая стоимость оборудования и монтажа</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Простота установки и обслуживания</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Стабильная работа без зависимости от сети</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Совместимость с существующими линиями</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Поддержка разрешения до 4K в новых стандартах</span>
          </div>
        </div>
      </div>
      <p class="text-lg">
        Монтаж аналоговых видеосистем остаётся востребованным решением благодаря своей надёжности и доступности — 
        особенно в проектах с ограниченным бюджетом.
      </p>
    </div>`
    },
    {
        tag: "standalone-acs",
        title: "Установка автономных СКД",
        alt_1: "Монтаж автономной системы контроля доступа на двери офиса",
        img_1: new URL('/src/assets/skd1.webp', import.meta.url).href,
        text_1: `<h1 class="text-3xl font-bold mb-6">Установка автономных СКД</h1>
    <p class="text-lg mb-6">
      Автономная система контроля доступа (СКД) — это решение, не требующее подключения к сети или серверу. 
      Такие системы подходят для небольших объектов, где необходима локальная идентификация и управление доступом без постоянного контроля.
    </p>
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Этапы установки:</h2>
      <ul class="list-disc pl-5 space-y-2">
        <li>Осмотр объекта и выбор точек доступа</li>
        <li>Подбор оборудования (контроллер, считыватель, электрозамок)</li>
        <li>Монтаж замков и считывателей</li>
        <li>Программирование ключей и карт доступа</li>
        <li>Проверка работы и обучение персонала</li>
      </ul>
    </div>`,
        img_2: new URL('/src/assets/skd2.webp', import.meta.url).href,
        alt_2: "Комплект оборудования автономной СКД: контроллер, считыватель, электрозамок",
        text_2: `<div class="prose prose-lg max-w-none mb-12">
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="text-xl font-semibold mb-4">Преимущества:</h2>
        <div class="grid sm:grid-cols-2 gap-4">
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Простота установки и настройки (1-2 часа на точку доступа)</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Полная автономность - не требует сервера и специального ПО</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Надёжность работы 24/7 без техобслуживания</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Экономия до 60% по сравнению с сетевыми системами</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Поддержка до 1000 пользователей (в зависимости от модели)</span>
          </div>
          <div class="flex items-start">
            <svg class="h-6 w-6 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Резервное питание 12-24 часа при отключении электричества</span>
          </div>
        </div>
      </div>
      <p class="text-lg">
        Установка автономной СКД обеспечивает контроль доступа на объекте без дополнительных расходов на сетевую инфраструктуру 
        и сопровождение, сохраняя при этом надёжность и удобство в эксплуатации. Идеальное решение для кабинетов, 
        складов, частных домов и небольших офисов до 10 дверей.
      </p>
    </div>`
    },
    {
        tag: "network-acs",
        title: "Профессиональный монтаж сетевых СКУД",
        alt_1: "Монтаж сетевой системы контроля доступа в бизнес-центре",
        img_1: new URL('/src/assets/setskud1.jpg', import.meta.url).href,
        text_1: `
    <p class="text-lg mb-6">
      Сетевая СКУД - это интеллектуальная система безопасности, обеспечивающая централизованный контроль всех точек входа/выхода на объекте.
    </p>
    
    <div class="mb-8 bg-blue-50 p-4 rounded-lg">
      <h2 class="text-xl font-semibold mb-3 text-blue-800">Идеальное решение для:</h2>
      <ul class="grid grid-cols-2 gap-2">
        <li class="flex items-start">
          <svg class="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Корпоративных офисов</span>
        </li>
        <li class="flex items-start">
          <svg class="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Промышленных предприятий</span>
        </li>
        <li class="flex items-start">
          <svg class="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>ТРЦ и бизнес-центров</span>
        </li>
        <li class="flex items-start">
          <svg class="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Медицинских учреждений</span>
        </li>
      </ul>
    </div>

    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Технологический процесс монтажа:</h2>
      <div class="space-y-4">
        <div>
          <h3 class="font-medium text-lg mb-2">1. Проектный этап</h3>
          <ul class="list-disc pl-5 space-y-1 text-gray-700">
            <li>Анализ объекта и разработка ТЗ</li>
            <li>Определение точек доступа</li>
            <li>Подбор оборудования</li>
          </ul>
        </div>
        <div>
          <h3 class="font-medium text-lg mb-2">2. Монтажные работы</h3>
          <ul class="list-disc pl-5 space-y-1 text-gray-700">
            <li>Установка контроллеров</li>
            <li>Прокладка кабельных трасс</li>
            <li>Подключение к сети</li>
          </ul>
        </div>
        <div>
          <h3 class="font-medium text-lg mb-2">3. Пуско-наладка</h3>
          <ul class="list-disc pl-5 space-y-1 text-gray-700">
            <li>Настройка ПО</li>
            <li>Конфигурирование прав</li>
            <li>Комплексное тестирование</li>
          </ul>
        </div>
      </div>
    </div>`,
        img_2: new URL('/src/assets/setskud2.jpg', import.meta.url).href,
        alt_2: "Интеграция СКУД с другими системами безопасности",
        text_2: `<div class="prose prose-lg max-w-none">
      <div class="bg-gray-50 p-6 rounded-lg mb-6">
        <h2 class="text-xl font-semibold mb-4">Ключевые преимущества:</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex items-start bg-white p-3 rounded shadow-sm">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <h3 class="font-medium">Автоматизация доступа</h3>
              <p class="text-sm text-gray-600">Централизованное управление всеми точками входа/выхода</p>
            </div>
          </div>
          <div class="flex items-start bg-white p-3 rounded shadow-sm">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <h3 class="font-medium">Интеграция</h3>
              <p class="text-sm text-gray-600">Совместимость с видеонаблюдением, ОПС и системами учета</p>
            </div>
          </div>
          <div class="flex items-start bg-white p-3 rounded shadow-sm">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <h3 class="font-medium">Управление</h3>
              <p class="text-sm text-gray-600">Web-интерфейс и мобильные приложения для контроля</p>
            </div>
          </div>
          <div class="flex items-start bg-white p-3 rounded shadow-sm">
            <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <div>
              <h3 class="font-medium">Безопасность</h3>
              <p class="text-sm text-gray-600">Многоуровневая защита и система антипассбэк</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-6">
        <h2 class="text-xl font-semibold mb-3">Дополнительные возможности:</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li>Биометрическая идентификация по лицу/отпечатку</li>
          <li>Автоматическая генерация отчетов и аналитика</li>
          <li>Интеграция с CRM и кадровыми системами</li>
          <li>Гибкие сценарии работы (графики, зоны доступа)</li>
        </ul>
      </div>

      <div class="bg-blue-50 p-4 rounded-lg">
        <h2 class="text-xl font-semibold mb-3 text-blue-800">Наши гарантии:</h2>
        <div class="grid sm:grid-cols-2 gap-3">
          <div class="flex items-center">
            <svg class="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Монтаж "под ключ"</span>
          </div>
          <div class="flex items-center">
            <svg class="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Гарантия до 3 лет</span>
          </div>
          <div class="flex items-center">
            <svg class="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Поддержка 24/7</span>
          </div>
          <div class="flex items-center">
            <svg class="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Обучение персонала</span>
          </div>
        </div>
      </div>

      <p class="mt-6 text-lg leading-relaxed">
        Сетевая СКУД от нашей компании - это современное решение для комплексной защиты вашего бизнеса, 
        обеспечивающее максимальный уровень безопасности при оптимальных затратах.
      </p>
    </div>`
    },
    {
        tag: "biometric-acs",
        title: "Профессиональный монтаж биометрических СКУД",
        alt_1: "Установка биометрического терминала контроля доступа",
        img_1: new URL('/src/assets/bioskud1.jpg', import.meta.url).href,
        text_1: `<h1 class="text-3xl font-bold mb-6">Профессиональный монтаж биометрических СКУД</h1>
    <p class="text-lg mb-6">
      Биометрическая СКУД — это инновационное решение для идентификации личности по уникальным биологическим характеристикам. 
      Обеспечивает максимальный уровень защиты на объектах с повышенными требованиями безопасности.
    </p>

    <div class="mb-8 bg-blue-50 p-4 rounded-lg">
      <h2 class="text-xl font-semibold mb-3 text-blue-800">Основные сферы применения:</h2>
      <ul class="grid md:grid-cols-2 gap-2">
        <li class="flex items-start">
          <svg class="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Банки и финансовые учреждения</span>
        </li>
        <li class="flex items-start">
          <svg class="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Научно-исследовательские центры</span>
        </li>
        <li class="flex items-start">
          <svg class="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Государственные учреждения</span>
        </li>
        <li class="flex items-start">
          <svg class="h-5 w-5 text-blue-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Фармацевтические предприятия</span>
        </li>
      </ul>
    </div>

    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Технологии идентификации:</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="flex items-start bg-white p-3 rounded shadow-sm">
          <div class="bg-blue-100 p-2 rounded-full mr-3">
            <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div>
            <h3 class="font-medium">3D-распознавание лица</h3>
            <p class="text-sm text-gray-600">Точность 99,7%, защита от масок</p>
          </div>
        </div>
        <div class="flex items-start bg-white p-3 rounded shadow-sm">
          <div class="bg-blue-100 p-2 rounded-full mr-3">
            <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path>
            </svg>
          </div>
          <div>
            <h3 class="font-medium">Сканирование отпечатков</h3>
            <p class="text-sm text-gray-600">Защита от муляжей, FAR 0.001%</p>
          </div>
        </div>
        <div class="flex items-start bg-white p-3 rounded shadow-sm">
          <div class="bg-blue-100 p-2 rounded-full mr-3">
            <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
          <div>
            <h3 class="font-medium">Анализ радужной оболочки</h3>
            <p class="text-sm text-gray-600">Скорость 0.3 сек, работа в темноте</p>
          </div>
        </div>
        <div class="flex items-start bg-white p-3 rounded shadow-sm">
          <div class="bg-blue-100 p-2 rounded-full mr-3">
            <svg class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
            </svg>
          </div>
          <div>
            <h3 class="font-medium">Распознавание вен ладони</h3>
            <p class="text-sm text-gray-600">Контактный метод, высокая точность</p>
          </div>
        </div>
      </div>
    </div>`,
        img_2: new URL('/src/assets/bioskud2.jpg', import.meta.url).href,
        alt_2: "Интеграция биометрической СКУД с другими системами безопасности",
        text_2: `<div class="prose prose-lg max-w-none">
      <div class="mb-8">
        <h2 class="text-xl font-semibold mb-4">Этапы внедрения:</h2>
        <div class="space-y-6">
          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="font-medium text-lg mb-2">1. Проектирование</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
              <li>Аудит объекта и анализ угроз безопасности</li>
              <li>Подбор биометрических технологий под задачи</li>
              <li>Разработка архитектуры системы</li>
            </ul>
          </div>
          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="font-medium text-lg mb-2">2. Монтаж</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
              <li>Установка биометрических терминалов</li>
              <li>Настройка серверного оборудования</li>
              <li>Организация бесперебойного питания</li>
            </ul>
          </div>
          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="font-medium text-lg mb-2">3. Настройка</h3>
            <ul class="list-disc pl-5 space-y-1 text-gray-700">
              <li>Формирование базы биометрических шаблонов</li>
              <li>Настройка многоуровневого доступа</li>
              <li>Интеграция с другими системами</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 p-6 rounded-lg mb-6">
        <h2 class="text-xl font-semibold mb-4">Ключевые преимущества:</h2>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="flex items-center mb-2">
              <div class="bg-green-100 p-1 rounded-full mr-3">
                <svg class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 class="font-medium">Абсолютная безопасность</h3>
            </div>
            <p class="text-sm text-gray-600 pl-8">100% защита от несанкционированного доступа, исключение риска передачи/утери идентификаторов</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="flex items-center mb-2">
              <div class="bg-green-100 p-1 rounded-full mr-3">
                <svg class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 class="font-medium">Скорость работы</h3>
            </div>
            <p class="text-sm text-gray-600 pl-8">Идентификация за 0.5 секунды, поддержка многофакторной аутентификации</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="flex items-center mb-2">
              <div class="bg-green-100 p-1 rounded-full mr-3">
                <svg class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 class="font-medium">Дополнительные функции</h3>
            </div>
            <p class="text-sm text-gray-600 pl-8">Антиспуфинг-защита, работа оффлайн, детализированная аналитика</p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="flex items-center mb-2">
              <div class="bg-green-100 p-1 rounded-full mr-3">
                <svg class="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 class="font-medium">Управление доступом</h3>
            </div>
            <p class="text-sm text-gray-600 pl-8">Black-листы, тревожные события, мобильное управление для администраторов</p>
          </div>
        </div>
      </div>

      <div class="bg-blue-50 p-4 rounded-lg mb-6">
        <h2 class="text-xl font-semibold mb-3 text-blue-800">Наши гарантии:</h2>
        <div class="grid sm:grid-cols-2 gap-3">
          <div class="flex items-center bg-white p-2 rounded">
            <svg class="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Сертифицированное оборудование</span>
          </div>
          <div class="flex items-center bg-white p-2 rounded">
            <svg class="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Соответствие ФЗ-152</span>
          </div>
          <div class="flex items-center bg-white p-2 rounded">
            <svg class="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Поддержка 24/7</span>
          </div>
          <div class="flex items-center bg-white p-2 rounded">
            <svg class="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Обновление ПО</span>
          </div>
        </div>
      </div>

      <p class="mt-6 text-lg leading-relaxed">
        Биометрическая СКУД от нашей компании — это передовые технологии безопасности, адаптированные под специфику вашего бизнеса. 
        Мы обеспечиваем полный цикл работ от проектирования до постгарантийного обслуживания.
      </p>
    </div>`
    }
]
export {services};