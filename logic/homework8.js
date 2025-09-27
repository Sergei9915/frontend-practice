const arrTitleName = ["Airlines", "Departure", "Duration", "Arrival", "Price"];
const dataObjAirlines = [
  {
    title: "Airline",
    time_1: "09:45",
    limitTime: "10:00",
    cloklInfo: "15:45",
    price: 980,
  },
  {
    title: "Airline",
    time_1: "01:45",
    limitTime: "00:00",
    cloklInfo: "13:45",
    price: 980,
  },
  {
    title: "Airline",
    time_1: "00:45",
    limitTime: "20:00",
    cloklInfo: "05:45",
    price: 980,
  },
  {
    title: "Airline",
    time_1: "06:25",
    limitTime: "10:00",
    cloklInfo: "15:45",
    price: 980,
  },
  {
    title: "Airline",
    time_1: "00:35",
    limitTime: "11:00",
    cloklInfo: "12:45",
    price: 980,
  },

  { subTitles: ["EE-41", "Oi-22", "Non stop", "Sunday"] },
];

function nameTitle() {
  const blockInfo = document.querySelector(".block-info");

  arrTitleName.map((el) => {
    const element = document.createElement("p");
    element.textContent = el;

    blockInfo.append(element);
  });
}

nameTitle();

const newArr = dataObjAirlines.filter((title) => title.title);

function infoBlock() {
  const elementBlock = document.querySelectorAll(".two-block-info div");

  for (let i = 0; i < elementBlock.length; i++) {
    elementBlock[i].innerHTML = `<p>${newArr[i].title}</p>
      <p>${newArr[i].time_1}</p>
      <p>${newArr[i].limitTime}</p>
      <p>${newArr[i].cloklInfo}</p>
      <p>${newArr[i].price}$</p>`;
  }
}

infoBlock();
