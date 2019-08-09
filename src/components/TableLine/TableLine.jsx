import React from 'react';
import './tableLine.css';

import { ReactComponent as DeleteShape } from '../../assets/img/delete.svg';
import { ReactComponent as EditShape } from '../../assets/img/edit.svg';


const TableLine = (props) => (
    <tr className="article-line">
        <td>{props.name}</td>
        <td>{props.date}</td>
        <td className={"article-line__status " + props.statusClassName}>{props.statusClassName}</td>
        <td className="article-line__action-btns">
            <a  href={props.hrefLink}>
                {<EditShape/>}  
            </a>
            <button onClick={() => props.deleteArticle(props.id)}>
                 {<DeleteShape/>}
            </button>
            
        </td>
    </tr>
);

    TableLine.defaultProps = {
        name: "Article",
        date: "Date",
        status: "pending"
    }

    
    export default TableLine;
