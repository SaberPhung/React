import React, {useState, useEffect} from 'react'; //import from library 
//Component is fetching data from
//Northwind server and rendering
//the data

const Customer =()=>{
    //we need to creat a variable when we fetch data from northwind backend
    //{} are there because its js object
    const [customer, setCustomer]=useState({}); //customer is variable name and setCustomer is function
    useEffect(() => {
        //getting data from back-end
        fetch("customers/1", {
          method: "get",
          headers: new Headers({
            Authorization:
              "Basic " + btoa("user:qwerty")
          })
        })
          .then(function(response) {
            //response is plain encoded text
            if (response.status !== 200) {
              console.log(
                "Looks like there was a problem. Status Code: " + response.status
              );
              return;
            }
            //convert text to json
            response.json().then(function(data) {
              setCustomer(data);
            });
          })
          .catch(function(err) {
            console.log("Fetch Error : ", err);
          });
      }, []);
    const header =<h1>Header</h1>;
    const fooder =<h1>Fooder</h1>
    return(
        <div>
            {header}
            <h4>Customer</h4>
            {JSON.stringify(customer)}
            <div><label>Name</label>
            <input type="text" value={customer.firstName}/>
            </div>
            {fooder}
        </div>
    )
}
export default Customer; // export to the main