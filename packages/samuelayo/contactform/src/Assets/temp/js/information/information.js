

 $(document).ready(function() {
    $('#myTable').DataTable( {
        dom: 'Bfrtip',
        colReorder: true,
        fixedHeader: true,
        buttons: [
           'colvis', 'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    } );
} );