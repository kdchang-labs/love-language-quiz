const loveLanguages = {
  words: {
    name: "肯定言語",
    summary: "你容易透過清楚、真誠、具體的話語感受到被看見。",
    detail: "對你來說，語言不是客套，而是關係裡的定錨。你重視身邊的人是否願意把欣賞、感謝、支持說出口，尤其是能指出細節的肯定。",
    tips: ["把你喜歡被稱讚的方式說清楚。", "請重要的人用具體句子回應你的努力。", "重要時刻可以用文字訊息留下一些可回看的話。"]
  },
  time: {
    name: "精心時刻",
    summary: "你在專注陪伴與共享經驗中最能感到被在乎。",
    detail: "你看重的是身邊的人是否把注意力真正放在你身上。一起吃飯、散步、聊天或完成一件小事，都可能比昂貴安排更有重量。",
    tips: ["安排不滑手機的固定相處時間。", "用共同活動取代只是在同一個空間各忙各的。", "溝通時先給彼此完整注意力，再處理其他事情。"]
  },
  gifts: {
    name: "接受禮物",
    summary: "你會從有心挑選的物品與紀念感中讀到愛意。",
    detail: "禮物對你而言不只是價格，而是身邊的人是否記得你的偏好、生活細節與重要日子。一個小物也可能代表『我有把你放在心上』。",
    tips: ["建立彼此的禮物靈感清單。", "把紀念日、重要里程碑放進日曆。", "重視包裝、手寫卡片或交付時的儀式感。"]
  },
  acts: {
    name: "服務行動",
    summary: "你常透過實際分擔與主動協助感受到愛。",
    detail: "你相信愛會落在行動裡。當身邊的人主動處理麻煩、記得你的負擔、在你開口前伸手協助，你會感到安心。",
    tips: ["明確列出最能減輕壓力的三件事。", "用分工或約定讓付出不只靠默契。", "對實際幫忙給出即時感謝，讓對方知道做對了什麼。"]
  },
  touch: {
    name: "溫暖接觸",
    summary: "你透過合宜的靠近、擁抱與觸碰建立安全感。",
    detail: "身體距離對你很有訊號意義。擁抱、靠近、輕拍肩膀或牽手，都可能讓你比單純說話更快感到被安撫。不同關係適合的接觸方式不同，界線與同意很重要。",
    tips: ["先確認彼此舒服的觸碰界線。", "在合適的關係中加入自然的小接觸，例如擁抱或拍拍肩。", "衝突時若雙方都同意，可用短暫靠近幫助緩和。"]
  }
};

