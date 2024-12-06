import { SubjectType } from '~/app/enum/SubjectType';
import { QuestionType } from '~/app/enum/QuestionType';
import { HumanBodyPosition } from '~/app/enum/HumanBodyPosition';
import type { Question } from '~/app/enum/Question';

const initialQuestions: Question[] = [
    {
        id: 1,
        humanBodyPosition: HumanBodyPosition.Lung,
        subjectType: SubjectType.Ocean,
        questionType: QuestionType.TrueOrFalse,
        question: "Le plancton est-il responsable de la majeure partie de la production de l'O₂ ?",
        answer:"true",
    },
    {
        id: 2,
        humanBodyPosition: HumanBodyPosition.Heart,
        subjectType: SubjectType.Ocean,
        questionType: QuestionType.FillInBlank,
        question: "Le cœur humain est à la circulation sanguine ce que les {answer} sont au mouvement des océans.",
        blanks: [
            { id: 'answer', answer: 'marées' },
        ],
    },
    {
        id: 3,
        humanBodyPosition: HumanBodyPosition.Ribs,
        subjectType: SubjectType.Ocean,
        questionType: QuestionType.Reply,
        question: 
            "Les récifs coralliens protègent les côtes en :\n" +
            "A) Réduisant l'énergie des vagues.\n" +
            "B) Filtrant l'eau des polluants.\n" +
            "C) Produisant du sable.\n" +
            "D) Toutes ces réponses.\n",
        answer: "D",
    },  
    {
        id: 4,
        humanBodyPosition: HumanBodyPosition.Head,
        subjectType: SubjectType.Ocean,
        questionType: QuestionType.Reply,
        question: 
            "Quel est le rôle principal des océans dans la régulation climatique de notre planète ?\n" +
            "A) Ils agissent comme des puits de méthane.\n" +
            "B) Ils capturent une grande quantité de dioxyde de carbone (CO₂).\n" +
            "C) Ils fournissent une source inépuisable d'énergie éolienne.\n" +
            "D) Ils augmentent les niveaux de sel dans l'air.",
        answer: "B",
    },    
    {
        id: 5,
        humanBodyPosition: HumanBodyPosition.Lung,
        subjectType: SubjectType.Human,
        questionType: QuestionType.Reply,
        question: 
            "Les océans sont les poumons de la Terre mais quelle proportion de O₂ produite ?\n" +
            "A) 10%.\n" +
            "B) 15%.\n" +
            "C) 50%.\n" +
            "D) 86%.\n",
        answer: "C",
    },  
    {
        id: 6,
        humanBodyPosition: HumanBodyPosition.Ribs,
        subjectType: SubjectType.Human,
        questionType: QuestionType.Reply,
        question: 
            "En quoi les côtes protègent-elles les organes vitaux du corps humain ?\n" +
            "A) Elles absorbent les chocs externes.\n" +
            "B) Elles renforcent les muscles abdominaux.\n" +
            "C) Elles forment une cage osseuse rigide autour du cœur et des poumons.\n" +
            "D) Elles permettent à l'air de circuler dans les organes vitaux.",
        answer: "C",
    },
    {
        id: 7,
        humanBodyPosition: HumanBodyPosition.Head,
        subjectType: SubjectType.Human,
        questionType: QuestionType.Reply,
        question: 
            "Le cerveau humain consomme de l'O₂, en partie produite par les eaux. Mais quelle proportion ?\n" +
            "A) 10%.\n" +
            "B) 20%.\n" +
            "C) 50%.\n" +
            "D) 80%.\n",
        answer: "B",
    },
    {
        id: 8,
        humanBodyPosition: HumanBodyPosition.Heart,
        subjectType: SubjectType.Human,
        questionType: QuestionType.TrueOrFalse,
        question: "Vrai ou faux : Le cœur humain pompe chaque jour suffisamment de sang pour remplir une petite piscine, similaire à un courant marin",
        answer: "true",
    },
];

export default initialQuestions;