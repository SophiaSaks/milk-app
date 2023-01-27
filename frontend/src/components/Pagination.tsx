import './Pagination.css';

type Props = {
    totalPosts: number;
    postsPerPage: number;
    setCurrentPage: (num: number) => void;
};

function Pagination(props:Props) {
    let pages: number[] = [];
    for(let i = 1; i<= Math.ceil(props.totalPosts/props.postsPerPage); i++) {
        pages.push(i)
    }
  return (
    <div className='Pagination'>
        {
            pages.map((page, index) => {
                return <button className='Pagination__btn' key={index} onClick={() => props.setCurrentPage(page)}>{page}</button>
            })
        }
    </div>
  );
}

export default Pagination;