const jobs = [
  { code: "6241", focus: "Bibliotecas y administración electrónica", domain: "Bibliotecas", tags: ["Drupal", "WordPress", "Repositorios", "MARC21", "Preservación digital"], functions: "Gestión de bibliotecas, catálogo, depósito, revistas electrónicas, preservación digital, gestor documental, tramitación e integración entre administraciones." },
  { code: "6253", focus: "Recursos humanos y tramitación", domain: "RRHH", tags: ["Perseu", "Evalos", "EVOpreven", "JSF", "Spring"], functions: "Aplicaciones corporativas de recursos humanos, control de presencia, prevención de riesgos laborales, vigilancia de la salud e integración de datos de RRHH." },
  { code: "12991", focus: "Gestión académica y docente", domain: "Académica", tags: ["Oracle ADF", "PrimeNG", "Angular", "JasperReports"], functions: "Aplicaciones de gestión académica y docente basadas en protocolos web, orientación a objetos y persistencia en bases de datos relacionales." },
  { code: "29838", focus: "Gestión académica y administración electrónica", domain: "Académica", tags: ["MÉTRICA v3", "UML", "Natural", "Symfony", "X-Road"], functions: "Plataformas académicas corporativas, integración con aplicaciones UB, servicios web y adaptación normativa en gestión académica." },
  { code: "36731", focus: "Gestión académica y servicios web", domain: "Académica", tags: ["MÉTRICA v3", "UML", "Natural", "Symfony", "SOAP"], functions: "Mantenimiento y desarrollo de plataformas académicas, administración electrónica y servicios web REST, SOAP, XML y JSON." },
  { code: "00048501", focus: "Administración electrónica y GIGA", domain: "Admin. electrónica", tags: ["GIGA", "AOC", "RedIRIS", "X-Road", "Symfony"], functions: "Aplicaciones que integran administración electrónica y GIGA, actualización de productos AOC/RedIRIS, firma y evidencias electrónicas." },
  { code: "00051530", focus: "Investigación", domain: "Recerca", tags: ["SIRA", "GREC", "Elasticsearch", "Perl", "JPA"], functions: "Sistemas corporativos de gestión de la investigación, aplicaciones SIRA y GREC, pruebas técnicas y mantenimiento evolutivo." }
];

