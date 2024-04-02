function getemployee(){
        $.ajax({
            url: `/server/demo_function/empList`,
            success: function (data) {
                const {
                    data: { Employee }
                } = data;
                EmployeeList(Employee);
            },
            error: function (err) {
                console.log(err);
            }
        });
};
function EmployeeList(employee){
    let count=0;
    let leftMiddle = document.querySelector('.zw-WC-L-Middle');
    employee.forEach(i => {
        let imgDiv = document.createElement('div');
        imgDiv.setAttribute('id',i.id);
        imgDiv.className = 'zw-WC-LM-Emp';
        imgDiv.addEventListener('click',()=>{
            let allexperts = document.querySelectorAll('.zw-WC-LM-Emp');
            allexperts.forEach(a=>{
                a.classList.remove('zw-WC-LM-Emp-active');
            })
            imgDiv.classList.add('zw-WC-LM-Emp-active');
        })
        if(count==0){
            imgDiv.classList.add('zw-WC-LM-Emp-active');
        }
        count+=1;
        let createImg  = document.createElement('img');
        createImg.setAttribute('src',`https://console.catalyst.zoho.in/baas/v1/project/5907000000005068/folder/5907000000005876/file/5907000000010173/download`);
        createImg.setAttribute('title',i.name);
        imgDiv.appendChild(createImg);
        leftMiddle.appendChild(imgDiv);
    
    });
    // $(".zw-WC-L-Middle").html(AppendEmp);
}

getemployee();
// const allexperts = document.querySelectorAll('.zw-WC-LM-Emp');
// console.log(allexperts);
