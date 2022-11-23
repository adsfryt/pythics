import {Link} from "react-router-dom";
import React from "react";

const List = ({ cList, ll }) => {
    var r = cList.length;
    if(r !== 0 && r !== ll){

    return (
        <div className="list">
            {
                cList.map((them, index) => {
                    if(r-1 !== index){
                    return (
                        <div className="comm">
                            <div className="commname"><Link to={'/' + them.firstname}><p className="commnametxt">{them.firstname}</p></Link></div>
                        </div>
                    )
                }
                })
            }
            <div className="comm1">
                <div className="commname"><Link to={'/' + cList[r-1].firstname}><p className="commnametxt">{cList[r-1].firstname}</p></Link></div>
            </div>
        </div>
    );
}
}

export default List;