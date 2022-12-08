import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Modal, Button, Form, Container, Row, Col } from 'react-bootstrap';
import ImageUploader from "react-images-upload";
import cateApi from '../../../../api/cateApi';
import typeApi from '../../../../api/typeApi';
import brandApi from '../../../../api/brandApi';
import { errors } from '../../../../assets/images/datas/errors';
import './index.scss'
import productApi from '../../../../api/productApi';
import Swal from 'sweetalert2';

function AddNewProduct(props) {
    const IMAGE_CLOUD = { 
        CLOUD_NAME: 'dwwuvc6qo',
        UPLOAD_PRESET: 'hjvx2emz',
        API_URL:'https://api.cloudinary.com/v1_1',
        GET_URL: 'https://res.cloudinary.com'
      }

    const [picture, setPicture] = useState([]);
    const [pictureDataURL, setPictureDataURL] = useState('');
    const [cateList,setCateList] = useState([]);
    const [typeList,setTypeList] = useState([]);
    const [brandList,setBrandList] = useState([]);
    const [name,setName] = useState('');
    const [quantity,setQuantity] = useState(0);
    const [brandId,setBrandId] = useState(1);
    const [typeId,setTypeId] = useState(1);
    const [image, setImage] = useState('');
    const [desc,setDesc] = useState('');
    const [price,setPrice] = useState(0);
    const [disableSave,setDisableSave] = useState(true);

    useEffect(() => {
        setDisableSave(true);
        if (name != '' && quantity != 0 && desc != '' && pictureDataURL != ''
        && brandId != undefined && typeId != undefined && price != 0)
            setDisableSave(false);  
        }, [name, quantity, brandId, typeId, price, desc, pictureDataURL]);

    const handleOnChangeAvatar = (pictureFiles, pictureDataURLs) => {
        setPicture(pictureFiles);
        setPictureDataURL(pictureDataURLs[0]);
      }
     
      const handleDropImage = () => {
        setPictureDataURL('');
      }

    const handleUpdateImage = () => {
    var formData = new FormData();
        formData.append('file', picture[0]);
        formData.append('upload_preset', IMAGE_CLOUD.UPLOAD_PRESET);
    axios.post(`${IMAGE_CLOUD.API_URL}/${IMAGE_CLOUD.CLOUD_NAME}/image/upload`,formData)
        .then((response) => {
        if(response.data.public_id && response.data.format){
            const tempFile = `${response.data.public_id}.${response.data.format}`;
            setImage(tempFile);
            setPictureDataURL('');      
            AddNewProduct(tempFile);
        }
        })
        .catch(error => {
        console.log(error);
    });
    }

    const handleAddNewProduct = () =>{
        if(pictureDataURL != ''){
            handleUpdateImage();
        }else{
          AddNewProduct();
        }
      }

    const AddNewProduct = async () =>{
        try{
            
            const body = {
                name:name, 
                image:image, 
                price:price, 
                rate:0, 
                quantity:quantity, 
                description:desc, 
                id_brand:brandId, 
                id_type:typeId, 
                id_promotion:"" 
            }  
            const response = await productApi.createProduct(body);
            
            if(response.status == 200){
            Swal.fire({
                position: 'center',
                icon: 'success',
                text: 'Thêm sản phẩm thành công',
                width: '300px',
                showConfirmButton: false,
                timer: 1500
            })
            }
            
        } catch(error) {
            console.log("Fail to addNewProduct", error);
            Swal.fire({
                position: 'center',
                icon: 'error',
                text: 'Thêm sản phẩm thất bại',
                width: '300px',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    const fetchCates =  async () => {
        try{
          const response = await cateApi.getAll();
          setCateList(response.data);
        } catch(error) {
          console.log("Fail to fetch categorys", error);
        }
    }

    const fetchTypes =  async (cateId = 1) => {
        try{
          const response = await typeApi.getTypeByCategoryId(cateId);
          const data = response.data;
          if(response.status == 200){
            setTypeList(data);
          }
        } catch(error) {
          console.log("Fail to fetch types", error);
        }
    }

    const fetchBrands =  async () => {
        try{
          const response = await brandApi.getAll();
          if(response.status){
            setBrandList(response.data);
          }
        } catch(error) {
          console.log("Fail to fetch brands", error);
        }
    }

    function handleType(cateId){
        fetchTypes(cateId);
    }

    useEffect(() =>{
        fetchCates();
        fetchBrands();
        fetchTypes();
      }, []);

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-add-product"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Thêm sản phẩm
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Form>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Chọn danh mục</Form.Label>
                                <Form.Select onChange={(e) => handleType(e.target.value)}>
                                    {cateList.length > 0
                                    ?
                                    cateList.map((item) =>{
                                        return(
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        )
                                    })
                                    : ''

                                    }                           
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Chọn loại sản phẩm</Form.Label>
                                <Form.Select onChange={(e) => setTypeId(e.target.value)}>
                                    {typeList.length > 0
                                    ?
                                    typeList.map((item) =>{
                                        return(
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        )
                                    })
                                    : ''}
                                    
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={8}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Tên sản phẩm</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Nhập tên sản phẩm" 
                                    onChange= {(e) => setName(e.target.value)}

                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nhập số lượng</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    placeholder="Nhập số lượng" 
                                    onChange= {(e) => setQuantity(Number(e.target.value))}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nhập giá bán</Form.Label>
                                <Form.Control 
                                    type="number" 
                                    placeholder="Nhập giá bán" 
                                    onChange= {(e) => setPrice(Number(e.target.value))}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label>Chọn thương hiệu</Form.Label>
                                <Form.Select onChange={(e) => {setBrandId(e.target.value)}}>
                                    {brandList.length > 0
                                    ?
                                    brandList.map((item) =>{
                                        return(
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        )
                                    })
                                    :''}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Chọn hình ảnh</Form.Label>
                        <Row className="upload-avt-form">
                            <Col md={12} className="avatar">
                                <div className="avatar_container">
                                    <img 
                                        src={pictureDataURL == '' ? errors["no_image.jpg"] : pictureDataURL}
                                    />
                                    {
                                    pictureDataURL != ''
                                    ? <div 
                                        className="dropImage"
                                        onClick={() => handleDropImage()}
                                        >X</div> :''
                                    }

                                </div>
                            </Col>
                            <Col>
                                <ImageUploader
                                    withIcon={false}
                                    label=""
                                    buttonText="Chọn hình ảnh"
                                    singleImage = {true}
                                    onChange={handleOnChangeAvatar}
                                    imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}
                                    maxFileSize={1048576}
                                    dataURLKey="data_url"
                                    fileSizeError=" file size is too big"
                                />
                            </Col>
                            <Col md={12} className="text-file">
                                Dung lượng file tối đa 1 MB
                                Định dạng: .JPEG, .PNG, .GIF, .SVG
                            </Col>
                    </Row>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Mô tả</Form.Label>
                        <textarea 
                            className="form-control" 
                            rows="5" 
                            id="comment"
                            onChange= {(e) => setDesc(e.target.value)}
                        ></textarea>
                    </Form.Group>

                    <Button 
                        variant="primary" 
                        type="button"
                        onClick={() => handleAddNewProduct()}
                        disabled = {disableSave}
                    >
                        Thêm
                    </Button>
                </Form>
            </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Đóng</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default React.memo(AddNewProduct);