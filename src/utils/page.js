export default ({ currentPage, quantity }, ActionNextPager, api) => {
  ActionNextPager({ currentPage, quantity });
  api({ currentPage, quantity });
};
