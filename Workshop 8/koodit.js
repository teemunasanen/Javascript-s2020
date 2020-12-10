// EX1
function firstButton() {
  var text =
    '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

  jsonObj = JSON.parse(text);

  for (x = 0; x < jsonObj.employees.length; x++) {
    document.getElementById("jsondata").innerHTML +=
      "<br>" +
      jsonObj.employees[x].firstName +
      " " +
      jsonObj.employees[x].lastName;
  }
}

function secondButton() {
  var text =
    '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

  jsonObj = JSON.stringify({ text });
  document.getElementById("jsondata").innerHTML += "<br>" + jsonObj;
}

// EX2: If the CORS-issue is preventing the data to be loaded, we can just use local variable
// Online at: https://api.myjson.com/bins/18bfgz (MS)

  var data = [
    {
      _id: "58297a7e5ce6837d92edd2ee",
      index: 0,
      guid: "59565e4a-92c3-4092-b667-e1c6f2613290",
      isActive: false,
      balance: "$3,503.16",
      picture:
        "https://thumb1.shutterstock.com/display_pic_with_logo/244417/342536783/stock-vector-a-man-talking-to-microphone-at-interview-342536783.jpg",
      age: 34,
      eyeColor: "brown",
      name: {
        first: "Bender",
        last: "Mcgee",
      },
      company: "PLASTO",
      email: "bender.mcgee@plasto.net",
      phone: "+1 (915) 400-2087",
      address: "155 Hemlock Street, Lloyd, New Hampshire, 1713",
      about:
        "Ut eiusmod ullamco qui non et. Culpa voluptate incididunt consectetur commodo amet. Est adipisicing dolor excepteur eu tempor elit mollit tempor. Enim ea duis exercitation do proident labore et tempor.",
      registered: "Tuesday, March 10, 2015 6:29 AM",
      latitude: "75.147737",
      longitude: "-95.100984",
      tags: ["fugiat", "sint", "consectetur", "incididunt", "aliquip"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Bruce Pace",
        },
        {
          id: 1,
          name: "Leila Morin",
        },
        {
          id: 2,
          name: "Laura Huber",
        },
      ],
      greeting: "Hello, Bender! You have 6 unread messages.",
      favoriteFruit: "apple",
    },
    {
      _id: "58297a7ef56dee4c8ce3b0fd",
      index: 1,
      guid: "8baa0953-14c3-46a7-95b4-fc35114e1d97",
      isActive: false,
      balance: "$2,348.12",
      picture:
        "https://carleton.ca/csas/wp-content/uploads/icon-expert-black-1-200x200.png",
      age: 27,
      eyeColor: "brown",
      name: {
        first: "Milagros",
        last: "Carlson",
      },
      company: "VURBO",
      email: "milagros.carlson@vurbo.ca",
      phone: "+1 (982) 453-2270",
      address: "196 Williams Court, Lynn, Northern Mariana Islands, 9103",
      about:
        "Veniam ad anim ad in aliqua commodo sunt. Commodo laboris esse laboris duis consequat consequat cupidatat in ex commodo nostrud. Nostrud velit qui magna laboris sint. Commodo minim excepteur cupidatat laboris dolor sunt ex dolore aliquip mollit exercitation laborum quis.",
      registered: "Sunday, July 17, 2016 10:48 PM",
      latitude: "5.925241",
      longitude: "-118.76087",
      tags: ["fugiat", "eu", "irure", "sit", "sit"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Sherry Melendez",
        },
        {
          id: 1,
          name: "Gonzalez Emerson",
        },
        {
          id: 2,
          name: "Cohen Gross",
        },
      ],
      greeting: "Hello, Milagros! You have 6 unread messages.",
      favoriteFruit: "strawberry",
    },
    {
      _id: "58297a7e54ae88861c7f5291",
      index: 2,
      guid: "6eb61d9a-1589-4cd2-83ad-705f6c38693a",
      isActive: true,
      balance: "$3,510.12",
      picture:
        "http://www.clipartkid.com/images/87/feature-dronsfield-thumbnail-tcm18-85321-jpg-VJAWsa-clipart.jpg",
      age: 25,
      eyeColor: "green",
      name: {
        first: "Young",
        last: "Stafford",
      },
      company: "SEALOUD",
      email: "young.stafford@sealoud.co.uk",
      phone: "+1 (818) 463-3707",
      address: "190 Highland Place, Strykersville, Hawaii, 4911",
      about:
        "Qui nulla do eiusmod amet ullamco et do sint quis amet cillum dolore esse. Est proident dolor sint culpa id quis veniam irure in sit ullamco. Consequat magna reprehenderit tempor incididunt proident elit qui aliqua ea exercitation irure eu aliqua. Quis ad reprehenderit duis duis cillum proident.",
      registered: "Wednesday, February 24, 2016 5:14 AM",
      latitude: "-89.358092",
      longitude: "-117.164822",
      tags: ["culpa", "enim", "veniam", "aliqua", "Lorem"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Sheena Norman",
        },
        {
          id: 1,
          name: "Neva Andrews",
        },
        {
          id: 2,
          name: "Robles Monroe",
        },
      ],
      greeting: "Hello, Young! You have 5 unread messages.",
      favoriteFruit: "apple",
    },
    {
      _id: "58297a7e8c508dd9ec617839",
      index: 3,
      guid: "19c11902-b916-4384-b1fc-12fabb0d5dc3",
      isActive: false,
      balance: "$2,181.71",
      picture:
        "http://karenquinn.net/wordpress/wp-content/uploads/woman_head_silhouette_2t2z-260x300.jpg",
      age: 32,
      eyeColor: "brown",
      name: {
        first: "Stephenson",
        last: "Mcmahon",
      },
      company: "PURIA",
      email: "stephenson.mcmahon@puria.io",
      phone: "+1 (844) 491-3581",
      address: "723 Mill Avenue, Centerville, Vermont, 819",
      about:
        "Id commodo ullamco culpa excepteur pariatur consectetur. Magna exercitation eiusmod adipisicing commodo deserunt velit reprehenderit fugiat. Consectetur laboris sit ipsum ipsum cillum velit et pariatur amet. Esse ad sit ipsum qui ex do excepteur dolor sint laborum ut do ut. Magna cillum elit deserunt consequat esse. Veniam nostrud mollit est ut minim voluptate. Aliquip mollit sint consequat veniam laborum irure do consequat.",
      registered: "Friday, June 20, 2014 12:58 PM",
      latitude: "-34.545789",
      longitude: "-0.381433",
      tags: ["amet", "officia", "nostrud", "labore", "aliqua"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Patti Rivas",
        },
        {
          id: 1,
          name: "Melody Dorsey",
        },
        {
          id: 2,
          name: "Dean Hogan",
        },
      ],
      greeting: "Hello, Stephenson! You have 9 unread messages.",
      favoriteFruit: "apple",
    },
    {
      _id: "58297a7e0f89043a0269c92d",
      index: 4,
      guid: "8ccdad7c-569b-40a8-b35e-6064f88c7b78",
      isActive: false,
      balance: "$2,060.68",
      picture:
        "http://www.clipartkid.com/images/84/10-face-profile-silhouette-clip-art-free-cliparts-that-you-can-d2qFHu-clipart.jpeg",
      age: 28,
      eyeColor: "brown",
      name: {
        first: "Lakeisha",
        last: "Merritt",
      },
      company: "DADABASE",
      email: "lakeisha.merritt@dadabase.tv",
      phone: "+1 (851) 434-3278",
      address: "211 Nichols Avenue, Freetown, Wisconsin, 6548",
      about:
        "Nisi esse voluptate do sint. Nisi dolore nisi voluptate dolor eiusmod ad pariatur sit deserunt. Est et amet excepteur dolor pariatur eiusmod. Reprehenderit anim aliquip et deserunt est exercitation officia commodo fugiat aute nisi. Consequat excepteur cillum non Lorem Lorem amet. Amet ipsum Lorem aliquip ut eu non non. Tempor incididunt aliqua sunt ullamco.",
      registered: "Friday, March 4, 2016 8:44 PM",
      latitude: "-59.378815",
      longitude: "14.200523",
      tags: ["eiusmod", "fugiat", "commodo", "excepteur", "enim"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Willis Carpenter",
        },
        {
          id: 1,
          name: "Rivera Parsons",
        },
        {
          id: 2,
          name: "Tommie Fitzgerald",
        },
      ],
      greeting: "Hello, Lakeisha! You have 5 unread messages.",
      favoriteFruit: "apple",
    },
  ];
 


// If CORS-issue is fine (IE seems to work), we can fetch the data using AJAX
// Define a variable which can be used globally

// CORS is issue or something else with offered links, I couldn't fetch so using local variable...
function loadJSONDoc() {
  jsonObj = JSON.stringify(data);
  document.getElementById("rawdata").innerHTML = jsonObj;
}
// Parsing data to a table
function loadJSONDocWithParse() {
  var out = "<table>";
  for (i = 0; i < data.length; i++) {
    out += "<td>" + data[i].name.first + "</td>";
    out += "<td>" + data[i].name.last + "</td>";
    out += "<td>" + data[i].eyeColor + "</td>";
    out += "<td>" + data[i].balance + "</td>";
    out += "<td><img src='" + data[i].picture + "'></td>";
    out += "</tr>";
  }
  out += "</table>";

  document.getElementById('rawdata').innerHTML = out;
}

//EX 3

