import Employee from "../Models/employee.schema.js";

export const createEmployee =async(req,res)=>
{
    try{
     const newEmployee =new Employee(req.body)
    await newEmployee.save();
    res.status(200).json({message:"Employee created successfully",data:newEmployee})
    }
    catch(error){
        console.log(error);
    }

}
export const getEmployeeDetail = async (req,res)=>{
    try{
        const employee = await Employee.find()
        res.status(200).json({data:employee})
    }catch(error){
        console.log(error);
    }
}

export const getEmployeeDetailById = async(req,res)=>{
    try {
       const empId = req.params.id
       const employee = await Employee.findById(empId)
       if(!employee){
        return res.status(404).json({message:"Emp not Found"})
       } 
       res.status(200).json({data:employee})
    } catch (error) {
        console.log(error);
        
    }
}


export const updateEmployeeById = async (req, res) => {
    try {
        const { email } = req.params; 
        console.log("Email:", email);

        const { firstName, lastName, designation } = req.body; 
        const result = await Employee.updateOne(
            { email: email }, 
            { $set: { firstName, lastName, designation } }        );
        console.log("Update result:", result);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Employee not found" });}
        const updatedEmployee = await Employee.findOne({ email });

        if (!updatedEmployee) {
            return res.status(500).json({ message: "Failed to retrieve updated employee" });
        }

        res.status(200).json({ data: updatedEmployee, message: "Employee updated successfully" });
    } catch (error) {
        console.error("Error updating employee:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
// Delete employee by id
export const deleteEmployeeById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Employee.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Employee not found' });      }

        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        console.error('Error deleting employee:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};