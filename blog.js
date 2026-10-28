/* ============================================================================
   「我看金融與科技」BLOG 模組
   ----------------------------------------------------------------------------
   設計目標：本模組可從簡歷網站中整包搬出，嵌入任何網站獨立運作。

   遷移時只需複製三個部分：
     1. index.html 的 <style> 內標示「blog 我看金融與科技」的 CSS 區塊
     2. index.html 的 <section id="blog"> … </section> 區塊
     3. 本檔案 blog.js（文章資料 BLOG_POSTS + 設定 BLOG_CONFIG）

   留言與點讚資料存放在 GitHub Discussions，與網站本身完全無耦合，
   遷移網站不會影響任何既有留言。
   ----------------------------------------------------------------------------
   文章維護（不需懂程式，照格式抄即可）：
     · 新增文章：在下方 BLOG_POSTS 陣列中複製一筆 {}，修改 id（唯一、
       英文小寫與連字號）、date、title、tags、excerpt、body 即可
     · 排序：每篇文章可加上 order:數字，數字越小越前面；
       不填 order 則依陣列中的原始順序排列
     · 開頭「最新觀點」精選列：自動顯示排序後的第一篇文章，
       想換精選文章，調整 order 或陣列順序即可
     · 刪除文章：整筆 {} 刪掉即可，GitHub 上的留言不會消失
   ----------------------------------------------------------------------------
   Giscus 啟用步驟（首次設定約 10 分鐘，之後永久免維護）：
     a. 在 GitHub 建立一個「公開」倉庫，例如 blog-comments
     b. 至 https://github.com/apps/giscus 安裝 giscus，並授權該倉庫
     c. 在該倉庫 Settings → General → Features 勾選 Discussions
     d. 至 https://giscus.app ，輸入倉庫名稱與 Discussion 分類，
        產生 repo-id 與 category-id
     e. 將四個值填入下方 BLOG_CONFIG 即可
   文章留言會以 GitHub Discussion 形式保存，可於 GitHub 上管理（隱藏／刪除）。
   ============================================================================ */

const BLOG_CONFIG = {
  repo:       'eRichard24/WhoIsRichardBlogComment', // GitHub 倉庫
  repoId:     'R_kgDOVaJjRA',                       // giscus repo-id
  category:   'Announcements',                      // Discussion 分類名稱
  categoryId: 'DIC_kwDOVaJjRM4DJzT0',               // giscus category-id
  lang:       'zh-TW'
};

/* 文章資料：id 為唯一識別（英文小寫與連字號），date / title / tags / excerpt / body */
const BLOG_POSTS = [
{
  id:'cio-three-topics',
  order:1,
  date:'2026.10.28',
  title:'作為保險公司的 CIO，你最關心的三個主題是什麼？——我的自問自答',
  tags:['CIO 視角','保險科技','IT 策略'],
  excerpt:'核心系統換不換？AI 怎麼落地？人才從哪裡來？這是我在顧問工作中最常被客戶問起的問題，也是我每年都會重新回答自己的問題。以下用自問自答的方式，分享我的三個答案。',
  body:[
    '每年這個時候，我都會把下面這三個問題重新問自己一次——它們未必有標準答案，也未必適用每一家公司，但思考的角度，值得每一位保險科技領導者參考。',
    '<b>問：核心系統到底要不要換？什麼時候換？</b><br><b>答：</b>這恐怕是每一位保險 CIO 心底最大的一顆石頭。老核心系統真正的風險，不在「還能用」，而在「沒人敢動」——熟悉它的工程師逐年退休、文件散落各地、每一次監管調整都像在瓷器店裡跳舞。我的建議是把「換不換」重新框架成「我們願意承擔多少風險」：建立核心系統風險量表（人才斷層、維護成本、監管因應速度），讓董事會用數據而非情緒做決策。至於路徑——整包更換、逐步現代化、或先外掛 API 層——沒有標準答案，但有標準的評估方法。',
    '<b>問：數據與 AI 是機會，還是燙手山芋？</b><br><b>答：</b>兩者皆是。董事會期待 AI 的成果，但多數公司的數據地基還沒打好。CIO 最該關心的不是哪一個模型，而是三件事：數據治理的責任歸屬（數據品質到底誰負責）、語義層是否統一（同一個指標，全公司是否只有一個定義）、以及 AI 應用的風險分級（哪些場景可以自動化、哪些必須維持人機協作）。把這三件事做好，AI 應用會自然長出來；做不好，採購再多的工具，也只是用更快的速度製造混亂。',
    '<b>問：科技團隊的人才與文化，跟得上轉型的速度嗎？</b><br><b>答：</b>系統可以採購，人才買不到。保險公司的科技部門普遍面臨「留不住、招不來」的困境：薪資結構敵不過科技公司，技術形象又顯得老舊。我建議 CIO 把人才策略當作產品來經營：給工程師清晰的技術發展路徑、讓團隊和業務一起打仗的成就感、以及容許試錯的文化。同時，供應商管理也要升級——從「買人頭」轉向「買能力」，把廠商變成能力互補的長期夥伴，而不是按人計價的人力派遣。',
    '回頭看，這三個主題其實是同一個命題的三個切面：風險、價值與人。核心系統是風險的底線，數據與 AI 是價值的引擎，人才與文化則決定了前兩者能否真正落地。',
    '你的答案是什麼？如果今天你坐上保險公司 CIO 的位置，你最關心的三個主題會是什麼？歡迎在下方留言，分享你的觀點，我會親自回覆。'
  ]
}];