const questions = [
  {
    text: "當你一整天很累時，哪一種回應最能讓你放鬆？",
    choices: [
      { type: "acts", title: "有人主動幫你處理一件麻煩事", body: "例如準備餐點、收拾、接手待辦。" },
      { type: "words", title: "有人認真告訴你：辛苦了", body: "而且說得出你今天承受了什麼。" }
    ]
  },
  {
    text: "你比較容易記住哪一種愛意？",
    choices: [
      { type: "gifts", title: "一份剛好符合你喜好的小禮物", body: "不一定昂貴，但讓你知道有人有留意。" },
      { type: "time", title: "一段完整留給你的相處時間", body: "沒有分心，專心一起做正在做的事。" }
    ]
  },
  {
    text: "在關係低潮時，你最希望重要的人怎麼靠近你？",
    choices: [
      { type: "touch", title: "先給你一個安定的擁抱", body: "讓身體先知道你不是獨自面對。" },
      { type: "words", title: "清楚說出願意理解與溝通", body: "用話語讓你確認關係仍然被重視。" }
    ]
  },
  {
    text: "以下哪件事會讓你覺得自己被放在心上？",
    choices: [
      { type: "time", title: "有人排開時間陪你完成一件小事", body: "一起採買、散步或整理房間。" },
      { type: "acts", title: "有人默默把你討厭的瑣事做完", body: "讓你不用再分心處理。" }
    ]
  },
  {
    text: "如果只能選一個生日安排，你會偏好？",
    choices: [
      { type: "gifts", title: "收到一份非常懂你的禮物", body: "看得出對方提前想過。" },
      { type: "touch", title: "一整天都有溫暖自然的陪伴", body: "合宜的靠近或擁抱都讓你安心。" }
    ]
  },
  {
    text: "你覺得最有力量的道歉通常包含什麼？",
    choices: [
      { type: "acts", title: "對方真的改變行為", body: "不是只說抱歉，而是下次做得不同。" },
      { type: "words", title: "對方把理解與歉意說完整", body: "能說出哪裡傷到你，以及願意修補。" }
    ]
  },
  {
    text: "週末你最想收到哪一種邀請？",
    choices: [
      { type: "time", title: "我們留半天好好相處", body: "安排簡單也可以，重點是專心在一起。" },
      { type: "gifts", title: "我看到一個東西很適合你", body: "對方因為想到你而帶回來。" }
    ]
  },
  {
    text: "對你而言，哪一種日常更像被愛？",
    choices: [
      { type: "touch", title: "見面或道別時的擁抱", body: "用合宜接觸確認彼此連結。" },
      { type: "acts", title: "對方記得幫你補上缺的東西", body: "例如生活用品、行程、待辦提醒。" }
    ]
  },
  {
    text: "你比較希望重要的人如何表達欣賞？",
    choices: [
      { type: "words", title: "直接說出欣賞你的地方", body: "越具體越能讓你感到被理解。" },
      { type: "gifts", title: "用一個小驚喜代表感謝", body: "讓心意有一個可以保存的形狀。" }
    ]
  },
  {
    text: "當你感到不安時，哪一種支持最有效？",
    choices: [
      { type: "time", title: "對方停下來陪你聊到穩定", body: "不急著解決，只是完整在場。" },
      { type: "touch", title: "對方用合宜的方式靠近你", body: "讓你透過接觸慢慢安心。" }
    ]
  },
  {
    text: "你最容易因為哪件小事感動？",
    choices: [
      { type: "gifts", title: "對方買了你提過一次的小東西", body: "證明對方真的有聽進去。" },
      { type: "acts", title: "對方提前處理掉你的壓力來源", body: "讓你感覺有人和你同隊。" }
    ]
  },
  {
    text: "你理想中的平日晚間比較像？",
    choices: [
      { type: "time", title: "一起吃飯並好好聊今天", body: "不需要特別行程，只要專注。" },
      { type: "words", title: "聽見對方分享今天想到你的瞬間", body: "一句話讓平凡日子變得被記得。" }
    ]
  },
  {
    text: "你最希望對方在公開場合怎麼表達在乎？",
    choices: [
      { type: "words", title: "自然肯定你、介紹你的優點", body: "讓你感到被尊重與珍惜。" },
      { type: "touch", title: "自然靠近或給你支持性的碰觸", body: "用合宜的距離表達你們的連結。" }
    ]
  },
  {
    text: "如果對方要讓你感覺被珍惜，你會選哪一個？",
    choices: [
      { type: "acts", title: "對方主動分擔你一直扛著的事", body: "讓你不用每次都提醒或求助。" },
      { type: "time", title: "對方安排一段只屬於你們的時間", body: "即使忙，也把關係排進生活。" }
    ]
  },
  {
    text: "長期關係中，你最不想失去的是？",
    choices: [
      { type: "touch", title: "自然的靠近與溫柔互動", body: "讓關係保持安全、溫暖、真實。" },
      { type: "gifts", title: "仍然願意為彼此準備心意", body: "讓日子裡保有被記得的證據。" }
    ]
  }
];

const state = {
  currentIndex: 0,
  answers: new Array(questions.length).fill(null)
};

const introView = document.querySelector("#introView");
const quizView = document.querySelector("#quizView");
const resultView = document.querySelector("#resultView");
const startButton = document.querySelector("#startButton");
const restartButton = document.querySelector("#restartButton");
const shareButton = document.querySelector("#shareButton");
const downloadButton = document.querySelector("#downloadButton");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const progressText = document.querySelector("#progressText");
const answeredText = document.querySelector("#answeredText");
const progressBar = document.querySelector("#progressBar");
const questionText = document.querySelector("#questionText");
const choices = document.querySelector("#choices");
const resultTitle = document.querySelector("#resultTitle");
const resultSummary = document.querySelector("#resultSummary");
const rankingList = document.querySelector("#rankingList");
const detailTitle = document.querySelector("#detailTitle");
const detailBody = document.querySelector("#detailBody");
const tipsList = document.querySelector("#tipsList");

function showView(view) {
  introView.hidden = view !== "intro";
  quizView.hidden = view !== "quiz";
  resultView.hidden = view !== "result";
}