const topics = [
  { id: "oop", title: "Programación orientada a objetos", group: "Tronco común", priority: 1, jobs: ["6241","6253","12991","00048501","00051530"], text: "Clases, objetos, encapsulación, herencia, polimorfismo, interfaces, excepciones y patrones básicos.", sources: ["Java", "JSF", "Spring"] },
  { id: "java", title: "Java SE 7+ y Java EE", group: "Tronco común", priority: 1, jobs: ["6241","6253","12991","29838","36731","00048501","00051530"], text: "Sintaxis, colecciones, JDBC, servlets, arquitectura Java EE, despliegue y compatibilidad con versiones antiguas.", sources: ["Java", "Java EE"] },
  { id: "spring", title: "Spring Framework, Spring Boot y JPA", group: "Tronco común", priority: 1, jobs: ["6253","12991","00051530"], text: "Inyección de dependencias, configuración, controladores, servicios, repositorios, entidades, transacciones y pruebas.", sources: ["Spring", "JPA", "JUnit"] },
  { id: "front", title: "HTML5, CSS, JavaScript y TypeScript", group: "Tronco común", priority: 1, jobs: ["6241","6253","12991","29838","36731","00048501","00051530"], text: "Estructura semántica, estilos, DOM, peticiones HTTP, módulos, tipado básico y depuración en navegador.", sources: ["HTML5", "CSS", "JS"] },
  { id: "angular", title: "Angular, PrimeFaces y PrimeNG", group: "Tronco común", priority: 2, jobs: ["6241","12991"], text: "Componentes, servicios, routing, formularios, integración REST y bibliotecas de componentes usadas en entornos Java.", sources: ["Angular", "PrimeNG"] },
  { id: "php", title: "PHP 7+, Symfony, Twig y Perl", group: "Tronco común", priority: 2, jobs: ["6241","29838","36731","00048501","00051530"], text: "PHP moderno, routing/controladores Symfony, plantillas Twig, scripts Perl y mantenimiento de aplicaciones existentes.", sources: ["PHP", "Symfony", "Perl"] },
  { id: "webservices", title: "Servicios web REST, SOAP, JSON, XML y X-Road", group: "Tronco común", priority: 1, jobs: ["6241","6253","12991","29838","36731","00048501","00051530"], text: "Diseño de APIs, contratos, serialización, códigos HTTP, WSDL/SOAP, XML, JSON, clientes y servidores.", sources: ["REST", "SOAP", "X-Road"] },
  { id: "db", title: "Modelo relacional, SQL, Oracle y PL/SQL", group: "Tronco común", priority: 1, jobs: ["6241","6253","12991","29838","36731","00048501","00051530"], text: "Modelo relacional, normalización, consultas SQL, joins, índices, transacciones, Oracle RDBMS y procedimientos PL/SQL.", sources: ["Oracle", "SQL"] },
  { id: "legacydb", title: "Adabas, Natural, MySQL, PostgreSQL y Elasticsearch", group: "Específicos", priority: 2, jobs: ["6241","29838","36731","00048501","00051530"], text: "Bases relacionales y no relacionales citadas en plazas concretas, con especial atención a Adabas/Natural en académica y e-administración.", sources: ["Adabas", "Natural", "Elasticsearch"] },
  { id: "tools", title: "Eclipse, Git, SQL Developer, Maven y Copilot", group: "Herramientas", priority: 1, jobs: ["6241","6253","12991","29838","36731","00048501","00051530"], text: "Flujo Git, ramas, commits, IDEs, Maven, SQL Developer y uso razonado de asistentes de código donde aparece en temario.", sources: ["Git", "Maven"] },
  { id: "testing", title: "JUnit, Selenium, JMeter, SoapUI y Postman", group: "Herramientas", priority: 1, jobs: ["6241","6253","12991","29838","36731","00048501","00051530"], text: "Pruebas unitarias, funcionales, APIs, carga, colecciones de Postman y verificación de funcionalidades desarrolladas.", sources: ["JUnit", "Selenium", "JMeter"] },
  { id: "containers", title: "Docker, Kubernetes y Jenkins", group: "Herramientas", priority: 2, jobs: ["6241","00048501","00051530"], text: "Contenedores, imágenes, despliegue, conceptos de orquestación y pipelines CI/CD.", sources: ["Docker", "Kubernetes", "Jenkins"] },
  { id: "servers", title: "Apache HTTP, WebLogic y Tomcat", group: "Infraestructura app", priority: 2, jobs: ["6241","29838","36731","00048501","00051530"], text: "Servidor web, contenedores servlet, despliegue de aplicaciones Java, logs, conectores y resolución básica de incidencias.", sources: ["Apache", "Tomcat", "WebLogic"] },
  { id: "security", title: "SSO, CAS, SAML, OAuth 2.0 y OpenID Connect", group: "Seguridad", priority: 1, jobs: ["6241","6253","12991","00048501","00051530"], text: "Autenticación, autorización, roles, atributos, flujos OAuth, federación de identidad y single sign-on.", sources: ["CAS", "SAML", "OAuth"] },
  { id: "eadm", title: "Administración electrónica UB y AOC", group: "Gestión UB", priority: 1, jobs: ["6241","6253","12991","29838","36731","00048501","00051530"], text: "Registro telemático, firma digital, tramitador, notificaciones, porta-firmas, sede electrónica, AOC y soporte a integraciones.", sources: ["AOC", "Firma digital"] },
  { id: "academic", title: "Gestión académica universitaria", group: "Específicos", priority: 2, jobs: ["12991","29838","36731","00048501"], text: "Grados, másteres, doctorado, formación permanente, acceso, matrícula, expediente, actas, títulos y movilidad internacional.", sources: ["GIGA", "Matrícula"] },
  { id: "libraries", title: "Gestión de bibliotecas y preservación digital", group: "Específicos", priority: 3, jobs: ["6241"], text: "Sistemas de bibliotecas, Drupal, WordPress, repositorios, revistas electrónicas, MARC21, Dublin Core, METS, MODS, PREMIS y preservación.", sources: ["Bibliotecas", "Metadatos"] },
  { id: "hr", title: "RRHH, Perseu, Evalos y EVOpreven", group: "Específicos", priority: 3, jobs: ["6253"], text: "Aplicaciones de recursos humanos, control de presencia, prevención de riesgos y vigilancia de la salud.", sources: ["RRHH"] },
  { id: "research", title: "Recerca: SIRA, GREC y Elasticsearch", group: "Específicos", priority: 3, jobs: ["00051530"], text: "Aplicaciones de investigación, SIRA con Java/Spring/JPA/JSF, GREC con Perl/HTML/CSS/JavaScript y búsquedas con Elasticsearch.", sources: ["SIRA", "GREC"] },
  { id: "methods", title: "MÉTRICA v3, UML y patrones de arquitectura", group: "Metodología", priority: 2, jobs: ["29838","36731"], text: "Análisis de sistemas, modelado UML, casos de uso, diagramas, patrones de arquitectura y documentación técnica.", sources: ["UML", "MÉTRICA"] },
  { id: "office", title: "Microsoft Office, SharePoint, Teams y Planner", group: "Soporte", priority: 3, jobs: ["6241","29838","36731"], text: "Ofimática y colaboración como soporte documental y de coordinación del trabajo técnico.", sources: ["Office", "SharePoint"] },
  { id: "equality", title: "Igualdad y Ley Orgánica 2/2023", group: "Normativa", priority: 1, jobs: ["6241","6253","12991","29838","36731","00048501","00051530"], text: "Plan de igualdad UB: marco normativo, ámbitos de aplicación y acciones. LOSU: artículos 43, 44 y 46.", sources: ["Plan igualdad", "LOSU"] }
];

