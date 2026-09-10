/* ============================================================
   HASH HUMANITY — i18n.js
   Full replacement
   Languages:
   EN / ES / PT / FR / DE / ZH / MS / KO
   ============================================================ */

const LANGUAGE_NAMES = {
  en: "English",
  es: "Español",
  pt: "Português",
  fr: "Français",
  de: "Deutsch",
  zh: "中文",
  ms: "Bahasa Melayu",
  ko: "한국어"
};

const SUPPORTED_LANGUAGES = Object.keys(LANGUAGE_NAMES);


/* ============================================================
   ENGLISH — MASTER / FALLBACK
   ============================================================ */

const ENGLISH = {

  home: {

    nav_learn: "Mission",
    nav_join: "Join",

    eyebrow: "Protected by HumanKey",

    h1:
      "Real is<br /><em>rare.</em>",

    lead:
      "Hash Humanity is social media built around <strong>real people.</strong> HumanKey helps make bot networks, duplicate identities, and artificial engagement dramatically harder to scale.",

    launch:
      "Enter Hash Humanity",

    mission:
      "Our Mission",

    member_lbl:
      "humans and counting",

    values_human:
      "Human-first",

    values_privacy:
      "Privacy-preserving",

    values_algorithm:
      "No rage-bait algorithms",

    values_conversation:
      "Real conversation",

    statement_kicker:
      "HASH HUMANITY",

    statement_h2:
      "Social media became something else.<br /><em>We want the human part back.</em>",

    statement_p:
      "No bot swarm pretending to be public opinion. No platform designed around rage bait. No endless artificial engagement machine. Hash Humanity is built around actual people, actual voices, and actual conversation.",

    hk_kicker:
      "HUMANKEY",

    hk_h2:
      "Human proof.<br /><em>Without giving up who you are.</em>",

    hk_p:
      "HumanKey is the proof-of-personhood layer behind Hash Humanity. It is designed to establish that a real, live, unique person stands behind an account while minimizing the amount of personal information needed to prove it.",

    hk_link:
      "See how HumanKey works →",

    join_kicker:
      "ENTER THE HUMAN INTERNET",

    join_h2:
      "Come as<br /><em>yourself.</em>",

    join_p:
      "Enter a social network built around people instead of artificial engagement.",

    read_mission:
      "Read the Mission",

    fineprint:
      "<strong>Your face is not your password.</strong> HumanKey is designed to minimize the personal information required to establish that an account belongs to a real person.",

    footer_tag:
      "Real is rare.",


    /* Legacy aliases so older HTML does not break */

    subline:
      "Human-first · Privacy-preserving · No rage-bait algorithms · Real conversation",

    sec_kicker:
      "Why Hash Humanity",

    sec_h2:
      "Built around <em>actual people</em>.",

    card1_h3:
      "HumanKey at the gate",

    card1_p:
      "HumanKey is designed to make large-scale duplicate account creation and automated identity abuse dramatically harder.",

    card2_h3:
      "Proof without exposure",

    card2_p:
      "HumanKey is designed to prove personhood without requiring your public civil identity.",

    card3_h3:
      "A feed worth your time",

    card3_p:
      "Less artificial engagement. More real people, real ideas, and real conversation.",

    card4_h3:
      "One human. One account.",

    card4_p:
      "A single person should not be able to cheaply multiply into thousands of apparently independent people.",

    cta_h2:
      "Come as<br /><em>yourself.</em>",

    cta_p:
      "Enter a social network built around people instead of artificial engagement."
  },


  mission: {

    back:
      "← Back",

    launch:
      "Enter",

    eyebrow:
      "The mission behind Hash Humanity",

    h1:
      "The internet has<br /><em>an identity problem.</em>",

    lead:
      "Online, an account looks like a person. <strong>But an account is not proof of a person.</strong> Software and coordinated operators can create, control, and amplify identities at a scale ordinary humans cannot match.",

    pull:
      "Hash Humanity starts with a different question: <span>who is actually human?</span>",


    core_kicker:
      "THE CORE IDEA",

    core_h2:
      "The internet does not need more accounts.<br /><em>It needs accountable humans.</em>",

    core_p:
      "Hash Humanity is built around proof of personhood. Before an account becomes another voice in the network, HumanKey is designed to establish that a real, live, unique person stands behind it.",


    problem_kicker:
      "THE PROBLEM",

    problem_h2:
      "The internet cannot reliably tell<br /><em>a crowd from a machine.</em>",


    problem1_idx:
      "01 / ACCOUNT CREATION",

    problem1_h3:
      "Creating another identity is cheap.",

    problem1_p:
      "On conventional platforms, another account may require little more than another email address, phone number, automated registration workflow, or compromised credential. When identities are disposable, abuse becomes inexpensive to repeat.",


    problem2_idx:
      "02 / SCALE",

    problem2_h3:
      "Automation changes the size of the problem.",

    problem2_p:
      "A person has limited time and attention. Software does not operate under the same constraint. Automated systems can create posts, replies, follows, reactions, messages, and other account activity continuously and at large scale.",


    problem3_idx:
      "03 / FALSE CONSENSUS",

    problem3_h3:
      "Ten thousand accounts can look like ten thousand people.",

    problem3_p:
      "Likes, replies, reposts, follows, and repeated talking points can create the appearance of popularity or consensus even when a much smaller number of operators are coordinating the activity behind them.",


    problem4_idx:
      "04 / DISPOSABILITY",

    problem4_h3:
      "A ban means less when another account costs almost nothing.",

    problem4_p:
      "When an abusive identity can immediately be replaced, moderation becomes an endless cycle of account removal while the underlying operator simply returns under another identity.",


    problem5_idx:
      "05 / TRUST",

    problem5_h3:
      "Eventually people stop knowing what is real.",

    problem5_p:
      "When genuine people cannot reliably be distinguished from automated identities, coordinated accounts, impersonators, and synthetic activity, trust in the conversation itself begins to erode.",


    bots_kicker:
      "WHAT AUTOMATION CAN DO",

    bots_h2:
      "A bot does not need to be intelligent.<br /><em>It needs to be scalable.</em>",

    bots_p:
      "Automation, account farms, generative AI, stolen credentials, and coordinated operators can combine to perform activity that once required large numbers of people.",


    bot1_h3:
      "Manufacture engagement.",

    bot1_p:
      "Automated identities can follow accounts, react to posts, repost material, generate comments, and repeatedly amplify the same message, creating activity that appears organic.",


    bot2_h3:
      "Simulate public opinion.",

    bot2_p:
      "Coordinated networks can repeat narratives, overwhelm replies, create apparent agreement, and make a fringe position appear substantially more popular than it really is.",


    bot3_h3:
      "Impersonate people and institutions.",

    bot3_p:
      "Fake accounts can copy names, photographs, branding, writing styles, or organizational identities and use those identities for fraud, misinformation, phishing, or social engineering.",


    bot4_h3:
      "Reach people at machine speed.",

    bot4_p:
      "Automated systems can send messages, post content, scrape information, test responses, and reach large audiences much faster than a single human operator could manually.",


    bot5_h3:
      "Adapt content with AI.",

    bot5_p:
      "Generative systems can produce large amounts of unique text, imagery, audio, and other synthetic material, reducing the repetitive patterns that once made some automated campaigns easier to recognize.",


    bot6_h3:
      "Return after removal.",

    bot6_p:
      "If account creation remains cheap, deleting a malicious account addresses the symptom rather than the operator. Another identity can simply take its place.",


    scale_kicker:
      "THE SCALE IS REAL",

    scale_value:
      "1.6M",

    scale_label:
      "bot-driven or fake account signup attempts blocked per hour by Microsoft",

    scale_p:
      "Microsoft reported blocking an average of roughly 1.6 million bot-driven or fake-account signup attempts every hour during the period covered by its 2025 Digital Defense Report. The point is larger than one company: automated identity creation operates at industrial scale.",


    one_kicker:
      "THE HASH HUMANITY MODEL",

    one_human:
      "HUMAN",

    one_account:
      "ACCOUNT",

    one_h2:
      "One person should not be able to look like<br /><em>ten thousand people.</em>",

    one_p:
      "HumanKey is designed around one human, one account. If every additional verified account requires another unique human instead of another script, disposable email address, or automated registration, large-scale manipulation becomes substantially more difficult and expensive to organize.",


    humankey_kicker:
      "HUMANKEY",

    humankey_h2:
      "Proof of humanity.<br /><em>Not proof of identity.</em>",

    humankey_p:
      "HumanKey is Hash Humanity's proof-of-personhood system. Its job is not to learn who you are. Its job is to establish that a real, live person is requesting access and help determine whether that person has already enrolled.",


    hk1_h3:
      "Consent comes first.",

    hk1_p:
      "HumanKey begins after the user agrees to the verification process. Camera access and biometric processing are not intended to occur silently in the background.",


    hk2_h3:
      "Liveness checks for a real person.",

    hk2_p:
      "A liveness challenge helps determine whether the camera is seeing a live participant rather than a static photograph, basic replay, or other presentation attack.",


    hk3_h3:
      "A mathematical biometric representation is created.",

    hk3_p:
      "HumanKey derives a mathematical facial representation suitable for comparison. Its purpose is duplicate-person detection, not creating a public identity profile.",


    hk4_h3:
      "HumanKey checks for another enrollment.",

    hk4_p:
      "The representation can be compared against enrolled representations to determine whether the same person appears to have already created an account. This supports the one-human, one-account model.",


    hk5_h3:
      "Personhood becomes a privacy-preserving proof.",

    hk5_p:
      "After successful verification, HumanKey can use cryptographic proofs and derived identifiers so the network can recognize that personhood requirements were satisfied without requiring a public legal name or other unnecessary identity information.",


    hk6_h3:
      "A passkey becomes the everyday credential.",

    hk6_p:
      "After enrollment, routine authentication can use a passkey instead of repeatedly scanning the user's face. Passkeys use public-key cryptography and avoid relying on a traditional reusable password.",


    hk7_h3:
      "Biometrics return only when necessary.",

    hk7_p:
      "The goal is not continuous facial verification. Biometric verification is intended for enrollment and controlled recovery scenarios where HumanKey must re-establish the returning person.",


    change_kicker:
      "WHAT THIS CHANGES",

    change_h2:
      "Human verification does not fix the internet by itself.<br /><em>It changes what is possible.</em>",


    change1_h:
      "Bot farms become harder to scale.",

    change1_p:
      "Software can create unlimited processes. It cannot create unlimited unique human beings. Requiring unique personhood places a physical constraint in front of digital account creation.",


    change2_h:
      "Disposable accounts become less disposable.",

    change2_p:
      "If one person cannot simply create another verified identity, losing an account carries more consequence. That can make bans, rate limits, and reputation systems more meaningful.",


    change3_h:
      "Account counts become more meaningful.",

    change3_p:
      "A verified account does not prove that a person is truthful, wise, or acting in good faith. It does provide stronger evidence that a distinct human stands behind the account.",


    change4_h:
      "Manufactured crowds become more expensive.",

    change4_p:
      "Coordinated humans can still organize, but requiring another verified person for another account makes it much harder for one operator or automated system to cheaply multiply itself into an artificial crowd.",


    change5_h:
      "Anonymous does not have to mean artificial.",

    change5_p:
      "A person can choose not to reveal a civil identity while still proving that a unique human stands behind an account. Personhood and public identity are different things.",


    change6_h:
      "Reputation can belong to a persistent human presence.",

    change6_p:
      "When identities are harder to throw away and replace, behavior can carry history. What a person builds, contributes, and says can have continuing meaning.",


    privacy_kicker:
      "PRIVACY BY DESIGN",

    privacy_h2:
      "Prove you are human.<br /><em>Not who you are.</em>",

    privacy_p:
      "Proof of personhood should not require turning a social network into an identity database. HumanKey is designed around data minimization: process what is necessary to establish personhood and uniqueness, then rely on secure credentials and privacy-preserving proofs for ordinary access.",


    privacy1_h:
      "No public legal identity required",

    privacy1_p:
      "Users can participate without publishing a government name or other civil identity information.",


    privacy2_h:
      "Face verification is not ordinary login",

    privacy2_p:
      "Passkeys are intended to handle routine authentication after successful HumanKey enrollment.",


    privacy3_h:
      "Uniqueness, not surveillance",

    privacy3_p:
      "The biometric system exists to establish personhood and uniqueness, not to track a person's activity around the network.",


    limits_kicker:
      "IMPORTANT DISTINCTION",

    limits_h2:
      "A verified human can still be<br /><em>wrong, dishonest, or an asshole.</em>",

    limits_p1:
      "HumanKey proves personhood, not character. It cannot determine whether a statement is true. It cannot prevent humans from coordinating, lying, harassing, manipulating, or exercising bad judgment.",

    limits_p2:
      "What it can do is reduce one of the internet's most powerful force multipliers: the ability for one operator to cheaply masquerade as an unlimited number of independent people. Hash Humanity is not trying to create a network where everyone agrees. It is trying to create one where disagreement is actually happening between people.",


    final_kicker:
      "THE MISSION",

    final_h2:
      "Make the internet<br /><em>human again.</em>",

    final_p:
      "Hash Humanity is an experiment in what social media can become when the network begins with a scarce resource software cannot manufacture: a real human being.",

    launch_now:
      "Enter Hash Humanity",

    home_link:
      "Back to home",

    footer_tag:
      "Real is rare.",


    /* Old mission aliases */

    c1_idx:
      "01 — The idea",

    c1_h2:
      "Real people. Real conversation.",

    c1_p:
      "Every account begins with proof that a real, live person stands behind it.",

    c2_idx:
      "02 — HumanKey",

    c2_h2:
      "Proof of humanity, built in.",

    c2_p:
      "HumanKey is designed to establish personhood and reduce duplicate enrollment.",

    c3_idx:
      "03 — Your space",

    c3_h2:
      "Community without the artificial noise.",

    c3_p:
      "A network designed around human participation rather than automated activity.",

    c4_idx:
      "04 — How it works",

    c4_h2:
      "One path into a human network.",

    step1:
      "<strong>Verify your humanity.</strong> Complete HumanKey liveness and uniqueness verification.",

    step2:
      "<strong>Create your passkey.</strong> Establish your secure everyday account credential.",

    step3:
      "<strong>Enter the network.</strong> Participate as a verified human.",

    c5_idx:
      "05 — The mission",

    c5_h2:
      "Make online spaces feel human again.",

    c5_p:
      "Hash Humanity is designed to make bot abuse, duplicate accounts, and manufactured engagement dramatically harder to scale.",

    contact_us:
      "Get in touch"
  },


  join: {

    back:
      "← Back",

    launch:
      "Enter",

    eyebrow:
      "Join · Human-verified · HumanKey protected",

    h1:
      "Come be <em>human</em> with us.",

    lead:
      "Hash Humanity is a network built for <strong>real people</strong>. Tell us a little about yourself and we will help you get started.",

    lbl_name:
      "Your name",

    ph_name:
      "First name",

    lbl_email:
      "Email",

    lbl_role:
      "What brings you here?",

    opt_choose:
      "Choose one…",

    opt_member:
      "I want to join as a member",

    opt_creator:
      "I am a creator",

    opt_builder:
      "I am a builder / developer",

    opt_partner:
      "Partnership / organization",

    opt_press:
      "Press / media",

    opt_other:
      "Something else",

    lbl_message:
      "Anything you would like us to know? <span class=\"optional\">(optional)</span>",

    ph_message:
      "What are you hoping to do on Hash Humanity? Any questions?",

    submit:
      "Request an invite",

    done_h2:
      "You are <em>on the list</em>.",

    done_p:
      "Thanks for your interest. We have your details and someone from our team will contact you using the email you provided. Want to look around now?",

    launch_full:
      "Enter Hash Humanity",

    footer_tag:
      "Real is rare.",

    err_name:
      "Please tell us your name.",

    err_email:
      "Please enter a valid email so we can reach you.",

    err_role:
      "Please choose what brings you here.",

    err_offline:
      "Could not reach our servers. Check your connection and try again.",

    sending:
      "Sending…",

    err_generic:
      "Something went wrong. Please try again."
  }
};


