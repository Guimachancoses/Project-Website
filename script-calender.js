  calendar = document.querySelector(".calendar"),
  date = document.querySelector(".date"),
  daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  todayBtn = document.querySelector(".today-btn"),
  gotoBtn = document.querySelector(".goto-btn"),
  dateInput = document.querySelector(".date-input"),
  eventDay = document.querySelector(".event-day"),
  eventDate = document.querySelector(".event-date"),
  eventsContainer = document.querySelector(".events"),
  addEventBtn = document.querySelector(".add-event"),
  addEventWrapper = document.querySelector(".add-event-wrapper "),
  addEventCloseBtn = document.querySelector(".close "),
  addEventTitle = document.querySelector(".event-name "),
  addEventFrom = document.querySelector(".event-time-from "),
  addEventTo = document.querySelector(".event-time-to "),
  addEventDisc = document.querySelector(".event-disc"),
  addEventSubmit = document.querySelector(".add-event-btn ");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Augosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

// const eventsArr = [
//   {
//     day: 13,
//     month: 11,
//     year: 2022,
//     events: [
//       {
//         title: "Event 1 lorem ipsun dolar sit genfa tersd dsad ",
//         time: "10:00 AM",
//       },
//       {
//         title: "Event 2",
//         time: "11:00 AM",
//       },
//     ],
//   },
// ];

const eventsArr = [];
getEvents();

//function para adicionar dias em dias com a class day e data anterior próxima data no mês anterior e dias do próximo mês e ativo hoje
function initCalendar() {

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  const day = firstDay.getDay();
  const nextDays = 7 - lastDay.getDay() - 1;

  date.innerHTML = months[month] + " " + year;

  let days = "";

  for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date">${prevDays - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    //verifique se o evento está presente naquele dia
    let event = false;
    eventsArr.forEach((eventObj) => {
      if (
        eventObj.day === i &&
        eventObj.month === month + 1 &&
        eventObj.year === year
      ) {
        event = true;
      }
    });
    if (
      i === new Date().getDate() &&
      year === new Date().getFullYear() &&
      month === new Date().getMonth()
    ) {
      activeDay = i;
      getActiveDay(i);
      updateEvents(i);
      if (event) {
        days += `<div class="day today active event">${i}</div>`;
      } else {
        days += `<div class="day today active">${i}</div>`;
      }
    } else {
      if (event) {
        days += `<div class="day event">${i}</div>`;
      } else {
        days += `<div class="day ">${i}</div>`;
      }
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date">${j}</div>`;
  }
  daysContainer.innerHTML = days;
  addListner();
}

//function para adicionar mês e ano no botão anterior e seguinte
function prevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  initCalendar();
}

function nextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  initCalendar();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

initCalendar();