const cards = [
  ["¿Qué debes dominar primero?", "Java, SQL, servicios web, seguridad SSO y administración electrónica: aparecen de forma transversal o casi transversal."],
  ["¿Qué diferencia 6241?", "Bibliotecas: Drupal, WordPress, repositorios, revistas electrónicas, metadatos bibliográficos y preservación digital."],
  ["¿Qué diferencia 6253?", "Recursos humanos: Perseu, Evalos, EVOpreven, JSF, PrimeFaces, Spring, JPA, Log4j, JUnit y Thymeleaf."],
  ["¿Qué diferencia 12991?", "Gestión académica/docente con Oracle ADF Faces, Angular, PrimeNG, JasperReports y stack Java empresarial."],
  ["¿Qué tienen en común 29838 y 36731?", "Gestión académica, MÉTRICA v3, UML, patrones, PHP/Symfony/Twig, Perl, Natural, Adabas y servicios web."],
  ["¿Qué diferencia 00048501?", "Administración electrónica, GIGA, AOC, RedIRIS, firma y evidencias electrónicas, X-Road y Symfony."],
  ["¿Qué diferencia 00051530?", "Investigación: SIRA, GREC, Java/Spring/JPA/JSF, Perl y Elasticsearch."],
  ["¿Cómo entrenar el caso práctico?", "Implementa una pequeña API REST con login simulado, persistencia SQL, tests, Dockerfile y una incidencia documentada."],
  ["¿Qué normativa no debes dejar al final?", "Plan de igualdad UB y artículos 43, 44 y 46 de la Ley Orgánica 2/2023. Es breve y rentable."],
  ["¿Qué bloque puede unir muchas plazas?", "Administración electrónica: registro, firma, tramitador, notificaciones, sede electrónica, AOC e integraciones."],
];

let selectedJob = "all";
let query = "";
let previousView = "roadmap";

const done = new Set(JSON.parse(localStorage.getItem("aticDone") || "[]"));

const byId = (id) => document.getElementById(id);

function saveDone() {
  localStorage.setItem("aticDone", JSON.stringify([...done]));
}

function topicVisible(topic) {
  const inJob = selectedJob === "all" || topic.jobs.includes(selectedJob);
  const q = query.trim().toLowerCase();
  const haystack = [topic.title, topic.group, topic.text, ...topic.sources, ...topic.jobs].join(" ").toLowerCase();
  return inJob && (!q || haystack.includes(q));
}

function renderJobsFilter() {
  const root = byId("jobFilters");
  root.innerHTML = "";
  [{ code: "all", focus: "Todas" }, ...jobs].forEach((job) => {
    const btn = document.createElement("button");
    btn.className = "job-pill" + (selectedJob === job.code ? " active" : "");
    btn.textContent = job.code === "all" ? "Todas las plazas" : `${job.code} - ${job.domain}`;
    btn.addEventListener("click", () => {
      selectedJob = job.code;
      renderAll();
    });
    root.append(btn);
  });
}

