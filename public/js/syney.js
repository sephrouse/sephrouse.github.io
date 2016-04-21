$(document).ready(function() {
    $("#main_content").hide();
});

$(".mdl-list li").click(function() {
    var $this = $(this);
    contentPage = $this.find('a').attr('target');
    $("#blog_index").hide();
    $("#main_content").load(contentPage);
    $("#main_content").show();
});

function backToBlogIndex() {
    $("#main_content").hide();
    $("#blog_index").show();
}