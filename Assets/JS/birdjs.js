$(document).ready(function(){
///////////////////////////////////////////////////////////////////////////
/////SPLASH PAGE/////

    $(".hvr-grow").hover(function(){
        $(".static").hide();
        },
        function () {
            $(".static").show();
        })


    $(".hvr-bounce-to-top   ").hover(function(){
        $(".static").hide();
        },
        function () {
            $(".static").show();
        })
///////////////////////////////////////////////////////////////////////////

////////ABOUT PAGE////////
//
    //abouthover//
   $("#about").hover(function(){
        console.log('hovering over about');

        $("#bubbleText").html("<h2>About my Mom</h2>");
        },
        function(){
            $("#bubbleText").html(defaultDesc);
        });

        //aboutpage//
        $("#about").click(function(){
        console.log("aboutclick");

        //textchange//
        var about = "<h4><u>ABOUT ME</u>\
        </h4>Hi! My name is Nur, and I am a student in the Masters of Human-Computer Interaction program at Carnegie Mellon. <p>This was a project I chose for my Programming Usable Interfaces class. I love birds, I love art, and this project was a chance to combine those with some first-time front-end programming.</p><p>I hope you enjoyed learning about some birds in Pittsburgh/larger Pennsylvania. If you want to see more of my work, check out the portfolio link. If you want to see more of my art, check out my artstation <a href='https://artstation.com/nurskies' target='_blank'>here.</a></p> <h4><font color='#004e4e'><u>TOOLS</h4></u></font> <i>Art & animation:</i> Adobe Photoshop, CLIP STUDIO, traditional materials.</p><p> <i>Web development:</i> Javascript / JQuery, HTML, CSS </p>";
        $("#text").html(about);

        //imgchange//
        var about = "assets/img/aboutsketch.jpg";
        $("#image").attr("src", about);
});

///////SOURCES PAGE////////
    $("#source").hover(function(){
        console.log('hovering over source');
        $("#bubbleText").html("<h2>References / Sources Used</h2>");
        },
        function(){
            $("#bubbleText").html(defaultDesc);
        });

        //aboutpage//
        $("#source").click(function(){
        console.log("aboutclick");
        var sources="<h3><u>SOURCES</u>\
        \
        <li><a href='http://popularpittsburgh.com/ten-birds-in-pittsburgh/' target='_blank'>popularpittsburgh.com</a></li>\
         <li><a href='https://www.allaboutbirds.org' target='_blank'>\
         allaboutbirds.org</a></li>\
         <li><a href='https://backyardchirper.com' target='_blank'>backyardchirper.com</a></li>\
         <li><a href='https://birdsandblooms.com' target='_blank'>birdsandblooms.com</a></li>\
         <li><a href='https://www.softschools.com/facts/animals/sparrow_facts/322/' target='_blank'>softschools.com</li></a>\
         <li><a href='http://www.findsounds.com' target='_blank'>findsounds.com</a></li>\
         <li><a href='https://en.wikipedia.org/wiki/Crop_milk' target='_blank'>wiki page on Crop Milk (delicious)</a></li>\
         <li><a href='https://ianlunn.github.io/Hover/' target='_blank'>hover.css</li></a>\
         <li><a href='https://w3schools.org' target='_blank'>w3schools.org</li></a>"
        $("#text").html(sources);
        var sputz = "assets/img/sputzcomputer.png";
        $("#image").attr("src", sputz);
    });
///////////////////////////////////////////////////////////////////////////
/////
/////MAIN PAGE/////
/////
///////////////////////////////////////////////////////////////////////////
    var defaultDesc = "Hey! I'm Sputzie! Check out my friends below to learn more about birds in Pittsburgh!"


//animation - classes must have . in front//
    $(".dialoguebird").hover(function(){
        $(".static").hide()
    },
    function(){
        $(".static").show() //when it stops hovering//
    })

//cardinalinfo
    $("#cardinal").hover(function(){
        console.log("cardinalhey");
        $("#bubbleText").html("<h2>Northern Cardinal</h2>");
    },
    function(){
        $("#bubbleText").html(defaultDesc);
    });


    $("#cardinal").click(function(){
        console.log("cardinal");

        //textchange//
        var cardinal = "<h1>Northern Cardinal</h1>\
        \
          <audio controls><source src='assets/audio/cardinalsong.wav' type='audio/wav'> Your browser does not support the audio element.</audio>\
          <p></p>\
          Cardinals are frequent visitors of backyard feeders in Pittsburgh. Male Northern Cardinals are bright <font color='red'>red.</font> Female cardinals are a muted tan color, with an orange beak. Cardinals get their name from the fact that the red color of a male cardinal is similar to the color of a Catholic cardinal's red vestments.\
           <p>Males are generally the songbirds. The males will also spend minutes, even hours attacking their own reflection to defend their breeding territory from intruders. Great job? </p>\
           They also don't migrate--you'll see them around even in winter.<h2>Fun fact:</h2> The oldest Northern Cardinal was a 15 year, 9 month old female from Pennsylvania.";
        $("#text").html(cardinal);

        //imgchange//
        var pic_cardinal = "assets/img/cardinal.png";
        $("#image").attr("src", pic_cardinal);
});

//bluejayinfo
    $("#bluejay").hover(function(){
            console.log("blue");
            $("#bubbleText").html("<h2>Blue Jay</h2>");
       //     $("#bubbleText").css()
        },
        function(){
            $("#bubbleText").html(defaultDesc);
        }
    )
    $("#bluejay").click(function(){
        console.log("blueclick");
        //textchange//
        var bluejay = "<h1>Blue Jay</h1>\
        \
          <audio controls><source src='assets/audio/bluejaysong.mp3' type='audio/mp3'> Your browser does not support the audio element.</audio>\
          \
        <p>Blue Jays' feathers are such a beautiful shade of <font color='blue'>blue</font>, right? <h4>WRONG.</h4> Blue Jay feathers aren't actually blue--they're <font color='brown'>brown</font>. Refracted light on the pigment of their feathers makes them look blue. <p>The Blue Jay's in the same family as the crow, and similar to the crow, they can have a surprising vocal range. In fact, Blue Jays can mimic hawks, and this is thought to be either to trick predators or other species of bird. Blue Jays can be real jerks--they're highly territorial and aggressive, similar to the male cardinal. That said, they tend to also be highly monogamous, a pair staying together often until one mate dies.</p> <h2>Fun Fact:</h2> Watch out, Cardinal! The oldest wild Blue Jay was a whole 2 years older than the oldest Cardinal, clocking in at 17 years and 6 months.</p>";
        $("#text").html(bluejay);

        //imgchange//
        var pic_bluejay = "assets/img/bluejay.png";
        $("#image").attr("src", pic_bluejay);
});

    ///clean up after this//

//chickadeeinfo
    $("#chickadee").hover(function(){
            console.log("chick");
            $("#bubbleText").html("<h2>Black-Capped Chickadee</h2>");
       //     $("#bubbleText").css()
        },
        function(){
            $("#bubbleText").html(defaultDesc);
        });
    $("#chickadee").click(function(){
        console.log("clik3");
        var chickadee = "<h1>Black-Capped Chickadee</h1>\
            \
          <audio controls><source src='assets/audio/chickadeesong.mp3' type='audio/mp3'> Your browser does not support the audio element.</audio>\
          \
          <p></p>\
        You can see where black-capped chickadees get their name. Instead of nests, guys roost in small little holes called cavities, which are much warmer in the winter. <p>Did you know that Chickadees are notorious hoarders? But it's a good thing in this case. They have thousands of hiding spots for seeds and berries and other food items. They have really good memory, and are able to 'swap out' old brain cells for new ones. It's like if you could forget that embarrassing moment last week to make room for that new embarrassing moment this week.</p> Unfortunately, it's getting getting rarer and rarer to see these guys every year in Allegheny County. Most of them are flocking north due to the warming climate. <h2>Fun Fact:</h2> The Chickadee's call sounds just like its <a href='http://naturebits.org/NoAmBirds/mp3NoAmBirds/ChickadeeBlCappedDeedee.mp3' target='_blank'>name</a>, but did you know that there is a meaning to the number of <i>dees?</i> More dees means a potential danger. They also let out a sound that goes <i>fee bee</i>. Cute!"
        $("#text").html(chickadee);

        //imgchange//
        var pic_chickadee = "assets/img/chickadee.png";
        $("#image").attr("src", pic_chickadee);

});

//doveinfo
   $("#dove").hover(function(){
            console.log("chick");
            $("#bubbleText").html("<h2>Mourning Dove</h2>");
       //     $("#bubbleText").css()
        },
        function(){
            $$("#bubbleText").html(defaultDesc);
        });

    $("#dove").click(function(){
        console.log("dovclik4");
        var dove = "<h1>Mourning Dove</h1>\
        \
          <audio controls><source src='assets/audio/dovecoo.wav' type='audio/wav'> Your browser does not support the audio element.</audio>\
          \
        <p></p>Similar to Northern Cardinals, Mourning Doves don't migrate in the winter. Their long, 'mournful' call is actually a call by the male dove to attract a mate, so don't feel so sad when you hear it! <p> Their primary diet is seed, which they collect in what is called a <i>crop</i>, an enlarged part of their esophagus. This is where it gets interesting.</p> <p>Dove parents, similar to other members of the pigeon family, create something called <i>crop milk</i>, a cottage cheese-like secretion created from the crop lining. It's higher in protein and fat than mammal milk... yum? <h2>Fun Fact:</h2>Mourning Doves have long, pointed wings, like falcons. Their flight speed has been clocked at a whopping <b>55 mph!</b>";
        $("#text").html(dove);
        $("#image").attr("src", "assets/img/dove.gif");
});

//robininfo
    $("#heron").hover(function(){
            console.log("heron");
            $("#bubbleText").html("<h2>Great Blue Heron</h2>");
       //     $("#bubbleText").css()
        },
        function(){
            $("#bubbleText").html(defaultDesc);
        });
    $("#heron").click(function(){
        console.log("heronclik5")
        var heron = "<h1>Great Blue Heron</h1>\
                \
          <audio controls><source src='assets/audio/heronsong.mp3' type='audio/mp3'> Your browser does not support the audio element.</audio>\
          \
          <p></p>\
          These Great <font color='blue'>Blue</font> Birds grow up to four feet high, with a six-foot wingspan, and use their snake-like necks and needle-pointed yellow beaks to either grab (if smaller) or impale (if larger) their prey. They often live near saltwater or freshwater. <p>They are complete carnivores, and their diet consists of fish, frogs (and other amphibians), small mammals (such as mice), reptiles, insects, and other birds.</p> <h2>Fun Fact:</h2> Great Blue Herons swallow their prey whole, and have been known to choke to death by trying to swallow fish that are too large for their necks. I guess that wasn't really a <i>fun</i> fact. Their scratchy calls sound like dinosaurs--that's a bit more fun."
        $("#text").html(heron);
        $("#image").attr("src", "assets/img/greatblueheron-copy.png");
    });

//sputzie
    $("#sputzie").hover(function(){
        console.log("sputz6");
        $("#bubbleText").html("<h2>Sparrow <font size='5'>Hey that's me!</font></h2> ");
    },
    function(){
        $("#bubbleText").html(defaultDesc);
    });

    $("#sputzie").click(function(){
        console.log("sputz6")
        var sputzie = "<h1>Sparrow</h1>\
                \
          <audio controls><source src='assets/audio/sparrowtweet.wav' type='audio/mp3'> Your browser does not support the audio element.</audio>\
          \
          <p></p>\
          That's me! I'm one of the coolest birds around. Seriously, check me out. I like to hang out with my friends in groups called 'flocks' around Pittsburgh. Some people around here call me a 'sputzie' because they're too ignorant to differentiate between small birds. The origin of the word Sputzie is thought to be the German word for sparrow, which is <i>Spatz</i>, so whatever. <p>Sparrows like me are actually carnivorous by nature, but we learned to eat other things due to our proximity to humans. Not only can we fly up to 31 MPH, we also know how to swim really fast. Check that out <a href='https://www.youtube.com/watch?v=yzglfazC5tk' target='_blank'>here.</a></p><h2>Fun Fact:</h2>I love a good dance session.<img src='assets/img/spudgiegif.gif' height='50px' width='50px'>"
        $("#text").html(sputzie);
        $("#image").attr("src", "https://i.imgur.com/NI9BeBv.gif")

    });

});




