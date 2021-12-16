$(document).ready(function(){
    $("#signinform").validate({
        rules:{
        username:{
            required:true,
            minlength:6,
        },
        pass:{
            required:true,
            minlength:6,

        }
    }
    })
})


$(document).ready(function(){
    $('.showbt').click(function(){
        $('.myimgdivshowhide').toggle();
	});
});

function submitButtonStyle(_this) {
    _this.style.fill = "red";
}