function renderRoadmap() {
  const root = byId("roadmapView");
  root.innerHTML = "";
  const phases = [
    ["Prioridad alta", topics.filter(t => t.priority === 1)],
    ["Prioridad media", topics.filter(t => t.priority === 2)],
    ["Específico y cierre", topics.filter(t => t.priority === 3)]
  ];

  phases.forEach(([title, items]) => {
    const filtered = items.filter(topicVisible);
    if (!filtered.length) return;
    const phase = document.createElement("section");
    phase.className = "phase";
    phase.innerHTML = `<div class="phase-head"><h3>${title}</h3><small>${filtered.length} temas</small></div><div class="grid"></div>`;
    const grid = phase.querySelector(".grid");
    filtered.forEach((topic) => grid.append(renderTopic(topic)));
    root.append(phase);
  });

  if (!root.children.length) root.innerHTML = `<p class="empty">No hay temas para ese filtro.</p>`;
}

function renderTopic(topic) {
  const node = byId("topicTemplate").content.firstElementChild.cloneNode(true);
  const input = node.querySelector("input");
  const title = node.querySelector(".checkline span");
  const badge = node.querySelector(".badge");
  const text = node.querySelector("p");
  const chips = node.querySelector(".chips");
  const openButton = node.querySelector(".open-topic");

  input.checked = done.has(topic.id);
  input.addEventListener("change", () => {
    input.checked ? done.add(topic.id) : done.delete(topic.id);
    saveDone();
    updateProgress();
  });
  title.textContent = topic.title;
  badge.textContent = `${topic.jobs.length}/7`;
  text.textContent = topic.text;
  [...topic.jobs, ...topic.sources.slice(0, 3)].forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = item;
    chips.append(chip);
  });
  openButton.addEventListener("click", () => openTopic(topic.id));
  return node;
}

function renderMatrix() {
  const root = byId("matrixView");
  const groups = [...new Set(topics.map(t => t.group))];
  root.innerHTML = `<div class="matrix-grid"></div>`;
  const grid = root.firstElementChild;
  groups.forEach((group) => {
    const items = topics.filter(t => t.group === group && topicVisible(t));
    if (!items.length) return;
    const card = document.createElement("article");
    card.className = "matrix-card";
    card.innerHTML = `<h3>${group}</h3><ul>${items.map(t => `<li><button class="topic-link" type="button" data-topic="${t.id}">${t.title}</button> - ${t.jobs.join(", ")}</li>`).join("")}</ul>`;
    card.querySelectorAll(".topic-link").forEach((button) => {
      button.addEventListener("click", () => openTopic(button.dataset.topic));
    });
    grid.append(card);
  });
  if (!grid.children.length) root.innerHTML = `<p class="empty">No hay resultados para la matriz.</p>`;
}

