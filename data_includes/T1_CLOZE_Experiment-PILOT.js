var shuffleSequence = seq("intro", sepWith("sep", seq("practice", rshuffle(anyOf(startsWith("ms"), startsWith("mo"), startsWith("c"), startsWith("f"))))));
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        transfer: 500,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(not natural at all)", rightComment: "(very natural)"
    },
    "Question", {
        hasCorrect: false
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: false,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var practiceItemMessage = true;

var items = [


    ["sep", "Separator", { }],

    ["intro", "Form", {
        html: { include: "CLOZE_Introduction-PILOT.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],
    
    ["sep", "Separator", { }],
    
//PRACTICE//
    ["practice", "Form", {html: 'This is the <input name="practice1" type="text" size="10" class="obligatory" />(<i>first/second/third</i>) practice item.'}],
    ["practice", "Form", {html: 'This is <input name="practice2.1" type="text" size="10" class="obligatory" />(<i>another/last</i>) <input name="practice2.2" type="text" size="10" class="obligatory" />(<i>practice/experimental</i>) item.'}], 
    ["practice", "Form", {html: 'This is the <input name="practice3.1" type="text" size="10" class="obligatory" />(<i>final/last/third</i>) <input name="practice3.2" type="text" size="10" class="obligatory" />(<i>practice/experimental</i>) item.'}],
    
    ["sep", "Separator", { }], 
    
  //Experimental Items//
  //Uncountable Substance//
    //garlic//
    ["ms4-zs", "Form", {html: 'They will need <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>garlic/garlics</i>) for the pasta they are making.'}],
    ["ms4-ds", "Form", {html: 'I was looking for <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>garlic/garlics</i>) that we bought at the store earlier today.'}],
    //dirt//
    ["ms5-zs", "Form", {html: 'Do you have <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>dirt/dirts</i>) to plant the vegetables in?'}],
    ["ms5-ds", "Form", {html: 'I think we should get <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>dirt/dirts</i>) that we took from the garden.'}],
    //ketchup//
    ["ms6-zs", "Form", {html: 'Do you want <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>ketchup/ketchups</i>) with your dinner?'}],
    ["ms6-ds", "Form", {html: 'Can you please pass <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>ketchup/ketchups</i>) to me?'}],
  //Uncountable Object//
    //luggage//
    ["mo4-zs", "Form", {html: 'The airline said that our <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>luggage/luggages</i>) was somewhere over the Pacific Ocean.'}], 
    ["mo4-ds", "Form", {html: 'They also said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>luggage/luggages</i>) had been put on the wrong flight.'}], 
    //homework//
    ["mo5-zs", "Form", {html: 'I cannot believe your teacher assigned <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>homework/homeworks</i>) for this holiday break.'}], 
    ["mo5-ds", "Form", {html: 'Do not forget that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>homework/homeworks</i>) that was assigned on Monday is due on Friday.'}], 
    //jewelry//
    ["mo6-zs", "Form", {html: 'Do you like to wear <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>jewelry/jewelries</i>) often?'}], 
    ["mo6-ds", "Form", {html: 'She said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>jewelry/jewelries</i>) at this particular store was stunning and inexpensive.'}], 
  //Countable [+prototypical]//
    //dog//
    ["c4-zp", "Form", {html: 'There is someone down the street selling <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>dog/dogs</i>).'}], 
    ["c4-i",  "Form", {html: 'I do not know if our kids are ready for <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>dog/dogs</i>) or not.'}], 
    ["c4-ds", "Form", {html: 'Do you think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>dog/dogs</i>) we saw yesterday would behave?'}], 
    ["c4-dp", "Form", {html: 'I would like to think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>dog/dogs</i>) would behave if we trained them properly.'}], 
    //window//
    ["c5-zp", "Form", {html: 'We should get <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>window/windows</i>) for the garden shed.'}], 
    ["c5-i",  "Form", {html: 'I agree. I think that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>window/windows</i>) would look very nice on the front.'}], 
    ["c5-ds", "Form", {html: 'Do you think that is a good place for <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>window/windows</i>) that we bought?.'}], 
    ["c5-dp", "Form", {html: 'Well, I really think that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>window/windows</i>) should go on the sides of the shed.'}],  
    //tree//
    ["c6-zp", "Form", {html: 'I think streets with <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>tree/trees</i>) are very beautiful.'}], 
    ["c6-i",  "Form", {html: 'I wonder if <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>tree/trees</i>) would look nice in our back yard.'}], 
    ["c6-ds", "Form", {html: 'She thinks that we should put <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>tree/trees</i>) from the garden right there.'}], 
    ["c6-dp", "Form", {html: 'Tanner said <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>tree/trees</i>) in the park looked very nice today.'}], 
  //Countable [-prototypical]//
    //sponge//
    ["cnp4-zp", "Form", {html: 'She uses <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>sponge/sponges</i>) to make sure that things get cleaned up.'}],
    ["cnp4-i",  "Form", {html: 'I saw <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>sponge/sponges</i>) under the sink earlier.'}],
    ["cnp4-ds", "Form", {html: 'What do you think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>sponge/sponges</i>) is used for?'}], 
    ["cnp4-dp", "Form", {html: 'We will need <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>sponge/sponges</i>) to clean the messes that the kids made.'}],
    //tile//
    ["cnp5-zp", "Form", {html: 'The contractor said to buy <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>tile/tiles</i>) that are made of porcelain.'}],
    ["cnp5-i",  "Form", {html: 'He had said there was <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>tile/tiles</i>) in the box that was not used.'}],
    ["cnp5-ds", "Form", {html: 'I think that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>tile/tiles</i>) will be a nice upgrade for this room.'}], 
    ["cnp5-dp", "Form", {html: 'She said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>tile/tiles</i>) were more expensive than she thought.'}],
    //pole//
    ["cnp6-zp", "Form", {html: 'Jeff said <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>pole/poles</i>) are very cheap if you buy more than 10 of them.'}],
    ["cnp6-i",  "Form", {html: 'Skye commented that there was <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>pole/poles</i>) that needed to be replaced.'}],
    ["cnp6-ds", "Form", {html: 'I think that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>pole/poles</i>) could be used as a feature in this room.'}], 
    ["cnp6-dp", "Form", {html: 'What do you think about <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>pole/poles</i>) that we have chosen to put in here?'}],
  //Flexible//
    //cake//
    ["f4-zs", "Form", {html: 'Her favorite flavor of <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cake/cakes</i>) is vanilla.  I think that is boring!'}], 
    ["f4-zp", "Form", {html: 'He siad that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cake/cakes</i>) are often ordered 3 weeks in advance!'}], 
    ["f4-i",  "Form", {html: 'The office said that we need <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cake/cakes</i>) for the party on Friday.'}], 
    ["f4-ds", "Form", {html: 'Chad liked <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cake/cakes</i>) that we got him very much.'}], 
    ["f4-dp", "Form", {html: 'Jeff said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>cake/cakes</i>) from the store yesterday were a little dry.'}], 
    //rock//
    ["f5-zs", "Form", {html: 'START <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>rock/rocks</i>) END.'}], 
    ["f5-zp", "Form", {html: 'I wonder if <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>rock/rocks</i>) would make the path more solid.'}], 
    ["f5-i",  "Form", {html: 'Should we put <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>rock/rocks</i>) a rock in the front yard?'}], 
    ["f5-ds", "Form", {html: 'I think <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>rock/rocks</i>) from the store should be used as decoration in the garden.'}], 
    ["f5-dp", "Form", {html: 'Where should <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>rock/rocks</i>) from the park be put?'}], 
    //paper//
    ["f6-zs", "Form", {html: 'The printer says that it needs <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>paper/papers</i>).'}], 
    ["f6-zp", "Form", {html: 'They were <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>paper/papers</i>) for the doc tor. I was supposed to sign them!'}], 
    ["f6-i",  "Form", {html: 'Skye needs <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>paper/papers</i>) to finish her research project.'}], 
    ["f6-ds", "Form", {html: 'They ordered <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>paper/papers</i>) that comes weekly but they have yet to receive it.'}], 
    ["f6-dp", "Form", {html: 'The company said that <input name="article" type="text" size="5" class="obligatory" />(<i>a/an/the/(none)</i>) <input name="noun" type="text" size="10" class="obligatory" />(<i>paper/papers</i>) had been destroyed in a fire.'}],
];