/* ============================================================
   TRANSLATIONS
   Only translated values are needed here.
   English remains the fallback automatically.
   ============================================================ */

const TRANSLATIONS = {


  /* ==========================================================
     SPANISH
     ========================================================== */

  es: {

    home: {
      nav_learn: "Misión",
      nav_join: "Unirse",
      eyebrow: "Protegido por HumanKey",
      h1: "Lo real es<br /><em>escaso.</em>",
      lead: "Hash Humanity es una red social construida alrededor de <strong>personas reales.</strong> HumanKey ayuda a hacer que las redes de bots, las identidades duplicadas y la interacción artificial sean mucho más difíciles de escalar.",
      launch: "Entrar a Hash Humanity",
      mission: "Nuestra misión",
      member_lbl: "humanos y creciendo",
      values_human: "Primero los humanos",
      values_privacy: "Privacidad preservada",
      values_algorithm: "Sin algoritmos de rage bait",
      values_conversation: "Conversación real",
      statement_kicker: "HASH HUMANITY",
      statement_h2: "Las redes sociales se convirtieron en otra cosa.<br /><em>Queremos recuperar la parte humana.</em>",
      statement_p: "Sin enjambres de bots fingiendo ser opinión pública. Sin una plataforma diseñada alrededor de la indignación. Sin una máquina interminable de interacción artificial. Hash Humanity está construida alrededor de personas, voces y conversaciones reales.",
      hk_kicker: "HUMANKEY",
      hk_h2: "Prueba humana.<br /><em>Sin renunciar a quién eres.</em>",
      hk_p: "HumanKey es la capa de prueba de persona detrás de Hash Humanity. Está diseñada para establecer que una persona real, viva y única está detrás de una cuenta, minimizando la información personal necesaria para demostrarlo.",
      hk_link: "Ver cómo funciona HumanKey →",
      join_kicker: "ENTRA AL INTERNET HUMANO",
      join_h2: "Ven como<br /><em>eres.</em>",
      join_p: "Entra a una red social construida alrededor de personas en lugar de interacción artificial.",
      read_mission: "Leer la misión",
      fineprint: "<strong>Tu rostro no es tu contraseña.</strong> HumanKey está diseñado para minimizar la información personal necesaria para establecer que una cuenta pertenece a una persona real.",
      footer_tag: "Lo real es escaso."
    },

    mission: {
      back: "← Volver",
      launch: "Entrar",
      eyebrow: "La misión detrás de Hash Humanity",
      h1: "Internet tiene<br /><em>un problema de identidad.</em>",
      lead: "En internet, una cuenta parece una persona. <strong>Pero una cuenta no demuestra que exista una persona detrás.</strong> El software y los operadores coordinados pueden crear, controlar y amplificar identidades a una escala que las personas comunes no pueden igualar.",
      pull: "Hash Humanity comienza con otra pregunta: <span>¿quién es realmente humano?</span>",

      core_kicker: "LA IDEA CENTRAL",
      core_h2: "Internet no necesita más cuentas.<br /><em>Necesita humanos responsables.</em>",
      core_p: "Hash Humanity está construida alrededor de la prueba de persona. Antes de que una cuenta se convierta en otra voz dentro de la red, HumanKey está diseñado para establecer que existe una persona real, viva y única detrás.",

      problem_kicker: "EL PROBLEMA",
      problem_h2: "Internet no puede distinguir de forma fiable<br /><em>una multitud de una máquina.</em>",

      problem1_idx: "01 / CREACIÓN DE CUENTAS",
      problem1_h3: "Crear otra identidad es barato.",
      problem1_p: "En plataformas convencionales, otra cuenta puede requerir poco más que otro correo electrónico, número de teléfono, flujo de registro automatizado o credencial comprometida. Cuando las identidades son desechables, repetir el abuso es barato.",

      problem2_idx: "02 / ESCALA",
      problem2_h3: "La automatización cambia el tamaño del problema.",
      problem2_p: "Una persona tiene tiempo y atención limitados. El software no tiene la misma limitación. Los sistemas automatizados pueden publicar, responder, seguir, reaccionar y enviar mensajes de forma continua y a gran escala.",

      problem3_idx: "03 / FALSO CONSENSO",
      problem3_h3: "Diez mil cuentas pueden parecer diez mil personas.",
      problem3_p: "Los me gusta, respuestas, reposts, seguidores y mensajes repetidos pueden crear la apariencia de popularidad o consenso aunque un grupo mucho más pequeño esté coordinando la actividad.",

      problem4_idx: "04 / CUENTAS DESECHABLES",
      problem4_h3: "Una expulsión significa menos cuando otra cuenta casi no cuesta nada.",
      problem4_p: "Cuando una identidad abusiva puede reemplazarse inmediatamente, la moderación se convierte en un ciclo interminable mientras el mismo operador simplemente regresa con otra cuenta.",

      problem5_idx: "05 / CONFIANZA",
      problem5_h3: "Con el tiempo, la gente deja de saber qué es real.",
      problem5_p: "Cuando las personas reales no pueden distinguirse de identidades automatizadas, cuentas coordinadas, impostores y actividad sintética, la confianza en la conversación empieza a desaparecer.",

      bots_kicker: "LO QUE PUEDE HACER LA AUTOMATIZACIÓN",
      bots_h2: "Un bot no necesita ser inteligente.<br /><em>Necesita poder escalar.</em>",
      bots_p: "La automatización, las granjas de cuentas, la IA generativa, las credenciales robadas y los operadores coordinados pueden combinarse para realizar actividades que antes requerían muchas personas.",

      bot1_h3: "Fabricar interacción.",
      bot1_p: "Las identidades automatizadas pueden seguir cuentas, reaccionar, republicar, generar comentarios y amplificar repetidamente un mensaje para crear actividad que parece orgánica.",

      bot2_h3: "Simular opinión pública.",
      bot2_p: "Las redes coordinadas pueden repetir narrativas, inundar respuestas, fabricar acuerdo y hacer que una postura marginal parezca mucho más popular de lo que realmente es.",

      bot3_h3: "Suplantar personas e instituciones.",
      bot3_p: "Las cuentas falsas pueden copiar nombres, fotografías, marcas, estilos de escritura o identidades organizacionales y utilizarlas para fraude, desinformación, phishing o ingeniería social.",

      bot4_h3: "Llegar a personas a velocidad de máquina.",
      bot4_p: "Los sistemas automatizados pueden enviar mensajes, publicar contenido, recopilar información y alcanzar audiencias mucho más rápido que una persona.",

      bot5_h3: "Adaptar contenido con IA.",
      bot5_p: "Los sistemas generativos pueden producir grandes cantidades de texto, imágenes, audio y otros contenidos sintéticos únicos, haciendo más difícil reconocer campañas automatizadas.",

      bot6_h3: "Regresar después de ser eliminados.",
      bot6_p: "Si crear cuentas sigue siendo barato, eliminar una cuenta maliciosa combate el síntoma y no al operador. Otra identidad puede ocupar su lugar.",

      scale_kicker: "LA ESCALA ES REAL",
      scale_label: "intentos de registro de bots o cuentas falsas bloqueados por hora por Microsoft",
      scale_p: "Microsoft informó que bloqueó un promedio de aproximadamente 1,6 millones de intentos de registro impulsados por bots o cuentas falsas cada hora durante el período cubierto por su Informe de Defensa Digital 2025. El punto es mayor que una sola empresa: la creación automatizada de identidades existe a escala industrial.",

      one_kicker: "EL MODELO DE HASH HUMANITY",
      one_human: "HUMANO",
      one_account: "CUENTA",
      one_h2: "Una persona no debería poder parecer<br /><em>diez mil personas.</em>",
      one_p: "HumanKey está diseñado alrededor de un humano, una cuenta. Si cada cuenta verificada adicional requiere otra persona única en lugar de otro script o registro automatizado, la manipulación a gran escala se vuelve mucho más difícil y costosa.",

      humankey_kicker: "HUMANKEY",
      humankey_h2: "Prueba de humanidad.<br /><em>No prueba de identidad.</em>",
      humankey_p: "HumanKey es el sistema de prueba de persona de Hash Humanity. Su función no es descubrir quién eres. Su función es establecer que una persona real y viva solicita acceso y ayudar a determinar si esa persona ya se registró.",

      hk1_h3: "El consentimiento viene primero.",
      hk1_p: "HumanKey comienza después de que el usuario acepta el proceso de verificación. El acceso a la cámara y el procesamiento biométrico no deben ocurrir silenciosamente en segundo plano.",

      hk2_h3: "La prueba de vida busca una persona real.",
      hk2_p: "Un desafío de prueba de vida ayuda a determinar si la cámara está viendo a una persona presente en lugar de una fotografía estática, reproducción básica u otro ataque de presentación.",

      hk3_h3: "Se crea una representación biométrica matemática.",
      hk3_p: "HumanKey deriva una representación facial matemática adecuada para comparación. Su propósito es detectar personas duplicadas, no crear un perfil de identidad pública.",

      hk4_h3: "HumanKey busca registros anteriores.",
      hk4_p: "La representación puede compararse con representaciones registradas para determinar si la misma persona parece haber creado ya una cuenta.",

      hk5_h3: "La humanidad se convierte en una prueba que preserva la privacidad.",
      hk5_p: "Después de una verificación correcta, HumanKey puede utilizar pruebas criptográficas e identificadores derivados para demostrar que se cumplieron los requisitos de persona sin exigir un nombre legal público.",

      hk6_h3: "Una passkey se convierte en la credencial diaria.",
      hk6_p: "Después del registro, la autenticación normal puede utilizar una passkey en lugar de escanear repetidamente el rostro del usuario.",

      hk7_h3: "La biometría vuelve solo cuando es necesaria.",
      hk7_p: "El objetivo no es la verificación facial continua. La biometría está destinada al registro y a escenarios controlados de recuperación.",

      change_kicker: "LO QUE CAMBIA",
      change_h2: "La verificación humana no arregla internet por sí sola.<br /><em>Cambia lo que es posible.</em>",

      change1_h: "Las granjas de bots se vuelven más difíciles de escalar.",
      change1_p: "El software puede crear procesos ilimitados. No puede crear seres humanos únicos ilimitados.",

      change2_h: "Las cuentas desechables dejan de ser tan desechables.",
      change2_p: "Si una persona no puede crear simplemente otra identidad verificada, perder una cuenta tiene más consecuencias.",

      change3_h: "El número de cuentas adquiere más significado.",
      change3_p: "Una cuenta verificada no demuestra que una persona diga la verdad, pero proporciona evidencia más fuerte de que existe una persona distinta detrás.",

      change4_h: "Fabricar multitudes se vuelve más costoso.",
      change4_p: "Las personas aún pueden coordinarse, pero un operador ya no puede multiplicarse fácilmente en una multitud artificial.",

      change5_h: "Ser anónimo no tiene que significar ser artificial.",
      change5_p: "Una persona puede mantener privada su identidad civil y aun así demostrar que existe un humano único detrás de la cuenta.",

      change6_h: "La reputación puede pertenecer a una presencia humana persistente.",
      change6_p: "Cuando las identidades son más difíciles de desechar, el comportamiento puede tener historia y consecuencias.",

      privacy_kicker: "PRIVACIDAD POR DISEÑO",
      privacy_h2: "Demuestra que eres humano.<br /><em>No quién eres.</em>",
      privacy_p: "La prueba de persona no debería convertir una red social en una base de datos de identidad. HumanKey está diseñado alrededor de la minimización de datos.",

      privacy1_h: "No se requiere identidad legal pública",
      privacy1_p: "Los usuarios pueden participar sin publicar su nombre legal u otra información de identidad civil.",

      privacy2_h: "La verificación facial no es el inicio de sesión normal",
      privacy2_p: "Las passkeys están destinadas a manejar la autenticación habitual después del registro en HumanKey.",

      privacy3_h: "Unicidad, no vigilancia",
      privacy3_p: "El sistema biométrico existe para establecer persona y unicidad, no para rastrear la actividad de una persona.",

      limits_kicker: "DISTINCIÓN IMPORTANTE",
      limits_h2: "Un humano verificado todavía puede estar<br /><em>equivocado, mentir o ser un imbécil.</em>",
      limits_p1: "HumanKey demuestra humanidad, no carácter. No puede decidir si una afirmación es verdadera ni impedir que las personas mientan, coordinen o se comporten mal.",
      limits_p2: "Lo que sí puede hacer es reducir uno de los mayores multiplicadores de fuerza de internet: la capacidad de un operador para aparentar ser un número ilimitado de personas independientes.",

      final_kicker: "LA MISIÓN",
      final_h2: "Hacer que internet vuelva a ser<br /><em>humano.</em>",
      final_p: "Hash Humanity explora qué puede ser una red social cuando comienza con un recurso que el software no puede fabricar: un ser humano real.",
      launch_now: "Entrar a Hash Humanity",
      home_link: "Volver al inicio",
      footer_tag: "Lo real es escaso."
    },

    join: {
      back: "← Volver",
      launch: "Entrar",
      eyebrow: "Únete · Verificado como humano · Protegido por HumanKey",
      h1: "Ven a ser <em>humano</em> con nosotros.",
      lead: "Hash Humanity es una red construida para <strong>personas reales</strong>. Cuéntanos un poco sobre ti y te ayudaremos a empezar.",
      lbl_name: "Tu nombre",
      ph_name: "Nombre",
      lbl_email: "Correo electrónico",
      lbl_role: "¿Qué te trae aquí?",
      opt_choose: "Elige una opción…",
      opt_member: "Quiero unirme como miembro",
      opt_creator: "Soy creador",
      opt_builder: "Soy desarrollador",
      opt_partner: "Asociación / organización",
      opt_press: "Prensa / medios",
      opt_other: "Otra cosa",
      lbl_message: "¿Algo más que quieras contarnos? <span class=\"optional\">(opcional)</span>",
      ph_message: "¿Qué esperas hacer en Hash Humanity? ¿Alguna pregunta?",
      submit: "Solicitar invitación",
      done_h2: "Estás <em>en la lista</em>.",
      done_p: "Gracias por tu interés. Tenemos tus datos y alguien de nuestro equipo se pondrá en contacto contigo por correo electrónico.",
      launch_full: "Entrar a Hash Humanity",
      footer_tag: "Lo real es escaso.",
      err_name: "Por favor, dinos tu nombre.",
      err_email: "Introduce un correo electrónico válido.",
      err_role: "Selecciona qué te trae aquí.",
      err_offline: "No pudimos contactar nuestros servidores. Comprueba tu conexión e inténtalo de nuevo.",
      sending: "Enviando…",
      err_generic: "Algo salió mal. Inténtalo de nuevo."
    }
  },


  /* ==========================================================
     FRENCH
     ========================================================== */

  fr: {

    home: {
      nav_learn: "Mission",
      nav_join: "Rejoindre",
      eyebrow: "Protégé par HumanKey",
      h1: "Le réel est<br /><em>rare.</em>",
      lead: "Hash Humanity est un réseau social construit autour de <strong>vraies personnes.</strong> HumanKey rend les réseaux de bots, les identités multiples et l'engagement artificiel beaucoup plus difficiles à déployer à grande échelle.",
      launch: "Entrer dans Hash Humanity",
      mission: "Notre mission",
      member_lbl: "humains et toujours plus",
      values_human: "Priorité aux humains",
      values_privacy: "Confidentialité préservée",
      values_algorithm: "Pas d'algorithmes de rage bait",
      values_conversation: "Vraies conversations",
      statement_kicker: "HASH HUMANITY",
      statement_h2: "Les réseaux sociaux sont devenus autre chose.<br /><em>Nous voulons retrouver l'humain.</em>",
      statement_p: "Pas d'essaim de bots imitant l'opinion publique. Pas de plateforme construite autour de l'indignation. Pas de machine infinie d'engagement artificiel. Hash Humanity est construit autour de vraies personnes, de vraies voix et de vraies conversations.",
      hk_kicker: "HUMANKEY",
      hk_h2: "Preuve humaine.<br /><em>Sans renoncer à qui vous êtes.</em>",
      hk_p: "HumanKey est la couche de preuve de personne derrière Hash Humanity. Elle vise à établir qu'une personne réelle, vivante et unique se trouve derrière un compte tout en minimisant les informations personnelles nécessaires.",
      hk_link: "Découvrir HumanKey →",
      join_kicker: "ENTREZ DANS L'INTERNET HUMAIN",
      join_h2: "Venez comme<br /><em>vous êtes.</em>",
      join_p: "Entrez dans un réseau social construit autour des personnes plutôt que de l'engagement artificiel.",
      read_mission: "Lire la mission",
      fineprint: "<strong>Votre visage n'est pas votre mot de passe.</strong> HumanKey est conçu pour minimiser les informations personnelles nécessaires pour établir qu'un compte appartient à une vraie personne.",
      footer_tag: "Le réel est rare."
    },

    mission: {
      back: "← Retour",
      launch: "Entrer",
      eyebrow: "La mission derrière Hash Humanity",
      h1: "Internet a<br /><em>un problème d'identité.</em>",
      lead: "En ligne, un compte ressemble à une personne. <strong>Mais un compte n'est pas la preuve d'une personne.</strong> Les logiciels et les opérateurs coordonnés peuvent créer et amplifier des identités à une échelle qu'un humain ordinaire ne peut égaler.",
      pull: "Hash Humanity commence par une autre question : <span>qui est réellement humain ?</span>",

      core_kicker: "L'IDÉE CENTRALE",
      core_h2: "Internet n'a pas besoin de plus de comptes.<br /><em>Il a besoin d'humains responsables.</em>",
      core_p: "Hash Humanity repose sur la preuve de personne. Avant qu'un compte ne devienne une voix supplémentaire dans le réseau, HumanKey cherche à établir qu'une personne réelle, vivante et unique se trouve derrière.",

      problem_kicker: "LE PROBLÈME",
      problem_h2: "Internet ne sait pas toujours distinguer<br /><em>une foule d'une machine.</em>",

      problem1_idx: "01 / CRÉATION DE COMPTES",
      problem1_h3: "Créer une nouvelle identité coûte peu.",
      problem1_p: "Sur les plateformes classiques, un nouveau compte peut ne nécessiter qu'une autre adresse e-mail, un autre numéro de téléphone, un processus automatisé ou des identifiants compromis.",

      problem2_idx: "02 / ÉCHELLE",
      problem2_h3: "L'automatisation change l'échelle du problème.",
      problem2_p: "Une personne a un temps et une attention limités. Un logiciel n'a pas les mêmes contraintes et peut publier, répondre, suivre, réagir et envoyer des messages continuellement.",

      problem3_idx: "03 / FAUX CONSENSUS",
      problem3_h3: "Dix mille comptes peuvent ressembler à dix mille personnes.",
      problem3_p: "Les likes, réponses, reposts et messages répétés peuvent donner l'impression d'une popularité ou d'un consensus qui n'existe pas réellement.",

      problem4_idx: "04 / IDENTITÉS JETABLES",
      problem4_h3: "Une exclusion compte moins lorsqu'un nouveau compte ne coûte presque rien.",
      problem4_p: "Lorsqu'une identité abusive peut être immédiatement remplacée, la modération devient un cycle sans fin tandis que l'opérateur revient sous une autre identité.",

      problem5_idx: "05 / CONFIANCE",
      problem5_h3: "À terme, les gens ne savent plus ce qui est réel.",
      problem5_p: "Quand les humains ne peuvent plus distinguer les personnes authentiques des identités automatisées et coordonnées, la confiance dans la conversation elle-même s'érode.",

      bots_kicker: "CE QUE L'AUTOMATISATION PEUT FAIRE",
      bots_h2: "Un bot n'a pas besoin d'être intelligent.<br /><em>Il doit pouvoir passer à l'échelle.</em>",
      bots_p: "Automatisation, fermes de comptes, IA générative, identifiants volés et opérateurs coordonnés peuvent reproduire une activité qui demandait autrefois beaucoup de personnes.",

      bot1_h3: "Fabriquer de l'engagement.",
      bot1_p: "Des identités automatisées peuvent suivre, réagir, republier et générer des commentaires afin de créer une activité apparemment organique.",

      bot2_h3: "Simuler l'opinion publique.",
      bot2_p: "Des réseaux coordonnés peuvent répéter des récits et créer une apparence artificielle d'accord ou de popularité.",

      bot3_h3: "Usurper des personnes et des institutions.",
      bot3_p: "De faux comptes peuvent copier noms, images, marques et styles d'écriture afin de commettre des fraudes ou diffuser de fausses informations.",

      bot4_h3: "Atteindre les gens à la vitesse d'une machine.",
      bot4_p: "Les systèmes automatisés peuvent publier, envoyer des messages et toucher de grandes audiences beaucoup plus vite qu'un humain.",

      bot5_h3: "Adapter le contenu avec l'IA.",
      bot5_p: "Les systèmes génératifs peuvent produire beaucoup de textes, images et contenus synthétiques uniques, ce qui rend certaines campagnes automatisées plus difficiles à reconnaître.",

      bot6_h3: "Revenir après suppression.",
      bot6_p: "Si la création de comptes reste bon marché, supprimer un compte malveillant ne supprime pas l'opérateur qui se trouve derrière.",

      scale_kicker: "L'ÉCHELLE EST RÉELLE",
      scale_label: "tentatives d'inscription automatisées ou frauduleuses bloquées chaque heure par Microsoft",
      scale_p: "Microsoft a indiqué avoir bloqué en moyenne environ 1,6 million de tentatives d'inscription automatisées ou frauduleuses par heure pendant la période couverte par son Digital Defense Report 2025. Cela montre que la création automatisée d'identités existe à une échelle industrielle.",

      one_kicker: "LE MODÈLE HASH HUMANITY",
      one_human: "HUMAIN",
      one_account: "COMPTE",
      one_h2: "Une personne ne devrait pas pouvoir ressembler à<br /><em>dix mille personnes.</em>",
      one_p: "HumanKey est conçu autour du principe un humain, un compte. Si chaque compte vérifié supplémentaire nécessite une autre personne unique, la manipulation à grande échelle devient beaucoup plus difficile et coûteuse.",

      humankey_kicker: "HUMANKEY",
      humankey_h2: "Preuve d'humanité.<br /><em>Pas preuve d'identité.</em>",
      humankey_p: "HumanKey est le système de preuve de personne de Hash Humanity. Son rôle n'est pas de découvrir votre identité, mais d'établir qu'une personne réelle et vivante demande l'accès et de vérifier si elle s'est déjà inscrite.",

      hk1_h3: "Le consentement vient d'abord.",
      hk1_p: "HumanKey démarre après l'accord de l'utilisateur. L'accès à la caméra et le traitement biométrique ne sont pas destinés à se produire silencieusement.",

      hk2_h3: "La présence vérifie une personne réelle.",
      hk2_p: "Un contrôle de présence aide à déterminer si la caméra voit une personne vivante plutôt qu'une photo statique ou une simple reproduction.",

      hk3_h3: "Une représentation biométrique mathématique est créée.",
      hk3_p: "HumanKey dérive une représentation faciale mathématique destinée à la comparaison et à la détection de doublons, pas à créer un profil public.",

      hk4_h3: "HumanKey recherche une inscription existante.",
      hk4_p: "La représentation peut être comparée aux représentations déjà inscrites afin de déterminer si la même personne possède déjà un compte.",

      hk5_h3: "La personne devient une preuve respectueuse de la vie privée.",
      hk5_p: "Après vérification, HumanKey peut utiliser des preuves cryptographiques et des identifiants dérivés afin de confirmer que les exigences ont été satisfaites sans exiger un nom légal public.",

      hk6_h3: "Une passkey devient l'identifiant quotidien.",
      hk6_p: "Après l'inscription, une passkey peut être utilisée pour l'authentification habituelle au lieu de scanner le visage à chaque connexion.",

      hk7_h3: "La biométrie ne revient que lorsque c'est nécessaire.",
      hk7_p: "Le but n'est pas une vérification faciale continue. La biométrie est réservée à l'inscription et à certains scénarios contrôlés de récupération.",

      change_kicker: "CE QUE CELA CHANGE",
      change_h2: "La vérification humaine ne répare pas Internet à elle seule.<br /><em>Elle change ce qui est possible.</em>",

      change1_h: "Les fermes de bots deviennent plus difficiles à développer.",
      change1_p: "Un logiciel peut créer une infinité de processus, mais il ne peut pas créer une infinité de personnes uniques.",

      change2_h: "Les comptes jetables deviennent moins jetables.",
      change2_p: "Si une personne ne peut pas simplement créer une autre identité vérifiée, perdre un compte a davantage de conséquences.",

      change3_h: "Le nombre de comptes devient plus significatif.",
      change3_p: "Un compte vérifié ne prouve pas qu'une personne dit la vérité, mais apporte davantage de preuves qu'une personne distincte existe derrière.",

      change4_h: "Fabriquer une foule devient plus coûteux.",
      change4_p: "Les humains peuvent toujours se coordonner, mais un seul opérateur ne peut plus aussi facilement se multiplier en une foule artificielle.",

      change5_h: "Anonyme ne signifie pas artificiel.",
      change5_p: "Une personne peut garder son identité civile privée tout en prouvant qu'un humain unique existe derrière son compte.",

      change6_h: "La réputation peut appartenir à une présence humaine persistante.",
      change6_p: "Quand les identités sont plus difficiles à abandonner, le comportement peut avoir une histoire et des conséquences.",

      privacy_kicker: "CONFIDENTIALITÉ DÈS LA CONCEPTION",
      privacy_h2: "Prouvez que vous êtes humain.<br /><em>Pas qui vous êtes.</em>",
      privacy_p: "La preuve de personne ne devrait pas transformer un réseau social en base de données d'identité. HumanKey est conçu autour de la minimisation des données.",

      privacy1_h: "Aucune identité légale publique requise",
      privacy1_p: "Les utilisateurs peuvent participer sans publier leur nom légal ou d'autres informations civiles.",

      privacy2_h: "La vérification faciale n'est pas la connexion habituelle",
      privacy2_p: "Les passkeys sont destinées à l'authentification courante après l'inscription HumanKey.",

      privacy3_h: "Unicité, pas surveillance",
      privacy3_p: "Le système biométrique sert à établir l'unicité de la personne, pas à suivre ses activités.",

      limits_kicker: "DISTINCTION IMPORTANTE",
      limits_h2: "Un humain vérifié peut toujours être<br /><em>dans l'erreur, malhonnête ou pénible.</em>",
      limits_p1: "HumanKey prouve la présence d'une personne, pas son caractère. Il ne peut pas déterminer si une affirmation est vraie ni empêcher les humains de mentir ou de se coordonner.",
      limits_p2: "Il peut cependant réduire l'un des plus grands multiplicateurs de force d'Internet : la possibilité pour un seul opérateur de se faire passer facilement pour un nombre illimité de personnes indépendantes.",

      final_kicker: "LA MISSION",
      final_h2: "Rendre Internet<br /><em>humain à nouveau.</em>",
      final_p: "Hash Humanity explore ce que les réseaux sociaux peuvent devenir lorsqu'ils commencent par une ressource qu'un logiciel ne peut pas fabriquer : un véritable être humain.",
      launch_now: "Entrer dans Hash Humanity",
      home_link: "Retour à l'accueil",
      footer_tag: "Le réel est rare."
    }
  },


  /* ==========================================================
     PORTUGUESE
     ========================================================== */

  pt: {

    home: {
      nav_learn: "Missão",
      nav_join: "Entrar",
      eyebrow: "Protegido pelo HumanKey",
      h1: "O real é<br /><em>raro.</em>",
      lead: "Hash Humanity é uma rede social construída em torno de <strong>pessoas reais.</strong> O HumanKey ajuda a tornar redes de bots, identidades duplicadas e engajamento artificial muito mais difíceis de escalar.",
      launch: "Entrar no Hash Humanity",
      mission: "Nossa missão",
      member_lbl: "humanos e crescendo",
      values_human: "Feito para humanos",
      values_privacy: "Privacidade preservada",
      values_algorithm: "Sem algoritmos de rage bait",
      values_conversation: "Conversa real",
      statement_kicker: "HASH HUMANITY",
      statement_h2: "As redes sociais viraram outra coisa.<br /><em>Queremos a parte humana de volta.</em>",
      statement_p: "Sem enxames de bots fingindo ser opinião pública. Sem uma plataforma construída em torno da indignação. Sem uma máquina infinita de engajamento artificial. Hash Humanity é construída em torno de pessoas, vozes e conversas reais.",
      hk_kicker: "HUMANKEY",
      hk_h2: "Prova humana.<br /><em>Sem abrir mão de quem você é.</em>",
      hk_p: "HumanKey é a camada de prova de pessoa por trás do Hash Humanity. Ele foi projetado para estabelecer que uma pessoa real, viva e única está por trás de uma conta, minimizando as informações pessoais necessárias.",
      hk_link: "Veja como o HumanKey funciona →",
      join_kicker: "ENTRE NA INTERNET HUMANA",
      join_h2: "Venha como<br /><em>você é.</em>",
      join_p: "Entre em uma rede social construída em torno de pessoas, e não de engajamento artificial.",
      read_mission: "Leia a missão",
      footer_tag: "O real é raro."
    },

    mission: {
      back: "← Voltar",
      launch: "Entrar",
      eyebrow: "A missão por trás do Hash Humanity",
      h1: "A internet tem<br /><em>um problema de identidade.</em>",
      lead: "Na internet, uma conta parece uma pessoa. <strong>Mas uma conta não prova que exista uma pessoa por trás.</strong> Software e operadores coordenados podem criar e ampliar identidades numa escala que pessoas comuns não conseguem acompanhar.",
      pull: "Hash Humanity começa com outra pergunta: <span>quem é realmente humano?</span>",
      core_kicker: "A IDEIA CENTRAL",
      core_h2: "A internet não precisa de mais contas.<br /><em>Precisa de humanos responsáveis.</em>",
      core_p: "Hash Humanity é construída em torno de prova de pessoa. Antes que uma conta se torne mais uma voz na rede, HumanKey procura estabelecer que uma pessoa real, viva e única está por trás dela.",
      problem_kicker: "O PROBLEMA",
      problem_h2: "A internet não consegue distinguir com confiança<br /><em>uma multidão de uma máquina.</em>",
      problem1_idx: "01 / CRIAÇÃO DE CONTAS",
      problem1_h3: "Criar outra identidade é barato.",
      problem1_p: "Em plataformas convencionais, outra conta pode exigir pouco mais que outro e-mail, telefone, registro automatizado ou credencial comprometida.",
      problem2_idx: "02 / ESCALA",
      problem2_h3: "A automação muda o tamanho do problema.",
      problem2_p: "Uma pessoa possui tempo e atenção limitados. Software não tem a mesma limitação e pode publicar, responder, seguir, reagir e enviar mensagens continuamente.",
      problem3_idx: "03 / FALSO CONSENSO",
      problem3_h3: "Dez mil contas podem parecer dez mil pessoas.",
      problem3_p: "Curtidas, respostas, repostagens e mensagens repetidas podem criar a aparência de popularidade ou consenso mesmo quando poucas pessoas coordenam tudo.",
      problem4_idx: "04 / DESCARTABILIDADE",
      problem4_h3: "Uma suspensão significa menos quando outra conta custa quase nada.",
      problem4_p: "Quando uma identidade abusiva pode ser substituída imediatamente, a moderação vira um ciclo infinito.",
      problem5_idx: "05 / CONFIANÇA",
      problem5_h3: "Com o tempo, as pessoas deixam de saber o que é real.",
      problem5_p: "Quando pessoas genuínas não podem ser distinguidas de identidades automatizadas e coordenadas, a confiança na própria conversa começa a desaparecer.",
      bots_kicker: "O QUE A AUTOMAÇÃO PODE FAZER",
      bots_h2: "Um bot não precisa ser inteligente.<br /><em>Precisa conseguir escalar.</em>",
      bots_p: "Automação, fazendas de contas, IA generativa, credenciais roubadas e operadores coordenados podem realizar atividades que antes exigiam muitas pessoas.",
      bot1_h3: "Fabricar engajamento.",
      bot1_p: "Identidades automatizadas podem seguir, reagir, repostar e gerar comentários para criar atividade que parece orgânica.",
      bot2_h3: "Simular opinião pública.",
      bot2_p: "Redes coordenadas podem repetir narrativas e criar uma aparência artificial de consenso.",
      bot3_h3: "Imitar pessoas e instituições.",
      bot3_p: "Contas falsas podem copiar nomes, fotos, marcas e estilos de escrita para fraude, desinformação ou engenharia social.",
      bot4_h3: "Alcançar pessoas em velocidade de máquina.",
      bot4_p: "Sistemas automatizados podem publicar e enviar mensagens para grandes públicos muito mais rápido que uma pessoa.",
      bot5_h3: "Adaptar conteúdo com IA.",
      bot5_p: "Sistemas generativos podem criar grandes volumes de texto, imagens e outros materiais sintéticos únicos.",
      bot6_h3: "Voltar depois de serem removidos.",
      bot6_p: "Se criar contas continuar barato, excluir uma conta maliciosa não remove o operador por trás dela.",
      scale_kicker: "A ESCALA É REAL",
      scale_label: "tentativas de cadastro de bots ou contas falsas bloqueadas por hora pela Microsoft",
      scale_p: "A Microsoft informou bloquear em média cerca de 1,6 milhão de tentativas de criação de contas falsas ou impulsionadas por bots por hora no período coberto pelo Digital Defense Report 2025.",
      one_kicker: "O MODELO HASH HUMANITY",
      one_human: "HUMANO",
      one_account: "CONTA",
      one_h2: "Uma pessoa não deveria poder parecer<br /><em>dez mil pessoas.</em>",
      one_p: "HumanKey é projetado em torno de um humano, uma conta. Exigir outra pessoa única para cada conta verificada torna a manipulação em larga escala muito mais difícil e cara.",
      humankey_kicker: "HUMANKEY",
      humankey_h2: "Prova de humanidade.<br /><em>Não prova de identidade.</em>",
      humankey_p: "HumanKey é o sistema de prova de pessoa do Hash Humanity. Seu trabalho não é descobrir quem você é, mas estabelecer que uma pessoa real e viva está solicitando acesso e verificar se ela já se cadastrou.",
      hk1_h3: "O consentimento vem primeiro.",
      hk1_p: "HumanKey começa depois que o usuário concorda com a verificação.",
      hk2_h3: "Liveness verifica uma pessoa real.",
      hk2_p: "Um desafio de liveness ajuda a determinar se a câmera está vendo uma pessoa viva em vez de uma foto ou reprodução básica.",
      hk3_h3: "Uma representação biométrica matemática é criada.",
      hk3_p: "HumanKey deriva uma representação facial matemática para comparação e detecção de duplicidade.",
      hk4_h3: "HumanKey procura outro cadastro.",
      hk4_p: "A representação pode ser comparada com registros existentes para verificar se a mesma pessoa já criou uma conta.",
      hk5_h3: "A humanidade se torna uma prova que preserva privacidade.",
      hk5_p: "Depois da verificação, provas criptográficas podem confirmar pessoa sem exigir nome legal público.",
      hk6_h3: "Uma passkey vira a credencial do dia a dia.",
      hk6_p: "Depois do cadastro, o login normal pode utilizar passkey em vez de repetir a verificação facial.",
      hk7_h3: "Biometria volta apenas quando necessária.",
      hk7_p: "O objetivo não é verificar o rosto continuamente. A biometria é reservada para cadastro e recuperação controlada.",
      change_kicker: "O QUE ISSO MUDA",
      change_h2: "Verificação humana não conserta a internet sozinha.<br /><em>Ela muda o que é possível.</em>",
      change1_h: "Fazendas de bots ficam mais difíceis de escalar.",
      change1_p: "Software pode criar processos ilimitados. Não pode criar seres humanos únicos ilimitados.",
      change2_h: "Contas descartáveis ficam menos descartáveis.",
      change2_p: "Se uma pessoa não pode simplesmente criar outra identidade verificada, perder uma conta passa a ter mais consequência.",
      change3_h: "A quantidade de contas passa a significar mais.",
      change3_p: "Uma conta verificada não prova honestidade, mas fornece evidência mais forte de que existe uma pessoa distinta por trás.",
      change4_h: "Fabricar multidões fica mais caro.",
      change4_p: "Humanos ainda podem se coordenar, mas um operador não consegue se multiplicar tão facilmente em uma multidão artificial.",
      change5_h: "Anônimo não precisa significar artificial.",
      change5_p: "Uma pessoa pode manter sua identidade civil privada e ainda provar que existe um humano único por trás da conta.",
      change6_h: "A reputação pode pertencer a uma presença humana persistente.",
      change6_p: "Quando identidades são mais difíceis de abandonar, comportamento pode ter história e consequência.",
      privacy_kicker: "PRIVACIDADE POR DESIGN",
      privacy_h2: "Prove que você é humano.<br /><em>Não quem você é.</em>",
      privacy_p: "Prova de pessoa não deveria transformar uma rede social em banco de identidade. HumanKey é projetado em torno da minimização de dados.",
      privacy1_h: "Nenhuma identidade legal pública obrigatória",
      privacy1_p: "Usuários podem participar sem publicar nome legal ou outras informações civis.",
      privacy2_h: "Verificação facial não é login comum",
      privacy2_p: "Passkeys são destinadas à autenticação normal após o cadastro no HumanKey.",
      privacy3_h: "Unicidade, não vigilância",
      privacy3_p: "O sistema biométrico existe para estabelecer pessoa e unicidade, não para rastrear atividade.",
      limits_kicker: "DISTINÇÃO IMPORTANTE",
      limits_h2: "Um humano verificado ainda pode estar<br /><em>errado, mentir ou ser um babaca.</em>",
      limits_p1: "HumanKey prova pessoa, não caráter. Ele não determina se uma afirmação é verdadeira e não impede pessoas de mentir ou se coordenar.",
      limits_p2: "O que ele pode fazer é reduzir a capacidade de um operador se passar facilmente por um número ilimitado de pessoas independentes.",
      final_kicker: "A MISSÃO",
      final_h2: "Tornar a internet<br /><em>humana novamente.</em>",
      final_p: "Hash Humanity explora o que uma rede social pode se tornar quando começa com um recurso que o software não consegue fabricar: um ser humano real.",
      launch_now: "Entrar no Hash Humanity",
      home_link: "Voltar ao início",
      footer_tag: "O real é raro."
    }
  },


  /* ==========================================================
     GERMAN
     ========================================================== */

  de: {

    home: {
      nav_learn: "Mission",
      nav_join: "Beitreten",
      eyebrow: "Geschützt durch HumanKey",
      h1: "Echtheit ist<br /><em>selten.</em>",
      lead: "Hash Humanity ist ein soziales Netzwerk rund um <strong>echte Menschen.</strong> HumanKey soll Bot-Netzwerke, doppelte Identitäten und künstliches Engagement erheblich schwerer skalierbar machen.",
      launch: "Hash Humanity öffnen",
      mission: "Unsere Mission",
      member_lbl: "Menschen und es werden mehr",
      values_human: "Menschen zuerst",
      values_privacy: "Datenschutzorientiert",
      values_algorithm: "Keine Rage-Bait-Algorithmen",
      values_conversation: "Echte Gespräche",
      statement_h2: "Soziale Medien wurden zu etwas anderem.<br /><em>Wir wollen den menschlichen Teil zurück.</em>",
      statement_p: "Keine Bot-Schwärme, die öffentliche Meinung vortäuschen. Keine Plattform, die Empörung belohnt. Keine endlose Maschine für künstliches Engagement.",
      hk_h2: "Menschlicher Nachweis.<br /><em>Ohne preiszugeben, wer du bist.</em>",
      hk_p: "HumanKey ist die Proof-of-Personhood-Schicht hinter Hash Humanity. Sie soll nachweisen, dass hinter einem Konto eine echte, lebende und einzigartige Person steht.",
      hk_link: "So funktioniert HumanKey →",
      join_kicker: "BETRITT DAS MENSCHLICHE INTERNET",
      join_h2: "Komm als<br /><em>du selbst.</em>",
      join_p: "Betritt ein soziales Netzwerk, das um Menschen statt künstliches Engagement herum gebaut wurde.",
      read_mission: "Mission lesen",
      footer_tag: "Echtheit ist selten."
    },

    mission: {
      back: "← Zurück",
      launch: "Öffnen",
      eyebrow: "Die Mission hinter Hash Humanity",
      h1: "Das Internet hat<br /><em>ein Identitätsproblem.</em>",
      lead: "Online sieht ein Konto wie eine Person aus. <strong>Aber ein Konto ist kein Beweis für eine Person.</strong> Software und koordinierte Akteure können Identitäten in einem Umfang erzeugen und verstärken, den einzelne Menschen nicht erreichen können.",
      pull: "Hash Humanity beginnt mit einer anderen Frage: <span>Wer ist tatsächlich ein Mensch?</span>",
      core_kicker: "DIE KERNIDEE",
      core_h2: "Das Internet braucht nicht mehr Konten.<br /><em>Es braucht verantwortliche Menschen.</em>",
      core_p: "Hash Humanity basiert auf Proof of Personhood. Bevor ein Konto zu einer weiteren Stimme im Netzwerk wird, soll HumanKey feststellen, dass eine echte, lebende und einzigartige Person dahintersteht.",
      problem_kicker: "DAS PROBLEM",
      problem_h2: "Das Internet kann nicht zuverlässig unterscheiden<br /><em>zwischen einer Menge und einer Maschine.</em>",
      problem1_idx: "01 / KONTOERSTELLUNG",
      problem1_h3: "Eine weitere Identität ist billig.",
      problem1_p: "Auf herkömmlichen Plattformen kann ein neues Konto kaum mehr als eine weitere E-Mail-Adresse, Telefonnummer oder einen automatisierten Registrierungsprozess erfordern.",
      problem2_idx: "02 / SKALIERUNG",
      problem2_h3: "Automatisierung verändert die Größenordnung.",
      problem2_p: "Menschen haben begrenzte Zeit und Aufmerksamkeit. Software kann kontinuierlich posten, antworten, folgen und reagieren.",
      problem3_idx: "03 / FALSCHER KONSENS",
      problem3_h3: "Zehntausend Konten können wie zehntausend Menschen aussehen.",
      problem3_p: "Likes, Antworten und wiederholte Botschaften können Popularität oder Zustimmung vortäuschen.",
      problem4_idx: "04 / WEGWERFIDENTITÄTEN",
      problem4_h3: "Eine Sperre bedeutet weniger, wenn ein neues Konto fast nichts kostet.",
      problem4_p: "Kann eine missbräuchliche Identität sofort ersetzt werden, kehrt derselbe Betreiber einfach mit einem neuen Konto zurück.",
      problem5_idx: "05 / VERTRAUEN",
      problem5_h3: "Irgendwann wissen Menschen nicht mehr, was echt ist.",
      problem5_p: "Wenn echte Menschen nicht von automatisierten oder koordinierten Identitäten unterschieden werden können, schwindet das Vertrauen in die Unterhaltung.",
      bots_kicker: "WAS AUTOMATISIERUNG KANN",
      bots_h2: "Ein Bot muss nicht intelligent sein.<br /><em>Er muss skalierbar sein.</em>",
      bots_p: "Automatisierung, Account-Farmen, generative KI und koordinierte Betreiber können Tätigkeiten ausführen, für die früher viele Menschen nötig waren.",
      bot1_h3: "Engagement herstellen.",
      bot1_p: "Automatisierte Identitäten können folgen, reagieren, teilen und Kommentare erzeugen, um organische Aktivität vorzutäuschen.",
      bot2_h3: "Öffentliche Meinung simulieren.",
      bot2_p: "Koordinierte Netzwerke können Narrative wiederholen und künstliche Zustimmung erzeugen.",
      bot3_h3: "Menschen und Institutionen imitieren.",
      bot3_p: "Gefälschte Konten können Namen, Bilder, Marken und Schreibstile für Betrug oder Manipulation kopieren.",
      bot4_h3: "Menschen mit Maschinengeschwindigkeit erreichen.",
      bot4_p: "Automatisierte Systeme können weit mehr Nachrichten und Inhalte verbreiten als ein einzelner Mensch.",
      bot5_h3: "Inhalte mit KI anpassen.",
      bot5_p: "Generative Systeme können große Mengen einzigartiger synthetischer Inhalte erzeugen.",
      bot6_h3: "Nach einer Sperre zurückkehren.",
      bot6_p: "Bleibt Kontoerstellung billig, beseitigt das Löschen eines Kontos nicht den Betreiber dahinter.",
      scale_kicker: "DIE SKALIERUNG IST REAL",
      scale_label: "botgesteuerte oder gefälschte Registrierungsversuche pro Stunde von Microsoft blockiert",
      scale_p: "Microsoft berichtete für den Zeitraum seines Digital Defense Report 2025 von durchschnittlich rund 1,6 Millionen blockierten botgesteuerten oder gefälschten Registrierungsversuchen pro Stunde.",
      one_kicker: "DAS HASH-HUMANITY-MODELL",
      one_human: "MENSCH",
      one_account: "KONTO",
      one_h2: "Eine Person sollte nicht aussehen können wie<br /><em>zehntausend Menschen.</em>",
      one_p: "HumanKey folgt dem Prinzip ein Mensch, ein Konto. Wenn jedes weitere verifizierte Konto einen weiteren einzigartigen Menschen benötigt, wird großflächige Manipulation deutlich schwieriger.",
      humankey_kicker: "HUMANKEY",
      humankey_h2: "Nachweis des Menschseins.<br /><em>Nicht der Identität.</em>",
      humankey_p: "HumanKey soll feststellen, dass eine echte Person Zugang beantragt und ob dieselbe Person bereits registriert wurde, ohne ihre öffentliche Identität kennen zu müssen.",
      hk1_h3: "Einwilligung zuerst.",
      hk1_p: "HumanKey beginnt erst nach Zustimmung des Nutzers.",
      hk2_h3: "Liveness prüft auf eine lebende Person.",
      hk2_p: "Eine Liveness-Prüfung hilft festzustellen, ob tatsächlich eine lebende Person vor der Kamera steht.",
      hk3_h3: "Eine mathematische biometrische Repräsentation wird erzeugt.",
      hk3_p: "HumanKey erzeugt eine mathematische Gesichtsrepräsentation für Vergleiche und Duplikaterkennung.",
      hk4_h3: "HumanKey prüft auf bestehende Registrierung.",
      hk4_p: "Die Repräsentation kann mit vorhandenen Einträgen verglichen werden, um doppelte Registrierung zu erkennen.",
      hk5_h3: "Personhood wird zu einem datenschutzfreundlichen Nachweis.",
      hk5_p: "Kryptografische Nachweise können bestätigen, dass Personhood-Anforderungen erfüllt wurden, ohne einen öffentlichen Klarnamen zu verlangen.",
      hk6_h3: "Ein Passkey wird zum täglichen Zugang.",
      hk6_p: "Nach der Registrierung kann ein Passkey für die normale Anmeldung verwendet werden.",
      hk7_h3: "Biometrie nur, wenn sie benötigt wird.",
      hk7_p: "Das Ziel ist keine dauerhafte Gesichtskontrolle. Biometrie ist für Registrierung und kontrollierte Wiederherstellung vorgesehen.",
      change_kicker: "WAS SICH ÄNDERT",
      change_h2: "Menschliche Verifizierung repariert das Internet nicht allein.<br /><em>Sie verändert, was möglich ist.</em>",
      change1_h: "Bot-Farmen werden schwerer skalierbar.",
      change1_p: "Software kann beliebig viele Prozesse erzeugen. Sie kann keine beliebig vielen einzigartigen Menschen erzeugen.",
      change2_h: "Wegwerfkonten werden weniger wegwerfbar.",
      change2_p: "Kann eine Person nicht sofort eine weitere verifizierte Identität erstellen, hat der Verlust eines Kontos mehr Gewicht.",
      change3_h: "Kontozahlen werden aussagekräftiger.",
      change3_p: "Ein verifiziertes Konto beweist keine Wahrheit, aber es liefert stärkere Hinweise auf eine eigenständige Person.",
      change4_h: "Künstliche Menschenmengen werden teurer.",
      change4_p: "Menschen können sich weiterhin koordinieren, aber ein Betreiber kann sich nicht so leicht in eine künstliche Menge vervielfachen.",
      change5_h: "Anonym muss nicht künstlich bedeuten.",
      change5_p: "Eine Person kann ihre zivile Identität privat halten und dennoch ihre Einzigartigkeit als Mensch nachweisen.",
      change6_h: "Reputation kann an eine dauerhafte menschliche Präsenz gebunden sein.",
      change6_p: "Wenn Identitäten schwerer auszutauschen sind, kann Verhalten Geschichte und Konsequenzen haben.",
      privacy_kicker: "DATENSCHUTZ DURCH DESIGN",
      privacy_h2: "Beweise, dass du ein Mensch bist.<br /><em>Nicht, wer du bist.</em>",
      privacy_p: "Proof of Personhood sollte ein soziales Netzwerk nicht in eine Identitätsdatenbank verwandeln. HumanKey ist auf Datenminimierung ausgelegt.",
      privacy1_h: "Keine öffentliche gesetzliche Identität erforderlich",
      privacy1_p: "Nutzer können teilnehmen, ohne ihren gesetzlichen Namen öffentlich zu machen.",
      privacy2_h: "Gesichtsprüfung ist nicht die normale Anmeldung",
      privacy2_p: "Passkeys sind für die alltägliche Authentifizierung vorgesehen.",
      privacy3_h: "Einzigartigkeit statt Überwachung",
      privacy3_p: "Biometrie dient dem Nachweis von Personhood und Einzigartigkeit, nicht dem Tracking.",
      limits_kicker: "WICHTIGE UNTERSCHEIDUNG",
      limits_h2: "Ein verifizierter Mensch kann trotzdem<br /><em>falschliegen, lügen oder ein Arschloch sein.</em>",
      limits_p1: "HumanKey beweist Personhood, nicht Charakter. Es kann nicht bestimmen, ob eine Aussage wahr ist.",
      limits_p2: "Es kann jedoch die Möglichkeit reduzieren, dass ein einzelner Betreiber billig wie eine unbegrenzte Zahl unabhängiger Menschen erscheint.",
      final_kicker: "DIE MISSION",
      final_h2: "Das Internet wieder<br /><em>menschlich machen.</em>",
      final_p: "Hash Humanity untersucht, was soziale Medien werden können, wenn das Netzwerk mit etwas beginnt, das Software nicht herstellen kann: einem echten Menschen.",
      launch_now: "Hash Humanity öffnen",
      home_link: "Zurück zur Startseite",
      footer_tag: "Echtheit ist selten."
    }
  },


  /* ==========================================================
     SIMPLIFIED CHINESE
     ========================================================== */

  zh: {

    home: {
      nav_learn: "使命",
      nav_join: "加入",
      eyebrow: "由 HumanKey 保护",
      h1: "真实，<br /><em>很稀有。</em>",
      lead: "Hash Humanity 是一个围绕<strong>真实的人</strong>构建的社交网络。HumanKey 让机器人网络、重复身份和虚假互动更难大规模扩张。",
      launch: "进入 Hash Humanity",
      mission: "我们的使命",
      member_lbl: "位真实用户，并持续增长",
      values_human: "以人为本",
      values_privacy: "保护隐私",
      values_algorithm: "无愤怒诱导算法",
      values_conversation: "真实交流",
      statement_h2: "社交媒体已经变成了另一种东西。<br /><em>我们想把“人”找回来。</em>",
      statement_p: "没有假装成公众意见的机器人群。没有靠愤怒维持参与的平台。没有无休止的人造互动机器。Hash Humanity 围绕真实的人、真实的声音和真实的交流构建。",
      hk_h2: "证明你是人。<br /><em>不必暴露你是谁。</em>",
      hk_p: "HumanKey 是 Hash Humanity 背后的真人证明层，用于证明账户背后存在一个真实、活体且唯一的人，同时尽量减少所需的个人信息。",
      hk_link: "了解 HumanKey →",
      join_kicker: "进入人类互联网",
      join_h2: "做真实的<br /><em>自己。</em>",
      join_p: "进入一个围绕人类而不是虚假互动构建的社交网络。",
      read_mission: "阅读使命",
      footer_tag: "真实，很稀有。"
    },

    mission: {
      back: "← 返回",
      launch: "进入",
      eyebrow: "Hash Humanity 背后的使命",
      h1: "互联网存在<br /><em>身份问题。</em>",
      lead: "在网上，一个账户看起来就像一个人。<strong>但账户并不能证明背后真的有一个人。</strong> 软件和协调操作者可以创建、控制并放大大量身份，其规模远超普通人的能力。",
      pull: "Hash Humanity 从另一个问题开始：<span>谁才是真正的人？</span>",
      core_kicker: "核心理念",
      core_h2: "互联网不需要更多账户。<br /><em>它需要真正承担责任的人。</em>",
      core_p: "Hash Humanity 围绕真人证明构建。在一个账户成为网络中的声音之前，HumanKey 会尝试确认其背后存在一个真实、活体且唯一的人。",
      problem_kicker: "问题",
      problem_h2: "互联网无法可靠地区分<br /><em>真实人群与机器制造的人群。</em>",
      problem1_idx: "01 / 账户创建",
      problem1_h3: "创建另一个身份成本太低。",
      problem1_p: "在传统平台上，新账户可能只需要另一个邮箱、电话号码、自动注册流程或被盗凭证。",
      problem2_idx: "02 / 规模",
      problem2_h3: "自动化改变了问题的规模。",
      problem2_p: "人的时间和注意力有限，而软件没有同样的限制。自动系统可以持续发布、回复、关注和互动。",
      problem3_idx: "03 / 虚假共识",
      problem3_h3: "一万个账户可以看起来像一万个人。",
      problem3_p: "点赞、回复、转发和重复观点可以制造受欢迎或广泛共识的假象。",
      problem4_idx: "04 / 一次性身份",
      problem4_h3: "如果新账户几乎没有成本，封禁的意义就会降低。",
      problem4_p: "当滥用账户可以立即被替代时，平台删除的只是账户，而不是背后的操作者。",
      problem5_idx: "05 / 信任",
      problem5_h3: "最终，人们会不知道什么是真的。",
      problem5_p: "当真实用户无法与自动化身份、协调账户和冒充者区分时，对交流本身的信任就会下降。",
      bots_kicker: "自动化能做什么",
      bots_h2: "机器人不需要非常聪明。<br /><em>它只需要能够扩张。</em>",
      bots_p: "自动化、账号农场、生成式 AI、被盗凭证和协调操作者可以完成过去需要大量人力的活动。",
      bot1_h3: "制造互动。",
      bot1_p: "自动账户可以关注、点赞、转发和生成评论，让活动看起来像自然产生。",
      bot2_h3: "模拟公众意见。",
      bot2_p: "协调网络可以重复叙事、淹没回复并制造虚假的一致意见。",
      bot3_h3: "冒充个人和机构。",
      bot3_p: "假账户可以复制姓名、照片、品牌和写作风格，用于诈骗、误导或社会工程。",
      bot4_h3: "以机器速度接触人群。",
      bot4_p: "自动系统可以比单个人更快地发送消息、发布内容并触达大量用户。",
      bot5_h3: "利用 AI 调整内容。",
      bot5_p: "生成式系统可以大量创建不同的文本、图像和其他合成内容。",
      bot6_h3: "删除后重新出现。",
      bot6_p: "如果创建账户仍然便宜，删除恶意账户并不能消除背后的操作者。",
      scale_kicker: "规模是真实存在的",
      scale_label: "微软每小时阻止的机器人或虚假账户注册尝试",
      scale_p: "微软在其 2025 年数字防御报告所覆盖的时期内表示，平均每小时阻止约 160 万次机器人驱动或虚假账户注册尝试。这说明自动身份创建已经达到工业规模。",
      one_kicker: "HASH HUMANITY 模型",
      one_human: "人",
      one_account: "账户",
      one_h2: "一个人不应该能够看起来像<br /><em>一万个人。</em>",
      one_p: "HumanKey 围绕“一人一账户”设计。如果每一个额外的验证账户都需要另一个独立的真人，大规模操纵就会变得更困难、更昂贵。",
      humankey_kicker: "HUMANKEY",
      humankey_h2: "证明你是人。<br /><em>不是证明你的身份。</em>",
      humankey_p: "HumanKey 的任务不是知道你是谁，而是确认一个真实、活体的人正在申请访问，并帮助判断这个人是否已经注册过。",
      hk1_h3: "首先获得同意。",
      hk1_p: "只有在用户同意验证流程后 HumanKey 才会开始。",
      hk2_h3: "活体检测确认真人。",
      hk2_p: "活体检测用于判断摄像头前是否是真实活体参与者，而不是静态照片或简单回放。",
      hk3_h3: "生成数学化的生物特征表示。",
      hk3_p: "HumanKey 生成用于比对的数学面部表示，其用途是重复人员检测，而不是建立公开身份档案。",
      hk4_h3: "检查是否已经注册。",
      hk4_p: "系统可将新的表示与已有记录进行比较，以判断同一人是否已拥有账户。",
      hk5_h3: "将真人状态转换为隐私保护证明。",
      hk5_p: "验证通过后，可以利用密码学证明确认真人要求已满足，而无需公开法定姓名。",
      hk6_h3: "Passkey 成为日常登录凭证。",
      hk6_p: "注册后，日常登录可以使用 passkey，而无需每次扫描人脸。",
      hk7_h3: "只在必要时再次使用生物识别。",
      hk7_p: "目标不是持续进行人脸验证。生物识别主要用于注册和受控恢复场景。",
      change_kicker: "这会改变什么",
      change_h2: "真人验证无法独自修复互联网。<br /><em>但它会改变什么事情能够发生。</em>",
      change1_h: "机器人农场更难扩张。",
      change1_p: "软件可以创建无限进程，但不能创造无限独立的人类。",
      change2_h: "一次性账户不再那么容易被替换。",
      change2_p: "如果一个人无法立即创建另一个验证身份，失去账户就更有实际影响。",
      change3_h: "账户数量更有意义。",
      change3_p: "验证账户并不能证明一个人说的是真话，但能更有力地说明背后存在一个独立的人。",
      change4_h: "制造虚假人群的成本更高。",
      change4_p: "人仍然可以组织协作，但单一操作者更难廉价地把自己放大成一群“不同的人”。",
      change5_h: "匿名不等于虚假。",
      change5_p: "用户可以不公开现实身份，同时仍证明账户背后存在一个唯一真人。",
      change6_h: "声誉可以属于持续存在的真人。",
      change6_p: "当身份更难随意丢弃时，行为就会留下历史并产生后果。",
      privacy_kicker: "隐私优先设计",
      privacy_h2: "证明你是人。<br /><em>无需证明你是谁。</em>",
      privacy_p: "真人证明不应该把社交网络变成身份数据库。HumanKey 以数据最小化为设计目标。",
      privacy1_h: "无需公开法定身份",
      privacy1_p: "用户无需公开真实姓名或其他民事身份信息即可参与。",
      privacy2_h: "人脸验证不是日常登录方式",
      privacy2_p: "完成 HumanKey 注册后，日常认证应由 passkey 完成。",
      privacy3_h: "证明唯一性，而不是监控",
      privacy3_p: "生物识别系统用于证明真人和唯一性，而不是跟踪用户行为。",
      limits_kicker: "重要区别",
      limits_h2: "通过真人验证的人仍然可能<br /><em>犯错、说谎或表现得很糟糕。</em>",
      limits_p1: "HumanKey 证明的是“这是一个人”，而不是这个人的品格。它无法判断一句话是否真实，也无法阻止人们说谎或协同行动。",
      limits_p2: "它能够削弱互联网最强大的放大器之一：让一个操作者廉价地伪装成无限多个独立的人。",
      final_kicker: "使命",
      final_h2: "让互联网重新<br /><em>属于人类。</em>",
      final_p: "Hash Humanity 在探索：如果社交网络从软件无法制造的资源开始，会发生什么？这个资源就是一个真实的人。",
      launch_now: "进入 Hash Humanity",
      home_link: "返回首页",
      footer_tag: "真实，很稀有。"
    }
  },


  /* ==========================================================
     MALAY
     ========================================================== */

  ms: {

    home: {
      nav_learn: "Misi",
      nav_join: "Sertai",
      eyebrow: "Dilindungi oleh HumanKey",
      h1: "Yang nyata itu<br /><em>jarang.</em>",
      lead: "Hash Humanity ialah rangkaian sosial yang dibina berasaskan <strong>manusia sebenar.</strong> HumanKey membantu menjadikan rangkaian bot, identiti pendua dan penglibatan tiruan jauh lebih sukar untuk diperluaskan.",
      launch: "Masuk Hash Humanity",
      mission: "Misi Kami",
      member_lbl: "manusia dan terus bertambah",
      values_human: "Manusia diutamakan",
      values_privacy: "Privasi dipelihara",
      values_algorithm: "Tiada algoritma rage bait",
      values_conversation: "Perbualan sebenar",
      statement_h2: "Media sosial telah menjadi sesuatu yang lain.<br /><em>Kami mahu unsur manusia kembali.</em>",
      statement_p: "Tiada kawanan bot berpura-pura menjadi pendapat awam. Tiada platform dibina berdasarkan kemarahan. Tiada mesin penglibatan tiruan tanpa henti.",
      hk_h2: "Bukti manusia.<br /><em>Tanpa menyerahkan siapa anda.</em>",
      hk_p: "HumanKey ialah lapisan bukti keperibadian di belakang Hash Humanity. Ia direka untuk menentukan bahawa manusia sebenar, hidup dan unik berada di belakang sesuatu akaun.",
      hk_link: "Lihat cara HumanKey berfungsi →",
      join_kicker: "MASUK KE INTERNET MANUSIA",
      join_h2: "Datang sebagai<br /><em>diri anda.</em>",
      join_p: "Masuk ke rangkaian sosial yang dibina di sekitar manusia dan bukannya penglibatan tiruan.",
      read_mission: "Baca Misi",
      footer_tag: "Yang nyata itu jarang."
    },

    mission: {
      back: "← Kembali",
      launch: "Masuk",
      eyebrow: "Misi di sebalik Hash Humanity",
      h1: "Internet mempunyai<br /><em>masalah identiti.</em>",
      lead: "Dalam talian, sebuah akaun kelihatan seperti seorang manusia. <strong>Tetapi akaun bukan bukti bahawa manusia sebenar berada di belakangnya.</strong>",
      pull: "Hash Humanity bermula dengan soalan yang berbeza: <span>siapa yang benar-benar manusia?</span>",
      core_kicker: "IDEA UTAMA",
      core_h2: "Internet tidak memerlukan lebih banyak akaun.<br /><em>Ia memerlukan manusia yang bertanggungjawab.</em>",
      core_p: "Hash Humanity dibina berdasarkan bukti keperibadian. HumanKey direka untuk menentukan bahawa manusia sebenar, hidup dan unik berada di belakang sesuatu akaun.",
      problem_kicker: "MASALAH",
      problem_h2: "Internet tidak boleh membezakan dengan pasti<br /><em>antara orang ramai dan mesin.</em>",
      problem1_idx: "01 / PENCIPTAAN AKAUN",
      problem1_h3: "Mencipta identiti lain terlalu murah.",
      problem1_p: "Pada platform biasa, akaun tambahan mungkin hanya memerlukan e-mel, nombor telefon atau aliran pendaftaran automatik yang lain.",
      problem2_idx: "02 / SKALA",
      problem2_h3: "Automasi mengubah skala masalah.",
      problem2_p: "Manusia mempunyai masa dan perhatian terhad. Perisian boleh menyiarkan, membalas, mengikuti dan bertindak balas secara berterusan.",
      problem3_idx: "03 / KONSENSUS PALSU",
      problem3_h3: "Sepuluh ribu akaun boleh kelihatan seperti sepuluh ribu manusia.",
      problem3_p: "Suka, balasan, perkongsian dan mesej berulang boleh mewujudkan gambaran populariti atau persetujuan palsu.",
      problem4_idx: "04 / IDENTITI SEMENTARA",
      problem4_h3: "Sekatan kurang bermakna jika akaun baharu hampir percuma.",
      problem4_p: "Jika identiti yang menyalahgunakan sistem boleh diganti dengan segera, operator yang sama hanya kembali dengan akaun lain.",
      problem5_idx: "05 / KEPERCAYAAN",
      problem5_h3: "Akhirnya orang tidak tahu apa yang nyata.",
      problem5_p: "Apabila manusia sebenar tidak dapat dibezakan daripada identiti automatik, kepercayaan terhadap perbualan mula terhakis.",
      bots_kicker: "APA YANG BOLEH DILAKUKAN AUTOMASI",
      bots_h2: "Bot tidak perlu bijak.<br /><em>Ia perlu boleh diskalakan.</em>",
      bots_p: "Automasi, ladang akaun, AI generatif dan operator terselaras boleh melakukan aktiviti yang dahulunya memerlukan ramai manusia.",
      bot1_h3: "Mencipta penglibatan palsu.",
      bot1_p: "Identiti automatik boleh mengikuti, bertindak balas, berkongsi dan menjana komen untuk menghasilkan aktiviti yang kelihatan organik.",
      bot2_h3: "Mensimulasikan pendapat awam.",
      bot2_p: "Rangkaian terselaras boleh mengulang naratif dan mewujudkan persetujuan palsu.",
      bot3_h3: "Menyamar sebagai manusia dan organisasi.",
      bot3_p: "Akaun palsu boleh meniru nama, gambar, jenama atau gaya penulisan.",
      bot4_h3: "Mencapai manusia pada kelajuan mesin.",
      bot4_p: "Sistem automatik boleh menghantar mesej dan kandungan kepada khalayak besar dengan sangat pantas.",
      bot5_h3: "Menyesuaikan kandungan menggunakan AI.",
      bot5_p: "Sistem generatif boleh menghasilkan jumlah besar kandungan sintetik yang unik.",
      bot6_h3: "Kembali selepas dibuang.",
      bot6_p: "Jika penciptaan akaun kekal murah, memadam akaun tidak menghapuskan operator di belakangnya.",
      scale_kicker: "SKALANYA NYATA",
      scale_label: "percubaan pendaftaran bot atau akaun palsu disekat setiap jam oleh Microsoft",
      scale_p: "Microsoft melaporkan purata kira-kira 1.6 juta percubaan pendaftaran yang dipacu bot atau akaun palsu disekat setiap jam dalam tempoh laporan Digital Defense Report 2025.",
      one_kicker: "MODEL HASH HUMANITY",
      one_human: "MANUSIA",
      one_account: "AKAUN",
      one_h2: "Seorang manusia tidak sepatutnya kelihatan seperti<br /><em>sepuluh ribu manusia.</em>",
      one_p: "HumanKey direka berasaskan satu manusia, satu akaun. Setiap akaun tambahan memerlukan manusia unik yang lain, menjadikan manipulasi besar-besaran lebih sukar.",
      humankey_kicker: "HUMANKEY",
      humankey_h2: "Bukti kemanusiaan.<br /><em>Bukan bukti identiti.</em>",
      humankey_p: "HumanKey tidak perlu mengetahui siapa anda. Ia perlu menentukan bahawa manusia sebenar sedang meminta akses dan sama ada manusia itu telah mendaftar.",
      hk1_h3: "Persetujuan didahulukan.",
      hk1_p: "HumanKey bermula selepas pengguna bersetuju dengan proses pengesahan.",
      hk2_h3: "Liveness mengesahkan manusia hidup.",
      hk2_p: "Cabaran liveness membantu menentukan sama ada kamera melihat peserta hidup dan bukannya imej statik atau ulang tayang.",
      hk3_h3: "Perwakilan biometrik matematik dicipta.",
      hk3_p: "HumanKey menghasilkan perwakilan wajah matematik untuk perbandingan dan pengesanan pendua.",
      hk4_h3: "HumanKey menyemak pendaftaran sedia ada.",
      hk4_p: "Perwakilan boleh dibandingkan dengan pendaftaran sedia ada untuk menentukan sama ada manusia yang sama sudah mempunyai akaun.",
      hk5_h3: "Keperibadian menjadi bukti yang menjaga privasi.",
      hk5_p: "Bukti kriptografi boleh mengesahkan syarat kemanusiaan tanpa memerlukan nama undang-undang awam.",
      hk6_h3: "Passkey menjadi kelayakan harian.",
      hk6_p: "Selepas pendaftaran, passkey boleh digunakan untuk log masuk biasa.",
      hk7_h3: "Biometrik digunakan semula hanya apabila perlu.",
      hk7_p: "Matlamatnya bukan pengesahan wajah berterusan. Biometrik ditujukan kepada pendaftaran dan pemulihan terkawal.",
      change_kicker: "APA YANG BERUBAH",
      change_h2: "Pengesahan manusia tidak membaiki internet sendirian.<br /><em>Ia mengubah apa yang mungkin berlaku.</em>",
      change1_h: "Ladang bot menjadi lebih sukar untuk diskalakan.",
      change1_p: "Perisian boleh mencipta proses tanpa had. Ia tidak boleh mencipta manusia unik tanpa had.",
      change2_h: "Akaun sementara menjadi kurang mudah diganti.",
      change2_p: "Jika seseorang tidak boleh mencipta identiti disahkan baharu dengan mudah, kehilangan akaun membawa lebih banyak akibat.",
      change3_h: "Bilangan akaun menjadi lebih bermakna.",
      change3_p: "Akaun disahkan tidak membuktikan seseorang benar, tetapi memberi bukti lebih kuat bahawa manusia berbeza berada di belakangnya.",
      change4_h: "Orang ramai palsu menjadi lebih mahal.",
      change4_p: "Manusia masih boleh berkoordinasi, tetapi seorang operator lebih sukar menggandakan dirinya menjadi orang ramai buatan.",
      change5_h: "Tanpa nama tidak semestinya tiruan.",
      change5_p: "Seseorang boleh merahsiakan identiti awam sambil membuktikan bahawa manusia unik berada di belakang akaun.",
      change6_h: "Reputasi boleh menjadi milik kehadiran manusia yang berterusan.",
      change6_p: "Apabila identiti lebih sukar dibuang, tingkah laku boleh mempunyai sejarah dan akibat.",
      privacy_kicker: "PRIVASI SEJAK REKA BENTUK",
      privacy_h2: "Buktikan anda manusia.<br /><em>Bukan siapa anda.</em>",
      privacy_p: "Bukti keperibadian tidak sepatutnya menukar rangkaian sosial menjadi pangkalan data identiti. HumanKey direka berdasarkan peminimuman data.",
      privacy1_h: "Identiti undang-undang awam tidak diperlukan",
      privacy1_p: "Pengguna boleh mengambil bahagian tanpa menerbitkan nama sah mereka.",
      privacy2_h: "Pengesahan wajah bukan log masuk biasa",
      privacy2_p: "Passkey digunakan untuk pengesahan harian selepas pendaftaran.",
      privacy3_h: "Keunikan, bukan pengawasan",
      privacy3_p: "Biometrik digunakan untuk membuktikan keperibadian dan keunikan, bukan menjejaki aktiviti.",
      limits_kicker: "PERBEZAAN PENTING",
      limits_h2: "Manusia yang disahkan masih boleh<br /><em>salah, menipu atau menjadi menyusahkan.</em>",
      limits_p1: "HumanKey membuktikan keperibadian, bukan watak atau kebenaran.",
      limits_p2: "Ia boleh mengurangkan keupayaan seorang operator untuk menyamar dengan murah sebagai bilangan manusia bebas yang tidak terhad.",
      final_kicker: "MISI",
      final_h2: "Jadikan internet<br /><em>manusia semula.</em>",
      final_p: "Hash Humanity meneroka apa yang boleh menjadi media sosial apabila rangkaian bermula dengan sesuatu yang tidak boleh dicipta oleh perisian: manusia sebenar.",
      launch_now: "Masuk Hash Humanity",
      home_link: "Kembali ke laman utama",
      footer_tag: "Yang nyata itu jarang."
    }
  },


  /* ==========================================================
     KOREAN
     ========================================================== */

  ko: {

    home: {
      nav_learn: "미션",
      nav_join: "가입",
      eyebrow: "HumanKey로 보호됨",
      h1: "진짜는<br /><em>희귀합니다.</em>",
      lead: "Hash Humanity는 <strong>실제 사람</strong>을 중심으로 만든 소셜 네트워크입니다. HumanKey는 봇 네트워크, 중복 계정 및 인위적 참여를 대규모로 확장하기 어렵게 설계되었습니다.",
      launch: "Hash Humanity 입장",
      mission: "우리의 미션",
      member_lbl: "명의 사람, 계속 증가 중",
      values_human: "사람 중심",
      values_privacy: "개인정보 보호",
      values_algorithm: "분노 유도 알고리즘 없음",
      values_conversation: "진짜 대화",
      statement_h2: "소셜 미디어는 다른 것이 되어버렸습니다.<br /><em>우리는 사람을 다시 중심에 놓고 싶습니다.</em>",
      statement_p: "여론인 척하는 봇 무리도, 분노를 유도하는 플랫폼도, 끝없는 인위적 참여 기계도 없습니다. Hash Humanity는 실제 사람과 실제 대화를 중심으로 합니다.",
      hk_h2: "사람임을 증명합니다.<br /><em>당신이 누구인지 공개할 필요는 없습니다.</em>",
      hk_p: "HumanKey는 Hash Humanity의 사람 증명 계층입니다. 계정 뒤에 실제로 살아 있는 고유한 사람이 있다는 것을 확인하면서 필요한 개인정보를 최소화하도록 설계되었습니다.",
      hk_link: "HumanKey 작동 방식 →",
      join_kicker: "사람을 위한 인터넷으로",
      join_h2: "있는 그대로<br /><em>오세요.</em>",
      join_p: "인위적 참여가 아닌 실제 사람을 중심으로 만든 소셜 네트워크에 들어오세요.",
      read_mission: "미션 보기",
      footer_tag: "진짜는 희귀합니다."
    },

    mission: {
      back: "← 뒤로",
      launch: "입장",
      eyebrow: "Hash Humanity의 미션",
      h1: "인터넷에는<br /><em>정체성 문제가 있습니다.</em>",
      lead: "온라인에서 계정은 사람처럼 보입니다. <strong>하지만 계정 자체가 사람의 존재를 증명하지는 않습니다.</strong> 소프트웨어와 조직된 운영자는 일반 사람이 감당할 수 없는 규모로 정체성을 만들고 증폭할 수 있습니다.",
      pull: "Hash Humanity는 다른 질문에서 시작합니다. <span>실제로 사람인 것은 누구인가?</span>",
      core_kicker: "핵심 아이디어",
      core_h2: "인터넷에 더 많은 계정이 필요한 것은 아닙니다.<br /><em>책임질 수 있는 사람이 필요합니다.</em>",
      core_p: "Hash Humanity는 Proof of Personhood를 기반으로 합니다. 계정이 네트워크의 새로운 목소리가 되기 전에 HumanKey는 실제 살아 있는 고유한 사람이 뒤에 있는지 확인하도록 설계되었습니다.",
      problem_kicker: "문제",
      problem_h2: "인터넷은 항상<br /><em>사람들의 군중과 기계가 만든 군중을 구분하지 못합니다.</em>",
      problem1_idx: "01 / 계정 생성",
      problem1_h3: "새로운 정체성을 만드는 비용이 너무 낮습니다.",
      problem1_p: "기존 플랫폼에서는 다른 이메일, 전화번호 또는 자동 등록 프로세스만으로 또 다른 계정을 만들 수 있습니다.",
      problem2_idx: "02 / 규모",
      problem2_h3: "자동화는 문제의 규모를 바꿉니다.",
      problem2_p: "사람의 시간과 관심에는 한계가 있지만 소프트웨어는 계속 게시하고 답변하고 반응할 수 있습니다.",
      problem3_idx: "03 / 가짜 합의",
      problem3_h3: "1만 개의 계정은 1만 명처럼 보일 수 있습니다.",
      problem3_p: "좋아요, 답글, 공유와 반복 메시지는 실제보다 훨씬 큰 인기와 동의를 만들어 보일 수 있습니다.",
      problem4_idx: "04 / 일회성 계정",
      problem4_h3: "새 계정이 거의 무료라면 차단의 효과가 약해집니다.",
      problem4_p: "악성 계정이 즉시 교체될 수 있다면 운영자는 다른 계정으로 돌아올 수 있습니다.",
      problem5_idx: "05 / 신뢰",
      problem5_h3: "결국 무엇이 진짜인지 알기 어려워집니다.",
      problem5_p: "실제 사람과 자동화된 정체성을 구분할 수 없으면 대화 자체에 대한 신뢰가 무너집니다.",
      bots_kicker: "자동화가 할 수 있는 것",
      bots_h2: "봇은 똑똑할 필요가 없습니다.<br /><em>확장 가능하면 됩니다.</em>",
      bots_p: "자동화, 계정 농장, 생성형 AI와 조직된 운영자는 과거 많은 사람이 필요했던 활동을 수행할 수 있습니다.",
      bot1_h3: "참여를 조작합니다.",
      bot1_p: "자동 계정은 팔로우, 반응, 공유 및 댓글 생성을 통해 자연스러운 활동처럼 보이게 할 수 있습니다.",
      bot2_h3: "여론을 시뮬레이션합니다.",
      bot2_p: "조직된 네트워크는 같은 주장을 반복하고 실제보다 큰 합의를 만들어 보일 수 있습니다.",
      bot3_h3: "사람과 기관을 사칭합니다.",
      bot3_p: "가짜 계정은 이름, 사진, 브랜드와 문체를 복제해 사기나 조작에 사용할 수 있습니다.",
      bot4_h3: "기계 속도로 사람들에게 접근합니다.",
      bot4_p: "자동 시스템은 한 사람이 할 수 있는 것보다 훨씬 빠르게 콘텐츠와 메시지를 배포할 수 있습니다.",
      bot5_h3: "AI로 콘텐츠를 바꿉니다.",
      bot5_p: "생성형 시스템은 서로 다른 대량의 텍스트, 이미지 및 합성 콘텐츠를 만들 수 있습니다.",
      bot6_h3: "삭제된 뒤 다시 돌아옵니다.",
      bot6_p: "계정 생성 비용이 낮으면 악성 계정 삭제만으로 운영자를 제거할 수 없습니다.",
      scale_kicker: "규모는 현실입니다",
      scale_label: "Microsoft가 시간당 차단한 봇 또는 가짜 계정 가입 시도",
      scale_p: "Microsoft는 2025 Digital Defense Report가 다루는 기간 동안 시간당 평균 약 160만 건의 봇 기반 또는 가짜 계정 가입 시도를 차단했다고 밝혔습니다.",
      one_kicker: "HASH HUMANITY 모델",
      one_human: "사람",
      one_account: "계정",
      one_h2: "한 사람이<br /><em>1만 명처럼 보여서는 안 됩니다.</em>",
      one_p: "HumanKey는 한 사람, 한 계정을 중심으로 설계되었습니다. 추가 검증 계정마다 또 다른 고유한 사람이 필요하다면 대규모 조작은 훨씬 더 어렵고 비싸집니다.",
      humankey_kicker: "HUMANKEY",
      humankey_h2: "사람임을 증명합니다.<br /><em>신원을 증명하는 것은 아닙니다.</em>",
      humankey_p: "HumanKey의 목적은 당신의 신원을 알아내는 것이 아니라 실제 살아 있는 사람이 접근을 요청하고 있는지, 그리고 이미 등록되었는지 확인하는 것입니다.",
      hk1_h3: "동의가 먼저입니다.",
      hk1_p: "HumanKey는 사용자가 검증 과정에 동의한 후에 시작됩니다.",
      hk2_h3: "Liveness로 실제 사람을 확인합니다.",
      hk2_p: "Liveness 검사는 카메라 앞에 실제 살아 있는 참여자가 있는지 확인하는 데 사용됩니다.",
      hk3_h3: "수학적 생체 표현을 생성합니다.",
      hk3_p: "HumanKey는 비교와 중복 탐지를 위한 수학적 얼굴 표현을 생성합니다.",
      hk4_h3: "기존 등록 여부를 확인합니다.",
      hk4_p: "기존 데이터와 비교하여 같은 사람이 이미 계정을 생성했는지 확인할 수 있습니다.",
      hk5_h3: "사람임을 개인정보 보호형 증명으로 바꿉니다.",
      hk5_p: "검증 후 암호학적 증명을 통해 법적 이름 공개 없이 사람임을 확인할 수 있습니다.",
      hk6_h3: "Passkey가 일상 로그인 수단이 됩니다.",
      hk6_p: "등록 후에는 얼굴을 반복 스캔하는 대신 passkey를 사용할 수 있습니다.",
      hk7_h3: "생체 정보는 필요한 경우에만 다시 사용합니다.",
      hk7_p: "목표는 지속적인 얼굴 검증이 아닙니다. 생체 검증은 등록과 제한된 복구 상황을 위한 것입니다.",
      change_kicker: "무엇이 달라지는가",
      change_h2: "사람 검증만으로 인터넷을 전부 해결할 수는 없습니다.<br /><em>하지만 가능한 일을 바꿉니다.</em>",
      change1_h: "봇 농장을 확장하기 어려워집니다.",
      change1_p: "소프트웨어는 무한한 프로세스를 만들 수 있지만 무한한 고유 인간을 만들 수는 없습니다.",
      change2_h: "계정을 쉽게 버리고 다시 만들기 어려워집니다.",
      change2_p: "같은 사람이 새 검증 계정을 쉽게 만들 수 없다면 계정 상실에는 더 큰 의미가 생깁니다.",
      change3_h: "계정 수가 더 의미 있어집니다.",
      change3_p: "검증된 계정이 진실을 보장하지는 않지만 독립된 사람이 뒤에 있다는 강한 증거가 됩니다.",
      change4_h: "가짜 군중을 만드는 비용이 높아집니다.",
      change4_p: "사람들은 여전히 협력할 수 있지만 한 운영자가 스스로를 거대한 가짜 군중으로 확대하기는 더 어려워집니다.",
      change5_h: "익명이라고 해서 가짜일 필요는 없습니다.",
      change5_p: "실명이나 법적 신원을 공개하지 않으면서도 고유한 사람이 계정 뒤에 있음을 증명할 수 있습니다.",
      change6_h: "평판이 지속적인 사람에게 연결될 수 있습니다.",
      change6_p: "정체성을 쉽게 버릴 수 없다면 행동에는 역사와 결과가 생깁니다.",
      privacy_kicker: "개인정보 보호 중심 설계",
      privacy_h2: "사람임을 증명하세요.<br /><em>당신이 누구인지는 증명하지 않아도 됩니다.</em>",
      privacy_p: "Proof of Personhood가 소셜 네트워크를 신원 데이터베이스로 만들어서는 안 됩니다. HumanKey는 데이터 최소화를 중심으로 설계되었습니다.",
      privacy1_h: "공개 법적 신원 불필요",
      privacy1_p: "사용자는 법적 이름이나 시민 신원을 공개하지 않고 참여할 수 있습니다.",
      privacy2_h: "얼굴 검증은 일반 로그인 방식이 아닙니다",
      privacy2_p: "HumanKey 등록 후 일반 인증은 passkey가 담당합니다.",
      privacy3_h: "감시가 아닌 고유성",
      privacy3_p: "생체 시스템은 사람과 고유성을 증명하기 위한 것이며 행동 추적을 위한 것이 아닙니다.",
      limits_kicker: "중요한 차이",
      limits_h2: "검증된 사람도 여전히<br /><em>틀릴 수 있고, 거짓말할 수 있고, 형편없이 행동할 수 있습니다.</em>",
      limits_p1: "HumanKey는 사람임을 증명할 뿐 성격이나 진실을 증명하지 않습니다.",
      limits_p2: "다만 한 운영자가 값싸게 무제한의 독립된 사람처럼 보이는 능력을 크게 줄일 수 있습니다.",
      final_kicker: "미션",
      final_h2: "인터넷을 다시<br /><em>사람답게.</em>",
      final_p: "Hash Humanity는 소프트웨어가 만들어낼 수 없는 자원, 즉 실제 사람에서 시작하는 소셜 네트워크가 어떤 모습일지 탐구합니다.",
      launch_now: "Hash Humanity 입장",
      home_link: "홈으로 돌아가기",
      footer_tag: "진짜는 희귀합니다."
    }
  }
};


