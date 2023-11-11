'use strict'; /* 厳格にエラーをチェック */

(()=>{ /* ローカルスコープ */

// DOM取得
const tabMenus = document.querySelectorAll('.tab_menu_item');

// イベント付加
tabMenus.forEach((tabMenu) => {
  tabMenu.addEventListener('click', tabSwitch);
})

// イベントの処理
function tabSwitch(e) {

  // クリックされた要素のデータ属性を取得
  const tabTargetData = e.currentTarget.dataset.tab;
  // クリックされた要素の親要素と、その子要素を取得
  const tabList = e.currentTarget.closest('.tab_menu');
  const tabItems = tabList.querySelectorAll('.tab_menu_item');
  // クリックされた要素の親要素の兄弟要素の子要素を取得
  const tabPanelItems = tabList.
  nextElementSibling.querySelectorAll('.tab_panel_box');

  // クリックされたtabの同階層のmenuとpanelのクラスを削除
  tabItems.forEach((tabItem) => {
    tabItem.classList.remove('is_active');
  })
  tabPanelItems.forEach((tabPanelItem) => {
    tabPanelItem.classList.remove('is_show');
  })

  // クリックされたmenu要素にis-activeクラスを付加
  e.currentTarget.classList.add('is_active');
  // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
  tabPanelItems.forEach((tabPanelItem) => {
    if (tabPanelItem.dataset.panel ===  tabTargetData) {
      tabPanelItem.classList.add('is_show');
    }
  })

}

// DOM取得
document.addEventListener("DOMContentLoaded", function (event) {
  let elements = document.getElementsByClassName("js_text_anime");
  for (var i = 0; i < elements.length; i++) {
      animateText(elements[i]);
  }
});

// 文字の中にデータを付与
function animateText(element) {
  let text = element.innerText;
  element.innerText = "";

  // 文字の最初と最後にspanタグを付与
  for (var i = 0; i < text.length; i++) {
      var span = document.createElement("span");
      span.innerText = text[i];
      element.appendChild(span);
  }
  
  //アニメーション遅延時間調整
  let spans = element.getElementsByTagName("span");
  for (var j = 0; j < spans.length; j++) {
      (function (index) {
          setTimeout(function () {
              spans[index].style.opacity = 1;
          }, index * 100); 
      })(j);
  }
}

})();