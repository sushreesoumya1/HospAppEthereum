pragma solidity ^0.4.17;


contract MedData {
 
    address admin;

   struct Patient {
        uint patientID;
        string name;
        uint age;
        uint dateOfReg;
    }
    
    
  uint[] public patientArray ;
  mapping (uint => Patient) patientData;
   
  function MedData() public {
        admin = msg.sender;
    }
    
    function registerPatient (uint _patientID, string _name, uint _age, uint _dateOfReg) public {
       
       Patient memory newPatient = Patient({
                patientID : _patientID,
                name: _name,
               age: _age,
               dateOfReg: _dateOfReg
            });
        patientData[_patientID] = newPatient;
        patientArray.push(_patientID);
    }
  
    
    function getPatients() public view returns (uint[]) {
       return patientArray;
     
    }
    
    function getPatientSummary (uint _index) public constant returns (uint,string,uint,uint) {
        
        return (
           patientData[_index].patientID,
           patientData[_index].name,
           patientData[_index].age,
           patientData[_index].dateOfReg
        );
    }
    
    
    
}