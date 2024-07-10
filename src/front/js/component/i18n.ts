import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        navbar1: "Map",
        navbar2: "Room List",
        navbar3: "Post a Flat",
        navbar4: "Profile",
        navbar5: "My Flats",
        navbar6: "Favorites",
        navbar7: "My Rooms",
        navbar8: "Messages",
        navbar9: "Log Out",
        navbar10: "Login",
        navbar11: "Sign Up",
        traduccion1: "Welcome",
        traduccion2: "Find your flat!",
        traduccion3: "View Map",
        traduccion4: "Recent Flats",
        traduccion5: "View Flat",
        traduccion6: "Search Radius",
        traduccion7: "Choose University",
        traduccion8: "All Distances",
        traduccion9: "Minimum Price",
        traduccion10: "Maximum Price",
        traduccion11: "Minimum Surface Area",
        traduccion12: "All",
        traduccion13: "Room",
        traduccion14: "Price",
        traduccion15: "Surface Area",
        traduccion16: "Available Rooms",
        traduccion17: "Edit My Flat",
        traduccion18: "Description",
        traduccion19: "Address",
        traduccion20: "Postal Code",
        traduccion21: "City",
        traduccion22: "Close",
        traduccion23: "Save Changes",
        traduccion24: "Add Photos",
        traduccion25: "Edit",
        traduccion26: "Add Room",
        traduccion27: "View Room",
        traduccion28: "Edit My Room",
        traduccion29: "Title",
        traduccion30: "Square Meters",
        traduccion31: "Contact",
        traduccion32: "Conversations",
        traduccion33: "Messages",
        traduccion34: "Contact",
        traduccion35: "Name",
        traduccion36: "Email",
        traduccion37: "Message",
        traduccion38: "Send",
        traduccion39: "Edit My Profile",
        traduccion40: "Last Name",
        traduccion41: "Date of Birth",
        traduccion42: "ID Number",
        traduccion43: "Phone",
        traduccion44: "Upload Your Profile Picture!",
        traduccion45: "Upload Picture",
        traduccion46: "University",
        traduccion47: "Post Your Flat",
        traduccion48: "Step 1: Describe Your Flat",
        traduccion49: "Describe your flat, how many rooms it has, entry requirements, and any information you consider relevant for your future tenants",
        traduccion50: "Spacious exterior flat with 3 rooms...",
        traduccion51: "Next",
        traduccion52: "Step 2: Where is it located?",
        traduccion53: "Provide your address",
        traduccion54: "Provide your postal code",
        traduccion55: "Provide your city",
        traduccion56: "Step 3: Share Photos",
        traduccion57: "Share at least 3 photos of the flat.",
        traduccion58: "We recommend sharing photos of the living room, kitchen, and bathrooms.",
        traduccion59: "Previous",
        traduccion60: "We will never share your email with anyone.",
        traduccion61: "Password",
        traduccion62: "Don't have an account?",
        traduccion63: "Sign up here.",
        traduccion64: "Reset",
        traduccion65: "Write a new message",
        traduccion66: "My Published Flats",
        traduccion67: "You have no published flats",
        traduccion68: "View Details",
        traduccion69: "My Published Rooms",
        traduccion70: "You have no published rooms",
        traduccion71: "Page Not Found!",
        traduccion72: "Published Rooms",
        traduccion73: "Sort by:",
        traduccion74: "Filter by:",
        traduccion75: "Publication Date",
        traduccion76: "Minimum m²",
        traduccion77: "Maximum m²",
        traduccion78: "Published on",
        traduccion79: "I am a landlord",
        traduccion80: "I am a student",
        traduccion81: "Register as a student",
        traduccion82: "Repeat Password",
        traduccion83: "Already have an account?",
        traduccion84: "Log in here.",
        traduccion85: "Passwords do not match!",
        traduccion86: "Sign Up",
        traduccion87: "Register as a landlord",
        traduccion88: "Upload Image",
        traduccion89: "Post",
        traduccion90: "Post and Upload Photos",
        traduccion91: "Post a Room",
        traduccion92: "Remove Favorite",
        traduccion93: "Add Favorite",
        traduccion94: "Information",
        traduccion95: "Data Protection",
        traduccion96: "Contact",
        traduccion97: "Contact Form",
        traduccion98: "RentUni Data Protection Policy",
        traduccion99: "1. Introduction",
        traduccion100: "At RentUni, we are committed to protecting the privacy and security of our users' personal data. This data protection policy explains how we collect, use, store, and protect your personal data in accordance with the European Union General Data Protection Regulation (GDPR).",
        traduccion101: "2. Data Controller",
        traduccion102: "RentUni Pau, Marco, and Victoria",
        traduccion103: "3. Personal Data Collected",
        traduccion104: "We may collect and process the following personal data:",
        traduccion105: "Contact information: name, address, email, phone number.",
        traduccion106: "Payment information: credit or debit card details, bank information.",
        traduccion107: "Property information: address of the rented property, rental contract details.",
        traduccion108: "Browsing information: IP address, browser type, pages visited, time spent on the website.",
        traduccion109: "4. Purpose of Data Processing",
        traduccion110: "The personal data collected will be used for the following purposes:",
        traduccion111: "Processing and managing rental bookings.",
        traduccion112: "Communicating with users about their bookings and providing customer support.",
        traduccion113: "Processing payments and conducting financial transactions.",
        traduccion114: "Improving our website and user experience.",
        traduccion115: "Complying with our legal and contractual obligations.",
        traduccion116: "5. Legal Basis for Data Processing",
        traduccion117: "The processing of your personal data is based on the following legal bases:",
        traduccion118: "The user's consent.",
        traduccion119: "The necessity for the performance of a contract to which the user is a party.",
        traduccion120: "Compliance with a legal obligation.",
        traduccion121: "The legitimate interests of RentUni, provided that such interests do not override the user's fundamental rights and freedoms.",
        traduccion122: "6. Sharing Personal Data",
        traduccion123: "We will not share your personal data with third parties, except in the following circumstances:",
        traduccion124: "Service providers acting on our behalf, such as payment providers, technology companies, and customer service providers.",
        traduccion125: "Legal and regulatory authorities, when we are required to do so by law.",
        traduccion126: "7. International Data Transfers",
        traduccion127: "Your personal data may be transferred and processed in countries outside the European Economic Area (EEA). In such cases, we will ensure that appropriate safeguards are in place to protect your personal data, such as the adoption of standard contractual clauses approved by the European Commission.",
        traduccion128: "8. Data Security",
        traduccion129: "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, loss, misuse, or disclosure.",
        traduccion130: "9. Data Retention",
        traduccion131: "We will retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.",
        traduccion132: "10. User Rights",
        traduccion133: "Under the GDPR, you have the following rights:",
        traduccion134: "Right to access your personal data.",
        traduccion135: "Right to rectify inaccurate or incomplete data.",
        traduccion136: "Right to erasure of your personal data.",
        traduccion137: "Right to restrict the processing of your personal data.",
        traduccion138: "Right to data portability.",
        traduccion139: "Right to object to the processing of your personal data.",
        traduccion140: "Right to withdraw your consent at any time.",
        traduccion141: "To exercise these rights, please contact us using the contact details provided in section 2.",
        traduccion142: "11. Changes to the Data Protection Policy",
        traduccion143: "We may update this data protection policy from time to time. Any changes will be posted on this page and, if necessary, notified to users by email.",
        traduccion144: "12. Contact",
        traduccion145: "If you have any questions or concerns about our data protection policy or the processing of your personal data, please do not hesitate to contact us using the contact details provided in section 2.",
      },
    },
    es: {
      translation: {
        navbar1: "Mapa",
        navbar2: "Listado de habitaciones",
        navbar3: "Publicar un piso",
        navbar4: "Perfil",
        navbar5: "Mis pisos",
        navbar6: "Favoritos",
        navbar7: "Mis habitaciones",
        navbar8: "Mensajes",
        navbar9: "Desconectar",
        navbar10: "Login",
        navbar11: "Sign Up",
        traduccion1: "Bienvenido",
        traduccion2: "Busca tu piso!",
        traduccion3: "Ver mapa",
        traduccion4: "Pisos Recientes",
        traduccion5: "Ver piso",
        traduccion6: "Radio de busqueda",
        traduccion7: "Elige universidad",
        traduccion8: "Todas las distancias",
        traduccion9: "Precio mínimo",
        traduccion10: "Precio máximo",
        traduccion11: "Superfície mínima",
        traduccion12: "Todas",
        traduccion13: "Habitación",
        traduccion14: "Precio",
        traduccion15: "Superfície",
        traduccion16: "Habitaciones disponibles",
        traduccion17: "Editar mi piso",
        traduccion18: "Descripción",
        traduccion19: "Dirección",
        traduccion20: "Código postal",
        traduccion21: "Ciudad",
        traduccion22: "Cerrar",
        traduccion23: "Guardar cambios",
        traduccion24: "Añadir fotos",
        traduccion25: "Editar",
        traduccion26: "Añadir habitación",
        traduccion27: "Ver habitación",
        traduccion28: "Editar mi habitación",
        traduccion29: "Título",
        traduccion30: "Metros cuadrados",
        traduccion31: "Contacta",
        traduccion32: "Conversaciones",
        traduccion33: "Mensajes",
        traduccion34: "Contacto",
        traduccion35: "Nombre",
        traduccion36: "E-mail",
        traduccion37: "Mensaje",
        traduccion38: "Enviar",
        traduccion39: "Editar mi perfil",
        traduccion40: "Apellidos",
        traduccion41: "Fecha de nacimiento",
        traduccion42: "DNI",
        traduccion43: "Teléfono",
        traduccion44: "¡Sube tu foto de perfil!",
        traduccion45: "Subir imagen",
        traduccion46: "Universidad",
        traduccion47: "Publica tu piso",
        traduccion48: "Paso 1: Describe tu piso",
        traduccion49: "Describe como es tu piso, cuantas habitaciones tiene, requisitos de entrada y cualqueir informacion que consideres relevante para tus futuros inquilinos",
        traduccion50: "Amplio piso exterior con 3 habitaciones...",
        traduccion51: "Siguiente",
        traduccion52: "Paso 2: ¿En dónde está ubicado?",
        traduccion53: "Indícanos tu dirección",
        traduccion54: "Indícanos tu código postal",
        traduccion55: "Indícanos tu ciudad",
        traduccion56: "Paso 3: Comparte fotos",
        traduccion57: "Comparte al menos 3 fotos del piso.",
        traduccion58: "Recomendamos compartir fotos del salon, la cocina y los baños.",
        traduccion59: "Anterior",
        traduccion60: "Nunca compartiremos tu email con nadie.",
        traduccion61: "Contraseña",
        traduccion62: "¿No tienes cuenta?",
        traduccion63: "Regístrate aquí.",
        traduccion64: "Reiniciar",
        traduccion65: "Escribe un mensaje nuevo",
        traduccion66: "Mis pisos publicados",
        traduccion67: "No tienes pisos publicados",
        traduccion68: "Ver detalles",
        traduccion69: "Mis habitaciones publicadas",
        traduccion70: "No tienes habitaciones publicadas",
        traduccion71: "¡Página no encontrada!",
        traduccion72: "Habitaciones publicadas",
        traduccion73: "Ordenar por:",
        traduccion74: "Filtrar por:",
        traduccion75: "Fecha de publicación",
        traduccion76: "Mínimo m²",
        traduccion77: "Máximo m²",
        traduccion78: "Publicado el ",
        traduccion79: "Soy propietario",
        traduccion80: "Soy estudiante",
        traduccion81: "Darme de alta como estudiante",
        traduccion82: "Repetir contraseña",
        traduccion83: "¿Ya tienes cuenta?",
        traduccion84: "Inicia sesión aquí.",
        traduccion85: "¡Las contraseñas no coinciden!",
        traduccion86: "Darme de alta",
        traduccion87: "Darme de alta como propietario",
        traduccion88: "Cargar imagen",
        traduccion89: "Publicar",
        traduccion90: "Publicar y subir fotos",
        traduccion91: "Publica una habitación",
        traduccion92: "Quitar favorito",
        traduccion93: "Añadir favorito",
        traduccion94: "Información",
        traduccion95: "Protección de datos",
        traduccion96: "Contacto",
        traduccion97: "Formulario de contacto",
        traduccion98: "Política de Protección de Datos de RentUni",
        traduccion99: "1. Introducción",
        traduccion100: "En RentUni, nos comprometemos a proteger la privacidad y la seguridad de los datos personales de nuestros usuarios. Esta política de protección de datos explica cómo recopilamos, utilizamos, almacenamos y protegemos sus datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) de la Unión Europea.",
        traduccion101: "2. Responsable del Tratamiento de Datos",
        traduccion102: "RentUni Pau, Marco y Victoria",
        traduccion103: "3. Datos Personales Recopilados",
        traduccion104: "Podemos recopilar y procesar los siguientes datos personales: ",
        traduccion105: "Información de contacto: nombre, dirección, correo electrónico, número de teléfono.",
        traduccion106: "Información de pago: detalles de la tarjeta de crédito o débito, información bancaria.",
        traduccion107: "Información sobre la propiedad: dirección de la propiedad alquilada, detalles del contrato de alquiler.",
        traduccion108: "Información de navegación: dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia en el sitio web.",
        traduccion109: "4. Finalidad del Tratamiento de Datos",
        traduccion110: "Los datos personales recopilados serán utilizados para los siguientes fines:",
        traduccion111: "Procesar y gestionar las reservas de alquiler.",
        traduccion112: "Comunicarnos con los usuarios sobre sus reservas y proporcionar asistencia al cliente.",
        traduccion113: "Procesar pagos y realizar transacciones financieras.",
        traduccion114: "Mejorar nuestro sitio web y la experiencia del usuario.",
        traduccion115: "Cumplir con nuestras obligaciones legales y contractuales.",
        traduccion116: "5. Base Legal para el Tratamiento de Datos",
        traduccion117: "El tratamiento de sus datos personales se basa en las siguientes bases legales:",
        traduccion118: "El consentimiento del usuario.",
        traduccion119: "La necesidad de la ejecución de un contrato en el que el usuario es parte.",
        traduccion120: "El cumplimiento de una obligación legal.",
        traduccion121: "Los intereses legítimos de RentUni, siempre que dichos intereses no prevalezcan sobre los derechos y libertades fundamentales del usuario.",
        traduccion122: "6. Compartición de Datos Personales",
        traduccion123: "No compartiremos sus datos personales con terceros, excepto en las siguientes circunstancias:",
        traduccion124: "Proveedores de servicios que actúan en nuestro nombre, como proveedores de pago, empresas de tecnología y servicios de atención al cliente.",
        traduccion125: "Autoridades legales y reguladoras, cuando estemos obligados a hacerlo por ley.",
        traduccion126: "7. Transferencias Internacionales de Datos",
        traduccion127: "Sus datos personales pueden ser transferidos y procesados en países fuera del Espacio Económico Europeo (EEE). En tales casos, nos aseguraremos de que existan garantías adecuadas para proteger sus datos personales, como la adopción de cláusulas contractuales tipo aprobadas por la Comisión Europea.",
        traduccion128: "8. Seguridad de los Datos",
        traduccion129: "Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la pérdida, el uso indebido o la divulgación.",
        traduccion130: "9. Retención de Datos",
        traduccion131: "Retendremos sus datos personales solo durante el tiempo necesario para cumplir con los fines para los que fueron recopilados, incluidos los requisitos legales, contables o informativos.",
        traduccion132: "10. Derechos del Usuario",
        traduccion133: "De acuerdo con el RGPD, usted tiene los siguientes derechos:",
        traduccion134: "Derecho a acceder a sus datos personales.",
        traduccion135: "Derecho a rectificar datos inexactos o incompletos.",
        traduccion136: "Derecho a la supresión de sus datos personales.",
        traduccion137: "Derecho a restringir el tratamiento de sus datos personales.",
        traduccion138: "Derecho a la portabilidad de los datos.",
        traduccion139: "Derecho a oponerse al tratamiento de sus datos personales.",
        traduccion140: "Derecho a retirar su consentimiento en cualquier momento.",
        traduccion141: "Para ejercer estos derechos, por favor, póngase en contacto con nosotros a través de los datos de contacto proporcionados en la sección 2.",
        traduccion142: "11. Cambios en la Política de Protección de Datos",
        traduccion143: "Podemos actualizar esta política de protección de datos de vez en cuando. Cualquier cambio será publicado en esta página y, si es necesario, notificado a los usuarios por correo electrónico.",
        traduccion144: "12. Contacto",
        traduccion145: "Si tiene alguna pregunta o inquietud sobre nuestra política de protección de datos o sobre el tratamiento de sus datos personales, no dude en ponerse en contacto con nosotros a través de los datos de contacto proporcionados en la sección 2.",
      },
    },
  },
});

export default i18n;