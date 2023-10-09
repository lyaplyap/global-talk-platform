const LANGUAGE_LEVELS_TABS_CLASSNAME = {
  TAB: 'language-levels-tab',
  LEVEL: 'language-levels-tab__level',
  TAG: 'tag'
};

const resetActiveLanguageLevelsTab = () => {
  const activeTab = document.body.querySelector(`.${LANGUAGE_LEVELS_TABS_CLASSNAME.TAB}_selected`);

  if (activeTab) {
    activeTab.classList.remove(`${LANGUAGE_LEVELS_TABS_CLASSNAME.TAB}_selected`);
    
    const level = activeTab.querySelector(`.${LANGUAGE_LEVELS_TABS_CLASSNAME.LEVEL}_selected`);
    const tag = activeTab.querySelector(`.${LANGUAGE_LEVELS_TABS_CLASSNAME.TAG}_selected`);

    level?.classList.remove(`${LANGUAGE_LEVELS_TABS_CLASSNAME.LEVEL}_selected`);
    tag?.classList.remove(`${LANGUAGE_LEVELS_TABS_CLASSNAME.TAG}_selected`);
  }
};

const handleTabbarClick = (event) => {
  const activeTab = document.body.querySelector(`.${LANGUAGE_LEVELS_TABS_CLASSNAME.TAB}_selected`);
  const currentTab = event.currentTarget;

  if (activeTab === currentTab) return;

  resetActiveLanguageLevelsTab();
  
  const level = currentTab.querySelector(`.${LANGUAGE_LEVELS_TABS_CLASSNAME.LEVEL}`);
  const tag = currentTab.querySelector(`.${LANGUAGE_LEVELS_TABS_CLASSNAME.TAG}`);

  currentTab.classList.add(`${LANGUAGE_LEVELS_TABS_CLASSNAME.TAB}_selected`);
  level?.classList.add(`${LANGUAGE_LEVELS_TABS_CLASSNAME.LEVEL}_selected`);
  tag?.classList.add(`${LANGUAGE_LEVELS_TABS_CLASSNAME.TAG}_selected`);
};
