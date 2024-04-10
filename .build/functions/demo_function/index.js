'use strict';
const express = require('express');
const catalystSDK = require('zcatalyst-sdk-node');
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    const catalyst = catalystSDK.initialize(req);
    res.locals.catalyst = catalyst;
    next();
});
app.get('/empList', async (req, res) => {
    try {
        const { catalyst } = res.locals;
        const zcql = catalyst.zcql();
        const Employee = await zcql.executeZCQLQuery(`SELECT ROWID,First_Name FROM Employee_Form`);
        const formattedEmployee = Employee.map((emp) => ({
            id: emp.Employee_Form.ROWID,
            name: emp.Employee_Form.First_Name
        }));
        res.status(200).send({
            status: 'success',
            data: { Employee: formattedEmployee }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            status: 'failure',
            message: "We're unable to process the request."
        });
    }
});
module.exports = app;
