import { SubjectType } from '~/app/enum/SubjectType';
import { QuestionType } from '~/app/enum/QuestionType';
import { HumanBodyPosition } from '~/app/enum/HumanBodyPosition';

export interface Question {
    /**
     * L'identifiant de la question
     */
    id: number;
    /**
     * La position du corps humain pour la question
     */
    humanBodyPosition: HumanBodyPosition;
    /**
     * Le type de sujet de la question (océan ou humain)
     */
    subjectType: SubjectType
    /**
     * Le type de question (réponse, vrai ou faux, compléter les trous)
     */
    questionType: QuestionType;
    /**
     * La question à poser ou les parties de la question à poser si la question est de type `fill-in-blank`
     */
    question: string[] | string;
    /**
     * L'image d'illustration de la question
     */
    imageSrc?: string;
    /**
     * Texte alternatif de l'image d'illustration de la question
     */
    imageAlt?: string;
    /**
     * L'utilisateur a-t-il répondu correctement à la question ?
     */
    isCorrect?: boolean;
}