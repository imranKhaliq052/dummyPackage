$(document).ready(function(){
$('#attendance').DataTable();
$.ajaxSetup({
headers: {
'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
}
});
$(document).on('click', '#btn_add', function(){
var employee_salary_detail_id = $('#employee_salary_detail_id').text();
var date = $('#date').text();
var present = $('#present').text();
var advance = $('#advance').text();

if(employee_salary_detail_id == '')
{
alert("Enter ID");
return false;
}
if(date == '')
{
alert("Enter Date");
return false;
}
$.ajax({
type:'POST',
url:"{{ route('attendance::store') }}",
data:{employee_salary_detail_id:employee_salary_detail_id,date:date,present:present,advance:advance },
dataType:"json",
success:function(data1)
{
alert(data1.success);
location.reload();
}
});
});
$(document).on('click', '.btn_delete', function(){
var id=$(this).data("id5");
if(confirm("Are you sure you want to delete this?"))
{
$.ajax({
type:'POST',
url:"{{ route('attendance::destroy') }}",
data:{id:id},
dataType:"json",
success:function(data1){
alert(data1.success);
location.reload();
}
});
}
});
function edit_data(id, text, column_name)
{
$.ajax({
type:'POST',
url:"{{ route('attendance::edit') }}",
data:{id:id, text:text, column_name:column_name},
dataType:"json",
success:function(data1){
alert(data1.success);
}
});
}
$(document).on('blur', '.employee_salary_detail_id', function(){
var id = $(this).data("id1");
var employee_salary_detail_id = $(this).text();
edit_data(id, employee_salary_detail_id, "employee_salary_detail_id");
});
$(document).on('blur', '.date', function(){
var id = $(this).data("id2");
var date = $(this).text();
edit_data(id, date, "date");
});
$(document).on('blur', '.present', function(){
var id = $(this).data("id3");
var present = $(this).text();
edit_data(id, present, "present");
});
$(document).on('blur', '.advance', function(){
var id = $(this).data("id4");
var advance = $(this).text();
edit_data(id, advance, "advance");
});
});  //document. ready end