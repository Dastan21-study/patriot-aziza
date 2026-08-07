import { useState } from "react";
import "./viktorinia.css";

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
    options: [
      "Ахмет Байтурсынов",
      "Алихан Букейханов",
      "Миржакып Дулатов",
      "Мустафа Шокай",
    ],
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
    options: [
      "Магжан Жумабаев",
      "Ахмет Байтурсынов",
      "Миржакып Дулатов",
      "Сакен Сейфуллин",
    ],
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
    options: [
      "Алихан Букейханов",
      "Ахмет Байтурсынов",
      "Мустафа Шокай",
      "Шокан Уалиханов",
    ],
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
    options: [
      "Декабрьские события",
      "Национально-освободительное восстание",
      "Алашское движение",
      "Желтоксан",
    ],
    correct: 1,
    fact: "Восстание 1916 года охватило многие регионы Казахстана и Средней Азии.",
  },
  {
    q: "Кто был известным казахским ученым и путешественником XIX века?",
    options: [
      "Абай Кунанбаев",
      "Шокан Уалиханов",
      "Жамбыл Жабаев",
      "Каныш Сатпаев",
    ],
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
    options: [
      "Жамбыл Жабаев",
      "Абай Кунанбаев",
      "Ибрай Алтынсарин",
      "Мухтар Ауэзов",
    ],
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
    options: [
      "Сакен Сейфуллин",
      "Мухтар Ауэзов",
      "Магжан Жумабаев",
      "Бейимбет Майлин",
    ],
    correct: 1,
    fact: "Мухтар Ауэзов создал знаменитый роман-эпопею о жизни Абая.",
  },
];

const LETTERS = ["А", "Б", "В", "Г"];

function getResult(score, total) {
  const pct = score / total;

  if (pct === 1) {
    return {
      color: "#1D9E75",
      bg: "#E1F5EE",
      msg: "Отлично! Вы знаток Казахстана!",
    };
  }

  if (pct >= 0.6) {
    return {
      color: "#BA7517",
      bg: "#FAEEDA",
      msg: "Неплохо, но можно лучше!",
    };
  }

  return {
    color: "#D85A30",
    bg: "#FAECE7",
    msg: "Попробуйте ещё раз!",
  };
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

    if (i === q.correct) {
      setScore((s) => s + 1);
    }
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
      <div className="quiz-wrap">
        <div className="quiz-result-box">
          <div
            className="quiz-score-circle"
            style={{
              background: res.bg,
              color: res.color,
            }}
          >
            {score}/{total}
          </div>

          <p className="quiz-result-msg">{res.msg}</p>

          <p className="quiz-result-sub">
            Вы ответили верно на {score} из {total} вопросов
          </p>

          <button
            className="quiz-restart-btn"
            onClick={handleRestart}
          >
            Пройти снова
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-wrap">
      <div className="quiz-progress-container">
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <button
          className="quiz-close-btn"
          onClick={onClose}
          aria-label="Закрыть викторину"
        >
          ✕
        </button>
      </div>

      <p className="quiz-question-label">
        Вопрос {current + 1} из {total}
      </p>

      <p className="quiz-question-text">
        {q.q}
      </p>

      <div className="quiz-options">
        {q.options.map((option, i) => {
          const isCorrect = answered && i === q.correct;
          const isWrong =
            answered &&
            i === selected &&
            i !== q.correct;

          return (
            <button
              key={i}
              className={`quiz-option ${
                isCorrect ? "quiz-option-correct" : ""
              } ${isWrong ? "quiz-option-wrong" : ""}`}
              onClick={() => handleSelect(i)}
              disabled={answered}
            >
              <span
                className={`quiz-letter ${
                  isCorrect ? "quiz-letter-correct" : ""
                } ${isWrong ? "quiz-letter-wrong" : ""}`}
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
          className={`quiz-feedback ${
            selected === q.correct
              ? "quiz-feedback-correct"
              : "quiz-feedback-wrong"
          }`}
        >
          {selected === q.correct
            ? "✓ Правильно! "
            : "✗ Неверно. "}

          {q.fact}
        </div>
      )}

      {answered && (
        <button
          className="quiz-next-btn"
          onClick={handleNext}
        >
          {current === total - 1
            ? "Посмотреть результат →"
            : "Следующий вопрос →"}
        </button>
      )}
    </div>
  );
}