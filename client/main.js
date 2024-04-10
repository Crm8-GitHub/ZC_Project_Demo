function getemployee(){
        let leftLazy = document.createElement('div');
        leftLazy.className = 'zw-leftLazy-content';
        for (let i = 0; i < 5; i++) {
            let lazyImage = document.createElement('div');
            lazyImage.className = 'zw-lazyImage-content';
            leftLazy.appendChild(lazyImage);
        }
        document.querySelector('.zw-WC-L-Middle').appendChild(leftLazy);
    
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
            if(count==0){
                imgDiv.classList.add('zw-WC-LM-Emp-active');
            }
        count+=1;
        let createImg  = document.createElement('img');
        createImg.addEventListener('click',()=>{
            let allexperts = document.querySelectorAll('.zw-WC-LM-Emp');
            allexperts.forEach(a=>{
                a.classList.remove('zw-WC-LM-Emp-active');
            })
            createImg.parentElement.classList.add('zw-WC-LM-Emp-active');
        });
        createImg.setAttribute('src',`https://console.catalyst.zoho.in/baas/v1/project/5907000000005068/folder/5907000000005876/file/5907000000010173/download`);
        createImg.setAttribute('title',i.name);
        imgDiv.appendChild(createImg);
        leftMiddle.appendChild(imgDiv);
        leftLazyDelete=document.querySelector('.zw-leftLazy-content');
        if(leftLazyDelete){
        leftLazyDelete.remove();
        }
    });
}
// getemployee();