/* ============================================================
   STORAGE HELPERS
   ============================================================ */

function safeGetLanguage() {
  try {
    return localStorage.getItem("hh_language");
  } catch (error) {
    return null;
  }
}

function safeSetLanguage(language) {
  try {
    localStorage.setItem("hh_language", language);
  } catch (error) {
    // Local storage may be blocked.
  }
}


/* ============================================================
   LANGUAGE NORMALIZATION
   ============================================================ */

function normalizeLanguage(language) {

  const value = String(language || "en")
    .trim()
    .toLowerCase()
    .replace("_", "-");

  const base = value.split("-")[0];

  return SUPPORTED_LANGUAGES.includes(base)
    ? base
    : "en";
}


/* ============================================================
   MAIN ENGINE
   ============================================================ */

window.HH_I18N = (function () {

  let currentPage = "home";
  let currentLanguage = "en";


  function getLanguage() {

    const saved = safeGetLanguage();

    if (
      saved &&
      SUPPORTED_LANGUAGES.includes(saved)
    ) {
      return saved;
    }

    const browserLanguages =
      Array.isArray(navigator.languages) &&
      navigator.languages.length
        ? navigator.languages
        : [navigator.language || "en"];

    for (const language of browserLanguages) {

      const normalized =
        normalizeLanguage(language);

      if (
        SUPPORTED_LANGUAGES.includes(normalized)
      ) {
        return normalized;
      }
    }

    return "en";
  }


  function getStrings(page, language) {

    const english =
      ENGLISH[page] || {};

    const translated =
      TRANSLATIONS[language] &&
      TRANSLATIONS[language][page]
        ? TRANSLATIONS[language][page]
        : {};

    return {
      ...english,
      ...translated
    };
  }


  function applyText(strings) {

    document
      .querySelectorAll("[data-i18n]")
      .forEach((element) => {

        const key =
          element.getAttribute("data-i18n");

        if (
          key &&
          Object.prototype.hasOwnProperty.call(
            strings,
            key
          )
        ) {
          element.textContent =
            strings[key];
        }

      });
  }


  function applyHTML(strings) {

    document
      .querySelectorAll("[data-i18n-html]")
      .forEach((element) => {

        const key =
          element.getAttribute(
            "data-i18n-html"
          );

        if (
          key &&
          Object.prototype.hasOwnProperty.call(
            strings,
            key
          )
        ) {
          element.innerHTML =
            strings[key];
        }

      });
  }


  function applyPlaceholders(strings) {

    document
      .querySelectorAll(
        "[data-i18n-placeholder]"
      )
      .forEach((element) => {

        const key =
          element.getAttribute(
            "data-i18n-placeholder"
          );

        if (
          key &&
          Object.prototype.hasOwnProperty.call(
            strings,
            key
          )
        ) {
          element.setAttribute(
            "placeholder",
            strings[key]
          );
        }

      });
  }


  function applyTitles(strings) {

    document
      .querySelectorAll("[data-i18n-title]")
      .forEach((element) => {

        const key =
          element.getAttribute(
            "data-i18n-title"
          );

        if (
          key &&
          Object.prototype.hasOwnProperty.call(
            strings,
            key
          )
        ) {
          element.setAttribute(
            "title",
            strings[key]
          );
        }

      });
  }


  function updateLanguageButton(language) {

    const label =
      document.getElementById(
        "langBtnLabel"
      );

    if (label) {
      label.textContent =
        language.toUpperCase();
    }
  }


  function closeLanguageMenu() {

    const menu =
      document.getElementById(
        "langMenu"
      );

    const button =
      document.getElementById(
        "langBtn"
      );

    if (menu) {
      menu.style.display = "none";
    }

    if (button) {
      button.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  }


  function openLanguageMenu() {

    const menu =
      document.getElementById(
        "langMenu"
      );

    const button =
      document.getElementById(
        "langBtn"
      );

    if (!menu || !button) {
      return;
    }

    menu.style.display = "block";

    button.setAttribute(
      "aria-expanded",
      "true"
    );
  }


  function toggleLanguageMenu() {

    const menu =
      document.getElementById(
        "langMenu"
      );

    if (!menu) {
      return;
    }

    const isOpen =
      menu.style.display === "block";

    if (isOpen) {
      closeLanguageMenu();
    } else {
      openLanguageMenu();
    }
  }


  function buildLanguageMenu() {

    const menu =
      document.getElementById(
        "langMenu"
      );

    if (!menu) {
      return;
    }

    menu.innerHTML = "";

    SUPPORTED_LANGUAGES.forEach(
      (language) => {

        const item =
          document.createElement("li");

        const button =
          document.createElement("button");

        button.type = "button";

        button.textContent =
          LANGUAGE_NAMES[language];

        button.dataset.language =
          language;

        button.setAttribute(
          "role",
          "option"
        );

        button.setAttribute(
          "aria-selected",
          String(
            language ===
            currentLanguage
          )
        );

        button.style.width = "100%";
        button.style.border = "0";
        button.style.background =
          language === currentLanguage
            ? "rgba(255,255,255,.08)"
            : "transparent";

        button.style.color = "#fff";
        button.style.padding =
          "10px 12px";

        button.style.borderRadius =
          "10px";

        button.style.font =
          "inherit";

        button.style.fontSize =
          "13px";

        button.style.textAlign =
          "left";

        button.style.cursor =
          "pointer";

        button.addEventListener(
          "click",
          function () {

            setLanguage(language);

          }
        );

        item.appendChild(button);
        menu.appendChild(item);
      }
    );
  }


  function apply(page, language) {

    const normalized =
      normalizeLanguage(language);

    currentPage =
      page || currentPage;

    currentLanguage =
      normalized;

    const strings =
      getStrings(
        currentPage,
        currentLanguage
      );

    document.documentElement.lang =
      currentLanguage;

    document.documentElement.dir =
      "ltr";

    applyText(strings);
    applyHTML(strings);
    applyPlaceholders(strings);
    applyTitles(strings);

    updateLanguageButton(
      currentLanguage
    );

    buildLanguageMenu();

    window.HH_ACTIVE_LANGUAGE =
      currentLanguage;

    window.HH_ACTIVE_STRINGS =
      strings;

    document.dispatchEvent(
      new CustomEvent(
        "hh-language-change",
        {
          detail: {
            language:
              currentLanguage,

            page:
              currentPage
          }
        }
      )
    );

    return strings;
  }


  function setLanguage(language) {

    const normalized =
      normalizeLanguage(language);

    safeSetLanguage(
      normalized
    );

    apply(
      currentPage,
      normalized
    );

    closeLanguageMenu();
  }


  function init(page) {

    currentPage =
      page || "home";

    currentLanguage =
      getLanguage();

    const langButton =
      document.getElementById(
        "langBtn"
      );

    if (langButton) {

      langButton.addEventListener(
        "click",
        function (event) {

          event.stopPropagation();

          toggleLanguageMenu();

        }
      );

    }


    document.addEventListener(
      "click",
      function (event) {

        const switcher =
          document.querySelector(
            ".lang-switch"
          );

        if (
          switcher &&
          !switcher.contains(
            event.target
          )
        ) {
          closeLanguageMenu();
        }

      }
    );


    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape"
        ) {
          closeLanguageMenu();
        }

      }
    );


    return apply(
      currentPage,
      currentLanguage
    );
  }


  return {

    init,
    apply,
    setLanguage,
    getLanguage,

    getCurrentLanguage:
      function () {
        return currentLanguage;
      },

    getCurrentPage:
      function () {
        return currentPage;
      },

    getStrings:
      function (page, language) {
        return getStrings(
          page || currentPage,
          language || currentLanguage
        );
      },

    supportedLanguages:
      [...SUPPORTED_LANGUAGES],

    languageNames:
      { ...LANGUAGE_NAMES }

  };

})();