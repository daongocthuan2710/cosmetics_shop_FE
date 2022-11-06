import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import "./index.scss";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Breadcrumb() {
    const breadcrumbList = useSelector(state => state.breadcrumb);
    var lastKey = Object.keys(breadcrumbList).pop();
    var obj = Object.keys(breadcrumbList)[Object.keys(breadcrumbList).length - 2] || [];

    const breadcrumbCate = () => {
        for (let i = 0; i < obj.length; i++) {
            return (
            <Link 
                key={i + 2}
                to={`danh-muc/${removeAccents(breadcrumbList[i]).split(" ").join("-")}`}
            >
            {breadcrumbList[i]}
            </Link>
            )
        }
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
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" className="breadcrumb">
        <Link 
            key="1" 
            to="/"
        >
            Home
        </Link>
        {breadcrumbCate()}
        <Typography key={lastKey + 2} color="grey" className="breadcrumb__active">
            {breadcrumbList[lastKey]}
        </Typography>
    </Breadcrumbs>
  );
}
