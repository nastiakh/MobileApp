const answers_time1 = [
  {
    id: 11,
    title: "In class, learning",
  },
  {
    id: 12,
    title: "Independent homework",
  },
  {
    id: 13,
    title: "None of the above",
  },
  {
    id: 14,
    title: "None of the above",
  },
  {
    id: 15,
    title: "None of the above",
  },
  {
    id: 16,
    title: "None of the above",
  },
  {
    id: 17,
    title: "None of the above",
  },
];

const answers_time2 = [
  {
    id: 1,
    title: "None of the time",
  },
  {
    id: 2,
    title: "Some of the time",
  },
  {
    id: 3,
    title: "The whole time",
  },
];

// export const DecisionTree = [
//   {
//   id: 1,
//   description: "question number 1",
//   created_at: "2023-05-31T11:49:09.273662Z",
//   updated_at: "2023-05-31T11:49:09.282746Z",
//   related_ans: -1,
//   answers: answers_time1,
//   childrens: [
//     {
//       id: 2,
//       description: "question number 2 if answer is 1 at question number 1",
//       created_at: "2023-05-31T11:50:04.609380Z",
//       updated_at: "2023-05-31T11:50:04.615400Z",
//       answers: answers_time2,
//       related_ans: 11,
//       childrens: [
//         {
//           id: 7,
//           description: "question number 3 if answer is 1 at question number 1",
//           created_at: "2023-05-31T11:50:11.747726Z",
//           updated_at: "2023-05-31T11:50:11.752881Z",
//           answers: answers_time1,
//           related_ans: 1,
//           childrens: [],
//         },
//         {
//           id: 8,
//           description: "question number 2 if answer is 5 at question number 1",
//           created_at: "2023-05-31T11:50:11.747726Z",
//           updated_at: "2023-05-31T11:50:11.752881Z",
//           answers: answers_time1,
//           related_ans: 2,
//           childrens: [],
//         },
//         {
//           id: 9,
//           description: "question number 2 if answer is 5 at question number 1",
//           created_at: "2023-05-31T11:50:11.747726Z",
//           updated_at: "2023-05-31T11:50:11.752881Z",
//           answers: answers_time1,
//           related_ans: 3,
//           childrens: [],
//         },
//         {
//           id: 10,
//           description: "question number 2 if answer is 5 at question number 1",
//           created_at: "2023-05-31T11:50:11.747726Z",
//           updated_at: "2023-05-31T11:50:11.752881Z",
//           answers: answers_time1,
//           related_ans: 4,
//           childrens: [],
//         },
//       ],
//     },
//     {
//       id: 3,
//       description: "question number 2 if answer is 2 at question number 1",
//       created_at: "2023-05-31T11:50:11.747726Z",
//       updated_at: "2023-05-31T11:50:11.752881Z",
//       answers: answers_time2,
//       related_ans: 12,
//       childrens: [],
//     },
//     {
//       id: 4,
//       description: "question number 2 if answer is 3 at question number 1",
//       created_at: "2023-05-31T11:50:11.747726Z",
//       updated_at: "2023-05-31T11:50:11.752881Z",
//       answers: answers_time2,
//       related_ans: 13,
//       childrens: [],
//     },
//     {
//       id: 5,
//       description: "question number 2 if answer is 4 at question number 1",
//       created_at: "2023-05-31T11:50:11.747726Z",
//       updated_at: "2023-05-31T11:50:11.752881Z",
//       answers: answers_time2,
//       related_ans: 14,
//       childrens: [],
//     },
//     {
//       id: 6,
//       description: "question number 2 if answer is 5 at question number 1",
//       created_at: "2023-05-31T11:50:11.747726Z",
//       updated_at: "2023-05-31T11:50:11.752881Z",
//       answers: answers_time2,
//       related_ans: 15,
//       childrens: [],
//     },
//   ],
// ];

export const DecisionTree = {
  id: 1,
  description: "In the past hour, have you engaged in one of the following?",
  created_at: "2023-05-31T11:49:09.273662Z",
  updated_at: "2023-05-31T11:49:09.282746Z",
  related_ans: -1,
  answers: answers_time1,
  childrens: [
    {
      id: 2,
      description: "How often did you turn to social media during class?",
      created_at: "2023-05-31T11:50:04.609380Z",
      updated_at: "2023-05-31T11:50:04.615400Z",
      answers: answers_time2,
      related_ans: 11,
      childrens: [
        {
          id: 9,
          description: "appears if question 2 answer 1",
          created_at: "2023-05-31T11:50:25.158418Z",
          updated_at: "2023-05-31T11:50:25.164656Z",
          answers: answers_time1,
          related_ans: 1,
          childrens: [],
        },
      ],
    },
    {
      id: 3,
      description: "appears if answer is 2",
      created_at: "2023-05-31T11:50:11.747726Z",
      updated_at: "2023-05-31T11:50:11.752881Z",
      answers: answers_time2,
      related_ans: 12,
      childrens: [],
    },
    {
      id: 4,
      description: "appears if answer is 3",
      created_at: "2023-05-31T11:50:11.747726Z",
      updated_at: "2023-05-31T11:50:11.752881Z",
      answers: answers_time2,
      related_ans: 13,
      childrens: [],
    },
    // {
    //   id: 7,
    //   description: "appears if answer is 4",
    //   created_at: "2023-05-31T11:50:11.747726Z",
    //   updated_at: "2023-05-31T11:50:11.752881Z",
    //   answers: answers_time2,
    //   related_ans: 13,
    //   childrens: [],
    // },
  ],
};
