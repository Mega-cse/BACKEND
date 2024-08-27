import express from 'express';
import { createEmployee, deleteEmployeeById, getEmployeeDetail, getEmployeeDetailById, updateEmployeeById } from '../Controller/employee.controller.js';


const router =express.Router()
 router.post('/create-emp',createEmployee)
 router.get('/get-empdetails',getEmployeeDetail)
 router.get('/get-empdetails/:id', getEmployeeDetailById)
 router.put('/edit-emp/:email', updateEmployeeById);
 router.delete('/delete-emp/:id',  deleteEmployeeById);

 export default router;
