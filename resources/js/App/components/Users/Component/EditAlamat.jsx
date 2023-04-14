import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { useGetKabupaten, useGetKecamatan, useGetKelurahan, useGetProvinsi } from "../Api/Wilayah";
import { toast } from "react-toastify";

const Wilayah = ['provinces', 'regencies', 'districts', 'villages'];

export default class EditAlamat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            provinces: [],
            regencies: [],
            districts: [],
            villages:  [],
        };
        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmit  = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        (async() =>{
            const getProvincies = await useGetProvinsi()
            if(getProvincies.status === 200){
                const response = await getProvincies.json();
                this.setState((values) => {
                    return {...values, provinces: response}
                });
            }
        })();
    }
    handleSubmit(event){
        event.preventDefault();
        toast.warning('Loading', {
            autoClose: 1500,
            closeButton: true
        })
        const form = new FormData(event.target);
        const body = Object.fromEntries(form.entries())
        console.log(body)
    }
    handleChanges({event, type}){
        switch(type){
            case 'P':
                (async() =>{
                    const finds = this.state.provinces.find((val) => val.name === event.target.value);
                    const getKabupaten = await useGetKabupaten({id: finds?.id})
                    if(getKabupaten.status === 200){
                        const response = await getKabupaten.json();
                        this.setState((values) =>{
                            return {...values, regencies: response, districts:[], villages:[]}
                        })
                    }
                })();break;
            case 'R':
                (async () => {
                    const finds = this.state.regencies.find((val) => val.name === event.target.value);
                    const getKecamatan = await useGetKecamatan({id: finds?.id});
                    if(getKecamatan.status === 200){
                        const response = await getKecamatan.json();
                        this.setState((values) => {
                            return {...values, districts: response, villages: []};
                        })
                    }
                })();break;
            case 'D':
                (async () => {
                    const finds = this.state.districts.find((val) => val.name === event.target.value);
                    const getKelurahan = await useGetKelurahan({id: finds?.id});
                    if(getKelurahan.status === 200){
                        const response = await getKelurahan.json();
                        this.setState((values) => {
                            return {...values, villages: response};
                        })
                    }
                })();break;
        }
    }

    render(){
        const { provinces, regencies, districts, villages } = this.state;
        return (
                <Row className="row-cols-1 row-cols-md-2 g-4">
                    <Col md={7}>
                    <form onSubmit={this.handleSubmit} id="form_edit_alamat">
                        <Row className="row-cols-1 row-cols-md-2 g-2">
                            <Col md={3}>
                                <label htmlFor="" className="col-form-label">
                                    KOTA
                                </label>
                            </Col>
                            <Col md={9}>
                                <select name="provinsi" id={Wilayah[0]}
                                    className="form-select"
                                    onChange={async (event) => this.handleChanges({type: 'P', event: event})}>
                                    <option value="">Pilih Provinsi</option>
                                    {
                                        provinces?.map((val, idx) => (
                                            <option key={idx} value={val.name}>{val?.name}</option>
                                        ))
                                    }
                                </select>
                            </Col>
                        </Row>  
                        <Row className="row-cols-1 row-cols-md-2 g-2 mt-2">
                            <Col md={3}>
                                <label htmlFor="" className="col-form-label">
                                    KABUPATEN
                                </label>
                            </Col>
                            <Col md={9}>
                                <select name="kabupaten" id={Wilayah[1]}
                                    className="form-select"
                                    onChange={async (event) => this.handleChanges({type: 'R', event: event})}>
                                    <option value="">Pilih Kabupaten</option>
                                    {
                                        regencies?.map((values, idx) =>(
                                            <option key={idx} value={values?.name}>{values?.name}</option>
                                        ))
                                    }
                                </select>
                            </Col>
                        </Row> 
                        <Row className="row-cols-1 row-cols-md-2 g-2 mt-2">
                            <Col md={3}>
                                <label htmlFor="" className="col-form-label">
                                    KECAMATAN
                                </label>
                            </Col>
                            <Col md={9}>
                                <select name="kecamatan" id="" className="form-select"
                                onChange={async (event) => this.handleChanges({type: 'D', event: event})}>
                                    <option value="">Pilih Kecamatan</option>
                                    {
                                        districts?.map((values, idx) => (
                                            <option key={idx} value={values?.name}>{values?.name}</option>
                                        ))
                                    }
                                </select>
                            </Col>
                        </Row>
                        <Row className="row-cols-1 row-cols-md-2 g-2 mt-2">
                            <Col md={3}>
                                <label htmlFor="" className="col-form-label">
                                    KELURAHAN
                                </label>
                            </Col>
                            <Col md={9}>
                                <select name="kelurahan" id="" className="form-select">
                                    <option value="">Pilih Kelurahan</option>
                                    {
                                        villages?.map((values, idx) => (
                                            <option key={idx} value={values?.name}>{values?.name}</option>
                                        ))
                                    }
                                </select>
                            </Col>
                        </Row>  
                        <Row className="row-cols-1 row-cols-md-2 g-2 mt-2">
                            <Col md={3}>
                                <label htmlFor="" className="col-form-label">
                                    NAMA JL
                                </label>
                            </Col>
                            <Col md={9}>
                                <input type="text" name="nama_jl" className="form-control" placeholder="Masukan Nama Jl,Gg,No.Rumah" />
                            </Col>
                        </Row>
                        <Row className="row-cols-1 row-cols-md-2 g-2 mt-2">
                            <Col md={3}>
                                <label htmlFor="" className="col-form-label">
                                    NO TELP
                                </label>
                            </Col>
                            <Col md={9}>
                                <input type="text" name="no_telp" className="form-control" placeholder="Masukan No Telp" />
                            </Col>
                        </Row>
                        <button type="submit" className="btn btn-success text-white fw-bold float-end mt-3 btn-sm">Submit</button>
                     </form>
                    </Col>
                    <Col md={5}>
                        <ListGroup className="text-black-50">
                                <ListGroup.Item className="bg-success text-white text-center fw-bold">
                                    ALAMAT PENGIRIMAN ANDA..
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex justify-content-between">
                                        <span>KOTA</span>
                                        <div className="w-50 text-center">
                                            BANDAR LAMPUNG
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex justify-content-between">
                                        <span>KABUPATEN</span>
                                        <div className="w-50 text-center">
                                            BANDAR LAMPUNG
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex justify-content-between">
                                        <span>KABUPATEN</span>
                                        <div className="w-50 text-center">
                                            BANDAR LAMPUNG
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex justify-content-between">
                                        <span>KABUPATEN</span>
                                        <div className="w-50 text-center">
                                            BANDAR LAMPUNG
                                        </div>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <div className="d-flex justify-content-between">
                                        <span>KABUPATEN</span>
                                        <div className="w-50 text-center">
                                            BANDAR LAMPUNG
                                        </div>
                                    </div>
                                </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
        )
    }
}