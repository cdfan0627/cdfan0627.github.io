// JavaScript to handle mouseover and mouseout events
var activeMethodPill = null;
var activeScenePill = null;
var activeModePill = null;
var activeVidID = 0;
var select = false;
var activeMethodPillAblation = null;
var activeMethodPillAblation2 = null;
var activeMethodPillAblation3 = null;


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
    activeMethodPillAblation2 = $('.method-pill').filter('.active')[0];
    activeMethodPillAblation3 = $('.method-pill').filter('.active')[0];

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
    var video = document.getElementById("compVideoabl1");
    
    // Remove 'active' class from all pills
    document.querySelectorAll('.method-pill2').forEach(function(pill) {
        pill.classList.remove("active");
    });

    // if (activeMethodPillAblation) {
    //     activeMethodPillAblation.classList.remove("active");
    // }

    // Add 'active' class to the clicked pill
    methodPillAblation.classList.add("active");

    // Update the active pill reference
    activeMethodPillAblation = methodPillAblation;

    var method = methodPillAblation.getAttribute("data-value");
    video.src = "videos/comparison/" + method + "_vs_ours_rgb.mp4";
    video.load();
    video.play();
}

function selectCompVideoAblation2(methodPillAblation2) {
    var video = document.getElementById("compVideoabl2");
    
    // Remove 'active' class from all pills
    document.querySelectorAll('.method-pill3').forEach(function(pill) {
        pill.classList.remove("active");
    });

    // if (activeMethodPillAblation2) {
    //     activeMethodPillAblation2.classList.remove("active");
    // }

    // Add 'active' class to the clicked pill
    methodPillAblation2.classList.add("active");

    // Update the active pill reference
    activeMethodPillAblation2 = methodPillAblation2;

    var method = methodPillAblation2.getAttribute("data-value");
    video.src = "videos/comparison/" + method + "_vs_ours_rgb.mp4";
    video.load();
    video.play();
}

function selectCompVideoAblation3(methodPillAblation3) {
    var video = document.getElementById("compVideoabl3");
    
    // Remove 'active' class from all pills
    document.querySelectorAll('.method-pill4').forEach(function(pill) {
        pill.classList.remove("active");
    });

    // if (activeMethodPillAblation2) {
    //     activeMethodPillAblation2.classList.remove("active");
    // }

    // Add 'active' class to the clicked pill
    methodPillAblation3.classList.add("active");

    // Update the active pill reference
    activeMethodPillAblation3 = methodPillAblation3;

    var method = methodPillAblation3.getAttribute("data-value");
    video.src = "videos/comparison/" + method + "_vs_ours_rgb.mp4";
    video.load();
    video.play();
}