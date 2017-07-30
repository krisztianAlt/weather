$(document).ready(function(){
    $('#townlist').change(function () {
        let townName = $(this).val();
        console.log(townName)
        // let title = $('option:selected', this).text();
        // displaySeasonsSelection(id);
        // $(this).attr("disabled", true);
        $.ajax({
            dataType: "json",
            url: 'http://weathers.co/api.php?city='+townName,
            success: function(response) {
                console.log(response['data']['temperature']);
                console.log(response['data']['skytext']);
                console.log(response['data']['humidity']);
                console.log(response['data']['wind']);
                // delete previous town datas
                $('#datas').empty();
                $('#datas').append('<td>'+response['data']['temperature']+'</td>')
                $('#datas').append('<td>'+response['data']['skytext']+'</td>')
                $('#datas').append('<td>'+response['data']['humidity']+'</td>')
                $('#datas').append('<td>'+response['data']['wind']+'</td>')
            },
            failure: function(errMsg) {
                console.log(errMsg);
            }
        });

    });

})