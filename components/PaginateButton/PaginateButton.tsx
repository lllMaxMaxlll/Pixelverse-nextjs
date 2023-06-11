import style from "./Paginate.module.css";

type Props = {
	handleNextPage: () => void;
	handlePrevPage: () => void;
};

function PaginateButton({ handleNextPage, handlePrevPage }: Props) {
	return (
		<div className={style.paginate}>
			<button onClick={handlePrevPage}>Prev</button>
			<button onClick={handleNextPage}>Next</button>
		</div>
	);
}

export default PaginateButton;