/* 介面文字（依網站語系切換；文章內容維持繁體中文作者原稿） */
const BLOG_STR = {
'zh-Hant': {
  readMore:'閱讀全文', close:'收合',
  comments:'留言與點讚', like:'點讚', liked:'已點讚',
  cta:'點讚支持 · 留言交流',
  giscusHint:'使用 GitHub 帳號即可留言，並以表情符號為文章點讚 · 留言同時保存於本站 GitHub 討論區',
  setupTitle:'留言功能即將開放',
  setupBody:'本站留言與點讚由 GitHub Discussions 支援（免費、無廣告）。站長完成 Giscus 設定後即可使用。'
},
'zh-Hans': {
  readMore:'阅读全文', close:'收合',
  comments:'留言与点赞', like:'点赞', liked:'已点赞',
  cta:'点赞支持 · 留言交流',
  giscusHint:'使用 GitHub 帐号即可留言，并以表情符号为文章点赞 · 留言同时保存于本站 GitHub 讨论区',
  setupTitle:'留言功能即将开放',
  setupBody:'本站留言与点赞由 GitHub Discussions 支援（免费、无广告）。站长完成 Giscus 设定后即可使用。'
},
'en': {
  readMore:'Read', close:'Close',
  comments:'Comments & Reactions', like:'Like', liked:'Liked',
  cta:'Like this post · Join the discussion',
  giscusHint:'Sign in with GitHub to comment and react · Comments are stored in this site’s GitHub Discussions',
  setupTitle:'Comments opening soon',
  setupBody:'Comments and reactions are powered by GitHub Discussions (free, ad-free). Available once the site owner finishes the one-time Giscus setup.'
}};

/* ---------- 狀態 ---------- */
let blogOpenId = null;
function blogLikes(){ try{ return JSON.parse(localStorage.getItem('rc-blog-likes')||'[]'); }catch(e){ return []; } }
function blogIsLiked(id){ return blogLikes().includes(id); }
function blogToggleLike(id){
  let a = blogLikes();
  a = a.includes(id) ? a.filter(x=>x!==id) : a.concat(id);
  localStorage.setItem('rc-blog-likes', JSON.stringify(a));
}
function blogConfigured(){
  return !/YOUR_|xxxx/.test(BLOG_CONFIG.repo + BLOG_CONFIG.repoId + BLOG_CONFIG.categoryId);
}
/* 排序：order 數字小者在前，未填 order 依陣列順序 */
function blogSorted(){
  return BLOG_POSTS.slice().sort((a,b)=>(a.order||0)-(b.order||0));
}
function blogIsDark(){
  return document.documentElement.getAttribute('data-theme') === 'B';
}
/* 切換配色時同步更新已載入的 Giscus 佈景（深/淺） */
function blogSyncTheme(){
  const th = blogIsDark() ? 'dark' : 'light';
  document.querySelectorAll('iframe.giscus-frame').forEach(f=>{
    try{ f.contentWindow.postMessage({giscus:{setConfig:{theme:th}}}, 'https://giscus.app'); }catch(e){}
  });
}
const blogGiscusMounted = {};

