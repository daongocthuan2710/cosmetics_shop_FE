import React from "react";
import { useDispatch } from "react-redux";
import { breadcrumbList } from "../../../../Store/user/breadcrumbSlice.js";
import { Nav, NavLink } from './styledNav.js';
import { useNavigate } from "react-router-dom";
import './index.scss';

function Navbar(props){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBreadcrumb = (breadcrumb) => {
        let breadcrumbArray = breadcrumb.split("/").slice(2);
        const action = breadcrumbList(breadcrumbArray);
        dispatch(action);
    }

    function removeAccents(str) {
        var AccentsMap = [
            "aàảãáạăằẳẵắặâầẩẫấậ",
            "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
            "dđ", "DĐ",
            "eèẻẽéẹêềểễếệ",
            "EÈẺẼÉẸÊỀỂỄẾỆ",
            "iìỉĩíị",
            "IÌỈĨÍỊ",
            "oòỏõóọôồổỗốộơờởỡớợ",
            "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
            "uùủũúụưừửữứự",
            "UÙỦŨÚỤƯỪỬỮỨỰ",
            "yỳỷỹýỵ",
            "YỲỶỸÝỴ"    
        ];
        for (var i=0; i<AccentsMap.length; i++) {
            var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
            var char = AccentsMap[i][0];
            str = str.replace(re, char);
        }
        return str;
        }

    return(
        <>
            <Nav>
                <ul className={` nav-menu ${props.isExpanded ? "is-expanded" : ""}`}>
                    <li>
                        <NavLink to="/about" activestyle = "true">
                            Thương hiệu
                        </NavLink>
                    </li>
                    {props.caterogyList 
                    ?props.caterogyList.map((item) => (
                        <li key={item.id}>
                            <NavLink 
                                to={`/danh-muc/${removeAccents(item.name).split(" ").join("-")}`} activestyle = "true" key={item.id}
                                onClick={() => (handleBreadcrumb(`/danh-muc/${item.name}`))}
                            >
                                {item.name}
                            </NavLink>
                            {item.types.length > 0
                                ?
                                <ul>
                                    {
                                    Object.keys(item.types).map((key) => {
                                        return(
                                        <li key={item.types[key].id}>
                                            <NavLink
                                                to={`/danh-muc/${removeAccents(item.name).split(" ").join("-")}/${removeAccents(item.types[key].name).split(" ").join("-")}`}
                                                onClick={() => {
                                                    handleBreadcrumb(`/danh-muc/${item.name}/${item.types[key].name}`);
                                                }}
                                            >
                                                {item.types[key].name}
                                            </NavLink>                                    
                                        </li>
                                        )
                                    })
                                 }
                                </ul>
                                : ""
                            }                  
                        </li>
                    )) 
                    : ''
                    }
                    <li>
                        <NavLink to="/home" activestyle = "true">
                            Khuyến mãi
                        </NavLink>
                    </li>
                </ul>
            </Nav>
        </>
    );
}

export default Navbar;