function getDetailGuide(topic) {
  const guide = {
    focus: [
      `Este tema conecta con las funciones de desarrollo, mantenimiento, verificacion, seguridad y documentacion de aplicaciones corporativas de la UB.`,
      `Para prepararlo bien conviene saber definirlo, reconocerlo en una arquitectura real y aplicarlo en un caso practico, no solo memorizar una lista de herramientas.`
    ],
    study: [
      `Definicion clara y vocabulario tecnico principal de ${topic.title}.`,
      `Relacion con desarrollo web, bases de datos, pruebas, seguridad, integracion o administracion electronica segun corresponda.`,
      `Ventajas, limites, errores habituales y criterios para elegir una solucion.`,
      `Un ejemplo sencillo que puedas escribir o explicar en una pregunta abierta.`,
      `Como se documenta, prueba y mantiene en una aplicacion corporativa.`
    ],
    practice: [
      `Haz un resumen de una pagina con conceptos, flujo de trabajo y ejemplo.`,
      `Prepara una respuesta de 8-10 lineas para pregunta abierta.`,
      `Disena un mini caso practico: entrada, proceso, datos, seguridad, pruebas y despliegue.`,
      `Relaciona el tema con al menos dos tecnologias o herramientas del temario.`
    ],
    questions: [
      `Define ${topic.title} y explica para que sirve en una aplicacion corporativa.`,
      `Que problema resuelve y que riesgos aparecen si se aplica mal?`,
      `Como lo probarias o verificarias en un entorno real?`
    ],
    pitfalls: [
      `Quedarse en una definicion de memoria sin ejemplo.`,
      `No distinguir entre concepto, tecnologia y herramienta concreta.`,
      `Olvidar seguridad, pruebas y documentacion cuando el tema se plantea como caso practico.`
    ]
  };

  const overrides = {
    oop: {
      focus: [
        "La programacion orientada a objetos es la base mental de Java, JSF, Spring y JPA. Puede aparecer como teoria, pero tambien como diseno de clases en un caso practico.",
        "El objetivo es modelar una necesidad funcional como clases, atributos, metodos, relaciones e interfaces, sin crear jerarquias innecesarias."
      ],
      study: ["Clase, objeto, atributo, metodo, constructor y visibilidad.", "Encapsulacion, herencia, polimorfismo, abstraccion e interfaces.", "Composicion frente a herencia y cuando conviene cada una.", "Excepciones, cohesion, acoplamiento y responsabilidad de clases.", "Patrones basicos: MVC, DAO, service, repository y DTO."],
      practice: ["Modela una aplicacion de expedientes con Alumno, Matricula, Asignatura y Acta.", "Explica como separarias controlador, servicio y repositorio.", "Escribe un ejemplo de interfaz y dos implementaciones."]
    },
    java: {
      focus: [
        "Java es el eje de las plazas de aplicaciones y aparece en todas las fichas. Debes dominar tanto Java SE como el entorno empresarial historico.",
        "Muchas aplicaciones publicas tienen ciclos de vida largos, asi que conviene entender versiones antiguas, despliegues tradicionales y frameworks modernos."
      ],
      study: ["Tipos, colecciones, genericos, excepciones, fechas y entrada/salida.", "JDBC, transacciones y acceso a base de datos.", "Servlets, filtros, sesiones, empaquetado WAR/EAR y despliegue.", "Diferencias entre Java SE, Java EE/Jakarta EE y Spring.", "Compatibilidad con Java 7 o superior y consecuencias en librerias."],
      practice: ["Describe un endpoint que consulta Oracle y devuelve JSON.", "Explica como gestionarias una excepcion de base de datos.", "Resume el ciclo de despliegue en Tomcat o WebLogic."]
    },
    spring: {
      focus: [
        "Spring y JPA aparecen en plazas orientadas a aplicaciones Java modernas, especialmente RRHH, gestion academica e investigacion.",
        "La clave es entender capas: controlador, servicio, repositorio, entidad y transaccion."
      ],
      study: ["Inversion de control e inyeccion de dependencias.", "Spring MVC, Spring Boot, configuracion y perfiles.", "Entidades JPA, relaciones, consultas y repositorios.", "Transacciones, validacion, logs y pruebas.", "Diferencia entre JPA, Hibernate y SQL directo."],
      practice: ["Disena un CRUD de expedientes con entidad, repositorio, servicio y controlador.", "Explica que anotaciones usarias y por que.", "Propón pruebas unitarias y de integracion."]
    },
    front: {
      focus: [
        "HTML, CSS, JavaScript y TypeScript son la base de interfaz web y mantenimiento de pantallas existentes.",
        "Debes poder leer una pantalla, detectar fallos de usabilidad y conectar frontend con servicios REST."
      ],
      study: ["HTML semantico, formularios, tablas y accesibilidad.", "CSS: cascada, selectores, modelo de caja, responsive y organizacion.", "JavaScript: DOM, eventos, fetch, promesas y modulos.", "TypeScript: tipos, interfaces y ventajas en Angular.", "Depuracion con consola y herramientas del navegador."],
      practice: ["Crea un formulario de busqueda que consume una API REST.", "Explica validaciones en cliente y servidor.", "Detecta un problema responsive y propón solucion CSS."]
    },
    webservices: {
      focus: [
        "REST, SOAP, JSON y XML aparecen en todas las plazas de aplicaciones. En un caso practico suelen pedir integracion, consumo o mantenimiento de servicios.",
        "Lo importante es distinguir estilos de integracion, contratos, formatos, errores y seguridad."
      ],
      study: ["REST: recursos, metodos HTTP, codigos de estado e idempotencia.", "SOAP: contrato WSDL, envelope, operaciones y tipado XML.", "JSON y XML: estructura, validacion, serializacion y errores comunes.", "Clientes y servidores, autenticacion, trazabilidad y logs.", "X-Road cuando la plaza menciona interoperabilidad de administracion electronica."],
      practice: ["Disena una API para consultar expedientes con control de permisos.", "Compara REST y SOAP en un sistema heredado.", "Define pruebas con Postman y SoapUI."]
    },
    db: {
      focus: [
        "SQL, Oracle y el modelo relacional son de maxima prioridad porque soportan casi todas las aplicaciones corporativas.",
        "La prueba practica puede incluir consulta, modelo de datos, integridad, transacciones o rendimiento."
      ],
      study: ["Entidades, relaciones, claves primarias, claves foraneas y normalizacion.", "SELECT, JOIN, GROUP BY, subconsultas, vistas e indices.", "Transacciones, bloqueos, integridad y concurrencia.", "Oracle RDBMS, secuencias, procedimientos y PL/SQL.", "Errores habituales: duplicados, N+1, consultas sin filtro e indices mal usados."],
      practice: ["Modela alumnos, matriculas, asignaturas y actas.", "Escribe consultas para totales, historicos y busquedas.", "Explica como investigarias una consulta lenta."]
    },
    php: {
      focus: [
        "PHP, Symfony, Twig y Perl aparecen en plazas con aplicaciones existentes y sistemas academicos o de administracion electronica.",
        "El enfoque de estudio debe ser mantenimiento: leer codigo, localizar incidencias y hacer cambios controlados."
      ],
      study: ["PHP 7 o superior: sintaxis, arrays, clases, errores y dependencias.", "Symfony: routing, controladores, servicios, formularios y configuracion.", "Twig: plantillas, variables, filtros y herencia.", "Perl: scripts, expresiones regulares y mantenimiento de codigo existente.", "Integracion con bases de datos y servicios web."],
      practice: ["Describe como anadirias un campo a una pantalla Symfony.", "Explica como depurarias un error en una plantilla Twig.", "Propón pruebas para un script Perl que transforma datos."]
    },
    security: {
      focus: [
        "La seguridad aparece como requisito transversal: acceso, autenticacion, SSO y protocolos federados.",
        "No es solo login: tambien autorizacion, roles, atributos, sesiones, trazabilidad y proteccion de datos."
      ],
      study: ["Autenticacion frente a autorizacion.", "SSO, CAS, SAML, OAuth 2.0 y OpenID Connect.", "Roles, permisos, atributos y minimo privilegio.", "Tokens, sesiones, caducidad y renovacion.", "Riesgos: XSS, CSRF, exposicion de datos, permisos excesivos y logs sensibles."],
      practice: ["Dibuja un flujo SSO entre aplicacion, proveedor de identidad y usuario.", "Explica cuando usarias SAML y cuando OpenID Connect.", "Propón controles para una API con datos academicos."]
    },
    eadm: {
      focus: [
        "Administracion electronica es el bloque que mas une las plazas: registro, firma, tramitacion, notificaciones, sede y AOC.",
        "Conviene estudiarlo como un circuito de servicios integrados, no como una lista aislada de nombres."
      ],
      study: ["Registro telematico, firma digital, portafirmas y evidencias.", "Tramitador electronico, notificaciones y gestion documental.", "Sede electronica y relacion ciudadano-administracion.", "AOC: servicios, soporte e integraciones.", "Trazabilidad, seguridad, interoperabilidad y validez juridica."],
      practice: ["Describe el circuito de una solicitud electronica de principio a fin.", "Identifica que servicios se invocan en cada paso.", "Explica como actuarias ante un fallo de firma o notificacion."]
    },
    academic: {
      focus: [
        "Gestion academica aparece en varias plazas y puede transformarse en caso practico: matricula, expedientes, actas, titulos y movilidad.",
        "La parte tecnica se mezcla con conocimiento funcional universitario."
      ],
      study: ["Ciclo de vida academico: acceso, matricula, expediente, actas y titulos.", "Grados, masters, doctorado y formacion permanente.", "Gestion economica de matricula y automatricula.", "Movilidad internacional y sistemas academicos como GIGA.", "Integracion con administracion electronica."],
      practice: ["Modela el proceso de matricula y sus validaciones.", "Disena una consulta de expediente academico.", "Explica como integrarias una notificacion electronica en un tramite academico."]
    },
    libraries: {
      focus: [
        "Este bloque es especifico de la plaza 6241 y puede darte ventaja si lo preparas con ejemplos claros.",
        "No hace falta ser bibliotecario, pero si entender sistemas, metadatos, repositorios y preservacion digital desde la mirada tecnica."
      ],
      study: ["Sistemas de gestion de bibliotecas y catalogo.", "Drupal, WordPress y gestores de contenido.", "Repositorios, revistas electronicas y OJS.", "Metadatos: MARC21, Dublin Core, METS, MODS y PREMIS.", "Preservacion digital: formatos, integridad, acceso y ciclo de vida."],
      practice: ["Explica como importarias registros bibliograficos.", "Disena una integracion entre repositorio y buscador.", "Propón controles para preservar ficheros digitales a largo plazo."]
    },
    hr: {
      focus: [
        "Este bloque distingue la plaza 6253: RRHH, control de presencia, prevencion y salud laboral.",
        "La dificultad esta en unir procesos sensibles con seguridad, integracion de datos y trazabilidad."
      ],
      study: ["Procesos de recursos humanos y datos personales.", "Perseu, Evalos y EVOpreven como dominios funcionales.", "Integraciones con otros sistemas UB.", "Control de permisos, auditoria y minimizacion de datos.", "Mantenimiento correctivo y evolutivo de aplicaciones internas."],
      practice: ["Disena una integracion para actualizar datos de empleado.", "Explica como protegerias datos de salud laboral.", "Propón pruebas para un modulo de control de presencia."]
    },
    research: {
      focus: [
        "Este bloque es especifico de la plaza 00051530 y gira alrededor de la gestion de la investigacion.",
        "Combina stack Java/Spring/JPA/JSF en SIRA, Perl/HTML/CSS/JavaScript en GREC y busquedas con Elasticsearch."
      ],
      study: ["Procesos de gestion de investigacion y datos asociados.", "SIRA: Java, Spring, JPA y JSF.", "GREC: Perl, HTML, CSS y JavaScript.", "Elasticsearch: indice, documento, busqueda y relevancia.", "Pruebas, documentacion e incidencias en sistemas de investigacion."],
      practice: ["Disena una busqueda de proyectos o investigadores.", "Explica como sincronizarias datos entre una base relacional y un indice.", "Propón un plan de pruebas para una pantalla de gestion de investigacion."]
    },
    methods: {
      focus: [
        "METRICA v3, UML y patrones aparecen en las plazas 29838 y 36731, muy orientadas a gestion academica.",
        "Sirven para demostrar que sabes analizar antes de programar."
      ],
      study: ["Fases de analisis, diseno, construccion e implantacion.", "UML: casos de uso, clases, secuencia y actividades.", "Patrones de arquitectura: capas, MVC, cliente-servidor y servicios.", "Trazabilidad entre requisito, diseno, codigo y prueba.", "Documentacion tecnica clara y mantenible."],
      practice: ["Dibuja un caso de uso de automatricula.", "Propón clases principales para gestion de expediente.", "Explica que patron usarias para aislar acceso a datos."]
    },
    equality: {
      focus: [
        "Este bloque normativo es corto y rentable: aparece en todas las plazas.",
        "Debes estudiarlo con precision, especialmente los puntos concretos del Plan de igualdad UB y articulos 43, 44 y 46 de la LOSU."
      ],
      study: ["Plan de igualdad UB: marco normativo de referencia.", "Ambitos de aplicacion del plan.", "Acciones previstas en el plan.", "LOSU: articulos 43, 44 y 46.", "Como se relaciona con la actividad universitaria y el empleo publico."],
      practice: ["Haz una ficha de cada articulo.", "Prepara una respuesta corta sobre igualdad en la universidad.", "Relaciona el plan con medidas organizativas concretas."]
    }
  };

  return { ...guide, ...(overrides[topic.id] || {}) };
}

