import './App.css';
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  //const [modalIsOpen, setModalIsOpen] = useState(false);

  const [showCreateEditModal, setShow] = useState(false);

  //const handleClose = () => setShow(false);
  const handleShowCreateEditModal = () => { console.log('before'); setShow(true); console.log('after');}

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-3">
          <div className="col-8" style={{backgroundColor: "#cab", borderRadius: "5px"}}>
            <div className="container mt-2" style={{backgroundColor: "#eee"}}>
              <div className="row">
                <div className="col-4">Name</div>
                <div className="col-4">Type</div>
                <div className="col-4">Options</div>
              </div>

              {/* <div className="row mt-2">
                <div className="col-4">Type</div>
                <div className="col-4">Options</div>
                <div className="col-4">Name</div>
              </div> */}
            </div>
          </div>

          <div className="col-1"></div>

          <div className="col-3" style={{backgroundColor: "#cab", borderRadius: "5px"}}>
            <div class="form-group">
              <label>Pet name</label>
              <p>Popi</p>
            </div>
            <div class="form-group">
              <label>Pet type</label>
              <p>Gato</p>
            </div>
            <div class="form-group">
              <label>Breed</label>
              <p>Blanco</p>
            </div>
            <div class="form-group">
              <label>Owner's first name</label>
              <p>Hani</p>
            </div>
            <div class="form-group">
              <label>Owner's last name</label>
              <p>None</p>
            </div>
            <div class="form-group">
              <label>Owner's phone</label>
              <p>351816816151</p>
            </div>
            <div class="form-group">
              <label>Owner's address</label>
              <p>Addreess yeay!</p>
            </div>
            <div class="form-group">
              <label>Owner's address</label>
              <p>email@email.com</p>
            </div>
          </div>  
        </div>
        <div className="row mt-3">
          <div className="col-4"></div>
          <div className="col-2"></div>
          <div className="col-3">
            <button type="button" className="btn btn-primary" onClick={handleShowCreateEditModal}>Add pet</button>
          </div>
        </div>
      </div>
      

      <Modal
        isOpen={showCreateEditModal}
        shouldCloseOnOverlayClick={false}
      >
        <div>
          <h3>Add a new pet</h3>
          <hr/>
          <div>
            <form>
              <div class="form-group">
                <label for="petName">Pet name</label>
                <input type="text" class="form-control" id="petName" placeholder="Enter your pet's name"/>
              </div>
              <div class="form-group">
                <label for="petType">Pet type</label>
                <input type="text" class="form-control" id="petType" placeholder="Enter your pet's type"/>
              </div>
              <div class="form-group">
                <label for="petBreed">Breed</label>
                <input type="text" class="form-control" id="petBreed" placeholder="Enter your pet's breed"/>
              </div>
              <div class="form-group">
                <label for="firstName">Owner's first name</label>
                <input type="text" class="form-control" id="firstName" placeholder="Enter your first name"/>
              </div>
              <div class="form-group">
                <label for="lastName">Owner's last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Enter your last name"/>
              </div>
              <div class="form-group">
                <label for="phone">Owner's phone</label>
                <input type="text" class="form-control" id="phone" placeholder="Enter your phone"/>
              </div>
              <div class="form-group">
                <label for="address">Owner's address</label>
                <input type="text" class="form-control" id="address" placeholder="Enter your address"/>
              </div>
              <div class="form-group">
                <label for="email">Owner's address</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email"/>
              </div>
              
              <button type="submit" class="btn btn-primary mt-3">Submit</button>
            </form>
          </div>
        </div>
        <div>
          <button className="btn btn-primary">Add</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
