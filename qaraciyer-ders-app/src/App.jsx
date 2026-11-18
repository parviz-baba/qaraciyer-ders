import { useEffect, useState } from "react";
import {
  meta,
  sections,
  glossary,
  quiz,
} from "./content.js";
import {
  loadProgress,
  saveProgress,
  sectionProgressPercent,
  scoreQuiz,
} from "./progress.js";

function Block({ block }) {
  if (block.type === "p") return <p className="block-p">{block.text}</p>;
  if (block.type === "h") return <h2 className="block-h">{block.text}</h2>;
  if (block.type === "h3") return <h3 className="block-h3">{block.text}</h3>;
  if (block.type === "ul") {
    return (
      <ul className="block-list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.type === "ol") {
    return (
      <ol className="block-list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    );
  }
  if (block.type === "callout") {
    return (
      <aside className="callout">
        <span className="callout-label">{block.label}</span>
        <p>{block.text}</p>
      </aside>
    );
  }
  if (block.type === "pre") {
    return <pre className="pre-block">{block.text}</pre>;
  }
  if (block.type === "table") {
    return (
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {block.headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row.join("|")}>
                {row.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return null;
}

function Home({ onStart, onGlossary, onQuiz }) {
  return (
    <section className="hero" aria-label="Dərsə giriş">
      <div className="hero-visual" aria-hidden="true" />
      <p className="hero-kicker">{meta.subtitle}</p>
      <h1 className="hero-brand">{meta.title}</h1>
      <p className="hero-lead">
        Asandan çətinə — funksiyadan patologiyaya. Bölmə-bölmə oxu, özünü yoxla,
        sonda ümumi testi ver.
      </p>
      <div className="cta-row">
        <button type="button" className="btn btn-primary" onClick={onStart}>
          Dərsə başla
        </button>
        <button type="button" className="btn btn-ghost" onClick={onQuiz}>
          Ümumi test
        </button>
        <button type="button" className="btn btn-ghost" onClick={onGlossary}>
          Lüğət
        </button>
      </div>
    </section>
  );
}

function SectionView({
  section,
  state,
  onReveal,
  onComplete,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  goQuiz,
}) {
  const revealed = state.selfRevealed[section.id] || {};

  return (
    <article className="content-pane">
      <h1>{section.title}</h1>
      <p className="section-goal">
        <strong>Məqsəd:</strong> {section.goal}
      </p>

      {section.blocks.map((block, i) => (
        <Block key={`${section.id}-${i}`} block={block} />
      ))}

      {section.selfCheck.length > 0 && (
        <section className="self-check" aria-label="Özünü yoxla">
          <h2>Özünü yoxla</h2>
          {section.selfCheck.map((item, idx) => {
            const open = Boolean(revealed[idx]);
            return (
              <div className="check-item" key={item.q}>
                <p className="check-q">
                  {idx + 1}. {item.q}
                </p>
                {open ? (
                  <p className="check-a">
                    <strong>Cavab:</strong> {item.a}
                  </p>
                ) : (
                  <button
                    type="button"
                    className="btn btn-soft"
                    style={{ marginTop: "0.7rem" }}
                    onClick={() => onReveal(section.id, idx)}
                  >
                    Cavabı göstər
                  </button>
                )}
              </div>
            );
          })}
        </section>
      )}

      <div className="section-footer">
        {!state.completed[section.id] && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onComplete(section.id)}
          >
            Bölməni tamamla
          </button>
        )}
        {state.completed[section.id] && (
          <button type="button" className="btn btn-soft" disabled>
            Tamamlandı ✓
          </button>
        )}
        {hasPrev && (
          <button type="button" className="btn btn-ghost dark" onClick={onPrev}>
            Əvvəlki
          </button>
        )}
        {hasNext ? (
          <button type="button" className="btn btn-ghost dark" onClick={onNext}>
            Növbəti
          </button>
        ) : (
          <button type="button" className="btn btn-primary" onClick={goQuiz}>
            Ümumi testə keç
          </button>
        )}
      </div>
    </article>
  );
}

function QuizView({ state, onSelect, onSubmit, onRetry }) {
  const result = state.quizSubmitted ? scoreQuiz(state.quizAnswers) : null;
  const answered = quiz.every((q) => state.quizAnswers[q.id] !== undefined);

  return (
    <article className="content-pane">
      <h1>Ümumi yoxlama</h1>
      <p className="block-p">
        Bütün dərs üzrə 10 sual. Cavab seç, nəticə faizlə göstərilir; səhv
        cavablarda izah açılır.
      </p>

      {result && (
        <div className="result-banner">
          <h2>
            Nəticə: {result.percent}% ({result.correct}/{result.total})
          </h2>
          <p className="block-p" style={{ marginBottom: 0 }}>
            {result.percent >= 80
              ? "Əla — dərsin əsas zənciri oturub."
              : result.percent >= 50
                ? "Yaxşı başlanğıc — səhv cavabların izahını oxu və bölmələrə qayıt."
                : "Təkrar etməyə dəyər — xüsusən funksiya → hepatit → sirroz zəncirini."}
          </p>
        </div>
      )}

      {quiz.map((item, i) => {
        const chosen = state.quizAnswers[item.id];
        return (
          <div key={item.id} style={{ marginBottom: "1.4rem" }}>
            <p className="quiz-meta">
              Sual {i + 1}/{quiz.length}
            </p>
            <p className="check-q">{item.q}</p>
            {item.options.map((opt, oi) => {
              let cls = "quiz-option";
              if (!state.quizSubmitted && chosen === oi) cls += " selected";
              if (state.quizSubmitted) {
                if (oi === item.correct) cls += " correct";
                else if (chosen === oi) cls += " wrong";
              }
              return (
                <button
                  key={opt}
                  type="button"
                  className={cls}
                  disabled={state.quizSubmitted}
                  onClick={() => onSelect(item.id, oi)}
                >
                  {opt}
                </button>
              );
            })}
            {state.quizSubmitted && chosen !== item.correct && (
              <p className="explain">{item.explain}</p>
            )}
            {state.quizSubmitted && chosen === item.correct && (
              <p className="explain">{item.explain}</p>
            )}
          </div>
        );
      })}

      <div className="section-footer">
        {!state.quizSubmitted ? (
          <button
            type="button"
            className="btn btn-primary"
            disabled={!answered}
            onClick={onSubmit}
          >
            Nəticəni göstər
          </button>
        ) : (
          <button type="button" className="btn btn-ghost dark" onClick={onRetry}>
            Testi yenidən başlat
          </button>
        )}
      </div>
    </article>
  );
}

function GlossaryView() {
  return (
    <article className="content-pane">
      <h1>Təkrar üçün qısa lüğət</h1>
      <p className="block-p">Dərsdəki əsas terminlər — sadə mənaları ilə.</p>
      <div className="glossary-grid">
        {glossary.map((g) => (
          <div className="glossary-item" key={g.term}>
            <strong>{g.term}</strong>
            <span>{g.meaning}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function App() {
  const [state, setState] = useState(() => loadProgress());

  useEffect(() => {
    saveProgress(state);
  }, [state]);

  const percent = sectionProgressPercent(state);
  const sectionIndex = sections.findIndex((s) => s.id === state.sectionId);
  const section = sections[sectionIndex] || sections[0];

  const patch = (partial) => setState((s) => ({ ...s, ...partial }));

  const goHome = () => patch({ view: "home" });
  const goSection = (id) => patch({ view: "section", sectionId: id });
  const goQuiz = () => patch({ view: "quiz" });
  const goGlossary = () => patch({ view: "glossary" });

  const reveal = (sectionId, idx) => {
    setState((s) => ({
      ...s,
      selfRevealed: {
        ...s.selfRevealed,
        [sectionId]: { ...(s.selfRevealed[sectionId] || {}), [idx]: true },
      },
    }));
  };

  const complete = (sectionId) => {
    setState((s) => ({
      ...s,
      completed: { ...s.completed, [sectionId]: true },
    }));
  };

  const selectAnswer = (qid, oi) => {
    setState((s) => ({
      ...s,
      quizAnswers: { ...s.quizAnswers, [qid]: oi },
    }));
  };

  const submitQuiz = () => patch({ quizSubmitted: true });
  const retryQuiz = () =>
    patch({ quizAnswers: {}, quizSubmitted: false });

  const resetAll = () => {
    if (
      window.confirm(
        "Bütün irəliləyiş və test cavabları silinsin? Bu əməliyyat geri qaytarılmır.",
      )
    ) {
      localStorage.removeItem("qaraciyer-ders-progress-v1");
      setState(loadProgress());
    }
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <button type="button" className="brand-mark" onClick={goHome}>
          Qaraciyər
        </button>
        <div className="progress-chip" aria-label={`İrəliləyiş ${percent}%`}>
          <span>{percent}%</span>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </header>

      {state.view === "home" && (
        <Home
          onStart={() => goSection(sections[0].id)}
          onQuiz={goQuiz}
          onGlossary={goGlossary}
        />
      )}

      {state.view !== "home" && (
        <div className="panel layout">
          <nav className="nav-side" aria-label="Bölmələr">
            <h2>Bölmələr</h2>
            <ul className="nav-list">
              {sections.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    className={`nav-item${
                      state.view === "section" && state.sectionId === s.id
                        ? " active"
                        : ""
                    }${state.completed[s.id] ? " done" : ""}`}
                    onClick={() => goSection(s.id)}
                  >
                    <span className="dot" aria-hidden="true" />
                    <span>{s.title.replace(/^Bölmə\s+\d+:\s*/, "")}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="nav-actions">
              <button
                type="button"
                className={`nav-item${state.view === "quiz" ? " active" : ""}`}
                onClick={goQuiz}
              >
                <span className="dot" aria-hidden="true" />
                Ümumi test
              </button>
              <button
                type="button"
                className={`nav-item${
                  state.view === "glossary" ? " active" : ""
                }`}
                onClick={goGlossary}
              >
                <span className="dot" aria-hidden="true" />
                Lüğət
              </button>
              <button type="button" className="nav-item" onClick={goHome}>
                <span className="dot" aria-hidden="true" />
                Ana səhifə
              </button>
              <button type="button" className="reset-link" onClick={resetAll}>
                İrəliləyişi sıfırla
              </button>
            </div>
          </nav>

          {state.view === "section" && (
            <SectionView
              section={section}
              state={state}
              onReveal={reveal}
              onComplete={complete}
              hasPrev={sectionIndex > 0}
              hasNext={sectionIndex < sections.length - 1}
              onPrev={() => goSection(sections[sectionIndex - 1].id)}
              onNext={() => goSection(sections[sectionIndex + 1].id)}
              goQuiz={goQuiz}
            />
          )}
          {state.view === "quiz" && (
            <QuizView
              state={state}
              onSelect={selectAnswer}
              onSubmit={submitQuiz}
              onRetry={retryQuiz}
            />
          )}
          {state.view === "glossary" && <GlossaryView />}
        </div>
      )}
    </div>
  );
}
