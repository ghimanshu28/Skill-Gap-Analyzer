// ============================================================
//  SKILLGAP GAMIFICATION ENGINE
//  Duolingo-style XP, Levels, Badges, Streaks, Missions
// ============================================================

const GS = (() => {
  // ─── CONSTANTS ───────────────────────────────────────────
  const LEVELS = [
    { name: "Beginner",     minXP: 0,    icon: "🌱", color: "#6b7280" },
    { name: "Explorer",     minXP: 100,  icon: "🔍", color: "#0891b2" },
    { name: "Intermediate", minXP: 300,  icon: "⚡", color: "#7c3aed" },
    { name: "Advanced",     minXP: 700,  icon: "🔥", color: "#ea580c" },
    { name: "Pro",          minXP: 1500, icon: "💎", color: "#2563eb" },
    { name: "Master",       minXP: 3000, icon: "👑", color: "#d97706" },
  ];

  const BADGES = {
    quiz_starter:      { id: "quiz_starter",      name: "Quiz Starter",       icon: "🎯", desc: "Completed your first quiz attempt",            color: "#2563eb" },
    first_blood:       { id: "first_blood",        name: "First Blood",        icon: "⚡", desc: "Got your first question correct",               color: "#dc2626" },
    perfect_score:     { id: "perfect_score",      name: "Mastermind",         icon: "🏆", desc: "Scored 90%+ on a quiz",                        color: "#d97706" },
    skill_explorer:    { id: "skill_explorer",     name: "Skill Explorer",     icon: "🗺️", desc: "Analyzed 3 different roles",                    color: "#0891b2" },
    resume_upload:     { id: "resume_upload",      name: "Resume Pro",         icon: "📄", desc: "Uploaded your resume for AI analysis",          color: "#7c3aed" },
    streak_3:          { id: "streak_3",           name: "On Fire 🔥",         icon: "🔥", desc: "Maintained a 3-day streak",                    color: "#ea580c" },
    streak_7:          { id: "streak_7",           name: "Week Warrior",       icon: "🗓️", desc: "Maintained a 7-day streak",                    color: "#7c3aed" },
    streak_14:         { id: "streak_14",          name: "Unstoppable",        icon: "⚡", desc: "Maintained a 14-day streak",                   color: "#d97706" },
    consistent_learner:{ id: "consistent_learner", name: "Consistent Learner", icon: "📚", desc: "Visited 3 days in a row",                      color: "#059669" },
    quiz_master:       { id: "quiz_master",        name: "Quiz Master",        icon: "🧠", desc: "Completed 5 quizzes",                          color: "#2563eb" },
    all_rounder:       { id: "all_rounder",        name: "All-Rounder",        icon: "🌟", desc: "Tried 4+ different quiz tracks",               color: "#d97706" },
    speed_demon:       { id: "speed_demon",        name: "Speed Demon",        icon: "💨", desc: "Answered 10 questions in one session",          color: "#0891b2" },
    role_master:       { id: "role_master",        name: "Role Master",        icon: "🎓", desc: "Completed full analysis + quiz for same role",  color: "#7c3aed" },
  };

  const XP_REWARDS = {
    answer_question:     10,
    correct_answer:      15,
    complete_quiz:       75,
    perfect_quiz:        200,
    upload_resume:       50,
    complete_analysis:   60,
    daily_visit:         20,
    complete_mission:    40,
    streak_bonus_3:      50,
    streak_bonus_7:      100,
    streak_bonus_14:     200,
  };

  const LEADERBOARD_MOCK = [
    { name: "Priya S.",   xp: 3240, level: "Master",       avatar: "👩‍💻" },
    { name: "Alex M.",    xp: 2870, level: "Master",       avatar: "👨‍🎨" },
    { name: "Jordan K.",  xp: 2110, level: "Pro",          avatar: "🧑‍🔬" },
    { name: "Ravi T.",    xp: 1920, level: "Pro",          avatar: "👨‍💼" },
    { name: "Sarah L.",   xp: 1650, level: "Pro",          avatar: "👩‍🏫" },
    { name: "Chen W.",    xp: 1340, level: "Advanced",     avatar: "👨‍💻" },
    { name: "Maya P.",    xp: 980,  level: "Advanced",     avatar: "👩‍🎯" },
    { name: "Omar F.",    xp: 710,  level: "Intermediate", avatar: "👨‍🏫" },
    { name: "Lena B.",    xp: 450,  level: "Intermediate", avatar: "👩‍💼" },
    { name: "Dev R.",     xp: 210,  level: "Explorer",     avatar: "👨‍🎓" },
  ];

  const DAILY_MISSIONS = [
    { id: "m_quiz5",    text: "Answer 5 quiz questions",    xp: 40, type: "questions",  target: 5  },
    { id: "m_quiz10",   text: "Answer 10 quiz questions",   xp: 70, type: "questions",  target: 10 },
    { id: "m_quiz_full",text: "Complete a full quiz",       xp: 60, type: "quiz",       target: 1  },
    { id: "m_analyze",  text: "Analyze a role",             xp: 40, type: "analysis",   target: 1  },
    { id: "m_correct5", text: "Get 5 answers correct",      xp: 50, type: "correct",    target: 5  },
    { id: "m_visit",    text: "Visit SkillGap today",       xp: 20, type: "visit",      target: 1  },
    { id: "m_two_roles",text: "Try 2 different roles",      xp: 55, type: "roles",      target: 2  },
  ];

  // ─── STATE ────────────────────────────────────────────────
  let state = {
    xp: 0, totalXP: 0, level: 0,
    badges: [],
    streak: 0, lastVisit: null, maxStreak: 0,
    quizzesDone: 0, questionsAnswered: 0, correctAnswers: 0,
    rolesAnalyzed: [], rolesQuizzed: [],
    resumeUploaded: false,
    missions: [], missionProgress: {},
    sessionQuestions: 0, sessionCorrect: 0,
  };

  // ─── PERSIST ──────────────────────────────────────────────
  function save() {
    localStorage.setItem("sg_gamification", JSON.stringify(state));
  }

  function load() {
    const raw = localStorage.getItem("sg_gamification");
    if (raw) {
      try { Object.assign(state, JSON.parse(raw)); }
      catch(e) { console.warn("GS: corrupt save, resetting"); }
    }
    initMissions();
    checkStreak();
    updateHUD();
  }

  function reset() {
    localStorage.removeItem("sg_gamification");
    state = {
      xp: 0, totalXP: 0, level: 0,
      badges: [], streak: 0, lastVisit: null, maxStreak: 0,
      quizzesDone: 0, questionsAnswered: 0, correctAnswers: 0,
      rolesAnalyzed: [], rolesQuizzed: [],
      resumeUploaded: false,
      missions: [], missionProgress: {},
      sessionQuestions: 0, sessionCorrect: 0,
    };
    initMissions();
    updateHUD();
  }

  // ─── LEVEL UTILS ─────────────────────────────────────────
  function getLevelData(xp) {
    let lvl = LEVELS[0];
    for (const l of LEVELS) { if (xp >= l.minXP) lvl = l; else break; }
    return lvl;
  }

  function getNextLevel(xp) {
    for (const l of LEVELS) { if (xp < l.minXP) return l; }
    return null;
  }

  function getLevelIndex(xp) {
    let idx = 0;
    for (let i = 0; i < LEVELS.length; i++) { if (xp >= LEVELS[i].minXP) idx = i; else break; }
    return idx;
  }

  function getLevelProgress(xp) {
    const cur = getLevelData(xp);
    const next = getNextLevel(xp);
    if (!next) return 100;
    const span = next.minXP - cur.minXP;
    const done = xp - cur.minXP;
    return Math.min(100, Math.round((done / span) * 100));
  }

  // ─── XP ENGINE ───────────────────────────────────────────
  function addXP(amount, label, sourceEl) {
    const oldLevel = getLevelIndex(state.xp);
    state.xp += amount;
    state.totalXP += amount;
    save();

    showXPToast(amount, label, sourceEl);

    const newLevel = getLevelIndex(state.xp);
    if (newLevel > oldLevel) {
      setTimeout(() => showLevelUp(LEVELS[newLevel]), 800);
    }

    updateHUD();
  }

  // ─── BADGE ENGINE ────────────────────────────────────────
  function awardBadge(id) {
    if (state.badges.includes(id)) return false;
    const badge = BADGES[id];
    if (!badge) return false;
    state.badges.push(id);
    save();
    showBadgeUnlock(badge);
    updateHUD();
    return true;
  }

  function hasBadge(id) { return state.badges.includes(id); }

  // ─── STREAK ENGINE ────────────────────────────────────────
  function checkStreak() {
    const today = new Date().toDateString();
    const last = state.lastVisit;

    if (last === today) {
      // Already visited today — no change
    } else if (last) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (last === yesterday) {
        state.streak += 1;
        state.maxStreak = Math.max(state.maxStreak, state.streak);
        // Streak milestone rewards
        if (state.streak === 3) { addXP(XP_REWARDS.streak_bonus_3, "3-Day Streak! 🔥"); awardBadge("streak_3"); }
        if (state.streak === 7) { addXP(XP_REWARDS.streak_bonus_7, "7-Day Streak! 🗓️"); awardBadge("streak_7"); }
        if (state.streak === 14) { addXP(XP_REWARDS.streak_bonus_14, "14-Day Streak! ⚡"); awardBadge("streak_14"); }
      } else {
        state.streak = 1;
      }
    } else {
      state.streak = 1;
    }

    if (last !== today) {
      state.lastVisit = today;
      addXP(XP_REWARDS.daily_visit, "Daily Visit");
      updateMissionProgress("visit", 1);
      if (state.streak >= 3) awardBadge("consistent_learner");
    }
    save();
  }

  // ─── MISSIONS ─────────────────────────────────────────────
  function initMissions() {
    const today = new Date().toDateString();
    if (state.missions.length === 0 || state.missionDate !== today) {
      // Pick 3 random missions
      const shuffled = [...DAILY_MISSIONS].sort(() => Math.random() - 0.5);
      state.missions = shuffled.slice(0, 3).map(m => ({ ...m, done: false }));
      state.missionProgress = {};
      state.missionDate = today;
      save();
    }
  }

  function updateMissionProgress(type, amount) {
    if (!state.missionProgress[type]) state.missionProgress[type] = 0;
    state.missionProgress[type] += amount;

    state.missions.forEach((m, i) => {
      if (m.done || m.type !== type) return;
      if (state.missionProgress[type] >= m.target) {
        state.missions[i].done = true;
        addXP(m.xp, `Mission: ${m.text}`);
        showMissionComplete(m);
      }
    });
    save();
    updateMissionsUI();
  }

  // ─── HUD ──────────────────────────────────────────────────
  function updateHUD() {
    const lvl = getLevelData(state.xp);
    const progress = getLevelProgress(state.xp);
    const next = getNextLevel(state.xp);

    // Update HUD elements if they exist
    const xpEl = document.getElementById("gs-hud-xp") || document.getElementById("gs-xp");
    const levelEl = document.getElementById("gs-level-name");
    const progressEl = document.getElementById("gs-progress-fill");
    const progressTxtEl = document.getElementById("gs-progress-txt");
    const streakEl = document.getElementById("gs-streak");
    const badgeCountEl = document.getElementById("gs-badge-count");

    if (xpEl) xpEl.textContent = state.xp.toLocaleString() + " XP";
    if (levelEl) levelEl.textContent = lvl.icon + " " + lvl.name;
    if (progressEl) progressEl.style.width = progress + "%";
    if (progressTxtEl) progressTxtEl.textContent = next
      ? `${state.xp} / ${next.minXP} XP to ${next.name}`
      : `Max Level! ${state.xp} XP`;
    if (streakEl) streakEl.textContent = state.streak + " 🔥";
    if (badgeCountEl) badgeCountEl.textContent = state.badges.length;

    updateDashboard();
    updateMissionsUI();
    updateLeaderboard();
    updateBadgesUI();
  }

  function updateDashboard() {
    const el = document.getElementById("gs-dash-xp"); if (el) el.textContent = state.xp.toLocaleString();
    const el2 = document.getElementById("gs-dash-level"); if (el2) { const l = getLevelData(state.xp); el2.textContent = l.icon + " " + l.name; }
    const el3 = document.getElementById("gs-dash-quizzes"); if (el3) el3.textContent = state.quizzesDone;
    const el4 = document.getElementById("gs-dash-streak"); if (el4) el4.textContent = state.streak + " days";
    const el5 = document.getElementById("gs-dash-correct"); if (el5) el5.textContent = state.correctAnswers;
    const el6 = document.getElementById("gs-dash-roles"); if (el6) el6.textContent = state.rolesQuizzed.length;
    const el7 = document.getElementById("gs-dash-badges"); if (el7) el7.textContent = state.badges.length + " / " + Object.keys(BADGES).length;
    const el8 = document.getElementById("gs-dash-maxstreak"); if (el8) el8.textContent = state.maxStreak + " days";
  }

  function updateMissionsUI() {
    const container = document.getElementById("gs-missions-list");
    if (!container) return;
    container.innerHTML = state.missions.map(m => {
      const prog = state.missionProgress[m.type] || 0;
      const pct = Math.min(100, Math.round((prog / m.target) * 100));
      return `
        <div class="gs-mission ${m.done ? 'gs-mission-done' : ''}">
          <div class="gs-mission-left">
            <div class="gs-mission-icon">${m.done ? '✅' : '🎯'}</div>
            <div class="gs-mission-info">
              <div class="gs-mission-text">${m.text}</div>
              <div class="gs-mission-reward">+${m.xp} XP</div>
            </div>
          </div>
          <div class="gs-mission-right">
            ${m.done
              ? `<div class="gs-mission-complete-tag">Done!</div>`
              : `<div class="gs-mission-progress-wrap">
                  <div class="gs-mission-bar-track">
                    <div class="gs-mission-bar-fill" style="width:${pct}%"></div>
                  </div>
                  <div class="gs-mission-count">${Math.min(prog, m.target)}/${m.target}</div>
                </div>`
            }
          </div>
        </div>`;
    }).join("");
  }

  function updateLeaderboard() {
    const container = document.getElementById("gs-leaderboard-list");
    if (!container) return;

    const lvl = getLevelData(state.xp);
    const meEntry = { name: "You", xp: state.xp, level: lvl.name, avatar: "⭐", isMe: true };

    let combined = [...LEADERBOARD_MOCK, meEntry].sort((a, b) => b.xp - a.xp);
    const mePos = combined.findIndex(e => e.isMe) + 1;

    container.innerHTML = combined.slice(0, 10).map((user, i) => {
      const rankEmoji = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i + 1}`;
      return `
        <div class="gs-lb-row ${user.isMe ? 'gs-lb-me' : ''}">
          <div class="gs-lb-rank">${rankEmoji}</div>
          <div class="gs-lb-avatar">${user.avatar}</div>
          <div class="gs-lb-info">
            <div class="gs-lb-name">${user.name}${user.isMe ? ' (You)' : ''}</div>
            <div class="gs-lb-level">${user.level}</div>
          </div>
          <div class="gs-lb-xp">${user.xp.toLocaleString()} XP</div>
        </div>`;
    }).join("");
  }

  function updateBadgesUI() {
    const container = document.getElementById("gs-badges-grid");
    if (!container) return;
    container.innerHTML = Object.values(BADGES).map(b => {
      const earned = hasBadge(b.id);
      return `
        <div class="gs-badge-item ${earned ? 'gs-badge-earned' : 'gs-badge-locked'}" title="${b.desc}">
          <div class="gs-badge-icon" style="${earned ? `filter: none; color: ${b.color}` : ''}">${b.icon}</div>
          <div class="gs-badge-name">${b.name}</div>
          ${earned ? '<div class="gs-badge-check">✓</div>' : '<div class="gs-badge-lock">🔒</div>'}
        </div>`;
    }).join("");
  }

  // ─── TOAST ANIMATIONS ────────────────────────────────────
  function showXPToast(amount, label, anchorEl) {
    const toast = document.createElement("div");
    toast.className = "gs-xp-toast";
    toast.innerHTML = `<span class="gs-xp-amount">+${amount} XP</span><span class="gs-xp-label">${label || ""}</span>`;
    document.body.appendChild(toast);

    // Position near anchor or top-right
    if (anchorEl) {
      const rect = anchorEl.getBoundingClientRect();
      toast.style.left = (rect.left + rect.width / 2 - 60) + "px";
      toast.style.top = (rect.top + window.scrollY - 10) + "px";
    } else {
      toast.style.right = "24px";
      toast.style.top = "80px";
    }

    requestAnimationFrame(() => { toast.classList.add("gs-xp-toast-show"); });
    setTimeout(() => {
      toast.classList.add("gs-xp-toast-hide");
      setTimeout(() => toast.remove(), 500);
    }, 2000);
  }

  function showLevelUp(level) {
    // Confetti
    launchConfetti();
    // Play a sound
    playSound("levelup");

    const modal = document.createElement("div");
    modal.className = "gs-levelup-modal";
    modal.innerHTML = `
      <div class="gs-levelup-card">
        <div class="gs-levelup-glow"></div>
        <div class="gs-levelup-badge-icon">${level.icon}</div>
        <div class="gs-levelup-title">Level Up!</div>
        <div class="gs-levelup-name" style="color:${level.color}">${level.name}</div>
        <div class="gs-levelup-sub">You've unlocked the ${level.name} rank! Keep going 🚀</div>
        <button class="gs-levelup-btn" onclick="this.closest('.gs-levelup-modal').remove()">Continue →</button>
      </div>`;
    document.body.appendChild(modal);
    requestAnimationFrame(() => modal.classList.add("gs-levelup-show"));
    setTimeout(() => modal.remove(), 6000);
  }

  function showBadgeUnlock(badge) {
    playSound("badge");
    const toast = document.createElement("div");
    toast.className = "gs-badge-toast";
    toast.innerHTML = `
      <div class="gs-badge-toast-icon" style="background:${badge.color}20;color:${badge.color}">${badge.icon}</div>
      <div class="gs-badge-toast-info">
        <div class="gs-badge-toast-title">Badge Unlocked!</div>
        <div class="gs-badge-toast-name">${badge.name}</div>
        <div class="gs-badge-toast-desc">${badge.desc}</div>
      </div>`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("gs-badge-toast-show"));
    setTimeout(() => {
      toast.classList.add("gs-badge-toast-hide");
      setTimeout(() => toast.remove(), 500);
    }, 4000);
  }

  function showMissionComplete(mission) {
    const toast = document.createElement("div");
    toast.className = "gs-mission-toast";
    toast.innerHTML = `✅ Mission Complete! <strong>${mission.text}</strong> +${mission.xp} XP`;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("gs-mission-toast-show"));
    setTimeout(() => { toast.classList.add("gs-mission-toast-hide"); setTimeout(() => toast.remove(), 500); }, 3500);
  }

  // ─── CONFETTI ────────────────────────────────────────────
  function launchConfetti(count = 80) {
    const colors = ["#2563eb", "#7c3aed", "#0891b2", "#d97706", "#059669", "#dc2626", "#f59e0b"];
    for (let i = 0; i < count; i++) {
      setTimeout(() => {
        const p = document.createElement("div");
        p.className = "gs-confetti-piece";
        p.style.cssText = `
          left:${Math.random() * 100}vw;
          background:${colors[Math.floor(Math.random() * colors.length)]};
          width:${6 + Math.random() * 8}px;
          height:${10 + Math.random() * 8}px;
          animation-duration:${2 + Math.random() * 2}s;
          animation-delay:${Math.random() * 0.5}s;
          transform:rotate(${Math.random() * 360}deg);
          border-radius:${Math.random() > 0.5 ? "50%" : "2px"};
        `;
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 4000);
      }, i * 15);
    }
  }

  // ─── SOUND ────────────────────────────────────────────────
  function playSound(type) {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

      if (type === "levelup") {
        osc.frequency.setValueAtTime(440, ctx.currentTime);
        osc.frequency.setValueAtTime(554, ctx.currentTime + 0.15);
        osc.frequency.setValueAtTime(659, ctx.currentTime + 0.3);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.45);
        osc.type = "sine";
      } else if (type === "badge") {
        osc.frequency.setValueAtTime(660, ctx.currentTime);
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.2);
        osc.type = "sine";
      } else {
        osc.frequency.setValueAtTime(523, ctx.currentTime);
        osc.type = "sine";
      }
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch(e) {}
  }

  // ─── PUBLIC API ───────────────────────────────────────────
  function onQuestionAnswered(isCorrect) {
    state.sessionQuestions++;
    state.questionsAnswered++;
    addXP(XP_REWARDS.answer_question, "Question Answered");
    updateMissionProgress("questions", 1);

    if (isCorrect) {
      state.correctAnswers++;
      state.sessionCorrect++;
      addXP(XP_REWARDS.correct_answer, "Correct Answer ✓");
      updateMissionProgress("correct", 1);
      if (!hasBadge("first_blood")) awardBadge("first_blood");
    }

    if (state.sessionQuestions >= 10) awardBadge("speed_demon");
    save();
  }

  function onQuizCompleted(score, role) {
    state.quizzesDone++;
    if (!state.rolesQuizzed.includes(role)) state.rolesQuizzed.push(role);

    addXP(XP_REWARDS.complete_quiz, "Quiz Completed! 🎯");
    updateMissionProgress("quiz", 1);
    updateMissionProgress("roles", state.rolesQuizzed.length);

    launchConfetti(60);
    playSound("badge");

    if (!hasBadge("quiz_starter")) awardBadge("quiz_starter");
    if (score >= 90) { addXP(XP_REWARDS.perfect_quiz, "Perfect Score! 🏆"); awardBadge("perfect_score"); }
    if (state.quizzesDone >= 5) awardBadge("quiz_master");
    if (state.rolesQuizzed.length >= 4) awardBadge("all_rounder");

    if (state.rolesAnalyzed.includes(role) && state.rolesQuizzed.includes(role)) awardBadge("role_master");
    save();
  }

  function onResumeUploaded() {
    if (!state.resumeUploaded) {
      state.resumeUploaded = true;
      addXP(XP_REWARDS.upload_resume, "Resume Uploaded 📄");
      awardBadge("resume_upload");
      save();
    }
  }

  function onAnalysisCompleted(role) {
    if (!state.rolesAnalyzed.includes(role)) state.rolesAnalyzed.push(role);
    addXP(XP_REWARDS.complete_analysis, "Analysis Complete 🔬");
    updateMissionProgress("analysis", 1);
    if (state.rolesAnalyzed.length >= 3) awardBadge("skill_explorer");
    if (state.rolesAnalyzed.includes(role) && state.rolesQuizzed.includes(role)) awardBadge("role_master");
    save();
  }

  // ─── EXPOSE ───────────────────────────────────────────────
  return {
    load, save, reset,
    addXP, awardBadge, hasBadge,
    launchConfetti, playSound,
    onQuestionAnswered, onQuizCompleted, onResumeUploaded, onAnalysisCompleted,
    updateHUD, getLevelData, getLevelProgress, getNextLevel,
    get state() { return state; },
    get LEVELS() { return LEVELS; },
    get BADGES() { return BADGES; },
  };
})();
