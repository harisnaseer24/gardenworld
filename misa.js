
// Create a media query to check for screen width
const mediaQuery = window.matchMedia('(max-width: 1000px)');

// Function to run GSAP animations
function runAnimations() {
    if (!mediaQuery.matches) {  // Check if the screen width is more than 1000px
        gsap.to("#section1 #secpic1", {
            opacity: 0.5,
            x: 500,
            y: -200,
            scrollTrigger: {
                trigger: "#section1 #secpic3",
                scroll: "body",
                start: "top 60%",
                end: "top 20%",
                scrub: 2,
                // markers:true
            }
        });

        gsap.to("#section1 #secpic2", {
            opacity: 0.5,
            x: -500,
            y: -200,
            scrollTrigger: {
                trigger: "#section1 #secpic3",
                scroll: "body",
                start: "top 60%",
                end: "top 20%",
                scrub: 2,
                // markers:true
            }
        });

        gsap.to("#section1 #secpic3", {
            opacity: 0.5,
            duration: 2,
            x: 500,
            y: 200,
            scrollTrigger: {
                trigger: "#section1 #secpic3",
                scroll: "body",
                start: "top 60%",
                end: "top 20%",
                scrub: 2,
                // markers:true
            }
        });

        gsap.to("#section1 #secpic6", {
            opacity: 0.5,
            duration: 2,
            x: -500,
            y: 200,
            scrollTrigger: {
                trigger: "#section1 #secpic3",
                scroll: "body",
                start: "top 50%",
                end: "top 20%",
                scrub: 2,
                // markers:true
            }
        });

        gsap.to("#section1 #secpic4", {
            opacity: 0,
            scrollTrigger: {
                trigger: "#section1 #secpic3",
                scroll: "body",
                start: "top 50%",
                end: "top 20%",
                scrub: 2,
                // markers:true
            }
        });

        gsap.to("#section1 h1", {
            opacity: 0,
            duration: 2,
            y: 500,
            scrollTrigger: {
                trigger: "#section1 #secpic3",
                scroll: "body",
                start: "top 50%",
                end: "top 20%",
                scrub: 2,
                // markers:true,
                pin: true
            }
        });
        gsap.from("#section2 #text h1",{
            opacity:0,
            x:-200,
            scrollTrigger:{
                trigger:"#section2 #text h1",
                scroll:"body",
                start:"top 40%",
                end:"top 20%",
                scrub:2,
//                 
            }
        })
        gsap.from("#section2 #text p",{
            opacity:0,
            duration:2,
            scrollTrigger:{
                trigger:"#section2 #text p",
                scroll:"body",
                start:"top 50%",
                end:"top 20%",
                scrub:2,
//                
            }
        })
        
        gsap.from("#section2 #sec2pic2 ",{
            opacity:0,
            delay:2,
            y:200,
            duration:2,
            scrollTrigger:{
                trigger:"#section2 #sec2pic1",
                scroll:"body",
                start:"top 50%",
                end:"top 10%",
                scrub:2,
//         
            }
        })
        
        gsap.from("#section2 #sec2pic1 ",{
            opacity:0,
            x:-200,
            duration:2,
            scrollTrigger:{
                trigger:"#section2 #sec2pic1",
                scroll:"body",
                start:"top 60%",
                end:"top 10%",
                scrub:2,
//             
            }
        })
        
        gsap.from("#section2 #head h1 ",{
            opacity:0,
            y:-100,
            duration:2,
            scrollTrigger:{
                trigger:"#section2 #head h1",
                scroll:"body",
                start:"top 50%",
                end:"top 10%",
                scrub:2,
//                
            }
        })
        
        gsap.from("#section2 #btun  ",{
            opacity:0,
            y:100,
            duration:2,
            scrollTrigger:{
                trigger:"#section2 #btun",
                scroll:"body",
                start:"top 90%",
                end:"top 70%",
                scrub:2,
                
                
            }
        })
        
        gsap.from("#section3 #text2 h1",{
            opacity:0,
            x:-200,
            scrollTrigger:{
                trigger:"#section3 #text2 h1",
                scroll:"body",
                start:"top 40%",
                end:"top 20%",
                scrub:2,
//                
            }
        })
        gsap.from("#section3 #text2 p",{
            opacity:0,
            duration:2,
            scrollTrigger:{
                trigger:"#section3 #text2 p",
                scroll:"body",
                start:"top 50%",
                end:"top 20%",
                scrub:2,
                
            }
        })
        
        gsap.from("#section3 #sec3pic2 ",{
            opacity:0,
            delay:2,
            y:200,
            duration:2,
            scrollTrigger:{
                trigger:"#section3 #sec3pic1",
                scroll:"body",
                start:"top 50%",
                end:"top 10%",
                scrub:2,
//                
            }
        })
        
        gsap.from("#section3 #sec3pic1 ",{
            opacity:0,
            x:-200,
            duration:2,
            scrollTrigger:{
                trigger:"#section3 #sec3pic1",
                scroll:"body",
                start:"top 60%",
                end:"top 10%",
                scrub:2,
//               
            }
        })
        
        gsap.from("#section3 #head1 h1 ",{
            opacity:0,
            y:-100,
            duration:2,
            scrollTrigger:{
                trigger:"#section3 #head1 h1",
                scroll:"body",
                start:"top 50%",
                end:"top 10%",
                scrub:2,
//               
            }
        })
        
        gsap.from("#section3 #btun1  ",{
            opacity:0,
            y:100,
            duration:2,
            scrollTrigger:{
                trigger:"#section3 #btun1",
                scroll:"body",
                start:"top 90%",
                end:"top 70%",
                scrub:2,
                
            
            }
        })
        
        gsap.from("#section4 #text3 h1",{
            opacity:0,
            x:-200,
            scrollTrigger:{
                trigger:"#section4 #text3 h1",
                scroll:"body",
                start:"top 40%",
                end:"top 20%",
                scrub:2,
//               ,
            }
        })
        gsap.from("#section4 #text3 p",{
            opacity:0,
            duration:2,
            scrollTrigger:{
                trigger:"#section4 #text3 p",
                scroll:"body",
                start:"top 50%",
                end:"top 20%",
                scrub:2,
//                 //  markers:true,
            }
        })
        
        gsap.from("#section4 #sec4pic2 ",{
            opacity:0,
            delay:2,
            y:200,
            duration:2,
            scrollTrigger:{
                trigger:"#section4 #sec4pic1",
                scroll:"body",
                start:"top 50%",
                end:"top 10%",
                scrub:2,
//                 // markers:true,
            }
        })
        
        gsap.from("#section4 #sec4pic1 ",{
            opacity:0,
            x:-200,
            duration:2,
            scrollTrigger:{
                trigger:"#section4 #sec4pic1",
                scroll:"body",
                start:"top 60%",
                end:"top 10%",
                scrub:2,
//                 // markers:true,
            }
        })
        
        gsap.from("#section4 #head2 h1 ",{
            opacity:0,
            y:-100,
            duration:2,
            scrollTrigger:{
                trigger:"#section4 #head2 h1",
                scroll:"body",
                start:"top 50%",
                end:"top 10%",
                scrub:2,
//                 // markers:true,
            }
        })
        
        gsap.from("#section4 #btun2  ",{
            opacity:0,
            y:100,
            duration:2,
            scrollTrigger:{
                trigger:"#section4 #btun2",
                scroll:"body",
                start:"top 90%",
                end:"top 70%",
                scrub:2,
                
//                 // markers:true,
            }
        })
        gsap.to("#page5 h1",{
            transform:"translateX(-200%)",
            scrollTrigger:{
                trigger:"#page5",
                scroller:"body",
                start:"top 0%",
                end:"top -200%",
                marker:true,
                scrub:2,
                pin:true
            }
        })
        
        
        gsap.from("#section4 #text3 h1",{
            opacity:0,
            x:-200,
            scrollTrigger:{
                trigger:"#section4 #text3 h1",
                scroll:"body",
                start:"top 40%",
                end:"top 20%",
                scrub:2,
//                 // markers:true,
            }
        })
        gsap.from("#section4 #text3 p",{
            opacity:0,
            duration:2,
            scrollTrigger:{
                trigger:"#section4 #text3 h1",
                scroll:"body",
                start:"top 50%",
                end:"top 10%",
                scrub:2,
//                 // markers:true,
            }
        })
        
        gsap.from("#section5 #sec5pic2 ",{
            opacity:0,
            duration:2,
            scrollTrigger:{
                trigger:"#section5 #sec5pic2",
                scroll:"body",
                start:"top 60%",
                end:"top 10%",
                scrub:2,
//                 // markers:true,
            }
        })

        gsap.from("#section5 #sec5pic1 ",{
            opacity:0,
            duration:2,
            scrollTrigger:{
                trigger:"#section5 #sec5pic1",
                scroll:"body",
                start:"top 60%",
                end:"top 10%",
                scrub:2,
//                 // markers:true,
            }
        })
        
        gsap.from("#section5 #head3 h1 ",{
            opacity:0,
            y:-100,
            duration:2,
            scrollTrigger:{
                trigger:"#section5 #head3 h1",
                scroll:"body",
                start:"top 50%",
                end:"top 10%",
                scrub:2,
//                 // markers:true,
            }
        })
        
        gsap.from("#section5 #btun3 ",{
            opacity:0,
            y:100,
            duration:2,
            scrollTrigger:{
                trigger:"#section5 #btun3",
                scroll:"body",
                start:"top 90%",
                end:"top 70%",
                scrub:2
                

            }
        });    
        //      scrollTrigger:{
        //         trigger:"#section4 #text3 p",
        //         scroll:"body",
        //         start:"top 50%",
        //         end:"top 20%",
//         //         // scrub:2,
//         //         //  markers:true,
//         //     }
//         // })
        
//         // gsap.from("#section5 #sec5pic1 ",{
//         //     opacity:0,
//         //     delay:2,
//         //     duration:2,
//         //     scrollTrigger:{
//         //         trigger:"#section5 #sec5pic1",
//         //         scroll:"body",
        



    }
}

