new gridjs.Grid({
  columns: ["Name", "Email", "Phone Number"],
  search: true,
  data: [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Rengoku", "rengoku@mail.com", "(353) 22 87 8356"],
    ["Darkness", "darkness@mail.com", "(353) 22 87 8356"],
    ["Akashi", "akashi@mail.com", "(353) 22 27 8356"],
    ["Wastashi", "watashi@mail.com", "(353) 82 87 8356"],
    ["Tanjiro", "tanjiro@mail.com", "(353) 35 87 8356"],
    ["Reyna", "reyna@mail.com", "(353) 22 73 8356"],
    ["Omen", "omen@mail.com", "(353) 22 29 8356"],
    ["Jett", "jet@mail.com", "(353) 22 90 8356"],
    ["Knight", "knight@mail.com", "(353) 21 87 8356"],
    ["Zephyr", "zephyr@mail.com", "(353) 12 87 8356"],
  ],
  pagination: {
    limit: 5,
  },
}).render(document.getElementById("app"));
