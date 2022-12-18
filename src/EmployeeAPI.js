import React, {Component} from "react";
class EmployeeAPI extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            employees : []
        }
    }

    componentDidMount()
    {
        fetch("http://restapi.adequateshop.com/api/Metadata/GetEmployees")
        .then(res => res.json())
        .then(
            (result) =>{
                this.setState({
                    employees: result
                });
            },
        )
    }

    render()
    {
        var employeeslist = this.state.employees;
        if(employeeslist && employeeslist.length > 0)
        {
            return(
                <div>
                    <h2>Employees List using API </h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Name</th>
                                <th>Address </th>
                                <th>City</th>
                                <th>ZipCode</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeslist.map(emp => (
                                <tr key={emp.Id}>                                    
                                    <td>{emp.Id}</td>
                                    <td>{emp.Name}</td>
                                    <td>{emp.Address}</td>
                                    <td>{emp.City}</td>
                                    <td>{emp.ZipCode}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }
        else
        {
            return(
                <div>
                    <h2>No record Found</h2>
                </div>
            )
        }
    }
}
export default EmployeeAPI;