//function para adicionar atividade no dia
function addListner() {
  const days = document.querySelectorAll(".day");
  days.forEach((day) => {
    day.addEventListener("click", (e) => {
      getActiveDay(e.target.innerHTML);
      updateEvents(Number(e.target.innerHTML));
      activeDay = Number(e.target.innerHTML);
      //remove atividade
      days.forEach((day) => {
        day.classList.remove("active");
      });
      //se clicar em data anterior ou próxima data, mude para esse mês
      if (e.target.classList.contains("prev-date")) {
        prevMonth();
        //adicionar atividade ao dia clicado após mês é alteração
        setTimeout(() => {
          //adicionar atividade onde não há data anterior ou próxima data
          const days = document.querySelectorAll(".day");
          days.forEach((day) => {
            if (
              !day.classList.contains("prev-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else if (e.target.classList.contains("next-date")) {
        nextMonth();
        //adicionar atividade ao dia clicado após o mês ser alterado
        setTimeout(() => {
          const days = document.querySelectorAll(".day");
          days.forEach((day) => {
            if (
              !day.classList.contains("next-date") &&
              day.innerHTML === e.target.innerHTML
            ) {
              day.classList.add("active");
            }
          });
        }, 100);
      } else {
        e.target.classList.add("active");
      }
    });
  });
}

todayBtn.addEventListener("click", () => {
  today = new Date();
  month = today.getMonth();
  year = today.getFullYear();
  initCalendar();
});

dateInput.addEventListener("input", (e) => {
  dateInput.value = dateInput.value.replace(/[^0-9/]/g, "");
  if (dateInput.value.length === 2) {
    dateInput.value += "/";
  }
  if (dateInput.value.length > 7) {
    dateInput.value = dateInput.value.slice(0, 7);
  }
  if (e.inputType === "deleteContentBackward") {
    if (dateInput.value.length === 3) {
      dateInput.value = dateInput.value.slice(0, 2);
    }
  }
});

gotoBtn.addEventListener("click", gotoDate);

function gotoDate() {
  console.log("here");
  const dateArr = dateInput.value.split("/");
  if (dateArr.length === 2) {
    if (dateArr[0] > 0 && dateArr[0] < 13 && dateArr[1].length === 4) {
      month = dateArr[0] - 1;
      year = dateArr[1];
      initCalendar();
      return;
    }
  }
  alert("Data inválida");
}

//função obter nome e data do dia do dia da atividade e atualizar evento do dia e a data do evento
function getActiveDay(date) {
  const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const day = new Date(year, month, date);
  const dayName = weekdays[day.getDay()];
  eventDay.innerHTML = dayName;
  eventDate.innerHTML = date + " " + months[month] + " " + year;
  }

//function atualizar "eventos" quanto houver eventos ativos
function updateEvents(date) {
  let events = "";
  eventsArr.forEach((event) => {
    if (
      date === event.day &&
      month + 1 === event.month &&
      year === event.year
    ) {
      event.events.forEach((event) => {
        events += `<div class="event">
            <div class="title">
              <i class="fas fa-circle"></i>
              <h3 class="event-title">${event.title}</h3>
            </div>
            <div class="event-time">
              <span class="event-time">${event.time}</span>
            </div>
        </div>`;
      });
    }
  });
  if (events === "") {
    events = `<div class="no-event">
            <h3>Sem eventos</h3>
        </div>`;
  }
  eventsContainer.innerHTML = events; //para exibir os eventos no html
  // saveEvents(); para savar em localstorage
}

//function adicionar evento
addEventBtn.addEventListener("click", () => {
  addEventWrapper.classList.toggle("active");
});

addEventCloseBtn.addEventListener("click", () => {
  addEventWrapper.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (e.target !== addEventBtn && !addEventWrapper.contains(e.target)) {
    addEventWrapper.classList.remove("active");
  }
});

//permitir 50 caracteres no título do evento
addEventTitle.addEventListener("input", (e) => {
  addEventTitle.value = addEventTitle.value.slice(0, 60);
});

function defineProperty() {
  var osccred = document.createElement("div");
  osccred.style.position = "absolute";
  osccred.style.bottom = "0";
  osccred.style.right = "0";
  osccred.style.fontSize = "10px";
  osccred.style.color = "#ccc";
  osccred.style.fontFamily = "sans-serif";
  osccred.style.padding = "5px";
  osccred.style.background = "#fff";
  osccred.style.borderTopLeftRadius = "5px";
  osccred.style.borderBottomRightRadius = "5px";
  osccred.style.boxShadow = "0 0 5px #ccc";
  document.body.appendChild(osccred);
}

defineProperty();

addEventFrom.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    addEventFrom.value = "";
    return;
  }
  addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
  if (addEventFrom.value.length === 2) {
    addEventFrom.value += ":";
  }
  if (addEventFrom.value.length > 5) {
    addEventFrom.value = addEventFrom.value.slice(0, 5);
  }
});

addEventFrom.addEventListener("input", (e) => {
  addEventFrom.value = addEventFrom.value.replace(/[^0-9:]/g, "");
  if (addEventFrom.value.length === 2) {
    addEventFrom.value += ":";
  }
  if (addEventFrom.value.length > 5) {
    addEventFrom.value = addEventFrom.value.slice(0, 5);
  }
});

addEventTo.addEventListener("keydown", (e) => {
  if (e.key === "Backspace") {
    addEventTo.value = "";
    return;
  }
  addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
  if (addEventTo.value.length === 2) {
    addEventTo.value += ":";
  }
  if (addEventTo.value.length > 5) {
    addEventTo.value = addEventTo.value.slice(0, 5);
  }
});

addEventTo.addEventListener("input", (e) => {
  addEventTo.value = addEventTo.value.replace(/[^0-9:]/g, "");
  if (addEventTo.value.length === 2) {
    addEventTo.value += ":";
  }
  if (addEventTo.value.length > 5) {
    addEventTo.value = addEventTo.value.slice(0, 5);
  }
});

//function para não adicionar um evento vazio-------------------------------------------------
addEventSubmit.addEventListener("click", () => {
  const eventTitle = addEventTitle.value;
  const eventTimeFrom = addEventFrom.value;
  const eventTimeTo = addEventTo.value;
  if (eventTitle === "" || eventTimeFrom === "" || eventTimeTo === "") {
    alert("Por favor preencha todos os campos!!!");
    return;
  }

  //verifique o formato de hora correto 24 horas
  const timeFromArr = eventTimeFrom.split(":");
  const timeToArr = eventTimeTo.split(":");
  if (
    timeFromArr.length !== 2 ||
    timeToArr.length !== 2 ||
    timeFromArr[0] > 23 ||
    timeFromArr[1] > 59 ||
    timeToArr[0] > 23 ||
    timeToArr[1] > 59
  ) {
    alert("Formato de hora inválido!!!");
    return;
  }

  const timeFrom = convertTime(eventTimeFrom);
  const timeTo = convertTime(eventTimeTo);

  //verifique se o evento já foi adicionado
  let eventExist = false;
  eventsArr.forEach((event) => {
  if (
    event.day === activeDay &&
    event.month === month + 1 &&
    event.year === year
  ) {
    event.events.forEach((event) => {
  if (event.time !== undefined) {
    const existingTimeFrom = timeFrom;
    const existingTimeTo = timeTo;
    if (existingTimeFrom == event.time.split(' - ')[0] && existingTimeTo == event.time.split(' - ')[1] ) {
      eventExist = true;
    }
    if (timeFrom >= event.time.split(' - ')[0] && timeTo <= event.time.split(' - ')[1] ) {
      eventExist = true;
      }    
    }

  });
  }
  });
  if (eventExist) {
    alert("Evento já adicionado");
    return;
  }

  // // verifique que se a data de devolução é menor que a data atual
  // const returnDate = new Date(dateInput2.value);
  // const currentDate = new Date();
  //   if (returnDate < currentDate) {
  //     alert("A data de devolução não pode ser anterior à data atual.");
  //     return false;
  //   }

  // if (addEventTo <= addEventFrom) {
  //   alert("A hora final não pode ser menor que a hora inicial.");
  //   return false;
  // }

  // verifique se a hora inserida de inicio pelo usuário é maior ou igual à hora atual
  const now = new Date();
  const inputDate = new Date(year, month, activeDay);
  inputDate.setHours(timeFromArr[0]);
  inputDate.setMinutes(timeFromArr[1]);
  if (inputDate < now && inputDate.toDateString() === now.toDateString()) {
    alert("A hora inicio não pode ser menor que a hora atual.");
    return;
  }
  
  const newEvent = {
    title: eventTitle,
    time: timeFrom + " - " + timeTo,
  };

  console.log(newEvent);
  console.log(activeDay);

  let eventAdded = false;

  if (eventsArr.length > 0) {
    eventsArr.forEach((item) => {
      if (
        item.day === activeDay &&
        item.month === month + 1 &&
        item.year === year
      ) {
        item.events.push(newEvent);
        eventAdded = true;
      }
    });
  }

  if (!eventAdded) {
    eventsArr.push({
      day: activeDay,
      month: month + 1,
      year: year,
      events: [newEvent],
    });
  }

  console.log(eventsArr);
  addEventWrapper.classList.remove("active");
  addEventTitle.value = "";
  addEventFrom.value = "";
  addEventTo.value = "";
  updateEvents(activeDay);

  //selecione o dia evento e adicione a classe de active, se não for adicionado
  const activeDayEl = document.querySelector(".day.active");
  if (!activeDayEl.classList.contains("event")) {
    activeDayEl.classList.add("event");
  }
});

//---------------------------------------------------------------------------------------------------------

//função para excluir evento quando clicado no evento
eventsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("event")) {
    if (confirm("Tem certeza de que deseja excluir este evento?")) {
      const eventTitle = e.target.children[0].children[1].innerHTML;
      eventsArr.forEach((event) => {
        if (
          event.day === activeDay &&
          event.month === month + 1 &&
          event.year === year
        ) {
          event.events.forEach((item, index) => {
            if (item.title === eventTitle) {
              event.events.splice(index, 1);
            }
          });
          // Se nenhum evento restante em um dia, remova esse dia de eventsArr
          if (event.events.length === 0) {
            eventsArr.splice(eventsArr.indexOf(event), 1);
            //remover event class do dia
            const activeDayEl = document.querySelector(".day.active");
            if (activeDayEl.classList.contains("event")) {
              activeDayEl.classList.remove("event");
            }
          }
        }
      });
      updateEvents(activeDay);
    }
  }
});

