import './App.css';
import React, { useState } from 'react';
import Modal from 'react-modal';
import shortid from 'shortid';
import { isEmpty, size } from 'lodash';

Modal.setAppElement('#root');

function App() {
  //const [modalIsOpen, setModalIsOpen] = useState(false);

  const [showCreateEditModal, setShowCreateEditModal] = useState(false);
  const [showDeletionConfirmModal, setshowDeletionConfirmModal] = useState(false)

  //const handleClose = () => setShow(false);
  const handleShowCreateEditModal = () => { setShowCreateEditModal(true); }
  const handleHideCreateEditModal = () => { setShowCreateEditModal(false); }

  const getEmptyPet = () => {
    return {
      id: "",
      petName: "",
      petType: "",
      breed: "",
      fName: "",
      lName: "",
      phone: "",
      address: "",
      email: ""
    }
  }

  const [petForm, setpetForm] = useState(getEmptyPet());
  const [listPets, setlistPets] = useState([]);
  const [selectedPet, setselectedPet] = useState({});
  const [editMode, seteditMode] = useState(false);
  const [idDeletion, setidDeletion] = useState("");

  const addPet = (e) =>{
    e.preventDefault();

    if(isEmpty(petForm)){
      console.log("Task is empty");
      return;
    }

    const newPet = {
      id: shortid.generate(),
      petName: petForm.petName,
      petType: petForm.petType,
      breed: petForm.breed,
      fName: petForm.fName,
      lName: petForm.lName,
      phone: petForm.phone,
      address: petForm.address,
      email: petForm.email
    }
    console.log('Adding a new pet');
    console.table(newPet);

    setlistPets([...listPets, newPet]);
    console.log(listPets);
    setpetForm(getEmptyPet());
    setShowCreateEditModal(false);
  }

  const deletePet = () => {

    if(idDeletion){
      const id = idDeletion;
      if(selectedPet.id === id){
        setselectedPet({});
      }
      const filteredPets = listPets.filter((pet) => pet.id !== id);
      setlistPets(filteredPets);
      setidDeletion("");
    }
  }

  const selectPet = (pet) => {
    setselectedPet(pet);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setpetForm( prevState => ({...prevState, [name]: value }));
  }

  const handleDeleteMode = (id) =>{
    setidDeletion(id);
    setshowDeletionConfirmModal(true);
  }

  const handleEdit = (pet) => {
    seteditMode(true);
    setpetForm(pet);
    setShowCreateEditModal(true);
  }

  const handleAddButtonClick = () => {
    seteditMode(false);
    setpetForm(getEmptyPet());
    handleShowCreateEditModal();
  }

  const editPet = (petEdit) => {
    console.log(petEdit);
    const tempArray = listPets.map(pet => {
      if(pet.id === petEdit.id){
        console.log('id found, changing pet');
        console.log(pet);
        console.log(petEdit);
        return petEdit;
      }
      return pet;
    });

    setlistPets(tempArray);
    console.log('After editing, these are the current pets');
    console.log(listPets);

    setShowCreateEditModal(false);
    seteditMode(false);

    setpetForm(getEmptyPet());
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1 className="title text-center">Pet Heaven</h1>
        </div>
        <div className="row mt-3">
          <div className="col-8 petList" style={{backgroundColor: "#cab", borderRadius: "5px"}}>
            {
              size(listPets) === 0 ?
                <p className="text-center mt-3">There are no pets registered, come on! add a new friend by clicking the button down below</p>
              :
                <div className="container mt-2" >
                  <div className="row tableHeader" style={{backgroundColor: "#eee"}}>
                    <div className="col-4">Name</div>
                    <div className="col-4">Type</div>
                    <div className="col-4">Options</div>
                  </div>

                  {
                    listPets.map((pet) => (
                      <div className="row tableRow mt-1" key={pet.id}>
                        <div className="col-4">{pet.petName}</div>
                        <div className="col-4">{pet.petType}</div>
                        <div className="col-4">
                          <button type="button" className="btn btn-light" style={{marginLeft:"5px", marginTop:"5px"}} onClick={() => handleEdit(pet)}><i className="bi bi-pencil"></i></button>
                          <button type="button" className="btn btn-light" style={{marginLeft:"5px", marginTop:"5px"}} onClick={() => selectPet(pet)}><i className="bi bi-eye"></i></button>
                          <button type="button" className="btn btn-light" style={{marginLeft:"5px", marginTop:"5px"}} onClick={() => handleDeleteMode(pet.id)}><i className="bi bi-trash"></i></button>
                        </div>
                      </div>
                    ))
                  }
                </div>
            }
          </div>

          <div className="col-1"></div>

          <div className="col-3 divInfo" style={{backgroundColor: "#cab", borderRadius: "5px", padding: "10px 10px 10px 10px"}}>
            
            {
              isEmpty(selectedPet)  ?
                <p style={{color: "#ab3562"}}>You can select a pet by clicking the eye button. Their information and their owner's will appear here!</p>
                :
                <div>
                    <label>Pet name:</label>
                    <p>{selectedPet.petName}</p>

                    <label>Pet type:</label>
                    <p>{selectedPet.petType}</p>

                    <label>Breed:</label>
                    <p>{selectedPet.breed}</p>

                    <label>Owner's first name:</label>
                    <p>{selectedPet.fName}</p>

                    <label>Owner's last name:</label>
                    <p>{selectedPet.lName}</p>

                    <label>Owner's phone:</label>
                    <p>{selectedPet.phone}</p>

                    <label>Owner's address:</label>
                    <p>{selectedPet.address}</p>

                    <label>Owner's email:</label>
                    <p>{selectedPet.email}</p>
                </div>
            }
          </div>  
        </div>
        <div className="row mt-3">
          <div className="col-4"></div>
          <div className="col-2"></div>
          <div className="col-3">
            <button type="button" className="btn btn-primary" onClick={handleAddButtonClick}>Add pet</button>
          </div>
        </div>
      </div>
      

      <Modal
        isOpen={showCreateEditModal}showCreateEditModal
        shouldCloseOnOverlayClick={false}
      >
        <div>
          <h3>{ !editMode ? "Add a new pet" : "Edit Pet"}</h3>
          <hr/>
          <div>
            <form>
              <div className="form-group">
                <label htmlFor="petName">Pet name</label>
                <input type="text" className="form-control" id="petName" placeholder="Enter your pet's name" onChange={handleChange} name="petName" value={petForm.petName} required/>
              </div>
              <div className="form-group">
                <label htmlFor="petType">Pet type</label>
                <input type="text" className="form-control" id="petType" placeholder="Enter your pet's type" onChange={handleChange} name="petType" value={petForm.petType} required/>
              </div>
              <div className="form-group">
                <label htmlFor="petBreed">Breed</label>
                <input type="text" className="form-control" id="petBreed" placeholder="Enter your pet's breed" onChange={handleChange} name="breed" value={petForm.breed} required/>
              </div>
              <div className="form-group">
                <label htmlFor="firstName">Owner's first name</label>
                <input type="text" className="form-control" id="firstName" placeholder="Enter your first name" onChange={handleChange} name="fName" value={petForm.fName} required/>
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Owner's last name</label>
                <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" onChange={handleChange} name="lName" value={petForm.lName} required/>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Owner's phone</label>
                <input type="text" className="form-control" id="phone" placeholder="Enter your phone" onChange={handleChange} name="phone" value={petForm.phone} required/>
              </div>
              <div className="form-group">
                <label htmlFor="address">Owner's address</label>
                <input type="text" className="form-control" id="address" placeholder="Enter your address" onChange={handleChange} name="address" value={petForm.address} required/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Owner's email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" onChange={handleChange} name="email" value={petForm.email} required/>
              </div>
              
              <button type="button" className="btn btn-primary mt-3" onClick={!editMode ? addPet : () => editPet(petForm)}>{ !editMode ? "Add Pet" : "Edit Pet"}</button>
              <button type="button" className="btn btn-secondary mt-3" style={{marginLeft: "5px"}} onClick={handleHideCreateEditModal}>Close</button>

            </form>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={showDeletionConfirmModal}
        shouldCloseOnOverlayClick={false}
      >
        <div>
          <h3>Add a new pet</h3>
          <hr/>
          <div>
            <form>
              <p>Are you really sure you want to delete this register?</p>
              
              <button type="submit" className="btn btn-primary mt-3" onClick={deletePet()}>Yes</button>
              <button type="button" className="btn btn-secondary mt-3" style={{marginLeft: "5px"}} onClick={() => {setshowDeletionConfirmModal(false)}}>No</button>

            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