function renderQuestion() {
  const question = questions[state.currentIndex];
  const selected = state.answers[state.currentIndex];
  const answeredCount = state.answers.filter(Boolean).length;
  const progress = ((state.currentIndex + 1) / questions.length) * 100;

  progressText.textContent = `第 ${state.currentIndex + 1} / ${questions.length} 題`;
  answeredText.textContent = `已作答 ${answeredCount} / ${questions.length} 題`;
  progressBar.style.width = `${progress}%`;
  questionText.textContent = question.text;
  choices.innerHTML = "";

  question.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = "choice-button";
    button.type = "button";
    button.setAttribute("aria-pressed", String(selected === choice.type));
    button.innerHTML = `<strong>${choice.title}</strong><span>${choice.body}</span>`;
    button.addEventListener("click", () => {
      state.answers[state.currentIndex] = choice.type;
      renderQuestion();
      if (index >= 0) {
        nextButton.focus();
      }
    });
    choices.append(button);
  });

  prevButton.disabled = state.currentIndex === 0;
  nextButton.disabled = !selected;
  nextButton.textContent = state.currentIndex === questions.length - 1 ? "查看結果" : "下一題";
}

function calculateScores() {
  return state.answers.reduce((scores, type) => {
    if (type) {
      scores[type] += 1;
    }
    return scores;
  }, { words: 0, time: 0, gifts: 0, acts: 0, touch: 0 });
}

function getSortedResults() {
  const scores = calculateScores();
  return Object.entries(scores)
    .map(([type, score]) => ({ type, score, ...loveLanguages[type] }))
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name, "zh-Hant"));
}

function getShareText(results = getSortedResults()) {
  const [top, second] = results;
  return `我的「發現你的愛之語」結果：${top.name}，第二高是${second.name}。`;
}

function getSiteShareUrl() {
  return window.location.href.split("#")[0];
}

function getSiteLinkText() {
  return `發現你的愛之語\n${getSiteShareUrl()}`;
}

function resetShareButton(button) {
  button.textContent = "複製網站連結";
}

async function writeClipboardText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.select();

  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
}

function renderResults() {
  const results = getSortedResults();
  const top = results[0];
  const maxScore = Math.max(...results.map((result) => result.score), 1);

  resultTitle.textContent = `你最容易感受到被愛的方式是：${top.name}`;
  resultSummary.textContent = top.summary;
  detailTitle.textContent = top.name;
  detailBody.textContent = top.detail;
  rankingList.innerHTML = "";
  tipsList.innerHTML = "";

  results.forEach((result, index) => {
    const item = document.createElement("div");
    item.className = "rank-item";
    item.innerHTML = `
      <div class="rank-title">
        <span>${index + 1}. ${result.name}</span>
        <span class="rank-score">${result.score}</span>
      </div>
      <div class="score-track">
        <div class="score-fill" style="width: ${(result.score / maxScore) * 100}%"></div>
      </div>
    `;
    rankingList.append(item);
  });

  top.tips.forEach((tip) => {
    const item = document.createElement("div");
    item.className = "tip";
    item.textContent = tip;
    tipsList.append(item);
  });
}

function restart() {
  state.currentIndex = 0;
  state.answers.fill(null);
  showView("intro");
}

function wrapCanvasText(ctx, text, maxWidth) {
  const lines = [];
  let line = "";

  Array.from(text).forEach((char) => {
    const testLine = `${line}${char}`;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = char;
      return;
    }
    line = testLine;
  });

  if (line) {
    lines.push(line);
  }

  return lines;
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines = Infinity) {
  const lines = wrapCanvasText(ctx, text, maxWidth).slice(0, maxLines);

  lines.forEach((line, index) => {
    const isLastVisibleLine = index === maxLines - 1 && wrapCanvasText(ctx, text, maxWidth).length > maxLines;
    const visibleLine = isLastVisibleLine ? `${line.slice(0, -1)}...` : line;
    ctx.fillText(visibleLine, x, y + index * lineHeight);
  });

  return lines.length * lineHeight;
}

function drawRoundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function canvasToBlob(canvas) {
  return new Promise((resolve) => {
    canvas.toBlob(resolve, "image/png", 0.96);
  });
}

