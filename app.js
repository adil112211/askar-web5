// Global variables
let currentLanguage = 'ru';
let currentPage = 'home';

// Translation data based on provided JSON
const translations = {
    kk: {
        // Navigation
        home: "Басты бет",
        services: "Қызметтер",
        about: "Біз туралы", 
        contacts: "Байланыстар",
        
        // Hero section
        hero_title: "Қазақстандағы сенімді логистикалық серіктес",
        hero_subtitle: "Біз кез келген күрделілік дәрежесіндегі логистикалық міндеттерді шешеміз",
        get_consultation: "Консультация алу",
        our_services: "Біздің қызметтеріміз",
        
        // Stats
        years_experience: "жыл тәжірибе",
        satisfied_clients: "қанағаттанған клиенттер",
        countries: "елдер",
        support: "қолдау",
        
        // Services
        maritime_title: "Теңіз контейнерлік тасымалдары",
        maritime_short_desc: "Жетекші теңіз желілерімен халықаралық тасымалдау",
        railway_title: "Темір жол тасымалдары", 
        railway_short_desc: "Қазақстан арқылы тиімді транзиттік тасымалдар",
        automotive_title: "Автомобиль тасымалдары",
        automotive_short_desc: "Кез келген жүкті тасымалдауға икемді шешімдер",
        warehousing_title: "Қоймалық қызметтер",
        warehousing_short_desc: "Жүктерді сақтау және өңдеуге заманауи шешімдер",
        learn_more: "Толығырақ білу",
        
        // Service details
        maritime_full_desc: "NewLS Kazakhstan теңіз контейнерлік тасымалдар нарығының ірі операторы болып табылады және OOCL, MSC, Hapag Lloyd, CMA CGM, Hyundai, FESCO сияқты теңіз желілерінің импорттық/экспорттық жүктерінің логистикасын мамандандырады. Біз кез келген көлемдегі жүктер үшін толық қызмет көрсетеміз.",
        railway_full_desc: "Біз клиентке біздің компанияның оперативті басқаруындағы жылжымалы құрам (фитингті платформалар, контейнерлер) ұсынамыз. Меншікті инфрақұрылымды дамыта отырып, біз сапалы қызмет көрсетуді, тасымалдау өзіндік құнын төмендетуді және жеткізу мерзімдерін дәл сақтауды қамтамасыз етеміз.",
        automotive_full_desc: "Автомобиль тасымалдарын жүзеге асыру үшін жүк кеңістігі 82-ден 120 текше метрге дейінгі тентті және цельнометаллді автомобильдер, кіші тоннажды автомобильдер және габаритсыз және ауыр жүктерді тасымалдауға арналған мамандандырылған жылжымалы құрам пайдаланылады.",
        warehousing_full_desc: "Біздің заманауи қоймаларымыз автоматтандырылған жүйелермен жабдықталған және жүктерді сақтау мен дайындаудың барлық түрлерін ұсынады. Қоймалық логистика, қайта бөлу, орау және маркировкалау қызметтері қол жетімді.",
        
        // Calculator
        shipping_calculator: "Жеткізу калькуляторы",
        from: "Қайдан:",
        to: "Қайда:",
        weight: "Салмағы (кг):",
        cargo_type: "Жүк түрі:",
        select_city: "Қаланы таңдаңыз",
        general_cargo: "Жалпы жүк",
        container: "Контейнер",
        bulk_cargo: "Көлемді жүк",
        calculate: "Есептеу",
        
        // Form elements
        your_name: "Сіздің атыңыз",
        email: "Email",
        phone: "Телефон",
        message: "Хабарлама",
        cargo_description: "Жүк сипаттамасы",
        send: "Жіберу",
        send_request: "Өтінім жіберу",
        order_service: "Қызметке тапсырыс беру",
        
        // Pages
        about_subtitle: "NewLS Kazakhstan - логистикадағы сенімді серіктесіңіз",
        contacts_subtitle: "Бізбен байланысыңыз",
        services_subtitle: "Логистикалық шешімдердің толық спектрі",
        
        // About page
        our_story: "Біздің тарихымыз",
        company_description: "NewLS Kazakhstan - 2019 жылы құрылған заманауи логистикалық компания. Біз контейнерлік, теңіз, темір жол және автомобиль тасымалдарына маманданамыз.",
        company_mission: "Біздің миссиямыз - кез келген масштабтағы бизнес үшін тиімді және сенімді логистикалық шешімдерді қамтамасыз ету.",
        company_slogan: "Сіздің бизнесіңіз үшін тиімді шешімдер таба аламыз деп сенеміз!",
        founded: "Құрылған",
        projects: "Жобалар",
        
        // Contacts
        almaty: "Алматы",
        astana: "Астана", 
        almaty_address: "Сәтпаев көшесі, 30/1",
        astana_address: "Көкшетау көшесі, 15",
        send_message: "Хабарлама жіберу",
        
        // Advantages
        our_advantages: "Біздің артықшылықтарымыз",
        great_opportunities: "Үлкен мүмкіндіктер",
        vast_experience: "Үлкен тәжірибе",
        main_advantage: "Негізгі артықшылық",
        minimum_timeframes: "Минималды мерзімдер",
        
        container_periods: "Контейнерлерді пайдаланудың қосымша мерзімдері",
        own_fleet: "Заманауи автомобильдердің меншікті автопаркі",
        own_bills: "Меншікті коносаменттер шығару мүмкіндігі",
        professional_since: "2019 жылдан бері кәсіби қызмет",
        various_cargo: "Әртүрлі жүктермен жұмыс: металл бұйымдар, химикаттар, құрылыс материалдары",
        dangerous_cargo: "Қауіпті және ірі габаритті жүктерге мамандану",
        constant_containers: "Меншікті түсімдер есебінен контейнерлердің тұрақты болуы",
        own_infrastructure: "Меншікті инфрақұрылым және заманауи технологиялар",
        info_exchange: "Дайындалған ақпарат алмасу жүйесі",
        modern_technologies: "Заманауи ақпараттық технологиялар",
        time_zones: "Әртүрлі уақыт белдеулеріндегі жұмыстың жеделдігі",
        
        // Service specific
        partners: "Серіктестер",
        routes: "Негізгі бағыттар",
        features: "Қызмет ерекшеліктері",
        vehicle_types: "Транспорт түрлері",
        warehouse_services: "Қойма қызметтері",
        capacity_82_120: "Сыйымдылық: 82-120 текше метр",
        tent_vehicles: "Тентті автомобильдер",
        metal_vehicles: "Цельнометаллді",
        specialized_vehicles: "Спецтранспорт",
        light_vehicles: "Кіші тоннажды",
        for_oversized: "Габаритсыз жүктерге арналған",
        for_urgent: "Жедел жүктер үшін",
        storage: "Жүктерді сақтау",
        sorting: "Сұрыптау",
        packaging: "Орау",
        labeling: "Белгілеу",
        storage_desc: "Қысқа мерзімді және ұзақ мерзімді сақтау",
        sorting_desc: "Жүктерді дайындау және консолидациялау",
        packaging_desc: "Жүктердің кәсіби орауы",
        labeling_desc: "Қажетті белгілеуді қолдану",
        
        // Footer
        footer_description: "Қазақстандағы сенімді логистикалық серіктес",
        quick_links: "Жылдам сілтемелер",
        all_rights_reserved: "Барлық құқықтар қорғалған.",
        back_to_services: "Қызметтерге қайту",
        
        // Messages
        calculation_result: "Есептеу нәтижесі",
        estimated_cost: "Болжамды құн",
        delivery_time: "Жеткізу уақыты",
        days: "күн",
        message_sent: "Хабарлама жіберілді!",
        fill_all_fields: "Барлық өрістерді толтырыңыз"
    },
    ru: {
        // Navigation
        home: "Главная",
        services: "Услуги", 
        about: "О нас",
        contacts: "Контакты",
        
        // Hero section
        hero_title: "Надежный логистический партнер в Казахстане",
        hero_subtitle: "Мы решаем логистические задачи любой сложности",
        get_consultation: "Получить консультацию",
        our_services: "Наши услуги",
        
        // Stats
        years_experience: "лет опыта",
        satisfied_clients: "довольных клиентов", 
        countries: "стран",
        support: "поддержка",
        
        // Services
        maritime_title: "Морские контейнерные перевозки",
        maritime_short_desc: "Международные перевозки ведущими морскими линиями",
        railway_title: "Железнодорожные перевозки",
        railway_short_desc: "Эффективные транзитные перевозки через Казахстан", 
        automotive_title: "Автомобильные перевозки",
        automotive_short_desc: "Гибкие решения для перевозки любых грузов",
        warehousing_title: "Складские услуги",
        warehousing_short_desc: "Современные решения для хранения и обработки грузов",
        learn_more: "Узнать больше",
        
        // Service details
        maritime_full_desc: "NewLS Kazakhstan является крупнейшим оператором рынка контейнерных перевозок и специализируется на логистике импортных/экспортных грузов в контейнерах таких морских линий, как: OOCL, MSC, Hapag Lloyd, CMA CGM, Hyundai, FESCO. Мы обеспечиваем полный сервис для грузов любого объема.",
        railway_full_desc: "Мы предоставляем клиенту подвижной состав (фитинговые платформы, контейнеры), который находится в оперативном управлении нашей компании. Развивая собственную инфраструктуру, мы обеспечиваем качественное сервисное обслуживание, снижение себестоимости перевозки и точное соблюдение сроков доставки.",
        automotive_full_desc: "Для осуществления автомобильных перевозок используются тентованные и цельнометаллические автомобили с грузовым пространством от 82 до 120 куб.м, малотоннажные автомобили и специализированный подвижной состав для перевозки негабаритных и тяжеловесных грузов.",
        warehousing_full_desc: "Наши современные склады оборудованы автоматизированными системами и предлагают все виды услуг по хранению и подготовке грузов. Доступны услуги складской логистики, перераспределения, упаковки и маркировки.",
        
        // Calculator
        shipping_calculator: "Калькулятор доставки",
        from: "Откуда:",
        to: "Куда:",
        weight: "Вес (кг):",
        cargo_type: "Тип груза:",
        select_city: "Выберите город",
        general_cargo: "Генеральный груз",
        container: "Контейнер", 
        bulk_cargo: "Навалочный груз",
        calculate: "Рассчитать",
        
        // Form elements
        your_name: "Ваше имя",
        email: "Email",
        phone: "Телефон",
        message: "Сообщение",
        cargo_description: "Описание груза",
        send: "Отправить",
        send_request: "Отправить заявку",
        order_service: "Заказать услугу",
        
        // Pages
        about_subtitle: "NewLS Kazakhstan - ваш надежный партнер в логистике",
        contacts_subtitle: "Свяжитесь с нами",
        services_subtitle: "Полный спектр логистических решений",
        
        // About page
        our_story: "Наша история",
        company_description: "NewLS Kazakhstan - современная логистическая компания, основанная в 2019 году. Мы специализируемся на контейнерных, морских, железнодорожных и автомобильных перевозках.",
        company_mission: "Наша миссия - обеспечивать эффективные и надежные логистические решения для бизнеса любого масштаба.",
        company_slogan: "Уверены, что мы сможем найти эффективные решения для Вашего бизнеса!",
        founded: "Основана",
        projects: "Проектов",
        
        // Contacts
        almaty: "Алматы",
        astana: "Астана",
        almaty_address: "ул. Сатпаева, 30/1", 
        astana_address: "ул. Кокшетау, 15",
        send_message: "Отправить сообщение",
        
        // Advantages
        our_advantages: "Наши преимущества",
        great_opportunities: "Большие возможности",
        vast_experience: "Огромный опыт",
        main_advantage: "Основное преимущество",
        minimum_timeframes: "Минимальные сроки",
        
        container_periods: "Дополнительные сроки свободного использования контейнеров",
        own_fleet: "Собственный автопарк современных автомобилей",
        own_bills: "Возможность выпуска собственных коносаментов",
        professional_since: "Профессиональная деятельность с 2019 года",
        various_cargo: "Работа с различными грузами: металлопрокат, химикаты, стройматериалы",
        dangerous_cargo: "Специализация на опасных и крупногабаритных грузах",
        constant_containers: "Постоянное наличие контейнеров за счет собственных поступлений",
        own_infrastructure: "Собственная инфраструктура и современные технологии",
        info_exchange: "Отлаженная система обмена информацией",
        modern_technologies: "Современные информационные технологии",
        time_zones: "Оперативность работы в разных часовых поясах",
        
        // Service specific
        partners: "Партнеры",
        routes: "Основные маршруты",
        features: "Особенности услуги",
        vehicle_types: "Типы транспорта",
        warehouse_services: "Виды услуг",
        capacity_82_120: "Вместимость: 82-120 куб.м",
        tent_vehicles: "Тентованные автомобили",
        metal_vehicles: "Цельнометаллические",
        specialized_vehicles: "Спецтранспорт",
        light_vehicles: "Малотоннажные",
        for_oversized: "Для негабаритных грузов",
        for_urgent: "Для срочных грузов",
        storage: "Хранение грузов",
        sorting: "Сортировка",
        packaging: "Упаковка",
        labeling: "Маркировка",
        storage_desc: "Краткосрочное и долгосрочное хранение",
        sorting_desc: "Подготовка и консолидация грузов",
        packaging_desc: "Профессиональная упаковка грузов",
        labeling_desc: "Нанесение необходимой маркировки",
        
        // Service features
        partnership_oocl: "Партнерство с OOCL, MSC, Hapag Lloyd, CMA CGM",
        full_forwarding: "Полный спектр экспедиторских услуг",
        all_container_sizes: "Контейнеры всех стандартных размеров",
        customs_clearance: "Таможенное оформление и документооборот",
        own_rolling_stock: "Собственный подвижной состав",
        fitting_platforms: "Фитинговые платформы и контейнеры",
        main_routes: "Маршруты: Алматы, Астана, Шымкент, Атырау",
        precise_delivery: "Точное соблюдение сроков доставки",
        vehicles_82_120: "Автомобили с грузовым пространством 82-120 куб.м",
        tent_metal_bodies: "Тентованные и цельнометаллические кузова",
        specialized_oversized: "Специализированный транспорт для негабарита",
        light_urgent: "Малотоннажные автомобили для срочных грузов",
        automated_systems: "Автоматизированные складские системы",
        packaging_labeling: "Услуги по упаковке и маркировке",
        logistics_redistribution: "Складская логистика и перераспределение",
        temperature_storage: "Температурные режимы хранения",
        
        // Footer
        footer_description: "Надежный логистический партнер в Казахстане",
        quick_links: "Быстрые ссылки",
        all_rights_reserved: "Все права защищены.",
        back_to_services: "Назад к услугам",
        
        // Messages
        calculation_result: "Результат расчета",
        estimated_cost: "Ориентировочная стоимость",
        delivery_time: "Время доставки",
        days: "дней", 
        message_sent: "Сообщение отправлено!",
        fill_all_fields: "Заполните все поля"
    },
    en: {
        // Navigation
        home: "Home",
        services: "Services",
        about: "About Us", 
        contacts: "Contacts",
        
        // Hero section
        hero_title: "Reliable Logistics Partner in Kazakhstan",
        hero_subtitle: "We solve logistics challenges of any complexity",
        get_consultation: "Get Consultation",
        our_services: "Our Services",
        
        // Stats
        years_experience: "years of experience",
        satisfied_clients: "satisfied clients",
        countries: "countries",
        support: "support",
        
        // Services
        maritime_title: "Maritime Container Transport",
        maritime_short_desc: "International shipping via leading maritime lines",
        railway_title: "Railway Transport",
        railway_short_desc: "Efficient transit transport through Kazakhstan",
        automotive_title: "Road Transport", 
        automotive_short_desc: "Flexible solutions for any cargo transportation",
        warehousing_title: "Warehousing Services",
        warehousing_short_desc: "Modern solutions for cargo storage and handling",
        learn_more: "Learn More",
        
        // Service details
        maritime_full_desc: "NewLS Kazakhstan is a major operator in the container shipping market and specializes in logistics for import/export cargo in containers of maritime lines such as: OOCL, MSC, Hapag Lloyd, CMA CGM, Hyundai, FESCO. We provide complete service for cargo of any volume.",
        railway_full_desc: "We provide the client with rolling stock (fitting platforms, containers) that is under the operational management of our company. Developing our own infrastructure, we ensure high-quality service, reduced transportation costs and precise adherence to delivery schedules.",
        automotive_full_desc: "For road transportation, we use tented and all-metal vehicles with cargo space from 82 to 120 cubic meters, light-duty vehicles and specialized rolling stock for transporting oversized and heavy cargo.",
        warehousing_full_desc: "Our modern warehouses are equipped with automated systems and offer all types of cargo storage and preparation services. Warehouse logistics, redistribution, packaging and labeling services are available.",
        
        // Calculator
        shipping_calculator: "Shipping Calculator",
        from: "From:",
        to: "To:",
        weight: "Weight (kg):",
        cargo_type: "Cargo Type:",
        select_city: "Select City",
        general_cargo: "General Cargo",
        container: "Container",
        bulk_cargo: "Bulk Cargo",
        calculate: "Calculate",
        
        // Form elements
        your_name: "Your Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        cargo_description: "Cargo Description",
        send: "Send",
        send_request: "Send Request",
        order_service: "Order Service",
        
        // Pages
        about_subtitle: "NewLS Kazakhstan - your reliable logistics partner",
        contacts_subtitle: "Get in touch with us",
        services_subtitle: "Full range of logistics solutions",
        
        // About page
        our_story: "Our Story",
        company_description: "NewLS Kazakhstan is a modern logistics company established in 2019. We specialize in container, maritime, railway and road transportation.",
        company_mission: "Our mission is to provide efficient and reliable logistics solutions for businesses of any scale.",
        company_slogan: "We are confident that we can find effective solutions for your business!",
        founded: "Founded",
        projects: "Projects",
        
        // Contacts
        almaty: "Almaty",
        astana: "Astana",
        almaty_address: "Satpayev St., 30/1",
        astana_address: "Kokshetau St., 15",
        send_message: "Send Message",
        
        // Advantages
        our_advantages: "Our Advantages",
        great_opportunities: "Great Opportunities",
        vast_experience: "Vast Experience",
        main_advantage: "Main Advantage",
        minimum_timeframes: "Minimum Timeframes",
        
        container_periods: "Additional free container usage periods",
        own_fleet: "Own fleet of modern vehicles",
        own_bills: "Ability to issue own bills of lading",
        professional_since: "Professional activity since 2019",
        various_cargo: "Handling various cargo types: metals, chemicals, construction materials",
        dangerous_cargo: "Specialization in dangerous and oversized cargo",
        constant_containers: "Constant container availability through own supply",
        own_infrastructure: "Own infrastructure and modern technologies",
        info_exchange: "Streamlined information exchange system",
        modern_technologies: "Modern information technologies",
        time_zones: "Operational efficiency across time zones",
        
        // Service specific
        partners: "Partners",
        routes: "Main Routes",
        features: "Service Features",
        vehicle_types: "Vehicle Types",
        warehouse_services: "Service Types",
        capacity_82_120: "Capacity: 82-120 cubic meters",
        tent_vehicles: "Tented Vehicles",
        metal_vehicles: "All-Metal Vehicles",
        specialized_vehicles: "Specialized Transport",
        light_vehicles: "Light Vehicles",
        for_oversized: "For Oversized Cargo",
        for_urgent: "For Urgent Cargo",
        storage: "Cargo Storage",
        sorting: "Sorting",
        packaging: "Packaging",
        labeling: "Labeling",
        storage_desc: "Short-term and long-term storage",
        sorting_desc: "Preparation and consolidation of cargo",
        packaging_desc: "Professional cargo packaging",
        labeling_desc: "Application of necessary labeling",
        
        // Service features
        partnership_oocl: "Partnership with OOCL, MSC, Hapag Lloyd, CMA CGM",
        full_forwarding: "Full range of freight forwarding services",
        all_container_sizes: "Containers of all standard sizes",
        customs_clearance: "Customs clearance and documentation",
        own_rolling_stock: "Own rolling stock",
        fitting_platforms: "Fitting platforms and containers",
        main_routes: "Routes: Almaty, Astana, Shymkent, Atyrau",
        precise_delivery: "Precise delivery schedule adherence",
        vehicles_82_120: "Vehicles with cargo space 82-120 cubic meters",
        tent_metal_bodies: "Tarpaulin and all-metal bodies",
        specialized_oversized: "Specialized transport for oversized cargo",
        light_urgent: "Light vehicles for urgent cargo",
        automated_systems: "Automated warehouse systems",
        packaging_labeling: "Packaging and labeling services",
        logistics_redistribution: "Warehouse logistics and redistribution",
        temperature_storage: "Temperature-controlled storage",
        
        // Footer
        footer_description: "Reliable logistics partner in Kazakhstan",
        quick_links: "Quick Links",
        all_rights_reserved: "All rights reserved.",
        back_to_services: "Back to Services",
        
        // Messages
        calculation_result: "Calculation Result",
        estimated_cost: "Estimated Cost",
        delivery_time: "Delivery Time",
        days: "days",
        message_sent: "Message sent!",
        fill_all_fields: "Fill all fields"
    },
    zh: {
        // Navigation
        home: "首页",
        services: "服务",
        about: "关于我们",
        contacts: "联系",
        
        // Hero section
        hero_title: "哈萨克斯坦可靠的物流合作伙伴",
        hero_subtitle: "我们解决任何复杂度的物流挑战",
        get_consultation: "获取咨询",
        our_services: "我们的服务",
        
        // Stats
        years_experience: "年经验",
        satisfied_clients: "满意客户",
        countries: "个国家",
        support: "支持",
        
        // Services
        maritime_title: "海运集装箱运输",
        maritime_short_desc: "通过领先海运公司的国际运输",
        railway_title: "铁路运输", 
        railway_short_desc: "通过哈萨克斯坦的高效过境运输",
        automotive_title: "公路运输",
        automotive_short_desc: "任何货物运输的灵活解决方案",
        warehousing_title: "仓储服务",
        warehousing_short_desc: "货物存储和处理的现代解决方案",
        learn_more: "了解更多",
        
        // Service details
        maritime_full_desc: "NewLS Kazakhstan是集装箱运输市场的主要运营商，专门从事OOCL、MSC、赫伯罗特、达飞海运、现代、远东海运等海运公司进出口货物集装箱物流。我们为任何数量的货物提供完整的服务。",
        railway_full_desc: "我们为客户提供由我们公司运营管理的机车车辆（配装平台、集装箱）。通过发展自有基础设施，我们确保高质量的服务、降低运输成本并精确遵守交货时间表。",
        automotive_full_desc: "为了进行公路运输，我们使用货物空间从82到120立方米的篷布和全金属车辆、轻型车辆以及用于运输超大和重型货物的专用车辆。",
        warehousing_full_desc: "我们的现代化仓库配备了自动化系统，提供各种货物存储和准备服务。提供仓库物流、重新分配、包装和标签服务。",
        
        // Calculator
        shipping_calculator: "运费计算器",
        from: "从:",
        to: "到:",
        weight: "重量 (公斤):",
        cargo_type: "货物类型:",
        select_city: "选择城市",
        general_cargo: "普通货物",
        container: "集装箱",
        bulk_cargo: "散装货物",
        calculate: "计算",
        
        // Form elements
        your_name: "您的姓名",
        email: "邮箱",
        phone: "电话",
        message: "消息",
        cargo_description: "货物描述",
        send: "发送",
        send_request: "发送请求",
        order_service: "订购服务",
        
        // Pages
        about_subtitle: "NewLS Kazakhstan - 您可靠的物流合作伙伴",
        contacts_subtitle: "联系我们",
        services_subtitle: "全方位物流解决方案",
        
        // About page
        our_story: "我们的故事",
        company_description: "NewLS Kazakhstan是一家成立于2019年的现代物流公司。我们专门从事集装箱、海运、铁路和公路运输。",
        company_mission: "我们的使命是为任何规模的企业提供高效可靠的物流解决方案。",
        company_slogan: "我们相信能够为您的业务找到有效的解决方案！",
        founded: "成立",
        projects: "项目",
        
        // Contacts
        almaty: "阿拉木图",
        astana: "阿斯塔纳",
        almaty_address: "萨特帕耶夫街30/1号",
        astana_address: "科克舍套街15号",
        send_message: "发送消息",
        
        // Advantages
        our_advantages: "我们的优势",
        great_opportunities: "巨大机遇",
        vast_experience: "丰富经验",
        main_advantage: "主要优势",
        minimum_timeframes: "最短时间",
        
        container_periods: "额外的免费集装箱使用期",
        own_fleet: "自有现代车队",
        own_bills: "签发自有提单的能力",
        professional_since: "自2019年以来的专业活动",
        various_cargo: "处理各种货物：金属制品、化学品、建筑材料",
        dangerous_cargo: "专门处理危险和超大货物",
        constant_containers: "通过自有供应确保集装箱持续可用",
        own_infrastructure: "自有基础设施和现代技术",
        info_exchange: "完善的信息交换系统",
        modern_technologies: "现代信息技术",
        time_zones: "跨时区的运营效率",
        
        // Service specific
        partners: "合作伙伴",
        routes: "主要路线",
        features: "服务特色",
        vehicle_types: "车辆类型",
        warehouse_services: "服务类型",
        capacity_82_120: "容量：82-120立方米",
        tent_vehicles: "篷布车辆",
        metal_vehicles: "全金属车辆",
        specialized_vehicles: "专用运输",
        light_vehicles: "轻型车辆",
        for_oversized: "用于超大货物",
        for_urgent: "用于紧急货物",
        storage: "货物存储",
        sorting: "分拣",
        packaging: "包装",
        labeling: "标签",
        storage_desc: "短期和长期存储",
        sorting_desc: "货物准备和合并",
        packaging_desc: "专业货物包装",
        labeling_desc: "应用必要的标签",
        
        // Service features
        partnership_oocl: "与OOCL、MSC、赫伯罗特、达飞海运合作",
        full_forwarding: "全方位货运代理服务",
        all_container_sizes: "所有标准尺寸的集装箱",
        customs_clearance: "清关和文件处理",
        own_rolling_stock: "自有机车车辆",
        fitting_platforms: "配装平台和集装箱",
        main_routes: "路线：阿拉木图、阿斯塔纳、奇姆肯特、阿特劳",
        precise_delivery: "严格遵守交货时间表",
        vehicles_82_120: "货物空间82-120立方米的车辆",
        tent_metal_bodies: "篷布和全金属车身",
        specialized_oversized: "超大货物专用运输",
        light_urgent: "紧急货物轻型车辆",
        automated_systems: "自动化仓库系统",
        packaging_labeling: "包装和标签服务",
        logistics_redistribution: "仓库物流和重新分配",
        temperature_storage: "温控存储",
        
        // Footer
        footer_description: "哈萨克斯坦可靠的物流合作伙伴",
        quick_links: "快速链接",
        all_rights_reserved: "版权所有。",
        back_to_services: "返回服务",
        
        // Messages
        calculation_result: "计算结果",
        estimated_cost: "预估费用",
        delivery_time: "配送时间",
        days: "天",
        message_sent: "消息已发送！",
        fill_all_fields: "请填写所有字段"
    }
};

