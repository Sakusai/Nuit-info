import { SubjectType } from '~/app/enum/SubjectType';
import { QuestionType } from '~/app/enum/QuestionType';
import { HumanBodyPosition } from '~/app/enum/HumanBodyPosition';
import type { Question } from '~/app/enum/Question';

const initialQuestions: Question[] = [
    {
        id: 1,
        humanBodyPosition: HumanBodyPosition.Head,
        subjectType: SubjectType.Ocean,
        questionType: QuestionType.Reply,
        question: 'Quel est le nom de ce personnage ?',
        imageSrc: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png',
        imageAlt: 'Avatar',
        blanks: undefined
    },
    {
        id: 2,
        humanBodyPosition: HumanBodyPosition.Torso,
        subjectType: SubjectType.Human,
        questionType: QuestionType.FillInBlank,
        question: 'Le {animal} mange une {nourriture}.',
        blanks: [
            { id: 'animal', answer: 'chat' },
            { id: 'nourriture', answer: 'souris' },
        ],
    },
    {
        id: 3,
        humanBodyPosition: HumanBodyPosition.Lung,
        subjectType: SubjectType.Human,
        questionType: QuestionType.FillInBlank,
        question: "L'{action} est importante pour rester en bonne santé.",
        blanks: [
            { id: 'action', answer: 'exercice' },
        ],
    },
];

export default initialQuestions;