import { SubjectType } from "~/app/enum/SubjectType";
import { QuestionType } from "~/app/enum/QuestionType";
import { HumanBodyPosition } from "~/app/enum/HumanBodyPosition";
import type { Question } from "~/app/enum/Question";

const initialQuestions: Question[] = [
  {
    id: 1,
    humanBodyPosition: HumanBodyPosition.Lung,
    subjectType: SubjectType.Ocean,
    questionType: QuestionType.TrueOrFalse,
    question:
      "Le plancton est-il responsable de la majeure partie de la production de l'O₂ ?",
    answer: "true",
  },
  {
    id: 2,
    humanBodyPosition: HumanBodyPosition.Heart,
    subjectType: SubjectType.Ocean,
    questionType: QuestionType.FillInBlank,
    question:
      "Le cœur humain est à la circulation sanguine ce que les {answer} sont au mouvement des océans.",
    blanks: [{ id: "answer", answer: "marées" }],
  },
  {
    id: 3,
    humanBodyPosition: HumanBodyPosition.Ribs,
    subjectType: SubjectType.Ocean,
    questionType: QuestionType.Reply,
    question: "Les récifs coralliens protègent les côtes en :",
    multipleAnswers: [
      { letter: "A", entire: "A) Réduisant l'énergie des vagues." },
      { letter: "B", entire: "B) Filtrant l'eau des polluants." },
      { letter: "C", entire: "C) Produisant du sable." },
      { letter: "D", entire: "D) Toutes ces réponses." },
    ],
    answer: "D",
  },
  {
    id: 4,
    humanBodyPosition: HumanBodyPosition.Head,
    subjectType: SubjectType.Ocean,
    questionType: QuestionType.Reply,
    question:
      "Quel est le rôle principal des océans dans la régulation climatique de notre planète ?",
    multipleAnswers: [
      { letter: "A", entire: "A) Ils agissent comme des puits de méthane." },
      {
        letter: "B",
        entire:
          "B) Ils capturent une grande quantité de dioxyde de carbone (CO₂).",
      },
      {
        letter: "C",
        entire: "C) Ils fournissent une source inépuisable d'énergie éolienne.",
      },
      {
        letter: "D",
        entire: "D) Ils augmentent les niveaux de sel dans l'air.",
      },
    ],
    answer: "B",
  },
  {
    id: 5,
    humanBodyPosition: HumanBodyPosition.Lung,
    subjectType: SubjectType.Human,
    questionType: QuestionType.Reply,
    question:
      "Les océans sont les poumons de la Terre mais quelle proportion de O₂ produite ?",
    multipleAnswers: [
      {letter: "A", entire:"A) 10%"},
      {letter: "B", entire:"B) 15%"},
      {letter: "C", entire:"C) 50%"},
      {letter: "D", entire:"D) 86%"},
    ],
    answer: "C",
  },
  {
    id: 6,
    humanBodyPosition: HumanBodyPosition.Ribs,
    subjectType: SubjectType.Human,
    questionType: QuestionType.Reply,
    question:
      "En quoi les côtes protègent-elles les organes vitaux du corps humain ?",
    multipleAnswers: [
      { letter: "A", entire: "A) Elles absorbent les chocs externes." },
      { letter: "B", entire: "B) Elles renforcent les muscles abdominaux." },
      {
        letter: "C",
        entire:
          "C) Elles forment une cage osseuse rigide autour du cœur et des poumons.",
      },
      {
        letter: "D",
        entire:
          "D) Elles permettent à l'air de circuler dans les organes vitaux.",
      },
    ],
    answer: "C",
  },
  {
    id: 7,
    humanBodyPosition: HumanBodyPosition.Head,
    subjectType: SubjectType.Human,
    questionType: QuestionType.Reply,
    question:
      "Le cerveau humain consomme de l'O₂, en partie produite par les eaux. Mais quelle proportion ?",
    multipleAnswers: [
      { letter: "A", entire: "A) 10%." },
      { letter: "B", entire: "B) 20%." },
      { letter: "C", entire: "C) 50%." },
      { letter: "D", entire: "D) 80%." },
    ],
    answer: "B",
  },
  {
    id: 8,
    humanBodyPosition: HumanBodyPosition.Heart,
    subjectType: SubjectType.Human,
    questionType: QuestionType.TrueOrFalse,
    question:
      "Vrai ou faux : Le cœur humain pompe chaque jour suffisamment de sang pour remplir une petite piscine, similaire à un courant marin",
    answer: "true",
  },
];

export default initialQuestions;
