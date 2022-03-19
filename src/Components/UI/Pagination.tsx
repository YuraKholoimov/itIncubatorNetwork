import React from 'react';
import { Pagination } from 'react-bootstrap';
type PaginationItemPropsType = {
    totalPagesCount: number[]
    currentPage: number
    setCurrentPage: (el:number) => void
}
const PaginationItem = (props:PaginationItemPropsType) => {

    return (
        <div>
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                {
                    props.totalPagesCount.map(el => el == props.currentPage
                        ? <Pagination.Item onClick={() => props.setCurrentPage(el)} active >{el}</Pagination.Item>
                        :  <Pagination.Item onClick={() => props.setCurrentPage(el)}>{el}</Pagination.Item>
                    )
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
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </div>
    );
};

export default PaginationItem;