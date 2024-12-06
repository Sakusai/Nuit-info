import { create } from 'zustand';
import type { SubjectType } from '~/app/enum/SubjectType';
import type { HumanBodyPosition } from '~/app/enum/HumanBodyPosition';
import type { Question } from '~/app/enum/Question';
import initialQuestions from './initialQuestions';

interface QuizState {
    /**
     * La liste des questions du quiz
     */
    questions: Question[];
    /**
     * La fonction pour définir si la réponse à une question est correcte ou non
     * @param questionId L'identifiant de la question
     * @param isCorrect La réponse à la question est-elle correcte ?
     * @returns void
     */
    setCorrectAnswer: (questionId: number, isCorrect: boolean) => void;
    /**
     * La fonction pour obtenir les questions par type de sujet
     * @param subjectType Le type de sujet des questions
     * @returns La liste des questions par type de sujet
     */
    getQuestionsBySubjectType: (subjectType: SubjectType) => Question[];
    /**
     * La fonction pour obtenir la première question par position du corps humain et type de sujet de la question
     */
    getFirstQuestionByHumanBodyPositionAndSubjectType(humanBodyPosition: HumanBodyPosition, subjectType: SubjectType): Question | undefined;
    /**
     * La fonction pour recommencer le quiz
     */
    restartQuiz: () => void;
}

const useQuizStore = create<QuizState>((set, get) => ({
    questions: initialQuestions,
    setCorrectAnswer: (questionId, isCorrect) => {
        set((state) => {
            const question = state.questions.find((q) => q.id === questionId);
            if (question) {
                question.isCorrect = isCorrect;
            }
            return {
                questions: state.questions,
            };
        });
    },
    getQuestionsBySubjectType: (subjectType: SubjectType) => {
        return get().questions.filter((q) => q.subjectType === subjectType);
    },
    getFirstQuestionByHumanBodyPositionAndSubjectType: (humanBodyPosition: HumanBodyPosition, subjectType: SubjectType) => {
        return get().questions.find((q) => q.humanBodyPosition === humanBodyPosition && q.subjectType === subjectType);
    },
    restartQuiz: () => {
        set((state) => ({
            questions: state.questions.map((q) => ({ ...q, isCorrect: undefined })),
        }));
    },
}));

export default useQuizStore;