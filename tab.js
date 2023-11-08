'use strict'; /* 厳格にエラーをチェック */

(()=>{ /* ローカルスコープ */

// DOM取得
const tabMenus = document.querySelectorAll('.tab_menu_item');
console.log(tabMenus);

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
  console.log(tabList);
  const tabItems = tabList.querySelectorAll('.tab_menu_item');
  console.log(tabItems);
  // クリックされた要素の親要素の兄弟要素の子要素を取得
  const tabPanelItems = tabList.
  nextElementSibling.querySelectorAll('.tab_panel_box');
  console.log(tabPanelItems);

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

})();