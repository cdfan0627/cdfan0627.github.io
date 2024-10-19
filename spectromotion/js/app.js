// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var activeVidID = 0;
var select = false;
var activeMethodPillAblation = null;


$(document).ready(function () {
    var editor = CodeMirror.fromTextArea(document.getElementById("bibtex"), {
        lineNumbers: false,
        lineWrapping: true,
        readOnly: true
    });
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    activeMethodPill = $('.method-pill').filter('.active')[0];
    activeModePill = $('.mode-pill').filter('.active')[0];
    activeScenePill = $('.scene-pill').filter('.active')[0];
    activeMethodPillAblation = $('.method-pill').filter('.active')[0];

    resizeAndPlay($('#sparsity')[0]);
});

function selectCompVideo(methodPill, scenePill, n_views, modePill) {
    // Your existing logic for video selection
    // var video = document.getElementById("compVideo");
    select = true;
    var videoSwitch = document.getElementById("compVideoSwitch");
    var viewNum = document.getElementById("compVideoValue");

    if (activeMethodPill) {
        activeMethodPill.classList.remove("active");
    }
    if (activeScenePill) {
        activeScenePill.classList.remove("active");
    }
    if (modePill) {
        activeModePill.classList.remove("active");
        modePill.classList.add("active");
        activeModePill = modePill;
    }
    activeMethodPill = methodPill;
    activeScenePill = scenePill;
    methodPill.classList.add("active");
    scenePill.classList.add("active");
    method = methodPill.getAttribute("data-value");
    pill = scenePill.getAttribute("data-value");
    mode = activeModePill.getAttribute("data-value");

    // if (videoSwitch.checked) {
    //     mode = 'depth'
    // } else {
    //     mode = 'rgb'
    // }

    // swap video to avoid flickering
    activeVidID = 1 - activeVidID;
    var video_active = document.getElementById("compVideo" + activeVidID);
    var video_hidden = document.getElementById("compVideo" + (1 - activeVidID));
    video_active.src = "videos/comparison/" + pill + "_" + method + "_vs_ours_" + mode + ".mp4";
    video_active.load();

}

function selectCompVideoAblation(methodPillAblation) {
    var video = document.getElementById("compVideo");
    
    // Remove 'active' class from all pills
    document.querySelectorAll('.method-pill').forEach(function(pill) {
        pill.classList.remove("active");
    });

    // Add 'active' class to the clicked pill
    methodPillAblation.classList.add("active");

    // Update the active pill reference
    activeMethodPillAblation = methodPillAblation;

    var method = methodPillAblation.getAttribute("data-value");
    video.src = "videos/comparison/" + method + "_vs_ours_rgb.mp4";
    video.load();
    video.play();
}