// Initialize the application
function init() {
    console.log('Initializing NewLS Kazakhstan app...');
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize language
    setLanguage(currentLanguage);
    
    // Initialize page
    showPage(currentPage);
    
    // Initialize scroll effects
    initScrollEffects();
    
    console.log('App initialized successfully');
}

// Set up all event listeners
function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Language selector
    const languageBtn = document.getElementById('languageBtn');
    
    if (languageBtn) {
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleLanguageDropdown();
        });
    }
    
    // Language options
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = e.target.getAttribute('data-lang');
            console.log('Language selected:', lang);
            setLanguage(lang);
            hideLanguageDropdown();
        });
    });
    
    // Navigation links using event delegation
    document.addEventListener('click', (e) => {
        // Check if clicked element or its parent has data-page attribute
        let element = e.target;
        let pageAttr = null;
        let actionAttr = null;
        
        // Traverse up to find data-page attribute
        while (element && element !== document) {
            pageAttr = element.getAttribute('data-page');
            actionAttr = element.getAttribute('data-action');
            if (pageAttr) break;
            element = element.parentElement;
        }
        
        if (pageAttr) {
            e.preventDefault();
            console.log('Navigation clicked:', pageAttr);
            
            if (actionAttr === 'scroll-to-services') {
                showPage('home');
                setTimeout(() => {
                    scrollToServices();
                }, 100);
            } else {
                showPage(pageAttr);
            }
        }
    });
    
    // Service card specific handlers
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't trigger if clicking on button
            if (!e.target.closest('.service-card__btn')) {
                const service = card.getAttribute('data-service');
                console.log('Service card clicked:', service);
                if (service) {
                    showPage(service);
                }
            }
        });
    });
    
    // Calculator
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateShipping);
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Order forms
    document.querySelectorAll('.order-form').forEach(form => {
        form.addEventListener('submit', handleOrderForm);
    });
    
    // Get consultation buttons - using event delegation
    document.addEventListener('click', (e) => {
        const element = e.target;
        const key = element.getAttribute('data-key');
        
        if (key === 'get_consultation') {
            e.preventDefault();
            showConsultationModal();
        }
    });
    
    // Hero buttons with specific handling
    document.querySelectorAll('.hero__btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const action = btn.getAttribute('data-action');
            const key = btn.getAttribute('data-key');
            
            if (action === 'scroll-to-services') {
                scrollToServices();
            } else if (key === 'get_consultation') {
                showConsultationModal();
            } else if (key === 'our_services') {
                scrollToServices();
            }
        });
    });
    
    // Modal
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modalClose');
    
    if (modalClose) {
        modalClose.addEventListener('click', hideModal);
    }
    
    if (modal) {
        const backdrop = modal.querySelector('.modal__backdrop');
        if (backdrop) {
            backdrop.addEventListener('click', hideModal);
        }
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-selector')) {
            hideLanguageDropdown();
        }
    });
    
    // Scroll effects
    window.addEventListener('scroll', handleScroll);
    
    // Menu toggle for mobile
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    console.log('Event listeners setup complete');
}

