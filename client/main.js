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
function EmployeeList(Content){
    var AppendEmp ='';
    Content.forEach(i => {
        AppendEmp+=`<div id="${i.id}" class="zw-WC-LM-Emp"><img src='https://console.catalyst.zoho.in/baas/v1/project/5907000000005068/folder/5907000000005876/file/5907000000010173/download' title="${i.name}"></div>`;
    });
    $(".zw-WC-L-Middle").html(AppendEmp);
}
getemployee();
