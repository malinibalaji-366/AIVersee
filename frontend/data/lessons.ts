export const lessons = {
  foundations: [
    {
      id: 1,
      slug: "variables",
      title: "Variables",
      duration: "12 min",
      progress: 0,

      content: [
        {
          type: "text",
          title: "What is a Variable?",
          body:
            "A variable is a named container that stores information. Instead of remembering values yourself, the computer remembers them using variables.",
        },

        {
          type: "tip",
          title: "💡 Arivu Tip",
          body:
            "Imagine a variable as a labeled box. You can put something inside the box and later open it whenever you need it.",
        },

        {
          type: "code",
          language: "python",
          code: `name = "Malini"

print(name)`,
        },

        {
          type: "challenge",
          question: "What will this print?",

          code: `age = 18

print(age)`,

          options: [
            "18",
            "age",
            "Error",
            "Nothing",
          ],

          answer: "18",
        },
      ],
    },
  ],
};