//função para salvar eventos no armazenamento local
// function saveEvents() {
//   localStorage.setItem("events", JSON.stringify(eventsArr));
// }

// //função para obter eventos do armazenamento local
// function getEvents() {
//   //verifique se os eventos já estão salvos no armazenamento local e retorne o evento senão nada
//   if (localStorage.getItem("events") === null) {
//     return;
//   }
//   eventsArr.push(...JSON.parse(localStorage.getItem("events")));
// }

// Define a função para realizar o INSERT no banco de dados
function saveEvents() {
  // Obtém as informações que serão inseridas no banco de dados
  const inputDate = new Date(year, month, activeDay);
  var checkin = inputDate.toLocaleDateString();
  var room_id = addEventTitle.value;
  var disciplina_id = addEventDisc.value;
  var time_F = addEventFrom.value;
  var time_T = addEventTo.value;

  // Realiza o INSERT no banco de dados usando a variável `users_id`
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'locacao_query.php', true);
  xhr.setRequestHeader('location', 'reservlab.php?calender');
  xhr.onload = function () {
    // Manipula a resposta do servidor aqui
  };
  xhr.send('&room_id=' + room_id + '&disciplina_id=' + disciplina_id + '&checkin=' + checkin + '&time_F=' + time_F + '&time_T=' + time_T);
}

