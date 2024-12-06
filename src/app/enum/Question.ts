import type { SubjectType } from "~/app/enum/SubjectType";
import type { QuestionType } from "~/app/enum/QuestionType";
import type { HumanBodyPosition } from "~/app/enum/HumanBodyPosition";

interface Blank {
  id: string;
  answer: string;
}

export interface Question {
  /**
   * L'identifiant de la question
   */
  id: number;
  /**
   * La position du corps humain pour la question
   */
  humanBodyPosition: HumanBodyPosition;
  blanks?: Blank[];
  /**
   * Le type de sujet de la question (océan ou humain)
   */
  subjectType: SubjectType;
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
  /**
   * La réponse à la question
   */
  answer?: string;
  /*
   * L'explication de la réponse
   */
  multipleAnswers?: { letter: string; entire: string }[];
  /*
   * L'explication de la réponse
   */
  explanation?: string;
}
