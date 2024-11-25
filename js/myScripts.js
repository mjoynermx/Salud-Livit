
const arrayData = [
    {
        id: 1,
        imageUrl: "/images/psicol_online.png",
        Heading: "Psicólogo Online",
        subHeading: "Obtén asistencia psicológica online o telefónica previa cita",
        bgColor: "#E5FFFE",
        para: "Sin límite de eventos",
    },
    {
        id: 2,
        imageUrl: "/images/medico_online.png",
        Heading: "Médico Online / telefónico",
        subHeading: "Cuidados para tu salud con médicos online o por teléfono",
        bgColor: "#E5FFFE",
        para: "Sin límite de eventos",
    },
    {
        id: 3,
        imageUrl: "/images/nutriologo_oniline.png",
        Heading: "Asesoría Nutricional",
        subHeading: "Recibe asesoría nutricional online previa cita",
        bgColor: "#E5FFFE",
        para: "Sin límite de eventos",
    },
    {
        id: 4,
        imageUrl: "/images/ambulancia.png",
        Heading: "Ambulancia Terrestre",
        subHeading: "Estamos para ayudarte en todo momento que lo necesites",
        bgColor: "#E5FFFE",
        para: "1 evento al año",
    },
    {
        id: 5,
        imageUrl: "/images/limpieza_dental.png",
        Heading: "Consulta Dental",
        subHeading: "Cuida tu sonrisa con la consulta dental con limpieza",
        bgColor: "#E5FFFE",
        para: "Sin límite de eventos, costo preferencial. Limpieza dental 1 evento al año",
    },
    {
        id: 6,
        imageUrl: "/images/medico_domicilio.png",
        Heading: "Consulta Médica a domicilio",
        subHeading: "Recibe consultas médicas a domicilio",
        bgColor: "#E5FFFE",
        para: "2 eventos al año, hasta por $800 mxn",
    },
    {
        id: 9,
        imageUrl: "/images/check_up.png",
        Heading: "Check-up Médico",
        subHeading: "Contamos con una amplia gama de estudios disponibles",
        bgColor: "#E5FFFE",
        para: "2 eventos al año",
    },
    {
        id: 8,
        imageUrl: "/images/medico_general.png",
        Heading: "Consulta Médico General",
        subHeading: "Obtén una consulta en el consultorio de un médico general",
        bgColor: "#E5FFFE",
        para: "2 eventos al año, hasta por $800 mxn",
    },
    {
        id: 7,
        imageUrl: "/images/medico_espec.png",
        Heading: "Consulta Médica con Especialista",
        subHeading: "Obtén una consulta médica en el consultorio de un especialista",
        bgColor: "#E5FFFE",
        para: "2 eventos al año, hasta por $1500 mxn",
    },
]
 const cardContainer = document.querySelector('.mycontainer')

 const functionCards = () => {
    arrayData.map((data) => {
        //console.log(data)
        cardContainer.innerHTML += `
         <div class="mycard">
             <div class="image">
                 <img src="${data.imageUrl}" alt="">
            </div>
                    <h2>${data.Heading}</h2>
                        <h4>${data.subHeading}</h4>
                            <p>${data.para}</p>
                             <!-- <button>Leer Más</button> -->
        </div>
        `
    })
 }

 functionCards()