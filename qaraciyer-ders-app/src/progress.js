import { STORAGE_KEY, sections, quiz } from "./content.js";

const defaultState = () => ({
  completed: {},
  selfRevealed: {},
  quizAnswers: {},
  quizSubmitted: false,
  view: "home",
  sectionId: sections[0].id,
});

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return { ...defaultState(), ...parsed };
  } catch {
    return defaultState();
  }
}

export function saveProgress(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function sectionProgressPercent(state) {
  const total = sections.length;
  const done = sections.filter((s) => state.completed[s.id]).length;
  return Math.round((done / total) * 100);
}

export function scoreQuiz(answers) {
  let correct = 0;
  quiz.forEach((item) => {
    if (answers[item.id] === item.correct) correct += 1;
  });
  return {
    correct,
    total: quiz.length,
    percent: Math.round((correct / quiz.length) * 100),
  };
}
