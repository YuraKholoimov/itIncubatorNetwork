import React from 'react';
import {Pagination} from 'react-bootstrap';

type PaginationItemPropsType = {
    totalPagesCount: number[]
    currentPage: number
    setCurrentPage: (el: number) => void
}
const PaginationItem = (props: PaginationItemPropsType) => {
    let lestNumOfPage =5;
    let firstNumOfPage = 0;
    let arrOfNumPages

    if (props.currentPage === lestNumOfPage) {
        lestNumOfPage = 5
        firstNumOfPage = lestNumOfPage
            lestNumOfPage += lestNumOfPage
        arrOfNumPages = props.totalPagesCount.slice(firstNumOfPage, lestNumOfPage)
    } else {
        arrOfNumPages = props.totalPagesCount.slice(firstNumOfPage, lestNumOfPage)
    }
    return (
        <div>
            <Pagination>
                <Pagination.First/>
                <Pagination.Prev/>

                {/*{arrOfNumPages.map(page => {*/}
                {/*    return <Pagination.Item>{page}</Pagination.Item>*/}
                {/*})}*/}
                {/*<Pagination.Item></Pagination.Item>*/}
                {
                arrOfNumPages.map(el => {
                       if (el === props.currentPage ) {
                          return  <Pagination.Item key={el} onClick={() => props.setCurrentPage(el)} active>{el}</Pagination.Item>
                       } else {
                           return <Pagination.Item key={el} onClick={() => props.setCurrentPage(el)}>{el}</Pagination.Item>
                       }
                    })
                }
                {/*<Pagination.Item >{1}</Pagination.Item>*/}
                {/*<Pagination.Ellipsis />*/}
                {/*<Pagination.Item>{10}</Pagination.Item>*/}
                {/*<Pagination.Item>{11}</Pagination.Item>*/}
                {/*<Pagination.Item active>{12}</Pagination.Item>*/}
                {/*<Pagination.Item>{13}</Pagination.Item>*/}
                {/*<Pagination.Item disabled>{14}</Pagination.Item>*/}
                {/*<Pagination.Ellipsis />*/}
                {/*<Pagination.Item>{5}</Pagination.Item>*/}
                <Pagination.Next/>
                <Pagination.Last/>
            </Pagination>
        </div>
    );
};

export default PaginationItem;