// Language functions
function setLanguage(lang) {
    console.log('Setting language to:', lang);
    currentLanguage = lang;
    updateLanguageDisplay();
    translatePage();
}

function updateLanguageDisplay() {
    const flags = {
        kk: '🇰🇿',
        ru: '🇷🇺', 
        en: '🇬🇧',
        zh: '🇨🇳'
    };
    
    const codes = {
        kk: 'KZ',
        ru: 'RU',
        en: 'EN', 
        zh: '中文'
    };
    
    const languageBtn = document.getElementById('languageBtn');
    if (languageBtn) {
        const flag = languageBtn.querySelector('.flag');
        const langText = languageBtn.querySelector('.lang-text');
        if (flag) flag.textContent = flags[currentLanguage];
        if (langText) langText.textContent = codes[currentLanguage];
    }
}

function translatePage() {
    console.log('Translating page to:', currentLanguage);
    
    const elementsToTranslate = document.querySelectorAll('[data-key]');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = translations[currentLanguage][key];
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else if (element.tagName === 'SELECT') {
                // Handle select elements specially
                if (element.options && element.options.length > 0) {
                    element.options[0].textContent = translation;
                }
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Translate placeholders with specific attribute
    document.querySelectorAll('[data-key-placeholder]').forEach(element => {
        const key = element.getAttribute('data-key-placeholder');
        const translation = translations[currentLanguage][key];
        
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update document title
    const titles = {
        kk: 'NewLS Kazakhstan - Логистикалық шешімдер',
        ru: 'NewLS Kazakhstan - Логистические решения',
        en: 'NewLS Kazakhstan - Logistics Solutions',
        zh: 'NewLS Kazakhstan - 物流解决方案'
    };
    document.title = titles[currentLanguage];
    
    // Update breadcrumbs if we're on a service page
    if (['maritime', 'railway', 'automotive', 'warehousing'].includes(currentPage)) {
        updateBreadcrumbs(currentPage);
    }
}

function toggleLanguageDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
        console.log('Language dropdown toggled');
    }
}

function hideLanguageDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
}

