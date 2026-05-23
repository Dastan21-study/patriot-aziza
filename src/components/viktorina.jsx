import { useState } from "react";

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
  {
    q: "Кто был лидером движения Алаш?",
    options: ["Ахмет Байтурсынов", "Алихан Букейханов", "Миржакып Дулатов", "Мустафа Шокай"],
    correct: 1,
    fact: "Алихан Букейханов был главным лидером движения Алаш и председателем правительства Алаш Орда.",
  },

  {
    q: "В каком году была создана Алаш Орда?",
    options: ["1916", "1917", "1920", "1905"],
    correct: 1,
    fact: "Алаш Орда была создана в 1917 году после Второго Всеказахского съезда.",
  },

  {
    q: "Как называлась партия казахской интеллигенции начала XX века?",
    options: ["Жас Тулпар", "Алаш", "Орда", "Туран"],
    correct: 1,
    fact: "Партия «Алаш» выступала за автономию и развитие казахского народа.",
  },

  {
    q: "Кто написал сборник «Оян, қазақ!»?",
    options: ["Магжан Жумабаев", "Ахмет Байтурсынов", "Миржакып Дулатов", "Сакен Сейфуллин"],
    correct: 2,
    fact: "Книга «Оян, қазақ!» Миржакыпа Дулатова стала символом национального пробуждения.",
  },

  {
    q: "Какой город был столицей Алаш Орды?",
    options: ["Оренбург", "Семей", "Туркестан", "Верный"],
    correct: 1,
    fact: "Столицей Алаш Орды был город Семей, который тогда называли Алаш-кала.",
  },

  {
    q: "Кто реформировал казахскую письменность и создал новый алфавит?",
    options: ["Алихан Букейханов", "Ахмет Байтурсынов", "Мустафа Шокай", "Шокан Уалиханов"],
    correct: 1,
    fact: "Ахмет Байтурсынов создал реформированный казахский алфавит на основе арабской графики.",
  },

  {
    q: "В каком году Казахстан стал независимым государством?",
    options: ["1986", "1991", "1993", "1995"],
    correct: 1,
    fact: "Казахстан объявил независимость 16 декабря 1991 года.",
  },

  {
    q: "Как называлось восстание против царского указа 1916 года?",
    options: ["Декабрьские события", "Национально-освободительное восстание", "Алашское движение", "Желтоксан"],
    correct: 1,
    fact: "Восстание 1916 года охватило многие регионы Казахстана и Средней Азии.",
  },

  {
    q: "Кто был известным казахским ученым и путешественником XIX века?",
    options: ["Абай Кунанбаев", "Шокан Уалиханов", "Жамбыл Жабаев", "Каныш Сатпаев"],
    correct: 1,
    fact: "Шокан Уалиханов исследовал Центральную Азию и внес вклад в науку и этнографию.",
  },

  {
    q: "Как назывались традиционные собрания казахских биев?",
    options: ["Курултай", "Маслихат", "Жуз", "Айтыс"],
    correct: 0,
    fact: "Курултай — это собрание, где решались важные государственные вопросы.",
  },

  {
    q: "Какой хан объединил три жуза Казахского ханства?",
    options: ["Кенесары хан", "Абылай хан", "Тауке хан", "Жангир хан"],
    correct: 1,
    fact: "Абылай хан сыграл важную роль в объединении казахских земель.",
  },

  {
    q: "Кто является автором произведения «Қара сөздер»?",
    options: ["Жамбыл Жабаев", "Абай Кунанбаев", "Ибрай Алтынсарин", "Мухтар Ауэзов"],
    correct: 1,
    fact: "«Қара сөздер» Абая содержат философские размышления о народе и обществе.",
  },

  {
    q: "В каком году произошло восстание Кенесары Касымова?",
    options: ["1837", "1917", "1865", "1920"],
    correct: 0,
    fact: "Восстание Кенесары началось в 1837 году против колониальной политики Российской империи.",
  },

  {
    q: "Как называлась первая казахская газета, связанная с движением Алаш?",
    options: ["Егемен Қазақстан", "Қазақ", "Түркістан", "Айқап"],
    correct: 1,
    fact: "Газета «Қазақ» была важным изданием казахской интеллигенции начала XX века.",
  },

  {
    q: "Кто написал роман «Путь Абая»?",
    options: ["Сакен Сейфуллин", "Мухтар Ауэзов", "Магжан Жумабаев", "Бейимбет Майлин"],
    correct: 1,
    fact: "Мухтар Ауэзов создал знаменитый роман-эпопею о жизни Абая.",
  },
]


const LETTERS = ["А", "Б", "В", "Г"];

function getResult(score, total) {
  const pct = score / total;
  if (pct === 1)  return { color: "#1D9E75", bg: "#E1F5EE", msg: "Отлично! Вы знаток Казахстана!" };
  if (pct >= 0.6) return { color: "#BA7517", bg: "#FAEEDA", msg: "Неплохо, но можно лучше!" };
  return              { color: "#D85A30", bg: "#FAECE7", msg: "Попробуйте ещё раз!" };
}

export default function KazakhstanQuiz({ onClose }) {
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
        <button style={styles.closeBtn} onClick={onClose}>
      ✕
    </button>
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
    display: "flex",
   alignItems: "center",
  gap: "10px",
  marginBottom: "10px"
  },
  progressFill: {
    height: "100%",
    background: "#1D9E75",
    borderRadius: 99,
    transition: "width 0.4s ease",
  },
  qLabel: {
    fontSize: 13,
    color: "#ffffff",
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
closeBtn: {
  position: "absolute",
  
},
};