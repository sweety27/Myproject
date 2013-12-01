$(document).ready(function()
{
$('.fadeto').css('opacity','1');
$('.fadeto').mouseover(function()
{
$(this).fadeTo(100,0.6,function()
{
$('.fadeto').not(this).fadeTo(100,1)
});

});

$('.fadeto').mouseout(function()
{
$('.fadeto').fadeTo(100,1);
}
);
});