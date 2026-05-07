import { useState } from "react";

// Чтобы добавить новый вопрос — просто добавь объект в этот массив
const questions = [
  {
    q: "Какой город является столицей Казахстана?",
    options: ["Алматы", "Астана", "Шымкент", "Актобе"],
    correct: 1,
    fact: "Астана — столица Казахстана с 1997 года. До этого столицей была Алматы.",
  },
  {
    q: "Какое озеро расположено на юге Казахстана и считается одним из крупнейших в Центральной Азии?",
    options: ["Балхаш", "Аральское море", "Зайсан", "Алаколь"],
    correct: 0,
    fact: "Озеро Балхаш уникально: западная часть пресноводная, а восточная — солёная.",
  },
  {
    q: "Как называется национальный музыкальный инструмент казахского народа?",
    options: ["Дутар", "Домбыра", "Комуз", "Рубаб"],
    correct: 1,
    fact: "Домбыра — двухструнный щипковый инструмент, символ казахской культуры. В 2022 году ЮНЕСКО включила его в список нематериального наследия.",
  },
  // Пример как добавить новый вопрос:
  // {
  //   q: "Текст вопроса?",
  //   options: ["Вариант А", "Вариант Б", "Вариант В", "Вариант Г"],
  //   correct: 0,   // индекс правильного ответа (0 = первый вариант)
  //   fact: "Интересный факт после ответа.",
  // },
];

const LETTERS = ["А", "Б", "В", "Г"];

// Результат считается по проценту правильных ответов — работает при любом кол-ве вопросов
function getResult(score, total) {
  const pct = score / total;
  if (pct === 1)  return { color: "#1D9E75", bg: "#E1F5EE", msg: "Отлично! Вы знаток Казахстана!" };
  if (pct >= 0.6) return { color: "#BA7517", bg: "#FAEEDA", msg: "Неплохо, но можно лучше!" };
  return              { color: "#D85A30", bg: "#FAECE7", msg: "Попробуйте ещё раз!" };
}

export default function KazakhstanQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const q = questions[current];
  const answered = selected !== null;

  function handleSelect(i) {
    if (answered) return;
    setSelected(i);
    if (i === q.correct) setScore((s) => s + 1);
  }

  function handleNext() {
    if (current + 1 >= total) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  const progress = ((current + (answered ? 1 : 0)) / total) * 100;

  if (finished) {
    const res = getResult(score, total);
    return (
      <div style={styles.wrap}>
        <div style={styles.resultBox}>
          <div style={{ ...styles.scoreCircle, background: res.bg, color: res.color }}>
            {score}/{total}
          </div>
          <p style={styles.resultMsg}>{res.msg}</p>
          <p style={styles.resultSub}>
            Вы ответили верно на {score} из {total} вопросов
          </p>
          <button style={styles.restartBtn} onClick={handleRestart}>
            Пройти снова
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.wrap}>
      <div style={styles.progressBar}>
        <div style={{ ...styles.progressFill, width: `${progress}%` }} />
      </div>

      <p style={styles.qLabel}>Вопрос {current + 1} из {total}</p>
      <p style={styles.qText}>{q.q}</p>

      <div style={styles.options}>
        {q.options.map((option, i) => {
          const isCorrect = answered && i === q.correct;
          const isWrong = answered && i === selected && i !== q.correct;
          return (
            <button
              key={i}
              style={{
                ...styles.optBtn,
                ...(isCorrect ? styles.optCorrect : {}),
                ...(isWrong ? styles.optWrong : {}),
              }}
              onClick={() => handleSelect(i)}
              disabled={answered}
            >
              <span
                style={{
                  ...styles.letter,
                  ...(isCorrect ? styles.letterCorrect : {}),
                  ...(isWrong ? styles.letterWrong : {}),
                }}
              >
                {LETTERS[i]}
              </span>
              {option}
            </button>
          );
        })}
      </div>

      {answered && (
        <div
          style={{
            ...styles.feedback,
            ...(selected === q.correct ? styles.feedbackCorrect : styles.feedbackWrong),
          }}
        >
          {selected === q.correct ? "✓ Правильно! " : "✗ Неверно. "}
          {q.fact}
        </div>
      )}

      {answered && (
        <button style={styles.nextBtn} onClick={handleNext}>
          {current === total - 1 ? "Посмотреть результат →" : "Следующий вопрос →"}
        </button>
      )}
    </div>
  );
}

const styles = {
  wrap: {
    maxWidth: 580,
    margin: "0 auto",
    padding: "24px 16px",
    fontFamily: "sans-serif",
  },
  progressBar: {
    height: 4,
    background: "#e5e5e5",
    borderRadius: 99,
    marginBottom: 28,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "#1D9E75",
    borderRadius: 99,
    transition: "width 0.4s ease",
  },
  qLabel: {
    fontSize: 13,
    color: "#888",
    margin: "0 0 8px",
  },
  qText: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 1.5,
    color: "#111",
    margin: "0 0 20px",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  optBtn: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "13px 16px",
    borderRadius: 12,
    border: "1px solid #e0e0e0",
    background: "#fff",
    color: "#111",
    fontSize: 15,
    textAlign: "left",
    cursor: "pointer",
    transition: "border-color 0.15s, background 0.15s",
  },
  optCorrect: {
    borderColor: "#0F6E56",
    background: "#E1F5EE",
  },
  optWrong: {
    borderColor: "#993C1D",
    background: "#FAECE7",
  },
  letter: {
    width: 28,
    height: 28,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 500,
    background: "#f0f0f0",
    color: "#666",
    border: "1px solid #e0e0e0",
    flexShrink: 0,
  },
  letterCorrect: {
    background: "#1D9E75",
    color: "#fff",
    border: "1px solid #1D9E75",
  },
  letterWrong: {
    background: "#D85A30",
    color: "#fff",
    border: "1px solid #D85A30",
  },
  feedback: {
    marginTop: 14,
    padding: "12px 16px",
    borderRadius: 8,
    fontSize: 14,
    lineHeight: 1.6,
  },
  feedbackCorrect: {
    background: "#E1F5EE",
    color: "#0F6E56",
    border: "1px solid #5DCAA5",
  },
  feedbackWrong: {
    background: "#FAECE7",
    color: "#993C1D",
    border: "1px solid #F0997B",
  },
  nextBtn: {
    marginTop: 16,
    padding: "11px 22px",
    borderRadius: 8,
    border: "1px solid #ccc",
    background: "#fff",
    color: "#111",
    fontSize: 14,
    cursor: "pointer",
  },
  resultBox: {
    textAlign: "center",
    padding: "40px 16px",
  },
  scoreCircle: {
    width: 88,
    height: 88,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 26,
    fontWeight: 500,
    margin: "0 auto 20px",
  },
  resultMsg: {
    fontSize: 18,
    fontWeight: 500,
    margin: "0 0 8px",
    color: "#111",
  },
  resultSub: {
    fontSize: 14,
    color: "#888",
    margin: "0 0 24px",
  },
  restartBtn: {
    padding: "11px 28px",
    borderRadius: 8,
    border: "1px solid #ccc",
    background: "#fff",
    color: "#111",
    fontSize: 14,
    cursor: "pointer",
  },
};