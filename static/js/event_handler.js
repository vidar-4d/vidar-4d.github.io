// document.addEventListener('DOMContentLoaded', domReady);

        // function domReady() {
        //     new Dics({
        //         container: document.querySelectorAll('.b-dics')[0],
        //         hideTexts: false,
        //         textPosition: "bottom"

        //     });
        //     new Dics({
        //         container: document.querySelectorAll('.b-dics')[1],
        //         hideTexts: false,
        //         textPosition: "bottom"

        //     });
        // }

        // function largeSceneEvent(idx) {
        //     let dics = document.querySelectorAll('.b-dics')[0]
        //     let sections = dics.getElementsByClassName('b-dics__section')
        //     let imagesLength = 3
        //     for (let i = 0; i < imagesLength; i++) {
        //         let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
        //         switch (idx) {
        //             case 0:
        //                 image.src = 'assets/img/nvidia/';
        //                 break;
        //             case 1:
        //                 image.src = 'assets/img/jhu/';
        //                 break;
        //             case 2:
        //                 image.src = 'assets/img/Barn/';
        //                 break;
        //             case 3:
        //                 image.src = 'assets/img/Caterpillar/';
        //                 break;
        //             case 4:
        //                 image.src = 'assets/img/Courthouse/';
        //                 break;
        //             case 5:
        //                 image.src = 'assets/img/Ignatius/';
        //                 break;
        //             case 6:
        //                 image.src = 'assets/img/Meetingroom/';
        //                 break;
        //             case 7:
        //                 image.src = 'assets/img/Truck/';
        //                 break;
        //         }
        //         switch (i) {
        //             case 0:
        //                 image.src = image.src + '/rgb.png';
        //                 break;
        //             case 1:
        //                 image.src = image.src + '/mesh.png';
        //                 break;
        //             case 2:
        //                 image.src = image.src + '/normal.png';
        //                 break;
        //         }
        //     }

        //     scene_list = document.getElementById("large-scale-recon-1").children;
        //     for (let i = 0; i < scene_list.length; i++) {
        //         if (idx == i) {
        //             scene_list[i].children[0].className = "nav-link active"
        //         }
        //         else {
        //             scene_list[i].children[0].className = "nav-link"
        //         }
        //     }
        //     scene_list = document.getElementById("large-scale-recon-2").children;
        //     for (let i = 0; i < scene_list.length; i++) {
        //         if (idx == i+2) {
        //             scene_list[i].children[0].className = "nav-link active"
        //         }
        //         else {
        //             scene_list[i].children[0].className = "nav-link"
        //         }
        //     }
        // }

        // function objectSceneEvent(idx) {
        //     let dics = document.querySelectorAll('.b-dics')[0]
        //     let sections = dics.getElementsByClassName('b-dics__section')
        //     let imagesLength = 5
        //     for (let i = 0; i < imagesLength; i++) {
        //         let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
        //         switch (idx) {
        //             case 0:
        //                 image.src = 'resources/comp/cook_spinach';
        //                 break;
        //             case 1:
        //                 image.src = 'resources/comp/cut_roasted_beef';
        //                 break;
        //             case 2:
        //                 image.src = 'resources/comp/flame_salmon';
        //                 break;
        //             case 3:
        //                 image.src = 'resources/comp/theater';
        //                 break;
        //             case 4:
        //                 image.src = 'resources/comp/train';
        //                 break;
        //             case 5:
        //                 image.src = 'resources/comp/painter';
        //                 break;
        //         }
        //         switch (i) {
        //             case 0:
        //                 image.src = image.src + '_GT.webp';
        //                 break;
        //             case 1:
        //                 image.src = image.src + '_4DGaussians.webp';
        //                 break;
        //             case 2:
        //                 image.src = image.src + '_4DGS.webp';
        //                 break;
        //             case 3:
        //                 image.src = image.src + '_STG.webp';
        //                 break;
        //             case 4:
        //                 image.src = image.src + '_ours.webp';
        //                 break;

        //         }
        //     }

        //     let scene_list = document.getElementById("object-scale-recon").children;
        //     for (let i = 0; i < scene_list.length; i++) {
        //         if (idx == i) {
        //             scene_list[i].children[0].className = "nav-link active"
        //         }
        //         else {
        //             scene_list[i].children[0].className = "nav-link"
        //         }
        //     }
        // }

        // function objectSceneEventDense(scene) {
        //     let vidContainer = document.getElementById('xyaliasDense')
    
        //     let cam_active = "DenseTest_01_01"
        //     // Find active camera
        //     let cam_list = document.getElementById("dense-cams").children;
        //     for (let i = 0; i < cam_list.length; i++) {
        //         if (cam_list[i].children[0].className == "nav-link active") {
        //             cam_active = cam_list[i].children[0].id.replace('dense-', '')
        //         }
        //     }
        //     vidContainer.src = 'assets/videos/dense/' + cam_active + '/' + scene + ".webm";

        //     let scene_list = document.getElementById("dense-scenes").children;
        //     for (let i = 0; i < scene_list.length; i++) {
        //         if (scene_list[i].children[0].id == ('dense-' + scene)) {
        //             scene_list[i].children[0].className = "nav-link active"
        //         }
        //         else {
        //             scene_list[i].children[0].className = "nav-link"
        //         }
        //     }
        // }

        // function objectSceneEventDenseCam(cam) {
        //     let vidContainer = document.getElementById('xyaliasDense')
            
        //     let scene_active = "010_0050"
        //     // Find active scene
        //     let scene_list = document.getElementById("dense-scenes").children;
        //     for (let i = 0; i < scene_list.length; i++) {
        //         if (scene_list[i].children[0].className == "nav-link active") {
        //             scene_active = scene_list[i].children[0].id.replace('dense-', '')
        //         }
        //     }

        //     vidContainer.src = 'assets/videos/dense/' + cam + '/' + scene_active + ".webm";

        //     let cam_list = document.getElementById("dense-cams").children;
        //     for (let i = 0; i < cam_list.length; i++) {
        //         if (cam_list[i].children[0].id == ('dense-' + cam)) {
        //             cam_list[i].children[0].className = "nav-link active"
        //         }
        //         else {
        //             cam_list[i].children[0].className = "nav-link"
        //         }
        //     }
        // }

        // function objectSceneEventSparse(scene) {
        //     let vidContainer = document.getElementById('xyaliasSparse')
    
        //     let views_active = "3"
        //     // Find active camera
        //     let views_list = document.getElementById("sparse-views").children;
        //     for (let i = 0; i < views_list.length; i++) {
        //         if (views_list[i].children[0].className == "nav-link active") {
        //             views_active = views_list[i].children[0].id.replace('sparse-', '')
        //         }
        //     }

        //     let cam_active = "SparseTest00"
        //     // Find active camera
        //     let cam_list = document.getElementById("sparse-cams").children;
        //     for (let i = 0; i < cam_list.length; i++) {
        //         if (cam_list[i].children[0].className == "nav-link active") {
        //             cam_active = cam_list[i].children[0].id.replace('sparse-', '')
        //         }
        //     }

        //     vidContainer.src = 'assets/videos/sparse/' + views_active + '/' + cam_active + '/' + scene + ".webm";

        //     let scene_list = document.getElementById("sparse-scenes").children;
        //     for (let i = 0; i < scene_list.length; i++) {
        //         if (scene_list[i].children[0].id == ('sparse-' + scene)) {
        //             scene_list[i].children[0].className = "nav-link active"
        //         }
        //         else {
        //             scene_list[i].children[0].className = "nav-link"
        //         }
        //     }
        // }

        // function objectSceneEventSparseCam(cam) {
        //     let vidContainer = document.getElementById('xyaliasSparse')

        //     let views_active = "3"
        //     // Find active camera
        //     let views_list = document.getElementById("sparse-views").children;
        //     for (let i = 0; i < views_list.length; i++) {
        //         if (views_list[i].children[0].className == "nav-link active") {
        //             views_active = views_list[i].children[0].id.replace('sparse-', '')
        //         }
        //     }
            
        //     let scene_active = "010_0050"
        //     // Find active scene
        //     let scene_list = document.getElementById("sparse-scenes").children;
        //     for (let i = 0; i < scene_list.length; i++) {
        //         if (scene_list[i].children[0].className == "nav-link active") {
        //             scene_active = scene_list[i].children[0].id.replace('sparse-', '')
        //         }
        //     }

        //     vidContainer.src = 'assets/videos/sparse/' + views_active + '/' + cam + '/' + scene_active + ".webm";

        //     let cam_list = document.getElementById("sparse-cams").children;
        //     for (let i = 0; i < cam_list.length; i++) {
        //         if (cam_list[i].children[0].id == ('sparse-' + cam)) {
        //             cam_list[i].children[0].className = "nav-link active"
        //         }
        //         else {
        //             cam_list[i].children[0].className = "nav-link"
        //         }
        //     }
        // }

        // function objectSceneEventSparseViews(views) {
        //     let vidContainer = document.getElementById('xyaliasSparse')

        //     let cam_active = "SparseTest00"
        //     // Find active camera
        //     let cam_list = document.getElementById("sparse-cams").children;
        //     for (let i = 0; i < cam_list.length; i++) {
        //         if (cam_list[i].children[0].className == "nav-link active") {
        //             cam_active = cam_list[i].children[0].id.replace('sparse-', '')
        //         }
        //     }
            
        //     let scene_active = "010_0050"
        //     // Find active scene
        //     let scene_list = document.getElementById("sparse-scenes").children;
        //     for (let i = 0; i < scene_list.length; i++) {
        //         if (scene_list[i].children[0].className == "nav-link active") {
        //             scene_active = scene_list[i].children[0].id.replace('sparse-', '')
        //         }
        //     }

        //     vidContainer.src = 'assets/videos/sparse/' + views + '/' + cam_active + '/' + scene_active + ".webm";

        //     let views_list = document.getElementById("sparse-views").children;
        //     for (let i = 0; i < cam_list.length; i++) {
        //         if (views_list[i].children[0].id == ('sparse-' + views)) {
        //             views_list[i].children[0].className = "nav-link active"
        //         }
        //         else {
        //             views_list[i].children[0].className = "nav-link"
        //         }
        //     }
        // }

        
        // function objectSceneEventMono(scene) {
        //     let vidContainer = document.getElementById('xyaliasMono')
    
        //     let path_active = "MonoSplineFast"
        //     // Find active camera
        //     let paths_list = document.getElementById("mono-paths").children;
        //     for (let i = 0; i < paths_list.length; i++) {
        //         if (paths_list[i].children[0].className == "nav-link active") {
        //             path_active = paths_list[i].children[0].id.replace('mono-', '')
        //         }
        //     }

        //     let cam_active = "Left1x"
        //     // Find active camera
        //     let cam_list = document.getElementById("mono-cams").children;
        //     for (let i = 0; i < cam_list.length; i++) {
        //         if (cam_list[i].children[0].className == "nav-link active") {
        //             cam_active = cam_list[i].children[0].id.replace('mono-', '')
        //         }
        //     }

        //     vidContainer.src = 'assets/videos/mono/' + path_active + '/' + cam_active + '/' + scene + ".webm";

        //     let scene_list = document.getElementById("mono-scenes").children;
        //     for (let i = 0; i < scene_list.length; i++) {
        //         if (scene_list[i].children[0].id == ('mono-' + scene)) {
        //             scene_list[i].children[0].className = "nav-link active"
        //         }
        //         else {
        //             scene_list[i].children[0].className = "nav-link"
        //         }
        //     }
        // }

        // function objectSceneEventMonoCam(cam) {
        //     let vidContainer = document.getElementById('xyaliasMono')

        //     let path_active = "MonoSplineFast"
        //     // Find active camera
        //     let paths_list = document.getElementById("mono-paths").children;
        //     for (let i = 0; i < paths_list.length; i++) {
        //         if (paths_list[i].children[0].className == "nav-link active") {
        //             path_active = paths_list[i].children[0].id.replace('mono-', '')
        //         }
        //     }
            
        //     let scene_active = "010_0050"
        //     // Find active scene
        //     let scene_list = document.getElementById("mono-scenes").children;
        //     for (let i = 0; i < scene_list.length; i++) {
        //         if (scene_list[i].children[0].className == "nav-link active") {
        //             scene_active = scene_list[i].children[0].id.replace('mono-', '')
        //         }
        //     }

        //     vidContainer.src = 'assets/videos/mono/' + path_active + '/' + cam + '/' + scene_active + ".webm";

        //     let cam_list = document.getElementById("mono-cams").children;
        //     for (let i = 0; i < cam_list.length; i++) {
        //         if (cam_list[i].children[0].id == ('mono-' + cam)) {
        //             cam_list[i].children[0].className = "nav-link active"
        //         }
        //         else {
        //             cam_list[i].children[0].className = "nav-link"
        //         }
        //     }
        // }

        // function objectSceneEventMonoPaths(path) {
        //     let vidContainer = document.getElementById('xyaliasMono')

        //     let cam_active = "Left1x"
        //     // Find active camera
        //     let cam_list = document.getElementById("mono-cams").children;
        //     for (let i = 0; i < cam_list.length; i++) {
        //         if (cam_list[i].children[0].className == "nav-link active") {
        //             cam_active = cam_list[i].children[0].id.replace('mono-', '')
        //         }
        //     }
            
        //     let scene_active = "010_0050"
        //     // Find active scene
        //     let scene_list = document.getElementById("mono-scenes").children;
        //     for (let i = 0; i < scene_list.length; i++) {
        //         if (scene_list[i].children[0].className == "nav-link active") {
        //             scene_active = scene_list[i].children[0].id.replace('mono-', '')
        //         }
        //     }

        //     vidContainer.src = 'assets/videos/mono/' + path + '/' + cam_active + '/' + scene_active + ".webm";

        //     let paths_list = document.getElementById("mono-paths").children;
        //     for (let i = 0; i < cam_list.length; i++) {
        //         if (paths_list[i].children[0].id == ('mono-' + path)) {
        //             paths_list[i].children[0].className = "nav-link active"
        //         }
        //         else {
        //             paths_list[i].children[0].className = "nav-link"
        //         }
        //     }
        // }

        // function separationevent(idx) {
        //     let dics = document.querySelectorAll('.has-text-centered')[1]
        //     let sections = dics.getElementsByClassName('b-dics__section')
        //     let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
        //     switch (idx) {
        //         case 0:
        //             image.src = 'resources/360_stmt_ablation/bicycle_0';
        //             break;
        //         case 1:
        //             image.src = 'resources/bicycle_3dgs_vs_ours.mp4';
        //             break;
        //         case 2:
        //             image.src = 'resources/360_stmt_ablation/bicycle_5';
        //             break;
        //         case 3:
        //             image.src = 'resources/360_stmt_ablation/garden_0';
        //             break; 
        //         case 4:
        //             image.src = 'resources/360_stmt_ablation/garden_1';
        //             break;
        //         case 5:
        //             image.src = 'resources/360_stmt_ablation/treehill_9';
        //             break; 
        //     }

        //     let scene_list = document.getElementById("separation-filter").children;
        //     for (let i = 0; i < scene_list.length; i++) {
        //         if (idx == i) {
        //             scene_list[i].children[0].className = "nav-link active"
        //         }
        //         else {
        //             scene_list[i].children[0].className = "nav-link"
        //         }
        //     }
        // }

        // function ablation3DEvent(idx) {
        //     let dics = document.querySelectorAll('.b-dics')[1]
        //     let sections = dics.getElementsByClassName('b-dics__section')
        //     let imagesLength = 4
        //     for (let i = 0; i < imagesLength; i++) {
        //         let image = sections[i].getElementsByClassName('b-dics__image-container')[0].getElementsByClassName('b-dics__image')[0]
        //         switch (idx) {
        //             case 0:
        //                 image.src = 'resources/360_stmt_ablation/bicycle_0';
        //                 break;
        //             case 1:
        //                 image.src = 'resources/360_stmt_ablation/bicycle_3';
        //                 break;
        //             case 2:
        //                 image.src = 'resources/360_stmt_ablation/bicycle_5';
        //                 break;
        //             case 3:
        //                 image.src = 'resources/360_stmt_ablation/garden_0';
        //                 break; 
        //             case 4:
        //                 image.src = 'resources/360_stmt_ablation/garden_1';
        //                 break;
        //             case 5:
        //                 image.src = 'resources/360_stmt_ablation/treehill_9';
        //                 break; 
        //         }
        //         switch (i) {
        //             case 0:
        //                 image.src = image.src + '_no3d.jpg';
        //                 break;
        //             case 1:
        //                 image.src = image.src + '_ours.jpg';
        //                 break;
        //             case 2:
        //                 image.src = image.src + '_upgt.jpg';
        //                 break;
        //             case 3:
        //                 image.src = image.src + '_gt.jpg';
        //                 break;
        //         }
        //     }

        //     let scene_list = document.getElementById("ablation-3d-filter").children;
        //     for (let i = 0; i < scene_list.length; i++) {
        //         if (idx == i) {
        //             scene_list[i].children[0].className = "nav-link active"
        //         }
        //         else {
        //             scene_list[i].children[0].className = "nav-link"
        //         }
        //     }
        // }


        function methodChanger(buttonElement, elementName, id) {
            let vidContainer = document.getElementById(elementName);
            vidContainer.dataset.vidselection=id;

            let methodText = document.getElementById(elementName + "-caption");
            // console.log(buttonElement.innerText)
            methodText.innerText = buttonElement.innerText


            let methodList = buttonElement.parentElement.parentElement.children;
            for (let i = 0; i < methodList.length; i++) {
                if (i == id) {
                    methodList[i].children[0].className = "nav-link active"
                }
                else {
                    methodList[i].children[0].className = "nav-link"
                }
            }
            // console.log(elementName + "-caption")
        }

        function maskChanger(buttonElement, elementName, mode) {
            let vidContainer = document.getElementById(elementName);
            let srcStr = vidContainer.attributes.getNamedItem('src').value;
            
            let suffix = mode + ".webm"
            
            if (srcStr.includes("base.webm")){
                newPath = srcStr.replace("base.webm", suffix)
            }
            else if (srcStr.includes("covis.webm")){
                newPath = srcStr.replace("covis.webm", suffix)
            }
            else {
                newPath = srcStr.replace("dyn.webm", suffix)
            }
            
            // console.log(newPath)
            vidContainer.src = newPath;
            
            let methodList = buttonElement.parentElement.parentElement.children;
            for (let i = 0; i < methodList.length; i++) {
                if (methodList[i].children[0].id.includes(mode)) {
                    methodList[i].children[0].className = "nav-link active"
                }
                else {
                    methodList[i].children[0].className = "nav-link"
                }
            }
        }

        function sceneChanger(buttonElement, elementName, sceneName) {
            let vidContainer = document.getElementById(elementName);
            // vidContainer.dataset.vidselection=id;

            let strSplit = vidContainer.attributes.getNamedItem('src').value.split("/");
            // console.log(vidContainer);
            // console.log(vidContainer.attributes.getNamedItem('src').value);
            // console.log(strSplit);
            
            strSplit[(strSplit.length - 2)] = sceneName;
            
            // console.log(strSplit);
            let newPath = strSplit.join("/");
            vidContainer.src = newPath;

            let methodList = buttonElement.parentElement.parentElement.children;
            for (let i = 0; i < methodList.length; i++) {
                let methodId = methodList[i].children[0].id
                if (methodId.includes(sceneName)) {
                    methodList[i].children[0].className = "nav-link active"
                }
                else {
                    methodList[i].children[0].className = "nav-link"
                }
            }
        }

        function videoPlay(elementName) {
            let vidItem = document.getElementById(elementName);
            console.log(vidItem.paused)
            if (vidItem.paused){
                console.log("paused")
                vidItem.play();
            }
        }

        function videoPause(elementName) {
            let vidItem = document.getElementById(elementName);
            console.log(vidItem.paused)
            if (!vidItem.paused){
                console.log("playing")
                vidItem.pause();
            }
        }