async function createResultCardBlob() {
  const results = getSortedResults();
  const top = results[0];
  const maxScore = Math.max(...results.map((result) => result.score), 1);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const width = 1080;
  const height = 1350;

  canvas.width = width;
  canvas.height = height;

  const fontFamily = '"Noto Sans TC", "PingFang TC", "Microsoft JhengHei", sans-serif';

  ctx.fillStyle = "#f7f3ed";
  ctx.fillRect(0, 0, width, height);

  const bgGradient = ctx.createLinearGradient(0, 0, width, height);
  bgGradient.addColorStop(0, "#fff7f5");
  bgGradient.addColorStop(0.5, "#fffdf9");
  bgGradient.addColorStop(1, "#e5f3f1");
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "rgba(201, 79, 95, 0.13)";
  ctx.beginPath();
  ctx.arc(110, 120, 260, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(23, 111, 106, 0.11)";
  ctx.beginPath();
  ctx.arc(980, 1180, 330, 0, Math.PI * 2);
  ctx.fill();

  drawRoundRect(ctx, 70, 70, 940, 1210, 28);
  ctx.fillStyle = "rgba(255, 253, 249, 0.92)";
  ctx.fill();
  ctx.strokeStyle = "#ded5c9";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.fillStyle = "#9f3442";
  ctx.font = `800 28px ${fontFamily}`;
  ctx.fillText("Find Your Love Language", 120, 150);

  ctx.fillStyle = "#25211c";
  ctx.font = `800 58px ${fontFamily}`;
  ctx.fillText("發現你的愛之語", 120, 230);

  ctx.fillStyle = "#6e665b";
  ctx.font = `500 30px ${fontFamily}`;
  drawWrappedText(ctx, "我最容易感受到被愛的方式是", 120, 295, 780, 46, 2);

  ctx.fillStyle = "#c94f5f";
  ctx.font = `800 82px ${fontFamily}`;
  drawWrappedText(ctx, top.name, 120, 410, 780, 100, 2);

  ctx.fillStyle = "#25211c";
  ctx.font = `700 34px ${fontFamily}`;
  drawWrappedText(ctx, top.summary, 120, 535, 820, 52, 3);

  ctx.fillStyle = "#6e665b";
  ctx.font = `500 27px ${fontFamily}`;
  drawWrappedText(ctx, top.detail, 120, 655, 820, 43, 4);

  ctx.fillStyle = "#176f6a";
  ctx.font = `800 30px ${fontFamily}`;
  ctx.fillText("我的排序", 120, 860);

  results.forEach((result, index) => {
    const y = 910 + index * 70;
    const barWidth = 560;
    const fillWidth = (result.score / maxScore) * barWidth;

    ctx.fillStyle = "#25211c";
    ctx.font = `800 28px ${fontFamily}`;
    ctx.fillText(`${index + 1}. ${result.name}`, 120, y);

    ctx.fillStyle = "#9f3442";
    ctx.textAlign = "right";
    ctx.fillText(`${result.score}`, 920, y);
    ctx.textAlign = "left";

    drawRoundRect(ctx, 300, y - 22, barWidth, 14, 7);
    ctx.fillStyle = "#ece3d8";
    ctx.fill();

    if (fillWidth > 0) {
      drawRoundRect(ctx, 300, y - 22, fillWidth, 14, 7);
      ctx.fillStyle = index === 0 ? "#c94f5f" : "#176f6a";
      ctx.fill();
    }
  });

  ctx.fillStyle = "#6e665b";
  ctx.font = `500 22px ${fontFamily}`;
  ctx.textAlign = "center";
  ctx.fillText("適用於家人、伴侶、朋友等關係中的自我覺察與溝通", width / 2, 1318);
  ctx.textAlign = "left";

  const blob = await canvasToBlob(canvas);
  if (!blob) {
    throw new Error("Unable to create result card.");
  }
  return blob;
}

async function copySiteUrl(button) {
  button.textContent = "複製中...";

  try {
    const copied = await writeClipboardText(getSiteLinkText());
    button.textContent = copied ? "已複製" : "複製網站連結";
  } catch {
    resetShareButton(button);
    return;
  }

  setTimeout(() => {
    resetShareButton(button);
  }, 1400);
}

startButton.addEventListener("click", () => {
  showView("quiz");
  renderQuestion();
});

restartButton.addEventListener("click", restart);

prevButton.addEventListener("click", () => {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
});

nextButton.addEventListener("click", () => {
  if (!state.answers[state.currentIndex]) {
    return;
  }

  if (state.currentIndex === questions.length - 1) {
    renderResults();
    showView("result");
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
});

shareButton.addEventListener("click", async () => {
  try {
    await copySiteUrl(shareButton);
  } catch {
    resetShareButton(shareButton);
  }
});

downloadButton.addEventListener("click", async () => {
  try {
    const blob = await createResultCardBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "love-language-result.png";
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);

    downloadButton.textContent = "已下載";
    setTimeout(() => {
      downloadButton.textContent = "下載卡片";
    }, 1400);
  } catch {
    downloadButton.textContent = "下載失敗";
    setTimeout(() => {
      downloadButton.textContent = "下載卡片";
    }, 1400);
  }
});
