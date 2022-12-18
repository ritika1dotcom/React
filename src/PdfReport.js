import React, { Component } from "react";
import jsPDF from "jspdf";
import 'jspdf-autotable';
class PdfReport extends Component
{
    constructor(props)
    {
        super(props);
    };

    generatePDF = () => {
        const country = 'Nepal';
        var data = 'Friends @ Kathford Intl College' + country;
        var doc = new jsPDF('p','pt');
        doc.text(20,30,data);
        doc.autoTable({
            margin:{top:50, left:20, bottom:30 },
            head: [
                ['ID','Name','Email','Country'],
            ],
            body: [
                ['1','Asmina','asminashrestha10@gmail.com','Nepal'],
                ['2','Dipesh','dipeshshrestha82@gmail.com','Nepal'],
                ['3','Alex','alexdahal12@gmail.com','Nepal'],
                ['4','Nischal','nischalmaharjan590@gmail.com','Nepal'],
                ['5','Prakriti','dahal.prakriti99@gmail.com','Nepal'],
                ['6','Suprabha','suprabhapokharel@gmail.com','Nepal'],
                ['7','Sushant','sushantbhandari42@gmail.com','Nepal'],
                ['8','Unique','unique.maharzan@gmail.com','Nepal']

            ],
        });
        doc.save('demo.pdf');
    }

    render()
    {
        return(
            <div>
                <h3>PDF Generation::</h3>
                <button onClick = {this.generatePDF} type="primary">Download PDF</button>
            </div>
        )
    }
}
export default PdfReport;