// Envia uma solicitação GET para o endpoint de API que retorna os eventos para o array eventsArr
function getEvents(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'list_event_query.php', true);
  xhr.onload = function () {
    // Converte os dados JSON em um array de objetos JavaScript
    const response = JSON.parse(xhr.responseText);
    const eventos = Array.isArray(response) ? response : Object.values(response).map(obj => obj);
    
    if (eventos.length > 0) {
      eventos.forEach(item => {
        const { day, month, year, title, time } = item;
        const newEvent = { title, time };

        let eventAdded = false;

        if (eventsArr.length > 0) {
          eventsArr.forEach((eventObj) => {
          if (
            eventObj.day === day &&
            eventObj.month === month && 
            eventObj.year === year
            ) {
            eventObj.events.push(newEvent);
            eventAdded = true;
            }
          });
        }

        if (!eventAdded) {
          eventsArr.push({
            day: day,
            month: month,
            year: year,
            events: [newEvent],
          });
        }
      
        console.log(eventsArr);
        addEventWrapper.classList.remove("active");
        addEventTitle.value = "";
        addEventFrom.value = "";
        addEventTo.value = "";
        initCalendar();
      });        
    }
  };
  xhr.send();
}

//converter hora para o formato de 24 horas  
function convertTime(time) {
  let timeArr = time.split(":");
  let timeHour = timeArr[0];
  let timeMin = timeArr[1];
  let timeFormat = timeHour >= 12 ? "PM" : "AM";
  timeHour = timeHour % 12 || 12;
  time = timeHour + ":" + timeMin + " " + timeFormat;
  return time;
}

// função para configurar a data de devolução em events dateInput2

// dateInput2.addEventListener("input", (e) => {
//   dateInput2.value = dateInput2.value.replace(/[^0-9/]/g, "");
//   if (dateInput2.value.length === 2) {
//     dateInput2.value += "/";
//   }
//   if (dateInput2.value.length === 5) {
//     dateInput2.value += "/";
//   }
//   if (dateInput2.value.length > 10) {
//     dateInput2.value = dateInput2.value.slice(0, 10);
//   }
//   if (e.inputType === "deleteContentBackward") {
//     if (dateInput2.value.length === 6 || dateInput2.value.length === 3) {
//       dateInput2.value = dateInput2.value.slice(0, 2);
//     }
//   }
// });