function renderList(items, ordered = false) {
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items.map(item => `<li>${item}</li>`).join("")}</${tag}>`;
}

function openTopic(topicId) {
  const topic = topics.find(t => t.id === topicId);
  if (!topic) return;
  const active = document.querySelector(".segmented button.active");
  previousView = active?.dataset.view || previousView || "roadmap";
  renderDetail(topic);
  document.querySelectorAll(".segmented button").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  byId("detailView").classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDetail(topic) {
  const guide = getDetailGuide(topic);
  const relatedJobs = jobs.filter(job => topic.jobs.includes(job.code));
  const completed = done.has(topic.id);
  byId("detailView").innerHTML = `
    <article class="detail-panel">
      <div class="detail-top">
        <div>
          <p class="eyebrow">${topic.group} - prioridad ${topic.priority}</p>
          <h2>${topic.title}</h2>
          <p>${topic.text}</p>
        </div>
        <div class="detail-actions">
          <button class="back-button" type="button" id="backToList">Volver</button>
          <button type="button" id="toggleDone">${completed ? "Marcar pendiente" : "Marcar completado"}</button>
        </div>
      </div>
      <div class="detail-layout">
        <div>
          <section class="detail-section">
            <h3>Explicacion</h3>
            ${guide.focus.map(paragraph => `<p>${paragraph}</p>`).join("")}
          </section>
          <section class="detail-section">
            <h3>Que tienes que dominar</h3>
            ${renderList(guide.study)}
          </section>
          <section class="detail-section">
            <h3>Como practicarlo</h3>
            ${renderList(guide.practice)}
          </section>
          <section class="detail-section">
            <h3>Preguntas de autoevaluacion</h3>
            ${renderList(guide.questions, true)}
          </section>
          <section class="detail-section">
            <h3>Errores que conviene evitar</h3>
            ${renderList(guide.pitfalls)}
          </section>
        </div>
        <aside class="detail-aside">
          <div>
            <h3>Plazas donde aparece</h3>
            ${relatedJobs.map(job => `<span class="job-link"><strong>${job.code}</strong><span>${job.focus}</span></span>`).join("")}
          </div>
          <div>
            <h3>Etiquetas del temario</h3>
            <div class="chips">${[...topic.jobs, ...topic.sources].map(item => `<span class="chip">${item}</span>`).join("")}</div>
          </div>
          <div>
            <h3>Consejo de estudio</h3>
            <p>Si tienes poco tiempo, prepara primero una definicion, un ejemplo tecnico y una mini respuesta de caso practico. Eso te sirve tanto para test como para pregunta abierta.</p>
          </div>
        </aside>
      </div>
    </article>
  `;
  byId("backToList").addEventListener("click", closeDetail);
  byId("toggleDone").addEventListener("click", () => {
    done.has(topic.id) ? done.delete(topic.id) : done.add(topic.id);
    saveDone();
    renderAll();
    renderDetail(topic);
    updateProgress();
  });
}

function closeDetail() {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  byId(`${previousView}View`).classList.add("active");
  const button = document.querySelector(`.segmented button[data-view="${previousView}"]`);
  if (button) button.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderCards() {
  const root = byId("cardsView");
  const q = query.trim().toLowerCase();
  const filtered = cards.filter(([front, back]) => !q || `${front} ${back}`.toLowerCase().includes(q));
  root.innerHTML = `<div class="grid"></div>`;
  const grid = root.firstElementChild;
  filtered.forEach(([front, back]) => {
    const card = document.createElement("article");
    card.className = "flashcard";
    card.innerHTML = `<h3>${front}</h3><button type="button">Mostrar respuesta</button><p class="answer">${back}</p>`;
    card.querySelector("button").addEventListener("click", () => {
      card.classList.toggle("open");
      card.querySelector("button").textContent = card.classList.contains("open") ? "Ocultar respuesta" : "Mostrar respuesta";
    });
    grid.append(card);
  });
  if (!filtered.length) root.innerHTML = `<p class="empty">No hay tarjetas para esa búsqueda.</p>`;
}

function renderJobs() {
  const root = byId("jobsView");
  const q = query.trim().toLowerCase();
  const filtered = jobs.filter((job) => {
    const inJob = selectedJob === "all" || selectedJob === job.code;
    const text = [job.code, job.focus, job.domain, job.functions, ...job.tags].join(" ").toLowerCase();
    return inJob && (!q || text.includes(q));
  });
  root.innerHTML = `<div class="grid"></div>`;
  const grid = root.firstElementChild;
  filtered.forEach((job) => {
    const related = topics.filter(t => t.jobs.includes(job.code)).map(t => t.title);
    const card = document.createElement("article");
    card.className = "job-card";
    card.innerHTML = `
      <div>
        <p class="eyebrow">${job.code}</p>
        <h3>${job.focus}</h3>
      </div>
      <p>${job.functions}</p>
      <div class="job-meta">${job.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <ul>${related.slice(0, 9).map(t => `<li>${t}</li>`).join("")}</ul>
    `;
    grid.append(card);
  });
  if (!filtered.length) root.innerHTML = `<p class="empty">No hay plazas para ese filtro.</p>`;
}

function updateProgress() {
  const percent = Math.round((done.size / topics.length) * 100);
  byId("doneCount").textContent = done.size;
  byId("progressText").textContent = `${percent}%`;
  byId("progressRing").style.strokeDashoffset = String(314 - (314 * percent / 100));
}

function renderAll() {
  renderJobsFilter();
  renderRoadmap();
  renderMatrix();
  renderCards();
  renderJobs();
  updateProgress();
}

document.querySelectorAll(".segmented button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segmented button").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    button.classList.add("active");
    byId(`${button.dataset.view}View`).classList.add("active");
    previousView = button.dataset.view;
  });
});

byId("searchInput").addEventListener("input", (event) => {
  query = event.target.value;
  renderAll();
});

renderAll();