// Initialize animations based on screen size
runAnimations();

// Listen for screen resize and re-run the animations
mediaQuery.addListener(runAnimations);


function scrollTopAnimated() { 
    $("html, body").animate({ scrollTop: "0" }); 
} 
// //
        


// // 
//         gsap.to("#section1 #secpic1",{
//             opacity:0.5,
            
//             x:500,
//             y:-200,
//             scrollTrigger:{
//                 trigger:"#section1 #secpic3",
//                 scroll:"body",
//                 start:"top 60%",
//                 end:"top 20%",
//                 scrub:2,
//                 //  markers:true
//             }
//         })
        
//         gsap.to("#section1 #secpic2",{
//             opacity:0.5,
        
//             x:-500,
//             y:-200,
//             scrollTrigger:{
//                 trigger:"#section1 #secpic3",
//                 scroll:"body",
//                 start:"top 60%",
//                 end:"top 20%",
//                 scrub:2,
//                 //  markers:true
//             }
//         })
        
//         gsap.to("#section1 #secpic3",{
//             opacity:0.5,
//             duration:2,
//             x:500,
//             y:200,
//             scrollTrigger:{
//                 trigger:"#section1 #secpic3",
//                 scroll:"body",
//                 start:"top 60%",
//                 end:"top 20%",
//                 scrub:2,
//                 //  markers:true
//             }
//         })
        
//         gsap.to("#section1 #secpic6",{
//             opacity:0.5,
//             duration:2,
//             x:-500,
//             y:200,
//             scrollTrigger:{
//                 trigger:"#section1 #secpic3",
//                 scroll:"body",
//                 start:"top 50%",
//                 end:"top 20%",
//                 scrub:2,
//                 //  markers:true
//             }
//         })
        
//         gsap.to("#section1 #secpic4",{
//             opacity:0,
//             scrollTrigger:{
//                 trigger:"#section1 #secpic3",
//                 scroll:"body",
//                 start:"top 50%",
//                 end:"top 20%",
//                 scrub:2,
//                 //  markers:true
//             }
//         })
        
//         gsap.to("#section1 h1",{
//             opacity:0,
//             duration:2,
//             y:500,
//             scrollTrigger:{
//                 trigger:"#section1 #secpic3",
//                 scroll:"body",
//                 start:"top 50%",
//                 end:"top 20%",
//                 scrub:2,
//                 //  markers:true,
//                 pin:true
//             }
//         })
        
        