// Navigation functions
function showPage(pageName) {
    console.log('Showing page:', pageName);
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show target page
    const targetPage = document.getElementById(`${pageName}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        console.log('Page activated:', pageName);
    } else {
        console.error('Page not found:', `${pageName}-page`);
        return;
    }
    
    // Update navigation
    document.querySelectorAll('.nav__link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate the correct nav link
    document.querySelectorAll('.nav__link').forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === pageName || 
            (pageName === 'home' && linkPage === 'home') ||
            (['maritime', 'railway', 'automotive', 'warehousing'].includes(pageName) && linkPage === 'services')) {
            link.classList.add('active');
        }
    });
    
    currentPage = pageName;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Update page-specific elements
    updatePageSpecificElements(pageName);
}

function updatePageSpecificElements(pageName) {
    // Update breadcrumbs for service pages
    if (['maritime', 'railway', 'automotive', 'warehousing'].includes(pageName)) {
        updateBreadcrumbs(pageName);
    }
}

function updateBreadcrumbs(serviceName) {
    const breadcrumbs = document.querySelectorAll('.breadcrumb');
    breadcrumbs.forEach(breadcrumb => {
        const serviceSpan = breadcrumb.querySelector('span:last-child');
        if (serviceSpan) {
            const key = `${serviceName}_title`;
            const translation = translations[currentLanguage][key];
            if (translation) {
                serviceSpan.textContent = translation;
            }
        }
    });
}

function scrollToServices() {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
        console.log('Scrolling to services section');
        servicesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        console.error('Services section not found');
    }
}

// Modal functions
function showModal(content) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    
    if (modal && modalBody) {
        modalBody.innerHTML = content;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        console.log('Modal shown');
    }
}

function hideModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        console.log('Modal hidden');
    }
}

function showConsultationModal() {
    console.log('Showing consultation modal');
    const content = `
        <h3 style="color: var(--light-text-primary); margin-bottom: 20px;">${translations[currentLanguage].get_consultation}</h3>
        <form id="consultationForm" style="margin-top: 20px;">
            <div class="form-group">
                <input type="text" class="form-control" placeholder="${translations[currentLanguage].your_name}" required>
            </div>
            <div class="form-group">
                <input type="email" class="form-control" placeholder="${translations[currentLanguage].email}" required>
            </div>
            <div class="form-group">
                <input type="tel" class="form-control" placeholder="${translations[currentLanguage].phone}" required>
            </div>
            <div class="form-group">
                <textarea class="form-control" rows="4" placeholder="${translations[currentLanguage].message}" required></textarea>
            </div>
            <button type="submit" class="btn btn--primary btn--full-width">${translations[currentLanguage].send}</button>
        </form>
    `;
    
    showModal(content);
    
    // Add form handler after modal is shown
    setTimeout(() => {
        const form = document.getElementById('consultationForm');
        if (form) {
            form.addEventListener('submit', handleConsultationForm);
        }
    }, 100);
}

// Calculator functions
function calculateShipping() {
    console.log('Calculate shipping clicked');
    
    const weightInput = document.querySelector('.calculator__form input[type="number"]');
    const result = document.getElementById('calculatorResult');
    
    if (!weightInput || !result) {
        console.error('Calculator elements not found');
        return;
    }
    
    const weight = parseFloat(weightInput.value);
    
    if (!weight || weight <= 0) {
        alert(translations[currentLanguage].fill_all_fields);
        return;
    }
    
    // Mock calculation based on weight and random factors
    const baseRate = 2.5; // USD per kg
    const distance = Math.random() * 2000 + 1000; // km
    const cost = Math.round(weight * baseRate * (distance / 1000));
    const days = Math.ceil(distance / 500); // days
    
    const resultHTML = `
        <div class="calculation-result">
            <h4 style="margin-bottom: 20px;">${translations[currentLanguage].calculation_result}</h4>
            <div class="result-item" style="display: flex; justify-content: space-between; margin: 10px 0; padding: 15px; background: rgba(255,255,255,0.15); border-radius: 8px; border: 1px solid rgba(255,255,255,0.25);">
                <span>${translations[currentLanguage].estimated_cost}:</span>
                <strong>$${cost.toLocaleString()}</strong>
            </div>
            <div class="result-item" style="display: flex; justify-content: space-between; margin: 10px 0; padding: 15px; background: rgba(255,255,255,0.15); border-radius: 8px; border: 1px solid rgba(255,255,255,0.25);">
                <span>${translations[currentLanguage].delivery_time}:</span>
                <strong>${days} ${translations[currentLanguage].days}</strong>
            </div>
        </div>
    `;
    
    result.innerHTML = resultHTML;
    result.classList.add('show');
    console.log('Calculation result shown');
}

// Form handlers
function handleContactForm(e) {
    e.preventDefault();
    console.log('Contact form submitted');
    
    const inputs = e.target.querySelectorAll('input, textarea');
    let hasEmpty = false;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            hasEmpty = true;
        }
    });
    
    if (hasEmpty) {
        alert(translations[currentLanguage].fill_all_fields);
        return;
    }
    
    // Mock form submission
    alert(translations[currentLanguage].message_sent);
    e.target.reset();
}

function handleOrderForm(e) {
    e.preventDefault();
    console.log('Order form submitted');
    
    const inputs = e.target.querySelectorAll('input, textarea');
    let hasEmpty = false;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            hasEmpty = true;
        }
    });
    
    if (hasEmpty) {
        alert(translations[currentLanguage].fill_all_fields);
        return;
    }
    
    // Mock form submission
    alert(translations[currentLanguage].message_sent);
    e.target.reset();
}

function handleConsultationForm(e) {
    e.preventDefault();
    console.log('Consultation form submitted');
    
    const inputs = e.target.querySelectorAll('input, textarea');
    let hasEmpty = false;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            hasEmpty = true;
        }
    });
    
    if (hasEmpty) {
        alert(translations[currentLanguage].fill_all_fields);
        return;
    }
    
    // Mock form submission
    alert(translations[currentLanguage].message_sent);
    hideModal();
}

// Scroll effects
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .advantage-card, .contact-card, .about-stat, .partner-card, .route-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

function handleScroll() {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.getElementById('nav');
    const menuToggle = document.getElementById('menuToggle');
    
    if (nav && menuToggle) {
        nav.classList.toggle('mobile-active');
        menuToggle.classList.toggle('active');
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - Initializing app...');
    init();
});

// Export functions for potential external use
window.NewLSApp = {
    setLanguage,
    showPage,
    showModal,
    hideModal,
    scrollToServices
};