function checkScroll() {
    var videoMerges = document.getElementsByClassName("videoMerge");
    var fraction = 0.8; // Play when 80% of the player is visible.

    // function isInViewport(element) {
    //     var rect = element.getBoundingClientRect();
    //     var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    //     // Calculate the percentage of the video that is in the viewport
    //     var videoHeight = rect.height;
    //     if (videoHeight === 0) {
    //         return true;
    //     }
    //     var visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
    //     var visiblePercentage = (visibleHeight / videoHeight);

    //     return visiblePercentage >= fraction;  // Check if at least 80% of the video is visible
    // }
    
    for(var i = 0; i < videoMerges.length; i++) {

        var videoMerge = videoMerges[i];
        var vidElement = document.getElementById(videoMerge.id.replace("Merge", ""))
        // console.log(vidElement.id)
        // console.log(vidElement.readyState)

        var rect = videoMerge.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Calculate the percentage of the video that is in the viewport
        var videoHeight = rect.height;
        // console.log(videoHeight)
        if (videoHeight == 0 || vidElement.readyState < 3) {
            // console.log("Skip");
            continue;
            // vidElement.play();
        }
        else{
            var visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
            var visiblePercentage = (visibleHeight / videoHeight);
            
            if (visiblePercentage > fraction) {
                // console.log("Play");
                vidElement.play();
            } else {
                // console.log("NO");
                vidElement.pause();
            }
        }

    }

}

// window.addEventListener('scroll', checkScroll, false);
// window.addEventListener('resize', checkScroll, false);