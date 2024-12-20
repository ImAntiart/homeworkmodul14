type TLink = {
  name: string;
  path: string;
  activeNumb: number;
};
export enum Paths {
  MAIN_PAGE_ROUTE = '/',
  ABOUT_PAGE_ROUTE = '/about',
  ALBUMS_PAGE_ROUTE = '/albums',
  SINGLES_PAGE_ROUTE = '/singles',
  TESTIMONIALS_PAGE_ROUTE = '/testimonials',
}

export const links: TLink[] = [
  { name: 'Дом', path: Paths.MAIN_PAGE_ROUTE, activeNumb: 0 },
  { name: 'Обо мне', path: Paths.ABOUT_PAGE_ROUTE, activeNumb: 1 },
  { name: 'Сайты', path: Paths.ALBUMS_PAGE_ROUTE, activeNumb: 2 },
  { name: 'Макеты', path: Paths.SINGLES_PAGE_ROUTE, activeNumb: 3 },
];
