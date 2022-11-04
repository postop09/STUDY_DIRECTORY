{
  /**
   * 첫번째 인자를 key, 두번째 인자를 value 로 할당한다.
   */
  type PageInfo = {
    title: string;
  };

  type Page = "home" | "about" | "contact";

  const nav: Record<Page, PageInfo> = {
    home: {title: "Home"},
    about: {title: "About"},
    contact: {title: "Contact"}
  };
}