/* ---------- Giscus 載入 ---------- */
function blogMountGiscus(post){
  const box = document.querySelector(`.post[data-id="${post.id}"] .giscus-box`);
  if(!box || blogGiscusMounted[post.id]) return;
  const s = BLOG_STR[LANG] || BLOG_STR['zh-Hant'];
  if(!blogConfigured()){
    box.innerHTML = `<div class="giscus-note"><b>${s.setupTitle}</b><br>${s.setupBody}</div>`;
    blogGiscusMounted[post.id] = true;
    return;
  }
  box.innerHTML = '';
  const scr = document.createElement('script');
  const attrs = {
    src:'https://giscus.app/client.js',
    'data-repo':BLOG_CONFIG.repo,
    'data-repo-id':BLOG_CONFIG.repoId,
    'data-category':BLOG_CONFIG.category,
    'data-category-id':BLOG_CONFIG.categoryId,
    'data-mapping':'specific',
    'data-term':'我看金融與科技 · ' + post.id,
    'data-reactions-enabled':'1',
    'data-emit-metadata':'0',
    'data-input-position':'top',
    'data-theme':blogIsDark()?'dark':'light',
    'data-lang':BLOG_CONFIG.lang,
    'data-loading':'lazy',
    crossorigin:'anonymous',
    async:'true'
  };
  Object.entries(attrs).forEach(([k,v])=>scr.setAttribute(k,v));
  box.appendChild(scr);
  blogGiscusMounted[post.id] = true;
}

/* ---------- 渲染（由主程式 renderAll 呼叫） ---------- */
function renderBlog(){
  const t = BLOG_STR[LANG] || BLOG_STR['zh-Hant'];
  const wrap = document.getElementById('blogList');
  if(!wrap) return;
  wrap.innerHTML = blogSorted().map(p=>{
    const liked = blogIsLiked(p.id);
    const open = blogOpenId === p.id;
    return `
    <article class="post${open?' open':''}" data-id="${p.id}">
      <div class="row">
        <div class="date tnum">${p.date}</div>
        <div class="head">
          <h3>${p.title}</h3>
          <div class="tags">${p.tags.map(x=>`<i>${x}</i>`).join('')}</div>
          <p class="excerpt">${p.excerpt}</p>
          <div class="meta">
            <button class="like${liked?' liked':''}" data-like="${p.id}" aria-pressed="${liked}">
              <svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.9-10-9.3C.3 8.6 2.2 4.5 6.1 4.1c2.2-.2 4.3 1 5.9 3 1.6-2 3.7-3.2 5.9-3 3.9.4 5.8 4.5 4.1 7.6C19.5 16.1 12 21 12 21z"/></svg>
              <span>${liked?t.liked:t.like}</span>
            </button>
            <span class="more">${open?t.close:t.readMore}</span>
          </div>
        </div>
        <div class="pm">+</div>
      </div>
      <div class="body"><div class="body-in">
        ${p.body.map(x=>`<p class="p">${x}</p>`).join('')}
        <div class="cmts">
          <div class="clabel">${t.comments}</div>
          <p class="giscus-hint">${t.giscusHint}</p>
          <div class="giscus-box"></div>
        </div>
      </div></div>
    </article>`;
  }).join('');
  if(blogOpenId){
    const p = blogSorted().find(x=>x.id===blogOpenId);
    if(p) blogMountGiscus(p);
  }
  blogRenderHighlight();
}

/* ---------- 開頭「最新觀點」精選列：自動帶入排序後的第一篇 ---------- */
function blogRenderHighlight(){
  const hl = document.getElementById('heroHl');
  if(!hl) return;
  const p = blogSorted()[0];
  if(!p){ hl.style.display = 'none'; return; }
  document.getElementById('hlTitle').textContent = p.title;
  document.getElementById('hlDate').textContent = p.date;
  hl.style.display = 'flex';
}

/* ---------- 互動事件 ---------- */
document.addEventListener('click', e=>{
  // 開頭精選列 → 跳至觀點區並展開該篇
  const hl = e.target.closest('#heroHl');
  if(hl){
    e.preventDefault();
    const p = blogSorted()[0];
    if(!p) return;
    blogOpenId = p.id;
    renderBlog();
    const sec = document.getElementById('blog');
    if(sec) sec.scrollIntoView({behavior:'smooth'});
    return;
  }
  const likeBtn = e.target.closest('[data-like]');
  if(likeBtn){
    e.stopPropagation();
    blogToggleLike(likeBtn.dataset.like);
    renderBlog();
    return;
  }
  const post = e.target.closest('.post');
  if(!post) return;
  const s = BLOG_STR[LANG] || BLOG_STR['zh-Hant'];
  const id = post.dataset.id;
  blogOpenId = (blogOpenId === id) ? null : id;
  document.querySelectorAll('#blogList .post').forEach(x=>{
    x.classList.remove('open');
    const m = x.querySelector('.more');
    if(m) m.textContent = s.readMore;
  });
  if(blogOpenId){
    post.classList.add('open');
    const m = post.querySelector('.more');
    if(m) m.textContent = s.close;
    const p = blogSorted().find(x=>x.id===blogOpenId);
    if(p) blogMountGiscus(p);
    if(window.innerWidth < 861){
      setTimeout(()=>post.scrollIntoView({behavior:'smooth', block:'start'}), 80);
    }
  }
});
