import css from './LoadMoreBtn.module.css';
export function LoadMoreBtn({ onClick }) {
  return (
    <button onClick={onClick} className={css.loadMoreBtn}>
      Load more
    </button>
  );
}
