
const questions = [
    {
      _id: "1",
      text: "Indoor limits for parties 10?, 1, 2, 3",
      answers: [
          { _id: "1", name: "Green" },
          { _id: "2", name: "Yellow" },
          { _id: "3", name: "Orange" }
      ]
    },
    {
      _id: "2",
      text: "Outdoor limits for parties 25?, 1, 2, 3, 4",
      answers: [
          { _id: "1", name: "Green" },
          { _id: "2", name: "Yellow" },
          { _id: "3", name: "Orange" },
          { _id: "4", name: "Red" }
      ]
    },
    {
      _id: "3",
      text: "At a restaurant 6 people could be seated together?, 2",
      answers: [
          { _id: "2", name: "Yellow" }
      ]
    },
    {
      _id: "4",
      text: "At a restaurant 4 people could be seated together?, 3",
      answers: [
        { _id: "3", name: "Orange" }
      ]
    },
    {
      _id: "5",
      text: "Indoor limits for parties 5?, 4",
      answers: [
        { _id: "4", name: "Red" }
      ]
    },
    {
      _id: "6",
      text: "Maximum number of patrons permitted to be seated indoors at a restaurant is 10?, 4",
      answers: [
        { _id: "4", name: "Red" }
      ]
    },
    {
      _id: "7",
      text: "At a restaurant 4 people could be seated together?, 4",
      answers: [
        { _id: "4", name: "Red" }
      ]
    },  
    {
      _id: "8",
      text: "Restaurants and similar establishments must be closed from 10 p.m. to 5 a.m.?, 3, 4",
      answers: [
        { _id: "3", name: "Orange" },
        { _id: "4", name: "Red" }
      ]
    },
    {
      _id: "9",
      text: "performing arts facilites closed to spectators?, 4",
      answers: [
        { _id: "4", name: "Red" }
      ]
    },
    {
      _id: "10",
      text: "No indoor organized public events and social gatherings&#44; except with members of the same household?, 5",
      answers: [
        { _id: "5", name: "Grey" }
      ]
    },
    {
      _id: "11",
      text: "Indoor and outdoor service prohibited at restaurants?, 5",
      answers: [
        { _id: "5", name: "Grey" }
      ]
    },
    {
      _id: "12",
      text: "Hair Salons closed?, 5",
      answers: [
        { _id: "5", name: "Grey" }
      ]
    },
    {
      _id: "13",
      text: "Casinos Closed?, 5",
      answers: [
        { _id: "5", name: "Grey" }
      ]
    }
  ];
  
  export function getQuestions() {
    return questions;
  }
  
  export function getQuestion(id) {
    return questions.find(q => q._id === id);
  }

  export function getRanromQuestions() {
    let shuffleQuestions = [...questions];
        for (let i = shuffleQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffleQuestions[i], shuffleQuestions[j]] = [shuffleQuestions[j], shuffleQuestions[i]];
        }
    return shuffleQuestions;
  }